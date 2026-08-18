import { copyFile, unlink } from 'node:fs/promises';
import sharp from 'sharp';

const input = 'public/og.png';
const temporary = 'public/og.optimized.png';

await sharp(input)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .png({ compressionLevel: 9, palette: true, quality: 88 })
  .toFile(temporary);

await copyFile(temporary, input);
await unlink(temporary);

await sharp('public/images/brand/senses-logo.png')
  .resize(225, 90)
  .webp({ quality: 82, effort: 5 })
  .toFile('public/images/brand/senses-logo.webp');
