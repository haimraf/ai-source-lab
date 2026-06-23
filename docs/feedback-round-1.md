# Round 1 editorial feedback - 19 published claims

Date: 2026-06-23

This document captures the first structured editorial feedback round after the site reached 19 published claim checks.

The goal is not to rewrite all claims in one risky pass. The goal is to turn broad feedback into a safe, reviewable improvement plan that can be applied claim by claim without changing the public reading experience, the content schema, or the site architecture before the next engineering pass.

## Current snapshot

- Published claims: 19
- Main strength: consistent source-first structure, careful wording, human editorial tone, and reusable share copy.
- Main risk: some checks may become longer or softer than needed, especially when the claim includes a real source but the viral conclusion is not proven.
- Editorial direction: keep the project centered on the pattern: real kernel, logical jump, careful conclusion.

## Safe scope for this feedback round

This round is documentation only.

Allowed in follow-up PRs:

- tighten wording in one small group of claims at a time;
- shorten verdicts and short answers where they are too long;
- add missing FAQ items where a claim already has a clear source base;
- improve copy consistency around “not found”, “not proven”, and “the source does not show”;
- add bonus facts only when they explain why the claim sounds plausible without opening a new claim.

Not allowed in this round:

- no schema changes;
- no new runtime features;
- no automatic reading-time field;
- no certainty-level product language yet;
- no mass rewrite of all 19 claims in one PR;
- no AI search, CMS, dashboard, or user system;
- no visual redesign of claim pages.

## General editorial standards to apply gradually

### 1. Verdict / bottom line

Keep verdicts short and useful. Preferred format:

> Real kernel - unproven conclusion

Examples:

- “Real initiative - no official world-government plan found.”
- “Real exercise - no proof of COVID planning found.”
- “Real document - not scientific proof of the viral interpretation.”

Hebrew production wording should stay natural, not formulaic.

### 2. Short answer

The short answer should usually be 3-5 compact lines:

1. Start with what is true.
2. State what was checked.
3. Explain what was not found.
4. End with the careful conclusion.

Avoid turning the short answer into the whole article.

### 3. FAQ

Every mature claim should aim for 4-5 FAQ items.

Useful recurring questions:

- Is the term / document / event real?
- What is the real kernel?
- Where does the logical jump happen?
- Is it legitimate to criticize the person / body / technology?
- What kind of source would strengthen the claim?

Do not add FAQ just to fill space. Add FAQ only when it answers likely reader friction.

### 4. Logical jump

The logical jump should be easy to see. The final step should be the one that requires proof.

Good pattern:

1. Document / event / technology exists.
2. It is connected to a real institution or public figure.
3. It is discussed online in a broader narrative.
4. Therefore: large hidden conclusion.

The last step is usually where the burden of proof belongs.

### 5. “What is true” vs “what was not proven”

Prefer this distinction over “true/false”.

Use the site’s current careful language:

- “כן נכון”
- “לא נמצא מקור”
- “לא הוכח”
- “המקור לא מראה את המסקנה הזאת”

Avoid overusing emoji tables. They can help in social copy, but the site should remain editorial and calm.

### 6. Length

Preferred reading feel: 4-6 minutes.

Claims above that should be reviewed for repetition, not automatically cut. Some complex claims need length, but repeated methodology paragraphs should be tightened.

### 7. Legitimate criticism

For claims about institutions, companies, public figures, money, health, or technology, include one sentence that separates legitimate criticism from proof of the viral claim.

Example:

> אפשר לבקר את הגוף, את השפה או את ההשפעה הציבורית שלו. אבל ביקורת כזאת אינה הוכחה אוטומטית לטענה הוויראלית.

This is especially useful for WEF, WHO, CBDC, Event 201, and similar claims.

## Priority groups

### Group A - strong claims, light polish only

These already match the site’s editorial model well. Touch carefully.

- `pallavicini-islam-responsibility`
  - Strength: very clear “real connection does not prove control over a whole religion” logic.
  - Next pass: tighten verdict and ensure FAQ is complete.

- `event-201-pandemic-exercise`
  - Strength: excellent real-kernel vs conclusion structure.
  - Next pass: check whether any source links need refresh; avoid expanding beyond the exercise.

- `kal-el-hebrew-meaning`
  - Strength: good for the symbols / pop-culture cluster.
  - Next pass: keep it short and avoid over-academic treatment.

### Group B - good claims, medium editorial tightening

- `great-reset-global-government`
  - Priority: high.
  - Keep the current framing: real WEF initiative, no official world-government plan found.
  - Preserve the bonus facts, but make sure they do not become a separate article about WEF.

- `15-minute-city-prison`
  - Emphasize the distinction between urban planning model and prison/control claim.
  - Add a stronger “what would prove the stronger claim” FAQ item.

- `you-will-own-nothing-klaus-schwab`
  - Keep focus on attribution: who wrote the phrase, where it appeared, and whether Schwab personally said it.
  - Avoid turning it into a general WEF article.

- `agenda-2030-seven-steps`
  - Keep the check narrow: whether the seven-step list is an official UN document.
  - Separate Agenda 2030 / SDGs from viral posters and merged narratives.

- `who-pandemic-agreement-sovereignty`
  - Keep neutrality high.
  - Make sure the page separates treaty language, national implementation, and viral claims about direct WHO control.

### Group C - important claims that need careful strengthening

- `monster-energy-666-logo`
  - Strengthen design / symbol context if primary or official sources support it.
  - Avoid overexplaining gematria-like comparisons.

- `spider-man-hand-sign`
  - Keep it as a cultural-symbol check.
  - Add source context only if it stays narrow and readable.

- `xrp-global-currency`
  - Needs a future refresh against current 2025-2026 sources.
  - Keep ISO 20022, Ripple, XRP, and “chosen world currency” clearly separated.

- `digital-shekel-spending-control`
  - Sensitive and important.
  - Separate technical possibility, policy design, law, and proof of actual intended control.

- `chemtrails-aluminum`
  - Important traffic candidate.
  - Keep aluminum, contrails, atmospheric measurements, and mass spraying as separate claims.

- `cloud-seeding-chemtrails`
  - Strengthen the distinction between legitimate cloud seeding and claims about hidden mass spraying.

- `gravity-loss-2026-project-anchor`
  - Confirm source strength before further promotion.
  - If the source base is weak, keep the page cautious and avoid making it a homepage example.

- `project-blue-beam-nasa`
  - Classic claim with strong search potential.
  - Keep the wording fair: the story exists, but official NASA / UN proof is the tested question.

- `gateway-process-out-of-body`
  - Good example of real document vs broad interpretation.
  - Keep it in the “document is real, interpretation is not proven” lane.

### Group D - AI and technology checks

- `ai-as-source-pyramids`
  - Strengthen the reusable principle: AI can help search, but it is not a primary source.
  - Make this page useful as an internal reference for future AI-source claims.

- `ai-bci-synthetic-soul`
  - Keep BCI, AI, research demos, and “external body control” separate.
  - Avoid science-fiction drift.

## Suggested follow-up PR order

### PR 1 - Institutional claims polish

Scope:

- `great-reset-global-government`
- `event-201-pandemic-exercise`
- `who-pandemic-agreement-sovereignty`
- `agenda-2030-seven-steps`
- `you-will-own-nothing-klaus-schwab`

Reason: these are connected by institution / policy / viral narrative logic and likely share language patterns.

Allowed changes:

- tighten verdicts;
- add or improve FAQ;
- reduce repeated methodology copy;
- ensure legitimate criticism is explicitly separated from proof.

### PR 2 - Money and systems polish

Scope:

- `digital-shekel-spending-control`
- `xrp-global-currency`

Reason: both need strong separation between technology, standard, policy, and claim.

Allowed changes:

- source refresh;
- clearer “technical possibility vs policy proof” wording;
- FAQ additions.

### PR 3 - Sky and climate polish

Scope:

- `chemtrails-aluminum`
- `cloud-seeding-chemtrails`

Reason: this is a likely high-traffic area and benefits from sharper term separation.

Allowed changes:

- clarify contrails vs cloud seeding vs geoengineering;
- strengthen source hierarchy;
- add a compact “terms not to mix” note.

### PR 4 - Symbols and pop culture polish

Scope:

- `monster-energy-666-logo`
- `spider-man-hand-sign`
- `kal-el-hebrew-meaning`

Reason: lighter claims that can improve readability and shareability without heavy source work.

### PR 5 - AI / science interpretation polish

Scope:

- `ai-as-source-pyramids`
- `ai-bci-synthetic-soul`
- `gateway-process-out-of-body`
- `gravity-loss-2026-project-anchor`
- `project-blue-beam-nasa`

Reason: all need clean boundaries between document, model answer, research, interpretation, and proof.

## Candidate future product ideas - not for immediate implementation

These ideas are useful but should wait until after the next engineering window:

- automatic `readingTime` per claim;
- explicit certainty level / confidence label;
- claim template generator;
- source freshness scanner;
- broken-link checker in CI;
- visual table component for “what is true / what was not proven”.

Before implementing any of these, decide whether they belong in schema, UI, CI, or editorial guidelines only.

## Decision for now

The next safe move is not to rewrite all 19 claims. The next safe move is to use this document as a queue and open small PRs by cluster.

The first content polish PR should probably be institutional claims, because that group has the strongest current traffic potential and the clearest shared editorial pattern.
