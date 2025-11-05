const path = require('path');
const sharp = require('sharp');

const input = path.join(__dirname, '..', 'public', 'images', 'fevicon.svg');
const outDir = path.join(__dirname, '..', 'public', 'images');

const sizes = [32, 64, 128];

async function generate() {
  try {
    for (const size of sizes) {
      const out = path.join(outDir, `fevicon-${size}.png`);
      await sharp(input)
        .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png({ quality: 90 })
        .toFile(out);
      console.log(`Created ${out}`);
    }

    // Also ensure a generic favicon.png (64x64) exists for legacy use
    const generic = path.join(outDir, `fevicon.png`);
    await sharp(input)
      .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 90 })
      .toFile(generic);
    console.log(`Created ${generic}`);

    console.log('Favicons generated successfully.');
  } catch (err) {
    console.error('Failed to generate favicons:', err);
    process.exit(1);
  }
}

generate();
