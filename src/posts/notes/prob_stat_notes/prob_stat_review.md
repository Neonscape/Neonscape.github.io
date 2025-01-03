---
article: true
author: Neonscape
date: 2025-01-03
image: /assets/imgs/202412/202412_6.jpg
cover: /assets/imgs/202412/202412_5.png   
category:
  - notes
tag:
  - Probability & Statistics
---

# 概率论 复习

## 一 样本空间

- 样本空间：实验所有可能结果的集合
  - 其中，每个结果都是样本空间中的一个样本 / 基本事件
  - 样本空间中的任何一个子集都是一个事件。

## 二 $\sigma$-代数

给定一个集合$X$，若其 **子集族** $\mathcal{F}$满足以下条件，则称其为$X$上的$\sigma$代数：

- 包含全集：$X \in \mathcal{F}$。 注意：全集作为一个 **元素** 包含在其中。
- 对补集运算封闭；
- 对可数个集合的并运算封闭。

关键性质：

- 包含空集
- 对于可数集合的交运算也封闭。
- 对于差集运算也封闭。

## 三 条件概率

### 定义

$$
Pr(A | B) = \frac{Pr(A \cap B)}{Pr(B)}
$$

### 链式法则

$$
Pr\left(\bigcap_{i = 1}^{n}A_i\right) = \prod_{i = 1}^{n}Pr(A_i | \cap_{j < i} A_j)
$$

形式化来说，可写成：

$$
Pr\left(A_1 \cap A_2 \cap \dots \cap A_n\right) = Pr(A_1) \cdot Pr(A_2 | A_1) \cdot Pr(A_3 | A_1 \cap A_2) \cdot \dots \cdot Pr(A_n | A_1 \cap A_2 \cap \dots \cap A_{n - 1}).
$$

### 全概率公式

$$
P(A) = \sum_{i = 1}^{n} P(A | B_i) P(B_i) = \sum_{i =1}^{n}Pr(A \cap B_i)
$$

将某个事件的概率划分为几个互斥事件下的条件概率之和。

### 贝叶斯公式

$$
\begin{aligned}
  Pr(B | A) &= \frac{Pr(B)Pr(A | B)}{Pr(A)}
\end{aligned}
$$

$$
\begin{aligned}
  Pr(B_i | A) &= \frac{Pr(B_i)Pr(A | B_i)}{\sum_{j = 1}^{n}Pr(B_j)Pr(A | B_j)}
\end{aligned}
$$


## 四 独立性

若$A$和$B$相互独立，则：

$$
Pr(A \cap B) = Pr(A)Pr(B)
$$

若有一组事件$J = \set{A_1, A_2, \dots, A_n}$满足如下等式：

$$
\begin{aligned}
Pr\left(\bigcap_{i \in J}A_i\right) = \prod_{i \in J}Pr(A_i)
\end{aligned}
$$

则称这一组事件为**相互独立**。

若有一组事件$J = \set{A_1, A_2, \dots, A_n}$，它的 **任意有限子集$J$** 满足以下式子：

$$
\begin{aligned}
\forall i, j, i \neq j, \quad Pr\left(A_i \cap A_j\right) = Pr(A_i)Pr(A_j)
\end{aligned}
$$

则称这一组事件为**两两独立**。

互相独立的事件必定两两独立，两两独立的事件不一定互相独立。

## 五 离散和连续随机变量

### 累积分布函数

累积分布函数（Cumulative Distribution Function，CDF）用于描述一个随机变量X取小于或等于某个值的概率。数学表达形式为：

$$
F(x) = Pr(X \leq x)
$$

其中，$F(x)$是累积分布函数，$X$是随机变量，$x$是任意实数。

有如下性质：

- $\lim_{x \to -\infty}F(x) = 0, \lim_{x \to +\infty}F(x) = 1$
- 单调递增

如果某个CDF能够被表示为某函数从负无穷到x的积分，则称该随机变量为**连续随机变量**；其概率密度函数为CDF的导数。

### 概率质量函数

概率质量函数（Probability Mass Function，PMF）用于描述离散随机变量取某个值的概率。数学表达形式为：

$$
p(x) = Pr(X = x)
$$

其中，$p(x)$是概率质量函数，$X$是离散随机变量，$x$是随机变量可能的取值。

有如下性质：

- $p(x) \geq 0$
- $\sum_{x} p(x) = 1$

### 不同的概率分布

- 古典概型（离散均匀分布）
- 伯努利分布（抛硬币）
- 二项分布（一系列伯努利试验中成功的数量）
- 几何分布（第一次成功时的实验数）
  - 期望$\frac{1}{p}$, 方差$\frac{1-p}{p^2}$
  - 无记忆性：$Pr(X > s + t | X > s) = Pr(X > t)$
  - 唯一离散无记忆分布
- 负二项分布（达到指定次数成功时的失败数）
  - 期望$r\frac{1 - p}{p}$, 方差$r\frac{1-p}{p^2}$
  - pmf: $p(x) = \binom{x + r - 1}{r - 1}p^r(1 - p)^x = (-1)^k\binom{-r}{k}(1-p)^k p^{r}$
- 超几何分布（从有限样本中不放回的抽取一定数量，其中正面样本的数量）
  - pmf: $p(X = x) = \frac{\binom{N}{x}\binom{M}{n - x}}{\binom{N}{n}}$
- 泊松分布（在固定时间 / 空间内，某事件发生次数的离散分布）
  - pmf: $p(X = x) = \frac{\lambda^x e^{-\lambda}}{x!}$
  - 期望：$\lambda$
  - 泊松随机变量的和也满足泊松分布
- 多项分布：有多种结果的二项分布

### LOTUS定理

$$
E[g(X)] = \int_{-\infty}^{\infty} g(x)f(x)dx
$$

$$
E[g(X)] = \sum_{x} g(x)p(x)
$$

无需知道函数的分布便能求出函数的期望。
