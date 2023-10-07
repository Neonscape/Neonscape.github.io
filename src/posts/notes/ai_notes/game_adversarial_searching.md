---
article: true
author: Neonscape
date: 2023-10-06
image: /assets/imgs/bgs/20230912(41).png
cover: /assets/imgs/bgs/20230912(39).png
category: 
- notes
tags:
- artificial intelligence
- game theory
- adversarial searching
title: 博弈、对抗搜索
---

<!-- more -->

## 博弈论

研究博弈论时，我们主要关注如下几个要素：

- `S_0` 博弈开始时的初始状态。
- `To_Move(s)` 在状态`s`下，当前行动的参与者。这里的状态指的是整个博弈的状态。
- `Actions(s)` 在状态`s`下，全体合法移动的集合。
- `Result(s, a)` **转移模型**——在状态`s`下执行动作`a`所得到的结果状态。
- `Is_Terminal(s)` 终止测试——检测当前状态是否是博弈的结束状态。
- `Utility(s, p)` 效用函数，返回博弈结束时在终止状态`s`下参与者`p`得到的最终收益。

### 博弈搜索树

博弈搜索树代表两个智能体相互博弈的状态空间。搜索树中的每一层代表着博弈中某一方的行动。

在零和游戏的博弈过程中，参与博弈的双方都试图让对方的效用减小；也就是，对于某个特定的效用函数`U(s, p)`，在`p`行动时`p`会选择使得`U`最大的行动，而`p`的对手会选择让`U`最小的行动。

因此，我们需要研究极小化极大值（Minimax）。

### 极小化极大搜索(Minimax Search)

极小化极大搜索中，搜索树从根节点开始分为两种节点层；其中一层试图最大化当前效用函数的取值，另一层试图最小化当前效用函数的取值。

- 完备性：是（如果搜索树有限）
- 时间：$\Omicron(b^m)$ - 假设解的深度为$d$
- 空间：$\Omicron(bm)$ - `DFS`
- 代价最优：是（每一方每次都执行最优策略）

::: info
**资源受限下的搜索**
在真实的博弈当中，往往无法搜索到叶子节点。

因此，我们采用深度受限搜索，并对于非终止状态，采用评价函数来替代效用函数。
:::

## α-β剪枝
α-β剪枝的基本思想是剪掉不需要搜索的状态从而减少计算量。

```cpp
#define MAXIMIZING_PLAYER 0
#define MINIMIZING_PLAYER 1
T minimax(node current, int depth, int player, T alpha, T beta)
{
    T bestval, ret;
    if (current.isLeaf()) return current.val;

    if (player == MAXIMIZING_PLAYER)
    {
        bestval = -INF;
        for(auto child : current.children())
        {
            ret = minimax(child);
            bestval = max(bestval, ret);
            alpha = max(alpha, bestval); 
            // the maximizing player is guaranteed to 
            // gain at least *alpha* value from this move.

            if(beta <= alpha) break;
            // beta is not changed during this move;
            // so beta is the minimum value 
            // the minimizing player can gain from last move.
            // since the minimum gain of last step is already smaller than current maximum gain,
            // this state will never be a valid solution.
            // thus, this branch is pruned.
        }
        return bestval;
    }
    else
    {
        bestval = INF;
        for(auto child : current.children())
        {
            ret = minimax(child);
            bestval = min(ret, bestval);
            beta = min(bestval, beta);
            if(beta <= alpha) break;
        }
        return bestval;
    }
}
```

### heuristic α-β pruning

当我们使用一个新的启发式评价函数取代当前的效用函数时，α-β剪枝转变为启发式α-β搜索。

该启发式搜索使用截断测试(cutoff test)来取代终止测试（是否为叶子节点），并对于之前的叶子节点（终止状态）必定返回真。

## expectimax（期望最大）搜索

```cpp
```cpp
#define MAXIMIZING_PLAYER 0
#define PROBABILITY_PLAYER 1
T minimax(node current, int depth, int player, T alpha, T beta)
{
    T bestval, ret;
    if (current.isLeaf()) return current.val;

    if (player == MAXIMIZING_PLAYER)
    {
        bestval = -INF;
        for(auto child : current.children())
        {
            ret = minimax(child);
            bestval = max(bestval, ret);
        }
        return bestval;
    }
    else
    {
        for (auto child : current.children())
        {
            ret += child.prob() * child.val();
        }
        return ret;
    }
}
```

## 蒙特卡洛树搜索

// TODO
