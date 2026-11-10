# 🔍 AnonNav - 极简浏览器起始页与搜索导航

AnonNav 是一个极简、高度可定制的浏览器起始页（新标签页）。无需任何后端服务器，仅依靠单文件 HTML 与纯前端技术，就能打造干净高效、可深度改造的搜索控制台。

👉 **在线预览**：<https://twilightsnow2009.github.io/AnonNav/>

---

## ✨ 核心特性

### 搜索与导航
- 🌐 **智能直达输入框**：不仅支持关键词搜索，还能自动识别 `http/https` 链接、IP 地址、内网 `localhost`、`magnet:` / `mailto:` / `tel:` / `sms:` 等协议，甚至裸域名，回车直接跳转。
- 🔍 **多引擎自由管理**：内置百度、Bing、360、搜狗四大默认引擎，支持任意添加、编辑、删除，一键切换默认搜索引擎。
- 🕘 **搜索历史**：自动记录最近 8 条搜索，聚焦输入框即可查看，支持 `↑ / ↓` 键盘选择、`✕` 单条删除。
- 🕐 **实时时钟**：顶部展示年月日与上/下午时分秒，自动对齐整秒。

### 开放与扩展
- 📜 **终极开放脚本引擎**：核心变量与函数均暴露在页面全局作用域，脚本可直接引用；通过 `Store` 接口修改核心数据时，页面立即同步并自动持久化。
  - **全局直接引用**：脚本中可直接使用 `queryInput`、`engineList`、`search()`、`setTheme()` 等标识符（其中 `search` / `setTheme` 为函数声明，亦可通过 `window.` 访问与重写）。
  - **响应式状态同步**：核心数据由响应式 `Store` 统一管理；通过 `Store.setJSON(K.ENGINES, list)` 等方式修改会立即触发界面更新并写入本地数据库。
  - **DOM 完全开放**：所有元素均可通过原生 `document.getElementById` 直接获取、修改、重写。
  - **核心函数可覆盖**：可重写、劫持 `search()`、`setTheme()` 等业务函数（详见下方示例注意事项）。
  - **清理钩子**：脚本内调用 `registerCleanup(fn)`，禁用 / 删除 / 修改脚本时自动执行。
  - **热重载**：编辑后约 1 秒内自动保存并热重载。
- 🧰 **数据控制台**：在页面内直接读写本站存储，提供 `list / get / set / del / clear / reload` 等变量与函数。

### 外观与主题
- 🖼️ **高度自由壁纸系统**：
  - 支持图片直链、随机壁纸 API（自动解析 JSON 返回的图片地址）。
  - 支持本地上传图片，自动压缩为 WebP（最长边 1920px，质量 0.85）并存入本地数据库，刷新不丢失。
  - 内置毛玻璃 UI 效果，壁纸文字自动反色，保证可读性。
- 🎨 **主题色系统**：内置 8 套预设配色（素白 / 晨曦 / 樱语 / 海盐 / 薄荷 / 紫藤 / 奶油 / 云石），也支持任意 `#RRGGBB` 纯色；选色后先 **预览 3 秒** 再确认，避免误改。
- 🌓 **深浅主题自适应**：支持跟随系统主题自动切换，也可手动一键切换深色 / 浅色模式。

### 数据与同步
- 💾 **大容量本地存储**：优先采用 IndexedDB（通常可达数百 MB ～ GB 级，视浏览器配额而定），数据持久化更稳定；不可用时自动回退 localStorage，并自动兼容旧版本数据迁移。
- ☁️ **云同步（S3 兼容）**：支持 Cloudflare R2 / AWS S3 / Backblaze B2 / MinIO 等对象存储，SigV4 签名、region 自动探测、可开启「每次打开自动同步」。
- 📦 **配置导入 / 导出**：一键导出整站配置为 JSON（自动复制），粘贴导入即可全量恢复。
- 🧹 **一键重置**：恢复初始状态（清空存储、脚本、壁纸、历史、自定义引擎、主题与标题）。

### 其他
- 🔎 **基础 SEO 支持**：配备完整 Meta 标签（`title` / `description` / `icon`），支持通过 `?q=关键词` 参数预填搜索词，`&go=1` 可立即触发搜索。
- 📦 **单文件零依赖**：整个项目仅一个 `index.html`，无需安装、无需构建，下载即用。
- 🎁 **魔法彩蛋**：在搜索框输入 `20090927` 并回车，会跳转至指定 B 站空间。

---

## 🔗 更多搜索引擎

默认引擎未能满足需求？项目附带了整理好的额外搜索引擎列表，涵盖搜索、社交、视频、电商、学习等多个分类。

- 📄 查看更多：[更多.md](https://github.com/Twilightsnow2009/AnonNav/blob/main/%E6%9B%B4%E5%A4%9A.md)
- ⚡ 一键导入：[更多.js](https://github.com/Twilightsnow2009/AnonNav/blob/main/%E6%9B%B4%E5%A4%9A.js)

如需添加，可查看 `更多.md` 文件，复制对应链接粘贴到自定义引擎即可；也可以打开 `更多.js`，将其内容粘贴到「脚本管理 → 编写代码」中运行，直接一键导入。

---

## 🚀 部署与使用

### 方式一：直接使用（零配置）

1. 下载仓库中的 `index.html` 文件
2. 双击用浏览器打开，或将其设置为浏览器主页 / 新标签页

> **注**：直接本地打开时，IndexedDB 及部分 API 可能受限，建议通过静态服务器或在线托管使用。

### 方式二：部署到 GitHub Pages（推荐）

1. Fork 本仓库
2. 进入仓库 **Settings → Pages**
3. 在 **Build and deployment** 的 **Branch** 选项中选择 `main` 分支，点击 **Save**
4. 等待一分钟，访问 `https://你的用户名.github.io/AnonNav/` 即可

### 方式三：自行托管

将 `index.html` 放入任意静态托管服务即可，例如：

- Vercel / Netlify / Cloudflare Pages
- 宝塔面板 / Nginx / Apache
- 各类对象存储的静态网站托管

---

## ⌨️ 交互速查

| 操作 | 说明 |
| --- | --- |
| `Enter` | 搜索 / 打开当前输入 |
| `↑` / `↓` | 在搜索历史中上下选择 |
| `Esc` | 关闭当前弹窗 / 收起历史面板 |
| 双击标题 | 进入标题编辑，回车或失焦保存 |
| 点击「当前引擎」后的「更改」 | 打开搜索引擎管理 |
| 点击底部「存储后端名称」 | 打开数据控制台 |
| `Ctrl / Cmd + Enter` | 在数据控制台执行代码 |

---

## 📜 进阶玩法：自定义 JS 脚本

点击右上角 📜 图标即可打开脚本管理面板。脚本与页面原生代码运行在同一全局作用域，拥有完整页面执行权限。

### 三种添加方式

1. **外链脚本**：填入 `.js` 文件直链，页面加载时自动拉取并执行
2. **上传 JS 文件**：上传本地 `.js` 文件，存入浏览器本地数据库
3. **编写代码**：在线直接编写脚本代码，即时保存运行

### 脚本可直接使用的全局标识符

- `queryInput`：搜索输入框 DOM
- `engineList`：当前引擎数组（读取当前值；如需修改请使用 `Store.setJSON(K.ENGINES, engineList)` 才能触发界面同步与持久化）
- `search()`：触发搜索（函数声明，可通过 `window.search` 访问与重写）
- `setTheme('dark' | 'light')`：切换主题（同上）
- `registerCleanup(fn)`：注册清理函数
- `Store`：响应式存储接口，含 `get / getJSON / set / setJSON / remove / watch` 等方法

> 💡 说明：`queryInput`、`engineList` 等由 `const` / `let` 声明，可直接在脚本中以标识符访问，但**不会**挂到 `window` 对象上；`search` / `setTheme` 为函数声明，可通过 `window.` 前缀访问与重写。

### 清理钩子

脚本内调用 `registerCleanup(fn)` 注册清理函数。当脚本被**禁用、删除或内容修改**时，会自动执行，用于移除事件监听、DOM 节点等副作用。

```javascript
const el = document.createElement('div');
el.textContent = 'Hello';
document.body.appendChild(el);

registerCleanup(() => el.remove());
```

> 外链脚本不支持 `registerCleanup`。

### 示例脚本

#### 1. 脚本弹窗测试

```javascript
// 测试脚本，仅用来验证 AnonNav 自定义脚本可以正常执行
alert("🎉 脚本运行成功！你的 AnonNav 脚本系统可用");
console.log("✅ 测试脚本执行完毕，engineList 当前数量：", engineList.length);
```

#### 2. 搜索劫持

```javascript
// 重写全局 search 函数，无论当前选哪个引擎，强制跳必应中国搜索
window.search = function (keyword) {
  const url = `https://cn.bing.com/search?q=${encodeURIComponent(keyword)}`;
  window.open(url, "_self");
};

alert("✅ 已重写 search 函数。回车或点击历史项都会走新逻辑；「搜索」按钮仍绑定原函数，如需一并劫持见下方说明。");
```

> ⚠️ **注意事项**：页面中「搜索」按钮通过 `addEventListener('click', search)` 绑定了**初始函数引用**，因此重写 `window.search` 不会影响按钮点击行为。若需按钮也走新逻辑，可在脚本中额外覆盖：
>
> ```javascript
> document.getElementById('searchBtn').onclick = () => window.search(queryInput.value.trim());
> ```
>
> 输入框回车、搜索历史项点击则是通过标识符 `search()` 调用，会走重写后的函数。

> ⚠️ **安全提示**
>
> 脚本以完整权限在本页运行，可以读取、修改、删除你所有的本地配置（搜索引擎、设置、脚本等）。
> **请仅运行你信任来源的脚本**，不要随意导入网络上陌生的脚本文件或外链。

---

## ☁️ 云同步（S3 兼容对象存储）

支持任意兼容 S3 协议的服务：**Cloudflare R2 / AWS S3 / Backblaze B2 / MinIO** 等。

### 配置项

| 字段 | 说明 |
| --- | --- |
| Endpoint | 例如 `https://<account_id>.r2.cloudflarestorage.com` |
| Bucket | 存储桶名称 |
| 对象路径 | 默认 `anonnav/anonnav-backup.json` |
| Access Key ID / Secret Access Key | 访问凭证 |
| Region | 选填，留空自动探测（也可手动填 `us-east-005` 等） |
| 自动同步 | 勾选后每次打开页面自动上传 / 恢复 |

### R2 CORS 建议配置

在 Cloudflare R2 控制台为 Bucket 设置 CORS：

- **Allowed Origins**：你的站点域名（如 `https://yourname.github.io`）
- **Allowed Methods**：`GET`、`PUT`
- **Allowed Headers**：`Authorization`、`Content-Type`、`x-amz-*`
- **Expose Headers**：建议包含 `x-amz-bucket-region`（用于自动探测）

### 同步策略

- 本地每次修改会记录时间戳（`search_r2_local_ts`）
- 自动同步时对比云端与本地时间戳，较新的一方覆盖较旧的一方（容忍 1.5s 抖动）
- 云端无文件时自动上传初始备份

> ⚠️ 凭证会随配置导出，请妥善保管导出文件，不要公开分享。

---

## 🧰 数据控制台

在页面底部点击存储后端名称打开，可直接读写本站存储，所有修改**实时生效无需刷新**。

```javascript
list()                          // 列出所有键与占用
get('search_title_text')        // 读取
set('search_title_text','Hi')   // 写入（实时生效）
del('search_history')           // 删除
clear()                         // 清空所有 search_ 前缀数据
reload()                        // 重新加载全部界面状态
```

例：直接把主题色改成海盐色并立即生效

```javascript
set('search_bg_color', 'linear-gradient(135deg,#EDF5FB 0%,#CFE4F2 100%)')
```

---

## 📦 配置导入 / 导出与一键重置

- **导出配置**：生成完整 JSON 并自动复制到剪贴板
- **导入配置**：粘贴 JSON 后全量覆盖本地存储并立即生效
- **一键重置**：清空本地存储、脚本、壁纸、历史、自定义引擎、主题与标题，恢复到初始状态

适合迁移设备、备份，或与云同步互补使用。

---

## 🖼️ 壁纸与主题系统

- **网络直链**：`https://.../image.jpg`
- **随机壁纸 API**：返回图片直链，或返回含 `url / imgurl / image / img / data.url / data.image` 字段的 JSON
- **本地上传**：自动压缩最长边 1920px、输出 WebP（质量 0.85），单文件 ≤ 8MB
- 设置壁纸后自动叠加半透明蒙层，保证文字可读
- 清除壁纸后回落至主题色背景
- **主题色**：8 套预设 + 任意 `#RRGGBB` 纯色，选色后先预览 3 秒再确认

---

## 💾 数据与存储

- **优先 IndexedDB**（数据库 `anonnav`，表 `kv`），不可用时自动回退 **localStorage**
- 所有键统一以 `search_` 前缀命名
- 底部实时显示当前后端与占用大小

### 主要存储键

| 键 | 含义 |
| --- | --- |
| `search_engine_list` | 搜索引擎列表 |
| `search_selected_idx` | 当前选中引擎下标 |
| `search_theme` | 亮 / 暗主题 |
| `search_bg_color` | 主题色 |
| `search_bg_color_inited` | 是否完成首次选色 |
| `search_wall_value` | 壁纸（直链 / API / DataURL） |
| `search_title_text` | 页面标题 |
| `search_user_scripts` | 用户脚本列表 |
| `search_history` | 搜索历史 |
| `search_script_add_mode` | 脚本添加方式 |
| `search_r2_config` | 云同步配置（不参与云同步本身） |
| `search_r2_local_ts` | 本地修改时间戳 |

---

## 🛠️ 技术细节

- **存储架构**：原生 IndexedDB 封装统一 Store 接口，页面初始化自动检测并迁移旧版本 localStorage 数据；响应式 Store 提供 `get / set / watch` 与订阅机制，界面状态实时联动。
- **样式方案**：纯 CSS 变量实现主题切换，`backdrop-filter` 实现毛玻璃效果。
- **加密签名**：`crypto.subtle` 实现 **AWS SigV4** 签名，支持跨 region 自动重试与探测。
- **图片处理**：Canvas + `createImageBitmap` 实现本地壁纸压缩。
- **URL 参数**：支持通过 `?q=关键词` 参数直接自动填入搜索框，`&go=1` 可立即触发搜索。
- **浏览器兼容**：完整支持亮 / 暗模式、`prefers-color-scheme`、`theme-color` 元信息、`viewport-fit=cover`。

---

## 📂 目录结构

```text
AnonNav/
├── index.html      # 核心代码，包含 HTML/CSS/JS
├── README.md       # 项目自述文件
├── 更多.md          # 额外搜索引擎列表
├── 更多.js          # 额外搜索引擎一键导入脚本
├── robots.txt      # 爬虫协议（如仓库未提供，可自行添加）
├── sitemap.xml     # 站点地图（如仓库未提供，可自行添加）
└── preview.png     # (可选) 社交分享卡片图
```

> 💡 请以仓库实际文件为准；`robots.txt` / `sitemap.xml` / `preview.png` 为可选增强项，未提供不影响功能。

---

## 🔒 隐私与安全

- 本项目**无后端服务器**，所有搜索记录、壁纸、搜索引擎配置、自定义脚本全部仅保存在当前浏览器的本地数据库中。
- **不会**向作者或任何第三方服务器发送你的个人数据。
- 仅在开启云同步并配置凭证后，才会向你指定的对象存储发送加密签名的请求。
- 壁纸若使用网络 API，请自行确认第三方服务的隐私政策。
- 自定义脚本功能风险由使用者自行承担，请谨慎甄别脚本来源。

---

## ❓ 常见问题

**Q：打开后显示「壁纸加载失败」？**
A：检查图片直链 / API 是否可访问，或 API 返回是否包含有效图片字段。跨域图片有时会受对方防盗链限制。

**Q：云同步上传失败，提示 CORS 或网络错误？**
A：按上文配置 Bucket 的 CORS，确认来源、方法、请求头均已放行；并确认 Endpoint、Bucket、凭证填写正确。

**Q：脚本修改后没有生效？**
A：确认脚本已勾选启用、内容非空；外链脚本需可访问。保存后约 1 秒热重载。

**Q：重写 `search` 后点击「搜索」按钮无效？**
A：页面中「搜索」按钮绑定的是初始函数引用，重写 `window.search` 只影响回车与历史项点击。如需按钮也走新逻辑，可在脚本中额外覆盖 `document.getElementById('searchBtn').onclick`。

**Q：如何彻底清除数据？**
A：在「系统设置 → 恢复网页初始设置」，会清空本地存储、脚本、壁纸、历史、自定义引擎、主题与标题。

**Q：`?q=` 参数有什么用？**
A：可从外部（书签、快捷指令）把关键词带进来，加上 `&go=1` 时直接触发搜索。

---

## 🗺️ 路线图

- [ ] 分组管理搜索引擎
- [ ] 书签快捷方式 / 快捷卡片
- [ ] 更多内置配色与壁纸源
- [ ] 补全 Open Graph / Twitter Card / JSON-LD 结构化数据
- [ ] 脚本市场 / 导入分享格式
- [ ] PWA 离线安装支持

---

## 📄 开源协议

本项目基于 **MIT License** 开源。

---

## 🙏 致谢

感谢所有使用与反馈 AnonNav 的朋友，以及 Cloudflare R2、GitHub Pages 等免费 / 低成本的静态与存储基础设施。