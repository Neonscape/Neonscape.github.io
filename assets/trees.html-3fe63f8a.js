import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{o as r,c as d,d as i,a as e,b as c,e as l}from"./app-c169510c.js";const t="/assets/imgs/bgs/(9).png",n={},a=e("h1",{id:"离散数学笔记-树",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#离散数学笔记-树","aria-hidden":"true"},"#"),c(" 离散数学笔记：树")],-1),s=e("p",null,[e("s",null,"学不完辣")],-1),h=l('<figure><img src="'+t+'" alt="好看的" tabindex="0" loading="lazy"><figcaption>好看的</figcaption></figure><h2 id="树-基本知识" tabindex="-1"><a class="header-anchor" href="#树-基本知识" aria-hidden="true">#</a> 树：基本知识</h2><ul><li>树的定义：不包含简单回路的连通无向图。</li><li>树中的任意两点之间存在唯一的通路。</li><li>删除树中的任意一条边，则树将不再是连通图。</li><li>在树中加一条边可以构成一条唯一的简单回路。</li><li>树是边数最少的连通图（从连通图中任意删去一个点，再施以归纳法），也是边数最多的没有简单回路的图。</li><li>树的结点的数量是边的数量 - 1.（任意删去一边，对结点的数量施以归纳法）</li><li><strong>底图</strong>为树的有向图称为有向树。</li><li>如果有向树中恰好含有一个<strong>入度为<code>0</code><strong>的点，则该点称为该有向树的</strong>根</strong>，称该树为 <strong>（有）根树</strong>。</li></ul><h2 id="根树" tabindex="-1"><a class="header-anchor" href="#根树" aria-hidden="true">#</a> 根树</h2><h3 id="根树的图形表示" tabindex="-1"><a class="header-anchor" href="#根树的图形表示" aria-hidden="true">#</a> 根树的图形表示</h3><p>按照每个节点到根节点的距离来一层层向下排列。</p><blockquote><p>有子女的节点称为 <strong>内点</strong>， 无子女的点称为<strong>树叶</strong>。 从树根到树叶的最大通路长度称为<strong>树高</strong>。 <br>根节点在非平凡树中也是内点。</p></blockquote><h3 id="关于根树的术语" tabindex="-1"><a class="header-anchor" href="#关于根树的术语" aria-hidden="true">#</a> 关于根树的术语</h3><ul><li><code>m</code>元树：每个内点均<strong>至多</strong>有<code>m</code>个子女的树。</li><li>完全<code>m</code>元树：每个内点<strong>恰好均有</strong>m个子女。</li><li>树的层数：定义根节点的层数为<code>0</code>，某节点的层数定义为根节点到此节点的唯一通路的长度。</li><li>平衡：设树高为<code>h</code>，若树叶均在第<code>h - 1</code>层或第<code>h</code>层，则该树是平衡的。</li><li>有序：同一层中每个节点都（按照某种偏序）有序排列。</li><li>根子树：根树<code>T</code>中的任一顶点<code>v</code>及其所有后代的导出子图也是根树，称之为<code>T</code>的根子树。<br>特别的，有序二叉树的子树分别为左子树和右子树。</li><li>满（树、节点）：每个内点都有<code>m</code>个子节点的根树。</li><li>完全（树）：除最后一层的节点外其他节点均为满状态，且最后一层的节点从左向右填充的根树。</li><li>计算完全<code>m</code>元树的顶点数<code>(n)</code>、内点数<code>(i)</code>、树叶数<code>(l)</code>之间的两个公式： <ul><li><code>(n - 1) = m * i</code> - 入度 = 出度</li><li><code>n = i + l</code> - 顶点数 = 内点数 + 树叶数</li></ul></li><li><strong>有序</strong>根树的前序(<code>preorder(tree)</code>)/后序遍历<code>postorder(tree)</code>/中序遍历<code>inorder(tree)</code><ul><li>前序遍历：遍历顺序为<code>[T, preorder(T1), preorder(T2)...preorder(Tn)]</code>.</li><li>后序遍历：遍历顺序为<code>[postorder(T1), postorder(T2), ..., postorder(Tn), T]</code>.</li><li>中序遍历（适用于二叉树）：遍历顺序为<code>[inorder(T1), T, inorder(T2)]</code>.</li></ul></li></ul>',9);function g(u,p){return r(),d("div",null,[a,s,i(" more "),h])}const f=o(n,[["render",g],["__file","trees.html.vue"]]);export{f as default};