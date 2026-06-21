# Read-only Content Status Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a static, noindex, read-only report at `/internal/content-status` that derives safe editorial summaries from all ten claim content records at build time.

**Architecture:** A pure helper maps full `ClaimContent` records to a deliberately limited status DTO. A server component passes `claimContentRecords` into that helper and renders a semantic table with page-scoped CSS; no client code, request state, persistence, or editing surface is introduced.

**Tech Stack:** TypeScript, React 19 server components, Next.js App Router, CSS Modules, Vitest, React server rendering tests.

---

## File map

- Create `lib/content/claim-content-status.ts`: pure status DTO and derivation functions.
- Create `lib/content/claim-content-status.test.ts`: real-registry, degraded-record, and immutability tests.
- Create `app/internal/content-status/page.tsx`: static read-only report and noindex metadata.
- Create `app/internal/content-status/page.module.css`: report-only responsive table styles.
- Create `app/internal/content-status/page.test.tsx`: static rendering, metadata, control absence, and sitemap exclusion tests.

### Task 1: Define the helper contract with failing tests

**Files:**
- Create: `lib/content/claim-content-status.test.ts`
- Create later: `lib/content/claim-content-status.ts`

- [ ] **Step 1: Record the sitemap baseline**

Run:

```powershell
Get-FileHash -Algorithm SHA256 public\sitemap.xml
```

Expected: capture the current hash for final byte-parity comparison.

- [ ] **Step 2: Write the all-record helper test**

Create the test file and import the not-yet-created API:

```ts
import { describe, expect, it } from "vitest";

import { claimContentRecords } from "../../content/claims";
import type { ClaimContent } from "./claim-schema";
import { editorialChecklistFields } from "./claim-schema";
import {
  getAllClaimsContentStatus,
  getClaimContentStatus,
} from "./claim-content-status";

describe("claim content status", () => {
  it("summarizes all ten content records", () => {
    const summaries = getAllClaimsContentStatus(claimContentRecords);

    expect(summaries).toHaveLength(10);
    expect(summaries.map((summary) => summary.slug)).toEqual(
      claimContentRecords.map((claim) => claim.slug),
    );
    for (const [index, summary] of summaries.entries()) {
      const claim = claimContentRecords[index];
      expect(summary).toMatchObject({
        slug: claim.slug,
        path: claim.path,
        title: claim.title,
        editorialStatus: claim.workflow.editorialStatus,
        sourceStatus: claim.workflow.sourceStatus,
        seoStatus: claim.workflow.seoStatus,
        testStatus: claim.workflow.testStatus,
        needsUpdate: false,
        checkedAt: claim.workflow.checkedAt,
        sourceCount: claim.sources.length,
        hasSources: true,
        checklistCompleted: editorialChecklistFields.length,
        checklistTotal: editorialChecklistFields.length,
        incompleteChecklistFields: [],
        missingMetadataFields: [],
        needsRefresh: false,
        mobileReviewed: true,
      });
      expect(summary.hasShareCopy).toBe(Boolean(claim.shareCopy?.trim()));
    }
  });
});
```

- [ ] **Step 3: Add degraded-record and immutability tests**

Clone one real record into a deliberately incomplete runtime fixture without changing the original:

```ts
it("reports degraded content without exposing internal workflow notes", () => {
  const source = claimContentRecords[0];
  const degraded = {
    ...source,
    title: " ",
    description: " ",
    path: "" as ClaimContent["path"],
    sources: [],
    shareCopy: " ",
    seo: { ...source.seo, title: " ", description: " " },
    metadataOverrides: undefined,
    workflow: {
      ...source.workflow,
      needsUpdate: true,
      updateReason: "must not leave the helper",
      sourceStatus: "needs-refresh",
      checklist: {
        ...source.workflow.checklist,
        conclusionWordingChecked: false,
        mobileReviewed: false,
      },
    },
  } satisfies ClaimContent;

  const summary = getClaimContentStatus(degraded);

  expect(summary).toMatchObject({
    sourceCount: 0,
    hasSources: false,
    hasShareCopy: false,
    checklistCompleted: editorialChecklistFields.length - 2,
    incompleteChecklistFields: ["conclusionWordingChecked", "mobileReviewed"],
    missingMetadataFields: ["title", "description", "canonical"],
    needsRefresh: true,
    mobileReviewed: false,
  });
  expect(summary).not.toHaveProperty("updateReason");
});

it("does not mutate input records", () => {
  const before = JSON.stringify(claimContentRecords);
  getAllClaimsContentStatus(claimContentRecords);
  expect(JSON.stringify(claimContentRecords)).toBe(before);
});
```

- [ ] **Step 4: Run the focused test and verify RED**

Run:

```text
npx vitest run lib/content/claim-content-status.test.ts
```

Expected: FAIL because `claim-content-status.ts` does not exist.

### Task 2: Implement the pure status helper

**Files:**
- Create: `lib/content/claim-content-status.ts`
- Test: `lib/content/claim-content-status.test.ts`

- [ ] **Step 1: Define the safe DTO**

Export these types without internal notes or raw claim objects:

```ts
import {
  editorialChecklistFields,
  type ClaimContent,
  type EditorialChecklist,
} from "./claim-schema";

export type ClaimChecklistField = (typeof editorialChecklistFields)[number];
export type BasicMetadataField = "title" | "description" | "canonical";

export interface ClaimContentStatus {
  slug: string;
  path: ClaimContent["path"];
  title: string;
  editorialStatus: ClaimContent["workflow"]["editorialStatus"];
  sourceStatus: ClaimContent["workflow"]["sourceStatus"];
  seoStatus: ClaimContent["workflow"]["seoStatus"];
  testStatus: ClaimContent["workflow"]["testStatus"];
  needsUpdate: boolean;
  checkedAt: string;
  sourceCount: number;
  hasSources: boolean;
  hasShareCopy: boolean;
  checklistCompleted: number;
  checklistTotal: number;
  incompleteChecklistFields: readonly ClaimChecklistField[];
  missingMetadataFields: readonly BasicMetadataField[];
  needsRefresh: boolean;
  mobileReviewed: boolean;
}
```

- [ ] **Step 2: Implement one-record derivation**

Use `editorialChecklistFields.filter` with exact `=== true` completion. Resolve effective metadata in the approved precedence order and treat values as present only when they are strings with non-whitespace content. Return a new DTO containing only the approved fields.

The key logic is:

```ts
const checklist = claim.workflow.checklist as Partial<EditorialChecklist>;
const incompleteChecklistFields = editorialChecklistFields.filter(
  (field) => checklist[field] !== true,
);
const effectiveMetadata = {
  title: claim.metadataOverrides?.title ?? claim.seo.title ?? claim.title,
  description:
    claim.metadataOverrides?.description ?? claim.seo.description ?? claim.description,
  canonical: claim.metadataOverrides?.canonical ?? claim.path,
};
const missingMetadataFields = (
  Object.keys(effectiveMetadata) as BasicMetadataField[]
).filter((field) => !effectiveMetadata[field]?.trim());
```

Set `needsRefresh` only from `needsUpdate === true` or `sourceStatus === "needs-refresh"`. Set `mobileReviewed` only from exact `=== true`.

- [ ] **Step 3: Implement plural mapping**

```ts
export function getAllClaimsContentStatus(
  claims: readonly ClaimContent[],
): readonly ClaimContentStatus[] {
  return claims.map(getClaimContentStatus);
}
```

- [ ] **Step 4: Run focused tests and verify GREEN**

Run:

```text
npx vitest run lib/content/claim-content-status.test.ts
```

Expected: all helper tests pass.

### Task 3: Define the page contract with a failing test

**Files:**
- Create: `app/internal/content-status/page.test.tsx`
- Create later: `app/internal/content-status/page.tsx`
- Create later: `app/internal/content-status/page.module.css`

- [ ] **Step 1: Write the static rendering and metadata test**

```tsx
import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { claimContentRecords } from "../../../content/claims";
import ContentStatusPage, { metadata } from "./page";

describe("read-only content status page", () => {
  it("renders every claim in a static semantic report", () => {
    const html = renderToStaticMarkup(<ContentStatusPage />);

    for (const claim of claimContentRecords) {
      expect(html).toContain(claim.slug);
      expect(html).toContain(claim.title);
    }
    expect(html).toContain("<table");
    expect(html).toContain("9/9");
    expect(html).not.toMatch(/<(form|input|select|button)\b/i);
    expect(html).not.toContain("href=");
  });

  it("exports noindex and nofollow metadata", () => {
    expect(metadata.robots).toEqual({ index: false, follow: false });
  });

  it("is absent from the public sitemap", () => {
    const sitemap = readFileSync("public/sitemap.xml", "utf8");
    expect(sitemap).not.toContain("/internal/content-status");
  });
});
```

- [ ] **Step 2: Run the page test and verify RED**

Run:

```text
npx vitest run app/internal/content-status/page.test.tsx
```

Expected: FAIL because the page module does not exist.

### Task 4: Implement the static report page

**Files:**
- Create: `app/internal/content-status/page.tsx`
- Create: `app/internal/content-status/page.module.css`
- Test: `app/internal/content-status/page.test.tsx`

- [ ] **Step 1: Export page metadata and build-time summaries**

In the server component, import `Metadata`, `claimContentRecords`, the plural helper, and the CSS module. Export a descriptive title/description plus:

```ts
robots: {
  index: false,
  follow: false,
}
```

Compute summaries from `getAllClaimsContentStatus(claimContentRecords)`. Do not use dynamic APIs or a client directive.

- [ ] **Step 2: Render the read-only report**

Render an `<article>` with a short disclosure that `/internal` is not access control, aggregate text derived from the summaries, and one semantic table. Use exactly these column groups:

- claim title, slug, and path as text;
- workflow statuses;
- checklist completed/total and incomplete keys;
- metadata completeness;
- sources;
- share copy;
- mobile;
- checked date;
- refresh/update state.

Use plain text and `<span>` elements only. Do not render anchors, forms, buttons, inputs, selects, event handlers, or client state.

- [ ] **Step 3: Add scoped report styles**

Create a CSS Module with only page-local classes for the report header, aggregate summary, overflow wrapper, table, status text, and narrow-screen spacing. Use `overflow-x: auto` for the table wrapper. Do not edit global styles or existing production components.

- [ ] **Step 4: Run page and helper tests and verify GREEN**

Run:

```text
npx vitest run lib/content/claim-content-status.test.ts app/internal/content-status/page.test.tsx
```

Expected: both files pass; all ten claims render, metadata is noindex/nofollow, no controls or links appear, and the sitemap excludes the route.

### Task 5: Verify parity, commit, push, and stop

**Files:**
- Verify only the five new production/test files and committed design/plan documents.
- Do not modify existing production pages, content records, metadata helpers, structured-data helpers, sitemap generation, navigation, or global styles.

- [ ] **Step 1: Inspect scope and protected files**

Run:

```text
git diff --check
git status --short
git diff -- public/sitemap.xml app/layout.tsx app/claims/[slug]/page.tsx lib/content/claim-structured-data.ts lib/content/claim-sitemap.ts components
```

Expected: no diff in protected files and no unrelated staged files.

- [ ] **Step 2: Verify sitemap byte parity**

Run:

```powershell
Get-FileHash -Algorithm SHA256 public\sitemap.xml
```

Expected: exactly the Task 1 baseline hash.

- [ ] **Step 3: Run all acceptance gates**

Run independently:

```text
npm test
npm run check:content
npm run typecheck
npm run build
```

Expected: all commands exit 0. The build reports 40/40 generated pages and lists `/internal/content-status` as a static route.

- [ ] **Step 4: Commit only Stage 12 files**

Stage the five new implementation/test files and this committed plan history. Exclude `.codex-remote-attachments/` and unrelated files.

Commit message:

```text
feat: add read-only content status page
```

- [ ] **Step 5: Push and verify remote systems**

Push `main`, verify the exact SHA in GitHub Actions, and verify the new Vercel Production deployment is Ready. Confirm the production URL returns 200 and includes a robots `noindex, nofollow` directive.

- [ ] **Step 6: Report and stop**

Report the final SHA, changed files, 40/40 route count, unchanged sitemap hash, noindex/sitemap status, ten rendered claims, unchanged claim metadata/JSON-LD/routes, and CI/Vercel results. Stop after the Stage 7–12 regression review; do not start Dashboard, CMS, auth, database, Admin Panel, or another content stage without a new explicit request.
