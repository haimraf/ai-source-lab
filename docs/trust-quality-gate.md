# Trust Quality Gate

Date: 2026-06-24

This is the next level-up for the project before adding new claims, branding, a domain, or promotion.

## Decision

Before expanding the site, run a trust quality gate across three surfaces:

1. flagship claim pages;
2. topic pages;
3. the suggest/correction flow.

The goal is not to rewrite everything. The goal is to find places where the site creates trust risk because wording, scope, sources, metadata or user flow are not aligned.

## Rule of work

Do not touch pages that already work well.

A page only enters the gate if one of these is true:

- the verdict sounds broader than the evidence;
- the short answer, bottom line, FAQ, share copy or metadata say different things;
- the page lacks a visible scope boundary;
- the source roles are unclear;
- the correction path is missing or hard to find;
- a topic page groups claims without explaining the shared pattern;
- the suggest-claim flow does not make clear what kind of evidence is useful.

## Gate 1: flagship claim pages

Flagship pages are the pages most likely to be shared, indexed or used as examples of the site's method.

Initial flagship set:

- `great-reset-global-government`
- `moon-landing-flag-shadows-stars`
- `ai-bci-synthetic-soul`
- `digital-shekel-spending-control`
- `15-minute-city-prison`
- `you-will-own-nothing-klaus-schwab`
- `mrna-vaccines-dna-genome`
- `bill-gates-vaccines-population-reduction`
- `who-pandemic-agreement-sovereignty`
- `event-201-pandemic-exercise`
- `haarp-earthquakes`
- `iso-20022-global-currency`

For each flagship page, check:

### Scope

- Does the page clearly say what it checks?
- Does it clearly say what it does not check?
- Does it avoid turning a source check into a final truth ruling?

### Internal wording sync

- `verdict`
- `shortAnswer`
- `bottomLine`
- `overview`
- first answer-box title
- FAQ answers
- share copy
- metadata description
- structured data dateModified
- sitemap lastmod

These do not need identical wording, but they must point to the same conclusion.

### Evidence quality

- Are source roles visible?
- Are official sources used only for what they can establish?
- Is the page honest when external or independent sources are limited?
- Does the page state what stronger evidence would look like?

### Reader trust

- Is there a correction path?
- Is the page careful without sounding evasive?
- Does the page separate criticism from proof?
- Does the share copy stay pasteable and bounded?

## Gate 2: topic pages

A topic page should not only collect claims. It should explain the recurring pattern.

For each topic page, check:

- Does the topic explain the shared confusion pattern?
- Does it avoid implying that every claim in the topic has the same verdict?
- Does it show why these claims belong together?
- Does it surface the strongest pages first?
- Does it avoid over-branding or emotional language?
- Does it help a reader understand the method, not just click more pages?

Initial topic pages to review:

- `agenda-2030`
- `public-health`
- `digital-money`
- `institutional-narratives`
- `ai-sources`
- `sky-climate`
- `pop-culture-symbols`
- `consciousness-intelligence`

Gate 2 first-pass audit: `docs/topic-page-trust-gate-audit.md`.

## Gate 3: suggest and correction flow

The site should invite better evidence without looking like it is asking people to fight.

Check:

- Can a reader suggest a claim easily?
- Can a reader submit a correction or stronger source?
- Does the page explain what counts as a useful source?
- Does it ask for the exact claim, the source, and why the source matters?
- Does it avoid encouraging vague screenshots or viral captions without origin?
- Does it make clear that a stronger source can change the page?

## Pass / hold / fix

Use three statuses:

### Pass

The page or flow is aligned enough. Do not touch it.

### Hold

There is a small concern, but it does not justify immediate work. Add it to the backlog.

### Fix

There is a real trust issue. Fix in one PR by batch, not one page at a time unless the issue is urgent.

## PR rule

Quality Gate work should be batched.

Prefer one PR per gate area:

- one PR for flagship copy sync;
- one PR for topic-page trust copy;
- one PR for suggest/correction flow;
- one PR for tests only, if tests need to be aligned with intended content changes.

Do not create a chain of tiny PRs unless production is broken or a single page has a serious trust problem.

## Done definition

The gate is done when:

- no flagship page has conflicting top-level wording;
- topic pages explain the pattern, not just the list;
- suggest/correction flow is clear and useful;
- the methodology and editorial docs match the public pages;
- no new domain or promotion decision is made only because the UI feels ready.

## Current recommendation

Do this before buying or committing to a domain.

The project can remain public on Vercel while this gate runs. Treat it as a public beta / lab, not a finished brand.
