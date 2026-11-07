// Search index for the site-wide search at /search/.
//
// Generated at build time rather than fetched from a third-party service: this
// is a 113-page static site, so shipping ~200 KB of JSON and filtering it in the
// browser is faster than any hosted search and adds no runtime dependency.
import { getCollection } from 'astro:content';
import { plantSeries } from '../data/plants.js';
import { equipment, equipmentCategories } from '../data/equipment.js';
import { projects } from '../data/projects.js';

export const prerender = true;

const stripMd = (s) =>
  String(s || '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`|~-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const docs = [];

// ---- Knowledge articles -----------------------------------------------------
const all = await getCollection('knowledge');
for (const entry of all) {
  const d = entry.data;
  docs.push({
    url: `/knowledge/${entry.id}/`,
    title: d.title,
    description: d.description,
    type: d.type === 'pillar' ? 'Handbook' : 'Article',
    pillar: d.pillar || null,
    keywords: d.keywords || [],
    body: stripMd(entry.body).slice(0, 1200),
  });
}

// ---- Plant range ------------------------------------------------------------
for (const p of plantSeries) {
  docs.push({
    url: `/flour-milling-plant/${p.slug}/`,
    title: p.name,
    description: p.tagline,
    type: 'Plant',
    keywords: [p.capacity, p.scale, p.altName],
    body: stripMd(
      [p.intro, ...(p.highlights || []), ...(p.flow || []), p.selection].join(' ')
    ).slice(0, 1200),
  });
}

// ---- Equipment --------------------------------------------------------------
for (const e of equipment) {
  const cat = equipmentCategories.find((c) => c.id === e.category);
  docs.push({
    url: `/equipment/${e.slug}/`,
    title: `${e.name} (${e.model})`,
    description: e.tagline,
    type: 'Equipment',
    keywords: [e.model, e.altName, e.stage, cat?.name].filter(Boolean),
    body: stripMd(
      [e.intro, e.selection, e.maintenance, ...(e.specs?.rows?.flat() || [])].join(' ')
    ).slice(0, 1200),
  });
}

// ---- Projects ---------------------------------------------------------------
// Project records nest objects in constraints/design and plain strings elsewhere,
// so flatten both shapes rather than assuming one.
const flat = (arr) =>
  (arr || []).flatMap((x) =>
    x && typeof x === 'object' ? [x.title, x.body, x.label, x.value] : [x]
  );

for (const p of projects) {
  docs.push({
    url: `/projects/${p.slug}/`,
    title: p.title,
    description: p.summary || '',
    type: 'Project',
    keywords: [p.location, p.region, p.scope, String(p.year)].filter(Boolean),
    body: stripMd(
      [
        p.summary,
        ...flat(p.brief),
        ...flat(p.constraints),
        ...flat(p.design),
        ...flat(p.outcome),
        ...flat(p.lessons),
      ].join(' ')
    ).slice(0, 1200),
  });
}

// ---- Section landing pages --------------------------------------------------
const sections = [
  ['/', 'Haiyun — Wheat Flour Milling Plants', 'Complete wheat flour milling plants from 10 to 500 tonnes per day.', 'Page'],
  ['/flour-milling-plant/', 'Flour Milling Plants', 'Seven plant architectures, from a 200 kg/h village unit to a 500 t/d turnkey mill.', 'Page'],
  ['/equipment/', 'Equipment Catalogue', '23 machine families across cleaning and milling.', 'Page'],
  ['/solutions/', 'Solutions by Project Type', 'Plant solutions grouped by what the customer is trying to achieve.', 'Page'],
  ['/knowledge/', 'Knowledge Centre', 'Engineering handbooks on wheat flour milling.', 'Page'],
  ['/projects/', 'Reference Projects', 'Plants we have built and commissioned.', 'Page'],
  ['/about/', 'About Haiyun', 'Manufacturer since 1963.', 'Page'],
  ['/contact/', 'Contact', 'Send your wheat specification and target tonnage.', 'Page'],
];
for (const [url, title, description, type] of sections) {
  docs.push({ url, title, description, type, keywords: [], body: '' });
}

export function GET() {
  return new Response(JSON.stringify({ count: docs.length, docs }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
