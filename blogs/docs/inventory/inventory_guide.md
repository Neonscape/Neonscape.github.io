---
title: 文档：物品系统使用帮助
date: 2025-10-05
category:
  - 物品系统
  - 帮助
  - 开发文档
---

## 如何向游戏中添加新物品？

1. 判断要添加的物品属于哪一类。如果当前不存在能满足需求的物品分类，则继承`UItemStaticDataBase`实现一个新的物品静态数据类，并重载`LoadLocalizedText`方法以加载物品的本地化文本；再继承`UItemObject`实现一个新的物品运行时类，重载`Initialize`方法以初始化物品的特有属性。
2. （如果需要的话）
3. 在`l10n_items.csv`中输入物品的本地化文本键值对，导入到`/Game/Main/Localization/ST_Items`中。
4. 在引擎中`/Game/Main/Data/Items`文件夹下新建一个父类为对应静态数据类的DataAsset，并在其中填入对应的信息和数据。（TODO：从JSON导入）
5. 导入其他你需要的资产（如曲线Table等）
6. 使用`GameInventorySubsystem->ConstructItemInstance`来构建你的新物品实例。
