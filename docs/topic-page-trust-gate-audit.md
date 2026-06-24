# Topic Page Trust Gate Audit

Date: 2026-06-24

This is the Gate 2 first-pass audit for topic pages.

## Scope

This audit checks whether topic pages explain the shared confusion pattern instead of only listing claim cards.

Reviewed surfaces:

- `app/topics/page.tsx`
- `app/topics/[slug]/page.tsx`
- `app/topics/agenda-2030/page.tsx`
- `components/TopicClusterPage.tsx`
- `lib/topic-clusters.ts`

## Decision

No topic-page code change is required right now.

The current topic-page structure already supports the Trust Quality Gate pattern:

- topic pages have a description of the shared pattern;
- each topic page shows published checks separately from planned questions;
- each topic page includes a source-map section that explains the source / interpretation split;
- claim pages keep their own verdicts, so the topic page does not turn multiple claims into one broad conclusion;
- `/topics` explains why the site uses clusters instead of one giant page.

## Pages reviewed

### `agenda-2030`

Pass for first audit.

Why:

- explains the difference between UN documents, SDGs, other institutions and viral claims;
- has planned questions that prevent one large catch-all page;
- uses a dedicated route while still rendering through the shared topic component.

### `sky-climate`

Pass for first audit.

Why:

- clearly separates physical phenomena, existing weather-modification technologies and logical leaps;
- source map explains the difference between contrails, cloud seeding, geoengineering and spraying claims.

### `pop-culture-symbols`

Pass for first audit.

Why:

- explains that visual similarity, cultural inspiration and proven intent are different evidentiary levels;
- avoids presenting all symbol claims as having the same conclusion.

### `ai-sources`

Pass for first audit.

Why:

- explains that AI can help find directions but is not itself the source;
- supports the site's broader method around source-checking and LLM/AEO claims.

### `institutional-narratives`

Pass for first audit.

Why:

- explains the difference between official body, attribution and narrative;
- currently includes claims that share the pattern of institution-based interpretation rather than one shared verdict.

### `public-health`

Pass for first audit.

Why:

- clearly frames health claims as sensitive;
- separates official medical source, research, regulation, supplements/products and treatment conclusions;
- keeps the medical-advice boundary visible through cluster wording and claim-page trust layers.

### `digital-money`

Pass for first audit.

Why:

- separates standards, currency/assets and policy decisions;
- helps avoid the common leap from payment infrastructure to a single official currency plan.

### `consciousness-intelligence`

Pass for first audit.

Why:

- separates real documents or intelligence interest from broad spiritual/scientific proof;
- currently has a single-claim cluster and should not be expanded unless another strong source appears.

## Small documentation fix applied

`docs/trust-quality-gate.md` now includes `consciousness-intelligence` in the Gate 2 topic list.

## What was intentionally not changed

- No topic-page code.
- No claim content.
- No metadata changes.
- No route changes.
- No visual/layout changes.
- No domain or promotion decision.

## Next recommended work

Move to Gate 3: suggest and correction flow.

Before editing code, first audit:

- `app/suggest-claim/page.tsx`
- `app/corrections/page.tsx`
- public methodology/correction language

Only change the flow if the audit finds a clear user-trust problem.
