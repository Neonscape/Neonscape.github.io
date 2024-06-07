---
article: true
author: Neonscape
date: 2023-09-14
image: /assets/imgs/bgs/20230912(1).png
cover: /assets/imgs/bgs/20230912(2).png
category: 
- notes
tags:
- data_structures
- algorithms
---

## 1.算法分析基础

<!-- more -->



[课件](./assets/docs/2.算法分析基础.pdf)

### 1.0 计算机的发展史
分析机 -> 图灵机 -> 随机存储机(RAM)

### 1.1 算法的正确性

#### 1.1.1 算法正确性分析的条件
算法的正确性分析基于数个规约`(specification)`：
- 算法执行的初始条件`(precondition)` : 输入给算法的数据应该是什么样的
- 算法执行的终止条件`(postcondition)` : 算法终止时应该达到的效果。

例：排序算法
初始条件（输入）：一个数组`A`
终止条件（输出）：`A`的更序数组，其中元素单调排列

#### 1.1.1.1 算法正确性的定义

一个算法可能是完全正确的，也可能是部分正确的。

算法的**完全**正确性的定义如下：
算法当且仅当它在任何正确的输入数据下——
- **能够停止**；
- 能够产生正确的输出。

算法的**部分**正确性定义如下：
满足以下条件的算法为部分正确的算法：
- 当算法接受到正确的输入数据时，算法 **如果停机** 则会输出 **正确的结果**。

*注意：部分正确的算法并不一定能够终止；它之所以为部分正确，是因为它在 **能够终止的那部分条件下** 能够对正确的输入数据产生正确的输出。*
*因此，永不终止的算法也是部分正确的。*
*完全正确的算法需要总是能够终止。*

#### 1.1.1.2 算法正确性的证明

证明一个算法的（完全）正确性一般分为两步：
1. 使用循环不变式`(loop invariant)`证明该算法是部分正确的；
2. 使用循环变量`(loop variant)`证明该算法总是能够终止。

> **使用循环不变式证明该算法部分正确**：
> 1. `(Initialization)`算法的某个属性在算法开始之前是正确的（初始条件正确）；
> 2. `(Maintenance)`如果某个属性在某一次循环之前是正确的，那它在这次循环之后仍是正确的；
> 3. `(Termination)`算法在结束之后的输出都满足某个属性。

*注意：如果算法的主要循环之内还有一层循环，则内循环也需要一次循环不变式的单独证明。*

> **如何找到主要的循环不变式？**
> 
> 一个好的循环不变式能够满足上述三个属性`(Initialization, Maintenance, Termination)`.
> 
> 例：插入排序算法中，有两个循环不变式：**每次循环后当前得到的数组是有序的**；**每次循环后当前得到的数组都含有原数组中的元素**。
> 
> 其中，第二个循环不变式并不满足`Termination`的条件，因此它相较于第一个来说较弱。

> **使用循环变式证明该算法能够终止**：
> 
> 1. 证明算法中的某些变量是严格递减的；
> 2. 证明这些变量的取值属于良序集(well-ordered set) - 良序集中不存在无穷的下降序列。
> 3. 因此，算法必定会终止。

其他证明算法能够终止的方式：
- 分类讨论
- 反证法
- ...

---

## 1.2算法的性能

### 1.2.1算法的复杂度
算法的复杂度一般分为两种：
- 时间复杂度：在给定的输入规模下算法运行所需的时间
- 空间复杂度：在给定的输入规模下算法运行所需的内存

我们讨论的算法复杂度一般指 **时间复杂度**。

### 1.2.2关于复杂度的讨论
- 算法的复杂度应该是一个输入规模的函数`T(n)`.
- 分析算法复杂度一般有如下原则：
  - 每个访问内存的操作消耗常数时间；
  - 每个基本操作(primitive)消耗常数时间。
  - 复合操作应该分离计算。

在衡量算法的复杂度时有时候需要引入一些和输入数据的内容有关的变量$T_i$。这些变量决定了算法的最坏、最好和平均复杂度.
此时，这些$T_i$分别取最大、最小和平均值--
$$
W(n) = \max_{x \in {X_n}}(T(x))

\\

B(n) = \min_{x \in {X_n}}(T(x))

\\

Av(n) = \sum_{x \in {X_n}} (T(x) \cdot Pr(x))
$$


### 1.2.3 渐进增长率

1. **大O表示 / $\Omicron(n)$**

> **定义**： $\Omicron(g(n)) = \set{f(n) \mid \exist c > 0, \exist n_0 > 0, \exist n \geq n_0 : 0 \leq f(n) \leq c \cdot g(n)}$.

$\Omicron(g(n))$实际上表示一系列函数的集合；正确的表示方式应该是$f(n) \in \Omicron(g(n))$.

现代也存在另外一种写法： $f(n) = \Omicron(g(n))$; 

**注意：这只是一种习惯性的写法，不能认为这是真正意义上的“等于”！！**

2. **大$\Omega$表示 / $\Omega(n)$**

> **定义**： $\Omega(g(n)) = \set{f(n) \mid \exist c > 0, \exist n_0 > 0, \exist n \geq n_0 : f(n) \geq c \cdot g(n)}$.

3. **大$\Theta$表示 / $\Theta(n)$**

> **定义**： $\Theta(g(n)) = \set{f(n) \mid \exist c_1 > 0, \exist c_2 > 0, \exist n_0 > 0, \exist n > n_0 : c_1 \cdot g(n) \leq c_2 \cdot g(n)}$.

4. **小$\omicron$和小$\omega$表示**

> **定义**：
> 
> $\omicron(g(n)) = \set{f(n) \mid \forall c > 0, \exist n_0 > 0, \exist n > n_0 : 0 \leq f(n) < c \cdot g(n)}$.
>
> $\omega(g(n)) = \set{f(n) \mid \forall c > 0, \exist n_0 > 0, \exist n > n_0 : f(n) > c \cdot g(n)}$.
>

### 1.2.4 渐进增长率的计算方法

多项式的复杂度函数通常容易计算增长率；但部分函数无法直接计算出它的增长率。

对于这种函数，我们通常通过**极限**的方式求复杂度。

> $\lim_{n \to \infty} \frac{f(n)}{g(n)} = 0 \Rightarrow f(n) \in \Omicron(g(n))$
>
> $\lim_{n \to \infty} \frac{f(n)}{g(n)} = \infty \Rightarrow f(n) \in \Omega(g(n))$
>
> "Stirling's Formula" : $n! ~ \sqrt{2 \pi n} \cdot (\frac{n}{e})^n$

> 一般暴力算法的复杂度为指数级。
>
> 假如一个算法的复杂度为多项式复杂度，那么称这个算法为 **有效的**， 称这个问题为 **易解** 的。