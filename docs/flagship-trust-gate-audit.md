# Flagship Trust Gate Audit

Date: 2026-06-24

This audit applies the Trust Quality Gate to flagship claim pages before the project expands into more claims, topic-page rewrites, branding, domain decisions or promotion.

## Decision

Do not rewrite all flagship pages at once.

The first fix should be limited to the strongest trust issue found in the audit: `ai-bci-synthetic-soul` had a weak top-level `shortAnswer` value and lacked the optional trust layer already used by stronger pages.

## Status key

- Pass: aligned enough; do not touch now.
- Hold: good enough for beta, but should be upgraded in a later batched pass.
- Fix: real trust issue; safe to fix now.

## Flagship page status

### Pass

#### `great-reset-global-government`

Strongest current example of the trust pattern.

Why it passes:

- has `reviewScope`;
- separates what is checked from what is not checked;
- explains evidence limitations;
- labels source quality;
- makes clear that WEF official sources can show what WEF published, but cannot settle the entire broader debate.

Do not touch now.

#### `you-will-own-nothing-klaus-schwab`

Good wording alignment across verdict, short answer, bottom line, overview, FAQ and share copy.

Why it passes for now:

- distinguishes a real WEF-hosted scenario article from a Schwab quote;
- says criticism of WEF or subscription economics can still be legitimate;
- explains what stronger evidence would look like.

Do not touch now.

#### `digital-shekel-spending-control`

Good evidence-bounded framing after the previous content sync.

Why it passes for now:

- separates real CBDC privacy/design concerns from the stronger claim about an Israeli spending-control plan;
- keeps the conclusion narrow;
- states what kind of official source would change the conclusion.

Do not touch now.

### Hold

#### `moon-landing-flag-shadows-stars`

Current wording is much better after the visual-claim sync.

Why it is on hold:

- top-level conclusion is already bounded;
- FAQ and share copy are aligned;
- but the page still lacks `reviewScope` and source quality labels.

Later upgrade: add scope/source-quality layer in a batch with other mature pages.

#### `mrna-vaccines-dna-genome`

Good current page, especially because it includes a medical boundary.

Why it is on hold:

- it clearly says this is not medical advice;
- it checks a narrow mechanism claim;
- because it is a health page, it should eventually get an explicit `reviewScope`.

Later upgrade: add health-specific scope boundary and source-quality labels.

#### `event-201-pandemic-exercise`

Good current page with a strong true-kernel vs leap structure.

Why it is on hold:

- the page separates the real exercise from the stronger planning claim;
- it explains the logical leap;
- but it is not yet in the full optional trust layer pattern.

Later upgrade: add `reviewScope`, evidence limitations and source-quality labels.

#### `haarp-earthquakes`

Good current page, but wording can be tightened later.

Why it is on hold:

- the true kernel is clear: HAARP is real;
- the leap to earthquake causation is explained;
- one wording pattern is slightly broader than the new standard: prefer `in the reviewed sources...` over bare `no evidence found`.

Later upgrade: add `reviewScope`, source-quality labels and evidence-limitations wording.

### Fix

#### `ai-bci-synthetic-soul`

This was the first real trust fix.

Why it needed a fix:

- top-level `shortAnswer` was `שורה תחתונה`, which is a label, not an answer;
- the answer-box repeated the same generic title;
- the page already had good body copy, but lacked the optional trust layer used by stronger pages.

Fix applied in this PR:

- replaced the top-level `shortAnswer` with a real evidence-bounded answer;
- aligned the answer-box title with the fixed `shortAnswer`;
- added `reviewScope`;
- added source quality labels;
- did not change the conclusion or expand the claim.

## What was intentionally not changed

- No new claims.
- No topic pages.
- No suggest/correction flow.
- No domain/branding work.
- No production trigger.
- No broad rewrite of pages already passing.

## Next recommended batch

One later PR can upgrade Hold pages together:

- `moon-landing-flag-shadows-stars`
- `mrna-vaccines-dna-genome`
- `event-201-pandemic-exercise`
- `haarp-earthquakes`

That batch should only add trust-layer metadata and source-quality notes. It should not rewrite conclusions unless a real contradiction is found.
