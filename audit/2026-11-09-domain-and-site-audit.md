# flourmillingpro.com 上线审计（2026-11-09）

范围：线上 https://flourmillingpro.com（209 页 sitemap）+ 本地 `projects/haiyun-astro`（225 页构建）
方法：211 条 URL 实测抓取（状态码/canonical/hreflang/schema/内链/图片 alt/词数）+ 源码交叉复算 + 与 11-08 内容审计逐条对账

---

## 〇、一句话结论

**域名配好了，但站点还是旧的。** 线上 209 页的 canonical、og:url、sitemap、robots.txt、llms.txt 全部写着 `haiyunmilling.com` —— 对 Google 来说 `flourmillingpro.com` 是一个"镜像了别人的站"，自报 canonical 去别处。这一条不解决，其余审计都白做。

本地已全部改完并重新构建（225 页 0 错误），**需要重新部署一次 dist**。

---

## 一、P0 — 阻断级

### 1. 全站 canonical 指向旧域名（209/209 页）

| 项 | 线上实测 | 应有 |
|---|---|---|
| `<link rel="canonical">` | `https://haiyunmilling.com/...` | `https://flourmillingpro.com/...` |
| `og:url` | 同上 | 同上 |
| sitemap-0.xml `<loc>` | `haiyunmilling.com` × 209 | `flourmillingpro.com` |
| robots.txt Sitemap 行 | `haiyunmilling.com/sitemap-index.xml` | `flourmillingpro.com/sitemap-index.xml` |
| llms.txt | 22 条链接全旧域 | 全换 |

**后果**：Google 会把 `flourmillingpro.com` 判为 `haiyunmilling.com` 的重复副本（而后者 NXDOMAIN，是死链），新站几乎不可能被索引。
**状态**：✅ 已修（`astro.config.mjs` + `src/data/site.js` + `public/robots.txt` + `public/llms.txt` + README），构建产物旧域名残留 **0 文件**。

### 2. 软 404：不存在的 URL 返回 200 + 首页

实测 `/this-page-does-not-exist-xyz/` 与 `/logo.png`（不存在）都返回 **HTTP 200 + 首页全文（820 词）**，canonical 指向首页。

**后果**：CF Pages 的 SPA fallback 会把任意垃圾 URL、任意拼写错误、任何外链失效路径都返回 200。爬虫可以生成无限重复页；搜索引擎判定为 soft-404 后会拖累整站质量分。
**状态**：✅ 已修 —— 新增 `src/pages/404.astro`（六入口导航 + noindex,nofollow），构建输出 `dist/404.html` 正常。

### 3. 14 篇新文章根本没在线上

线上 sitemap 知识页 **52** 篇；本地 `src/content/knowledge/` **66** 篇。

11-08 那轮扩写的 14 篇（fortification、electrical supply、installation、O&M、packing、HACCP、OEE、LOTO、mycotoxin、performance guarantee、PLC remote、roll wear、wheat price risk、safety & delivery）**全部不在线上 sitemap 中**，访问返回软 404（见 P0-2）。

**状态**：本地已构建进 dist（66 篇齐全），待部署。

### 4. logo.png 是 404，但 Organization schema 在引用它

```json
"logo": "https://haiyunmilling.com/logo.png"
```
该文件在 `public/` 中**不存在**。Google 结构化数据要求 logo 可抓取且 ≥112×112 px，否则 Organization 富结果失效，Knowledge Panel 无图标。

**状态**：✅ 已修 —— 用 `public/favicon.svg` 渲染出 512×512 `public/logo.png`（14 KB）。

---

## 二、P1 — 重要

### 5. 标题普遍过长

- 全标题 >60 字符：**122 / 225 页**
- 去掉 `| HAIYUN Milling` 后缀后仍 >60：**60 页**
- 最长 121 字符（`/knowledge/flour-mill-electrical-supply/`）

已修 4 篇最长的（electrical-supply 121→70、staffing 118→65、installation 109→72、remote-monitoring 107→66）。
**剩余 60 篇超 60 字符**，建议二轮统一压到 55–60（Google 桌面约显示 580 px）。

### 6. 描述过长

- >160 字符：**57 页**（其中 43 页是三语 RU/ES/AR，14 页英文）
- 最长 326 字符（`/projects/shufu-200tpd-flour-plant/`）

已修：知识库 66 篇全部 ≤160；四个项目页新增 `seoDescription` 字段（原 318–326 → 130–150）。
剩余主要是三语页面（`src/pages/[lang]/...` 硬编码长描述）。

### 7. 表头撒谎："Weight / footprint" 里装的是比功耗

`PlantDetail.astro` 第 4 列表头 `Weight / footprint`，但 60–500 t/d 全部 12 个型号的 `weight` 字段装的是 `65–71 kWh/t`。客户截图就是事故。

**状态**：✅ 已修 —— 表头四语改为 `Weight / power / footprint`（Масса / энергия / габариты · Peso / potencia / huella · الوزن / الطاقة / المساحة）；`specificPower` 单独渲染在前。

### 8. 60 t/d 装机功率两套数（150 vs 190 kW）

`plants.js` 40–60 t/d 段：150 kW；100–500 t/d 段：190 kW；`how-to-size` 算例用 190 kW + 72 kWh/t。

按 72 × 60 ÷ 24 = 180 kW 平均，超 150 kW 装机 20% —— 能量守恒不成立。
**状态**：✅ 已修 —— 两处补注释澄清：40–60 t/d 是**落地式无气力提升 150 kW**，**塔式带气力提升 ~190 kW**，两套数各自成立且写明区别。

### 9. 知识中心说 7 本手册，实际 9 个 pillar

`/knowledge/` 标题 "7 Engineering Handbooks"，schema description 也写 Seven，但 `type: pillar` 实际 **9** 篇（operations-and-maintenance、safety-and-project-delivery 是 11-08 新增的 pillar）。
**状态**：✅ 已修 —— 标题、schema、描述统一为 9。

### 10. llms.txt 少 14 篇

原来只列 7 本手册 + 52 篇中的部分。已补齐到 **23 条知识条目**，覆盖全部 9 本 pillar 与 14 篇 11-08 新文。

### 11. 无 HSTS

线上无 `Strict-Transport-Security` 头（http→https 301 正常，证书 Google Trust Services，2027-02-07 到期）。
建议在 `public/_headers` 加：
```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

### 12. www 子域未收敛

`https://www.flourmillingpro.com/` 返回 **200** 且 canonical 指向 `haiyunmilling.com` → 与 apex 构成重复内容。
建议 Cloudflare 做 `www → apex` 301（Redirect Rule，或 Bulk Redirect）。

### 13. 无 `_redirects`

站点从 98 页 → 113 页 → 210 页 → 225 页多次重构，若旧 URL 有外部引用，现在全部落进软 404。建议上线后从 GSC 拉 404 清单补 301。

---

## 三、P2 — 内容质量（11-08 审计遗留复检）

上一轮 9 处 P0 硬伤，**8 处已修复**，1 处口径偏软：

| # | 问题 | 现状 |
|---|---|---|
| 1 | 60 t/d 功率两套数 | ✅ 已澄清（150 落地 / 190 塔式） |
| 2 | 筛理面积规则 0.8 vs 案例 4.8 | ✅ 案例已按规则重算：300→369 m²（0.81）、200→264 m²（0.76）、500→632 m²（0.79） |
| 3 | 设备占总投资 35–45% vs 表算 63–66% | ✅ 全部改为 63–66%（4 处） |
| 4 | 提取率 165,000 与 79,200 打架 | ✅ 165,000 已删除，统一 198 t ≈ USD 79,200 |
| 5 | kWh/t 分母漂移 | ✅ 两篇统一 "per tonne of flour"，并注明 wheat basis 低 24% |
| 6 | 表头 Weight 装 kWh/t | ✅ 已修（见 P1-7） |
| 7 | 计数标题 six/five/four | ✅ dust-explosion 已改 five；知识中心 7→9；llms 9→10 families |
| 8 | about 60 / 70 年并列 | ✅ "seventy" 已从源码消失，现统一 "Sixty years" + "Since 1963" |
| 9 | 石磨白面粉 FAQ 与正文打架 | ✅ FAQ 改为 "Only in a limited sense…"，与正文口径一致 |

**遗留（非阻断）**

- **品牌年数**：1963 → 2026 = 63 年，页面写 "Sixty years"（少数一岁）。可接受，但若想严谨可改 "Six decades" 或 "Since 1963"。
- **22–30 篇 <600 词**：`stone-dressing-schedule` 371 词、`stone-mill-vs-roller-mill` 474 词等，属薄内容，与 "工程手册" 定位略不匹配。
- **43% 正文在表格里**：可查不可读，缺论证过程与失败案例。
- **仅 108/209 页有图**（97 张实拍 + 4 张新增 SVG），工艺类文章仍缺流程图。

**已经很好的部分（别改坏）**

- 66 篇知识文章 8-gram Jaccard **0.10 阈值下 0 对** —— 无实质性重复内容，主题蚕食风险已通过"分工声明 + 互链"解决
- 内链 **14,446 条，死链 0**
- 图片 **378 张，alt 缺失 0**
- 每页都有 canonical、description、唯一 H1、≥1 个 H2、≥1 个 schema 块
- hreflang 只在真存在译文的页面输出（`isTranslatedPath`），未指向空页
- `/search/` 已 noindex 且被 sitemap filter 排除
- 外链 11 条，全部实测 200

---

## 四、技术面（健康）

| 检查 | 结果 |
|---|---|
| HTTPS | ✅ 有效，Google Trust Services，2027-02-07 到期 |
| http→https | ✅ 301 |
| 状态码 | 209 页全 200（除软 404 问题） |
| CSS | 单文件 64 KB，无阻塞 JS |
| 首图 | 368 KB JPEG（`p06_01.jpg`），建议转 WebP/AVIF |
| 安全头 | X-Frame-Options / X-Content-Type-Options / Referrer-Policy / Permissions-Policy 齐全，**缺 HSTS** |
| 缓存 | `_headers` 已设 `/_astro/*` 与 `/images/*` immutable 一年 |
| 移动端 | viewport 正确，导航有折叠菜单 |
| 结构化数据 | Organization + Manufacturer、WebSite + SearchAction、BreadcrumbList、Product + Offer、TechArticle、FAQPage —— 类型齐全，`@id` 引用一致 |

---

## 五、修复优先级

### 立刻（部署即可生效）
1. **重新部署 `dist/`**（P0-1/2/3/4 全部在这个包里）
2. Cloudflare 加 `www → apex` 301
3. `_headers` 加 HSTS

### 上线后 1 周
4. GSC 提交新 sitemap（`https://flourmillingpro.com/sitemap-index.xml`），观察索引
5. 剩余 60 篇超长标题压到 ≤60
6. 43 个三语页面描述压到 ≤160
7. 首图转 WebP

### 内容侧（持续）
8. 补 3–5 篇薄内容（<600 词）到 900+ 词
9. 4 篇工艺文章补流程图
10. 每篇正文 3–5 条内链指向产品页

---

## 六、交付物

| 项 | 路径 |
|---|---|
| 修复后 dist（可直接部署） | `output/flourmillingpro-dist-2026-11-09.zip`（7.9 MB，225 页） |
| 本地源码 | `projects/haiyun-astro`（commit `83054a3`） |
| 全站抓取原始数据 | `/tmp/hyaudit/crawl.json`（211 URL） |
