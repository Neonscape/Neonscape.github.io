import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,e as a,a as e,b as i}from"./app-8abb4120.js";const d={},r=a('<h1 id="_2024-春-互联网计算-课程笔记" tabindex="-1"><a class="header-anchor" href="#_2024-春-互联网计算-课程笔记" aria-hidden="true">#</a> 2024 春 互联网计算 课程笔记</h1><h2 id="第一章-计算机网络与因特网" tabindex="-1"><a class="header-anchor" href="#第一章-计算机网络与因特网" aria-hidden="true">#</a> 第一章 计算机网络与因特网</h2><h3 id="_1-什么是主机-什么是端系统" tabindex="-1"><a class="header-anchor" href="#_1-什么是主机-什么是端系统" aria-hidden="true">#</a> 1 什么是主机？什么是端系统？</h3><p><strong>所有连接到因特网的设备</strong>都称为主机或端系统。</p><h3 id="_2-什么是分组-什么是协议" tabindex="-1"><a class="header-anchor" href="#_2-什么是分组-什么是协议" aria-hidden="true">#</a> 2 什么是分组？什么是协议？</h3><p>当一台端系统要向另一台端系统发送数据时，发送端系统将数据分段并为每段数据加上首部字节。这样<strong>包含首部字节的的数据包</strong>称为分组。</p><p>协议(protocol)定义了在两个或多个通信实体之间交换的报文的格式和顺序，以及报文发送和／或接收一条报文或其他事件所采取的动作。</p><h3 id="_3-什么是客户、服务器" tabindex="-1"><a class="header-anchor" href="#_3-什么是客户、服务器" aria-hidden="true">#</a> 3 什么是客户、服务器？</h3><p>客户和服务器是两种不同类型的主机；客户一般是桌面 PC、移动 PC 和智能手机等，而服务器通常是更为强大的计算机。</p><h3 id="_4-电路交换、分组交换及对比" tabindex="-1"><a class="header-anchor" href="#_4-电路交换、分组交换及对比" aria-hidden="true">#</a> 4 电路交换、分组交换及对比</h3><p>通过网络链路和交换机传输数据有两种基本方法：分组交换和电路交换。</p><h4 id="分组交换" tabindex="-1"><a class="header-anchor" href="#分组交换" aria-hidden="true">#</a> 分组交换</h4><p>报文分组(packet)通过通信链路和**分组交换机(packet switch)**传送。</p><p>分组交换机主要有两类： <strong>路由器</strong> 和 <strong>链路层交换机</strong>。</p><p>大多数分组交换机在链路的输入端使用 <strong>存储转发传输(store-and-forward transmission)</strong>。这种机制使得交换机在开始分组的转发之前<strong>必须先接收到整个分组的内容</strong>。</p>',15),t=e("div",{class:"hint-container note"},[e("p",{class:"hint-container-title"},"注"),e("p",null,[i("通过"),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"N")]),e("annotation",{encoding:"application/x-tex"},"N")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6833em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N")])])]),i("条速率均为"),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"R")]),e("annotation",{encoding:"application/x-tex"},"R")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6833em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R")])])]),i("的链路串联组成的路径发送一个长度为"),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"L")]),e("annotation",{encoding:"application/x-tex"},"L")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6833em"}}),e("span",{class:"mord mathnormal"},"L")])])]),i("的分组，端到端时延为")]),e("p",{class:"katex-block"},[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"d"),e("mrow",null,[e("mi",null,"p"),e("mn",null,"2"),e("mi",null,"p")])]),e("mo",null,"="),e("mi",null,"N"),e("mfrac",null,[e("mi",null,"L"),e("mi",null,"R")])]),e("annotation",{encoding:"application/x-tex"}," d_{p2p} = N \\frac{L}{R} ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.9805em","vertical-align":"-0.2861em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"d"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight"},"p"),e("span",{class:"mord mtight"},"2"),e("span",{class:"mord mathnormal mtight"},"p")])])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2861em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"2.0463em","vertical-align":"-0.686em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),e("span",{class:"mord"},[e("span",{class:"mopen nulldelimiter"}),e("span",{class:"mfrac"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.3603em"}},[e("span",{style:{top:"-2.314em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R")])]),e("span",{style:{top:"-3.23em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),e("span",{style:{top:"-3.677em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"L")])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.686em"}},[e("span")])])])]),e("span",{class:"mclose nulldelimiter"})])])])])])])],-1),c=a(`<p>此外，在网络较拥堵的情况下，分组交换还可能出现因为传输速率较低而导致的排队时延，和分组交换机缓存有限而出现的丢包。</p><div class="hint-container note"><p class="hint-container-title">转发表</p><p>每台路由器都拥有一个转发表，其中存储了数个(IP 地址，出链路)对，用于搜索转发分组的出链路。</p></div><h4 id="电路交换" tabindex="-1"><a class="header-anchor" href="#电路交换" aria-hidden="true">#</a> 电路交换</h4><p>电路交换在两个端系统进行通信期间，预留了通信所需要的资源（带宽等），并为之建立一条专门的连接。</p><p>电路交换网络中有两种复用形式， <strong>频分复用(FDM)<strong>和</strong>时分复用(TDM)</strong>.</p><p>对于 FDM，链路为每条链接专用一个频段。这个频段的宽度称为带宽。</p><p>对于 TDM，时间被划分为固定大小的时间帧，每个时间帧又被划分为等大小的若干时隙。当建立连接时，网络为该条链接指定每一帧中一个特定的时隙。</p><h4 id="分组交换与电路交换的对比" tabindex="-1"><a class="header-anchor" href="#分组交换与电路交换的对比" aria-hidden="true">#</a> 分组交换与电路交换的对比</h4><ul><li>分组交换 <ul><li>优点 <ul><li>带宽共享效率高于电路交换</li><li>灵活性强</li><li>比电路交换更加简单有效，成本更低</li></ul></li><li>缺点 <ul><li>端到端时延不确定</li><li>传输可靠性较低</li></ul></li></ul></li><li>电路交换 <ul><li>优点 <ul><li>端到端时延很小</li><li>连接稳定，不存在丢包、失序问题</li><li>连接建立之后可以随时进行通信，实时性强</li><li>既适用于传输模拟信号，也适用于传输数字信号</li><li>设备控制比较简单</li></ul></li><li>缺点 <ul><li>带宽共享效率低</li><li>灵活性差</li><li>成本较高</li></ul></li></ul></li></ul><h3 id="_5-节点处理时延、排队时延、传输时延、传播时延、吞吐量" tabindex="-1"><a class="header-anchor" href="#_5-节点处理时延、排队时延、传输时延、传播时延、吞吐量" aria-hidden="true">#</a> 5 节点处理时延、排队时延、传输时延、传播时延、吞吐量</h3><h4 id="时延" tabindex="-1"><a class="header-anchor" href="#时延" aria-hidden="true">#</a> 时延</h4><ul><li>节点处理时延：路由器检查分组首部，并决定将分组导向何处所需要的时间（也可能包括检查错误的时间）</li><li>排队时延：分组在等待需要使用的链路传输其他分组所需要的时间</li><li>传输时延：分组在某条链路上传输所需要的时间（分组从路由器中被推出的时间按）</li><li>传播时延：分组中每个比特从链路起点到下一个路由器传播的时间。传播速率一般接近光速。</li><li><strong>某个节点的总时延等于上述时延的总和</strong>。</li></ul><h4 id="吞吐量" tabindex="-1"><a class="header-anchor" href="#吞吐量" aria-hidden="true">#</a> 吞吐量</h4><ul><li>瞬时吞吐量：在某一时刻某个主机接收文件的速率。</li><li>平均吞吐量：某个主机在某一段时间内接收数据的量和时间的比值。</li><li>一般来说，某台主机通过某条链路接收数据的吞吐量取决于链路各个环节吞吐量中的最小值（瓶颈链路）。</li></ul><h3 id="_6-因特网协议栈" tabindex="-1"><a class="header-anchor" href="#_6-因特网协议栈" aria-hidden="true">#</a> 6 因特网协议栈</h3><h4 id="应用层" tabindex="-1"><a class="header-anchor" href="#应用层" aria-hidden="true">#</a> 应用层</h4><p>包含网络应用程序和它们的应用层协议，如 HTTP, SMTP, FTP, DNS 等。</p><p>应用层协议分布在多个端系统上；多个端系统上的应用程序之间使用应用协议交换信息分组。</p><p>这种位于应用层的信息分组称为 <strong>报文(message)</strong>.</p><h4 id="运输层" tabindex="-1"><a class="header-anchor" href="#运输层" aria-hidden="true">#</a> 运输层</h4><p>运输层在应用程序端点之间传送应用层报文。因特网中的运输协议有两种，TCP（确保传递，有流量和拥塞控制）和 UDP（不确保传递，没有流量和拥塞控制）。</p><p>这种位于运输层的信息分组称为 <strong>报文段(segment)</strong>.</p><h4 id="网络层" tabindex="-1"><a class="header-anchor" href="#网络层" aria-hidden="true">#</a> 网络层</h4><p>位于网络层的信息分组称为 <strong>数据报(datagram)</strong>.</p><p>运输层协议会将运输层报文段和目的地址递交给网络层，由网络层负责运输。</p><p>网络层包括网际协议 <strong>IP</strong>。IP 协议定义了数据报中的各个字段和作用。</p><h4 id="链路层" tabindex="-1"><a class="header-anchor" href="#链路层" aria-hidden="true">#</a> 链路层</h4><p>链路层负责将网络层的数据报从网络中的一个节点移动到路径上的下一个节点。</p><p>网络层负责端系统到端系统的可靠传输，而链路层负责一段链路上的两个节点之间的可靠传输。</p><p>位于链路层的信息分组称为 <strong>帧(frame)</strong>.</p><h4 id="物理层" tabindex="-1"><a class="header-anchor" href="#物理层" aria-hidden="true">#</a> 物理层</h4><p>物理层负责将链路层帧的每个比特从一个节点移动到下一个节点。</p><h2 id="第二章-应用层" tabindex="-1"><a class="header-anchor" href="#第二章-应用层" aria-hidden="true">#</a> 第二章 应用层</h2><h3 id="_1-应用程序体系结构" tabindex="-1"><a class="header-anchor" href="#_1-应用程序体系结构" aria-hidden="true">#</a> 1 应用程序体系结构</h3><p>现代网络应用程序通常有两种体系结构： <strong>客户-服务器体系结构</strong> 和 <strong>对等(P2P)体系结构</strong>.</p><h4 id="客户-服务器体系结构" tabindex="-1"><a class="header-anchor" href="#客户-服务器体系结构" aria-hidden="true">#</a> 客户-服务器体系结构</h4><p>在 客户-服务器体系结构 中，有一个总是打开的主机，称为 <strong>服务器</strong>。它服务于来自其他许多主机（称为 <strong>客户</strong> ）的请求。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>在客户-服务器体系结构中，</p><ul><li>客户之间并不直接互相沟通。</li><li>服务器有一个固定、周知的 IP 地址。</li></ul></div><p>采用客户-服务器体系结构的典型应用程序有 FTP, Web, Telnet 和电子邮件。</p><h4 id="对等体系结构" tabindex="-1"><a class="header-anchor" href="#对等体系结构" aria-hidden="true">#</a> 对等体系结构</h4><p>在 对等体系结构 中，应用程序在 <em>间断连接的主机对</em> 之间使用直接通信。 这些主机对被称为 对等方(peer).</p><p>这种对等方通信不需要通过专门的服务器。</p><p>在应用对等体系结构的网络程序中，通常会有服务器被用于跟踪用户的 IP 地址；但用户到用户的数据不需要通过中间服务器发送。</p><p>采用对等体系结构的典型应用程序有 文件共享(BitTorrent)，P2P 下载器，网络电话和视频会议。</p><p>P2P 体系结构的最大特性是 <strong>自扩展性</strong>。</p><h3 id="_2-tcp-和-udp-的区别" tabindex="-1"><a class="header-anchor" href="#_2-tcp-和-udp-的区别" aria-hidden="true">#</a> 2 TCP 和 UDP 的区别</h3><ul><li>TCP 提供面向连接的服务和可靠的数据传输服务——一条 TCP 连接是 全双工（可同时双向传输） 且 可靠（保证送达） 的。</li><li>TCP 还提供拥塞和流量控制。</li><li>UDP 只提供一种不可靠的数据传输服务，它不保证报文能够到达接收方，也不保证接收方接受的报文都是有序的。</li></ul><h3 id="_3-http" tabindex="-1"><a class="header-anchor" href="#_3-http" aria-hidden="true">#</a> 3 HTTP</h3><p>HTTP(HyperText Transfer Protocol, 超文本传输协议) 是 Web 的应用层协议，也是 Web 的核心。</p><p>HTTP 由两个程序实现：一个客户程序和一个服务器程序，它们通过交换 HTTP 报文进行会话。</p><p>HTTP 使用 TCP 作为运输协议。</p><p>首先，HTTP 客户端先发起一个和服务器的 TCP 连接；在连接建立之后，客户会通过自身的 TCP 套接字向服务器发送 HTTP 请求报文和接收 HTTP 响应报文，服务器也通过自身的套接字接受请求报文，发送响应报文。</p><p>HTTP 本身是一个无状态协议；它不会保存关于客户的任何信息，而是使用 cookie 来保存用户的相关信息。</p><div class="hint-container note"><p class="hint-container-title">关于 URL</p><p>每个 URL 由两部分组成： <strong>存放对象的服务器主机名</strong> 和 <strong>对象的路径名</strong>。</p><p>例如，<code>https://yafengnju.github.io/InternetComputing/%E6%80%BB%E5%A4%8D%E4%B9%A0.pdf</code>中，<code>https://yafengnju.github.io</code>就是主机名，而<code>/InternetComputing/%E6%80%BB%E5%A4%8D%E4%B9%A0.pdf</code>就是对象的路径。</p></div><h3 id="_4-因特网电子邮件" tabindex="-1"><a class="header-anchor" href="#_4-因特网电子邮件" aria-hidden="true">#</a> 4 因特网电子邮件</h3><p>电子邮件系统一般由三部分组成：</p><ul><li>用户代理</li><li>邮件服务器</li><li>简单邮件传输协议(SMTP)</li></ul><p>用户通过 <strong>用户代理</strong> 来将邮件发送到接收方的邮件服务器上，和从自己的邮件服务器上获取发给自己的邮件；</p><p>邮件服务器负责将发送方的报文发送给接收方的邮件服务器。</p><p>如果发送方的邮件服务器不能将邮件交付给接收方的邮件服务器（比如接收方的邮件服务器发生了故障），那么它会将这封邮件保存在一个报文队列中并再次尝试发送。如果多次发送均失败，发送方的邮件服务器则会通过电子邮件的形式通知发送方。</p><h4 id="smtp-的基本操作" tabindex="-1"><a class="header-anchor" href="#smtp-的基本操作" aria-hidden="true">#</a> SMTP 的基本操作</h4><ul><li>发送方调用邮件代理程序并提供接收方的邮件地址，编写报文，然后通过用户代理发送报文。</li><li>发送方的用户代理将报文发送至发送方的邮件服务器，并被放在报文队列中。</li><li>发送方的邮件服务器上的 SMTP 客户端发现了该报文，并创建一条到接收方邮件服务器的 SMTP 服务器的 TCP 连接。</li><li>经过 SMTP 握手后，发送方服务器通过该 TCP 连接发送报文。</li><li>接收方邮件服务器接收该报文，并放入接收方邮箱中。</li><li>接收方调用用户代理阅读这条报文。</li></ul><h3 id="_5-推协议和拉协议" tabindex="-1"><a class="header-anchor" href="#_5-推协议和拉协议" aria-hidden="true">#</a> 5 推协议和拉协议</h3><p>如果一个协议中 TCP 连接是想要接收文件的主机发起的，那么这个协议就是拉协议。反之，如果一个协议中 TCP 连接是由想要发送文件的主机发起的，那么这个协议就是推协议。</p><h3 id="_6-域名系统-dns" tabindex="-1"><a class="header-anchor" href="#_6-域名系统-dns" aria-hidden="true">#</a> 6 域名系统(DNS)</h3><p>一台因特网上的主机既可以用 IP 地址进行标识，也可以用 <strong>主机名</strong> 进行标识。</p><p>DNS 的作用：</p><ul><li>将便于识记的主机名转换为便于路由器使用的 IP 地址。</li><li>提供主机别名（将多个主机名解析到同一个 IP 地址）。</li><li>提供邮件服务器别名。</li><li>负载分配（将对于部署在多个主机上的繁忙网站的请求解析到不同的主机上）。</li></ul><p>DNS 由两部分组成：</p><ul><li>一个由分层的 DNS 服务器实现的分布式数据库</li><li>一个使得主机能够查询上述数据库的 <strong>应用层协议</strong></li></ul><h4 id="分布式-dns-服务器" tabindex="-1"><a class="header-anchor" href="#分布式-dns-服务器" aria-hidden="true">#</a> 分布式 DNS 服务器</h4><p>DNS 服务器一般分为如下几种：</p><ul><li>根 DNS 服务器 <ul><li>提供顶级域 DNS 服务器的 IP 地址。</li></ul></li><li>顶级域(TLD) DNS 服务器 <ul><li>负责各个顶级域名和国家的顶级域名，如<code>.com</code>, <code>.org</code>, <code>.edu</code>, <code>.uk</code>等。</li><li>提供权威 DNS 服务器的 IP 地址。</li></ul></li><li>权威 DNS 服务器 <ul><li>负责 <strong>某个组织机构</strong> 的 <strong>公共可访问主机</strong> 的域名解析。</li></ul></li><li><em>本地 DNS 服务器</em><ul><li>不属于 DNS 服务器的层次结构</li><li>每个 ISP 都拥有自己的本地 DNS 服务器。</li><li>负责代理本地主机的 DNS 请求。</li></ul></li></ul><h4 id="递归查询和迭代查询" tabindex="-1"><a class="header-anchor" href="#递归查询和迭代查询" aria-hidden="true">#</a> 递归查询和迭代查询</h4><ul><li>递归查询：每一级 DNS 服务器都以自身的名义去查询自己的上一级服务器，在得到 DNS 结果后将回复层层向下传递。</li><li>迭代查询：某个主机（或服务器）不断地向不同的 DNS 服务器查询下一个需要查询的 DNS 服务器，直到获得 DNS 结果为止。</li></ul><h2 id="第三章-运输层" tabindex="-1"><a class="header-anchor" href="#第三章-运输层" aria-hidden="true">#</a> 第三章 运输层</h2><h3 id="多路复用、多路分解" tabindex="-1"><a class="header-anchor" href="#多路复用、多路分解" aria-hidden="true">#</a> 多路复用、多路分解</h3><p>一台主机上可能有多个网络应用，每个应用都有一个或多个套接字来访问网络。</p><ul><li>多路复用：运输层从所有套接字中收集数据块，并为每个数据块封装首部信息后生成报文段，然后传递到网络层。</li><li>多路分解：运输层从网络层接收到报文段之后，通过首部信息（源端口号、目的端口号）来将报文段中的数据交付到正确的套接字中。</li></ul><h3 id="udp-tcp-套接字" tabindex="-1"><a class="header-anchor" href="#udp-tcp-套接字" aria-hidden="true">#</a> UDP / TCP 套接字</h3><p>一台主机上的一个 UDP 套接字由（源端口号，目的端口号）唯一标识，而 TCP 套接字则由（源端口号，源 IP 地址，目的端口号，目的 IP 地址）标识；<strong>（除非 TCP 报文段携带了创建初始链接的请求，）两个源 IP 地址不同的 TCP 报文将被发送到两个不同的 TCP 套接字。</strong></p><p>UDP 报文的结构：</p><div class="language-Table line-numbers-mode" data-ext="Table"><pre class="language-Table"><code>
| 16-bit src port | 16-bit dest port |
|     UDP len     |     checksum     |
|               Data                 |

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-udp-而非-tcp-的原因" tabindex="-1"><a class="header-anchor" href="#使用-udp-而非-tcp-的原因" aria-hidden="true">#</a> 使用 UDP 而非 TCP 的原因</h3><div class="hint-container note"><p class="hint-container-title">为什么有些应用使用 UDP 而不使用 TCP？</p><ul><li>在发送什么数据、何时发送的应用层控制，UDP 更加精细。</li><li>一些不需要建立连接的应用适合使用 UDP。（降低延时——不用建立连接）</li><li>一些不需要维护连接状态的应用适合使用 UDP。（不需要管理拥塞控制——可以支持更多流量）</li><li>UDP 的分组首部（8bytes）开销小于 TCP（20bytes）。</li></ul></div><h3 id="udp-检验和的计算" tabindex="-1"><a class="header-anchor" href="#udp-检验和的计算" aria-hidden="true">#</a> UDP 检验和的计算</h3><p>UDP 首先将报文段按照 16 比特分为数个字，然后将所有的字相加。</p><div class="hint-container warning"><p class="hint-container-title">注意：</p><p>UDP 计算检验和的时候使用循环加法，也就是<strong>将加法中首位溢出的部分加到尾部</strong>。</p></div><p>假如有如下三个字：</p><div class="language-Text line-numbers-mode" data-ext="Text"><pre class="language-Text"><code>0110011001100000
0101010101010101
1000111100001100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么计算检验和的过程就是：</p><div class="language-Text line-numbers-mode" data-ext="Text"><pre class="language-Text"><code>      0110011001100000
+     0101010101010101
----------------------
=     1011101110110101
+     1000111100001100
----------------------
=    *0100101011000010
~     （取反）
----------------------
=     1011010100111101

// *: 发生了溢出，将溢出的1加到末尾
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此最后的检验和值(checksum)是<code>1011010100111101</code>。</p><p>接收方接收到含有检验和的报文之后，按照同样的方式将所有的字相加。因为检验和在计算的时候进行了取反，所以正确的计算结果应当全部为 0。</p><p>如果 UDP 检测到了报文段发生错误，则它将丢弃该报文段。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>注意：UDP 的检验和<strong>无法校验偶数位</strong>的错误。</p></div><h3 id="tcp-的肯定确认、否定确认与自动重传请求协议" tabindex="-1"><a class="header-anchor" href="#tcp-的肯定确认、否定确认与自动重传请求协议" aria-hidden="true">#</a> TCP 的肯定确认、否定确认与自动重传请求协议</h3><ul><li>肯定确认：接收方在确认接收信息无误后发送一条肯定信息，表明确认信息收到。</li><li>否定确认：接收方在接收到模糊不清/有错误的信息后发送一条否定信息，表明需要重新传输该信息。</li><li>自动重传请求协议(ARQ)：基于上述两种重传机制实现的可靠数据传输协议。</li></ul><p>具体来说，ARQ 中有三种协议功能来处理比特差错：</p><ul><li>差错检测（包括检验和等方法） // TODO：差错检测方法</li><li>接收方反馈（包括 ACK（肯定确认）和 NAK（否定确认））</li><li>重传</li></ul><h3 id="停等协议、比特交替协议" tabindex="-1"><a class="header-anchor" href="#停等协议、比特交替协议" aria-hidden="true">#</a> 停等协议、比特交替协议</h3><ul><li>停等协议：发送方发送一个分组后将停止发送并等待接收方的 ACK / NAK。</li><li>比特交替协议： <ul><li>是一种停等协议</li><li>加入了分组序号以区分重传和正常传输</li><li>加入了定时器（冗余风阻）功能以解决丢包问题</li></ul></li></ul><h3 id="回退-n-步" tabindex="-1"><a class="header-anchor" href="#回退-n-步" aria-hidden="true">#</a> 回退 N 步</h3><p>回退 N 步协议（GBN）将所有分组分为 4 部分：</p><div class="language-Text line-numbers-mode" data-ext="Text"><pre class="language-Text"><code>
|已发送、已确认|已发送、还未确认|可发送、还未发送|不可发送|

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<em>已发送、还未确认</em> 和 <em>可用、还未发送</em> 的分组数量之和不能超过某个特定数值 <code>N</code>。 这个数值被称为 <u>窗口长度</u>；GBN 协议也因此经常被称为 <u>滑动窗口协议</u>.</p><p>当出现超时事件时，GBN 协议将回退到 <em>出现超时的分组</em> ，并从该分组开始 <em>重传所有已经发送的分组</em>。</p><p>在使用 GBN 协议的传输中，接收方会丢弃所有失序分组。</p><p>GBN 的缺陷：有时可能会导致大量的重传（当发送窗口和时延都较大时）。</p><h3 id="选择重传" tabindex="-1"><a class="header-anchor" href="#选择重传" aria-hidden="true">#</a> 选择重传</h3><p>在使用选择重传协议的传输中，接收方会逐个确认被正确接收的分组，并缓存失序的分组直到所有丢失分组都被收到为止。</p><p>选择重传也使用一个滑动的窗口来限制分组的发送，但不同的是选择重传的窗口起始位于第一个已发送但未收到确认的分组；发送窗口中可能会同时存在已经确认了的分组、已发送但还未确认的分组和可用但还未发送的分组。</p><p>在选择重传中，每个分组都有自己的逻辑定时器，并在定时器触发后只重传该分组。</p><div class="hint-container warning"><p class="hint-container-title">关于滑动窗口大小</p><p>在流水线传输协议中，一般窗口大小应当小于等于序号空间的一半（以避免接收方将重传的序号当成新分组的序号（进行模运算之后））.</p></div><p>// TODO</p><h3 id="tcp-发送数据的过程" tabindex="-1"><a class="header-anchor" href="#tcp-发送数据的过程" aria-hidden="true">#</a> TCP 发送数据的过程</h3><p>对于发送方来说，TCP 会将应用程序发送来的数据存入握手时建立的发送缓存中，并定期从发送缓存中取出数据，包装成 TCP 报文并传递到网络层。</p><p>TCP 一次性从缓存中取出的数据量受限于 <strong>最大报文段长度(Max Segment Size)</strong>，而 MSS 又通常根据最初确定的 本地主机发送的 <strong>最大链路层帧长度</strong>，即 <strong>最大传输单元(Max Transmission Unit)</strong>. 二者之间一般的关系是 <code>MSS + 40 (TCP/IP 首部长度) = MTU</code>.</p><p>对于接收方来说，TCP 会将接收到的 TCP 报文段提取出数据并放置在该 TCP 连接的接收缓存中，供应用程序取用。</p><h3 id="tcp-报文段结构" tabindex="-1"><a class="header-anchor" href="#tcp-报文段结构" aria-hidden="true">#</a> TCP 报文段结构</h3><p>TCP 报文段的组成如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|Src Port Number| Dest Port Number|
|              Seq                |
|        Acknowledge Number       | // 用于接收方发给发送方时标志 “期望收到的下一字节的序号”。
|Header Len|Reserved|*|Recv Window| // 接收窗口用于流量控制。
|    Checksum   | Urgent Data Ptr |
|            Options              | // 可选、变长；一般为空。
|             Data                |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>*</code>: 标志字段(<code>flags</code>)。包括<code>ACK</code>（确认字段有效）, <code>RST</code>, <code>SYN</code>, <code>FIN</code>（用于连接建立和拆除）, <code>CWR</code>, <code>ECE</code>（明确拥塞通告）, <code>URG</code>和<code>PSH</code>。在实践中，紧急数据指针、<code>URG</code>和<code>PSH</code>并不使用。</p><div class="hint-container note"><p class="hint-container-title">关于序号</p><p>注意 TCP 连接是全双工的；也就是说，双方可以同时发送和接收数据。因此，从一方到另一方的传输和反向的传输 <strong>可能使用不同的序号</strong>。</p></div><h3 id="流量控制、拥塞控制" tabindex="-1"><a class="header-anchor" href="#流量控制、拥塞控制" aria-hidden="true">#</a> 流量控制、拥塞控制</h3><p><strong>流量控制是一个速度匹配服务</strong>：将发送方的发送速率和接收方的接收速率相匹配。</p><p><strong>拥塞控制</strong>则是指发送方的行为因 IP 网络的拥塞而被遏制。</p><h3 id="tcp-的三次握手" tabindex="-1"><a class="header-anchor" href="#tcp-的三次握手" aria-hidden="true">#</a> TCP 的三次握手</h3><p>两台主机建立 TCP 连接的过程如下：</p><ul><li>首先，客户端的 TCP 向服务端 TCP 发送 <strong>SYN 报文段</strong>。 <ul><li>这个报文段中不包含应用数据，但 <strong><code>SYN</code>标志为 1</strong>。</li><li>客户还将随机选择一个初始序号(<code>client_isn</code>)并放置在序号字段中。</li></ul></li><li>来自客户端的 SYN 报文段到达服务器后，服务器会为该 TCP 链接分配 TCP 缓存和各个变量，并向客户端发送 <strong>SYNACK 报文段</strong>。 <ul><li>SYNACK 报文段中不包含应用层数据，但 <ul><li><code>SYN</code>标志为 1</li><li>确认号会被置为 <code>client_isn + 1</code>.</li><li>服务器会随机选择自身的初始序号(<code>server_isn</code>)并放置在序号中。</li></ul></li></ul></li><li>客户端收到 SYNACK 报文段后，为该 TCP 链接分配缓存和变量，并发送对 SYNACK 报文段的确认。 <ul><li>该确认报文中，确认字段为<code>server_isn + 1</code>.</li><li><code>SYN</code>标志为 0（连接已经建立）。</li></ul></li></ul><h3 id="tcp-的拥塞控制" tabindex="-1"><a class="header-anchor" href="#tcp-的拥塞控制" aria-hidden="true">#</a> TCP 的拥塞控制</h3><p>一个 TCP 连接会维护如下几个变量：</p><ul><li><code>LastByteRead</code>:接收方从缓存读出的最后一个字节的编号。</li><li><code>LastByteRcvd</code>:接收方放入缓存的最后一个字节编号。</li><li><code>rwnd</code>: 接收窗口。</li><li><code>LastByteAcked</code>:发送方收到确认的最后一个字节的编号。</li><li><code>LastByteSent</code>:发送方发送的最后一个字节的编号。</li></ul><p>以上变量满足如下关系：</p><ul><li><code>LastByteRcvd - LastByteRead &lt;= RcvBuffer</code> （禁止缓存溢出）</li><li><code>rwnd = RcvBuffer - (LastByteRcvd - LastByteRead)</code> （接收窗口 = 接收方缓存剩余空间）</li><li><code>LastByteSent - LastByteACKed &lt;= rwnd</code> （发送方保证不造成接收方缓存溢出）</li></ul><p>此外，发送方额外维护一个变量<code>cwnd</code>（拥塞窗口），并引入如下规则：</p><p><code>LastByteSent - LastByteACKed &lt;= min {rwnd, cwnd}</code></p><p><strong>假设接收方缓存大小无穷大</strong>，则上述规则约束了 TCP 发送方在每个往返时间(RTT)中最多发送<code>cwnd</code>字节的数据——发送数据的速率大约是 <code>cwnd / RTT</code>B/s.</p><p>以下条件会被发送方判断为出现丢包（标志此时链路已经出现拥塞）。</p><ul><li>超时</li><li>收到 <strong>三个冗余 ACK</strong> （一个初始 ACK 和三个重复的 ACK）</li></ul><p>TCP 的拥塞控制算法按照以下原则进行：</p><ul><li>出现丢包事件意味着出现拥塞，此时应当降低发送速率。</li><li>接收到一个（非冗余的）确认报文段意味着“一切顺利”，此时应当增加发送速率。</li><li>TCP 将不断增加传输速率，直到出现丢包才减少。</li></ul><h4 id="_1-慢启动" tabindex="-1"><a class="header-anchor" href="#_1-慢启动" aria-hidden="true">#</a> 1 慢启动</h4><p>当一条 TCP 连接开始时，cwnd 通常被设置为一个较小的值（如一个 MSS），并为每个被确认的报文段将 cwnd 增加一个 MSS。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>注意：这种增长方式是指数而非线性的（每次增加上次发送的报文段数量的 MSS）。</p></div><p>当 <strong>出现一个由超时指示的丢包事件</strong>， TCP 发送方就将<code>cwnd</code>重置为 一个 MSS ，并将另一个变量<code>ssthreshold</code>（慢启动阈值）设置为<code>cwnd / 2</code>（出现丢包前的最大 cwnd 的一半）。</p><p><strong>此后，当 cwnd 到达或超过<code>ssthreshold</code>的值时，结束慢启动并转移至拥塞避免模式。</strong></p><h4 id="_2-拥塞避免" tabindex="-1"><a class="header-anchor" href="#_2-拥塞避免" aria-hidden="true">#</a> 2 拥塞避免</h4><p>当进入拥塞避免模式后，TCP <strong>在每个 RTT 时间内</strong> 只会将<code>cwnd</code>增加一个 MSS。(按照 <strong>时间</strong> 增加，区别于慢启动阶段按照 确认数量 增加)。</p><p>当出现 <strong>由超时指示的丢包</strong> 时，TCP 将把 <code>cwnd</code> <strong>设置为一个 MSS</strong>，并将<code>ssthreshold</code>更新为 发生丢包前<code>cwnd</code>的一半，然后进入快速恢复状态。</p><p>当出现 <strong>由 3 个冗余 ACK 指示的丢包</strong> 时，</p><ul><li>TCP Reno 仅将<code>cwnd</code>的值 <strong>减半</strong> （并为 3 个已经接收到的 ACK 加上 3 个 MSS），并将<code>ssthreshold</code>更新为 发生丢包前<code>cwnd</code>的一半，然后进入 <strong>快速恢复</strong> 状态。</li><li>TCP Tahoe 将<code>cwnd</code>再次设置为一个 MSS，将<code>ssthreshold</code>更新为 发生丢包前<code>cwnd</code>的一半，并进入 <strong>慢启动</strong> 状态。</li></ul><h4 id="_3-快速恢复" tabindex="-1"><a class="header-anchor" href="#_3-快速恢复" aria-hidden="true">#</a> 3 快速恢复</h4><p>在进入快速恢复时，TCP 会将<code>cwnd</code>设为 <code>(ssthreshold + DuplicateACKs * MSS)</code>，然后立即重传它认为丢失的报文。</p><p>此后，每当收到一次对于上述报文的冗余 ACK（说明之前发送了其他的报文且被接收了），就将<code>cwnd</code>增加一个 MSS。</p><p>维持上述状态，直到收到一个对新的报文段的 ACK，转入拥塞控制模式。</p><h2 id="第四章-网络层-数据平面" tabindex="-1"><a class="header-anchor" href="#第四章-网络层-数据平面" aria-hidden="true">#</a> 第四章 网络层：数据平面</h2><h3 id="网络层数据平面和控制平面的作用与区别" tabindex="-1"><a class="header-anchor" href="#网络层数据平面和控制平面的作用与区别" aria-hidden="true">#</a> 网络层数据平面和控制平面的作用与区别？</h3><ul><li>数据平面：数据平面功能是 <strong>每一台路由器的功能</strong>——决定到达路由器输入链路的数据报应当如何转发，被转发到哪条输出链路。</li><li>控制平面：控制平面功能是 <strong>整个网络范围的逻辑</strong>——控制数据报从源主机到目的主机的端到端路径中选择路由的方式。</li></ul><h3 id="转发和路由选择" tabindex="-1"><a class="header-anchor" href="#转发和路由选择" aria-hidden="true">#</a> 转发和路由选择</h3><p>转发和路由选择都是网络层的功能。</p><ul><li>转发：当一个分组到达路由器的某一条输入链路时，该路由器必须将这个分组移动到适当的输出链路。将分组从输入链路端口移动到输出链路端口的动作称为转发。</li><li>路由选择：当分组从发送方流向接收方时，网络层必须决定这些分组所采用的路径——计算这些路径的算法被称为路由选择算法，确定选择的路由的过程被称为路由选择。</li></ul><h3 id="路由器的组成" tabindex="-1"><a class="header-anchor" href="#路由器的组成" aria-hidden="true">#</a> 路由器的组成</h3><p>路由器主要由如下组件组成：</p><ul><li>输入端口 <ul><li>终结入物理链路的物理层功能。</li><li>和入链路远端的数据链路层交互，以执行数据链路层功能。</li><li>查找转发表，决定路由器的输出端口</li></ul></li><li>交换结构 <ul><li>将路由器的输入端口连接到它的输出端口</li></ul></li><li>输出端口 <ul><li>存储从交换结构接收的分组</li><li>在输出链路上传输这些分组</li><li>当一条链路为双向链路，输入端口和输出端口通常成对出现在同一线路卡上</li></ul></li><li>路由选择处理器 <ul><li>执行控制平面功能 <ul><li>在传统路由器中，执行路由选择协议；</li><li>在 SDN（软件定义网络）中，负责与远程控制器通信，接收远程控制器计算的转发表项，并在输入端口安装这些表项。</li></ul></li></ul></li></ul><h3 id="最长前缀匹配规则" tabindex="-1"><a class="header-anchor" href="#最长前缀匹配规则" aria-hidden="true">#</a> 最长前缀匹配规则</h3><p>路由器使用 <strong>最长前缀匹配规则</strong> 来将目的地址和转发表中的地址进行匹配。</p><p>// TODO：添加更多信息</p><h3 id="三种交换方式" tabindex="-1"><a class="header-anchor" href="#三种交换方式" aria-hidden="true">#</a> 三种交换方式</h3><ul><li>经内存交换 <ul><li>在早期路由器中使用</li><li>当某个分组到达输入端口时，向 CPU 发送中断。CPU 将该分组复制到内存中，从中提取目的地址，查找适当的输出端口，并将分组复制到输出端口的缓存中。</li><li>不能同时转发两个分组——共享系统总线一次只能传输一个分组。</li></ul></li><li>经总线交换 <ul><li>在这种方法中，输入端口通过一根共享总线直接传送到输出端——总线将分组转发到所有输出端口，但只有有特定标签的输出端口会保存该分组。</li><li>总线中同时只能存在一个分组。</li></ul></li><li>经互联网络交换 <ul><li>对于具有 N 个输入和输出端口来说的路由器，交换结构采用 2N 条相互垂直且相交的总线，并在交叉点采用交换结构控制器开启和闭合。</li><li>可以并行转发多个 <strong>目的端口不同的</strong> 分组，是 <strong>非阻塞的</strong>。</li><li></li></ul></li></ul><h3 id="分组调度" tabindex="-1"><a class="header-anchor" href="#分组调度" aria-hidden="true">#</a> 分组调度</h3><ul><li>先进先出（FIFO） <ul><li>简单的将所有分组按照到达次序排队并依次转发；如果队列已满，则丢弃最新到达的分组。</li></ul></li><li>优先权排队 <ul><li>在该规则下，到达输出链路的分组被分类放入不同优先级的输出队列。当需要传输分组时，路由器会从非空的优先级最高的队列中选择一个分组并传输。</li><li>在 <strong>非抢占式优先权排队</strong> 中，分组的传输一旦开始，就不能被打断（即便是优先权更高的分组）。</li></ul></li><li>循环排队 <ul><li>在该规则下，分组被放入不同编号的队列中；调度器会在这些队列之间循环提供服务，且不允许链路在仍有待传输分组时保持空闲。</li></ul></li><li>加权公平排队 <ul><li>所有分组被放入分配了不同权值的队列中</li><li>调度器会保证用于服务权值为<code>w</code>队列的时间占比为 <code>w / w_total</code>。</li></ul></li></ul><h3 id="ipv4" tabindex="-1"><a class="header-anchor" href="#ipv4" aria-hidden="true">#</a> IPv4</h3><h4 id="ip-地址" tabindex="-1"><a class="header-anchor" href="#ip-地址" aria-hidden="true">#</a> IP 地址</h4><p>每个 IPv4 地址长度为 32bit，按照字节分隔。</p><p>例：</p><div class="language-Text line-numbers-mode" data-ext="Text"><pre class="language-Text"><code>十进制记法：10.54.33.110
二进制记法：00001010 00110110 00100001 01101110
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="子网" tabindex="-1"><a class="header-anchor" href="#子网" aria-hidden="true">#</a> 子网</h4><p>我们通常会将主机和路由器的端口分开，产生几个互相隔离的网络岛，并用接口连接这些隔离网络的端点。每个被隔离的网络都是一个子网。</p><p>IP 编址会为子网分配一个形如<code>xxx.xxx.xxx.xxx/yy</code>的地址，代表着该子网中的所有端系统的 IPv4 地址都具有相同的前 y 位前缀（已经给出）。y 也被称为子网掩码，意味着 32 比特中左 y 位定义了子网地址。</p><h4 id="无类别域间路由选择-classless-interdomain-routing" tabindex="-1"><a class="header-anchor" href="#无类别域间路由选择-classless-interdomain-routing" aria-hidden="true">#</a> 无类别域间路由选择（Classless InterDomain Routing）</h4><p>因特网一般采用 CIRD 来分配地址。</p><p>当使用子网寻址时，形如<code>a.b.c.d/x</code>的 32 比特的地址会被划分为两部分，其中第一部分具有<code>x</code>个比特。</p><p>一个组织通常会被分配一段连续的地址（也就是共享相同前缀的一段地址）。 当组织外的主机想要向组织内的一个地址转发数据报时，只需要考虑该地址的前 x 个比特即可。</p><h3 id="动态主机配置协议-dynamic-host-configuration-protocol" tabindex="-1"><a class="header-anchor" href="#动态主机配置协议-dynamic-host-configuration-protocol" aria-hidden="true">#</a> 动态主机配置协议 (Dynamic Host Configuration Protocol)</h3><p>DHCP 允许连接到子网的主机被自动分配一个固定/随机的地址且不需要手动配置。</p><p>一台主机使用 DHCP 获取地址需要四个步骤：</p><ul><li>DHCP 服务器发现 <ul><li>客户向整个网络广播 <strong>DHCP 发现报文</strong>。</li></ul></li><li>DHCP 服务器提供 <ul><li>DHCP 服务器收到发现报文后，<strong>同样使用广播地址</strong> 向客户发送 <strong>DHCP 提供报文</strong>（因为可能该子网中存在多个 DHCP 服务器）。 DHCP 提供报文中包含： <ul><li>发现报文的事务 ID</li><li>向客户推荐的 IP 地址</li><li>网络掩码</li><li>IP 租用期</li></ul></li></ul></li><li>DHCP 请求 <ul><li>客户从（收到了 DHCP 提供报文的）多个 DHCP 服务器中选择一个，并向其发送 DHCP 请求报文来回显（前文中）配置的参数。</li></ul></li><li>DHCP ACK <ul><li>服务器向客户发送 DHCP ACK 报文来确认参数正确。</li></ul></li></ul><h3 id="网络地址转换-network-address-translation" tabindex="-1"><a class="header-anchor" href="#网络地址转换-network-address-translation" aria-hidden="true">#</a> 网络地址转换 (Network Address Translation)</h3><p>NAT 普遍应用于 <strong>分配的 IP 地址不够子网中所有设备使用</strong> 的情景。</p><p>在一个使用 NAT 的网络中，存在着一个 <strong>NAT 使能路由器</strong>。整个 NAT 网络上只有该路由器拥有广域网侧的 IP 地址。所有子网中的分组经过该 NAT 使能路由器，使用同一个广域网 IP 地址向外发送。</p><p>工作原理：</p><ul><li>子网内的主机 A 为一个数据报指派了端口号 x，并将该数据报发送至 LAN 中</li><li>NAT 路由器接收到该数据报，为其指派一个新端口号 y，将源 IP 替换为自身广域网一侧的接口地址，并向广域网发送。 <ul><li>通过这种方式，NAT 路由器产生了一个<code>端口号-&gt;子网IP地址+子网端口号</code>的 NAT 转换表。</li><li>NAT 路由器最多可支持 6 万多个设备（共有 6 万多个端口）。</li></ul></li><li>web 服务器发送一个回复数据报，目的 IP 是 NAT 广域网一侧的 IP，端口号为 y</li><li>NAT 路由器接收该数据报后，将目的 IP 地址和端口号根据 NAT 转换表中的数据重写并发送到家庭网络中。</li></ul><h3 id="ipv4-向-ipv6-迁移中的-建隧道-tunneling-方法" tabindex="-1"><a class="header-anchor" href="#ipv4-向-ipv6-迁移中的-建隧道-tunneling-方法" aria-hidden="true">#</a> IPv4 向 IPv6 迁移中的 <strong>建隧道 (tunneling)</strong> 方法</h3><p>假如两个使用 IPv6 的节点要使用 IPv6 数据报，通过 IPv4 路由器互联的中间网络交互，我们将两台 IPv6 路由器之间所有的 IPv4 路由器的集合称为一个 <strong>隧道</strong>。</p><p>在隧道口，IPv6 节点将 IPv6 数据报放在一系列 IPv4 数据报的 <strong>数据字段</strong> 中，并通过 IPv4 路由器组成的隧道传输。</p><p>在隧道末尾，IPv6 节点在确定收到的 IPv4 数据报载荷中有一个 IPv6 数据报（协议号字段为 41）后，将该 IPv6 数据报取出，再转发。</p><h2 id="第五章-网络层-控制平面" tabindex="-1"><a class="header-anchor" href="#第五章-网络层-控制平面" aria-hidden="true">#</a> 第五章 网络层：控制平面</h2><h3 id="每路由器控制、逻辑集中式控制-转发表、流表的维护" tabindex="-1"><a class="header-anchor" href="#每路由器控制、逻辑集中式控制-转发表、流表的维护" aria-hidden="true">#</a> 每路由器控制、逻辑集中式控制（转发表、流表的维护）</h3><ul><li>每路由器控制 <ul><li>在每台路由器中都运行一种路由选择算法，每台路由器都包括转发和路由选择功能。</li><li>每台路由器中都含有一个路由选择组件，用于和其他路由器中的路由选择组件通信，以计算转发表的值。</li></ul></li><li>逻辑集中式控制 <ul><li>存在一个逻辑集中式控制器，负责计算并分发转发表给每台路由器使用。</li><li>可以执行多种功能。</li></ul></li></ul><h3 id="路由选择算法-链路状态算法、距离向量算法" tabindex="-1"><a class="header-anchor" href="#路由选择算法-链路状态算法、距离向量算法" aria-hidden="true">#</a> 路由选择算法（链路状态算法、距离向量算法）</h3>`,201),o=[r,t,c];function h(p,u){return n(),s("div",null,o)}const P=l(d,[["render",h],["__file","computer_network_notes.html.vue"]]);export{P as default};
