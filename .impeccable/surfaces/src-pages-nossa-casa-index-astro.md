---
version: 1
slug: "src-pages-nossa-casa-index-astro"
primary_target: "src/pages/nossa-casa/index.astro"
related_targets: ["src/pages/en/campus/index.astro","src/components/sections/CampusPage.astro"]
---

# Campus / Nossa Casa surface brief

## Scope and mode

- Routes: `/nossa-casa/` and `/en/campus/`, one shared localized Astro surface.
- Mode: Persuade.
- Audience: prospective families evaluating the school’s environment, trustworthiness, and fit.
- Job: understand how the historic house, prepared classrooms, natural light, and garden support daily Montessori life.
- Primary action: schedule a visit. Secondary action: contact or locate the school.

## Proof and constraints

- Proof comes from the verified José Mindlin house story, the current official page copy, four authentic photographs from that page, and verified local contact details.
- Preserve Portuguese and English parity, the original Senses logo, static semantic HTML, and the established Ateliê de Descobertas system.
- Do not invent architecture, room dimensions, schedules, outcomes, staff claims, or substitute/generated campus photography.
- Keep motion restrained, one-time, non-essential, and fully bypassed by reduced-motion preferences.

## Chosen direction

- Direction: **A casa que ensina** — the former library becomes a living book whose chapters are history, prepared rooms, and garden.
- Approved comp: `.impeccable/mocks/decision/campus-living-library.webp`.
- Decision provenance: form position 6, seed `81266bde`.
- Refinement approved through direct page feedback: replace the two-photo doorway and its clip-cover entrance with three equal chapter panels for “História / Salas / Jardim”.
- Memorable moment: each chapter receives its own quiet Montessori block scene, inspired by the user-provided wooden-block reference and built from the established Senses palette.
- The comp’s generated photo composites and house sketch remain compositional references only; shipping documentary evidence uses the exact official-source photographs lower on the page.

## Surface grammar and inventory

- Corners, type, buttons, paper grain, plum/eucalyptus fields, graphite rules, and photo depth inherit `DESIGN.md`.
- The first viewport uses a 5/7 editorial split, a visible visit action, and three equal-height chapter scenes rather than the homepage’s organic hero mask.
- Chapters alternate spacious reading fields and full-bleed documentary evidence; program environments are editorial articles, never generic cards.

| Ingredient | Medium |
| --- | --- |
| Header, H1, lead, chapter navigation, actions | Semantic Astro/HTML/CSS |
| Hero chapter scenes | Semantic CSS Montessori block compositions using established design tokens |
| Baby, Junior, Senior chapters | `campus-baby.jpg`, `campus-junior.jpg`, `campus-senior.jpg` through Astro `<Picture>` |
| Garden chapter | `campus-garden.jpg` through Astro `<Picture>` |
| Chapter labels, arrows, annotations | CSS and small authored SVG geometry only |
| Paper material | Existing `paper-grain.webp` |
| Motion | Hover/focus block micro-interactions plus one small lower-page `IntersectionObserver` |

## As-built implementation

- `src/components/sections/CampusPage.astro` is the single localized page body shared by the thin Portuguese and English route files.
- The story remains linear and evidence-led: Mindlin legacy → prepared environments by stage → garden as daily learning → visit invitation.
- The opening preserves the 5/7 title/lead/action relationship and divides the visual side into three equal rows. On desktop each chapter label sits beside its block scene; on narrower viewports every label sits directly above its corresponding scene in normal document order.
- The hero block scenes render immediately and have no page-load cover, wipe, clip reveal, or dividing rails. Motion is limited to restrained hover/focus responses and is excluded for reduced-motion preferences.
- Warm paper and plum editorial type frame the history and room chapters; graphite rules organize chapter transitions; the garden changes to the established deep-eucalyptus field before the plum visit close.
- The three environments are semantic articles with localized age captions and authentic photographs, not generic cards. The garden photograph is reused only where it supplies direct documentary evidence.
- All public copy is sourced through the shared localization structure. Portuguese carries the complete authoritative official-page account; English preserves the same meaning and content hierarchy rather than introducing separate claims.
- Documentary images use Astro `<Picture>` with responsive widths, explicit dimensions, AVIF output and WebP fallback. Chapter images remain lazy-loaded because the hero scenes are lightweight CSS.
- Entrance and chapter reveals use CSS plus one bounded `IntersectionObserver`. Content is visible without JavaScript, and the entire authored-motion path is excluded when `prefers-reduced-motion: reduce` is active.

## Validation record

Validated on 21 August 2026 against `/nossa-casa/` and `/en/campus/`:

- Portuguese content is complete against the authoritative official source; English has semantic parity.
- Each route has its own canonical URL, reciprocal `hreflang` links, `x-default`, and matching sitemap alternates.
- The shared page emits one `h1` with a logical chapter hierarchy.
- Mobile navigation is keyboard operable, keeps `aria-expanded` synchronized, and dismisses with Escape. Mobile social and language controls measure at least 44 × 44 px.
- Reduced-motion behavior bypasses non-essential entrance/reveal motion.
- Responsive campus photography is generated as AVIF with WebP fallback; hero evidence is prioritized without eagerly loading the room sequence.
- Browser console is empty and `scrollWidth` does not exceed `clientWidth` at 375, 430, 768, 1024, 1440, or 1728 px.
- `npm run check` completed with 0 diagnostics; `npm run build` completed successfully for the static site.
- The Impeccable detector reported only intentional advisory page-specific type clamps. Its single undocumented color was replaced with an existing design token.
- The finish review found no remaining blocker after content and accessibility fixes and requested recaptures.

Settled visual evidence:

- Full page: `.impeccable/review/campus-full-settled.png`
- Room chapters: `.impeccable/review/campus-room-baby.png`, `.impeccable/review/campus-room-junior.png`, `.impeccable/review/campus-room-senior.png`
- Garden chapter: `.impeccable/review/campus-garden-desktop.png`

## Unresolved decisions

- None. The user approved the comp-led direction on 21 August 2026.
