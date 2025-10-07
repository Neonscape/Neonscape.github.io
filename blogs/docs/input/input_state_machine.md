---
title: 文档：输入模式状态机
date: 2025-10-08
category:
  - 输入
  - 开发文档
---

## 设计思路

- 所有的输入上下文现在都由位于PlayerController中的输入模式状态机来集中管理。
- 输入模式状态机持有并管理一系列`<enum, TArray<InputDataEntry>>`。
- 所有的输入和绑定都提前在编辑器中配置好了，并在游戏运行时绑定到对应的事件中。
- PlayerController只向外暴露更换输入模式的接口，并根据输入模式状态机中的配置来处理输入。

## `InputDataEntry`

一组输入数据。

- `UInputMappingContext* Mapping`: 映射上下文。
- `TArray<UInputAction*> Actions`：映射上下文中使用到的所有输入动作。
- `int32 Priority`：当前映射上下文的优先级。
