---
article: true
author: Neonscape
date: 2023-06-15
image: /assets/imgs/bgs/25.png
cover: /assets/imgs/bgs/26.png
category: 
- notes
tags:
- floyd
- floyd-warshall
- algorithm
- discrete mathematics
- notes
- shortest path problem
---

# 算法笔记：Floyd-Warshall算法

~~哦哦，哦哦哦！~~

<!-- more -->

![好看的](/assets/imgs/bgs/27.png)

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=1445545567&auto=1&height=66"></iframe>

## 算法作用
在一张有N个节点的**非负权值**图中，以`O(N^3)`的复杂度寻找每两个节点之间最短路径的长度的算法。

## 准备工作
要执行Floyd-Warshall算法，我们需要如下元素：

- 一张**不存在负权环的**，有`N`个节点的图`G`。
- 一个`N * N`大小的邻接矩阵`M`，用于表示每两个节点之间的最短距离。

## 算法步骤

0. 将`M`中的所有值初始化为+INF.
1. 枚举`G`中的所有边`<u, v, w>`（从`u`到`v`的，权值为`w`的边）；将`M[u][v]`设为`w`。
2. 从`1`到`N`枚举中间节点`K`, 对于每一个`K`：<br>从`1`到`N`枚举源节点`S`与目标节点`D`。对于每一个`<S, D, K>`，有：<br>**`M[S][D] = min(M[S][D], M[S][K] + M[K][D])`**.
3. 当该三重循环结束，`M[i][j]`即为该有向图G中节点`i`到节点`j`的最短路径。

## 正确性证明
[正确性证明（英文）](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm)

## 说明
如果一张图中存在负权环，那么该图中两点之间的最短路径不存在（可以无限次经过负权环）。
