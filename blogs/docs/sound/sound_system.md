---
title: 文档：音频系统
date: 2025-11-22
category:
  - 音频系统
  - 开发文档
---

初步想法：

- 所有需要播放音频的地方，不直接在组件上调用音频播放，而是广播一个音频事件，包含事件种类、位置和上下文；
- 音频系统在接收到这个事件之后，根据事件的内容和上下文调用对应的音频资源并做对应处理，然后在指定位置播放。

更新：2025-11-22
系统架构已经基于 UE5 MetaSound 和 Modulation 特性进行了优化。系统职责包含：动态加载与卸载音频资源、动态播放与控制循环性声音、一过性声音和环境音、以及全局混音路由和音量调节。

## 0 声音分类

所有的音频资源使用以下基于 Gameplay Tag 的分类体系，分类结果直接关联到混音路由（Submix Routing）。

### 0.1 高层类型

所有声音分为以下四个大类，每个类别有不同的播放和管理方式。

* **WorldSound**：在 3D 世界环境中触发的，发送即忘的短声音。通过 Fire-and-Forget 方式播放。
* **NonWorldSound**：在世界环境之外触发的，发送即忘的声音（2D）。
* **LoopSound**：需要持续检测并更新的持续性声音。必须持有 `UAudioComponent` 以便更新位置或参数。
* **AmbienceSound**：由区域触发的大范围氛围声。使用 MetaSound 的内部插值逻辑来实现平滑过渡。

### 0.2 声音标签

每个声音资源都由以下标签进行分类：

* **必需标签**：
    * `Audio.Category.<CatType>`：用于区分声音的【类别】，决定位于哪个 Soundbank，以及路由到哪个 Sound Submix。
      * 类别列表：
      * `Audio.Category.UI`
      * `Audio.Category.Weapon`
      * `Audio.Category.Foley`
      * `Audio.Category.Ambience`
      * `Audio.Category.Character`
      * `Audio.Category.Prop`
      * `Audio.Category.Special`
* **可选标签**：
    * `Audio.Event.<Domain>.<Action>`：哪个物体的哪个动作触发的。
    * `Audio.Semantic.<SemType>`：音效的“感觉”。
    * `Material.<MatType>`：音效与什么材质相关。
    * `Audio.Variation.<VarType>`：属于哪个变体。
    * `Audio.Special.<SpecTags>`：特殊属性。

---

## 1 SoundBank

一个 SoundBank 是音频系统中的一个资源包，用于集中管理和路由一类音频资源。

`USoundBank`：继承自 `UPrimaryDataAsset`。

* `FGameplayTag CategoryTag`：这个 SoundBank 的类别标签。
* `FString BankName`：这个 SoundBank 的名字。
* **`USoundSubmix* DefaultSubmix`**：该 Bank 内所有音频默认发送到的子混音总线。
* `TArray<FSoundBankEntry> Entries`：这个 Bank 内所有的音频资源。
* `TMap<FGameplayTag, FSoundBankTagIndexResult>`：Tag-序号的快速索引表（运行时生成）。
* `USoundBase* MatchSound(const FSoundMatchContext& Context)`：根据上下文匹配查找音频资源。

`FSoundBankEntry`：一个 SoundBank 中的一个音频资源。

* `FGameplayTag CategoryTag`：这个资源的类别标签。
* `FGameplayTagContainer MatchingTags`：这个资源的匹配标签。
* `TSoftObjectPtr<USoundBase>`：这个资源指向的真正资产（SoundCue / MetaSound）。
* `TObjectPtr<USoundAttenuation> Attenuation`：这个资源使用的默认衰减设置，可选。
* `FName ConcurrencyGroupName`：这个资源属于哪个并发组的名称。

`FSoundMatchContext`：一个用于匹配音频资源的上下文信息。

* 匹配结果通过以下公式计算分数并排序：
    $$Score = MatchRelated - MissingRelated - 0.5 \times Extra$$

---

## 2 音频系统

`UGameplaySoundSystem` 继承自 `UGameInstanceSubsystem`，并分为四个子组件。

### 2.1 USoundResourceManager

游戏音频资源管理器。

* `TMap<FGameplayTag, TObjectPtr<USoundBank>> Banks`：所有 SoundBank 的 Entry。
* `TMap<FSoundMatchContext, TWeakObjectPtr<USoundBase>> MatchCache`：查询缓存。
* `TMap<FGameplayTag, FBankRuntimeState> BankRefInfo`：Bank 的引用计数和加载状态。
* **`TMap<FName, TObjectPtr<USoundConcurrency>> ConcurrencyMap`**：从配置加载的并发组名称到实际 `USoundConcurrency` 资产的映射表。
* **加载策略**：在 `MatchAndGetSound` 中，如果音频资源未加载就绪，则直接返回空（静音），以避免强制同步加载和卡顿。

### 2.2 UOneshotSoundManager

游戏一过性音频管理器。

* **轻量级播放**：对于大部分 `WorldSound` 和 `NonWorldSound`，直接使用 `UGameplayStatics::PlaySoundAtLocation` 等轻量级 Fire-and-Forget 接口，不创建和池化 `UAudioComponent`。
* **组件播放**：仅在声音需要附加到运动中的 Actor 上时，才从 Component 池中获取 `UAudioComponent` 并使用 `SpawnSoundAttached` 播放。
* `TArray<TObjectPtr<UAudioComponent>> AvailableComponents`：可用于附加播放的 `UAudioComponent` 池。
* `PlayOneShotSound(USoundBase* Sound, const FOneShotSoundParam& Param)`：播放一个一过性音频。

### 2.3 ULoopingSoundManager

游戏循环音频管理器。

* `FLoopingSoundHandle PlayLoopingSound(USoundBase* Sound, const FLoopingSoundEventParams& Param)`：开始播放一个循环音频，并返回 Handle。
* `UpdateLoopingSound(...)`：更换播放的音频。
* `StopLoopingSound(const FLoopingSoundHandle& Handle, float FadeOut)`：停止播放一个循环音频。
* 内部使用 `UAudioComponent` 池管理持续播放的声音。

### 2.4 UAmbienceSoundManager

游戏环境音频管理器。

* **MetaSound 驱动过渡**：环境音 MetaSound 需暴露 `TargetVolume` (float) 和 `FadeTime` (float) Input。MetaSound 内部使用插值逻辑实现平滑过渡。
* **事件驱动**：管理器不再 Tick，而是响应区域进出事件。
* **区域进入/更新**：调用 `UAudioComponent->SetFloatParameter("TargetVolume", Layer.Weight)` 和 `SetFloatParameter("FadeTime", Layer.BlendInTime)`。
* **区域退出**：调用 `SetFloatParameter("TargetVolume", 0.0f)` 和 `SetFloatParameter("FadeTime", Layer.BlendOutTime)`。
* **资源回收**：在 C++ 中使用 `FTimerManager` 设置一个 Timer，时长等于 `BlendOutTime`。Timer 结束时执行 `Stop()` 和 Component 回收。

---

## 3 混音与调节 (Mixing & Modulation)

系统使用 Sound Submix 和 Audio Modulation (Control Bus) 来实现全局混音控制和效果。

### 3.1 Submix 树状结构

在项目资源中建立 Submix 树，用于音频的汇流和 DSP 处理：

| Submix                         | 关联 Control Bus (用于音量调节) |
| :----------------------------- | :------------------------------ |
| **Master Submix**              | (无，直接输出)                  |
| ├── **SFX Submix** (音效)      | `Bus_SFX_Volume`                |
| ├── **Ambience Submix** (环境) | `Bus_Ambience_Volume`           |
| └── **Voice Submix** (语音)    | `Bus_Voice_Volume`              |

### 3.2 运行时混音实现

1.  **路由**：
    * 在播放声音时，读取对应 `USoundBank` 中的 `DefaultSubmix` 属性。
    * 确保播放的 `USoundBase` (MetaSound/SoundCue) 被路由到这个 Submix（或其子 Submix）。
2.  **音量调节**：
    * 每个主 Submix 都绑定一个 `USoundControlBus`。
    * 当玩家通过设置菜单调节音量时，C++ 代码调用 `AudioModulationStatics::SetControlBusMix` 来更新 Control Bus 的值。
    * Control Bus 会自动修改 Submix 的输出增益，实现平滑的音量过渡。