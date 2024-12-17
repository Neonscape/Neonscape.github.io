---
article: true
author: Neonscape
date: 2024-06-20
image: /assets/imgs/bg2/101502157_p0.jpg
cover: /assets/imgs/bg2/121033528_p0.png
category:
  - notes
tags:
  - Probability & Statistics
---

# 数据科学基础 课程笔记

## 第二章 随机变量

### 随机变量

给定概率空间$(\Omega, \Sigma, Pr)$，一个该概率空间上的随机变量$X$是一个函数$X: \Omega \rightarrow \mathbb{R}$，满足条件

$$
\begin{aligned}
    \forall x \in \mathbb{R}, \left\{\omega \in \Omega | X(\omega) \leq x\right\} \in \Sigma
\end{aligned}
$$
（也就是说，该随机变量的所有事件都在事件空间之中——又被称为 $\Sigma$-可数 ）。

- $X \leq x$ 表示事件 $\{\omega \in \Omega | X(\omega) \leq x\}$.
- $X > x$ 表示事件 $\{\omega \in \Omega | X(\omega) > x\}$.
- $X \in S (\text{其中}S \subseteq \mathbb{R}\text{是任意数量左开右闭区间}(y, x]的并和交)$ 表示事件 $\{\omega \in \Omega | X(\omega) \in S\}$（所有满足随机变量取值在区间内的事件的集合）.

### 累积分布函数

随机变量$X$的累积分布函数$F_X: \mathbb{R} \rightarrow [0, 1]$由下式给定：

$$
F_X(x) = Pr(X \leq x)
$$

（也就是说，使得随机变量从负无穷大到x的所有事件的概率之和。）

$F_X$有两个性质：

- 单调递增
- 有界（$[0, 1]$）

### 连续随机变量

一个随机变量被称为连续随机变量，当且仅当它的累积分布函数可以表达为

$$
F_X(y) = Pr(X \leq y) = \int^{y}_{-\infty}f_X(x)dx
$$

其中，$f_X$是**可积的**概率密度函数。

### 随机向量、联合累积分布函数、联合质量函数、边际分布

- 随机向量：$\bold{X} = (X_1, X_2, \dots, X_n)$;其中每个$X_i$都是定义在概率空间$(\Omega, \Sigma, Pr)$上的随机变量。
- 联合累积分布函数：$F_\bold{X}: \mathbb{R}^n \rightarrow [0, 1]$
  - $F_\bold{X}(x_1, x_2, \dots, x_n) = Pr(X_1 \leq x_1 \cap \dots \cap X_n \leq x_n)$.
- 联合质量函数：适用于**离散随机变量**。
  - $p_\bold{X}(x_1, x_2, \dots, x_n) = Pr(X_1 = x_1 \cap \dots \cap X_n = x_n)$.
- **边际分布**：$(X_1, X_2, \dots, X_n)$中， $X_i$的边际分布为
  - $(p_{X_i}(x_i)) = \underset{x_1, \dots, x_{i-1}, x_{i+1}, \dots, x_n}{\sum}p_{(X_1, X_2, \dots, X_n)}(x_1, x_2, \dots, x_n)$
  - （将某个变量的所有可能取值加起来，从而达到了将该变量“边际化”的效果。）

### 常见的离散随机变量

- 伯努利试验（扔硬币）
- 二项分布（$n$次互相独立的伯努利试验的结果分布）
- 几何分布（第一次得到特定结果时的试验总次数）
  - 具有**无记忆性**：未来发生的事件和之前的实验结果无关
  - 唯一一个具有该性质的离散分布
  - 期望为$\frac{1}{p}$
- 负二项分布（在得到$r$次成功结果前的失败次数）
  - $p_X(k) = {{k+r-1} \choose k}(1-p)^kp^r = (-1)^k{-r \choose k}(1-p)^kp^r$
  - 期望为$\frac{r(1-p)}{p}$
- 超几何分布（从已知数量的N个物体中**无放回的**抽取M次，其中成功的次数）
  - $p_X(k) = {M \choose k}{N-M \choose n-k}/{N \choose n}; k = 0, 1, \dots, n$
  - 期望为$\frac{nM}{N}$
- 多项式分布（每次实验有$m$个结果，每个结果的概率为$p_i$）
  - $p_{(X_1, X_2, \dots, X_M)}(k_1, k_2, \dots, k_m) = \frac{n!}{k_1!k_2!...k_m!}p_1^{k_1}p_2^{k_2}...p_m^{k_m}$
- 泊松分布
  - $X$取值为$\{0, 1, 2, \dots \}$
  - $p_X(k) = e^{-\lambda}\frac{\lambda^k}{k!}$.
  - 是良定义的（在自然数集上和为1）
  - $X \sim Pois(\lambda)$ - “X遵循参数为$\lambda$的泊松分布”
  - 期望为$\lambda$

### 构造随机变量的方式

- 随机变量的函数
  - 两个独立随机变量的和
    - $$
        \begin{aligned}
            p_{X+Y}(z) &= Pr(X + Y = z) = \underset{x}{\sum}Pr(X = x \cap Y = z - x)
            \\
            &= \underset{x}{\sum}p_X(x)p_Y(z - x) = \underset{y}{\sum}p_X(z-y)p_Y(y)
        \end{aligned}
    $$
    - 相当于定义了两个质量函数之间的**卷积**：$p_{X+Y} = p_X *p_Y$.