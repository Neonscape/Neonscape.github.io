---
title: 第六~九周：25/10/22~25/11/18
date: 2025-11/12
category: 开发记录
---

真的没有人类了，一个ALS搞了三周才初步能用

## 开发内容

- 参照ALS的基础运动系统，感谢[ALS-Refactored](https://github.com/Sixze/ALS-Refactored)对于ALS的重构

## 踩的坑

- 关于根运动：ALS中用到根运动的一共有两处，一处是Mantle，另一处是Roll。
  - 对于Mantle来说，ALS使用了一个自定义的RootMotionSource来直接从动画中提取根运动并直接应用到角色Movement上的；因此对于Mantle动画来说，**不需要为它启用根运动**！如果为Mantle动画再启用根运动的话Mantle传递给动画蓝图的根运动会和手动应用的根运动产生冲突。
