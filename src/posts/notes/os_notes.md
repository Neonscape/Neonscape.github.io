---
article: true
author: Neonscape
date: 2024-06-20
image: /assets/imgs/bg_new/00095-3117391577.png
cover: /assets/imgs/bg_new/00101-142766746.png
category:
  - notes
tags:
  - Operating System
---

# 2024 春 操作系统 课程笔记

## 第一章 并发

### 1 多处理器编程

#### 阿姆达尔定律

假设程序中可被并行化部分的比例为$p$，则在有$n$个并行执行流的情况下，程序的加速比$speedp$为

$$

speedp = \frac{1}{1 - p + \frac{p}{n}}

$$

#### POSIX 线程API

- `Pthread_create (pthread_t * thread, const pthread_attr_t * attr, void * (*start_routine)(void*), void * arg)`
  - 创建线程`thread`并以参数`arg`运行函数`start_routine`.
- `Pthread_exit (void* retval)`
  - 在调用时结束调用者线程，并向`join`自身的调用者线程返回`retval`.
- `Pthread_join (pthread_t thread, void** retval)`
  - 阻塞当前线程，直到`thread`返回；返回值存放至`retval`内存中。
- `Pthread_detach (pthread_t thread)`
  - 令该线程处于分离状态，不需要也不能被`join`。**处于分离状态的线程结束后将自动释放资源（否则需要手动`join`来回收占用的资源）。**

#### 内存一致性模型

现代处理器允许指令乱序执行，来减少某些高时延访存指令的影响；然而该技术会使得多个处理器看到的访存顺序并不相同。

**内存一致性模型**（内存模型）定义了不同核心对于共享内存操作需要遵守的顺序。

- 顺序一致性模型
  - 提供了两个保证：
    - 不同核心看到的访存操作顺序一致（全局顺序）——每一个时间单位上只能有一个线程进行一次读 / 写。
    - 在全局顺序中，每个核心自己的读写操作 **与程序顺序**（代码中的顺序）**保持一致**。
- TSO (Total Store Ordering)
  - 保证对不同地址、没有依赖的[读-读，写-写，读-写]操作之间的全局可见顺序，但不保证[写-读]的全局可见顺序。
  - 为每个线程都增加一个写缓存(local write queue)；
  - 每个线程的写操作会先写到写缓存中，由写缓存写入共享内存；
  - 写缓存写入共享内存的顺序一致且符合程序顺序。
  - 每个线程的读操作会先从写缓存中读取，再从共享内存中读取，但无法读取其他现成的写缓存——因此，每个线程都最先看到自己的写操作（造成的结果），所以无法保证写-读的全局可见顺序（其他线程写入后，本线程不保证能读取到最新的值）。
- 宽松内存模型
  - 不保证任何不同地址、无依赖的访存操作之间的顺序。

### 2 互斥

#### 一些概念

- 临界区：访问共享资源的代码
- 竞态条件：多个执行线程大致同时进入临界区时，视图同时更新共享的数据结构，导致非预期的结果。

#### 临界区的解决方案

- 互斥：临界区内最多一个线程
- 行进：如果临界区内没有线程且有线程想要进入临界区，则最终会有线程进入临界区
- 有界等待：某个线程想要进入临界区的等待期限有限

#### 锁

锁的状态：

- 可用：没有线程持有锁
- 占用：某个线程正持有锁，处于临界区

#### Peterson 算法

```C++
int intents[2] = {0, 0}; //进⼊意图
int flag = 0; // 当前是谁可以获得锁 (thread 0 or 1)
int self = i; //当前的线程ID，0， 1中的⼀个

void lock() 
{
 intents[self] = 1; // 标记⾃⼰想要进⼊临界区
 flag = self; //轮转到下⼀位
 while ( (intents[(self + 1)%2] == 1) //别⼈想不想要进来
 && (flag == self) ); // 如果别⼈也想进来，就再看看是否当前“轮转”到⾃⼰了
}
void unlock() 
{
  intents[self] = 0; //标记⾃⼰不再想要进⼊临界区
}
```

#### `cmpxchg`

`cmpxchg`是x86体系下的一条原子指令。

```asm
cmpxchg %dest, %src
```

- 如果`%dest == %src`: 将`%src`的值赋予`%dest`，设置`ZF`标志位
- 如果`%dest != %src`: 将`%dest`的值赋予`%AL`, 清除`ZF`标志位

#### 排号自旋锁

- 每个申请排队自旋锁的线程都会获得一个排队号（ticket）。
- 至多只有一个线程拥有自旋锁。
- 当持有自旋锁的线程释放锁时，它会将自身的ticket加1，并将其作为下一个可获得锁的ticket。
- 每个线程都会不断检查当前可服务的ticket是否等于自己的ticket。如果相等，则该线程就获得了自旋锁。
- **适用于临界区较短的情况**。

### 3 同步

#### 条件变量

用于标记某个同步条件的变量（满足 / 不满足），有两个方法：

- `cond_wait`: 阻塞当前线程，等待某个条件变量满足。
- `cond_signal`: 唤醒一个阻塞在某个条件变量上的线程（当前条件已经满足）。
- `cond_broadcast`: 唤醒所有阻塞在当前条件变量上的线程，每个线程依据自身的条件判断是否继续阻塞。

#### Hansen / Mesa 语义 & Hoare 语义

Hansen / Mesa 语义实现的条件变量在调用者的`cond_signal`和转移到被唤醒者的`cond_wait`不是原子的，而Hoare语义的实现不是原子的。

Hoare语义较简洁（理论友好）但不好实现，因此大多数实现都使用 Hansen / Mesa 语义。

#### 条件变量的使用经验法则

- 除了条件变量外，还得有共享的状态用来进行判定是否可以“生产”或者“消费” （如生产-消费问题中的“缓冲栈大小”）
- 使用互斥锁来保护共享的状态以及条件变量的操作
- 在做wait/signal/broadcast 时需**要持有互斥锁**
- 每次从wait中唤醒，要重新进行条件检查（Use a while loop）
- 针对不同的条件使用不同的条件变量（除非使用broadcast）。

#### 信号量

一个与同步有关的原语，代表一个 **整数变量`sem`**；只有两种原子操作能改变该变量。

- `P()`（“检验”） / `decrease()` / `wait()` / `acquire()`:
  - 如果`sem <= 0`，阻塞当前线程
  - 否则，`sem -= 1`，继续运行
- `V()` （“自增”） / `increase` / `signal()` / `release()` / `post()`:
  - `sem += 1`;
  - 如果存在阻塞在该信号量上的线程，选择一个唤醒。

### 4 死锁

#### 死锁

多个线程形成一个等待环：所有线程都在等待其他线程的某个动作.

死锁的多种情况：

- 自死锁（A-A型）：在已经持有某把锁的情况下再次尝试获取该锁。
- 互锁（ABBA型）：线程1拿到了锁A，需要获取锁B；线程2拿到了锁B，需要获取锁A。

死锁的必要条件：

- 需要的资源互斥
  - 无锁算法（RCU，...）
- 持有某些资源并需要更多的资源（持有-等待）
  - 一开始就获取所有锁
    - 降低并发
  - 如果无法获取所有的锁，释放已经获取的锁
- 不能直接抢夺其他线程的资源（非抢占性）
  - 直接抢占
- 循环等待
  - 规定申请锁的顺序
  - （构造一个有向无环图）

#### 银行家算法

银行家算法的关键思想是判断 **未来是否可以满足**。

- 1 选择一个线程，判断其未来额外需要的最大资源数能否被系统当前持有的资源满足
  - 如果所有线程都无法达成满足，则陷入死锁条件（不可挽回）
- 2 对上述满足需求的线程，标注为未来可满足状态（存在某种分配方式可以分配足够其运行的资源——这些资源在它运行结束之后会被回收）；这样的线程是 **能够终止的**。
- 3 重复2，直到所有线程都能够终止为止；这说明存在一个分配方案，使得批准该资源申请之后所有线程的申请需求都能被满足。

**不够实用**：一般无法知道线程生命周期中的“最大需求”。

#### 死锁的动态检测

每次锁的acquire/release都记录 tid 和 lock name，动态构建锁的有向图$G(V, R)$，并assert该图没有环

- $V$：每把锁的名字
- $E$：每个线程持有某把锁$u$之后再去尝试获得某把锁$v$，就加入边$(u, v)$
- 锁的名字可以用地址来唯一绑定，也可以是锁所在的文件和行。

### 5 进程

拥有独立空间的运行实体，可以包含一个或多个线程。

需要元信息来描述、管理进程（进程控制块，由内核维护）。

#### 进程的生命周期

进程终止后资源会被操作系统回收，并且会通知父进程它的终止状态（防止父进程PCB指针指向一块被释放的内存）。

已经终止但PCB信息还没有被回收的进程称为 **僵尸进程**。

父进程对于某个子进程调用wait将会阻塞父进程本身，在子进程运行结束后将退出通知返回给父进程。

如果父进程在子进程结束之前结束，子进程会变成孤儿进程；它们随后会被`init`进程接管。

#### fork

`fork`系统调用会立即复制一份当前进程（内存和寄存器现场）作为子进程。

`fork`在子进程中会返回0，在父进程中会返回子进程的进程id；出错则会返回-1.

注意：

- fork还会复制原进程PCB中的对象，如 **打开的文件描述符** 等。
- 多线程进程fork时只会复制 **调用fork的线程**。
- fork并不会复制父进程的一切属性：只读内存（共享代码库、代码段）等不需要复制，由**页表**和父进程共享一片相同的只读内存。
- 现在的fork应用了 **写时拷贝** （允许多个进程共享同一片内存区域，当有个进程试图写入该区域时，拷贝一份副本给该进程）。

::: info 文件描述符

文件描述符是一个指向操作系统内部对象的“指针”（并非真正的指针）。

它从0开始编号（0 = stdin, 1 = stdout, 2 = stderr）.

文件描述符有如下三种操作：

- open：打开文件，返回文件描述符
- close：关闭文件，释放文件描述符
- dup：复制文件描述符（多一个访问）

文件描述符能够记忆上次访问到文件中的位置。

:::

#### exec

exec系列系统调用可以将当前进程所运行的程序 **替换** 为一个执行的新程序，并重置栈、堆和PCB中的memory mapping。

`int execve(const char *pathname, char *const _Nullable argv[], char *const _Nullable envp[])`

- `pathname`:新程序的路径
- `argv`:传递给新程序的命令行参数
- `envp`:传递给新程序的环境参数(xx=a, yy=b)，用NULL截断。

#### exit

在linux中，进程有五种退出机制：

- 正常退出
  - 从`main()`返回
  - 调用`exit()`
    - 会进行清理（关闭所有打开的流、移除临时文件、调用`atexit()`注册的函数）
  - 调用`_exit()`（不会进行清理，线程不安全）
    - 关闭该进程的所有文件描述符
    - 将所有子进程交由`init`接管
    - 向父进程发送`SIGCHLD`信号。
- 异常退出
  - 调用`abort()`（发送`SIGABRT`）
  - 信号终止（`SIGSEGV`, ...）
    - 使用`signal()`函数可以注册信号处理函数。

### 6 调度

调度是为了满足既定目标，对计算任务进行资源分配的行为。

调度指标：

- CPU利用率：CPU被进程使用的时间 / 所有CPU时间； **越大越好**。
- 公平：同等优先级的进程获得的CPU使用时间应该相等。
- 吞吐量：单位时间内完成执行的进程数；**越大越好**。
- 周转时间：某个进程需要完成的时间；**越小越好**
- 等待时间：某个进程在就绪队列，等待被执行的时间；**越小越好**。
  - 等待时间 = 周转时间 - 在CPU上执行的时间。
  - 进程可能会多次进入就绪队列中。
- 响应时间：从发出申请执行 到 **第一次**获得响应执行的时间； **越小越好**。

调度的目的是让CPU重新回到操作系统的掌控之中——

- 发生系统调用（`fork`,`exit`等）
- 某个进程阻塞（wait子进程，等待IO完成，...）
- 发生中断（IO中断、时钟终端、...）

::: info 机制和策略

在系统设计中，有一个重要的设计思想：**机制和策略分离**。

- 策略 表示系统 “**可以做什么**”。
- 机制 表示系统 “**应该如何做**”。

在已有的机制上可以思考“该机制可以满足的策略中，哪个策略最优？”

在已有的策略下可以思考“实现该策略需要怎样的机制？”

:::

调度的任务大致可以分为以下几类：

- 批处理任务的调度
- 交互性任务的调度
- 实时任务的调度

#### 批处理任务的调度

FCFS: 先来先服务

- 按照进程就绪的顺序进行调度
- 会导致 **护航效应**
  - 护航效应：短运行时间的进程排在长运行时间进程的后面，导致平均等待时间过长。

#### 交互性任务的调度

::: info 计算密集型任务 / IO密集型任务

在调度中，两类任务会被特殊对待：

- 计算密集型任务
  - 需要消耗大量CPU资源，但很少需要等待外部任务（磁盘、网络通信等）完成
- IO密集型任务
  - 大部分时间都在等待IO（键盘、硬盘、内存、...），在此期间消耗的CPU计算时间很少。

:::

##### **时间片轮转调度**（Round-Robin）

- 每个任务都会获得一段固定时间的资源。
- 如果该任务在这段时间资源内没有完成，将重新回到任务队列中。
- 时间片应该比上下文切换时间大；一般为10ms~100ms。
- 平均周转时间较长，overhead（多余开销较大）。

RR还存在一个问题：当同时运行IO密集型任务（如文字处理）和计算密集型任务（如渲染、模拟）时，IO密集型任务执行IO操作时会让出CPU；然而IO程序在让出后，即便IO任务很快完成，也必须等待操作系统重新为它分配处理器（等待计算密集型任务用完完整的CPU时间切片）。

为了解决该问题，我们需要 **基于优先级的调度**。

##### **基于优先级的调度**

- 每个进程都关联于一个优先级数。
- 每次发生调度时，将CPU分配给具有最高优先级的进程。

linux下默认的优先级：

- 实时任务：高优先级(0~99)
- 普通任务：低优先级(100~139)

::: info 老化

饿死：低优先级的进程可能永远不会执行。

解决方案：老化（随着时间的推移增加进程的优先级）。

:::

##### 多级反馈队列 (MFQ)

- 一个进程可以在各个队列（代表不同的优先级）之间移动。
- 调度器由以下参数定义：
  - 队列数量
  - 每个队列的调度算法（对不同优先级采用不同的调度办法）
  - 确定何时提升进程优先级、何时降低进程优先级的算法
  - 确认某个进程需要服务时进入哪个队列的算法

例：一个典型的多级反馈队列

- 队列：一组轮转队列，每个队列有不同的优先级。
  - 高优先级队列拥有较短的时间片（调度更精细），反之时间片较长。
- 调度器优先选择优先级最高队列中的第一个进程。
- 进程载入内存时初始在最高优先级队列中。
- 如果时间片到期，进程会降低一个级别。

在这种调度方法下，

- CPU密集型进程将下沉到时间片较长的队列——较大的时间片可以减少上下文切换的开销。
- IO密集型进程将保持在高优先级队列中（当它进行IO操作时不足以用完自身的CPU时间片，因此会保持在原位）
- 仍然存在饥饿问题
  - 如果频繁创建新进程 / 有大量交互式进程，则低优先级很少会被调度。
- 一个交互式进程可能时钟会在低优先级水平（如大型游戏等）。

#### 多核CPU调度

在多核心系统中，有两种调度方法：

- 单个处理器（主服务器）处理所有调度决策，其他处理器执行用户代码
  - 实现简单
  - 主服务器成为可能的性能瓶颈
- 对称多处理（SMP）
  - 有两种队列机制：
    - 多个CPU共享一个统一的调度队列 （有锁，低效）
    - 每个CPU维护自身的调度队列（常用）
  - 有两种负载均衡的方式：
    - 推迁移（周期性检查每个处理器的负载，过载则将任务推送至其他核心）
    - 拉迁移（空闲处理器从繁忙处理器队列中拉取等待的任务）
  - 负载均衡可能会破坏 **处理器亲和性** （该处理器的缓存存储了该线程的内存访问）。

#### 优先级反转问题

假设系统此时有两个线程: T1（低优先级，已准备好）和 T2（高优先级，还未准备好）。

此时，操作系统会首先调度 T1 运行。假设此时 T1 获取了一个自旋锁并进入了临界区。

当 T2 准备就绪时，调度器立即调度 T2 取代 T1 运行。

然而 T2 需要获取同一把自旋锁，因此开始忙碌等待；但由于 T2 运行时 T1 不会被调度，因此 T1 无法离开临界区，T2 也无法继续运行。

在这种情况下，一个高优先级任务反而受制于一个低优先级任务而无法运行。

优先级反转问题的解决方案之一是 **优先权极限和优先级继承**。

#### 优先权极限、优先权继承

优先权极限：当一个任务获取一把锁时，该任务的优先级将被提升至 和该锁关联的 优先级上限。

优先权继承：当一个任务持有一把锁时，如果其他更高优先级的任务试图获取该锁，则持有锁的任务的优先级会被提升到 该更高优先级任务的 优先级。

### 7 内存管理

#### 虚拟内存、虚拟地址

- 虚拟内存使得应用程序不再直接访问物理内存，而是使用虚拟地址访问主存；
- 应用使用虚拟地址访问时，虚拟地址会自动被硬件翻译为物理地址。
- 每个应用都有独立的虚拟地址内存空间；应用认为自己独占这一片内存空间。
- 进程被映射到的物理地址可以在运行时不断变化（动态重定位）。
- 进程之间可以进行数据共享（将不同进程的不同虚拟地址映射到同一片物理地址）
- 虚拟地址还可以构建一个“连续空间”的假象，即虚拟内存在应用程序看来是连续的，但在物理内存上可能不是连续的。

连续内存分配有两种策略：

- 固定分区
  - 不适用于需要空间很大的进程
  - 会产生内部碎片
- 可变分区
  - 会产生外部碎片（分散的小片内存空间导致的内存浪费，通常由于进程不断加载、释放所致）
    - 可以将进程终止 / 暂时交换出磁盘，以释放内存，合并形成大的空间区域
    - 可以紧缩（重排内存内容），但时间复杂度较高
  - 会产生内部碎片（较轻）

#### 分段（用户视角的内存管理）

分段机制将程序视为一组段（segment）。

段是虚拟内存空间的连续区域，也是一个逻辑单元（代码段、栈、堆、...）；按照段来分配内存。

在分段机制中，每个段独立的映射到物理内存中的一组连续地址；

- 没有特定顺序
- 不需要映射未使用的地址（消除了内部碎片）
- 不同的段可以独立变化

在分段机制中，每个进程都有一个段表，用来存储每个分段的信息。

段表中包含：

- 段基址（段的起始物理地址）
- 段界限（端的大小）

在分段机制中，虚拟地址分为 段号 + 段内地址（偏移）。

段表中还包含 **保护位**：指示程序是否有该段的读/写/执行权限。

#### 分页（更细粒度的内存管理）

在分页机制中：

- 物理内存被划分成连续等长的物理页（帧）。
- 虚拟内存也会被划分为大小相同的虚拟块（虚拟页）。
- 任意一个虚拟页可以被映射到任意一个物理页。
- 因为按照分页来分配内存，所有没有外部碎片。

分页机制中的虚拟地址：

分为 **虚拟页号** 和 **页内偏移**。

每个进程都有一个 **页表**，**每个页表项** 都包含一个 **物理页号**，用来指示每个页在物理内存中的基地址。

多级页表：将页表划分为多层，如果某级页表中的条目为空，则下一级页表无需存在。

#### TLB / 地址转换旁路缓冲

我们利用**局部性原理**，通过TLB来加速分页的地址转换。

TLB会缓存最近的地址转换。

如果需要转换的地址在TLB中存在，则直接应用转换；如果TLB未命中，则在页表中查找映射，并更新TLB。

一个典型的TLB缓存项包含：

- 虚拟页号和对应的帧号
- 有效位（转换是否有效）
  - 该“有效”和页表项中的“有效”意义不同：页表项中的有效指的是页本身是否有效，而TLB中的有效指的是转换是否正确。
- 保护位（访问权限控制）
- 修改位：页面是否被修改

::: info 局部性原理

局部性原理是指指令和数据引用的局部性。

- 时间局部性：如果某个数据被访问过，则不久的将来它可能会再次被访问
- 空间局部性：如果某个数据被访问过，则附近的数据在不久的将来也可能会被访问

:::

:::info 有效访问时间、命中率

如果已知TLB命中率$\alpha$, 内存访问时间$t$,TLB查找时间$\epsilon$，则有

$$
\text{有效访问时间}(EAT) = (\epsilon + t) \alpha + (\epsilon + 2t)(1 - \alpha)
$$

如果TLB命中，则直接获得对应的物理地址，访存一次即可；如果TLB未命中，则需要先访问页表，再访存获取数据。
:::

#### 虚拟内存

虚拟内存允许多个并发运行的进程使用大虚拟地址空间，但只将常用的页面保留在内存中（部分加载）。

这样可以

- 让程序不再受物理内存限制（程序不用完全加载进内存，可以运行更大的程序）
- 每个程序运行时占用更少的内存，可以同时运行更多程序
- 加载或交换程序到内存中所需的io更少（启动更快）

虚拟内存使用页表项中的存在 / 不存在位来跟踪哪些页面存在于物理内存中。

如果程序引用的页面在物理内存中，则直接进行地址转换；如果不在，则发生缺页异常，调用操作系统处理异常。

过程：

- 硬件陷入内核，进行上下文切换
- 系统尝试确定所需的虚拟页面
- 确定引发异常的虚拟地址，检查地址是否有效、是否有权限访问
- 找到一个空闲帧
  - 如果没有，则运行页面置换，将一个页面置换至硬盘 / ...
  - 如果所选帧是脏的，则将页面安排转移至磁盘，进行上下文切换，**暂停引发异常的进程（来等待修改写回磁盘）**。
- 系统查找所需页面的磁盘地址，并安排磁盘操作将其调入
- 当磁盘中断指示页面到达时，更新页表并将帧标记为正常状态
- 将引发缺页异常的指令恢复，并重置程序计数器
- 调度引发缺页异常的进程，进行上下文切换

处理缺页异常主要有三个活动：

- 服务中断 几百条指令
- 读取页面 大量时间
- 恢复进程 少量时间

缺页错误率：进程在内存中发现缺页异常的比率

有效访问时间$EAT$: $EAT = (1 - p) \times \text{访存时间} + p \times \text{缺页异常开销}$

#### 页面替换

当一个页面需要被换出时，需要：

- 更新页表：找到所有引用旧页面的页表项，并将其标记为不可见。
- 移除所有TLB条目
  - TLB关机：在多处理器系统中，必须从所有处理器的TLB中消除条目。
- 将页面写回磁盘(如果脏位为1的话)
- 重新启动引发陷阱的指令.

页面也可以被锁定（固定在内存中）。

操作系统中还存在页面buffering：保留一组空闲帧，以便于在需要的时候总有可用的帧。

::: note 页面替换策略

页面替换策略有如下几种：

- FIFO：使用FIFO队列来跟踪页面的老化程度，并替换最老的页面
  - Belady异常：增加帧数可能会导致命中率下降
    - 会发生在不遵守栈算法属性（先前存在的页面应该总是保留在内存中）的任何页面替换算法中。
- Optimal：替换在最长时间内不会被使用的页面
  - （理想情况，不存在实现）
- LRU：替换那些在最长时间内没有被使用的页面
  - 基于局部性原理
    - 每个页面都有一个计数器项
    - 每次页面被引用时，将时钟寄存器的值复制到寄存器中。
    - 需要更换页面时，查找最小的值。
  - 开销较大
- 近似LRU：寻找一个在最近的时钟周期内没有被引用的老页面。
  - 系统中每个页面都存在一个引用位（R）；每当页面被读取 / 写入时，将引用位置为1.
  - 如果要被替换的页面R为1，则将引用位设置为0，并将其放置在FIFO队列的末尾，检查下一个页面
  - 如果要被替换的页面R为0，则直接替换。
- 二次机会算法（时钟算法）：
  - 将所有页面帧以时钟形式放置在循环列表中。
  - 当发生缺页异常时，检查当前指向的页面：
    - 如果该页面的R = 0，则直接替换
    - 如果该页面的R = 1，则将R - 1并将指针向前移。
  - 另一种变体是N次机会算法（为每个页面增加一个扫描次数计数器，如果扫描次数等于N就替换）
- NRU：通过两个状态位（引用位，修改位）来近似LRU，为那些被修改过的页面赋予更高的优先级来减少IO负担。
  - (0, 0)：最近未使用过，未修改过（最适合替换）
  - (0, 1)：最近未使用过，但修改过；替换前需要写入磁盘
  - (1, 0)：最近使用过但未修改过（可能会被再次使用）
  - (1, 1)：最近使用过且修改过(可能会被再次使用，且需要在替换前写入磁盘)
  - 从最低编号的非空类中随机移除一个页面。
- 老化算法：保持一个软件计数器来追踪每个页面被引用的次数，并替换引用次数最小的页面
  - 在每个时钟中断时，将每个页面的计数器右移一位，并将R位添加到最左侧。
  - 计数器较大的值表示该页面最近使用过。

::: note 抖动（Thrashing）

如果一个进程没有足够的页面可用，则缺页率可能极高；此时大部分CPU时间都会被用来处理缺页异常，仅有小部分时间会用于执行真正有意义的工作。

此外，调度器还会进一步使问题加剧：缺页率高 -> CPU利用率低 -> 载入更多进程来提高利用率 -> 页面更加不足。

:::

### 8 设备管理

IO设备大体可以分为：

- 块设备（以块为单位存储、传输信息）
- 字符设备（传递 / 接收字符流，不可寻址）

设备有两个重要组成部分：

- 向系统其他部分呈现的硬件接口
  - 由几个寄存器组成（状态寄存器、命令寄存器、...）
- 内部结构（具体实现）

处理器能以两种方式访问设备的寄存器：

- 端口映射
  - 额外的IO指令：每个控制寄存器都有一个独特的IO端口号
- 内存映射
  - 将控制寄存器映射到内存空间中
  - **控制寄存器的内存映射应该禁用缓存！**

操作系统能以两种方式获取设备的信息：

- 轮询
  - 开销低，但会浪费CPU周期
- IO中断
  - 不会浪费CPU周期，但开销高（切换上下文）

数据传输命令的控制：

- CPU控制
  - 硬件简单，易于编程
  - CPU开销高
- 直接内存访问（DMA）
  - 给与DMA设备访问内存和总线的权限.
  - DMA传输完成后会用中断通知CPU。

#### 驱动程序

驱动程序指的是用来管理IO设备的代码。

驱动程序一般分为两部分：

- 上半部分：在系统的调用路径中访问
  - 实现一组标准的、跨设备的接口
  - 启动设备的IO操作，然后休眠
- 下半部分：作为中断例程运行
  - 获取输入 / 传输下一块输出
  - 完成IO后唤醒休眠的线程

#### 磁盘原理

磁盘的每个盘片分为数个磁道，每个磁道又分为不同数量的扇区。

在访问磁盘时，首先要确定启用哪个磁头（哪张盘片）；然后将磁头移动到对应的磁道上（寻道），等待盘片旋转至一定位置（旋转），然后进行传输。

磁盘访问时间：$T_{disk} = T_{seek} + T_{rotation} + T_{transfer}$

#### 磁头调度

- FCFS：先到先服务
  - 请求之间是公平的
  - 请求会按照应用程序预期的顺序完成
  - 寻道时间较长（到达的位置可能会在随机的磁道上）
- SSTF：最短寻道时间优先
  - 按照磁道顺序排列IO请求
  - 最小化寻道时间
  - 可能会导致饿死（一直有某个磁道上的请求，其他请求无法得到服务）
- SCAN：电梯算法
  - 简单的在磁盘上来回移动，按顺序跨磁道处理请求
  - 有多种变体：
    - F-SCAN：在执行扫描时冻结要处理的队列（防止远距离饿死）
    - C-SCAN：只从外向内扫描
- SPTF：最短重定位时间优先
  - 同时考虑寻道时间和旋转时间。

### 9 文件系统

文件系统会将文件元数据保留在文件控制块中，存储在磁盘上，并缓存在内存中。

在unix系统下，这个文件控制块就是inode（index node）。

#### 硬链接

在当前目录下创建另一个名称，并将其指向原始文件的相同inode号。

- 只能连接到同一个系统上的文件（inode唯一的范围为本系统）。
- 不允许链接到目录
  - 防止循环
  - 避免父目录不明确

#### 软链接

创建一种不同类型的文件（是路径名的别名）。

- 当需要解析路径名时解析符号链接。
- 效率较低
- 当目标文件被删除时，会产生 **引用悬空**。

#### inode的多级索引

为每个文件分配一个 **指针数组块**（索引块），该块中存储了 **指向文件数据块** 的一系列指针。

当文件打开时，加载该指针数组块进入内存。

可以将索引块中的指针指向另一个由指针数组块，从而实现inode的多级索引。

一般会存在2~3级的非间接指针。

#### 日志

为保证文件系统的稳定性，一般会采取预写日志(write-ahead logging) / 日志(journaling)。

- 在覆盖文件结构之前，先向磁盘上写一个小日志来描述要做的事情
- 如果在更新中出现问题，可以重启读取日志并重试
- 一旦事务安全的写入磁盘，将更新内容写入日志最终的磁盘位置

当需要从崩溃中恢复时，文件系统会扫描日志并查找已提交的事务。

- 如果在日志提交前发生崩溃，则忽略待处理的更新
- 如果在日志提交之后、检查点之前发生崩溃，则按顺序重放已提交的事务（重做日志）。