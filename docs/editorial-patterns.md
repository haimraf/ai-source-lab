# Editorial patterns

Date: 2026-06-24

This document turns the repeated structure from the strongest claim pages into an editorial pattern.

## Decision

Use the current rich body blocks, but add a small optional trust layer to the claim schema:

- `reviewScope`
- source `quality`

These fields exist to prevent conclusions from sounding broader than the evidence. They must stay optional so older claim records keep working.

## Evidence-bounded conclusion rule

Every claim conclusion should read as a source check, not a final truth ruling.

Prefer:

- "the sources checked do not support..."
- "within the reviewed documents..."
- "this check does not evaluate the entire broader debate..."
- "the reviewed sources do not establish..."

Avoid broad wording unless the evidence really supports it:

- "there is no evidence"
- "no plan exists"
- "does not prove" without saying what was reviewed
- subjective adjectives such as "strong", "weird" or "obvious" when a more precise phrase is available

## Source-quality rule

Each source should be readable by role, not just by URL.

Supported labels:

- official document
- academic/research
- journalism
- primary source
- secondary analysis
- claim source / social media

When a claim is about an institution, official sources can establish what the institution published. They are not enough by themselves to evaluate every criticism about hidden motives, influence or institutional power. Add external sources where possible, or mark the lack of external sources as an evidence limitation.

## Recommended flagship pattern

Use this order for high-value claims:

1. `reviewScope`
   - what this checks;
   - what this does not check;
   - evidence limitations;
   - what stronger evidence would be;
   - source quality notes.

2. `answer-box`
   - one direct short answer;
   - one paragraph with the careful bottom line;
   - one sentence explaining the scope boundary.

3. `verdict-grid`
   - the claim;
   - what is true;
   - what was not found in the reviewed sources;
   - the evidence-bounded conclusion.

4. `comparison-list`
   - separate confused terms;
   - show the exact point of confusion.

5. `method-note`
   - explain why the claim sounds plausible;
   - separate reader intuition from proof.

6. `evidence-list`
   - 3-4 numbered evidence items;
   - source-backed;
   - each item should answer one part of the claim.

7. `logic-chain`
   - show the steps from true kernel to viral conclusion;
   - final note should state what evidence would be needed.

8. FAQ / share / sources / correction CTA
   - keep FAQ focused on reader objections;
   - share copy should be short enough to paste in a comment;
   - source labels should show the role of each source;
   - each claim page should offer a route to submit a stronger source or correction.

## Claim selection criteria

Choose claims based on:

- public relevance;
- viral or repeated usage;
- potential for confusion or harm;
- availability of checkable sources;
- usefulness as an example of a recurring logical leap.

## Pages that already fit most of this pattern

- `moon-landing-flag-shadows-stars`
- `mrna-vaccines-dna-genome`
- `iso-20022-global-currency`
- `bill-gates-vaccines-population-reduction`
- `you-will-own-nothing-klaus-schwab`
- `haarp-earthquakes`
- `event-201-pandemic-exercise`
- `who-pandemic-agreement-sovereignty`
- `covid-supplements-vitamin-d-zinc-cure`

## Current rule for new content

For the next content batch, use evidence-bounded conclusions by default.

Do not add a new claim if it lacks:

- a narrow claim scope;
- visible evidence limitations;
- source labels;
- a note on what stronger evidence would be;
- a correction path.

## Health taxonomy note

A dedicated `public-health` cluster now exists for health-specific claims.

Current rule:

- use `public-health` when the claim is mainly about medical evidence, public-health guidance, supplements, treatment claims, vaccine mechanisms, health-product claims or regulatory health wording;
- keep `institutional-narratives` when the claim is mainly about institutional power, treaty interpretation, sovereignty, quote attribution or broad public narratives;
- add precise health tags on the claim itself;
- include a visible scope boundary: source checking is not medical advice;
- keep health pages narrow and source-backed.
