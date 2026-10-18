🔍 AnonNav - 极简浏览器起始页与搜索导航
 
AnonNav 是一个极简、高度可定制的浏览器起始页（新标签页）。无需任何后端服务器，仅依靠单文件 HTML 与纯前端技术，就能打造干净高效、可深度改造的搜索控制台。
 
👉 在线预览：https://twilightsnow2009.github.io/AnonNav/
 
 
 
✨ 核心特性
 
- 🌐 智能直达输入框：不仅支持关键词搜索，还能自动识别  http/https  链接、IP 地址、内网  localhost  甚至裸域名，回车直接跳转。
- 🔍 多引擎自由管理：内置百度、Bing、360、搜狗四大默认引擎，支持任意添加、编辑、删除，一键切换默认搜索引擎。
- 📜 终极开放脚本引擎：所有核心变量与函数直接挂载全局，支持双向数据绑定，可覆写底层业务函数，改造深度无上限。
- 🖼️ 高度自由壁纸系统：
- 支持图片直链、随机壁纸 API（自动解析 JSON 返回的图片地址）
- 支持本地上传图片，自动转 Base64 存入本地数据库，刷新不丢失
- 内置毛玻璃 UI 效果，壁纸文字自动反色，保证可读性
- 💾 大容量本地存储：全面采用 IndexedDB 替代 localStorage，容量可达 GB 级，数据持久化更稳定，自动兼容旧版本数据迁移。
- 🌓 深浅主题自适应：支持跟随系统主题自动切换，也可手动一键切换深色/浅色模式。
- 🔎 完整 SEO 优化：配备完整 Meta 标签、Open Graph、Twitter Card、JSON-LD 结构化数据，支持  ?q=关键词  参数预填搜索词。
- 📦 单文件零依赖：整个项目仅一个  index.html ，无需安装、无需构建，下载即用。
 
 
 
🔗 更多搜索引擎
 
默认引擎未能满足需求？项目附带了整理好的额外搜索引擎列表，涵盖搜索、社交、视频、电商、学习等多个分类。
 
如需添加可查看 更多.md（ https://github.com/Twilightsnow2009/AnonNav/blob/main/%E6%9B%B4%E5%A4%9A.md ） 文件，复制对应链接粘贴到自定义引擎即可。
 
 
 
🚀 部署与使用
 
方式一：直接使用（零配置）
 
1. 下载仓库中的  index.html  文件
2. 双击用浏览器打开，或将其设置为浏览器主页 / 新标签页
 
注：直接本地打开时，IndexedDB 及部分 API 可能受限，建议通过静态服务器或在线托管使用。
 
方式二：部署到 GitHub Pages（推荐）
 
1. Fork 本仓库
2. 进入仓库  Settings  →  Pages 
3. 在  Build and deployment  的  Branch  选项中选择  main  分支，点击  Save 
4. 等待一分钟，访问  https://你的用户名.github.io/AnonNav/  即可
 
方式三：自行托管
 
将  index.html  放入任意静态托管服务即可，例如：
 
- Vercel / Netlify / Cloudflare Pages
- 宝塔面板 / Nginx / Apache
- 各类对象存储的静态网站托管
 
 
 
📜 进阶玩法：自定义 JS 脚本
 
点击右上角 📜 图标即可打开脚本管理面板。脚本与页面原生代码运行在同一全局作用域，拥有完整页面执行权限。
 
💡 终极开放特性
 
- 无前缀全局访问：直接使用  queryInput 、 engineList 、 search() 、 setTheme()  等核心变量与函数，无需任何对象前缀。
- 双向数据绑定：修改  engineList  等核心数据，页面会立刻同步更新，且自动持久化到本地存储。
- DOM 完全开放：所有页面元素可通过原生  document.getElementById  直接获取、修改、重写。
- 核心函数可覆盖：可重写、劫持  search() 、 setTheme()  等底层业务函数，自定义程序运行逻辑。
 
三种添加方式
 
1. 外链脚本：填入  .js  文件直链，页面加载时自动拉取并执行
2. 上传 JS 文件：上传本地  .js  文件，存入浏览器本地数据库
3. 编写代码：在线直接编写脚本代码，即时保存运行
 
示例脚本
 
javascript
  
// 1. 读取当前搜索引擎数量
alert("当前搜索引擎数量：" + engineList.length);
 
 
javascript
  
// 2. 新增一条搜索引擎（演示双向绑定）
engineList.push({
  name: "必应",
  url: "https://cn.bing.com/search?q=%s"
});
 
 
javascript
  
// 3. 一键切换深色主题
setTheme('dark');
 
 
javascript
  
// 4. 劫持搜索函数，打印搜索词
const originalSearch = search;
search = function(keyword) {
  console.log("搜索内容：", keyword);
  originalSearch(keyword);
}
 
 
⚠️ 安全提示
 
脚本以完整权限在本页运行，可以读取、修改、删除你所有的本地配置（搜索引擎、设置、脚本等）。
请仅运行你信任来源的脚本，不要随意导入网络上陌生的脚本文件或外链。
 
 
 
🛠️ 技术细节
 
- 存储架构：原生 IndexedDB 封装统一 Store 接口，页面初始化自动检测并迁移旧版本 localStorage 数据。
- 样式方案：纯 CSS 变量实现主题切换， backdrop-filter  实现毛玻璃效果。
- SEO 支持：支持通过  ?q=关键词  参数直接自动填入搜索框，完美契合 SearchAction 结构化数据。
 
 
 
📂 目录结构
 
text
  
AnonNav/
├── index.html       # 核心代码，包含 HTML/CSS/JS
├── README.md        # 项目自述文件
├── 更多.md          # 额外搜索引擎列表
├── robots.txt       # 爬虫协议
├── sitemap.xml      # 站点地图
└── preview.png      # (可选) 社交分享卡片图
 
 
 
 
🔒 隐私与安全
 
- 本项目无后端服务器，所有搜索记录、壁纸、搜索引擎配置、自定义脚本全部仅保存在当前浏览器的本地数据库中。
- 不会向作者或任何第三方服务器发送你的个人数据。
- 自定义脚本功能风险由使用者自行承担，请谨慎甄别脚本来源。
 
 
 
📄 开源协议
 
本项目基于 MIT License 开源。