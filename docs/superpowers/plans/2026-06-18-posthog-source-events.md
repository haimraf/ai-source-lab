# PostHog Source Events Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Capture anonymous source-opening and successful short-answer-copy events for AI Source Lab in the connected Studio Haim PostHog project.

**Architecture:** Initialize `posthog-js` in one client provider only when public environment variables exist. Keep event payload construction in pure typed functions, wrap external evidence links in a focused component, and emit copy events only after clipboard success.

**Tech Stack:** Next.js 16, React 19, TypeScript, `posthog-js`, Vitest, Testing Library

---

### Task 1: Add analytics dependencies and environment contract

**Files:**
- Modify: `package.json`
- Modify: `.env.example`

- [ ] **Step 1: Install dependencies**

```powershell
npm install posthog-js
npm install --save-dev vitest jsdom @testing-library/react @testing-library/jest-dom
```

- [ ] **Step 2: Add public environment variables**

```dotenv
# Optional anonymous product analytics. Leave blank to disable PostHog.
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

- [ ] **Step 3: Add the test script if the video plan has not already added it**

```json
"test": "vitest run"
```

- [ ] **Step 4: Run the existing checks and commit**

```powershell
npm run typecheck
git add package.json package-lock.json .env.example
git commit -m "build: add optional PostHog client analytics"
```

### Task 2: Define privacy-safe event payloads test-first

**Files:**
- Create: `lib/analytics/events.test.ts`
- Create: `lib/analytics/events.ts`

- [ ] **Step 1: Write failing tests**

```ts
import {describe, expect, it} from "vitest";
import {shortAnswerCopied, sourceOpened} from "./events";

describe("analytics events", () => {
  it("reduces source URLs to an explicit domain property", () => {
    expect(sourceOpened({
      claimSlug: "xrp-global-currency",
      sourceUrl: "https://www.imf.org/en/about/factsheets/example?tracking=secret",
      sourceLabel: "IMF: Special Drawing Rights",
      sourceKind: "primary",
      pagePath: "/claims/xrp-global-currency",
    })).toEqual({
      event: "source_opened",
      properties: {
        claim_slug: "xrp-global-currency",
        source_url: "https://www.imf.org/en/about/factsheets/example",
        source_domain: "www.imf.org",
        source_label: "IMF: Special Drawing Rights",
        source_kind: "primary",
        page_path: "/claims/xrp-global-currency",
      },
    });
  });

  it("never includes copied text", () => {
    expect(shortAnswerCopied({
      claimSlug: "xrp-global-currency",
      copySurface: "claim-response",
      pagePath: "/claims/xrp-global-currency",
    })).toEqual({
      event: "short_answer_copied",
      properties: {
        claim_slug: "xrp-global-currency",
        copy_surface: "claim-response",
        page_path: "/claims/xrp-global-currency",
      },
    });
  });
});
```

- [ ] **Step 2: Run and verify failure**

Run: `npm test -- lib/analytics/events.test.ts`

Expected: FAIL because `events.ts` does not exist.

- [ ] **Step 3: Implement the minimal typed builders**

`sourceOpened()` strips query strings and hashes with `new URL()`. `shortAnswerCopied()` accepts only the three explicit properties shown in the test. Both return `{event, properties}` objects and no open-ended metadata bag.

- [ ] **Step 4: Run and verify success**

Run: `npm test -- lib/analytics/events.test.ts`

Expected: PASS with 2 tests.

- [ ] **Step 5: Commit**

```powershell
git add lib/analytics/events.ts lib/analytics/events.test.ts
git commit -m "test: define privacy-safe analytics events"
```

### Task 3: Initialize PostHog conditionally

**Files:**
- Create: `lib/analytics/posthog.ts`
- Create: `components/PostHogProvider.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Implement one client initializer**

`lib/analytics/posthog.ts` exports `getPostHog()` and `capture(event)`. Use this exact initialization contract:

```ts
import posthog from "posthog-js";

type AnalyticsEvent = {
  event: "source_opened" | "short_answer_copied";
  properties: Record<string, string>;
};

let initialized = false;

export function getPostHog() {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) return null;
  if (!initialized) {
    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
      autocapture: false,
      capture_pageview: false,
      capture_pageleave: false,
      disable_session_recording: true,
      person_profiles: "never",
      persistence: "memory",
    });
    initialized = true;
  }
  return posthog;
}

export function capture({event, properties}: AnalyticsEvent) {
  getPostHog()?.capture(event, properties);
}
```

- [ ] **Step 2: Add the provider at the root**

`PostHogProvider` is a client component that initializes PostHog in `useEffect` and renders `children` unchanged. Wrap the existing body content inside it while preserving Vercel Analytics.

- [ ] **Step 3: Verify the disabled path**

Run without PostHog environment variables:

```powershell
npm run typecheck
npm run build
```

Expected: PASS; the site works with no analytics request.

- [ ] **Step 4: Commit**

```powershell
git add lib/analytics/posthog.ts components/PostHogProvider.tsx app/layout.tsx
git commit -m "feat: initialize optional anonymous PostHog analytics"
```

### Task 4: Track source openings

**Files:**
- Create: `components/TrackedExternalLink.tsx`
- Modify: `app/claims/xrp-global-currency/page.tsx`

- [ ] **Step 1: Implement a focused tracked link**

`TrackedExternalLink` accepts `href`, `claimSlug`, `sourceLabel`, `sourceKind`, and `children`. On click it captures `source_opened` using the current pathname, then allows the normal `_blank` navigation. It forwards `rel="noreferrer"` and does not prevent default navigation.

- [ ] **Step 2: Add explicit source classification**

Add `kind: "primary"` to each current XRP source record. Replace only the source-list anchors with `TrackedExternalLink`; internal navigation remains untracked.

- [ ] **Step 3: Typecheck and commit**

```powershell
npm run typecheck
git add components/TrackedExternalLink.tsx app/claims/xrp-global-currency/page.tsx
git commit -m "feat: track external evidence source openings"
```

### Task 5: Track only successful copies

**Files:**
- Create: `lib/clipboard.ts`
- Create: `lib/clipboard.test.ts`
- Modify: `components/CopyBox.tsx`
- Modify: `app/claims/xrp-global-currency/page.tsx`

- [ ] **Step 1: Extract and test clipboard success**

`copyText(text)` first awaits `navigator.clipboard.writeText`. The DOM fallback returns the boolean result of `document.execCommand("copy")`. It returns `false` when both methods fail.

- [ ] **Step 2: Update `CopyBox` props**

Add required `claimSlug` and optional `copySurface = "claim-response"`. After `copyText(text)` returns true, capture `short_answer_copied` and show the success state. On false, show an accessible failure message and do not capture.

- [ ] **Step 3: Pass the XRP claim slug**

```tsx
<CopyBox text={copyText} claimSlug="xrp-global-currency" />
```

- [ ] **Step 4: Run tests and commit**

```powershell
npm test
npm run typecheck
git add lib/clipboard.ts lib/clipboard.test.ts components/CopyBox.tsx app/claims/xrp-global-currency/page.tsx
git commit -m "feat: track successful short-answer copies"
```

### Task 6: Update privacy disclosure and verify live events

**Files:**
- Modify: `app/privacy/page.tsx`

- [ ] **Step 1: Update the Hebrew analytics disclosure**

State that the site uses Vercel Web Analytics and PostHog for aggregated anonymous events, specifically source openings and successful answer copies. State that copied text, names, email addresses, and session recordings are not collected in this trial.

- [ ] **Step 2: Run the full local verification**

```powershell
npm test
npm run typecheck
npm run build
```

Expected: all commands PASS.

- [ ] **Step 3: Configure the public PostHog variables in the intended preview environment**

Use the connected Studio Haim default-project public project key and ingestion host. Do not commit environment values.

- [ ] **Step 4: Trigger one source click and one successful copy in preview**

Expected: PostHog receives `source_opened` and `short_answer_copied`, with no session replay and no copied-text property.

- [ ] **Step 5: Query PostHog to verify payloads**

Read the two event types from the connected project and confirm their property allowlists. If unexpected properties are present, stop before deployment and correct initialization.

- [ ] **Step 6: Commit**

```powershell
git add app/privacy/page.tsx
git commit -m "docs: disclose anonymous PostHog event measurement"
```
