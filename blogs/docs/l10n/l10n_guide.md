---
title: 文档：本地化帮助
date: 2025-10-04
category:
  - 本地化
  - 帮助
  - 开发文档
---

可以按照下列步骤为新增内容添加本地化：

1. 在工具仓库`Tools/l10n`下新建一个本地化文件，推荐命名`l10n_<type>.csv`
2. 在上面创建的文件中新建两列：`Key`和`SourceString`。必须以上面的顺序输入原文（UE的要求）。
3. 在其中输入你的文本键-本地化文本对。
4. 在UE编辑器中的`Game/Main/Localization`文件夹下新建一个StringTable，推荐命名为`ST_<Type>`。
5. 点击从csv导入，选择前文创建的csv。
6. 在Project Settings - GlobalConstants中的StringTables下新建一个条目，推荐为`<type> - <上文新建的StringTable的引用路径>`。
7. 关闭编辑器，一次运行`Tools/scripts`中的`gather_localization`和`compile_text`。
8. 再次打开编辑器，即可为新的本地化文本编辑翻译，也可以在代码中通过StringTable访问本地化的文本。