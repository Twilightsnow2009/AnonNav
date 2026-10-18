# AnonNav
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub stars](https://img.shields.io/github/stars/Twilightsnow2009/AnonNav?style=social)
![GitHub forks](https://img.shields.io/github/forks/Twilightsnow2009/AnonNav?style=social)


 # 🔍 AnonNav - 极简浏览器起始页与搜索导航

[![GitHub Pages](https://img.shields.io/badge/Demo-GitHub%20Pages-blue)](https://twilightsnow2009.github.io/AnonNav/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Single File](https://img.shields.io/badge/Build-Single%20HTML-orange)]()

AnonNav 是一个**极简、高度可定制**的浏览器起始页（新标签页）。无需任何后端服务器，仅仅依靠一个单文件 HTML 和纯前端技术，就能为你打造一个干净、高效且功能强大的搜索控制台。

👉 **在线预览**：[https://twilightsnow2009.github.io/AnonNav/](https://twilightsnow2009.github.io/AnonNav/)

---

## ✨ 核心特性

- 🌐 **智能直达链接**：输入框不仅能搜词，还能自动识别 `http/https` 链接、IP 地址、内网 `localhost` 甚至裸域名（如 `github.com`），回车直接跳转。
- 🔍 **多引擎无缝切换**：内置百度、Bing、360、搜狗，支持自行添加、编辑、删除任意搜索引擎。
- 📜 **内置用户脚本引擎**：支持运行自定义 JavaScript 脚本！你可以通过「添加外链」、「上传本地 `.js` 文件」或「直接编写代码」三种方式，给起始页注入无限可能。
- 🖼️ **高度自由的壁纸系统**：
  - 支持填入图片直链或随机壁纸 API（自动解析 JSON）。
  - 支持**本地上传图片**（自动转换为 Base64 并存入本地数据库，刷新不丢失）。
  - 内置毛玻璃 UI，壁纸字体自动反色，保证可读性。
- 💾 **超大容量本地存储**：抛弃了仅 5MB 且易被清理的 `localStorage`，全面升级为 **IndexedDB**。不仅容量大（可达 GB 级），而且数据更安全，自动申请持久化存储权限，并兼容旧数据迁移。
- 🌓 **深浅主题自适应**：支持跟随系统主题，或手动一键切换黑暗 / 纯白模式。
- 🔎 **极致的 SEO 优化**：单页应用也配齐了完整的 Meta 标签、Open Graph、Twitter Card、JSON-LD 结构化数据以及 `sitemap.xml` / `robots.txt`。

---

## 🔗 其他搜索引擎提供

如果在默认的引擎列表中没有找到你需要的，我们还整理了一份额外的引擎列表供您挑选。

**如需添加链接，可查看 [更多.md](https://github.com/Twilightsnow2009/AnonNav/blob/main/%E6%9B%B4%E5%A4%9A.md) 文件**，里面提供了各种小众、专业或聚合类搜索引擎的 URL 拼接规则。

---

## 🚀 部署与使用

### 方式一：直接使用（零配置）
1. 下载本仓库的 `index.html` 文件。
2. 双击用浏览器打开，或将其设置为你浏览器的主页 / 新标签页。
*(注：直接本地打开时，IndexedDB 和部分 API 可能受限，建议通过本地服务器或托管使用)*

### 方式二：部署到 GitHub Pages（推荐）
1. `Fork` 本仓库。
2. 进入仓库的 `Settings` -> `Pages`。
3. 在 `Build and deployment` 的 `Branch` 选项中选择 `main`（或 `master`）分支，点击 `Save`。
4. 等待一分钟，访问 `https://你的用户名.github.io/AnonNav/` 即可。

### 方式三：自行托管
将 `index.html` 放入任何静态托管服务（如 Vercel, Netlify, Cloudflare Pages, 宝塔面板等）即可。

---

## 📜 进阶玩法：自定义 JS 脚本

点击右上角的 `📜` 图标即可打开脚本管理面板。你的脚本拥有与页面完全相同的执行权限。

**测试代码示例：**
```javascript
// 给页面右下角加个徽章
(function() {
  const box = document.createElement('div');
  box.textContent = '🧪 脚本加载成功';
  box.style.cssText = 'position:fixed;right:20px;bottom:20px;background:#5e35b1;color:#fff;padding:10px 20px;border-radius:999px;font-family:sans-serif;z-index:99999;box-shadow:0 4px 12px rgba(0,0,0,.2)';
  document.body.appendChild(box);
})();


🛠️ 技术细节

· 存储架构：使用原生 IndexedDB 封装了统一的 Store 接口。页面初始化时会自动检测并迁移旧版本存放在 localStorage 中的数据。
· 样式方案：纯 CSS 变量实现主题切换，backdrop-filter 实现毛玻璃效果。
· SEO 支持：页面支持通过 ?q=关键词 参数直接自动填入搜索框，完美契合结构化数据中的 SearchAction。

---

📂 目录结构

```text
AnonNav/
├── index.html       # 核心代码，包含 HTML/CSS/JS
├── README.md        # 本自述文件
├── 更多.md          # 额外的搜索引擎列表（非必须）
├── robots.txt       # 爬虫协议
├── sitemap.xml      # 站点地图
└── preview.png      # (可选) 社交分享卡片图
```

---

🔒 隐私与安全

本项目没有后端，所有的搜索记录、壁纸图片、搜索引擎配置和自定义脚本，全部仅保存在您当前浏览器的本地数据库（IndexedDB）中。不会向作者或任何第三方服务器发送您的个人数据。

注意：请仅运行您信任来源的 JS 脚本，因为脚本拥有读取页面上所有元素的权限。

---

📄 开源协议

本项目基于 MIT License 开源。

```
