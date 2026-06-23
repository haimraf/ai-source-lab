# Schema audit checkpoint

Date: 2026-06-23

This checkpoint documents a deliberate control step before scaling the archive beyond the next small batch of claim pages.

## Why this exists

The Moon landing page is intended to be a stronger editorial page while still using the existing claim schema and existing body blocks.

That is intentional:

- no schema change in the Moon landing PR;
- no migration of existing pages during content momentum;
- no broad rewrite before Codex / deeper engineering support is available again;
- keep building toward the 24-claim short-term target.

After this page is reviewed, the team should decide whether its repeated structure should remain an editorial pattern or become part of the schema.

## Review timing

Run this audit after the current content push, ideally around or after 2026-06-28, before opening a larger batch of new claim pages.

This is not a blocker for the Moon landing PR or the immediate two-claim content batch.

## Temporary taxonomy note

The current code does not yet have a dedicated `public-health` or `health-technology` topic cluster.

Until the schema/taxonomy audit is complete:

- health-adjacent claim pages may temporarily use `institutional-narratives` when the claim is primarily about public interpretation of official health institutions, regulators or source wording;
- health-specific tags should still be added to the claim, for example `mRNA`, `DNA`, `חיסונים`, `גנטיקה`, `בריאות ציבורית`;
- this temporary placement should be revisited during the checkpoint;
- do not add a new topic cluster inside a content PR unless the audit explicitly approves it.

Candidate future cluster names:

- `public-health`
- `health-technology`
- `health-public-sources`

Decision to make during the checkpoint:

> Should health claims remain under institutional narratives, or should the site add a dedicated health/public-health topic cluster before creating more health pages?

## Questions to answer

1. Which existing blocks are enough?
   - `answer-box`
   - `verdict-grid`
   - `comparison-list`
   - `evidence-list`
   - `method-note`
   - `logic-chain`
   - `faq`
   - `sources`
   - `copy-share`

2. Which repeated editorial ideas are appearing across strong pages?
   - real kernel;
   - viral claim;
   - what was checked;
   - what was not found;
   - logical jump;
   - legitimate criticism / fair framing;
   - what evidence would change the conclusion.

3. Should any of those become optional schema fields?

Possible future fields, only if useful:

- `claimType`
- `sourceStrength`
- `viralPattern`
- `realKernel`
- `logicalJump`
- `readerFriction`
- `evidenceNeeded`

Do not add these fields unless at least 3-5 strong pages would benefit from them.

## Safe implementation path if schema changes are approved

1. Create a separate schema-only PR.
2. Add optional fields first, not required fields.
3. Keep all existing pages valid.
4. Update 2-3 flagship pages as pilots.
5. Only then consider gradual adoption across older pages.

## Pages to inspect first

- `moon-landing-flag-shadows-stars` — flagship visual-claim structure.
- `mrna-vaccines-dna-genome` — health mechanism / official-source wording structure.
- `iso-20022-global-currency` — standard vs currency selection structure.
- `bill-gates-vaccines-population-reduction` — quote/context structure.
- `you-will-own-nothing-klaus-schwab` — attribution/logical-jump structure.
- `haarp-earthquakes` — real facility vs viral capability structure.
- `event-201-pandemic-exercise` — real exercise vs planning claim structure.
- `who-pandemic-agreement-sovereignty` — treaty text vs direct-control claim structure.

## Non-goals

- Do not force every old claim into a new schema at once.
- Do not block small content PRs that use the existing schema correctly.
- Do not mix schema changes with a new claim page.
- Do not use this as a reason to build CMS, AI search or dashboard work.

## Decision rule

If the Moon landing page and 2-3 other strong pages work well using existing blocks, keep the schema as-is and document the editorial pattern.

If the same manual structure repeats across several pages and creates maintenance friction, add optional schema fields in a dedicated engineering PR.
