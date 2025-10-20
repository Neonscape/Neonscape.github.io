---
title: 文档：UI系统和主UI模式
date: 2025-10-14
category:
  - UI
  - 开发文档
---

~~你妈啊，怎么感觉什么都能扩成一个完整的点出来，这得做到猴年马月去了~~

## UI系统

目前的UI系统由如下组件组成：

- UI注册表：储存从`FGameplayTag`到`FUIWidgetConfig`的映射。
- UI子系统：负责管理所有UI组件的创建、销毁和显示
- 主UI：提供一系列UI组件的挂载点。（子组件中的挂载？）

### UI标识符

每个由全局UI系统管理的Widget都需要用一个`FGameplayTag`来唯一标识。

### UI逻辑层`EUILayer`

每一个UI都需要在一个逻辑层级上渲染；逻辑层级决定了它们的渲染和覆盖顺序。

- `HUD`：主HUD层，通常一直显示。
- `MENU`：菜单层，通常会覆盖HUD层并占用输入（例：背包、角色强化、全局地图）。
- `MODAL`：模态窗口层，优先级最高，占用所有输入（如确认弹窗）。

### UI配置信息（`FUIWidgetConfig`）

元数据，用于描述某个Widget的行为。

- `TSoftClassPtr<UUserWidget> WidgetClass`：对应的Widget类。
- `EUILayer Layer`：逻辑层级。
- `FName TargetSlotName`：目标widget需要被挂载到的主HUD插槽。如果为None则直接添加到Viewport中（？）。
- `bool bIsMenu`：目标是否是一个全局Menu（需要切换输入模式）。
- `bool bHideLowerLayers`：是否需要隐藏低层级UI。

### UI注册表（`UUIRegistryData`，继承自`UPrimaryDataAsset`）

存储`FGameplayTag`到`FUIWidgetConfig`的映射。

### UI接口（`UGlobalUIInterface`）

所有全局UI都应该实现的接口，用于传递上下文数据。

- `void OnWidgetInitialized(UObject* Context)`

### UI子系统（`UGameUISubsystem`）

负责管理所有UI组建的创建、销毁和显示。

- 初始化时加载DataAsset中的UI配置信息。
- 管理主HUD的实例。
- `void ShowUI(FGameplayTag ID, UObject* Event)`：
