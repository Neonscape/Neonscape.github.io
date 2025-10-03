---
title: 文档：资源系统
date: 2025-10-02
category:
  - 资源系统
  - 开发文档
---

初步想法：

使用资源系统维护系统中所有二进制资源的加载、更新、引用和查找。

- 各类别的映射DataAsset，包括对应类别资源的`TMap<FName, T>`
- 资源子系统
  - 初始化：加载各个映射DataAsset，挨个检测合法性并读取到Map中
  - 同步获取：根据ID同步加载并获取对应的资源
  - 异步获取：根据ID异步加载对应的资源，并在加载完成时调用回调

## 资源种类

| 资源种类   | 2D材质     | Metasound源 | 静态网格体  | 骨骼网格体    |
| ---------- | ---------- | ----------- | ----------- | ------------- |
| 对应枚举项 | TEXTURE_2D | SOUND       | STATIC_MESH | SKELETAL_MESH |

需要添加资源种类时：

- 在EResourceType中添加对应的枚举项
- 为资源种类添加对应的映射表Asset
- 在ResourceSystemSettings中注册对应的资源类->映射表Asset的映射
- 在AssetManager-PrimaryAssetTypesToScan里添加对应的映射表
- 在GameResourceSubsystem中添加：
  - 对应的蓝图同步和异步Get函数
