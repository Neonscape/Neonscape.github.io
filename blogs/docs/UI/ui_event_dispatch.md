---
title: 文档：UI数据绑定【已过时】
date: 2025-09-26
category:
  - UI
  - 开发文档
---

**以下所有内容均已过时，请参照新的UI系统和事件系统进行UI构建**。

当前UI的更新机制如下：

- 对于数据源：
  - 定义用于分发事件的`Event Dispatcher`
  - 蓝图下直接在细节面板中`Event Dispatchers`中定义即可。
  - `C++`下使用`DECLARE_DYNAMIC_MULTICAST_DELETATE(_XXXParam)`全局宏来定义一个`Dispatcher`。
- 对于UI组件：
  - 初始化时：
    - 获取数据源组件
    - 将相关更新函数绑定到数据源组件对应的`Dispatcher`上

> 注意：这样将会导致数据源组件被常加载，在使用插件模块的组件上可能会发生加载顺序问题。
