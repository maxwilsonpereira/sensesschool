---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/en/index.astro","src/components/sections/HomePage.astro"]
---

# Homepage surface brief

## Scope and mode

- Routes: `/` and `/en/`, one shared localized Astro homepage.
- Mode: Persuade.
- Audience: prospective families in São Paulo evaluating an early-childhood school.
- Job: understand the school’s distinctive educational logic, feel its warmth and credibility, and schedule a visit.
- Primary action: schedule a visit. Secondary action: learn about the school.

## Proof and constraints

- Proof comes from verified copy, authentic Senses photography, the three real programs, the Brooklin house and garden, and Mariana Ruske’s verified educational perspective.
- Preserve the original Senses logo and plum/rose brand lineage.
- No invented testimonials, outcomes, credentials, statistics, or admissions promises.
- No on-scroll hero animation or parallax in this phase.
- Static Astro, semantic HTML, minimal JavaScript, both languages, mobile-first accessibility and SEO.

## Chosen direction

- World: **Ateliê de Descobertas** — Brazilian pedagogical atelier and observation notebook.
- Approved composition: **Diálogo de Ateliê**, `.impeccable/mocks/decision/model-pick.webp`.
- Memorable moment: the oversized scientist thesis and an authentic child-at-work image meet across a controlled organic edge, annotated with “observar / tentar / descobrir.”
- Do not literalize the generated children or educator as Senses evidence; replace with authentic repository photography.

## Sampled comp colors

- Page paper: `#FAF5E9` (sampled flat field).
- Solid CTA plum: `#67294A` (sampled interior).
- Display plum: `#4A0E2A` (sampled headline interior).
- Pencil coral: `#FFC5C1` (sampled underline interior).
- Supporting authored accents remain anchored to brand rose `#D2B0B1`, eucalyptus `#5D8F86`, and golden yellow `#E8B64A`.

## Component grammar

- Corners: compact `0.6rem` control rounding and a reserved `0.8rem` media token; photography uses controlled irregular masking instead of card rounding.
- Lines: graphite-like 1px rules; accent strokes are 2–4px and imperfect but never noisy.
- Elevation: flat paper layers, no glass, no glossy shadows; photographs may receive a small warm paper offset.
- Type: high-contrast editorial serif for thesis headings; humanist sans for body, navigation, buttons, labels; handwritten annotations use a restrained cursive system fallback.
- Layout: normal document flow, proportional two-column editorial grids, intrinsic mobile stacking, and generous asymmetric whitespace.

## Implementation inventory

| Visible ingredient | Commitment | Medium |
| --- | --- | --- |
| Original Senses wordmark | Exact preserved logo, never redrawn | Existing `public/images/brand/senses-logo.webp` |
| Header and navigation | Restrained, aligned, visible desktop nav; full-width mobile overlay | Semantic Astro/HTML + CSS + minimal menu JS |
| Hero thesis and actions | One large H1, short verified lead, both CTAs in first viewport | Semantic HTML + fluid CSS typography/grid |
| Dominant hero image | Authentic child concentration/practical-work image, large and naturally lit | Existing `src/assets/school/historic-house.jpg` via Astro `<Picture>` |
| Organic photo boundary | Controlled asymmetry; never text/image collision | CSS `mask-image` using `src/assets/design/atelier-photo-mask.png`; rectangular below 34rem |
| Observation annotations | Three sparse words and simple arrows/underline | Semantic labels + inline SVG/CSS strokes |
| Paper material | Warm low-contrast fibre, visible but subordinate | Produced seamless raster `src/assets/design/paper-grain.webp` |
| Philosophy section | Large editorial statement with calm supporting copy | Semantic HTML/CSS |
| Method sequence | Four verified principles with visible progression | Ordered list + CSS grid; no generic card wall |
| Programs | Three developmental environments with real photographs and ages | Semantic articles + existing Astro images |
| Bilingual + campus | Distinct color field, lived-English message, house/garden evidence | Semantic HTML/CSS + existing photographs |
| Leadership | Mariana’s verified perspective; no fabricated portrait | Text-led editorial block + authentic environment detail |
| FAQ and visit close | Native disclosures and an invitational conversion close | `<details>`, links, semantic footer |

## Responsive and motion rules

- Desktop preserves the approved two-zone hero without absolute layout dependencies.
- At 64rem the navigation becomes a full-viewport overlay while the hero remains two-column; at 50rem the hero enters a single-column reading order.
- Mobile shows thesis, lead, actions, then the image; annotations reduce to a compact three-word rail.
- Motion thesis: the prepared atelier is gently uncovered. The hero has one staged 600-1105ms entrance; selected evidence groups use one-time paper, collage, sequence, quote, or paired reveals and remain settled afterward. Authored motion and navigation changes run at the calmer cadence, while control feedback stays fast.
- Motion uses native CSS plus a small `IntersectionObserver`, keeps content visible without scripting, and adds no dependency. Reduced motion skips the focal and reveal choreography while preserving immediate state feedback.
- FAQ answers retain native disclosure semantics and add an interruption-safe measured-height paper reveal: 520ms opening, 400ms closing, with immediate native behavior under reduced motion or without JavaScript.
- The sticky header uses one compact/expanded threshold with hysteresis: the expanded state shows the preserved institutional lockup with “Montessori School,” then a vertical crop and crossfade reveal the preserved compact wordmark as the paper surface reduces in height. It is a bounded state transition, not continuous scroll animation; reduced motion applies the state immediately.

## Unresolved decisions

- No unresolved content or visual-world choices. Future pages inherit this system after the homepage is complete.

## Shipped implementation

- Shared surface: `src/components/sections/HomePage.astro`, composed inside `src/layouts/BaseLayout.astro` and styled by component-scoped CSS plus `src/styles/global.css`.
- Canonical Portuguese route: `/`; reciprocal English route: `/en/`. Both use the same components and `src/i18n/content.ts` dictionary.
- Durable project-level system: `DESIGN.md`; machine-readable extensions: `.impeccable/design.json`; asset provenance and use constraints: `.impeccable/asset-manifest.md`.
- Self-hosted Fraunces is accepted as a deliberate tradeoff: Latin and Latin Extended WOFF2 subsets with `font-display: swap`, local SIL OFL license, Georgia fallback, no external font request, and repository responsibility for caching and glyph coverage.

## Final review

- Review evidence: `.impeccable/review/desktop.png` and `.impeccable/review/mobile.png`.
- The shipped layouts preserve the thesis-first hierarchy, authentic photographic evidence, full-width accessible mobile navigation, responsive reading order, and the quiet atelier material system across both localized routes.
- No scroll-sequence, parallax, scroll-jacking, autoplay, or loop is present. The restrained entrance system is non-essential, one-time, and fully bypassed by reduced-motion preferences.
- Motion review evidence: `.impeccable/review/motion-desktop.png` and `.impeccable/review/motion-mobile.png`.
- Required regression widths remain 375, 430, 768, 1024, 1440, and 1728px, including horizontal-overflow, keyboard, focus, console, and reduced-motion checks.
- **Independent disposition: ship.**
