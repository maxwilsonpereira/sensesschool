# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are prospective families in Sao Paulo, especially in and around Brooklin, who are choosing an early-childhood school. They need to understand whether Senses is aligned with their values, assess its educational credibility and environment, and decide whether to schedule a visit. Existing families and the broader parent community are secondary audiences.

## Product Purpose

Senses Montessori School is a bilingual Montessori school and nursery. It helps children develop curiosity, autonomy, concentration, responsibility, and confidence through a prepared environment, purposeful adult observation, meaningful materials, and daily bilingual experience. The website helps families make an informed, mutual-choice decision about joining the school community.

## Positioning

Senses is built around the idea that every child is a scientist: capable, curious, active, and deserving of respect. Its differentiating combination is faithful Montessori practice, developmental science, affection, and English lived in daily routines rather than treated as a separate subject. It serves early childhood in a historic Brooklin home with a substantial garden.

## Operating Context

Families explore the school before arranging a visit or admissions conversation. They evaluate the Montessori approach, bilingual experience, programs, campus, leadership, and the school’s relationship with families. Senses treats admission as a mutual choice and values family understanding of its educational philosophy.

## Capabilities and Constraints

- Portuguese is the canonical homepage at `/`; English is available at `/en/`.
- The current scope is the homepage only. Future-section links may continue to use the existing live routes.
- Verified programs are Bebê Cientista, Cientista Júnior, and Cientista Sênior.
- Facts, contacts, addresses, credentials, and educational claims must remain verified; no testimonials, rankings, outcomes, or admissions claims may be invented.
- The website is static Astro with no client-side application runtime.

## Brand Commitments

- Preserve the original Senses logo and the visual lineage of the existing school identity, including plum (`#7C3E66`) and soft rose (`#D2B0B1`) as brand anchors.
- The voice is intelligent, calm, warm, curious, scientifically grounded, and human. It avoids both generic luxury language and childish preschool language.
- The school must communicate science with humanity, autonomy with responsibility, and beauty with purpose.
- The interface should feel like a prepared Montessori environment: ordered, calm, warm, light-filled, and full of genuine opportunity without overstimulation.

## Evidence on Hand

- Verified bilingual Portuguese and English homepage copy in `src/i18n/content.ts`.
- Discovery, school facts, current-site audit, and route strategy in `docs/DISCOVERY-AUDIT.md`.
- Founder and director decision profile in `_LOCAL_FILES_MAX/_ABOUT_MARIANA.md` (local context only).
- Authentic school photography in `src/assets/school/` and original logo assets in `public/images/brand/`.
- Existing homepage implementation, including a scroll-sequence placeholder, reusable sections, metadata, structured data, and localization.

## Product Principles

1. Treat children as capable protagonists of their development.
2. Explain why the educational environment works, not merely what the school offers.
3. Protect attention: calm, legible, and intentional communication earns trust.
4. Invite family alignment and discovery rather than pushing an impersonal enrollment transaction.
5. Use evidence, real environments, and authentic school life to make quality tangible.

## Accessibility & Inclusion

The experience must be readable, keyboard operable, responsive, and usable with reduced motion. Motion cannot be required to understand the homepage, and visual polish cannot rely on color, hover, or animation alone.
