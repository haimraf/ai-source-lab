# Deployment Notes

## 2026-06-24 — git trigger after Vercel API check

Tried to use the available Vercel API tooling for a direct redeploy, but the API path available here does not perform a production redeploy directly.

The returned guidance was to use the Vercel CLI from the project root or rely on the Git integration by committing and pushing to the Git origin.

Decision for this project:

- use a small Git commit on `main` as the controlled production trigger;
- do not repeatedly try API redeploys from this workspace;
- after the trigger, verify the aliased production deployment separately from ready Preview deployments;
- production is considered current only if `ai-source-lab.vercel.app` points to the latest `main` commit.

This note also acts as the single clean Git trigger for the current `main` state after PR #52 and the docs sync notes.

## 2026-06-24 — production trigger after public-health batch

Triggered one clean `main` deployment after the public-health content batch was merged.

Included in this deployment attempt:

- PR #45 through PR #52 content and documentation work already merged to `main`;
- the `public-health` topic cluster;
- the COVID supplements claim page;
- `CLAIM_PUBLICATION_RULES.md`;
- `BRANDING.md`;
- sitemap test expectation fixes;
- the current 26-claim content state.

Purpose:

- use one explicit Git trigger instead of waiting for a later docs-only PR;
- avoid repeated no-op production triggers;
- keep `main` as the source of truth if Vercel is still rate-limited.

If Vercel is still blocked by `build-rate-limit`, this commit is harmless and documents the deployment attempt.

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