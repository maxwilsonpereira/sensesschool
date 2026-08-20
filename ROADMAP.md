# Senses Montessori School — Website Roadmap

Last updated: 20 August 2026

This file tracks delivery order and completion status. It does not replace the project rules in `AGENTS.md`, product direction in `PRODUCT.md`, visual system in `DESIGN.md`, or verified research in `docs/DISCOVERY-AUDIT.md`.

## Status key

- [x] Implemented in source
- [ ] Not started or not yet verified

## Working sequence for every page

Each page should move through this sequence before it is marked complete:

- [ ] Confirm the route, purpose, audience questions, and factual source material.
- [ ] Create or update the page-specific brief in `.impeccable/surfaces/`.
- [ ] Prepare Portuguese and English content together when both routes are supported.
- [ ] Design within the established Senses system without merely copying the homepage layout.
- [ ] Implement semantic, static HTML with one descriptive `h1`.
- [ ] Add unique title, description, canonical URL, reciprocal `hreflang`, Open Graph metadata, and appropriate verified JSON-LD.
- [ ] Add useful internal links and authentic, optimized imagery with descriptive alt text.
- [ ] Validate accessibility, keyboard use, focus visibility, reduced motion, responsive behavior, performance, and browser-console health.
- [ ] Run `npm run check` and `npm run build`.
- [ ] Test at 375, 430, 768, 1024, 1440, and 1728 pixels with no horizontal overflow.
- [ ] Update the sitemap, `robots.txt`, `llms.txt`, navigation, and route documentation where applicable.

## Phase 1 — Foundation and homepage

- [x] Complete existing-site discovery and route audit.
- [x] Establish product positioning and durable project rules.
- [x] Establish the Senses visual system and authentic asset library.
- [x] Build the Portuguese homepage at `/`.
- [x] Build the English homepage at `/en/`.
- [x] Add localized metadata, canonical URLs, reciprocal language alternates, Open Graph metadata, and school JSON-LD.
- [x] Add sitemap generation, crawler access, and a supplementary `llms.txt`.
- [x] Optimize content photography through Astro and provide AVIF/WebP output.
- [x] Add restrained entrance motion with reduced-motion support.
- [ ] Revalidate both homepages immediately before production launch.

## Phase 2 — Education and Montessori

Priority: highest. This page answers major family questions and has the strongest opportunity to build educational search authority.

- [ ] Build `/educacao/` in Portuguese.
- [ ] Build `/en/education/` in English.
- [ ] Explain Montessori practice, the prepared environment, the educator’s role, autonomy with responsibility, bilingualism, neuroscience, nature, and family questions using verified material.
- [ ] Decide which homepage explanations remain summaries and which link to deeper page sections.
- [ ] Preserve useful FAQ content in visible HTML; add FAQ structured data only if current eligibility guidance supports it.
- [ ] Add contextual links to Programs, Campus, Journal, and scheduling a visit.

## Phase 3 — Programs

Priority: high. Families need clear age ranges, daily experiences, developmental aims, and next steps.

- [ ] Build `/programas/` in Portuguese.
- [ ] Build `/en/programs/` in English.
- [ ] Create verified sections for Bebê Cientista, Cientista Júnior, and Cientista Sênior.
- [ ] Confirm every age range, routine, schedule, educator claim, and admissions detail before publication.
- [ ] Use authentic program-specific photographs where available.
- [ ] Link each program naturally to the educational approach, campus, questions, and visit action.

## Phase 4 — Campus / Nossa Casa

Priority: high. The historic house and garden are distinctive trust and local-search assets.

- [ ] Build `/nossa-casa/` in Portuguese.
- [ ] Build `/en/campus/` in English.
- [ ] Present the verified José Mindlin house history, prepared classrooms, natural light, garden, outdoor experiences, and Brooklin location.
- [ ] Verify the 600 m² garden claim and all historical wording before publication.
- [ ] Use authentic campus photography with accurate captions and alt text.
- [ ] Include clear local contact information and an invitational visit action.

## Phase 5 — Educational journal

Priority: medium to high. The existing article archive can become the site’s long-term topical-authority engine.

- [ ] Export the existing blog index, article URLs, titles, publication dates, authors, media, PDFs, and response codes.
- [ ] Decide the verified language strategy for the journal before creating English alternates.
- [ ] Build the Portuguese journal index at `/blog/`.
- [ ] Design a calm article template optimized for reading and internal discovery.
- [ ] Preserve valuable existing article slugs whenever possible.
- [ ] Add unique article metadata, canonical URLs, author/editorial context, dates, social cards, and appropriate Article JSON-LD.
- [ ] Connect articles to relevant education, program, campus, and visit pages without intrusive lead capture.
- [ ] Migrate and validate priority articles in an agreed batch order.

## Phase 6 — Events and admissions journey

Priority: decide after the four core destinations are complete.

- [ ] Audit `/eventos/` and decide whether to preserve it, redesign it, or redirect it to a verified replacement.
- [ ] Decide whether admissions remains a direct WhatsApp journey or needs a dedicated informational page.
- [ ] If an admissions page is approved, explain the verified process, family-school fit, visit expectations, and contact options without inventing requirements or availability.
- [ ] Add Event structured data only for real, current, publicly visible events with complete verified details.

## Phase 7 — Site-wide integration

- [ ] Replace every future-route placeholder with a working destination.
- [ ] Remove or correct any link to an unimplemented page.
- [ ] Synchronize header, footer, sitemap, `llms.txt`, canonical URLs, and language alternates with the final route inventory.
- [ ] Add breadcrumbs where they materially help navigation and page hierarchy.
- [ ] Confirm consistent school name, address, phone, email, and WhatsApp information everywhere.
- [ ] Validate all structured data against visible page content.
- [ ] Confirm that every indexable page is reachable through crawlable internal links.
- [ ] Create a useful branded 404 page.
- [ ] Audit accessibility, performance, responsive behavior, SEO, and implementation integrity across the complete site.

## Phase 8 — Migration and production launch

- [ ] Confirm the final production domain and update Astro’s `site` configuration.
- [ ] Export all indexed legacy WordPress URLs, PDFs, media URLs, and response codes.
- [ ] Create a one-to-one redirect map, including `/en/home-en/` to `/en/`.
- [ ] Implement server-level permanent redirects through the chosen host.
- [ ] Check old and new canonicals, reciprocal language alternates, sitemap URLs, and redirect chains.
- [ ] Run a production crawl for broken links, unexpected `noindex`, duplicate metadata, orphan pages, and 404s.
- [ ] Verify the production property in Google Search Console.
- [ ] Submit the production sitemap and inspect priority URLs.
- [ ] Verify or update the school’s Google Business Profile and ensure local information matches the website.
- [ ] Confirm analytics and consent requirements before adding any tracking.
- [ ] Test the final site on real mobile and desktop browsers.
- [ ] Launch only after the final accessibility, performance, SEO, content, and visual review passes.

## Phase 9 — Post-launch growth

- [ ] Monitor Search Console indexing, queries, Core Web Vitals, crawl errors, redirects, and language targeting.
- [ ] Monitor real enquiries and refine calls to action using evidence.
- [ ] Publish useful, expert-reviewed educational content on a sustainable schedule.
- [ ] Keep dates, staff information, program details, contact information, events, and policies current.
- [ ] Earn relevant local and educational citations through genuine partnerships and useful resources.
- [ ] Review the roadmap after each completed page and mark only verified work as complete.

## Next recommended task

Build the Education and Montessori page pair:

- `/educacao/`
- `/en/education/`

Start by verifying and structuring the source content, then create the corresponding Impeccable surface brief before implementation.
