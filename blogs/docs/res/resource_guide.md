---
title: 文档：资源系统帮助
date: 2025-10-04
category:
  - 资源系统
  - 帮助
  - 开发文档
---

## 需要添加新的资源种类？

1. 在EResourceType中添加对应的枚举项
2. 从UResourceTableBase继承实现新的资源注册表类
3. 在`Game/Main/Resources`中创建一个新的DataAsset，继承自上文创建的资源注册表类
4. 在ResourceSystemSettings中注册对应的资源表类->映射表DataAsset的映射
5. 在AssetManager-PrimaryAssetTypesToScan里添加对应的映射表
6. 在GameResourceSubsystem中添加对应的蓝图同步和异步Get函数
7. 在新创建的DataAsset中注册资源ID-二进制资源的映射

## 如何使用资源？

先在对应类别的资源注册表中注册好你的二进制资源，然后根据使用情况：

- 蓝图：调用GameResourceSubsystem中相应的蓝图Get函数，传入资源ID即可
- C++：调用GameResourceSubsystem中的GetResource / GetResourceAsync