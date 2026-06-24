# Flagship Trust Gate Audit

Date: 2026-06-24

This audit applies the Trust Quality Gate to flagship claim pages before the project expands into more claims, topic-page rewrites, branding, domain decisions or promotion.

## Decision

Do not rewrite all flagship pages at once.

The first fix was limited to the strongest trust issue found in the audit: `ai-bci-synthetic-soul` had a weak top-level `shortAnswer` value and lacked the optional trust layer already used by stronger pages.

After that first fix, the later Hold batch upgraded the mature flagship pages that were already good enough for beta but still lacked the explicit trust layer.

## Status key

- Pass: aligned enough; do not touch now.
- Completed: upgraded during this gate; do not touch again unless a real contradiction is found.
- Open: outside this flagship-page batch; review later as part of the wider Trust Quality Gate.

## Flagship page status

### Pass — do not touch now

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

### Completed during this gate

#### `ai-bci-synthetic-soul`

Completed in PR #66.

What changed:

- replaced the top-level `shortAnswer` with a real evidence-bounded answer;
- aligned the answer-box title with the fixed `shortAnswer`;
- added `reviewScope`;
- added source quality labels;
- did not change the conclusion or expand the claim.

#### `moon-landing-flag-shadows-stars`

Completed in PR #67.

What changed:

- added `reviewScope` for the specific visual-claim check;
- added source quality labels;
- kept the visible conclusion, FAQ, share copy and structured data unchanged.

#### `mrna-vaccines-dna-genome`

Completed in PR #68.

What changed:

- added a health-specific `reviewScope`;
- added source quality labels;
- kept the medical-advice boundary intact;
- kept the visible conclusion, FAQ, share copy and structured data unchanged.

#### `event-201-pandemic-exercise`

Completed in PR #69.

What changed:

- added `reviewScope` for the narrow planning-claim check;
- added evidence limitations and source quality labels;
- kept the true-kernel vs leap structure unchanged;
- kept the visible conclusion, FAQ and share copy unchanged.

#### `haarp-earthquakes`

Completed in PR #70.

What changed:

- added `reviewScope` for the narrow earthquake-causation claim;
- added source quality labels;
- added evidence limitation wording inside the trust layer;
- kept the visible conclusion, FAQ and share copy unchanged.

## What was intentionally not changed

- No new claims.
- No topic pages.
- No suggest/correction flow.
- No domain/branding work.
- No production trigger.
- No broad rewrite of pages already passing.

## Remaining Trust Quality Gate work

The flagship Hold batch is complete, but the wider Trust Quality Gate is not fully complete yet.

Still open:

- Gate 2: topic pages should be checked for shared-pattern explanations and over-grouping risk.
- Gate 3: suggest/correction flow should be checked for clarity around useful evidence and stronger-source submission.
- Documentation should stay aligned with the public methodology and editorial pattern.

## Current recommendation

Do not open more claim-page trust PRs right now.

Next work should be either:

1. a light Gate 2 audit of topic pages; or
2. a light Gate 3 audit of suggest/correction flow.

Do not make a domain or promotion decision only because the flagship pages are now cleaner. Treat the site as a public beta / lab until the remaining gate surfaces are reviewed.
