# Content sync — Lock Step + HAARP

Date: 2026-06-23

This note records the content-state sync after the Lock Step work landed on `main` and the HAARP claim was added in the same reviewable PR.

## Current content count

- Before Lock Step: 19 published claim checks.
- After Lock Step on `main`: 20 published claim checks.
- After this PR: 21 claim checks ready for publication.
- Short-term target remains: 24 claim checks without architecture changes.

## What this PR does

- Adds `haarp-earthquakes` as a narrow source-check claim.
- Registers the claim in `content/claims/index.ts`.
- Adds the claim Open Graph route.
- Updates `public/sitemap.xml` for the new claim path.
- Syncs README claim count and claim list.

## Editorial boundary

The HAARP page keeps the claim narrow:

> Does HAARP have evidence-backed capability to cause earthquakes?

The answer separates:

1. the real facility;
2. the viral earthquake claim;
3. known human-induced seismicity mechanisms;
4. the missing causal link between HAARP activity and a specific earthquake.

## Not included

- No schema changes.
- No runtime changes.
- No UI redesign.
- No dashboard/CMS work.
- No broad rewrite of existing claims.

## Next likely content step

After this PR, the next backlog candidates are:

1. `mRNA ו-DNA` — only with careful official medical sources and no medical advice.
2. `נחיתה על הירח` — high search potential, but needs tight boundaries.
3. `ביל גייטס והורדת אוכלוסייה` — quote/context check around the TED 2010 source.

Do not start any of these until this PR passes CI and the Vercel preview is stable.
