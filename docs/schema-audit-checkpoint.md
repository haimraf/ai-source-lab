# Schema audit checkpoint

Date: 2026-06-23

This checkpoint documents a deliberate control step before scaling the archive beyond the current claim batch.

## Result of this checkpoint

Decision: do not change the content schema now.

The current schema and body renderer already support the stronger flagship-page structure through existing blocks:

- `answer-box`
- `verdict-grid`
- `comparison-list`
- `method-note`
- `evidence-list`
- `logic-chain`
- `faq`
- `sources`
- `copy-share`

The repeated structure should become an editorial pattern first, not a schema migration.

A reusable pattern is now documented in `docs/editorial-patterns.md`.

## Why this exists

The Moon landing page was intended to be a stronger editorial page while still using the existing claim schema and existing body blocks.

That worked.

The follow-up pages also used the same structure successfully:

- `mrna-vaccines-dna-genome`
- `iso-20022-global-currency`

That means the current schema is not the bottleneck yet.

## Current schema decision

Keep the schema as-is until at least one of these becomes true:

1. 3-5 more pages repeat the same manual structure and it becomes hard to maintain.
2. The UI needs to display a field automatically across many pages.
3. The content team wants filtering/reporting by claim type, source strength or viral pattern.
4. The same editorial ideas are copied manually so often that mistakes become likely.

## Taxonomy decision: public health

Decision: add a dedicated `public-health` topic cluster without changing the claim schema.

Why now:

- `mrna-vaccines-dna-genome` already created a health-specific official-source page.
- `covid-supplements-vitamin-d-zinc-cure` adds a second health-specific page with a different public-health pattern: supplement / research / regulatory claims.
- The previous temporary rule explicitly said to revisit health placement before creating more health pages.
- The dedicated cluster keeps health claims out of broad `institutional-narratives` when the claim is mainly about medical/public-health evidence.

Chosen slug:

- `public-health`

Rejected / deferred names:

- `health-technology` — too narrow for supplements, official guidance and treatment-claim checks.
- `health-public-sources` — accurate but too internal and less readable as a public topic.

Current placement rule:

- use `public-health` when the claim is mainly about medical evidence, public-health guidance, supplements, treatment claims, vaccine mechanisms, health-product claims or regulatory health wording;
- keep `institutional-narratives` for claims whose main question is institutional power, treaty interpretation, sovereignty, quote attribution or broad public narratives, even when health institutions are involved;
- keep health pages narrow and include a clear “not medical advice” boundary;
- do not turn the site into a medical advice product.

## Questions answered

### 1. Which existing blocks are enough?

Enough for now:

- `answer-box`
- `verdict-grid`
- `comparison-list`
- `evidence-list`
- `method-note`
- `logic-chain`
- `faq`
- `sources`
- `copy-share`

Optional / situational:

- `source-levels`
- `bonus-note`
- `gallery`
- `paragraph-section`

### 2. Which editorial ideas repeat?

Repeated across flagship pages:

- real kernel;
- viral claim;
- what was checked;
- what was not found;
- logical jump;
- fair framing / legitimate criticism;
- what evidence would change the conclusion.

These should be treated as editorial pattern items for now.

### 3. Should any of those become optional schema fields?

Not yet.

Possible future fields, only if useful:

- `claimType`
- `sourceStrength`
- `viralPattern`
- `realKernel`
- `logicalJump`
- `readerFriction`
- `evidenceNeeded`

Do not add these fields unless at least 3-5 strong pages would benefit from them.

## Safe implementation path if schema changes are approved later

1. Create a separate schema-only PR.
2. Add optional fields first, not required fields.
3. Keep all existing pages valid.
4. Update 2-3 flagship pages as pilots.
5. Only then consider gradual adoption across older pages.

## Pages inspected first

- `moon-landing-flag-shadows-stars` — flagship visual-claim structure.
- `mrna-vaccines-dna-genome` — health mechanism / official-source wording structure.
- `iso-20022-global-currency` — standard vs currency selection structure.
- `bill-gates-vaccines-population-reduction` — quote/context structure.
- `you-will-own-nothing-klaus-schwab` — attribution/logical-jump structure.
- `haarp-earthquakes` — real facility vs viral capability structure.
- `event-201-pandemic-exercise` — real exercise vs planning claim structure.
- `who-pandemic-agreement-sovereignty` — treaty text vs direct-control claim structure.
- `covid-supplements-vitamin-d-zinc-cure` — supplement / public-health evidence / regulatory-claim structure.

## Non-goals

- Do not force every old claim into a new schema at once.
- Do not block small content PRs that use the existing schema correctly.
- Do not use this as a reason to build CMS, AI search or dashboard work.
- Do not create medical-advice pages or personalized treatment guidance.

## Decision rule going forward

If flagship pages keep working well using existing blocks, keep the schema as-is and maintain `docs/editorial-patterns.md`.

If the same manual structure repeats across several pages and creates maintenance friction, add optional schema fields in a dedicated engineering PR.
