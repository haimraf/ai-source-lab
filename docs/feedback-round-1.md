# Round 1 Editorial Feedback - 19 Claims (23.6.2026)

Date: 2026-06-23

This document captures the first structured editorial feedback round after the site reached 19 published claim checks.

The goal is not to rewrite all claims in one risky pass. The goal is to turn broad feedback into a safe, reviewable improvement plan that can be applied claim by claim without changing the public reading experience, the content schema, or the site architecture before the next engineering pass.

## Current snapshot

- Published claims: 19
- Main strength: consistent source-first structure, careful wording, human editorial tone, and reusable share copy.
- Main risk: some checks may become longer or softer than needed, especially when the claim includes a real source but the viral conclusion is not proven.
- Editorial direction: keep the project centered on the pattern: real kernel, logical jump, careful conclusion.

## Site-level feedback

The site is moving in the right direction because its core idea is differentiated: a Hebrew source-first archive that separates the real kernel from the logical jump. This is meaningfully different from many public “fact check” experiences that feel like they are trying to win a side argument.

What works now:

- Methodology: “source before conclusion” is repeated enough to build trust with suspicious readers.
- Topic clusters: claims are connected without turning everything into one giant conspiracy narrative.
- Fairness: the pages admit the real kernel first instead of mocking the claim.
- UX: search, topic map, copyable responses and focused claim pages make the site usable.
- Pace: 19 checks is a strong early base for this stage.

What is still weak:

- Scale: 19 checks is still too small to become a repeat destination. The archive should aim for 50-70 checks before it can feel like a serious reference library.
- Sharpness: some pages are accurate but too soft or long. The target reader still needs a direct bottom line.
- Discovery: the site is not yet easy to find unless someone already knows what to search for.
- Depth vs breadth: the site has broad topic coverage, but several clusters still feel thin.

Operational direction for the next stage:

- keep quality and fairness;
- publish 2-4 focused checks per week when possible;
- sharpen verdicts and short answers;
- add more legitimate-criticism framing for institutions like WEF and WHO without becoming partisan;
- grow toward 50-70 checks as the first meaningful archive milestone;
- define a 6-12 month goal: for example, 100 checks, 10k monthly visitors, or becoming a trusted Hebrew source-checking reference.

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

### 8. Virality without losing trust

Some claims should be sharper than “balanced”. Viral potential improves when the article clearly names both sides:

- the real reason people are suspicious;
- the exact point where the source stops supporting the viral conclusion.

Do not soften every claim into neutral fog. The site can be fair and still direct.

## Immediate pilot: Great Reset polish

The first follow-up content PR should probably focus on [`great-reset-global-government`](../content/claims/great-reset-global-government.ts) as a pilot, before touching the full institutional cluster.

Current evaluation:

- factual accuracy: good;
- structure: good;
- virality / sharpness: medium;
- estimated editorial quality: about 7.5/10 compared with stronger pages like Pallavicini and Event 201.

### What works

- The page admits the real kernel clearly: The Great Reset is a real WEF phrase / initiative.
- The official WEF / Schwab / Davos Manifesto source base is appropriate.
- The logical-jump section works.
- The share copy is strong and usable.

### What should be tightened

1. Verdict should be sharper.

Current direction:

> יוזמה אמיתית; תוכנית רשמית לממשלה עולמית לא נמצאה

Preferred direction:

> יוזמה רשמית של WEF קיימת — אין בה תוכנית להקמת ממשלה עולמית או ביטול ריבונות מדינות.

Shorter social version:

> יוזמה רשמית של WEF קיימת — אין תוכנית להקמת ממשלה עולמית.

2. Claim wording should include the common viral framing.

The claim should mention not only “world government” but also the common online framing around “שלטון עולמי”, “NWO” or “New World Order”, while still keeping the tested question narrow.

3. Short answer should be more direct.

Draft direction:

> The Great Reset הוא שם רשמי ליוזמה של World Economic Forum מ-2020, שקוראת לאיפוס קפיטליזם, קפיטליזם של בעלי עניין, ESG וטכנולוגיה. אין במסמכים הרשמיים תוכנית להקמת ממשלה עולמית, ביטול מדינות או שליטה ישירה באזרחים.

4. Reduce repetition.

The current page repeats the same distinction in the short answer, verdict grid, source guidance and criticism section. The next pass should keep the distinction but reduce repeated paragraphs.

5. FAQ must be completed.

Suggested FAQ items:

- האם The Great Reset הוא דבר אמיתי?
- האם WEF באמת קידם שינוי כלכלי גדול?
- איפה מתרחשת הקפיצה לטענת NWO / ממשלה עולמית?
- האם מותר לבקר את WEF?
- מה היה מחזק את הטענה?

6. Keep and sharpen legitimate criticism.

Important wording direction:

> מותר ואפילו רצוי לבקר את WEF על השפעה בלתי פרופורציונלית של אליטות, קשרי הון-שלטון והדחיפה של ESG. אבל ביקורת על השפעה אינה הוכחה לתוכנית שלטון עולמי סודית.

7. OG / title direction for future review.

Candidate framing:

> The Great Reset: מה באמת כתוב במסמכים של WEF?

Do not change OG in this documentation PR. Treat it as a future content/SEO review item.

## Priority groups

### Group A - strong claims, light polish only

These already match the site’s editorial model well. Touch carefully.

- [`pallavicini-islam-responsibility`](../content/claims/pallavicini-islam-responsibility.ts)
  - Strength: very clear “real connection does not prove control over a whole religion” logic.
  - Next pass: tighten verdict and ensure FAQ is complete.

- [`event-201-pandemic-exercise`](../content/claims/event-201-pandemic-exercise.ts)
  - Strength: excellent real-kernel vs conclusion structure.
  - Next pass: check whether any source links need refresh; avoid expanding beyond the exercise.

- [`kal-el-hebrew-meaning`](../content/claims/kal-el-hebrew-meaning.ts)
  - Strength: good for the symbols / pop-culture cluster.
  - Next pass: keep it short and avoid over-academic treatment.

### Group B - good claims, medium editorial tightening

- [`great-reset-global-government`](../content/claims/great-reset-global-government.ts)
  - Priority: highest pilot for the first content-polish PR.
  - Keep the current framing: real WEF initiative, no official world-government / NWO plan found.
  - Preserve the bonus facts, but make sure they do not become a separate article about WEF.
  - Strengthen legitimate criticism so the page does not feel like a defense of WEF.

- [`15-minute-city-prison`](../content/claims/15-minute-city-prison.ts)
  - Emphasize the distinction between urban planning model and prison/control claim.
  - Add a stronger “what would prove the stronger claim” FAQ item.

- [`you-will-own-nothing-klaus-schwab`](../content/claims/you-will-own-nothing-klaus-schwab.ts)
  - Keep focus on attribution: who wrote the phrase, where it appeared, and whether Schwab personally said it.
  - Avoid turning it into a general WEF article.

- [`agenda-2030-seven-steps`](../content/claims/agenda-2030-seven-steps.ts)
  - Keep the check narrow: whether the seven-step list is an official UN document.
  - Separate Agenda 2030 / SDGs from viral posters and merged narratives.

- [`who-pandemic-agreement-sovereignty`](../content/claims/who-pandemic-agreement-sovereignty.ts)
  - Keep neutrality high.
  - Make sure the page separates treaty language, national implementation, and viral claims about direct WHO control.

### Group C - important claims that need careful strengthening

- [`monster-energy-666-logo`](../content/claims/monster-energy-666-logo.ts)
  - Strengthen design / symbol context if primary or official sources support it.
  - Avoid overexplaining gematria-like comparisons.

- [`spider-man-hand-sign`](../content/claims/spider-man-hand-sign.ts)
  - Keep it as a cultural-symbol check.
  - Add source context only if it stays narrow and readable.

- [`xrp-global-currency`](../content/claims/xrp-global-currency.ts)
  - Needs a future refresh against current 2025-2026 sources.
  - Keep ISO 20022, Ripple, XRP, and “chosen world currency” clearly separated.

- [`digital-shekel-spending-control`](../content/claims/digital-shekel-spending-control.ts)
  - Sensitive and important.
  - Separate technical possibility, policy design, law, and proof of actual intended control.

- [`chemtrails-aluminum`](../content/claims/chemtrails-aluminum.ts)
  - Important traffic candidate.
  - Keep aluminum, contrails, atmospheric measurements, and mass spraying as separate claims.

- [`cloud-seeding-chemtrails`](../content/claims/cloud-seeding-chemtrails.ts)
  - Strengthen the distinction between legitimate cloud seeding and claims about hidden mass spraying.

- [`gravity-loss-2026-project-anchor`](../content/claims/gravity-loss-2026-project-anchor.ts)
  - Confirm source strength before further promotion.
  - If the source base is weak, keep the page cautious and avoid making it a homepage example.

- [`project-blue-beam-nasa`](../content/claims/project-blue-beam-nasa.ts)
  - Classic claim with strong search potential.
  - Keep the wording fair: the story exists, but official NASA / UN proof is the tested question.

- [`gateway-process-out-of-body`](../content/claims/gateway-process-out-of-body.ts)
  - Good example of real document vs broad interpretation.
  - Keep it in the “document is real, interpretation is not proven” lane.

### Group D - AI and technology checks

- [`ai-as-source-pyramids`](../content/claims/ai-as-source-pyramids.ts)
  - Strengthen the reusable principle: AI can help search, but it is not a primary source.
  - Make this page useful as an internal reference for future AI-source claims.

- [`ai-bci-synthetic-soul`](../content/claims/ai-bci-synthetic-soul.ts)
  - Keep BCI, AI, research demos, and “external body control” separate.
  - Avoid science-fiction drift.

## Suggested follow-up PR order

### PR 1 - Great Reset pilot polish

Scope:

- [`great-reset-global-government`](../content/claims/great-reset-global-government.ts)

Reason: it is currently high-potential, homepage-featured, and worth sharpening before using it as a public example.

Allowed changes:

- sharpen verdict and claim wording;
- add FAQ;
- reduce repeated paragraphs;
- strengthen legitimate criticism without changing the conclusion;
- keep sources and architecture unchanged unless a source link is clearly broken.

### PR 2 - Institutional claims polish

Scope:

- [`event-201-pandemic-exercise`](../content/claims/event-201-pandemic-exercise.ts)
- [`who-pandemic-agreement-sovereignty`](../content/claims/who-pandemic-agreement-sovereignty.ts)
- [`agenda-2030-seven-steps`](../content/claims/agenda-2030-seven-steps.ts)
- [`you-will-own-nothing-klaus-schwab`](../content/claims/you-will-own-nothing-klaus-schwab.ts)

Reason: these are connected by institution / policy / viral narrative logic and likely share language patterns.

Allowed changes:

- tighten verdicts;
- add or improve FAQ;
- reduce repeated methodology copy;
- ensure legitimate criticism is explicitly separated from proof.

### PR 3 - Money and systems polish

Scope:

- [`digital-shekel-spending-control`](../content/claims/digital-shekel-spending-control.ts)
- [`xrp-global-currency`](../content/claims/xrp-global-currency.ts)

Reason: both need strong separation between technology, standard, policy, and claim.

Allowed changes:

- source refresh;
- clearer “technical possibility vs policy proof” wording;
- FAQ additions.

### PR 4 - Sky and climate polish

Scope:

- [`chemtrails-aluminum`](../content/claims/chemtrails-aluminum.ts)
- [`cloud-seeding-chemtrails`](../content/claims/cloud-seeding-chemtrails.ts)

Reason: this is a likely high-traffic area and benefits from sharper term separation.

Allowed changes:

- clarify contrails vs cloud seeding vs geoengineering;
- strengthen source hierarchy;
- add a compact “terms not to mix” note.

### PR 5 - Symbols and pop culture polish

Scope:

- [`monster-energy-666-logo`](../content/claims/monster-energy-666-logo.ts)
- [`spider-man-hand-sign`](../content/claims/spider-man-hand-sign.ts)
- [`kal-el-hebrew-meaning`](../content/claims/kal-el-hebrew-meaning.ts)

Reason: lighter claims that can improve readability and shareability without heavy source work.

### PR 6 - AI / science interpretation polish

Scope:

- [`ai-as-source-pyramids`](../content/claims/ai-as-source-pyramids.ts)
- [`ai-bci-synthetic-soul`](../content/claims/ai-bci-synthetic-soul.ts)
- [`gateway-process-out-of-body`](../content/claims/gateway-process-out-of-body.ts)
- [`gravity-loss-2026-project-anchor`](../content/claims/gravity-loss-2026-project-anchor.ts)
- [`project-blue-beam-nasa`](../content/claims/project-blue-beam-nasa.ts)

Reason: all need clean boundaries between document, model answer, research, interpretation, and proof.

## Status table

| Group | Claims | Priority | Status |
| --- | ---: | --- | --- |
| Group A - strong claims | 3 | Low | Mostly ready; light polish only |
| Group B - institutional / policy claims | 5 | High | Great Reset becomes the pilot |
| Group C - high-traffic careful strengthening | 9 | Medium | Needs staged source/copy review |
| Group D - AI and technology | 2 | Medium | Useful as reusable method pages |
| Future product ideas | n/a | Later | Wait until engineering window |

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

The next safe move is not to rewrite all 19 claims. The next safe move is to use this document as a queue and open small PRs by claim or cluster.

The first content polish PR should be only Great Reset, because it is already homepage-featured and has clear viral potential, but still needs sharper wording and a complete FAQ.

**Recommended next step:** open a first content-polish PR focused only on [`great-reset-global-government`](../content/claims/great-reset-global-government.ts) and apply the points listed in the “Immediate pilot” section: sharper verdict, clearer NWO framing, completed FAQ, reduced repetition, and stronger legitimate-criticism wording.
