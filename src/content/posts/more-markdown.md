---
title: 这个博客系统特有的Markdown语法
published: 2025-11-29
description: '记录一下专有语法'
image: ''
tags: ['博客','格式']
category: '博客'
draft: false 
lang: ''
---
 

## GitHub仓库卡片  
这些卡片会链接到GitHub仓库，信息是从Github API获取的 
```markdown
::github{repo="skydog221/skydog-top"}
```  
::github{repo="skydog221/skydog-top"}


## 警告/提示信息  
支持以下类型的警告/提示信息：`note`、`tip`、`important`、`warning`、`caution`：  
 
### 基本语法  
```markdown
:::note
这里是突出内容
:::
```  
:::note
这里是突出内容
:::
### 自定义标题   
```markdown
:::note[我的自定义标题]
这是一个带有自定义标题的提示信息。
:::
```  

:::note[我的自定义标题]
这是一个带有自定义标题的提示信息。
:::

### GitHub语法   
```markdown
> [!TIP]
> 也支持GitHub的语法（链接：https://github.com/orgs/community/discussions/16925）
```  
> [!TIP]
> 也支持GitHub的语法（链接：https://github.com/orgs/community/discussions/16925）


### 隐藏内容  
```markdown
此内容 :spoiler[是隐藏的 **ayyy**]!
```
此内容 :spoiler[是隐藏的 **ayyy**]!