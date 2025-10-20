---
title: 文档：输入系统帮助
date: 2025-10-04
category:
  - 输入系统
  - 帮助
  - 开发文档
---

## 需要添加新的输入模式？

- 创建需要的`InputAction`、`InputMappingContext`和对应的`InputActionHandler`类。
- 创建需要的`InputLayer`并填充`Action`, `ActionMapping`和`InputActionHander`。
- 在`EInputMode`中添加对应的输入模式枚举。
- 在`InputModeConfig`里面添加对应的输入模式配置。

## 需要添加新的输入层？

- 创建需要的`InputAction`和`InputMappingContext`。
- 为每种`InputAction`创建一个`Handler`实例。
  - 在`Handler`实例中可以访问`GetContext`函数以获取传入的上下文，并Cast成对应类型的对象。
- 创建一个新的`InputLayer`数据资产并在其中填充对应的`Action`, `ActionMapping`和`InputActionHandler`。
- 获取玩家控制器上的输入管理器并调用`AddOverlayLayer`函数；传入前文对应的上下文对象。
