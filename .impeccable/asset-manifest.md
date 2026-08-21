# Homepage asset manifest

This inventory implements the approved **Ateliê de Descobertas / Diálogo de Ateliê** direction in `.impeccable/mocks/decision/model-pick.webp`. The comp is compositional authority, but its generated people and classroom are not Senses evidence and must never ship.

## Existing authentic assets

All content photography remains in `src/assets/school/` and should be rendered through Astro's `<Picture>` component with AVIF plus WebP fallback, useful alt text, explicit dimensions, responsive widths, and accurate `sizes`.

| Asset | Authentic evidence and recommended role |
| --- | --- |
| `historic-house.jpg` | A child concentrating on practical botanical work beside a seedling. Strongest hero choice for the comp's child-as-scientist thesis and the dominant irregular photo area. |
| `nature-detail.jpg` | Two children working independently with tray materials at a child-height table. Suitable for method, autonomy, or program evidence. |
| `garden.jpg` | Children moving outdoors beneath the established garden tree. Suitable for campus/garden and lived-school-life evidence. |
| `prepared-environment.jpg` | Wide prepared Montessori classroom with child-scale furniture, materials, daylight, and the stone wall. Suitable for prepared-environment or campus proof. |
| `toddler-classroom.jpg` | Bright child-scale classroom with low shelving and access to the garden. Suitable for the toddler/program environment. |
| `nursery.jpg` | Infant/toddler movement environment with low equipment and open floor space. Suitable for the nursery/Bebê Cientista program. |
| `public/images/brand/senses-logo.webp` | Exact preserved Senses wordmark for the header. Do not redraw, stylize, trace, or regenerate it. The PNG sibling remains an existing source/fallback, not a redesign input. |
| `public/images/brand/senses-logo-full.png` | Exact preserved institutional lockup with the “Montessori School” descriptor, downloaded without pixel edits from the official school website for the expanded header state. Do not redraw, stylize, trace, or regenerate it. |

Do not generate substitute children, educators, classrooms, campus scenes, portraits, logos, icons, or program imagery. Do not present the synthetic people visible in the approved comp as Senses photography.

## Nossa Casa / Campus authentic assets

These four photographs live in `src/assets/school/`. They were downloaded from the current official Senses campus pages for the approved **A casa que ensina** direction, then optimized once to a maximum 1920 px long edge as progressive JPEG sources. Each file carries its exact official source URL and optimization note in embedded provenance metadata; the optimized repository files are the shipping sources and must not be recompressed again without a demonstrated need.

| Asset | Official source and page role |
| --- | --- |
| `src/assets/school/campus-baby.jpg` | `https://sensesschool.com.br/wp-content/uploads/2018/04/IMG_5671.jpg`; Bebê Cientista prepared environment. |
| `src/assets/school/campus-junior.jpg` | `https://sensesschool.com.br/wp-content/uploads/2018/05/IMG_1781.jpg`; Cientista Júnior room and the interior half of the opening hero doorway. |
| `src/assets/school/campus-senior.jpg` | `https://sensesschool.com.br/wp-content/uploads/2018/02/DSC04189.jpg`; Cientista Sênior prepared environment. |
| `src/assets/school/campus-garden.jpg` | `https://sensesschool.com.br/wp-content/uploads/2018/03/IMG_5623.jpg`; garden evidence and the exterior half of the opening hero doorway. |

## Pre-existing raster provenance

Verified repository origin records travel with every pre-existing shipping raster in this inventory:

- The six JPEGs in `src/assets/school/` carry JPEG comment metadata identifying them as authentic Senses photography retained from the audited live site, citing `PRODUCT.md` and `docs/DISCOVERY-AUDIT.md`. The repository records no photographer, capture date, or upstream source URL.
- `public/images/brand/senses-logo.png` carries PNG text metadata identifying it as the preserved original wordmark, citing the brand commitments and homepage surface inventory. The repository records no designer, creation date, or upstream source URL.
- `public/images/brand/senses-logo.webp` uses the permitted sibling `senses-logo.webp.json` provenance fallback because the Impeccable utility does not embed into WebP. It records the PNG source and its original 225 × 90, WebP quality 82 conversion parameters.
- `public/images/brand/senses-logo-full.png` carries PNG text metadata recording the exact official source URL, retrieval date, original dimensions, and expanded-header use. Its decoded-frame hash was checked before and after metadata embedding and remained `62019db07672b1f00f75f4fc6d3e5811`.
- `src/assets/design/social-card-base.jpg` preserves the pre-existing repository social card as the stable composition source. The repository records no image author, creation date, or upstream source URL.
- `public/og.jpg` is generated from that stable source by `scripts/optimize-social-card.mjs`, with the exact preserved Senses PNG wordmark composited at the upper left. It remains a 1200 × 630 progressive MozJPEG at quality 88 for social-link previews.

The Impeccable metadata mechanism inserts JPEG comments or PNG text chunks without decoding or recompressing pixels. Decoded-frame hashes were checked before and after embedding.

## Produced design materials

| Asset | Specification | Intended use |
| --- | --- | --- |
| `src/assets/design/paper-grain.webp` | 1254 x 1254 warm cream, low-contrast fibre texture; visually checked in a 2 x 2 repeat; no text, marks, logo, or watermark. Exact built-in imagegen prompt is in the sibling `.prompt.txt`. | Subordinate repeating page material over/with the `#FAF5E9` paper ground. Keep opacity low enough that type and photographs retain authority, but visible enough to preserve the approved comp's tactile character. |
| `src/assets/design/atelier-photo-mask.png` | 1024 x 1024 true RGBA alpha mask; pure opaque white field with a restrained irregular left contour only; top/right/bottom straight; no internal holes, drawing, text, logo, color, or watermark. Generation and normalization provenance is in the sibling `.prompt.txt`. | CSS `mask-image`/`-webkit-mask-image` over authentic Senses photography. It is structural support, never visible content. Use a rectangular fallback when masking is unsupported or when the responsive/reduced-motion treatment requires it. |

## Regions that must remain semantic code

The following visible regions must be Astro/HTML/CSS (with inline SVG only for simple authored strokes), not flattened into raster imagery:

- Header landmarks, navigation links, language switcher, menu button, and mobile overlay.
- The single hero `h1`, localized lead, both calls to action, and their focus/hover states.
- The words `observar`, `tentar`, and `descobrir`; their accessible labels; pencil underline/arrows/circles as small inline SVG or CSS strokes.
- The organic hero composition and photo placement. Apply `atelier-photo-mask.png` to an authentic Astro `<Picture>` rather than baking the photo into a composite image.
- Philosophy statement, four-step method sequence, program names/ages/copy, bilingual and campus content, leadership copy, FAQ disclosures, visit close, and footer.
- Rules, registration marks, paper offsets, color fields, spacing, clipping, responsive layout, and all interaction/motion behavior.
- Every localized Portuguese and English string, heading relationship, link destination, accessible name, and structured-data/SEO element.

The paper texture is decorative and should be ignored by assistive technology. The photo mask has no semantic role and must not replace the photograph's useful `alt` text.
