---
title: 第二周：25/9/22 ~ 25/9/29
date: 2025-09-22
category: 开发记录
---

## 开发内容

## 踩的坑

编辑器崩溃次数：3

- 在使用MVVM插件的时候，不推荐在**ViewModel窗口**开着的时候编辑ViewModel，**非常非常非常容易崩溃**。
- 还是别用MVVM了吧，真的是他妈的一堆问题
- 改用Character蓝图类上的EventDispatchers来广播UI事件。

## 计划

- 修正冲刺的输入问题
