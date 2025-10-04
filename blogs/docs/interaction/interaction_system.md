---
title: 文档：交互系统
date: 2025-10-03
category:
  - 交互系统
  - 开发文档
---

## 交互会话

### 交互会话基类（UInteractionSessionBase）

- 存储交互的发起者和交互对象。
- 提供两个虚函数：
  - `Initialize`：初始化交互会话。
  - `EndSession`：结束交互会话；（可选：传入交互结束的原因，对交互进行处理（存储 / ...））

### 三种交互会话子类

#### 一次性交互（UOneshotInteractionSession）

- `OnInteract`：绑定的交互逻辑委托
- `Interact()`：直接执行交互逻辑，广播交互事件并调用EndSession结束交互

#### 容器交互基类（UContainerInteractionSessionBase）

- `UItemContainerComponent*`：交互来源的物品容器组件

派生子类：

- `ULootContainerInteractionSession`：用于奖励箱等只取不存容器的交互（物品掉落也属于这种情况）
  - `UItem* SelectedItem`：当前选择的物品
  - `TakeItem`：拿走当前选择的物品
  - `TakeAllItems`：拿走所有物品
- `UStorageInteractionSession`：用于储存箱等可取可存容器的交互
  - `UVendorInteractionSession`：用于商贩等需要附加条件的可存可取交互（如购买、出售等）
  - `UItemContainerComponent* InstigatorInventory`：玩家的背包

#### 状态机交互（UStateMachineInteractionSession）

- `FInteractionData`：状态机交互的静态数据
  - `FName InitialNodeID`：本次交互的初始节点
  - `TMap<FName, FInteractionNode>` InteractionNodes：所有的交互节点
- `FInteractionNode`：单个交互节点数据
  - `FText NodeID`：当前交互节点ID
  - `TArray<FInteractionNodeOption>`：当前交互节点可选的选项
  - 音频事件、蒙太奇？
- `FInteractionNodeOption`：交互节点中的某个选项
  - `FText Text`：当前选项的文本
  - `FName NextNodeID`：当前选项跳转到的下一个节点ID
  - `FGameplayTag EventTag`：当前选项所触发的Gameplay事件Tag
  - `bool bIsEndingOption`：当前选项是否为结束选项

## 交互接口 (IInteractable)

由可交互的对象自身实现.

- `CanInteract`：判断交互者当前是否可以和其进行交互。
- `BeginInteract`：交互开始时调用：返回一个UInteractionSessionBase。
- `OnBeginFocus`：可交互组件被玩家聚焦时调用，负责更新组件上的UI提示。
- `OnEndFocus`：同上。

## 交互组件（UInteractionComponent）

挂载在玩家角色上。

- `TArray<AActor*> OverlappingInteractables`：当前检测范围内的所有可交互对象。
  - 检测并更新交互对象列表。
  - 当某个对象不再可交互时，发送通知给交互子系统。
- `AActor* FocusedInteractable`：当前聚焦的可交互对象。
- `Tick()`：
  - 更新当前聚焦的可交互对象。
  - 当聚焦在交互对象上时，将交互映射上下文添加到输入子系统（覆盖正常按键输入）；
  - 当失焦时，移除上文添加的映射上下文。并发送失焦事件给交互子系统。
- `HandleInteractionInput`：接收玩家在聚焦可交互对象时的相关输入事件，并转发给交互子系统（在蓝图中实现）。

## 交互子系统（UGameInteractionSubsystem）

- `UInteractionSessionBase* CurrentSession`：当前正在进行的交互会话
- `TryBeginInteraction`：当正在进行的交互会话为空时，尝试和一个新的对象开始交互。
- `EndCurrentInteraction`：结束当前正在进行的交互（如有）；（可选：传入结束原因以便做对应处理）
- `RelayInputToSession`：将Component发来的交互事件转发至当前交互会话进行处理。
