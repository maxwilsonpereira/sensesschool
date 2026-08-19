import { copyFile, unlink } from 'node:fs/promises';
import sharp from 'sharp';

const input = 'public/og.jpg';
const temporary = 'public/og.optimized.jpg';

await sharp(input)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 88, progressive: true, mozjpeg: true, chromaSubsampling: '4:4:4' })
  .toFile(temporary);

await copyFile(temporary, input);
await unlink(temporary);

await sharp('public/images/brand/senses-logo.png')
  .resize(225, 90)
  .webp({ quality: 82, effort: 5 })
  .toFile('public/images/brand/senses-logo.webp');
