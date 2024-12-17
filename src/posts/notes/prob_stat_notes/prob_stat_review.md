---
article: true
author: Neonscape
date: 2024-12-14
image: /assets/imgs/bg2/101502157_p0.jpg
cover: /assets/imgs/bg2/121033528_p0.png
category:
  - notes
tag:
  - Probability & Statistics
---

# 数据科学基础 复习

<!--more-->

## 一 概率空间、$\sigma$-代数

### $\sigma$-代数

$\sigma$-代数 $\mathcal{F}$ 是一个集合的集合，满足以下条件：

1. $\emptyset \in \mathcal{F}$
2. $\mathcal{F}$ 是闭包的，即如果 $A \in \mathcal{F}$，则 $A^c \in \mathcal{F}$。
3. $\mathcal{F}$ 是可列可并的，即如果 $A_i \in \mathcal{F}$，则 $\bigcup_{i=1}^\infty A_i \in \mathcal{F}$。

例：

- $\Sigma = 2^\Omega$
- $\Sigma = \set{\empty, \Omega}$
- $\Sigma = \set{\empty, A, A^c, \Omega} \text{ for any } A \subseteq \Omega$

以上均是$\Omega$上的$\sigma$-代数。

:::warning 误区

“任意一个自然数是偶数的概率为$\frac{1}{2}$”的说法是 **错误的**。

有限集合和无限集合上的概率计算方法不同：

- 有限集合可以用事件的数量除以事件的总数量来计算；
- 无限集合中，概率的计算是通过概率测度函数完成的（总事件数量是无限的，无法使用上述的除法方法）。

然而，自然数是一个 **可数无限集合**，不存在其上的均匀分布，因而无法定义一个合适的概率测度（如果有的话，每一个元素的测度都是0；但无限个0的和也是0，不满足概率测度的定义）。

:::

:::info 可数性 和 有 / 无限性

一个 **可数** 的集合是一个能够和自然数集建立一一映射的集合；每个元素都能被分配一个唯一的自然数。

一个 **无限** 的集合是含有无穷多个元素的集合；集合中的元素无法被全部列举出来。

例子：

- 可数无限集： 自然数集、整数集、有理数集
- 不可数无限集： 实数集、实数区间、...

:::

### 布尔不等式

::: info 集合上界（布尔不等式）

对于事件$A_1, A_2, \dots, A_n \in \Sigma$, 有如下性质：

$$
Pr\left(\bigcup_{i = 1}^{n}A_i\right) \leq \sum_{i = 1}^{n}Pr(A_i)
$$

（也就是，事件的并的概率 小于等于 事件的概率的和）

:::

::: info 布尔-邦费罗尼不等式 （有限个事件的并的概率）


对于某个正整数$k$和若干事件$A_1, A_2, \dots, A_n$, 定义

$$
\begin{aligned}
    S_1 &= \sum_{i = 1}^{n} P(A_i)\\
    S_2 &= \sum_{1 \leq i < j \leq n} P(A_i \cap A_j)\\
    &\vdots\\
    S_k &= \sum_{1 \leq i_1 < i_2 < \dots < i_k \leq n} P(A_{i_1} \cap A_{i_2} \cap \dots \cap A_{i_k})\\
\end{aligned}
$$

则有如下不等式：

当$k$是奇数时： （加多了）

$$
\begin{aligned}
    \text{Pr}\left(\bigcup_{i = 1}^{n}A_i\right) &\leq S_1 - S_2 + S_3 - \dots + (-1)^{k+1}S_k\\
\end{aligned}
$$

当$k$为偶数时，有 （减多了）

$$
\begin{aligned}
    \text{Pr}\left(\bigcup_{i = 1}^{n}A_i\right) &\geq S_1 - S_2 + S_3 - \dots + (-1)^{k+1}S_k\\
\end{aligned}
$$

:::

### 错排问题

**错排问题** 研究的是，将一个给定的元素重新排列，使得每个元素都不在原来的位置上的 排列方式有多少种 / 概率是多少。

错排问题一般使用递推关系解决。

> 设 $D_n$ 表示 $n$ 个元素的错排数，假设$n$排在了第$k$位（$n \neq k$），对于第$k$个元素进行讨论：
>
> - 当$k$排在了第$n$位，则剩下的元素有 $D_{n - 2}$种错排方式；
> - 假设第$k$个元素并没有排在第$n$位，则剩下的元素有$D_{n - 1}$种错排方式（将$k$与其他元素一起计算）
> - 由于$k$一共有$n - 1$种取法，因此有关系$D_n = (n - 1)(D_{n - 2} + D_{n - 1})$.
>
> 记$D_n = n!M_n$.
>
> 上式可转化为
> $$
\begin{aligned}
    & n!M_n = (n - 1)((n - 2)!M_{n - 2} + (n - 1)!M_{n - 1})\\
    \xLeftrightarrow{} & nM_n = M_{n - 2} + (n - 1)M_{n - 1}\\
    \xLeftrightarrow{} & n(M_n - M_{n - 1}) = -(M_{n - 1} - M_{n - 2})\\
    \xLeftrightarrow{} & \frac{(M_n - M_{n - 1})}{M_{n - 1} - M_{n - 2}} = -\frac{1}{n}
\end{aligned}
> $$
> 因此有
> $$
\begin{aligned}
    M_n - M_{n - 1} &= (-1)^n\frac{1}{n!}
\end{aligned}
> $$
> 拓展得
> $$
\begin{aligned}
    M_2 - M_1 &= -\frac{1}{2!}\\
    M_3 - M_2 &= \frac{1}{3!}\\
    &\vdots\\
    M_n - M_{n - 1} &= (-1)^n\frac{1}{n!}
\end{aligned}
> $$
> 将上述式子累加得
> $$
\begin{aligned}
    & M_n = \sum_{i = 2}^{n}(-1)^i\frac{1}{i!}\\
    \xLeftrightarrow{} & D_n = \sum_{i = 2}^{n} (-1)^i \frac{n!}{i!}\\
\end{aligned}
> $$
> 又因为$n$个元素共有$n!$种排列方式，因此$n$个元素全部错排的概率为$M_n$，且有
> $$
\lim_{n \to +\infty} M_n = \frac{1}{e}.
> $$

## 二 条件概率

:::info 用不平等的概率构造平等的结果

假设现在有一枚硬币，其每次抛掷出现正面的结果为$p$（**未知**），则可通过如下结果构造两个等概率的结果：

连续抛掷两次，统计两次投掷出现的结果。

- `HH` / `TT`: 重新进行实验
- `HT` : 结果1
- `TH` : 结果2

:::

### 贝叶斯定理

$$
\begin{aligned}
    &P(A|B) = \frac{P(B|A)P(A)}{P(B)}
\end{aligned}
$$

上式中，各项定义如下：

- $P(A|B)$: A的 **后验概率** （已知发生某个事件后的概率）
- $P(B|A)$: B的 **后验概率**
- $P(A)$ / $P(B)$: A / B 的 **先验概率** （在相关信息未知的情况下发生的概率）

### 全概率定理

$$
\begin{aligned}
    &P(A) = \sum_{i = 1}^{n}P(A \cap B_i) = \sum_{i = 1}^{n} P(A|B_i)P(B_i)
\end{aligned}
$$
