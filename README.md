# Haiyun Milling — Website

Astro 5 + Tailwind CSS static site for Shandong Sishui Haiyun Grain Machine Co., Ltd.

## Build

```bash
npm install
npm run build      # → dist/
```

Deploy `dist/` to Cloudflare Pages, Netlify, Vercel or any static host.

## Cloudflare Pages settings

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22`

## Structure

```
src/
  data/            plants.js (7 plant classes, 30+ models), equipment.js (23 families),
                   selection.js (8 selection matrices), projects.js (4 case studies), site.js
  content/knowledge/  52 markdown articles (7 pillar + 45 cluster)
  layouts/         Base.astro (SEO/Schema), PageLayout.astro
  components/      Header, Footer, PageHero, FAQ, CTABand
  pages/           index, flour-milling-plant, equipment, knowledge, solutions, projects, about, contact, privacy, terms
public/            97 brochure images, favicon, og-image, robots.txt, llms.txt
```

## Content inventory

- 7 plant class pages with full parameter tables
- 23 equipment detail pages with spec tables, selection cross-checks + FAQ schema
- 4 project case-study pages (brief, constraints, as-built, measured outcome)
- 52 engineering articles, ~57,000 words, in 7 pillar + 45 cluster structure
- Schema: Organization, Manufacturer, WebSite, BreadcrumbList, Product, TechArticle, FAQPage, CollectionPage, AboutPage
- robots.txt allows GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended
- llms.txt with structured citation guidance

## Languages

The whole commercial surface is translated into Russian, Spanish and Arabic —
including every plant and equipment detail page:

```
/                          /ru/                          ...
/about/                    /ru/about/
/contact/                  /ru/contact/
/equipment/                /ru/equipment/
/equipment/tqsf/           /ru/equipment/gravity-destoner/
/equipment/cleaning-equipment/   /ru/equipment/cleaning-equipment/
/flour-milling-plant/      /ru/flour-milling-plant/
/flour-milling-plant/stone-mill-unit/   /ru/flour-milling-plant/stone-mill-unit/
```

That is 7 plant pages, 23 equipment pages and 2 category pages per locale, plus the
five funnel pages — 37 pages each in ru/es/ar.

Arabic renders right-to-left (`dir="rtl"`) and swaps to Noto Kufi/Sans Arabic, since
Inter and Barlow Condensed carry no Arabic glyphs.

**What stays English, and why.** The 52-article engineering library, the four project
records, solutions and the legal pages remain English only. Machine-translating 57,000
words of technical prose (phosphine dosing, farinograph interpretation, flow-sheet
arithmetic) produces text that is confidently wrong — worse than untranslated English
for the mill engineers who read it. Localised navigation links straight to those
English pages and each localised page states it.

**Spec tables are not translated.** Column headers and unit cells are dimensional
metrology; a mistranslated unit is a safety problem, not a copy problem. Model codes
(`TQSF`, `FMFQ`, `FSFG`) stay in Latin script everywhere.

### Search

`/search/` is a client-side filter over `/search-index.json`, generated at build time
from the content collection and the data modules (94 documents, ~134 KB). It scores
title matches above keyword matches above body matches, supports type filters, and
accepts `?q=` deep links. It is `noindex` and excluded from the sitemap.

hreflang alternates are emitted only for paths that exist in that locale (see
`translatedPaths` in `src/i18n/config.js`), so the tags can never point at a 404.

### Adding a language

1. Add the locale to `locales` and `localeMeta` in `src/i18n/config.js`.
2. Add its UI strings to `src/i18n/ui.js` and its detail-page labels to `src/i18n/detail.js`.
3. Add `src/data/i18n/plants.<lang>.js`, `equipment.<lang>.js` and `selection.<lang>.js`.
4. Add one entry to the `copy` object in each file under `src/pages/[lang]/`.
5. Append the locale to `translatedLocales` — routes and hreflang follow automatically.

Translation files carry prose only. Model tables, spec tables and drawings live in
`src/data/{plants,equipment}.js` alone, so a translation can never invent a dimension.

## Domain

Site config assumes `https://haiyunmilling.com`. Change `site` in `astro.config.mjs`
and `url` in `src/data/site.js` if deploying elsewhere.
