import sharp from 'sharp';
import { readdir, readFile, writeFile, stat, unlink } from 'fs/promises';

const DIR = 'C:/Users/Enzo/jardin-america-turismo/img';

const configs = [
  { match: /^tabay-hero/,    width: 1920, quality: 85 },
  { match: /^tabay-seccion/, width: 1280, quality: 82 },
  { match: /^tabay-\d+/,     width: 1280, quality: 78 },
  { match: /^dormi-/,        width: 1280, quality: 78 },
  { match: /^portada-hero/,  width: 1920, quality: 82 },
  { match: /.*/,             width: 900,  quality: 78 },
];

function cfg(name) {
  return configs.find(c => c.match.test(name)) ?? { width: 900, quality: 78 };
}

// Umbral: imágenes menores a este tamaño ya están optimizadas, se saltean
const SKIP_BELOW_KB = 600;

const files = (await readdir(DIR)).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
console.log(`Revisando ${files.length} imágenes (se comprimen las de más de ${SKIP_BELOW_KB} KB)...\n`);
let tb = 0, ta = 0, skipped = 0;

for (const file of files) {
  const src = DIR + '/' + file;
  const { size: before } = await stat(src);

  // Saltear imágenes ya optimizadas (excepto PNG que siempre conviene convertir)
  const isPng = /\.png$/i.test(file);
  if (!isPng && before < SKIP_BELOW_KB * 1024) {
    console.log(`  ${file.padEnd(35)} ${(before/1024).toFixed(0).padStart(5)}KB  ✓ ya optimizada`);
    skipped++;
    continue;
  }

  tb += before;
  const { width, quality } = cfg(file);
  try {
    const input = await readFile(src);
    const out = await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();
    const dest = isPng ? src.replace(/\.png$/i, '.jpg') : src;
    await writeFile(dest, out);
    if (isPng) await unlink(src);
    const { size: after } = await stat(dest);
    ta += after;
    console.log(`  ${file.padEnd(35)} ${(before/1024/1024).toFixed(1).padStart(5)}MB → ${(after/1024).toFixed(0).padStart(5)}KB  (-${Math.round((1-after/before)*100)}%)`);
  } catch(e) {
    console.error(`  ERROR ${file}: ${e.message}`);
  }
}

if (tb > 0) {
  console.log(`\nComprimidas: Total ${(tb/1024/1024).toFixed(1)} MB → ${(ta/1024/1024).toFixed(1)} MB  (ahorro: ${((1-ta/tb)*100).toFixed(0)}%)`);
}
console.log(`Salteadas (ya optimizadas): ${skipped} imágenes`);
