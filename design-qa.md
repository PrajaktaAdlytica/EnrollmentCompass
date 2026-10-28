# EnrollmentCompass visual and interaction QA

Final result: **passed for the local concept-preview scope**. This is not an accessibility conformance certification, security audit, or production launch approval.

Date: October 28, 2026.

## Reference and comparison method

Selected direction: option 3, the light enchanted conservatory.

Reference: `/Users/prajaktagaikwad/.codex/generated_images/01a181f3-8f05-7fc3-800c-391eb49f1514/exec-633498b5-89f9-4579-beeb-a7d5069bee90.png` (1015 × 1550).

Real browser capture: `screenshots/home-desktop.png` (1440-pixel viewport, full page). The original reference and implementation were inspected together in the same image-view input. For a focused comparison, the first four implementation chapters were cropped from the browser capture and normalized to the reference width in `screenshots/core-chapters-comparison.png`. No browser capture is an AI-generated UI image.

The implementation deliberately adds the remaining requested business, workbench, pilot, FAQ, and full footer content after the four reference chapters. The taller final page is therefore not a full-page pixel clone.

## Captures

- `hero-desktop.png`: desktop home hero, 1440 × 1000 viewport.
- `home-desktop.png`: complete desktop page, 1440-pixel width.
- `home-mobile.png`: complete mobile page, 390 × 844 viewport.
- `home-tablet.png`: tablet home hero, 768 × 1024 viewport.
- `core-chapters-comparison.png`: normalized reference-comparison crop.
- `workbench-desktop.png`: synthetic ten-record queue.
- `record-desktop.png`: opened GB-016 record, evidence and review actions.
- `applicant-mobile.png`: mobile applicant flow.
- `report-desktop.png`: illustrative fixture counts.
- `product-proof-desktop.png` and `product-proof-mobile.png`: module page.
- `inquiry-confirmation.png`: local-only form confirmation.

Captures use browser CSS viewport sizes. Full-page captures were taken with motion disabled to expose all chapter content; motion was then re-enabled and scroll reveals checked separately. Native capture density is 1 output pixel per CSS pixel in the 1440 desktop capture.

## Visual review

- **Typography:** Cormorant Garamond display type reproduces the editorial character; DM Sans keeps controls and evidence readable. Desktop headline retains the two-line structure. Mobile uses three intentional lines.
- **Layout:** hero copy left, illuminated California map and floating record cards right; pale journey/source chapter; five botanical module alcoves; contrasting forest-green consent chapter. Native UI overlays remain interactive.
- **Spacing and surfaces:** checked consistent margins, card padding, modest corner radii, subtle borders, hover feedback, navigation, and expanded footer.
- **Assets:** hero and module subjects match the selected direction; text is live UI rather than baked into art. The journey uses native icons and interactive arches over the generated botanical setting. Phosphor icons are consistent across navigation and product screens.
- **Palette:** ivory, sage, dark forest green, and restrained brass. Semantic blocked/review states include text, not color alone.
- **Viewport resilience:** inspected desktop 1440, tablet 768, and mobile 390. Measured document scroll width equals viewport width on tablet home and mobile product page. The intentionally scrollable module gallery and demo tables remain contained.
- **Content:** concept labels, fictional records, agency boundaries, proposed pricing, and unknown outcomes remain explicit. Official resources are external links, not claimed integrations.

## Findings resolved

1. P2 — Hero disclosure and demo label could sit over foliage. Added light backing and stronger text contrast.
2. P2 — Tablet hero artwork reduced headline contrast. Added a responsive light scrim and recaptured.
3. P2 — Journey and product-page foliage crossed text. Added controlled background attenuation; rechecked product hero at full viewport.
4. P2 — Module arrows were visible where no horizontal movement existed. Hide controls when all cards fit; disable the relevant edge control otherwise.
5. P2 — Demo disclosure could scroll away. Made the demo boundary bar sticky below the responsive site header.
6. P3 — Unnecessary font subsets increased the asset bundle. Restricted self-hosted fonts to Latin, which includes the supplied Spanish text.

## Behavior verified in the browser

- Mobile menu and nested products menu open correctly; product navigation reaches the selected module.
- Work queue has 10 fictional records, distributed 4 pending / 3 blocked / 2 completed / 1 rejected. Blocked filter shows three data rows; GB-016 search shows one.
- Opened GB-016 shows fictional source note, dated interview, Spanish draft, owner, and unresolved checklist item.
- Rejection is disabled until a reason is selected, then displays reason-specific feedback.
- Approval explicitly reports that nothing was sent.
- Reset restores the fictional review state. Withdrawing consent disables both draft review actions and applicant callback action.
- English/Spanish applicant switching, sample checklist, and local human-help confirmation work.
- Illustrative report totals match the queue fixture. No real impact is shown.
- Required email validation blocks an empty inquiry. A completed synthetic example displays “Nothing was sent or saved.”
- Mobile module navigation changes the gallery offset and keeps horizontal overflow inside the gallery.
- Motion toggle works. Scroll reveals render their content; sampled browser error/warning logs are empty.

## Build verification and remaining scope

`npm run build` passed. `npm run test:sites` passed all four hosting-wrapper checks. The bundle is about 519 kB minified before gzip; Vite reports an advisory chunk-size warning. This does not block the concept preview; route-level code splitting remains a production optimization.

No unresolved P0/P1/P2 issue was found within the reviewed preview surfaces. A complete assistive-technology audit, real-device performance measurements, independent Spanish review, official-rule freshness review before use, and production backend testing remain outside this local preview's QA scope.

## Footer revision — warm limewash wall

Replaced the original plain footer with an original generated limewash/plaster background, editorial closing message, brass compass, pilot-scope column, numbered navigation groups, official-resources panel, oversized wordmark, and legal/concept disclosures. Source art is `public/assets/footer-limewash.png`; the site serves its WebP version. Added the real Cormorant italic face for the closing phrase.

Reviewed at 1440 × 1100 and 390 × 844. Mobile document width equals 390 pixels without page overflow. Confirmed the back-to-top button returns scroll position to zero. Links remain actual application routes. Captures: `screenshots/footer-desktop.png`, `screenshots/footer-mobile-top.png`, and `screenshots/footer-mobile-bottom.png`. The static layout captures use the existing motion-off control; reduced-motion CSS also disables the decorative compass hover transition. This revision passed the scoped visual check.

## Cinematic scroll revision

Added a shared `src/Motion.jsx` controller with one Lenis/GSAP ticker and route-scoped cleanup. Includes masked headline entrances, layered hero cards, hero/image parallax, staggered card grids, alternating editorial entrances, perspective workbench reveal, progressive consent diagram, CTA entrances, footer compass rotation and wordmark reveal, and a page-reading progress line. Long editorial sidebars can pin when they fit the desktop viewport.

At desktop widths ≥1100 and heights ≥760, the home journey fills the viewport below the header and pins for 850 pixels of scroll. Its four tabs track scroll progress and reverse naturally. At a tested scroll position of 1200, the journey remained at 105 pixels from the viewport top and displayed stage 3. At later scroll it advanced to stage 4 and released normally.

Verified motion-off removes all pin spacers and leaves no hidden headings. On 390-pixel mobile, pin count is zero and document width is 390 pixels. Verified mobile product navigation and completed headline/card reveal with no console errors or warnings. Forms and demo task controls remain stationary. Reduced-motion preference disables the animation controller; the header switch provides an explicit override. Images/fonts trigger layout refreshes, and route changes dispose the previous controller.

Capture: `screenshots/cinematic-journey.png`. Motion is enabled in the final preview. These checks establish frontend behavior, not a full device-performance or assistive-technology audit.

## Five-module bento revision

Replaced the single panorama/carousel with five independent linked cards. Desktop uses a 12-column grid: 3/3/6 spans in row one, then 6/6 spans in row two. Benefits Proof is the featured proposed pilot candidate. Each module has a separate botanical artwork crop, plain-language job, brief explanation, and product link. The shared component updates both home and product overview. GSAP targets the new grid for staggered entrances.

Verified exactly two row positions at 1440px and 775px; no page overflow at 775px. At 390px, cards stack and measured document width remains 390px. Narrow artwork slots use height-fitted crops to avoid unfilled backgrounds. Confirmed Benefits Desk navigates to its actual product page. Production build passed. Captures: `screenshots/modules-bento-desktop.png` and `screenshots/modules-bento-mobile.png`. The earlier horizontal-gallery QA notes describe the superseded version.

## Pre-GitHub quick QA — 2026-10-28
- Browser spot checks: 390px home, 775px two-row bento, 1440px product page, 390px inquiry page. No document horizontal overflow in checked views; no broken images on checked home/product views.
- Intro previously verified: 8s local video, automatic transition to hero at desktop header offset82, mobile skip offset66, Escape menu close, pause, mobile text spacing and reload scroll restoration fixed.
- Production build passes; four existing worker/packaging tests pass. Vite notes a 532kB JS bundle (non-blocking size warning).
- Added static Apache/LiteSpeed SPA routing for Hostinger. Live Hostinger/DNS/SSL not tested; account connection remains a user step.
- Forms/auth remain explicitly demonstrational. This is a quick responsive spot check, not a complete accessibility or cross-browser audit.
