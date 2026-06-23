
# Deployment Notes

## 2026-06-23 — production deploy after Vercel build-rate-limit

PR #40 was merged to `main`, but production did not deploy immediately because Vercel failed the production status with `build-rate-limit`.

The confusing part: preview deployments for the PR branch were ready, but production was still blocked.

Resolution:

* confirmed the PR was merged to `main`;
* confirmed GitHub CI was green;
* confirmed the visible ready deployments were previews, not production;
* triggered one clean deployment from `main` after the Vercel limit cleared;
* production deployed successfully.

Operational guardrail:

* Do not use repeated no-op commits as the default debugging path.
* Read GitHub CI and Vercel production status separately.
* A ready Preview does not mean Production deployed.
* If production is blocked by `build-rate-limit`, wait or use one clean `main` trigger only.



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

## 2026-06-20 — production deploy retry

One final production deploy trigger after the claim template upgrade.

No product code changed in this commit.

## 2026-06-20 — second production deploy retry

Another clean production deploy trigger for the same prepared changes.

No product code changed in this commit.
