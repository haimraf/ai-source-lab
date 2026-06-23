# Content sync — Lock Step + HAARP

Date: 2026-06-23

This note records the content-state sync after the Lock Step work landed on `main` and the HAARP claim was added in the same reviewable PR.

## Current content count

- Before Lock Step: 19 published claim checks.
- After Lock Step on `main`: 20 published claim checks.
- After HAARP PR: 21 claim checks ready for publication.
- After Bill Gates quote PR: 22 claim checks ready for publication.
- Short-term target remains: 24 claim checks without architecture changes.

## What this batch does

- Adds `haarp-earthquakes` as a narrow source-check claim.
- Adds `bill-gates-vaccines-population-reduction` as a narrow quote/context claim.
- Registers both claims in `content/claims/index.ts`.
- Adds dedicated Open Graph routes.
- Updates `public/sitemap.xml` for the new claim paths.
- Syncs README claim count and claim list.

## Deployment note

GitHub `main` is the source of truth for accepted work.

Because Vercel preview / production deployments can hit rate limits during heavy content work, this project should not trigger a production deploy after every small PR.

Recommended flow while rate-limited:

1. Keep working through small PRs.
2. Merge to `main` only after GitHub CI is green.
3. Allow Vercel preview to be stale or skipped when rate-limited.
4. Do one intentional production trigger after a small batch of merged PRs.
5. After that production trigger, verify `/sitemap.xml`, `/llms.txt`, the new claim pages and Open Graph routes.

Do not treat a stale Vercel preview as a code failure when GitHub CI is green and the PR is content/docs only.

## Production trigger attempt

A production deployment trigger was attempted after the small content batch that included:

- PR #45 — HAARP earthquakes claim.
- PR #46 — deferred Vercel trigger documentation.
- PR #47 — Bill Gates population quote claim.

This commit intentionally updates documentation on `main` so the Vercel Git integration can deploy the current `main` state once the build-rate limit allows it.

## Editorial boundary

The HAARP page keeps the claim narrow:

> Does HAARP have evidence-backed capability to cause earthquakes?

The Bill Gates page keeps the claim narrow:

> Did the TED 2010 quote say vaccines are meant to kill, sterilize or reduce existing population?

The answer separates:

1. the real source;
2. the viral claim;
3. the original context;
4. the missing causal or textual link behind the viral interpretation.

## Not included

- No schema changes.
- No runtime changes.
- No UI redesign.
- No dashboard/CMS work.
- No broad rewrite of existing claims.

## Next likely content step

After this batch reaches production, the next safe step is not another broad feature. Keep momentum with one narrow content PR.

Recommended next backlog candidates:

1. `mRNA ו-DNA` — only with careful official medical sources and no medical advice.
2. `נחיתה על הירח` — high search potential, but needs tight boundaries.
3. `Bill Gates / TED context follow-up` — only if the current page needs wording polish after review.

Do not start the next content batch until the production trigger status is known.
