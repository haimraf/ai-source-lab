# Round 1 Editorial Feedback — historical baseline

Date: 2026-06-23

This document captures the first structured editorial feedback round after the site reached 19 published claim checks.

Status note: this is now a historical baseline document. The current `main` branch has 22 claim checks ready for publication, although Vercel production can lag behind because of build-rate limits.

The goal is not to rewrite all claims in one risky pass. The goal is to turn broad feedback into a safe, reviewable improvement plan that can be applied claim by claim without changing the public reading experience, the content schema, or the site architecture before the next engineering pass.

## Current snapshot

- Baseline at the time of this feedback round: 19 published claims.
- Current content state after the first follow-up sequence: 22 claim checks on `main`.
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
- Pace: 22 checks is a stronger early base than the original 19-check snapshot.

What is still weak:

- Scale: 22 checks is still too small to become a repeat destination. The archive should aim for 50-70 checks before it can feel like a serious reference library.
- Sharpness: some pages are accurate but too soft or long. The target reader still needs a direct bottom line.
- Discovery: the site is not yet easy to find unless someone already knows what to search for.
- Depth vs breadth: the site has broad topic coverage, but several clusters still feel thin.
- Production lag: GitHub `main` can be ahead of Vercel production when build-rate limits block deployment.

Operational direction for the next stage:

- keep quality and fairness;
- publish 2-4 focused checks per week when possible;
- sharpen verdicts and short answers;
- add more legitimate-criticism framing for institutions like WEF and WHO without becoming partisan;
- grow toward 50-70 checks as the first meaningful archive milestone;
- define a 6-12 month goal: for example, 100 checks, 10k monthly visitors, or becoming a trusted Hebrew source-checking reference.

## Safe scope for this feedback round

This round remains documentation-first and claim-by-claim.

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
- no mass rewrite of all claims in one PR;
- no AI search, CMS, dashboard, or user system;
- no visual redesign of claim pages.

## General editorial standards to apply gradually

### 1. Verdict / bottom line

Keep verdicts short and useful. Preferred format:

> Real kernel — unproven conclusion

Examples:

- “Real initiative — no official world-government plan found.”
- “Real exercise — no proof of COVID planning found.”
- “Real document — not scientific proof of the viral interpretation.”

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

> Status note — 2026-06-23:
> This original pilot recommendation has already been completed. Great Reset was polished and merged after this feedback round. Keep the notes below as historical evaluation, not as the next active step.

The first follow-up content PR focused on `great-reset-global-government` as a pilot before touching the full institutional cluster.

Current evaluation at the time:

- factual accuracy: good;
- structure: good;
- virality / sharpness: medium;
- estimated editorial quality: about 7.5/10 compared with stronger pages like Pallavicini and Event 201.

## Handled after round 1

The first polish and content sequence after this feedback round already handled several high-priority items:

* `great-reset-global-government` — handled and merged.
* `event-201-pandemic-exercise` — handled and merged.
* `who-pandemic-agreement-sovereignty` — handled, merged and deployed to production.
* `agenda-2030-seven-steps` — handled and merged.
* `rockefeller-lock-step-pandemic-scenario` — added and merged.
* `haarp-earthquakes` — added and merged to `main`.
* `bill-gates-vaccines-population-reduction` — added and merged to `main`.
* `you-will-own-nothing-klaus-schwab` — focused wording polish in the current editorial-sync PR.

## WHO Gemini feedback status

Gemini’s review of the WHO page was accepted into the plan.

Handled:

* three-layer separation: treaty language / national implementation / viral claim about direct WHO control;
* Article 22(2) as the source anchor;
* legitimate criticism block for funding, transparency, PABS and implementation;
* share copy pointing to `/claims/who-pandemic-agreement-sovereignty`.

Still open:

* mobile QA for WHO evidence SVGs;
* mobile QA for source-level blocks and logic-chain layout;
* future route-hygiene test for the 15-minute city public path.

## Updated follow-up order

The next content-polish PR should not be Great Reset, Event 201, WHO, Agenda 2030, HAARP, Bill Gates or You Will Own Nothing, because those have already been handled or are being handled in this sequence.

Recommended order after this PR:

1. production status check once Vercel build-rate limit clears;
2. small WHO mobile QA / layout pass;
3. route-hygiene test for `15-minute-city-prison`;
4. new narrow claim: Moon landing, with strict scope.

## Notes preserved from Great Reset review

What worked:

- The page admitted the real kernel clearly: The Great Reset is a real WEF phrase / initiative.
- The official WEF / Schwab / Davos Manifesto source base was appropriate.
- The logical-jump section worked.
- The share copy was strong and usable.

What was tightened:

1. Verdict became sharper.
2. Claim wording included the common viral framing.
3. Short answer became more direct.
4. Repetition was reduced.
5. FAQ was completed.
6. Legitimate criticism was kept and sharpened.

Important wording direction retained for similar institutional claims:

> מותר ואפילו רצוי לבקר גוף ציבורי, פורום בינלאומי או אליטה כלכלית. אבל ביקורת על השפעה אינה הוכחה אוטומטית לתוכנית סודית.
