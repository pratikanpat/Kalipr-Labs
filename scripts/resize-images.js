const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname, '..', 'public', 'images');
const widths = [600, 1200];

async function processFile(file) {
  const ext = path.extname(file).toLowerCase();
  const name = path.basename(file, ext);
  const inputPath = path.join(inputDir, file);

  // Only process png/jpg/jpeg
  if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) return;

  for (const w of widths) {
    const outName = `${name}-${w}.webp`;
    const outPath = path.join(inputDir, outName);
    try {
      await sharp(inputPath).resize({ width: w }).webp({ quality: 80 }).toFile(outPath);
      console.log(`Created ${outName}`);
    } catch (err) {
      console.error(`Failed to process ${file} -> ${outName}:`, err.message);
    }
  }
}

async function run() {
  if (!fs.existsSync(inputDir)) {
    console.error('Input directory not found:', inputDir);
    process.exit(1);
  }

  const files = fs.readdirSync(inputDir);
  for (const f of files) {
    await processFile(f);
  }
  console.log('Image resizing completed.');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
