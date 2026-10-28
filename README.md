# EnrollmentCompass — option 3

A runnable, local concept website and synthetic product demo built from the selected light conservatory visual direction. The company name is EnrollmentCompass; older Benefits Harbor references have been replaced.

## Start

```sh
npm install
npm run dev -- --host 0.0.0.0 --port 4173 --strictPort
```

Open http://localhost:4173. `npm run build` creates the production bundle. `npm run test:sites` checks the supplied hosting wrapper. The development server must remain running for the local link to work.

## Included

- Compass identity and favicon; forest green, ivory, sage, and brass palette.
- Self-hosted Cormorant Garamond and DM Sans typography.
- Original generated conservatory, California-map, journey, and five-module botanical artwork, with optimized WebP delivery.
- Lenis scrolling, GSAP hero and section reveals, desktop parallax, and a horizontal module gallery where the cards overflow. Motion can be disabled and respects the system reduced-motion preference.
- Home, five individual product pages, product overview, platform, capabilities, four buyer solutions, company, pilot/pricing, contact/demo inquiry, resources, trust, consent, data lifecycle, source governance, accessibility, preview privacy/terms, and sign-in preview.
- Ten internally consistent fictional records; filtering and search; detail/timeline/consent views; source pane; draft approval and reason-based rejection; applicant checklist and callback preview; EN/ES sample flow; withdrawal/reset; illustrative report and CSV export; fictional pilot pipeline.
- Browser captures in `screenshots/` and the scoped verification report in `design-qa.md`.

## Scope and boundaries

This is a concept preview, not an operating enrollment product. All households, owners, appointments, counts, and organization pipeline stages are fictional. California CalFresh and English/Spanish are provisional demo choices. Screening never determines eligibility.

Forms validate locally and do not send entries. The demo has no authentication service, applicant database, uploads, messaging, payment collection, analytics service, or state-portal integration. State lives in memory and resets on reload. The demo begins with an already-consented fictional record; this is not a live consent capture. The session-clear control resets the fixture, not agency records. Spanish sample copy requires independent review; the entire marketing site is not fully localized.

The proposed $2,500 eight-week, up-to-100-person cohort price is a validation hypothesis. No funded contract, demand, customers, measured impact, trademark clearance, security certification, or government affiliation is asserted.

## Main implementation files

- `src/App.jsx`: routing, site navigation, demo state, motion orchestration.
- `src/Home.jsx`: visual storytelling and interactive home sections.
- `src/Pages.jsx`: product, buyer, resource, pilot, and inquiry pages.
- `src/Demo.jsx`: synthetic queue, record, applicant, report, and pipeline experiences.
- `src/data.js`: module copy, sources, fixture records, scorecard, and supporting page copy.
- `src/styles.css`: visual identity, layout, responsive and reduced-motion behavior.
- `public/assets/`: original PNG artwork and optimized WebP versions.

## Before a real pilot

Secure a signed funded agreement, named program owner and navigator lead, consent/data-sharing review, source-maintenance owner, authorized communication channels, and an agreed retention schedule. Recheck official state/county sources and both languages. Complete independent accessibility, privacy, security, and nondiscrimination reviews. Connect and test approved backend services only within that scope. Deployment and a custom domain are not part of this local preview.
