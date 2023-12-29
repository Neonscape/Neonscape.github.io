import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as l,c as n,e,a,b as s}from"./app-471939f5.js";const r={},t=e('<h1 id="计算机组织与结构-期末复习" tabindex="-1"><a class="header-anchor" href="#计算机组织与结构-期末复习" aria-hidden="true">#</a> 计算机组织与结构 期末复习</h1><h2 id="计算机系统概述" tabindex="-1"><a class="header-anchor" href="#计算机系统概述" aria-hidden="true">#</a> 计算机系统概述</h2><h3 id="计算机硬件的基本组成" tabindex="-1"><a class="header-anchor" href="#计算机硬件的基本组成" aria-hidden="true">#</a> 计算机硬件的基本组成</h3><h4 id="冯·诺依曼结构" tabindex="-1"><a class="header-anchor" href="#冯·诺依曼结构" aria-hidden="true">#</a> 冯·诺依曼结构</h4><p>计算机由如下结构组成：</p><ul><li>运算器（执行算术和逻辑运算）</li><li>控制器（控制指令的执行）</li><li>存储器（存储数据和指令）</li><li>输入设备</li><li>输出设备</li></ul><h4 id="现代计算机" tabindex="-1"><a class="header-anchor" href="#现代计算机" aria-hidden="true">#</a> 现代计算机</h4><p>现代计算机一般有如下结构：</p><ul><li>中央处理器 <ul><li>运算器</li><li>控制器</li><li>寄存器</li></ul></li><li>存储器 <ul><li>内存</li><li>外存</li></ul></li><li>外部设备、设备控制器</li><li>总线</li></ul><h3 id="计算机软件的分类" tabindex="-1"><a class="header-anchor" href="#计算机软件的分类" aria-hidden="true">#</a> 计算机软件的分类</h3><ul><li>应用软件（专门为某种任务编写的程序）</li><li>系统软件（为有效、安全的使用和管理计算机，以及为开发和运行应用软件而提供的软件；位于计算机硬件和应用软件之间） <ul><li>操作系统</li><li>语言处理系统</li><li>数据库管理系统</li><li>...</li></ul></li></ul><h3 id="计算机系统的抽象层及其转换" tabindex="-1"><a class="header-anchor" href="#计算机系统的抽象层及其转换" aria-hidden="true">#</a> 计算机系统的抽象层及其转换</h3><p>计算机系统中的层次结构如下</p><ul><li>应用（具体问题）</li><li>算法</li><li>编程语言</li><li>操作系统 / 虚拟机</li><li>指令集体系结构（<strong>软件能感知到的最低层次</strong>）</li><li>微体系结构</li><li>功能部件</li><li>电路</li><li>元器件</li></ul><p>这些层次中，每一层都是对下一层的抽象；下层为顶层提供支撑。</p><h3 id="用户cpu时间计算" tabindex="-1"><a class="header-anchor" href="#用户cpu时间计算" aria-hidden="true">#</a> 用户CPU时间计算</h3><h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><p>用户使用计算机时所感到的响应时间一般分为 <strong>用户CPU时间（用来运行用户代码的时间）</strong> 和 其他时间（运行操作系统、等待IO、运行其他用户的程序的时间）。</p><p><strong>系统性能</strong>指的是<strong>整个计算机系统</strong>的响应时间，包含CPU与其他部分；<br><strong>CPU性能</strong>单指用户CPU时间。</p><p>计算机系统的性能主要考虑CPU性能。</p><h4 id="计算" tabindex="-1"><a class="header-anchor" href="#计算" aria-hidden="true">#</a> 计算</h4><p><em>CPI：执行一条指令所需要的时钟周期数。</em></p><p><strong>CPU执行时间</strong>：</p><ul><li>= 程序总时钟周期数 / 时钟频率</li><li>= 程序总时钟周期数 * 时钟周期</li></ul><p><strong>程序总时钟周期数</strong>：</p>',25),h=a("ul",null,[a("li",null,[s("= 程序总指令条数 * "),a("strong",null,"平均CPI")]),a("li",null,[s("= "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("msubsup",null,[a("mo",null,"∑"),a("mrow",null,[a("mi",null,"i"),a("mo",null,"="),a("mn",null,"1")]),a("mi",null,"n")]),a("mrow",null,[a("mi",null,"C"),a("mi",null,"P"),a("msub",null,[a("mi",null,"I"),a("mi",null,"i")]),a("mo",null,"×"),a("msub",null,[a("mi",null,"C"),a("mi",null,"i")])])]),a("annotation",{encoding:"application/x-tex"},"\\sum_{i = 1}^{n} {CPI_i \\times C_i}")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1.104em","vertical-align":"-0.2997em"}}),a("span",{class:"mop"},[a("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.8043em"}},[a("span",{style:{top:"-2.4003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mtight"},[a("span",{class:"mord mathnormal mtight"},"i"),a("span",{class:"mrel mtight"},"="),a("span",{class:"mord mtight"},"1")])])]),a("span",{style:{top:"-3.2029em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mtight"},[a("span",{class:"mord mathnormal mtight"},"n")])])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.2997em"}},[a("span")])])])])]),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"mord"},[a("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"CP"),a("span",{class:"mord"},[a("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.3117em"}},[a("span",{style:{top:"-2.55em","margin-left":"-0.0785em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mathnormal mtight"},"i")])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.15em"}},[a("span")])])])])]),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"×"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mord"},[a("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.3117em"}},[a("span",{style:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mathnormal mtight"},"i")])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.15em"}},[a("span")])])])])])])])])])])],-1),d=a("p",null,[a("strong",null,"计算机性能之比"),s("是"),a("strong",null,"用户CPU时间之比"),s("的"),a("strong",null,"倒数"),s("。")],-1),c=a("h3",{id:"amdahl定律",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#amdahl定律","aria-hidden":"true"},"#"),s(" Amdahl定律")],-1),p=a("p",{class:"katex-block"},[a("span",{class:"katex-display"},[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[a("semantics",null,[a("mrow",null,[a("mtext",null,"改进后的执行时间"),a("mo",null,"="),a("mfrac",null,[a("mtext",null,"改进部分的执行时间"),a("mtext",null,"改进部分的改进倍数")]),a("mo",null,"+"),a("mtext",null,"未改进部分的执行时间"),a("mspace",{linebreak:"newline"}),a("mtext",null,"整体的改进倍数"),a("mo",null,"="),a("mfrac",null,[a("mn",null,"1"),a("mrow",null,[a("mfrac",null,[a("mtext",null,"改进部分执行时间的比例"),a("mtext",null,"改进部分的改进倍数")]),a("mo",null,"+"),a("mtext",null,"未改进部分执行时间比例")])]),a("mspace",{linebreak:"newline"}),a("mrow",null,[a("mo",{fence:"true"},"("),a("mi",null,"p"),a("mo",null,"="),a("mfrac",null,[a("mn",null,"1"),a("mrow",null,[a("mfrac",null,[a("mi",null,"t"),a("mi",null,"n")]),a("mo",null,"+"),a("mo",{stretchy:"false"},"("),a("mn",null,"1"),a("mo",null,"−"),a("mi",null,"t"),a("mo",{stretchy:"false"},")")])]),a("mo",{fence:"true"},")")])]),a("annotation",{encoding:"application/x-tex"}," 改进后的执行时间 = \\frac{改进部分的执行时间}{改进部分的改进倍数} + 未改进部分的执行时间 \\\\ 整体的改进倍数 = \\frac{1}{\\frac{改进部分执行时间的比例}{改进部分的改进倍数}+未改进部分执行时间比例} \\\\ \\left(p = \\frac{1}{\\frac{t}{n} + (1 - t)} \\right) ")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord cjk_fallback"},"改进后的执行时间"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"2.0463em","vertical-align":"-0.686em"}}),a("span",{class:"mord"},[a("span",{class:"mopen nulldelimiter"}),a("span",{class:"mfrac"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"1.3603em"}},[a("span",{style:{top:"-2.314em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"mord"},[a("span",{class:"mord cjk_fallback"},"改进部分的改进倍数")])]),a("span",{style:{top:"-3.23em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),a("span",{style:{top:"-3.677em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"mord"},[a("span",{class:"mord cjk_fallback"},"改进部分的执行时间")])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.686em"}},[a("span")])])])]),a("span",{class:"mclose nulldelimiter"})]),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"+"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord cjk_fallback"},"未改进部分的执行时间")]),a("span",{class:"mspace newline"}),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord cjk_fallback"},"整体的改进倍数"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"2.4288em","vertical-align":"-1.1073em"}}),a("span",{class:"mord"},[a("span",{class:"mopen nulldelimiter"}),a("span",{class:"mfrac"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"1.3214em"}},[a("span",{style:{top:"-2.2377em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"mord"},[a("span",{class:"mord"},[a("span",{class:"mopen nulldelimiter"}),a("span",{class:"mfrac"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.8723em"}},[a("span",{style:{top:"-2.655em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mtight"},[a("span",{class:"mord cjk_fallback mtight"},"改进部分的改进倍数")])])]),a("span",{style:{top:"-3.23em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),a("span",{style:{top:"-3.394em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mtight"},[a("span",{class:"mord cjk_fallback mtight"},"改进部分执行时间的比例")])])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.345em"}},[a("span")])])])]),a("span",{class:"mclose nulldelimiter"})]),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"+"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mord cjk_fallback"},"未改进部分执行时间比例")])]),a("span",{style:{top:"-3.23em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),a("span",{style:{top:"-3.677em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"mord"},[a("span",{class:"mord"},"1")])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"1.1073em"}},[a("span")])])])]),a("span",{class:"mclose nulldelimiter"})])]),a("span",{class:"mspace newline"}),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"2.5096em","vertical-align":"-1.0596em"}}),a("span",{class:"minner"},[a("span",{class:"mopen delimcenter",style:{top:"0em"}},[a("span",{class:"delimsizing size3"},"(")]),a("span",{class:"mord mathnormal"},"p"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mord"},[a("span",{class:"mopen nulldelimiter"}),a("span",{class:"mfrac"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"1.3214em"}},[a("span",{style:{top:"-2.2854em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"mord"},[a("span",{class:"mord"},[a("span",{class:"mopen nulldelimiter"}),a("span",{class:"mfrac"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.8246em"}},[a("span",{style:{top:"-2.655em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mtight"},[a("span",{class:"mord mathnormal mtight"},"n")])])]),a("span",{style:{top:"-3.23em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),a("span",{style:{top:"-3.394em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mtight"},[a("span",{class:"mord mathnormal mtight"},"t")])])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.345em"}},[a("span")])])])]),a("span",{class:"mclose nulldelimiter"})]),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"+"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mopen"},"("),a("span",{class:"mord"},"1"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"−"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mord mathnormal"},"t"),a("span",{class:"mclose"},")")])]),a("span",{style:{top:"-3.23em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),a("span",{style:{top:"-3.677em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"mord"},[a("span",{class:"mord"},"1")])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"1.0596em"}},[a("span")])])])]),a("span",{class:"mclose nulldelimiter"})]),a("span",{class:"mclose delimcenter",style:{top:"0em"}},[a("span",{class:"delimsizing size3"},")")])])])])])])],-1),m=e('<h2 id="数据的机器级表示" tabindex="-1"><a class="header-anchor" href="#数据的机器级表示" aria-hidden="true">#</a> 数据的机器级表示</h2><h3 id="进制数之间的转换" tabindex="-1"><a class="header-anchor" href="#进制数之间的转换" aria-hidden="true">#</a> 进制数之间的转换</h3><p>小数的转换：乘以基数，取整数部分作为每一位的值</p><h3 id="原码、补码、移码表示法" tabindex="-1"><a class="header-anchor" href="#原码、补码、移码表示法" aria-hidden="true">#</a> 原码、补码、移码表示法</h3><h4 id="原码" tabindex="-1"><a class="header-anchor" href="#原码" aria-hidden="true">#</a> 原码</h4><p>原码的表示方式如下</p>',6),o=a("ul",null,[a("li",null,"最高位为符号位"),a("li",null,[s("此外其他位代表"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("msup",null,[a("mn",null,"2"),a("mi",null,"n")])]),a("annotation",{encoding:"application/x-tex"},"2^n")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6644em"}}),a("span",{class:"mord"},[a("span",{class:"mord"},"2"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.6644em"}},[a("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mathnormal mtight"},"n")])])])])])])])])])])])],-1),u=e(`<h4 id="补码" tabindex="-1"><a class="header-anchor" href="#补码" aria-hidden="true">#</a> 补码</h4><p>补码：对于模为<code>M</code>下的某一数<code>m</code>：</p><ul><li><code>m &gt;= 0</code> : <code>m</code>补 = <code>m</code></li><li><code>m &lt; 0</code> : <code>m</code>补 = <code>M - |m|</code></li></ul><blockquote><ul><li>一个负数的补码等于模减该负数的绝对值。</li><li>对于某个模<code>m</code>，<code>y &lt; m</code>, 有<code>x - y = x + (-y)补</code>.</li><li>二进制下，负数的补码等于对应正数补码的“取反加一”</li></ul></blockquote><blockquote><p>变形补码：在原补码的最高位后加一位，用来处理溢出</p></blockquote><h4 id="移码" tabindex="-1"><a class="header-anchor" href="#移码" aria-hidden="true">#</a> 移码</h4><p>移码表示下，所有数值都被加上了一个 <strong>偏置常数</strong>， 用于将含有负数的数值映射到正整数范围内。</p><p><strong>常用于表示浮点数的阶码</strong>。</p><h3 id="无符号整数和带符号整数的表示" tabindex="-1"><a class="header-anchor" href="#无符号整数和带符号整数的表示" aria-hidden="true">#</a> 无符号整数和带符号整数的表示</h3><p><strong>无符号整数</strong>：某编码的所有二进制位都用于表示数据而没有符号表示。</p><p><strong>有符号整数</strong>：编码中存在一个用于表示符号的二进制位。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>有符号整数和无符号整数有如下区别：</p><ul><li>扩充操作有区别（无符号整数通常使用0扩展，有符号整数使用符号为扩展）</li><li>数的比较有区别（符号位）</li><li>溢出判断有区别（无符号数通常不进行溢出判断）</li></ul></div><div class="hint-container info"><p class="hint-container-title">LSB &amp; MSB</p><p>LSB指“<strong>最低有效位</strong>”，MSB指“<strong>最高有效位</strong>”。</p></div><h3 id="浮点数的表示与ieee-754标准" tabindex="-1"><a class="header-anchor" href="#浮点数的表示与ieee-754标准" aria-hidden="true">#</a> 浮点数的表示与IEEE 754标准</h3><h4 id="浮点数的表示" tabindex="-1"><a class="header-anchor" href="#浮点数的表示" aria-hidden="true">#</a> 浮点数的表示</h4><p><strong>规格化小数</strong>：科学记数法表示；小数点之前只有一位非0数。</p><p><strong>二进制的规格化小数表示</strong>：</p><p><code>|0（符号位）S|1～8（阶码）E|9～31（尾数）T|</code></p><p><code>val = (S? -1 : 1) * 0.1T * 2^E</code>.</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>规格化小数的尾数第一位总是1,<strong>省略不表示</strong>。</p></div><h4 id="ieee-754" tabindex="-1"><a class="header-anchor" href="#ieee-754" aria-hidden="true">#</a> IEEE 754</h4><p>IEEE754所规定的两种浮点数标准如下：</p><p><strong>单精度</strong>：<code>|0（符号）s|1～8（阶码）e|9～31（尾数）f|</code></p><p><strong>双精度</strong>：<code>|0（符号）s|1～11（阶码）e|12～63（尾数）f|</code></p><p><code>val_f = (s ? -1 : 1) * (1.f) * 2^(e - 127)</code></p><p><code>val_lf = (s ? -1 : 1) * (1.f) * 2^(e - 1023)</code></p><h3 id="c语言中的整数和浮点数" tabindex="-1"><a class="header-anchor" href="#c语言中的整数和浮点数" aria-hidden="true">#</a> C语言中的整数和浮点数</h3><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>C语言在进行无符号数和有符号数的比较时，通常会将<strong>有符号整数强制转换为无符号整数</strong>，再按照无符号整数比较的规则进行比较。</p></div><h3 id="数据的存储和排列顺序" tabindex="-1"><a class="header-anchor" href="#数据的存储和排列顺序" aria-hidden="true">#</a> 数据的存储和排列顺序</h3><h4 id="西文和汉字字符的存储和表示" tabindex="-1"><a class="header-anchor" href="#西文和汉字字符的存储和表示" aria-hidden="true">#</a> 西文和汉字字符的存储和表示</h4><p>西文字符：ASCII码表示，字符串操作</p><p>汉字字符：包含输入码（按键=&gt;汉字）、内码（系统内部编码）、字模码（编码=&gt;点阵）</p><h4 id="数据的宽度和存储" tabindex="-1"><a class="header-anchor" href="#数据的宽度和存储" aria-hidden="true">#</a> 数据的宽度和存储</h4><ul><li>bit：0 / 1</li><li>byte：8 bit <ul><li><em>最小可寻址单位</em></li></ul></li><li>word：2/4/8/16 byte</li></ul><p><strong>字长</strong>：定点运算数据通路的宽度。字!=字长！</p><h4 id="数据的排列顺序" tabindex="-1"><a class="header-anchor" href="#数据的排列顺序" aria-hidden="true">#</a> 数据的排列顺序</h4><p>数据有两种方式，<strong>大端序</strong>和<strong>小端序</strong>。</p><p><strong>大端序</strong>：以 <strong>MSB</strong> 所在的位置作为该数的地址。<br><strong>小端序</strong>：以 <strong>LSB</strong> 所在的位置最为该数的地址。</p><h2 id="运算方法和运算部件" tabindex="-1"><a class="header-anchor" href="#运算方法和运算部件" aria-hidden="true">#</a> 运算方法和运算部件</h2><h3 id="常见的汇编指令-mips" tabindex="-1"><a class="header-anchor" href="#常见的汇编指令-mips" aria-hidden="true">#</a> 常见的汇编指令（MIPS）</h3><div class="language-MIPS line-numbers-mode" data-ext="MIPS"><pre class="language-MIPS"><code>add $rd, $rs, $rt   | rd = rs + rt
addu $rd, $rs, $rt  | rd = rs + rt (unsigned, no overflow)
addi $rd, $rs, imm  | rd = rs + imm
addiu $rd, $rs, imm | rd = rs + imm
sub $rd, $rs, $rt   | rd = rs - rt
subu $rd, $rs, $rt  | rd = rs - rt (unsigned, no overflow)
mul $rd, $rs, $rt   | rd = rs * rt (no overflow)
mult $rs, $rt       | [$hi | $lo] = rs * rt
div $rs, $rt        | rs / rt = $lo ... $hi
and $rd, $rs, $rt   | rd = rs &amp; rt
or $rd, $rs, $rt    | rd = rs | rt
xor $rd, $rs, $rt   | rd = rs ^ rt
nor $rd, $rs, $rt   | rd = !(rs | rt)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="串行、并行、带标志的加法器原理" tabindex="-1"><a class="header-anchor" href="#串行、并行、带标志的加法器原理" aria-hidden="true">#</a> 串行、并行、带标志的加法器原理</h3><h4 id="串行加法器" tabindex="-1"><a class="header-anchor" href="#串行加法器" aria-hidden="true">#</a> 串行加法器</h4><p><strong>对于单个加法器</strong></p><ul><li>输入： <ul><li><code>A</code>,加数某一位</li><li><code>B</code>,被加数某一位</li><li><code>Cin</code>,进位</li></ul></li><li>输出： <ul><li><code>F = A ^ B ^ Cin</code>,结果</li><li><code>Cout = A &amp; B + A &amp; Cin + B &amp; Cin</code>,进位</li></ul></li></ul><p>串行加法器的工作原理：在前一位的运算得出<code>F</code>和<code>Cout</code>后，将<code>Cout</code>传递至下一个加法器开始运算。</p><div class="hint-container info"><p class="hint-container-title">一些结论</p><p><code>n</code>位串行加法器从<code>C0</code>到<code>Cn</code>的延迟时间为<code>2 * n</code>级门延迟。</p><p>最后一位和数的延迟时间为<code>2 * n + 1</code>级门延迟。</p></div><h4 id="并行加法器" tabindex="-1"><a class="header-anchor" href="#并行加法器" aria-hidden="true">#</a> 并行加法器</h4><h3 id="补码的加减运算" tabindex="-1"><a class="header-anchor" href="#补码的加减运算" aria-hidden="true">#</a> 补码的加减运算</h3><h3 id="原码、补码的乘除" tabindex="-1"><a class="header-anchor" href="#原码、补码的乘除" aria-hidden="true">#</a> 原码、补码的乘除</h3><h3 id="乘除运算溢出的判断、常量的乘除运算" tabindex="-1"><a class="header-anchor" href="#乘除运算溢出的判断、常量的乘除运算" aria-hidden="true">#</a> 乘除运算溢出的判断、常量的乘除运算</h3><h3 id="浮点数的加减运算与舍入方式" tabindex="-1"><a class="header-anchor" href="#浮点数的加减运算与舍入方式" aria-hidden="true">#</a> 浮点数的加减运算与舍入方式</h3><h2 id="指令系统" tabindex="-1"><a class="header-anchor" href="#指令系统" aria-hidden="true">#</a> 指令系统</h2><h3 id="指令格式设计" tabindex="-1"><a class="header-anchor" href="#指令格式设计" aria-hidden="true">#</a> 指令格式设计</h3><h3 id="操作数类型、寻址方式、操作类型、操作码编码" tabindex="-1"><a class="header-anchor" href="#操作数类型、寻址方式、操作类型、操作码编码" aria-hidden="true">#</a> 操作数类型、寻址方式、操作类型、操作码编码</h3><h3 id="异常和中断的区别" tabindex="-1"><a class="header-anchor" href="#异常和中断的区别" aria-hidden="true">#</a> 异常和中断的区别</h3><h3 id="mips指令的格式和寻址方式" tabindex="-1"><a class="header-anchor" href="#mips指令的格式和寻址方式" aria-hidden="true">#</a> MIPS指令的格式和寻址方式</h3><h3 id="选择结构、循环结构的汇编表示" tabindex="-1"><a class="header-anchor" href="#选择结构、循环结构的汇编表示" aria-hidden="true">#</a> 选择结构、循环结构的汇编表示</h3><h3 id="过程调用指令、执行步骤、栈和栈帧的变化" tabindex="-1"><a class="header-anchor" href="#过程调用指令、执行步骤、栈和栈帧的变化" aria-hidden="true">#</a> 过程调用指令、执行步骤、栈和栈帧的变化</h3><h2 id="中央处理器" tabindex="-1"><a class="header-anchor" href="#中央处理器" aria-hidden="true">#</a> 中央处理器</h2><h3 id="cpu执行指令的过程" tabindex="-1"><a class="header-anchor" href="#cpu执行指令的过程" aria-hidden="true">#</a> CPU执行指令的过程</h3><h3 id="cpu的基本组成、操作元件和状态元件" tabindex="-1"><a class="header-anchor" href="#cpu的基本组成、操作元件和状态元件" aria-hidden="true">#</a> CPU的基本组成、操作元件和状态元件</h3><h3 id="指令周期和时钟周期" tabindex="-1"><a class="header-anchor" href="#指令周期和时钟周期" aria-hidden="true">#</a> 指令周期和时钟周期</h3><h3 id="mips的指令格式、典型的mips指令" tabindex="-1"><a class="header-anchor" href="#mips的指令格式、典型的mips指令" aria-hidden="true">#</a> MIPS的指令格式、典型的MIPS指令</h3><h3 id="典型的mips指令数据通路、单周期数据通路设计、局部数据通路、控制信号的取值" tabindex="-1"><a class="header-anchor" href="#典型的mips指令数据通路、单周期数据通路设计、局部数据通路、控制信号的取值" aria-hidden="true">#</a> 典型的MIPS指令数据通路、单周期数据通路设计、局部数据通路、控制信号的取值</h3><h3 id="多周期数据通路的设计、控制信号的取值" tabindex="-1"><a class="header-anchor" href="#多周期数据通路的设计、控制信号的取值" aria-hidden="true">#</a> 多周期数据通路的设计、控制信号的取值</h3><h3 id="微程序控制处理器" tabindex="-1"><a class="header-anchor" href="#微程序控制处理器" aria-hidden="true">#</a> 微程序控制处理器</h3><h3 id="带异常处理的数据通路、有限状态机" tabindex="-1"><a class="header-anchor" href="#带异常处理的数据通路、有限状态机" aria-hidden="true">#</a> 带异常处理的数据通路、有限状态机</h3><h2 id="指令流水线" tabindex="-1"><a class="header-anchor" href="#指令流水线" aria-hidden="true">#</a> 指令流水线</h2><h3 id="指令流水线的组成流水段" tabindex="-1"><a class="header-anchor" href="#指令流水线的组成流水段" aria-hidden="true">#</a> 指令流水线的组成流水段</h3><h3 id="mips指令的功能段划分、流水线数据通路的设计、控制信号的取值" tabindex="-1"><a class="header-anchor" href="#mips指令的功能段划分、流水线数据通路的设计、控制信号的取值" aria-hidden="true">#</a> MIPS指令的功能段划分、流水线数据通路的设计、控制信号的取值</h3><h3 id="结构冒险" tabindex="-1"><a class="header-anchor" href="#结构冒险" aria-hidden="true">#</a> 结构冒险</h3><h3 id="数据冒险、转发技术、load-use的检测和处理" tabindex="-1"><a class="header-anchor" href="#数据冒险、转发技术、load-use的检测和处理" aria-hidden="true">#</a> 数据冒险、转发技术、load-use的检测和处理</h3><h3 id="控制冒险、静态预测、动态预测、延迟分支" tabindex="-1"><a class="header-anchor" href="#控制冒险、静态预测、动态预测、延迟分支" aria-hidden="true">#</a> 控制冒险、静态预测、动态预测、延迟分支</h3><h3 id="异常和中断引起的控制冒险" tabindex="-1"><a class="header-anchor" href="#异常和中断引起的控制冒险" aria-hidden="true">#</a> 异常和中断引起的控制冒险</h3><h2 id="存储器层次结构" tabindex="-1"><a class="header-anchor" href="#存储器层次结构" aria-hidden="true">#</a> 存储器层次结构</h2><h3 id="存储器的分类、主存储器的组成和基本操作、存储器的层次化结构" tabindex="-1"><a class="header-anchor" href="#存储器的分类、主存储器的组成和基本操作、存储器的层次化结构" aria-hidden="true">#</a> 存储器的分类、主存储器的组成和基本操作、存储器的层次化结构</h3><h3 id="sram和dram的区别" tabindex="-1"><a class="header-anchor" href="#sram和dram的区别" aria-hidden="true">#</a> SRAM和DRAM的区别</h3><h3 id="存储器芯片的扩展" tabindex="-1"><a class="header-anchor" href="#存储器芯片的扩展" aria-hidden="true">#</a> 存储器芯片的扩展</h3><h3 id="连续编址方式、交叉编址方式" tabindex="-1"><a class="header-anchor" href="#连续编址方式、交叉编址方式" aria-hidden="true">#</a> 连续编址方式、交叉编址方式</h3><h3 id="磁盘读写的三个步骤" tabindex="-1"><a class="header-anchor" href="#磁盘读写的三个步骤" aria-hidden="true">#</a> 磁盘读写的三个步骤</h3><h3 id="磁盘存储器的性能指标" tabindex="-1"><a class="header-anchor" href="#磁盘存储器的性能指标" aria-hidden="true">#</a> 磁盘存储器的性能指标</h3><h3 id="数据校验的基本原理、奇偶校验码、循环冗余校验码" tabindex="-1"><a class="header-anchor" href="#数据校验的基本原理、奇偶校验码、循环冗余校验码" aria-hidden="true">#</a> 数据校验的基本原理、奇偶校验码、循环冗余校验码</h3><h3 id="程序访问的局部性" tabindex="-1"><a class="header-anchor" href="#程序访问的局部性" aria-hidden="true">#</a> 程序访问的局部性</h3><h3 id="cache的基本工作原理" tabindex="-1"><a class="header-anchor" href="#cache的基本工作原理" aria-hidden="true">#</a> Cache的基本工作原理</h3><h3 id="直接映射、全相连映射、组相连映射-命中率、命中时间、缺失损失、平均访问时间" tabindex="-1"><a class="header-anchor" href="#直接映射、全相连映射、组相连映射-命中率、命中时间、缺失损失、平均访问时间" aria-hidden="true">#</a> 直接映射、全相连映射、组相连映射（命中率、命中时间、缺失损失、平均访问时间）</h3><h3 id="先进先出算法、最近最少用算法" tabindex="-1"><a class="header-anchor" href="#先进先出算法、最近最少用算法" aria-hidden="true">#</a> 先进先出算法、最近最少用算法</h3><h3 id="全写法、回写法的区别" tabindex="-1"><a class="header-anchor" href="#全写法、回写法的区别" aria-hidden="true">#</a> 全写法、回写法的区别</h3><h3 id="虚拟存储器的基本概念" tabindex="-1"><a class="header-anchor" href="#虚拟存储器的基本概念" aria-hidden="true">#</a> 虚拟存储器的基本概念</h3><h3 id="进程的虚拟地址空间划分" tabindex="-1"><a class="header-anchor" href="#进程的虚拟地址空间划分" aria-hidden="true">#</a> 进程的虚拟地址空间划分</h3><h3 id="分页式虚拟存储器的工作原理-页表、地址转换、快表、cpu访存过程" tabindex="-1"><a class="header-anchor" href="#分页式虚拟存储器的工作原理-页表、地址转换、快表、cpu访存过程" aria-hidden="true">#</a> 分页式虚拟存储器的工作原理（页表、地址转换、快表、CPU访存过程）</h3><h2 id="系统互连、输入输出组织" tabindex="-1"><a class="header-anchor" href="#系统互连、输入输出组织" aria-hidden="true">#</a> 系统互连、输入输出组织</h2><h3 id="外设的分类" tabindex="-1"><a class="header-anchor" href="#外设的分类" aria-hidden="true">#</a> 外设的分类</h3><h3 id="总线、系统总线、数据线、地址线、控制线" tabindex="-1"><a class="header-anchor" href="#总线、系统总线、数据线、地址线、控制线" aria-hidden="true">#</a> 总线、系统总线、数据线、地址线、控制线</h3><h3 id="基于总线的互连结构-主要模块以及连接的总线" tabindex="-1"><a class="header-anchor" href="#基于总线的互连结构-主要模块以及连接的总线" aria-hidden="true">#</a> 基于总线的互连结构 （主要模块以及连接的总线）</h3><h3 id="i-o接口的职能、i-o接口的通用结构" tabindex="-1"><a class="header-anchor" href="#i-o接口的职能、i-o接口的通用结构" aria-hidden="true">#</a> I/O接口的职能、I/O接口的通用结构</h3><h3 id="i-o端口的独立编址方式、统一编址方式" tabindex="-1"><a class="header-anchor" href="#i-o端口的独立编址方式、统一编址方式" aria-hidden="true">#</a> I/O端口的独立编址方式、统一编址方式</h3><h3 id="程序直接控制i-o方式、中断控制i-o方式、dma方式的工作原理、区别" tabindex="-1"><a class="header-anchor" href="#程序直接控制i-o方式、中断控制i-o方式、dma方式的工作原理、区别" aria-hidden="true">#</a> 程序直接控制I/O方式、中断控制I/O方式、DMA方式的工作原理、区别</h3><h3 id="中断响应、中断处理中断优先权的动态分配" tabindex="-1"><a class="header-anchor" href="#中断响应、中断处理中断优先权的动态分配" aria-hidden="true">#</a> 中断响应、中断处理中断优先权的动态分配</h3><h3 id="_3种dma方式-cpu停止法、周期挪用法、交替分时访问法" tabindex="-1"><a class="header-anchor" href="#_3种dma方式-cpu停止法、周期挪用法、交替分时访问法" aria-hidden="true">#</a> 3种DMA方式：CPU停止法、周期挪用法、交替分时访问法</h3><h3 id="i-o子系统层次结构每层的基本功能" tabindex="-1"><a class="header-anchor" href="#i-o子系统层次结构每层的基本功能" aria-hidden="true">#</a> I/O子系统层次结构每层的基本功能</h3><h3 id="用户程序、c语言库、内核之间的关系" tabindex="-1"><a class="header-anchor" href="#用户程序、c语言库、内核之间的关系" aria-hidden="true">#</a> 用户程序、C语言库、内核之间的关系</h3>`,102),g=[t,h,d,c,p,m,o,u];function b(f,x){return l(),n("div",null,g)}const _=i(r,[["render",b],["__file","review.html.vue"]]);export{_ as default};
