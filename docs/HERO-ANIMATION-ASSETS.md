# Final hero animation asset workflow

The homepage currently uses a disposable 48-frame WebP sequence in `public/hero-sequence/placeholder/`. The scroll engine is content-agnostic: replacing the imagery requires new frames and a small configuration change, not a component rewrite.

## Creative brief

Create a stable-camera, 4:3 composition of a child-sized Montessori table, shelf, or learning station assembling piece by piece. Begin with every wooden component clearly separated and end with a complete, believable object in a calm prepared environment.

The visual should use natural wood, diffuse daylight, warm off-white surfaces, subtle green or botanical detail, and enough negative space to work beside the hero copy. Avoid text, logos, extra limbs or hardware, dramatic camera moves, shallow-focus flicker, and objects changing material or proportions between frames.

Recommended master reference:

- aspect ratio: 4:3;
- reference size: at least 2400 × 1800 px;
- final web-frame size: 1600 × 1200 px for desktop;
- optional mobile sequence: 1200 × 1500 px (4:5) with the object centred lower in frame;
- lighting: stable, soft daylight;
- camera: locked tripod, no zoom or orbit unless designed and tested deliberately;
- background: quiet, low contrast, without children or faces in the generated sequence;
- duration: 2–3 seconds at 24 fps, yielding roughly 48–72 unique frames.

## Production steps

1. Create and approve one high-resolution reference still that establishes the exact furniture, hardware, camera angle, crop, materials, background, and lighting.
2. Use image-to-video rather than text-to-video so the object stays consistent. Prompt for a reverse-build or assembly action with a locked camera. If the tool is better at disassembly, generate that motion and reverse it during editing.
3. Export the highest-quality source available. Prefer ProRes 422 or a visually lossless intermediate; otherwise use a high-bitrate H.264/H.265 file with constant dimensions and no variable-frame-rate output.
4. Trim the source to the clean assembly only. Make the first and final states readable for several frames, but remove long pauses.
5. Extract frames with FFmpeg. From the repository root:

```bash
mkdir -p public/hero-sequence/montessori-table
ffmpeg -i source-master.mov -vf "fps=24,scale=1600:1200:force_original_aspect_ratio=decrease,pad=1600:1200:(ow-iw)/2:(oh-ih)/2:color=#f4f0e8" -c:v libwebp -quality 78 -compression_level 6 public/hero-sequence/montessori-table/frame-%03d.webp
```

On Windows PowerShell, create the folder first with:

```powershell
New-Item -ItemType Directory -Force public/hero-sequence/montessori-table
```

6. Inspect the first, middle, and final frames, then scrub the full directory quickly. Reject sequences with geometry changes, flicker, unexpected camera movement, warped hardware, or mismatched wood grain.
7. Target an average of roughly 15–35 KB per frame and an initial sequence budget below about 2 MB. Complex photography may require up to 3 MB, but test on a mid-range mobile device before accepting that cost.
8. Copy the final frame to a stable poster name if desired, or use its numbered path directly.
9. Update the default configuration in `src/components/sections/ScrollSequenceHero.astro`:

```ts
{
  frameBase: '/hero-sequence/montessori-table/frame-',
  frameCount: 60,
  extension: 'webp',
  poster: '/hero-sequence/montessori-table/frame-060.webp',
  scrollHeightVh: 300,
  fit: 'contain',
  initialFrame: 0,
}
```

No animation logic or homepage markup should need to change.

## Performance and QA checklist

- Keep numbering contiguous and zero-padded (`frame-001.webp`).
- Confirm that `frameCount` exactly matches the files present.
- Use WebP first; compare AVIF only if decode performance remains smooth on target phones.
- Do not upscale a low-resolution generative video.
- Preserve the 4:3 crop across every desktop frame.
- If a mobile-specific crop is produced, add it as a second sequence configuration rather than stretching desktop frames.
- Test forward and reverse scrolling at 375, 430, 768, 1024, and 1440 px widths.
- Test `prefers-reduced-motion`: only the final poster should appear and the hero should no longer be pinned for multiple screens.
- Disable JavaScript once: the heading, body, CTAs, and final poster must remain visible.
- Check memory and decode behaviour on a physical mid-range mobile device before launch.

The placeholder generator remains at `scripts/generate-placeholder-frames.mjs`; it can be deleted together with the placeholder directory after final assets are approved.
