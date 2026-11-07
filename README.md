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

The commercial funnel is translated into Russian, Spanish and Arabic:

```
/            /ru/            /es/            /ar/
/about/      /ru/about/      ...
/contact/    ...
/equipment/  ...
/flour-milling-plant/ ...
```

Arabic renders right-to-left (`dir="rtl"`) and swaps to Noto Kufi/Sans Arabic, since
Inter and Barlow Condensed carry no Arabic glyphs.

**The engineering library stays in English by design.** Machine-translating 57,000
words of technical prose (phosphine dosing, farinograph interpretation, flow-sheet
arithmetic) produces text that is confidently wrong — worse than untranslated English
for the mill engineers who read it. Those sections are linked from the localised
navigation straight to the English pages, and each localised page says so.

hreflang alternates are emitted only for paths that exist in that locale (see
`translatedPaths` in `src/i18n/config.js`), so the tags can never point at a 404.

Adding a language: add the locale to `src/i18n/config.js`, add its UI strings to
`src/i18n/ui.js`, add one entry to the `copy` object in each file under
`src/pages/[lang]/`, and add the path to `translatedPaths`.

## Domain

Site config assumes `https://haiyunmilling.com`. Change `site` in `astro.config.mjs`
and `url` in `src/data/site.js` if deploying elsewhere.
