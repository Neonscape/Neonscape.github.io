---
title: 文档：交互系统
date: 2025-10-03
category:
  - 交互系统
  - 开发文档
---

## 交互类型（`EInteractionType`）

枚举。用于区分不同类型的交互。

- `ONESHOT`：一次性交互，交互一次立即结束。
- `LOOT`：战利品容器交互（只存不取）；取完则结束交互。
- `STATE_MACHINE`：状态机交互；根据状态机数据配置进行交互。
- `UI`：互动后弹出到外部UI界面的交互类型。

## 交互接口（`IInteractable`）

由所有可交互的对象和可交互组件本身实现。

- `void OnEnteringInteractArea(AActor* Instigator)`：当具有交互组件的对象进入了交互范围时调用。
- `void OnLeavingInteractArea(AActor* Instigator)`：当具有交互组件的对象离开了交互范围时调用。
- `void OnStartFocus(AActor* Instigator)`：当**玩家**开始聚焦在具有交互组件的对象上时调用；NPC不应该、也不能调用这个函数（因为NPC不存在“视线”的概念）。
- `void OnEndFocus(AActor* Instigator)`：当**玩家**结束聚焦在具有交互组件的对象上时调用；NPC的要求同上。
- `UInteractionSessionBase* GetInteractionSession()`：获取该对象对应的唯一交互Session。
- `UInputLayer* GetInputLayer()`：获取该可交互对象对应的交互输入叠加层。参见[输入系统](../input/input_mode.md)。

## 交互Session（`UInteractionSessionBase`）

由可交互对象组件自行生成的 **运行时动态对象** ，用于管理其一次交互生命周期中的数据和状态。

基类；各种不同类型的交互Session需要从此类派生出子类来提供具体实现。

- `AActor* OwningActor`：拥有该交互Session的可交互对象。
- `UInteractableComponent* OwningComponent`：拥有该交互Session的可交互组件。
- `AActor* Instigator`：正在使用该Session的对象（玩家、NPC）；当不在交互过程时为空。
- `void OnBeginSession(AActor* Instigator)`：当被聚焦时调用。
- `void OnEndSession(AActor* Instigator)`：当失焦 / 离开交互范围时调用。
- `void TerminateSession()`：当交互完成时调用；用于清理数据和状态。

### 单次交互Session（`UOneshotInteractionSession`）

- `FName Func`：要在交互对象（OwningActor）上调用的函数名

### 战利品交互Session（`ULootInteractionSession`）

- `UInventoryComponent* LootComponent`：战利品箱的物品容器组件
- `UInventoryComponent* InstigatorInventory`：互动者的物品容器组件
- `int32 Index`：当前选中物品在战利品容器中的Index
- `??? TakeItemCallback`：取走物品的回调函数；需要绑定到“拿走物品”的handler上。（问题同上）
- `??? ScrollCallback`：上下滚动的回调函数；需要绑定到在容器内上下翻动的handler上。（问题同上）

### 状态机交互Session（`UStateMachineInteractionSession`）

### UI交互Session（`UUIInteractionSession`）

- `FGameplayTag EventTag`：要广播的事件Tag
- (广播UI事件？)

## 可交互对象配置（`FInteractableConfigBase`）

配置基类，用于配置某个可交互对象的交互行为。

具体类型的交互配置从该类衍生。

**所有的交互配置类实例都应该是某个可交互Actor的静态属性，并且所有的配置项都应该能够在这个Actor面板中配置。**

- `EInteractionType Type`：交互类型。
- `UInputLayer* Input`：交互的输入层；初始化时传递给Session。
- `UInteractionSessionBase* GenerateSession()`：从当前配置生成一个交互Session。

### 单次交互配置（`FOneshotInteractionConfig`）

- `??? Callback`：交互的回调；初始化时传递给Session。
- （待定）

### 战利品交互配置（`FLootInteractionConfig`）

- （待定）

### 状态机交互配置（`FStateMachineInteractionConfig`）

- `FStateMachineInteractionData StaticData`：状态机交互的静态数据

#### 状态机交互静态数据（`UStateMachineInteractionStaticData`）

继承自`UPrimaryDataAsset`；存在于编辑器内的静态资产。

- `FName InitialNodeID`：初始节点ID
- `TMap<FName, FStateMachineInteractionNode> Nodes`：所有节点的数据

`FStateMachineInteractionNode`：单个交互节点的静态数据

- `FText NodeID`：当前交互节点ID
- `TArray<FInteractionNodeOption>`：当前交互节点可选的选项
- 音频事件、蒙太奇？

`FInteractionNodeOption`：交互节点中的某个选项

- `FText Text`：当前选项的文本
- `FName NextNodeID`：当前选项跳转到的下一个节点ID
- `FGameplayTag EventTag`：当前选项所触发的Gameplay事件Tag
- `bool bIsEndingOption`：当前选项是否为结束选项

## 可交互组件（`UInteractableComponent`）

挂载在可交互对象上的组件，用于管理其交互行为。实现`IInteractable`接口。

- `UInteractionSessionBase* CurrentSession`：该交互组件当前对应的交互Session。
- <`IInteractable`接口的所有函数>

## 一次典型的交互流程

1. 【实现了可交互接口的Actor】生成。
   1. 其上的可交互对象组件在`BeginPlay`时根据其交互配置生成一个唯一的Session，将对应的输入层动作handler初始化并绑定到对应回调（自身）上。
2. 【玩家身上的交互组件】检测到了一个【实现了可交互接口的Actor】
   1. 将这个Actor加入到可交互对象列表中
   2. 调用其上的【进入交互范围】函数以显示交互提示
3. 玩家看向了这个可交互对象（视线聚焦）
   1. 将该可交互对象的输入层以叠加层形式添加到玩家的输入模式管理器中，**传入Session作为上下文参数**
   2. 在这个对象上调用【开始聚焦】函数来更新交互提示UI、...
   3. 当玩家激活输入层中的对应Action时，输入系统调用对应Handler来实现交互
   4. 当玩家离开交互范围 / 对象失焦时，移除输入层并调用【结束聚焦】函数
