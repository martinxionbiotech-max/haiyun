# Haiyun 内容深度审计（2026-11-08）

范围：`src/content/knowledge/` 52 篇（43,705 词正文 / 57,248 词含 frontmatter）、`src/data/{plants,equipment,projects,selection}.js`、知识页模板、about/contact/terms。
方法：全文统计 + 交叉比对 + 算术复算 + 与公开资料核对（Kst / MIE / plansifter 面积）。

---

## 一、结论先说

**内容不是"AI 水稿"，但也不是"工程师手记"。** 它处在两者之间的一个特定位置：结构专业、密度极高、术语准确，但**没有任何一处可核实的经验证据**——52 篇正文外部引用 0 条、正文内链 0 条、作者实体不存在、26 篇全文零第一人称。

危险不在"看起来像 AI 写的"，而在**数字太多、太精确、彼此对不上**。一个懂行的买家（正是目标读者）随手算两个数就会发现矛盾，那时损失的不是排名，是可信度。

| 维度 | 评分 | 依据 |
|---|---|---|
| 技术准确性（常识层面） | B+ | 术语、工艺顺序、变量关系基本正确 |
| 内部一致性 | **D** | 至少 9 处跨文/文内数字自相矛盾 |
| 原创性与独家观点 | C− | 有判断但无出处，有立场但无案例支撑 |
| 主观经验（E-E-A-T 的 E） | **D** | 全站 1 段真实经验叙事，其余为通则 |
| 读者需求满足度 | B | 决策类文章好用，科普类偏"规格书" |
| 可被 AI 引用（GEO） | C | 41/52 篇无导语，结论埋在表格里 |

---

## 二、P0 级：会让懂行读者当场失去信任的硬伤

### 1. 60 t/d 装机功率两套数 + 文章自证不可能

- `plants.js` 6FTDP-60：**150 kW**
- `flour-mill-power-consumption.md` 表：60 t/d = **190 kW**
- `how-to-size-a-flour-mill.md` worked example：150 kW 装机 + 72 kWh/t × 60 t/d

复算：72 × 60 = 4,320 kWh/日 ÷ 24 h = **平均 180 kW**，超过 150 kW 装机 20%。
**一篇讲"怎么算"的文章，自己的算例违反能量守恒。**

### 2. 筛理面积规则与项目案例差 6 倍（全站三篇核心文章的地基）

规则（`how-to-size`、`flour-milling-flow-sheet-design`、`plansifter-sizing-guide` 三处重复）：
**面积(m²) = 产能(t/d) ÷ 0.8** → 即 0.8 t/d 每 m²

项目案例（`projects.js`）：

| 项目 | 产能 | 面积 | 实算密度 | 文中标注 |
|---|---|---|---|---|
| Yengisar | 300 t/d | 62 m² | **4.84** t/d·m² | 0.83 |
| Shufu / Beidahuang | 200 t/d | 44 m² | **4.55** | 0.88 |
| Yuncheng | 500 t/d（双线） | 68 m²/线 | **3.68** | 0.74 |

同一份站点里，规则说 0.8，案例说 4.5–4.8。**差 6 倍**。
要么规则单位错了（真实行业量级通常是"每 m² 筛面每小时处理 xx kg"，折日产量远高于 0.8 t/d·m²），要么案例面积少写了一位。无论哪种，只要买家把两张表放在一起，整站技术权威性归零。

同一规则下还有两处自相矛盾：
- 20 t/d 需 25 m²，但配置写"2 × twin-bin（5 m²/箱）"= **20 m²**（三种写法都算不出 25）
- 100 t/d 需 125 m²，配置写 FSFG8×24 + FSFG6×24 = **92 m²**

### 3. 设备占总投资 35–45% —— 与自己的表相差 30 个百分点

`flour-mill-project-economics.md` 与 `how-much-does-a-flour-mill-cost.md` 都说：
> Equipment is 35–45% of project cost.

同文 turnkey 表逐行复算：

| 产能 | 设备低值 | 交钥匙低值 | 设备占比 |
|---|---|---|---|
| 20 t/d | 85,000 | 130,000 | **65%** |
| 60 t/d | 240,000 | 380,000 | **63%** |
| 200 t/d | 780,000 | 1,200,000 | **65%** |
| 500 t/d | 2,100,000 | 3,200,000 | **66%** |

**表里全是 63–66%，正文说 35–45%。** 这是全站流量最高、最容易被截图对比的两篇。

### 4. 提取率价值算不出来

`flour-extraction-rate-explained.md`：78% vs 74% 商业提取率 = **USD 165,000/年**（60 t/d）
`flour-extraction-rate-economics.md`：每点 = 198 t 面粉 = USD 79,200 → 4 点 = **316,800**

两种口径都对不上 165,000。若要凑出 165,000，需假设小麦单价 162 USD/t —— 与全文使用的 400 USD/t 面粉价体系脱节。

### 5. kWh/t 的分母在站内漂移

同一个 65–74 区间，两篇 FAQ 分别定义：
- `flour-mill-power-consumption`：**per tonne of flour**
- `flour-mill-energy-audit`：**per tonne of wheat milled**

按 76% 出粉率，同一电耗换算相差 **32%**（70 kWh/t 小麦 = 92 kWh/t 面粉）。买家算电费会差一倍预算。

### 6. 线上渲染错误：表头 "Weight / footprint"，单元格里是 "65–71 kWh/t"

`plants.js` 里 `weight` 字段在 60–500 t/d 全部 12 个型号中装的是**比功耗**而非重量。
`PlantDetail.astro` 直接 `{m.weight}<br/>{m.dims}` 输出。
已构建产物 `dist/flour-milling-plant/100-500tpd-flour-plant/index.html` 表头确认为 `Weight / footprint`。**这是一个会出现在客户截图里的错误。**

### 7. 计数类标题与实际内容不符

| 位置 | 标题说 | 实际 |
|---|---|---|
| `dust-explosion-safety` description | six elements | 正文 "five things" |
| `wheat-cleaning-system-design` | "roughly four classes" | 表里 6 行 |
| `how-much-does-a-flour-mill-cost` | "six forgotten lines" | 列 6 条（但 description 说 six cost lines，正文另一处又说 ten lines） |
| `knowledge/index.astro` title | **6 Engineering Handbooks** | 实际 7 个 pillar（schema 写 Seven） |
| `equipment.js` category count | cleaning 13 / milling **9** | cleaning 13 / milling **10**（共 23） |

### 8. 品牌年代两套口径，同页并列

`about/index.astro`：H2 "**Sixty** years of grain machinery" + 下方 banner "**Seventy** years of manufacturing experience"。
`site.js`：founded 2010 / heritage 1963（2026 − 1963 = 63）。
三处数字（60 / 70 / 63）在同一次滚动中出现。

### 9. 石磨能不能做白面粉：FAQ 说"能，只是低效"，正文说"不能"

`stone-mill-vs-roller-mill.md` 第 43 行："Stone mills **cannot** — they grind everything together."
同一页 FAQ："They **can**, but inefficiently."
两种说法都成立（能做低等级白面粉 / 不能做分级专利粉），但并列出现就是在给对手送弹药。

---

## 三、P1 级：原创性与"经验"的证据缺口

### 1. 全站零引用
52 篇正文外部链接 **0 条**。ISO 提及 2 次、ATEX 2 次、Codex 1 次，均无编号、无版本、无链接。
对照公开数据核对结果：
- Kst 50–120 bar·m/s ✅ 合理（文献 53–100，含粉尘收尘器灰可达 122）
- MEC 40–60 g/m³ ✅ 合理
- **MIE "under 30 mJ" ⚠️ 偏低**（文献小麦面粉 50–100 mJ，个别测试低至 25 mJ 但属 cake flour）
- 熏蒸 200 ppm / 7 天 ✅ 符合主流磷化氢规程
这些是好内容，但**没有一条能被追溯**，读者无法验证，AI 引擎也不会引用无源断言。

### 2. 第一人称密度极低
52 篇中 **26 篇全文零 "we/our/us/I"**。全部 52 篇合计第一人称出现约 40 次，其中 9 次集中在 `how-to-size`。
仅有的真实经验叙事只有两处：
- `how-to-size` 开头："Almost every failed project we are asked to rescue was sized forwards…"
- `wheat-procurement-and-storage` 提到 Yengisar 300 t/d 与 Yuncheng 500 t/d 实绩

这两段恰恰是全站最有说服力的文字。**比例失衡：2 段经验 vs 43,000 词通则。**

### 3. 案例精确到小数点，但无来源标注 —— 反向风险
`projects.js` 3,083 词里 **280 个数字**，且极其具体：
> "302 t/d average, 76.4% patent extraction and 68.9 kWh/t"
> "blend protein held at 12.28% average … range 12.21–12.34%"
> "tempering moisture accuracy ±0.25%"

这种精度只有两种可能：真实调试记录，或编造。文件内**没有任何** "measured at commissioning"、"typical values" 或 "client name withheld" 说明。
建议：要么补一句"figures from commissioning test records, client names withheld on request"，要么降精度到区间。**当前形态是最坏选择：像证据但没有证据链。**

### 4. 作者实体不存在
schema `author` 全部指向 `#organization`；页面署名 "By Haiyun engineering desk"。
没有 Person、没有工程师姓名、没有审稿流程、没有 methodology 页。
`terms` 页有免责声明（写得不错），但**免责声明不能替代作者可信度**。
Google 的 E-E-A-T 在 YMYL 边缘品类（工业设备采购决策金额 10 万–300 万美元）对"谁写的"权重很高。

### 5. 正文内链为 0
52 篇正文 **0 条 markdown 链接**，全部互链靠 frontmatter `related` 侧栏 + pillar 页。
后果：
- 文章无法指向对应产品页（`/flour-milling-plant/...`、`/equipment/...`）→ 商业转化路径断在侧栏
- 关键词无法在正文锚文本中自然分布
- 主题权威（topical authority）只能靠目录结构传递，不能靠语义

---

## 四、P2 级：读者体验与 GEO

### 1. 41/52 篇以 H2 或表格直接开篇，零导语
只有 3 篇有 ≥45 词导语，8 篇有 8–33 词短导语。
AI 搜索引擎提取摘要时，需要"文章开头 2–3 句给出完整答案"。当前形态下，ChatGPT/Perplexity 提取到的第一段可能是 `## The rule` 或一张参数表。

### 2. readingTime 全站失真
按公称阅读时长反推，中位阅读速度 **77 词/分钟**（正常 200–250）。
44/52 篇偏离 ±50%，最极端的 `wheat-procurement-and-storage` 是 40 wpm（798 词标 20 分钟）。
这不是大事，但它和"数字精度"放在一起会形成"这些数字没人复核过"的整体印象。

### 3. 43% 的词在表格里
正文 43,705 词，表格内约 18,580 词（43%）。`flour-mill-preventive-maintenance-schedule` 散文只占 29%。
结果是"查得到，读不到"：作为 reference 极好，作为 article 缺少论证过程（为什么是这个数、错了会怎样、边界在哪）。
最典型的短板是**缺少失败案例叙事**。全站唯一一段失败叙事是 `stone-milled-flour-market` 结尾："install SFM-3+4, produce 100 t/month, discover the market is 15 t/month" —— 一句话，而且没有主语。

### 4. 主题蚕食风险（4 组）
词汇重叠 0.18–0.19，且章节结构高度对应：

| 组 | 篇目 | 问题 |
|---|---|---|
| 提取率 | explained / economics | 都讲定义 + 区间 + 改进，仅侧重不同 |
| 清理 | process-flow / system-design | 都讲十阶段 + 排序理由 + 容量 |
| 电耗 | power-consumption / energy-audit | 都讲"电去哪了" + 省电清单 |
| 产能 | how-to-size / capacity-calculation | 同一套"面粉→小麦→损耗→利用率→班次"算法，两篇都跑一遍 |

`how-to-size` 与 `capacity-calculation` 的差异只有：前者多一流表选型与电/建筑，后者多 shift 因子。合并或明确分工（一篇"向上算"、一篇"向下校"）能显著提升单页权重。

### 5. 视觉与结构单一
52 篇只有 7 篇有 heroImage（全部是 pillar）；45 篇正文零配图；工艺流程文章（flow-sheet、cleaning、pneumatic）**应该**有流程图但一张没有。
`Figure` 组件已存在但正文未使用。

### 6. 内容未复用进商业页
知识页与产品页互不引用（0 处）。`/equipment/tqsf/` 讲重力分级机时不链接 `destoner-selection-guide`，反之亦然。
这是本站最大的低成本增益点：52 篇是销售漏斗的上游资产，但目前只在自己内部循环。

---

## 五、值得保留的东西（不要改坏）

1. **判断句写得好**。"Extraction is designed, not operated."、"a plant that 'cleans' wheat by letting it pass through at speed"、"the cheap plant costs more per tonne over its life" —— 这些是全站最强资产，密度约每 800 词一句，位置合适。
2. **买方视角的检查表**。`how-much-does-a-flour-mill-cost` 的"五件事对比报价"、`how-to-size` 的"七项资料清单"、`stone-milled-flour-market` 的"distribution-first 五步"，都是可直接拿去用的工具。
3. **反营销诚实感**。"Two quotations 30% apart… are different products"、"Anything promising 18 months is assuming a price premium that will not hold" —— 这种主动劝退的段落，是 B2B 站最稀缺的信任信号。
4. **三语架构设计**（只翻散文、工程数据单一来源、单位保留英文）是正确决策，不应改动。
5. **术语准确度**：3B2M / 4B5M1S1T 记法、皮磨-心磨-渣磨-尾磨、ash 与 extraction 的取舍、干洗 vs 湿洗的经济性 —— 没有外行错误。

---

## 六、修复清单（按性价比排序）

### 立刻（P0，1–2 小时，纯改数）
1. 60 t/d 装机功率统一（建议以 `plants.js` 150 kW 为准，改 power-consumption 表；或反之，但 worked example 的 72 kWh/t 必须同步下调到 ~60 kWh/t，否则改写算例）
2. 设备占总投资：35–45% → **63–66%**（或把 turnkey 表整体上调 45%，让两套口径重新咬合）
3. `plants.js` 的 `weight` 字段拆成 `specificPower`，表头改 "Specific power"，避免线上显示 "65–71 kWh/t" 挂在 Weight 下
4. 筛理面积：**先决定哪套数是真**。规则改成与案例一致的量级（并在三处同步），或修正案例面积。这是必须由懂工艺的人拍的板，不能靠推。
5. 提取率 165,000 与 79,200 二选一；若保留 165,000 必须补算式
6. kWh/t 分母统一，两篇 FAQ 措辞对齐
7. 计数类标题：six/five/four/ten、6 本手册 → 7 本、equipment count 9 → 10
8. about 页 60 / 70 年统一（建议 63 年或"since 1963"）
9. 石磨白面粉 FAQ 与正文口径统一

### 短期（P1，半天）
10. 为 `projects.js` 加一句来源说明（调试记录 / 客户隐名 / 数值四舍五入），或把 ±0.25%、12.28% 这类精度降到区间
11. 建一个 `/about/methodology/`（或 about 页新增一节）：谁写、依据什么、数据怎么来、多久复核 —— 一页即可，覆盖全站 52 篇的 E-E-A-T
12. 至少 10 篇高流量文章补 2–3 条权威外链（Bühler/OCRIM 技术手册、NFPA 61、ISO 7971、Grain & Feed Milling 期刊）
13. 正文内链：每篇 3–5 条，指向对应产品页 + 同 cluster 文章

### 中期（P2）
14. 41 篇补 40–60 词导语（首句给结论，可直接被 AI 摘要）
15. 合并或分工：extraction ×2、cleaning ×2、power ×2、sizing ×2
16. readingTime 按 200–220 wpm 重算
17. 4 篇工艺文章加流程图（flow sheet 优先）
18. 产品页反向引用知识文章（每页 1–2 条）

---

## 七、一句话判断

这套内容比 95% 的中国设备出口站写得好，但**它现在的形态是"一份没人校对过的专家稿"**：观点是专家的，数字是估算的，出处是缺失的，而精度写得像审计报告。
修掉第二节那 9 处矛盾、补上第三节那 5 个缺口，它就能从"看起来很专业"变成"经得起懂行的人追问"。相反，如果不修，被懂行买家发现任意两条，整站 52 篇会一起贬值。

---

# 第二轮：P1/P2 修复记录（2026-11-08 11:53–12:00）

用户指令：以规则（÷0.8）为准修复，然后继续。以下为 P1/P2 实际落地情况。

## 已修复

| 项 | 结果 |
|---|---|
| 零导语 | 41 篇 → **0 篇**。每篇 47–64 词导语（中位 51），首句即结论，全部定制无模板 |
| 正文→设备内链 | 0 → **34 条**（11 种机型，22 篇覆盖） |
| 正文→知识内链 | 0 → **8 条**（4 组蚕食对互相指路） |
| 外部引用 | 0 → **11 条 / 8 个域名**，逐条 curl 实测 200 |
| 产品页反链知识 | 0 → **23 个产品页 × 2 篇** |
| 方法页 | 新增 `/about/methodology/`（1,066 词），footer 四语接入 |
| 案例数据来源 | 四个项目页加 "Basis of the figures" 说明段 |
| 主题蚕食 4 组 | 不改 URL（保已收录），改为"分工声明 + 互链" |
| readingTime | 再校正 5 篇（补导语后词数变化） |
| 流程图 | 新增 4 张手绘 SVG（清洗序列 / 4B5M1S1T 流表 / 气力输送对比 / 粉尘防线） |

## 外链清单（全部实测 200）
NFPA 61 · OSHA combustible dust · HSE dust · UK Flour Millers · Bühler milling · US Wheat Associates · FAO grain storage · Miller Magazine sifters

刻意避开 403 反爬站（iso.org / aaccnet / world-grain），宁少不假。

## 验证
- 构建 211 页 0 错误
- 内链 13,467 条，死链 **0**
- 4 张 SVG XML 合法，已进 dist
- 正文 43,705 → 47,724 词（+9.2%，全部为导语/分工声明/来源段）

## 未做
- 4 组蚕食的彻底合并（保留双 URL，只做分工）
- 每篇 3–5 条内链的目标未达（设备类够，知识类仅 8 条）
