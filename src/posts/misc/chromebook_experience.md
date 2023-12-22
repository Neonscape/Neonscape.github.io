---
article: true
author: Neonscape
date: 2023-12-22
image: /assets/imgs/bgs/36.png
cover: /assets/imgs/bgs/37.png
category: 
- misc
tags:
- devices
- chromebook
- linux
- debian
---

# Chromebook 折腾记 —— HP Chromebook c640

## 前言

之前偶然看到了一系列非常有意思的机子——chromebook. 这些有着高配置、高颜值却只要几百块钱的机子，由于其搭载的ChromeOS的特殊性而无人问津；而对于我这种预算不高却愿意折腾的穷鬼来说，却是一个极好的选择。

我手上的这台机子 - HP Chromebook c640, 参数如下：

- CPU：Intel Core i5-10310u @ 4.4GHz with UHD Graphics
- RAM: 8GB 板载内存
- SSD: 64GB eMMC
- 屏幕: 1920 * 1080 IPS 触摸屏
- 电池: 60Wh
- 接口:
  - 2 * USB-A
  - 2 * USB-C
  - 1 * 3.5mm
  - 1 * SD TF slot
  - 1 * HDMI

这样的配置在这篇文章写就的时候，只要718￥就能拿下（某黄鱼），只能说是垃圾佬的福音了。

## 使用体验

总结：这台Chromebook适用于那些有便携、长续航、（相对较强的性能）需求、**动手能力强** 的人，比如在除了家（或者宿舍）之外的地方写代码、看文件、看课件、写文档等一系列使用场景。

经过两天的使用，这台机器的性能和续航表现都令人满意——\
性能方面，Minecraft 1.20.4 原版游戏，在默认设置下能有接近50fps的表现；
续航方面，在100%亮度、蓝牙连接鼠标和耳机、后台播放音乐、前台阅读PDF的负载下续航能够达到惊人的～9h。

缺点也有：

- chromebook系列的机子键盘布局都很奇怪；那些法意西日键盘就不说了，即便是通用的美式键盘，初次上手都需要一段时间适应（功能键只有F1 ～ F10；没有传统的Super（Windows徽标）键；CapsLock键所在的地方被替换成了搜索键；没有delete、end、home键等文字编辑键等），且需要键位映射来解决部分按键缺失的问题。
- Windows下声卡驱动需要付费；Linux只有部分系统能够顺利安装，其他系统都有一系列的毛病（且大部分人用Linux的经验应该都比较贫乏）。

如果你能接受这些缺点且有上面的那些需求，而且愿意动手的话，Chromebook确实是适合你的产品。

## 折腾过程

整个过程大致可以分为步：

- 开启开发者模式
- 禁用写保护
- 刷入第三方UEFI固件
- 安装系统

### 准备工作

- **能够科学上网的环境（手机和电脑）（非常重要！！）**
- 一把小螺丝刀（最好手柄粗一些，不然有的螺丝会拧不下来）
- 拆机翘片（或者其他什么硬薄片）
- 一个usb-type c电源（或者其他的电源适配器）
- 一个可以随意刷写的、大于等于8GB的U盘
- 除了chromebook以外的一台电脑（Windows / Linux 均可）

你需要的网址在这里：

- [ChrUltrabook Docs](https://chrultrabook.github.io/docs/)
- [MrChromebox](https://mrchromebox.tech/)

### 准备要安装的系统

去下载一个你喜欢的系统镜像（我下载的是Debian 12）与[Ventoy](https://www.ventoy.net/en/index.html).

将Ventoy安装在你的U盘中（选择GPT模式）；安装之后，将下载的系统镜像拷贝到安装完后的U盘中。

### 查询支持

首先，你需要去[这个网站](https://chrultrabook.github.io/docs/docs/firmware/supported-devices.html)查询一下你的设备是否在支持列表中（以及刷了系统后可能会出现的问题）。

如果你的设备在表中`UEFI_SUPPORT`那一栏显示的是对号，那么恭喜你，你的设备可以安装完整的UEFI系统。

### 进入开发者模式

:::WARNING
注意：进入开发者模式后，Chromebook将会格式化。因此，请提前做好数据备份。
:::

**请在这一步骤中始终保持电源连接**。

首先按住esc、刷新（F3）和电源键进入恢复模式。

在恢复模式下，按Ctrl + D

*施工中*