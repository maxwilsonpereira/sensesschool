# Senses discovery audit

Audit date: 18 August 2026. Scope: the live Portuguese and English site, its primary navigation, representative page source, indexed results, educational content, and available photography.

## Institution and positioning

Senses Montessori School is a bilingual school and nursery in Brooklin Paulista, São Paulo. Its stated mission is to educate for freedom and help each child develop their natural willingness to learn. The school presents three early-childhood environments: Bebê Cientista, Cientista Júnior (approximately 18 months to 3 years), and Cientista Sênior (3 to 6 years).

The clearest differentiators already present in the source material are:

- a faithful, child-centred Montessori approach;
- the “every child is a scientist” brand idea;
- bilingual experience beginning in nursery and developing into immersion;
- a prepared environment with child-sized furniture and concrete materials;
- mixed-age community, practical life, sensory work, and daily outdoor activity;
- a 600 m² garden in Brooklin;
- a campus in the former home of writer and bibliophile José Mindlin, where Brazil’s largest private library was once housed;
- detailed educational explanations and a substantial article archive.

## Current information architecture

Primary Portuguese routes found:

| Destination | Current route | Role |
| --- | --- | --- |
| Sobre a Senses | `/` | About, mission, manifesto, team |
| Educação / método | `/educacao/` | Montessori, neuroscience, bilingualism, green area, FAQ |
| Blog / e-book | `/blog/` | Educational articles and lead-capture forms |
| Programas | `/programas/` | Bebê Cientista, Cientista Júnior, Cientista Sênior |
| Nossa Casa | `/nossa-casa/` | History, classrooms, garden |
| Eventos | `/eventos/` | Events |
| Admissão | WhatsApp | Direct enquiry |

English equivalents found include `/en/home-en/`, `/en/education/`, `/en/programs/`, and `/en/campus/`. The existing language routes are inconsistent: Portuguese uses the root while English uses a redundant `home-en` slug.

The current header repeats some links in desktop/mobile markup and places “method” and “BLOG/EBOOK” in more than one hierarchy. The proposed navigation keeps every useful destination but simplifies the top level to Senses, Method, Programs, Campus, and Content, with visit/admission and language actions alongside it.

## Strong content and assets

- “Toda criança é um cientista” is memorable, distinctive, and directly supports the school’s inquiry-led philosophy.
- The historic-house story adds credibility and a meaningful relationship with education and culture.
- The prepared-environment descriptions explain how Montessori changes the physical space, not just the curriculum.
- The program content contains useful detail on practical life, language, mathematics, sensory development, mixed ages, and outdoor work.
- The education page answers real parent objections and questions; this is valuable both for conversion and future search authority.
- Existing photographs show real classrooms, children working with natural materials, and the garden. These are more trustworthy than stock imagery and have been retained for the prototype.
- The manifesto contains a warmer, more ownable voice than the rest of the current site and supports selective editorial use.

## UX and visual problems

- The homepage behaves primarily as an About page and does not quickly answer programs, age ranges, location, or next steps.
- The navigation hierarchy is duplicated and difficult to scan, especially around Method, Education, and Blog/E-book.
- Long text blocks lack progressive hierarchy, making strong educational content feel harder to access than it is.
- CTAs are inconsistent and the admission action leaves the site without enough context.
- The English copy contains translation and grammar problems, weakening the premium signal.
- Visual composition, typography, image crops, and interaction patterns feel dated and do not express the calm precision of a prepared Montessori environment.
- The copyright year is fixed at 2017, which makes the site look unmaintained.
- Several images are old or inconsistently processed; a future photo shoot should preserve authenticity while improving light, composition, and resolution.

## SEO and content opportunities

Representative source inspection found:

- the Portuguese homepage begins with an `h2` and has no clear `h1`;
- sampled pages had titles but no useful meta description or canonical link;
- hreflang existed for Portuguese and English but used `pt` rather than `pt-BR` and had no `x-default`;
- the homepage supplied only generic `WebSite` schema and omitted the school entity, address, telephone, and educational type;
- many images were exposed to crawlers simply as “Image” rather than with meaningful alt text;
- navigation and some education-page content appeared duplicated in the rendered document;
- the English route strategy creates avoidable complexity;
- local intent—Montessori school, bilingual early childhood education, Brooklin, São Paulo—was not brought together in the homepage’s main heading and introduction;
- the blog is a strong topical-authority asset but needs cleaner templates, article metadata, author/editorial context, internal links, and lead forms that do not overwhelm the reading experience.

The new homepage addresses these issues with one descriptive `h1`, semantic sections, visible factual answers, local NAP data, localized metadata, canonical and alternate links, `Preschool` JSON-LD, static HTML, a crawlable footer, responsive images, sitemap generation, and explicit search-crawler access.

`llms.txt` has been included as a concise optional index for agentic browsers. It is not treated as a ranking mechanism: Google Search stated in 2026 that it does not use the file for rankings, while Chrome’s agentic-auditing guidance still describes it as an optional site summary. The primary AI-discovery work remains high-quality HTML, explicit entity information, structured data, useful headings, and accessible crawling.

## Homepage narrative

1. Scroll-controlled assembly: hands-on learning and the prepared environment.
2. Senses proposition: education for freedom and the child as protagonist.
3. Montessori in practice: autonomy, environment, concrete materials, observation.
4. Three developmental programs.
5. Bilingualism as lived context rather than a detached lesson.
6. The historic Brooklin home and 600 m² garden.
7. A short manifesto moment for emotional connection.
8. Parent questions that reduce uncertainty.
9. A calm invitation to visit, with consistent local contact information.

## Migration and redirect strategy

Only `/` and `/en/` are rebuilt in this phase. Links to unmigrated routes intentionally preserve the live paths so the future migration can proceed page by page.

| Existing URL | Future action |
| --- | --- |
| `/` | Keep as Portuguese canonical homepage |
| `/en/home-en/` | 301 redirect to `/en/` after launch |
| `/educacao/` | Preserve when the education page is migrated |
| `/programas/` | Preserve when the programs page is migrated |
| `/nossa-casa/` | Preserve when the campus page is migrated |
| `/blog/` | Preserve index and every valuable article slug |
| `/eventos/` | Preserve or redirect to a verified replacement route |
| `/en/education/` | Preserve unless research supports a better English slug; then 301 |
| `/en/programs/` | Preserve |
| `/en/campus/` | Preserve |

Before the final domain cutover, export all indexed WordPress URLs and response codes, map each URL one-to-one, implement server-level 301s, compare old/new canonicals and hreflang, and monitor Search Console coverage and 404s. PDFs and downloadable resources should remain available at their current paths unless a verified replacement is provided.

## Design and architecture decisions

The direction is “quiet confidence”: warm mineral paper, forest green, muted clay, natural wood, soft garden tones, editorial serif headings, precise sans-serif body copy, generous rhythm, and restrained asymmetry. The original Senses logo is preserved.

Tailwind was intentionally omitted. Component-scoped CSS plus shared design tokens makes this bespoke editorial system easier to reason about without introducing a utility framework or scattered one-off values.

The implementation uses Astro 7, strict TypeScript, shared locale dictionaries, static pages, Astro image optimization, semantic HTML, native disclosure elements, and minimal inline JavaScript for mobile navigation and the scroll sequence. There is no framework island and no SPA runtime.
