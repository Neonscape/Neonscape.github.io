---
title: 文档：事件系统
date: 2025-10-04
category:
  - 事件系统
  - 开发文档
---

事件系统用于订阅和发布一系列游戏全局范围的游戏事件。

系统间的通信遵循三层模型：

- 高层语义事件（GameplayTag）：这一层的实现只需要关心“发生了什么事情”。
- 事件上下文（Context）：这一层关心“事件具体是怎么发生的”；它通过多种派生的Context对象来存储事件相关数据（如音频资源ID、动画资源ID、...）
- 低层执行：这一层关心“应该怎么处理这个事件”。它们从事件上下文中提取数据并执行对应的操作。

## UGameEventSubsystem

贯穿游戏全局的事件总线。

- `Broadcast(FGameplayTag EventTag, UGameEventContext* Payload)`：将Gameplay事件排队至事件队列中以待转发。
- `RegisterListener(FGameplayTag EventTag, Callback)`：注册对于某个FGameplayTag事件的监听器。
- `UnregisterListener(FGameplayTag EventTag, Callback)`：取消注册某个FGameplayTag事件的监听器。

## UGameEventContext

游戏事件的上下文基类，用于存储事件相关的数据。

派生出多个基类以实现多态。
