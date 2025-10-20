---
title: 文档：输入模式
date: 2025-10-08
category:
  - 输入
  - 开发文档
---

## 设计思路

所有输入上下文现在都由位于BasePlayerController中的输入模式管理器（`InputModeManager`）管理。

这个机制将游戏的所有输入分为【固定的输入模式 + 动态叠加层】来进行管理。

### 输入层`UInputLayer`

- `FName LayerName`：输入层的名字；暂时未使用。
- `UInputMappingContext* Context`：该层所对应的输入上下文映射。
- `int32 Priority`：该层（上下文映射）的优先级。
- `TMap<UInputAction*, UInputActionHandler*[]>`：上下文映射中使用的每个`InputAction`和对应的处理回调。

### 输入动作回调`UInputActionHandler`

- `ETriggerEvent TriggerType`：当前回调应该在哪个触发事件中调用（如：触发时？开始时？结束时？）
- `void HandleInput(const FInputActionValue& Value)`：当前回调的函数体；使用回调时应当将该函数绑定到对应的输入事件上，UE会将调用自动转发到对应的`HandleInput_Implementation`实现函数上。
- `void Initialize(APlayerController* PC)`：初始化函数。回调在创建后必须先初始化才能保证被正常使用（能够正确的访问世界上下文）。

### 输入模式定义`FInputModeDefinition`

- `EInputMode InputMode`：对应的输入模式枚举。
- `UInputLayer*[] InputLayers`：该输入模式所包含的（多个）输入层。

### 输入模式配置`UInputModeConfig`

配置在管理器中的输入模式数据；包含每个输入模式的定义。

### 输入模式管理器

提供三个方法：

- 设置当前输入模式
- 添加输入叠加层
- 删除输入叠加层
