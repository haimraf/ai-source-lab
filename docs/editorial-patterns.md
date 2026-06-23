# Editorial patterns

Date: 2026-06-23

This document turns the repeated structure from the strongest claim pages into an editorial pattern without changing the content schema.

## Decision

Keep the current schema as-is for now.

The existing body blocks are enough for the current flagship page structure:

- `answer-box`
- `verdict-grid`
- `comparison-list`
- `method-note`
- `evidence-list`
- `logic-chain`
- `faq`
- `copy-share`
- `sources`

Do not add new schema fields yet.

## Why no schema change now

The strong pages are already expressing the needed structure manually through existing blocks.

Observed pattern:

1. A narrow claim.
2. A short answer.
3. A real kernel.
4. A clear “what was not found”.
5. A table or comparison separating terms.
6. A method note explaining why the claim feels plausible.
7. Evidence items from sources.
8. A logic chain showing the jump.
9. FAQ.
10. Copyable share text.
11. Sources.

This is reusable as an editorial checklist. It does not yet need to become required schema.

## When to revisit schema

Revisit schema only if at least 3-5 more pages repeat the same manual structure and editing becomes painful.

Possible future optional fields:

- `claimType`
- `sourceStrength`
- `viralPattern`
- `realKernel`
- `logicalJump`
- `readerFriction`
- `evidenceNeeded`

If added, these fields must be optional and introduced in a separate schema PR.

## Recommended flagship pattern

Use this order for high-value claims:

1. `answer-box`
   - one direct short answer;
   - one paragraph with the careful bottom line;
   - one sentence explaining the scope boundary.

2. `verdict-grid`
   - the claim;
   - what is true;
   - what was not found;
   - the conclusion.

3. `comparison-list`
   - separate confused terms;
   - show the exact point of confusion.

4. `method-note`
   - explain why the claim sounds convincing;
   - separate reader intuition from proof.

5. `evidence-list`
   - 3-4 numbered evidence items;
   - source-backed;
   - each item should answer one part of the claim.

6. `logic-chain`
   - show the steps from true kernel to viral conclusion;
   - final note should state what evidence would be needed.

7. FAQ / share / sources
   - keep FAQ focused on reader objections;
   - share copy should be short enough to paste in a comment.

## Pages that already fit this pattern

- `moon-landing-flag-shadows-stars`
- `mrna-vaccines-dna-genome`
- `iso-20022-global-currency`
- `bill-gates-vaccines-population-reduction`
- `you-will-own-nothing-klaus-schwab`
- `haarp-earthquakes`
- `event-201-pandemic-exercise`
- `who-pandemic-agreement-sovereignty`

## Current rule for new content

For the next content batch, prefer using this editorial pattern manually before changing schema.

Do not block one-off content PRs because a perfect schema does not exist yet.

Do block large content batches if the same structure is being copied repeatedly without a documented decision.

## Health taxonomy note

Health-adjacent claims currently use existing clusters until a dedicated health/public-health cluster is approved.

Current temporary rule:

- use `institutional-narratives` when the claim is mainly about public interpretation of official health sources, regulators, institutions or source wording;
- add precise health tags on the claim itself;
- revisit this before creating more health pages.

Likely future decision:

Create a dedicated `public-health` cluster once there are at least 2-3 health-specific claim pages and the topic is no longer just an institutional-source interpretation.
