---
name: "Senses Montessori School"
description: "A warm editorial Montessori atelier built from cream paper, plum type, authentic observation, and purposeful restraint."
colors:
  brand-plum: "#7c3e66"
  action-plum: "#67294a"
  display-plum: "#4a0e2a"
  soft-rose: "#d2b0b1"
  rose-field: "#f1d9d7"
  coral: "#e86e83"
  pencil-coral: "#ffc5c1"
  eucalyptus: "#5d8f86"
  eucalyptus-deep: "#315f57"
  gold: "#e8b64a"
  paper: "#faf5e9"
  paper-bright: "#fffaf1"
  ink: "#2d2430"
  ink-soft: "#655b63"
  warm-white: "#fffdf8"
  graphite-line: "color-mix(in srgb, #4a0e2a 18%, transparent)"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(3.35rem, 2.25rem + 4.5vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.35rem, 1.78rem + 2.35vw, 4rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.62rem, 1.36rem + 1vw, 2.28rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  body-large:
    fontFamily: "Avenir Next, Avenir, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(1.22rem, 1.12rem + 0.45vw, 1.55rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Avenir Next, Avenir, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.14rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Avenir Next, Avenir, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(0.76rem, 0.73rem + 0.14vw, 0.86rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
  action:
    fontFamily: "Avenir Next, Avenir, Segoe UI, Arial, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
  annotation:
    fontFamily: "Segoe Print, Bradley Hand, cursive"
    fontSize: "clamp(0.82rem, 1.2vw, 1rem)"
    fontWeight: 400
    lineHeight: 1
rounded:
  none: "0"
  control: "0.6rem"
  media: "0.8rem"
spacing:
  1: "0.5rem"
  2: "0.75rem"
  3: "1rem"
  4: "1.5rem"
  5: "2rem"
  6: "3rem"
  7: "clamp(4rem, 8vw, 7rem)"
  section: "clamp(5.5rem, 11vw, 10rem)"
components:
  button-solid:
    backgroundColor: "{colors.action-plum}"
    textColor: "{colors.warm-white}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "0.82rem 1.1rem 0.82rem 1.35rem"
    height: "3.25rem"
  button-solid-hover:
    backgroundColor: "{colors.display-plum}"
    textColor: "{colors.warm-white}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.action-plum}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "0.82rem 1.1rem 0.82rem 1.35rem"
    height: "3.25rem"
  button-light:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.display-plum}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "0.82rem 1.1rem 0.82rem 1.35rem"
    height: "3.25rem"
  button-text:
    backgroundColor: "transparent"
    textColor: "{colors.action-plum}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0"
    height: "2.75rem"
  menu-toggle:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.display-plum}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.55rem 0.8rem"
    height: "2.9rem"
  navigation-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0"
  faq-disclosure:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.display-plum}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "0 3rem 2rem 0"
    height: "6rem"
  observation-annotation:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.display-plum}"
    typography: "{typography.annotation}"
    rounded: "{rounded.none}"
    padding: "0.2rem 0.45rem"
---

# Design System: Senses Montessori School

## Overview

**Creative North Star: "Ateliê de Descobertas"**

The system translates a prepared Montessori atelier into a warm editorial webpage. Cream paper, thesis-led plum typography, authentic documentary photography, graphite-fine rules, and sparse pencil-like notes make the experience feel observed and authored without becoming nostalgic craft theatre. The child is shown as capable, active, curious, and respected.

The atmosphere is calm, intelligent, affectionate, and ordered. Asymmetric compositions and large type create distinction, while generous negative space and normal document flow protect comprehension. Rose, eucalyptus, coral, and gold behave as purposeful fields or marks rather than decoration. Calls to action remain invitational and human.

The system rejects generic preschool cards, cartoon or rainbow styling, glossy luxury, clutter, aggressive marketing, fabricated evidence, excessive rounding, and motion without a functional purpose.

**Key Characteristics:**

- Warm tactile paper and flat editorial color fields.
- High-contrast plum serif theses paired with a quiet humanist sans.
- Authentic school photography used as proof, never as generic mood imagery.
- Sparse handwritten observation marks that remain subordinate to content.
- Asymmetric but ordered grids with long, calm vertical rhythm.
- Invitational actions, visible focus, and restrained state feedback.

## Colors

The palette begins with warm paper and deep plum, then uses soft rose, eucalyptus, coral, and gold to distinguish ideas while preserving calm.

### Primary

- **Senses Plum:** The preserved brand anchor for identity, quiet emphasis, and supporting text accents.
- **Action Plum:** The solid-action color and the main dark editorial field.
- **Thesis Plum:** The deepest plum for display type and high-authority statements.

### Secondary

- **Soft Rose:** The inherited brand field used for the footer and warm supporting areas.
- **Atelier Rose:** A lighter authored field for programs and identity panels.
- **Pencil Coral:** A pale annotation color on dark fields and in selected text states.
- **Coral Mark:** The stronger underline, focus, and response accent.

### Tertiary

- **Eucalyptus:** A garden-derived field for campus context.
- **Deep Eucalyptus:** The visit close, reserved for the final invitational action.
- **Observation Gold:** A rare hand-drawn underline or notation accent.

### Neutral

- **Warm Paper:** The page ground and dominant material.
- **Bright Paper:** The clean reading surface used between tinted sections.
- **Ink:** Primary body text.
- **Soft Ink:** Secondary explanations and supporting copy.
- **Warm White:** Text and controls on dark color fields.
- **Graphite Line:** Low-contrast dividers that organize without boxing content in.

### Named Rules

**The Paper First Rule.** Warm paper remains the dominant visual field; accent colors clarify chapters rather than compete for attention.

**The Plum Authority Rule.** Plum carries identity, theses, and actions. Do not introduce an unrelated saturated primary.

**The Accent Rarity Rule.** Coral and gold behave like editorial marks: brief, local, and purposeful.

## Typography

**Display Font:** Fraunces, with Georgia as the serif fallback.

**Body Font:** Avenir Next, Avenir, Segoe UI, and Arial as a system-first humanist sans stack.

**Annotation Font:** Segoe Print and Bradley Hand with a generic cursive fallback.

**Character:** Fraunces gives the school’s educational thesis warmth, intelligence, and an editorial voice. The sans stack keeps navigation, explanations, and actions direct. Handwritten type is an occasional observational whisper, never a third reading voice.

### Hierarchy

- **Display:** Regular-weight, tightly tracked fluid type for the single homepage thesis and similarly decisive statements.
- **Headline:** Regular-weight fluid serif for section theses, usually constrained to roughly 8–13 characters per line by the composition.
- **Title:** Regular-weight serif for program names, FAQ questions, and supporting editorial headings.
- **Body Large:** Humanist sans for leads and pivotal explanatory paragraphs, with a compact 1.5 line-height.
- **Body:** Humanist sans for the main reading layer, with a relaxed 1.65 line-height and restrained measure.
- **Label:** Bold, tracked sans for ages, context, footer headings, and small navigational metadata; uppercase only when the content is truly metadata.
- **Annotation:** Cursive system fallback for short, decorative observation phrases only.

### Named Rules

**The Thesis Leads Rule.** Serif type states the educational idea; sans-serif text explains it. Do not use display type as body decoration.

**The Handwriting Is Evidence Rule.** Annotations label a process or observation in a few words. They never carry essential instructions, facts, or long copy.

**The Self-Hosted Fraunces Rule.** The accepted tradeoff is two locally hosted WOFF2 subsets—Latin and Latin Extended—with `font-display: swap`. This removes an external font request and improves privacy and delivery control, at the cost of maintaining the files, license, caching, and character coverage in the repository. Keep the SIL OFL license beside the assets, retain Georgia fallback behavior, and add or regenerate subsets only when verified localized copy requires more glyphs.

## Layout

The page uses a centered editorial container capped at 90rem with fluid side gutters, plus a narrow 62rem reading container for centered statements. Section spacing is deliberately generous and fluid. Internal compositions use proportional two-column grids, thin rules, and asymmetric whitespace rather than a visible card scaffold.

Desktop keeps the hero as a text-and-image dialogue and lets photography own substantial space. At 64rem, navigation becomes a full-viewport overlay while the hero remains two-column; at 50rem the hero stacks in reading order. Other content grids collapse between 58rem and 48rem according to their reading needs. Below 40rem, the outer gutter tightens; compact layouts at 38–32rem stack program media, campus photography, hero actions, and footer groups.

Mobile preserves the sequence thesis → explanation → action → evidence. The hero becomes rectangular below 34rem and its three annotations become a compact rail. Never use absolute positioning for primary layout, and never allow `scrollWidth` to exceed `clientWidth`; verify 375, 430, 768, 1024, 1440, and 1728px widths.

**The Prepared Space Rule.** Whitespace is active structure. Add a line, field, or alignment only when it clarifies a relationship.

## Elevation & Depth

The system is flat by default. Depth comes from warm paper layering, tinted section fields, authentic image contrast, and occasional paper-offset photo shadows. There is no glass, glossy gradient, ambient card shadow, or floating surface vocabulary.

### Shadow Vocabulary

- **Photo Offset:** A broad, low-opacity plum-tinted shadow for documentary photographs that need separation from bright paper.
- **Hero Cutout:** A slightly tighter plum-tinted drop shadow follows the irregular hero mask rather than creating a rectangular card.

### Named Rules

**The Flat Atelier Rule.** Text and controls sit on the page; only photographic evidence may receive a soft physical offset.

## Shapes

Controls use compact, gently softened corners; they are not pills. Standard media may use a restrained media radius, but most photography stays rectangular or receives the controlled irregular atelier mask. Fine graphite rules organize lists and columns. Circles are reserved for authored diagram marks, never used as a generic decoration system.

**The Controlled Edge Rule.** Organic clipping belongs to the signature hero image. Elsewhere, use clean photographic rectangles and let composition provide character.

## Components

### Buttons

- **Shape:** Compact rounded rectangle with a 3.25rem minimum height and clear touch target.
- **Primary:** Action Plum on Warm White; use for the principal action in a decision area.
- **Outline:** Transparent with a current-color stroke; use beside a solid action when both choices need to remain visible.
- **Light:** Bright Paper on dark eucalyptus or plum fields.
- **Text:** Unboxed action with the same arrow language; use for secondary exploration inside content sections.
- **Hover / Focus:** Hover lifts boxed actions by 2px and moves the arrow slightly forward. Focus uses a clearly offset Coral Mark outline. Reduced motion removes transitional travel without removing the visual state.

### Cards / Containers

Programs are editorial articles separated by graphite rules, not floating cards. Their images use a consistent 4:3 crop and direct text stack; tablet layouts pair image and copy, while compact mobile returns to vertical reading. Identity and visit panels are flat color fields with square outer geometry.

### Navigation

The desktop header is sticky, paper-backed, and separated by one graphite rule. Links use small bold sans type with a coral underline drawn on hover. At 64rem and below, the only top-right control is the menu/close toggle; the navigation becomes a full-width rose overlay with large Fraunces links, balanced side padding, Escape dismissal, synchronized `aria-expanded`, and body-scroll locking.

### FAQ Disclosures

Use native `details` and `summary` elements. Questions are serif titles between graphite rules; the plus becomes a minus when open. The entire summary row is visibly clickable, keyboard operable, and at least 6rem high.

### Observation Annotations

Annotations are short, localized, non-essential labels with thin hand-drawn arrows or underlines. Desktop may place them around imagery; compact mobile turns them into an ordered rail without arrows. Decorative annotations stay hidden from assistive technology unless their text carries unique meaning elsewhere.

### Photography

Content photography must come from the authentic Senses repository inventory and render through Astro’s `Picture` component with AVIF and WebP output, explicit dimensions, useful localized alt text, responsive widths, and accurate `sizes`. The approved concept mock is compositional authority only: its generated people and classroom must never ship as school evidence. Preserve the provenance contract in `.impeccable/asset-manifest.md`; do not invent a photographer, capture date, or source URL where the repository records none.

### Interaction & Motion

Motion follows a **prepared atelier being gently uncovered**. The single authored focal entrance stages the hero thesis, coral underline, authentic photograph, and observation notes over 460-850ms with the system ease-out curve. Selected evidence groups use one-time, viewport-triggered paper, collage, sequence, quote, or paired reveals; they settle permanently after entry and are intentionally not applied to every section. Controls retain their faster 240ms feedback.

The implementation uses CSS opacity, transforms, and bounded `clip-path` transitions plus one small `IntersectionObserver`; it adds no motion dependency. Content is visible by default when scripting is unavailable. There is no scroll-sequence, parallax, scroll-jacking, autoplay, loop, or motion-dependent meaning. Under `prefers-reduced-motion: reduce`, the focal and reveal rules do not run, smooth scrolling is removed, and interactive state changes remain effectively immediate.

## Do's and Don'ts

### Do:

- **Do** begin with the child as a capable protagonist and use real school evidence to support the claim.
- **Do** preserve the original Senses logo exactly and let Plum and Soft Rose maintain brand continuity.
- **Do** keep Portuguese canonical at `/` and English at `/en/`, with shared structure and copy sourced from `src/i18n/content.ts`.
- **Do** use semantic headings, landmarks, native disclosures, visible focus, useful alt text, and motion-independent meaning.
- **Do** keep photography natural, documentary, correctly cropped, and traceable through the asset manifest.
- **Do** make calls to action invitational: learn, visit, speak, and discover.

### Don't:

- **Don't** use generic preschool cards, cartoon characters, rainbow palettes, noisy doodles, or stock-school imagery.
- **Don't** redraw the logo or present generated people, classrooms, portraits, or campus scenes as Senses evidence.
- **Don't** invent facts, credentials, testimonials, outcomes, ages, admissions promises, or educational claims.
- **Don't** add glass effects, glossy shadows, excessive rounding, pills, floating card walls, or gratuitous gradients.
- **Don't** add scroll-jacking, parallax, an animated hero sequence, or motion required to understand or operate the page.
- **Don't** duplicate localized page components, introduce external fonts, or add a client framework for presentational behavior.
