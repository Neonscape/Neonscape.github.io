---
title: 文档：交互系统
date: 2025-10-03
category:
  - 交互系统
  - 开发文档
---



## 交互会话

### 交互会话基类（UInteractionSessionBase）

- AActor*：交互来源
- EndSession()：结束交互

### 三种交互会话子类

#### 一次性交互（UOneshotInteractionSession）

- Interact()：直接执行交互逻辑，广播交互事件并结束交互

#### 容器交互（UContainerInteractionSession）

- UItemContainerComponent*：交互来源的物品容器组件
- UItem*：当前选中的物品
- TakeItem：拿走当前选中的物品并更新【当前选中的物品、物品容器状态】

#### 状态机交互（UStateMachineInteractionSession）

- FName CurrentNodeID：当前激活的剧情节点（未交互时为初始化值）
- TMap<FName, ???>：所有剧情节点的映射

#### 状态机相关

- FInteractionNodeOption: 交互节点选项
  - FText Text：当前选项的文本
  - FName NextNode：当前选项对应的下一个交互节点
  - FGameplayTag EventTag：当前选项会触发的GameplayEvent的Tag
  - bool bIsEndingOption：当前选项是否为结束选项

## 交互接口 (IInteractable)

由可交互的对象自身实现.

- Interact(): 开始交互时调用，构建并返回一个InteractionSessionBase类型对象

## 交互组件（UInteractionComponent）

挂载在玩家角色上，负责：

- 检测周围可以触发交互的对象
- 为可交互的对象构建交互提示UI、挂载到玩家Viewport（？），并管理这些UI的状态（展开 / 收起）
- 管理“当前聚焦的”可交互对象（同一时间只能有一个对象处于聚焦状态），并将进入 / 退出交互范围事件、交互刷新事件（？）传递给交互子系统
- 捕获玩家的互动事件，并将事件传递给子系统

## 交互子系统（UGameInteractionSubsystem）

- 接收交互组件传来的交互事件
- （当不在已经进行的一个交互session中，且触发交互事件时）调用组件上的交互接口，获取对应的交互session对象，并根据session类型进行以下三种行为之一：
  - （对于单次交互来说）直接执行交互
  - （对于容器交互来说）
    - 监听玩家的翻动输入并维护容器内当前选择的对象
    - 监听玩家进一步的交互输入，调用容器和玩家物品栏的方法来完成物品的交换
  - （对于状态机交互来说）
    - 从session对象中读取当前激活的节点、解析节点中的交互选项；
    - 监听玩家的翻动输入并维护当前玩家的选择；
    - 监听玩家进一步的交互选项并执行对应的节点行为
    - 当对话session并没有结束而接收到了退出交互事件时，将session的当前状态保存至交互来源的NPC（待定）

- EventTag是怎么触发GameplayEvent的？假设某个NPC对话节点中有一个会决定后续剧情走向的选择，由它触发对应Event的流程应该是怎么样的？
- 对于NPC对话交互来说，经常需要在交互的同时播放语音和/或动画（玩家/NPC）；这又该怎么实现？
- 上文中提到的交互提示UI应该是位于交互对象上的吧？应该不是由交互组件管理的...？
- 这些交互数据又该怎么序列化成JSON、怎么加载到要交互的对象上呢？
- 请你分别以三种交互为例，演示一下玩家接近交互对象-开始交互-结束交互的完整流程。