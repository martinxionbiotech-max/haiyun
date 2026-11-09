import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const dir = 'public/images';
const files = fs.readdirSync(dir).filter((f) => /\.(jpe?g)$/i.test(f));
let totalBefore = 0, totalAfter = 0;
for (const f of files) {
  const src = path.join(dir, f);
  const out = path.join(dir, f.replace(/\.(jpe?g)$/i, '.webp'));
  await sharp(src).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
  const a = fs.statSync(src).size, b = fs.statSync(out).size;
  totalBefore += a; totalAfter += b;
}
console.log(`converted ${files.length} images: ${(totalBefore/1024/1024).toFixed(1)}MB -> ${(totalAfter/1024/1024).toFixed(1)}MB`);
