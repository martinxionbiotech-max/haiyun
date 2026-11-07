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

## Domain

Site config assumes `https://haiyunmilling.com`. Change `site` in `astro.config.mjs`
and `url` in `src/data/site.js` if deploying elsewhere.
