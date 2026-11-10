// Post-build: write a markdown twin next to every built page.
// The HTML stays canonical; the .md exists so an agent or a curl reader gets the
// same content without parsing 40 KB of markup. Links are made absolute.

import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = 'dist';
const BASE = 'https://flourmillingpro.com';

const decode = (s) =>
  s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–');

const strip = (s) =>
  decode(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

function toMarkdown(html, url) {
  let main = html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? html;
  // Tables first: a row-by-row replacement cannot add the header separator.
  main = main.replace(/<table[\s\S]*?<\/table>/gi, (table) => {
    const rows = [...table.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)]
      .map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi)].map((c) => strip(c[1])))
      .filter((row) => row.length);
    if (!rows.length) return '';
    const header = rows[0];
    const sep = header.map(() => '---');
    const body = rows.slice(1).map((row) => `| ${row.join(' | ')} |`).join('\n');
    return `\n\n| ${header.join(' | ')} |\n| ${sep.join(' | ')} |\n${body}\n\n`;
  });

  main = main
    .replace(/<h([1-4])[^>]*>([\s\S]*?)<\/h\1>/gi, (_, level, inner) => `\n\n${'#'.repeat(Number(level))} ${strip(inner)}\n\n`)
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '\n- $1')
    .replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => {
      const abs = href.startsWith('/') ? `${BASE}${href}` : href;
      const label = strip(text);
      return label ? `[${label}](${abs})` : '';
    })
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|section|article|table|ul|ol)>/gi, '\n\n');

  let text = main
    .split('\n')
    .map((line) => line.trim())
    .filter((line, i, arr) => line.length > 0 || (i > 0 && arr[i - 1].length > 0))
    .join('\n');

  text = text
    .replace(/<[^>]+>/g, ' ')
    .split('\n')
    .map((line) => line.replace(/[ \t]+/g, ' ').trim())
    .filter((line) => line && line !== '-' && line !== '|' && !/^\|(\s*\|)+$/.test(line))
    .join('\n');
  text = decode(text).replace(/\n{3,}/g, '\n\n').trim();
  return `<!-- source: ${url} -->\n\n${text}\n`;
}

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else if (entry.name === 'index.html') out.push(p);
  }
  return out;
}

const files = await walk(DIST);
let written = 0;
for (const file of files) {
  if (file.includes('404')) continue;
  const rel = relative(DIST, file).replace(/index\.html$/, '');
  const url = `${BASE}/${rel}`;
  const html = await readFile(file, 'utf8');
  const md = toMarkdown(html, url);
  if (md.length < 200) continue;
  await writeFile(join(file, '..', 'index.md'), md, 'utf8');
  written++;
}
console.log(`md twins: ${written} / ${files.length}`);
