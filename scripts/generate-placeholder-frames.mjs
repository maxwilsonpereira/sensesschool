import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const frameCount = 48;
const outputDir = path.resolve('public/hero-sequence/placeholder');
await mkdir(outputDir, { recursive: true });

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const ease = (value) => 1 - Math.pow(1 - clamp(value), 3);
const segment = (progress, start, end) => ease((progress - start) / (end - start));
const mix = (from, to, progress) => from + (to - from) * progress;

for (let index = 0; index < frameCount; index += 1) {
  const progress = index / (frameCount - 1);
  const topProgress = segment(progress, 0.02, 0.46);
  const legProgress = segment(progress, 0.2, 0.68);
  const braceProgress = segment(progress, 0.46, 0.82);
  const pegProgress = segment(progress, 0.7, 0.98);
  const settle = Math.sin(clamp((progress - 0.84) / 0.16) * Math.PI) * 4;

  const topX = mix(180, 250, topProgress);
  const topY = mix(80, 300, topProgress) + settle;
  const leftLegX = mix(70, 320, legProgress);
  const leftLegY = mix(530, 360, legProgress) + settle;
  const rightLegX = mix(1010, 755, legProgress);
  const rightLegY = mix(530, 360, legProgress) + settle;
  const braceX = mix(960, 345, braceProgress);
  const braceY = mix(690, 555, braceProgress) + settle;
  const opacity = (value) => clamp(value).toFixed(3);

  const pegs = [
    { x: 322, y: 366, fromX: 90, fromY: 160 },
    { x: 778, y: 366, fromX: 1110, fromY: 155 },
    { x: 360, y: 574, fromX: 115, fromY: 760 },
    { x: 760, y: 574, fromX: 1060, fromY: 760 },
  ]
    .map((peg, pegIndex) => {
      const localProgress = segment(progress, 0.68 + pegIndex * 0.045, 0.84 + pegIndex * 0.04);
      const x = mix(peg.fromX, peg.x, localProgress);
      const y = mix(peg.fromY, peg.y, localProgress);
      return `<circle cx="${x}" cy="${y}" r="9" fill="#6f3f24" opacity="${opacity(pegProgress)}"/>
        <circle cx="${x - 2}" cy="${y - 2}" r="3" fill="#d9a26c" opacity="${opacity(pegProgress)}"/>`;
    })
    .join('');

  const svg = `
    <svg width="1200" height="900" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#f7f2e9"/>
          <stop offset="1" stop-color="#e9e0d0"/>
        </linearGradient>
        <linearGradient id="wood" x1="0" y1="0" x2="1" y2="0.7">
          <stop offset="0" stop-color="#d29a62"/>
          <stop offset="0.48" stop-color="#ba7442"/>
          <stop offset="1" stop-color="#8f522f"/>
        </linearGradient>
        <linearGradient id="woodLight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#dda76f"/>
          <stop offset="1" stop-color="#9d5c36"/>
        </linearGradient>
        <filter id="shadow" x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow dx="0" dy="18" stdDeviation="20" flood-color="#173a33" flood-opacity="0.18"/>
        </filter>
      </defs>
      <rect width="1200" height="900" fill="url(#bg)"/>
      <path d="M0 760 C260 710 420 800 650 750 C860 704 1015 720 1200 675 V900 H0 Z" fill="#dce0ca" opacity="0.72"/>
      <ellipse cx="600" cy="730" rx="390" ry="62" fill="#173a33" opacity="${opacity(progress * 0.13)}"/>
      <g filter="url(#shadow)">
        <g transform="translate(${leftLegX} ${leftLegY})">
          <rect width="66" height="330" rx="18" fill="url(#woodLight)"/>
          <path d="M18 18 V305" stroke="#f1c08c" stroke-width="3" stroke-linecap="round" opacity="0.38"/>
        </g>
        <g transform="translate(${rightLegX} ${rightLegY})">
          <rect width="66" height="330" rx="18" fill="url(#woodLight)"/>
          <path d="M18 18 V305" stroke="#f1c08c" stroke-width="3" stroke-linecap="round" opacity="0.38"/>
        </g>
        <g transform="translate(${braceX} ${braceY})">
          <rect width="510" height="58" rx="16" fill="url(#wood)"/>
          <path d="M28 18 C145 38 315 3 482 24" fill="none" stroke="#edbd88" stroke-width="3" stroke-linecap="round" opacity="0.35"/>
        </g>
        <g transform="translate(${topX} ${topY})">
          <rect width="700" height="92" rx="28" fill="url(#wood)"/>
          <path d="M34 28 C185 58 405 10 662 38" fill="none" stroke="#f1c392" stroke-width="4" stroke-linecap="round" opacity="0.45"/>
          <path d="M46 59 C222 34 432 75 638 50" fill="none" stroke="#744027" stroke-width="3" stroke-linecap="round" opacity="0.25"/>
        </g>
      </g>
      ${pegs}
      <g opacity="${opacity(segment(progress, 0.88, 1))}">
        <path d="M946 214 C966 176 994 160 1022 152" fill="none" stroke="#7d9a72" stroke-width="8" stroke-linecap="round"/>
        <ellipse cx="1017" cy="149" rx="24" ry="11" fill="#7d9a72" transform="rotate(-22 1017 149)"/>
        <ellipse cx="974" cy="184" rx="21" ry="10" fill="#9aab7d" transform="rotate(24 974 184)"/>
      </g>
    </svg>`;

  const filename = `frame-${String(index + 1).padStart(3, '0')}.webp`;
  await sharp(Buffer.from(svg)).webp({ quality: 72, effort: 4 }).toFile(path.join(outputDir, filename));
}

console.log(`Generated ${frameCount} placeholder frames in ${outputDir}`);
