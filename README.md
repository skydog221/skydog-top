# 🍥Fuwari  
![支持 Node.js 20 及更高版本](https://img.shields.io/badge/node.js-%3E%3D20-brightgreen)  
![支持 pnpm 9 及更高版本](https://img.shields.io/badge/pnpm-%3E%3D9-blue)  
[![DeepWiki 信息](https://img.shields.io/badge/DeepWiki-saicaca%2Ffuwari-blue.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyCAYAAAAnWDnqAAAAAXNSR0IArs4c6QAAA05JREFUaEPtmUtyEzEQhtWTQyQLHNak2AB7ZnyXZMEjXMGeK/AIi+QuHrMnbChYY7MIh8g01fJoopFb0uhhEqqcbWTp06/uv1saEDv4O3n3dV60RfP947Mm9/SQc0ICFQgzfc4CYZoTPAswgSJCCUJUnAAoRHOAUOcATwbmVLWdGoH//PB8mnKqScAhsD0kYP3j/Yt5LPQe2KvcXmGvRHcDnpxfL2zOYJ1mFwrryWTz0advv1Ut4CJgf5uhDuDj5eUcAUoahrdY/56ebRWeraTjMt/00Sh3UDtjgHtQNHwcRGOC98BJEAEymycmYcWwOprTgcB6VZ5JK5TAJ+fXGLBm3FDAmn6oPPjR4rKCAoJCal2eAiQp2x0vxTPB3ALO2CRkwmDy5WohzBDwSEFKRwPbknEggCPB/imwrycgxX2NzoMCHhPkDwqYMr9tRcP5qNrMZHkVnOjRMWwLCcr8ohBVb1OMjxLwGCvjTikrsBOiA6fNyCrm8V1rP93iVPpwaE+gO0SsWmPiXB+jikdf6SizrT5qKasx5j8ABbHpFTx+vFXp9EnYQmLx02h1QTTrl6eDqxLnGjporxl3NL3agEvXdT0WmEost648sQOYAeJS9Q7bfUVoMGnjo4AZdUMQku50McDcMWcBPvr0SzbTAFDfvJqwLzgxwATnCgnp4wDl6Aa+Ax283gghmj+vj7feE2KBBRMW3FzOpLOADl0Isb5587h/U4gGvkt5v60Z1VLG8BhYjbzRwyQZemwAd6cCR5/XFWLYZRIMpX39AR0tjaGGiGzLVyhse5C9RKC6ai42ppWPKiBagOvaYk8lO7DajerabOZP46Lby5wKjw1HCRx7p9sVMOWGzb/vA1hwiWc6jm3MvQDTogQkiqIhJV0nBQBTU+3okKCFDy9WwferkHjtxib7t3xIUQtHxnIwtx4mpg26/HfwVNVDb4oI9RHmx5WGelRVlrtiw43zboCLaxv46AZeB3IlTkwouebTr1y2NjSpHz68WNFjHvupy3q8TFn3Hos2IAk4Ju5dCo8B3wP7VPr/FGaKiG+T+v+TQqIrOqMTL1VdWV1DdmcbO8KXBz6esmYWYKPwDL5b5FA1a0hwapHiom0r/cKaoqr+27/XcrS5UwSMbQAAAABJRU5ErkJggg==)](https://deepwiki.com/saicaca/fuwari)  
[![FOSSA 认证信息](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsaicaca%2Ffuwari.svg?type=shield&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2Fsaicaca%2Ffuwari?ref=badge_shield&issueType=license)  

这是一个使用 [Astro](https://astro.build) 构建的静态博客模板。  

**🖥️ 实时演示（Vercel）**：[https://fuwari.vercel.app]  
[![预览图片](https://raw.githubusercontent.com/saicaca/resource/main/fuwari/home.png)]  


## ✨ 主要特性：  
- [x] 使用 [Astro](https://astro.build) 和 [Tailwind CSS](https://tailwindcss.com) 构建  
- [x] 优雅的动画效果与页面过渡效果  
- [x] 支持浅色/深色模式  
- [x] 主题颜色与横幅可自定义  
- [x] 自适应布局设计  
- [x] 支持 [Pagefind](https://pagefind.app/) 的搜索功能  
- [x] 扩展的 Markdown 语法（详见：[https://github.com/saicaca/fuwari?tab=readme-ov-file#-markdown-extended-syntax]）  
- [x] 提供目录导航  
- [x] 支持 RSS 订阅  

## 🚀 入门指南：  
1. 创建你的博客仓库：  
   - 你可以使用此模板生成一个新的仓库，或克隆现有的仓库：  
     ```sh  
     npm create fuwari@latest  
     yarn create fuwari  
     pnpm create fuwari@latest  
     bun create fuwari@latest  
     deno run -A npm:create-fuwari@latest  
     ```  
2. 在本地编辑博客内容：克隆仓库后，运行 `pnpm install` 安装依赖项（如果尚未安装 [pnpm](https://pnpm.io)，请先执行 `npm install -g pnpm`）。  
3. 修改 `src/config.ts` 文件以自定义博客设置。  
4. 使用 `pnpm new-post <filename>` 创建新文章，并在 `src/content/posts/` 目录下编辑该文章。  
5. 根据 [文档](https://docs.astro.build/en/guides/deploy/) 将博客部署到 Vercel、Netlify、GitHub Pages 等平台；部署前需编辑 `astro.config.mjs` 文件中的配置信息。  

## 📝 文章的元数据格式（Markdown）：  
```yaml  
---  
title: 我的第一篇博客文章  
published: 2023-09-09  
description: 这是我使用 Astro 搭建的新博客的第一篇文章。  
image: ./cover.jpg  
tags: [Foo, Bar]  
category: Front-end  
draft: false  
lang: jp      # 仅在文章语言与 `config.ts` 中指定的站点语言不同时设置此项  
---  
```  

## 🧩 扩展的 Markdown 语法：  
除了 Astro 默认支持的 [GitHub Flavored Markdown](https://github.github.com/gfm/) 之外，还提供了以下额外功能：  
- 警告提示（[预览与使用方法](https://fuwari.vercel.app/posts/markdown-extended/#admonitions)  
- GitHub 仓库卡片（[预览与使用方法](https://fuwari.vercel.app/posts/markdown-extended/#github-repository-cards)  
- 表达力更强的代码块（[预览](https://fuwari.vercel.app/posts/expressive-code/) / [官方文档](https://expressive-code.com/)  

## ⚡ 命令手册：  
所有命令均在项目根目录下的终端中执行：  
| 命令                    | 功能                                            |  
|:---------------------------|:----------------------------------------------------|  
| `pnpm install`             | 安装依赖项                                      |  
| `pnpm dev`                 | 启动本地开发服务器（地址：`localhost:4321`）                    |  
| `pnpm build`               | 将代码编译为生产版本并保存至 `./dist/`                   |  
| `pnpm preview`             | 在部署前预览编译结果                                  |  
| `pnpm check`               | 检查代码中的错误                                      |  
| `pnpm format`              | 使用 Biome 工具格式化代码                                  |  
| `pnpm new-post <filename>`         | 创建新文章                                      |  
| `pnpm astro ...`           | 运行 Astro 相关的 CLI 命令（如 `astro add`、`astro check`）          |  
| `pnpm astro --help`        | 查看 Astro CLI 的使用帮助                    |  

## ✏️ 贡献指南：  
详情请参阅 [贡献指南](https://github.com/saicaca/fuwari/blob/main/CONTRIBUTING.md)。  

## 📄 许可证：  
本项目采用 MIT 许可证进行发布。  

[![FOSSA 认证信息](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsaicaca%2Ffuwari.svg?type=large&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2Fsaicaca%2Ffuwari?ref=badge_large&issueType=license)