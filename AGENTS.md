# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Footer direction
The user requested a distinctive footer with a real wall-like texture. Use the generated warm ivory limewash asset, tactile conservatory styling, brass compass, editorial closing message, grouped navigation, and oversized wordmark. Preserve clear concept and agency-boundary disclosures.

## Motion direction
The user requested more cinematic Lenis/GSAP choreography throughout the site. Preserve staged hero reveals, desktop scroll-driven journey, layered image/card motion, and animated footer. Keep the working demo controls stable; retain mobile non-pinned behavior and the motion-off/reduced-motion fallback. Use the shared Motion controller rather than adding competing smooth-scroll instances.

## Module gallery revision
The user requested separate cards for all five modules in a two-row bento grid. Use three cards in row one (Desk, Review, wider featured Proof) and two wide cards in row two (Signal, Report). Preserve this two-row composition at 775px and above; stack cards on small phones. Each card has its own botanical artwork crop, description, and real product route. This replaces the old horizontal panorama gallery.
