---
title: 第四周：25/10/7~25/10/14
date: 2025-10-07
category: 开发记录
---

编辑器崩溃次数：4

## 开发内容

- 交互系统的设计和开发
- 输入模式状态机的设计和开发
- UI管理器和主UI模式的设计和开发
- UI懒加载机制

## 踩的坑

- 输入绑定之类的逻辑最好放到`PlayerController`里面实现；各个Component负责具体行为和底层功能。
- UE5.0之前的传统输入绑定和5.0之后的EnhancedInput绑定用的是两种完全不同的东西，后者的句柄是一个int32.
- 屎？！
- 如果某个衍生自C++类的蓝图类修改了某个现在不可编辑的字段的默认值（例如，以前是可修改的，在修改过后C++代码变动使其不可修改）的话，修改过的值仍然会存储在蓝图的CDO里，影响这个字段的值！
- 一段时间没有被UPROPERTY持有的UObject会自动被GC掉且不会有提示。
- UE在开始游戏时会自动根据GameMode中的配置创建一个PlayerController；当游戏加载一个Level时会废弃掉旧的，新建一个PlayerController并重新初始化（BeginPlay）等等。
- 可以用`UEnum*`指向一个`StaticEnum`来获取一个Enum的反射信息，从而可以通过`UEnum*->NumEnums()`配合`UEnum*->GetValueByIndex()`来遍历所有Enum项。
- 从UE5开始内置了一个更安全的遍历Enum的方式：在Enum定义后使用`ENUM_RANGE_BY_FIRST_AND_LAST`定义Range，然后可以用`EnumType Var: TEnumRange<EnumType>()`遍历Enum。
- 在一个基类型的指针上调用`GetClass()`获取的是派生类的Class。`GetClass()`是一个虚函数，由各个类自身实现。
- 加载界面等在没有Level的情况下显示内容的机制似乎需要通过`IGameMoviePlayer`？
