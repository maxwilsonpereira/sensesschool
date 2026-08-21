import { copyFile, unlink } from 'node:fs/promises';
import sharp from 'sharp';

const input = 'src/assets/design/social-card-base.jpg';
const logoInput = 'public/images/brand/senses-logo.png';
const output = 'public/og.jpg';
const temporary = 'public/og.optimized.jpg';
const logo = await sharp(logoInput)
  .resize({ width: 200 })
  .png()
  .toBuffer();

await sharp(input)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .composite([{ input: logo, left: 64, top: 50 }])
  .jpeg({ quality: 88, progressive: true, mozjpeg: true, chromaSubsampling: '4:4:4' })
  .toFile(temporary);

await copyFile(temporary, output);
await unlink(temporary);
