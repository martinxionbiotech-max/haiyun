import sharp from 'sharp';
import fs from 'node:fs';
const files=['p06_01','p18_01','p28_01','p03_01','p12_01','p01_01','p16_01','p14_01'];
for (const f of files) {
  const src=`public/images/${f}.jpg`;
  if (!fs.existsSync(src)) { console.log('missing',src); continue; }
  const out=`public/images/${f}.webp`;
  await sharp(src).resize({width:1600,withoutEnlargement:true}).webp({quality:82}).toFile(out);
  const a=fs.statSync(src).size, b=fs.statSync(out).size;
  console.log(`${f}: ${Math.round(a/1024)}KB -> ${Math.round(b/1024)}KB`);
}
