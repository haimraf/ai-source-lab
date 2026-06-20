# Deployment Notes

## 2026-06-20

Triggered a clean production rebuild after Vercel previously stayed on commit `6093077291ecad76f88fdf7adceb5eefc646c8a1` while `main` had the internal text-link updates.

This note exists only to create a harmless GitHub change and let the Vercel Git integration deploy the current `main` state.

## 2026-06-20 — claim template upgrade

Triggered a final clean production rebuild after the claim-page template cleanup and the new 15-minute city claim page were committed.

Included in this rebuild:

- shared claim header component
- fixed reading-time placement
- duplicate breadcrumb cleanup
- AI/BCI and Blue Beam template migration
- legacy claim metadata normalization
- 15-minute city claim page
- 15-minute city internal illustrations
- reactions roadmap note
