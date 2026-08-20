# Senses Montessori School — Agent Guide

This file is the durable working agreement for AI coding agents modifying this repository. Follow the user's current request first, then these project rules.

## Project purpose and current scope

- This is the website redesign for the real Senses Montessori School in Brooklin, São Paulo.
- The current implementation covers the homepage only.
- Portuguese is the default experience at `/`; English is available at `/en/`.
- Do not build or redesign additional pages unless the user explicitly asks for them. Existing links to programs, education, campus, blog, events, and admissions may point to future routes.
- The primary business goal is to help qualified families understand the school, trust its educational approach, and schedule a visit.

## Sources of truth

- Use `ROADMAP.md` to track delivery order, completed work, and the next approved page; it is a status tracker, not a source for school facts.
- Use `docs/DISCOVERY-AUDIT.md` for the existing-site audit, verified school information, route strategy, and migration priorities.
- Use `docs/HERO-ANIMATION-ASSETS.md` before changing or replacing the scroll-sequence animation.
- Use `src/i18n/content.ts` as the source of truth for shared school data and localized homepage copy.
- When facts may have changed, verify them against the live school website or another authoritative source. Never invent programs, ages, credentials, addresses, contact details, educational claims, or historical facts.
- Internal working notes whose filenames begin with `_` are context only and are intentionally excluded from Git. Do not make them public without an explicit request.

## Brand and experience principles

The site should feel like a thoughtfully prepared Montessori environment: calm, warm, intelligent, ordered, and full of purposeful discovery.

- Communicate the child as capable, curious, active, and respected.
- Balance scientific credibility with affection and humanity.
- Prefer natural light, whitespace, authentic school photography, wood, paper, garden tones, and restrained motion.
- Avoid generic preschool aesthetics, visual clutter, rainbow overload, cartoon styling, stock imagery, aggressive marketing, and animation without purpose.
- Preserve the original Senses logo. Do not redraw or reinterpret the brand mark unless explicitly requested.
- Keep calls to action invitational and human, such as learning about the school or scheduling a visit.

## Technical architecture

- The project uses Astro 7, TypeScript, static output, and Node 22.12 or newer. Node 24.19.0 is the tested Windows version.
- There is no backend, database, client-side router, React runtime, or external font dependency.
- Keep route files in `src/pages/` thin.
- Keep the shared document shell in `src/layouts/BaseLayout.astro`.
- Keep reusable UI in `src/components/` and homepage sections in `src/components/sections/`.
- Keep shared Portuguese and English content in `src/i18n/content.ts`; do not duplicate page components per language.
- Keep global design tokens and genuinely global rules in `src/styles/global.css`. Prefer component-scoped CSS for component behavior.
- Treat `public/` as pass-through static assets and `src/assets/` as assets processed by Astro.
- Never edit `dist/` or `.astro/`; rebuild generated output from source.

## Implementation standards

- Reuse existing components and content structures before creating new ones.
- Prefer semantic HTML, CSS, and native browser APIs over additional dependencies.
- Keep client JavaScript limited to interactions that genuinely require it.
- Do not add Tailwind, GSAP, a framework runtime, or another large dependency without a clear requirement and measurable benefit.
- Keep source code readable and direct. Avoid abstractions that have only one speculative use.
- Preserve existing user changes and do not overwrite unrelated work.

## CSS and responsive behavior

- Fix the rule that causes a layout problem; do not append increasingly specific overrides to hide it.
- Avoid duplicate selectors, unnecessary one-off values, and `!important` unless there is a documented architectural reason.
- Check inherited desktop declarations when implementing mobile and tablet variants.
- Keep interactive controls visibly interactive, including pointer cursors, hover/focus states, and adequate touch targets.
- The mobile navigation overlay must use the full available width with balanced side padding. Only the menu/close control belongs in the top-right corner.
- Verify changes at representative widths: 375, 430, 768, 1024, 1440, and 1728 pixels.
- Confirm that `scrollWidth` does not exceed `clientWidth` after layout changes.

## Localization

- Every public component change must work in both Portuguese and English.
- Portuguese remains canonical at `/`; English remains at `/en/`.
- Keep translated copy in the shared content dictionary rather than embedding language checks throughout presentation components.
- Preserve correct `lang`, canonical, `hreflang`, and `x-default` metadata.
- Do not create a language alternate for a route that has not been implemented.

## Accessibility

- Maintain one descriptive `h1` per page and a logical heading hierarchy.
- Use semantic landmarks, labels, accessible names, useful alt text, keyboard focus states, and sufficient contrast.
- Keep the mobile menu keyboard operable, synchronized with `aria-expanded`, dismissible with Escape, and safe for body scrolling.
- Respect `prefers-reduced-motion`. The hero must fall back to its final poster without requiring the long pinned animation.
- Do not communicate meaning through color, hover, or motion alone.

## SEO and public content

- Keep canonical URLs, reciprocal language alternates, Open Graph metadata, JSON-LD, robots directives, and the sitemap aligned.
- Use verified claims only in visible copy and structured data.
- Keep `llms.txt` supplementary; it does not replace crawlable pages, metadata, or structured data.
- Preserve static, server-rendered content and direct crawlable links.
- Do not add FAQ structured data unless current search guidance and page eligibility support it.

## Images

### General image optimization

- Prefer authentic images already available in `src/assets/school/`.
- Put photographs used by Astro components in `src/assets/`, import them, and let `astro:assets` generate the files served to visitors. Do not place ordinary content photographs in `public/` or link directly to their full-size source files.
- Use Astro's `<Picture>` component for content photographs so modern browsers receive AVIF and other browsers receive WebP. The current pattern is `formats={['avif']}`, `fallbackFormat="webp"`, and `quality="mid"`. Raise quality only when visual inspection shows a real need.
- Always provide useful `alt` text, an explicit `width`, responsive `widths`, and an accurate `sizes` expression. Choose generated widths from the image's actual rendered sizes; do not create large variants the layout cannot display.
- A typical responsive photograph should follow this pattern, with widths and sizes adjusted to its component:

```astro
<Picture
  src={photo}
  width={960}
  widths={[480, 720, 960]}
  sizes="(max-width: 768px) 100vw, 52vw"
  formats={['avif']}
  fallbackFormat="webp"
  quality="mid"
  alt="Useful description"
/>
```

- Optimize a photographic source once before adding it to the repository. Unless a layout demonstrably needs more resolution, limit the long edge to about 1920 px and save JPEG sources as progressive MozJPEG at approximately quality 82. Never upscale, and do not repeatedly recompress an already optimized file. Keep archival camera originals outside the repository.
- Keep stable assets that require direct public URLs in `public/`. The social card is `public/og.jpg` at 1200 × 630, progressive MozJPEG quality 88; keep `scripts/optimize-social-card.mjs` aligned with its filename and format. Use PNG only when transparency or lossless raster output is required.
- Preserve explicit image dimensions to reduce layout shift. When `<Picture>` adds a wrapper inside a fixed-height figure, ensure both `picture` and `img` fill the intended container.
- Do not recompress assets that are already below their relevant budget merely to change them. The current WebP logo and placeholder hero frames are already optimized.
- After adding or replacing images, run `npm run check` and `npm run build`, inspect the generated files in `dist/_astro/`, and verify both language routes. Confirm that AVIF is selected in a supporting browser, WebP remains available as fallback, no images are broken, and no horizontal overflow appears at the required breakpoints.

### Scroll-sequence hero

- The hero sequence is a reusable canvas component with a poster/no-JavaScript fallback, reversible scroll mapping, nearby-frame loading, and reduced-motion behavior.
- Do not replace the native sequence engine with a heavy animation library for a single linear interaction.
- Before replacing placeholder frames, follow the filename, dimension, framing, and compression contract in `docs/HERO-ANIMATION-ASSETS.md`.

## Validation before handoff

Use Node 24.19.0 on Windows. From Cmder, the normal local workflow is:

```cmd
nvm use 24.19.0
npm install
npm run dev
```

The local routes are `http://localhost:4321/` and `http://localhost:4321/en/`. Press `Ctrl+C` to stop the server.

For any public-page or shared-component change:

1. Run `npm run check`.
2. Run `npm run build`.
3. Test the affected Portuguese and English routes.
4. Test relevant mobile, tablet, and desktop breakpoints.
5. Check keyboard behavior, focus visibility, reduced motion, horizontal overflow, and browser console errors when relevant.

If Cmder resolves an older Node version despite `nvm use`, start Astro with the NVM-managed executable directly:

```cmd
"%APPDATA%\nvm\v24.19.0\node.exe" ".\node_modules\astro\bin\astro.mjs" dev
```

## Git and deployment boundaries

- Do not commit, push, create repositories, change remotes, publish, deploy, configure domains, or modify hosting access unless the user explicitly asks for that action.
- Never commit secrets, credentials, local research notes, generated build directories, or temporary screenshots/logs.
- Keep commits focused and describe the user-visible outcome.
- GitHub Actions are optional and should be added only when continuous deployment through GitHub is the chosen hosting workflow.

## Definition of done

A change is complete only when it is consistent with the Senses brand, shared across both languages where applicable, responsive, accessible, technically validated, and documented when it changes an established project contract.
