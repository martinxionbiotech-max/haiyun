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
  main = main
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(/<nav[\s\S]*?<\/nav>/gi, '')
    .replace(/<header[\s\S]*?<\/header>/gi, '')
    .replace(/<footer[\s\S]*?<\/footer>/gi, '');

  main = main
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n\n# $1\n\n')
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n\n## $1\n\n')
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n\n### $1\n\n')
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n\n#### $1\n\n')
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '\n- $1')
    .replace(/<tr[^>]*>([\s\S]*?)<\/tr>/gi, (_, row) => {
      const cells = [...row.matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi)].map((m) => strip(m[1]));
      return cells.length ? `\n| ${cells.join(' | ')} |` : '';
    })
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
