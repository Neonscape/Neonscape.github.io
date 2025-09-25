---
title: 第二周：25/9/22 ~ 25/9/29
date: 2025-09-22
category: 开发记录
---

## 开发内容

- 基于Event Dispatcher的UI事件广播机制
- 虚拟时间历法、游戏时间子系统

## 踩的坑

编辑器崩溃次数：7

- 在使用MVVM插件的时候，不推荐在**ViewModel窗口**开着的时候编辑ViewModel，**非常非常非常容易崩溃**。
- 还是别用MVVM了吧，真的是他妈的一堆问题
- 改用Character蓝图类上的EventDispatchers来广播UI事件。
- 不要在角色蓝图中用到相关Event的时候改Event的签名，一定会崩溃。
- 不要在project settings开着的时候编辑DeveloperConfig的内容，有很高概率崩溃。
- RetainerBox有时候会阻止内部的TextBox更新，只要在TextBox更新时调用RetainerBox的Request Render即可解决。

## 计划

- 修正冲刺的输入问题
