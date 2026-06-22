# Dashboard Architecture Decision Record Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Close Stage 1 by adding a provider-agnostic dashboard foundation ADR that makes every required architecture decision without implementing runtime infrastructure.

**Architecture:** The ADR records a two-layer model: Git is canonical for published public content and a future database is canonical for internal operational records. Publishing is modeled as a one-way validated snapshot into a change set or Pull Request, while provider selection and all runtime implementation remain deferred to Stage 2 or later.

**Tech Stack:** Markdown documentation, Git, existing Vitest content checks, TypeScript compiler, Next.js production build.

---

## File map

- Create `docs/adr/0001-dashboard-foundation.md`: accepted provider-agnostic architecture decision.
- Modify `docs/editorial-roadmap.md`: mark only Stage 13 / dashboard ADR complete after merge and passing checks.
- Modify `docs/superpowers/plans/2026-06-22-editorial-dashboard-roadmap-design.md`: record Stage 1 completion and verification after merge.
- Do not modify application code, routes, content records, dependencies, sitemap, `llms.txt`, auth, database, storage or publishing implementation.

### Task 1: Write the dashboard foundation ADR

**Files:**
- Create: `docs/adr/0001-dashboard-foundation.md`
- Reference: `docs/superpowers/specs/2026-06-22-dashboard-architecture-decision-record-design.md`

- [ ] **Step 1: Add the ADR header and decision context**

Create ADR 0001 with status `Accepted`, date `2026-06-22`, and an explicit scope statement that the document does not select or implement auth, DB, storage, routes, sessions, migrations, uploads, UI or publishing workflows.

- [ ] **Step 2: Record the selected architecture and rejected alternatives**

State the selected provider-agnostic two-layer architecture and record these rejected alternatives:

1. direct DB-backed public publishing;
2. Git-only storage for operational records;
3. immediate binding to a specific provider.

- [ ] **Step 3: Close all required Stage 1 decisions**

Add explicit sections for:

1. source of truth;
2. Git-backed publishing;
3. content type, shared record and operational record boundaries;
4. preview, staging and production;
5. initial `admin` and `read_only` auth model;
6. minimal PII, 90-day rejected-submission retention and 24-month audit retention;
7. private object storage and explicit media promotion;
8. append-only audit, Git versioning and controlled rollback;
9. open-format export, encrypted backup and restore drill;
10. one-way sync contract using change set ID, base Git SHA and schema version;
11. separate content/operational schema versions and controlled migrations.

- [ ] **Step 4: Add the entity ownership matrix and recovery prerequisites**

Map every current and planned entity to Git, DB or a one-way promotion boundary. Require JSON/JSONL export, original media plus checksum manifest, off-account encrypted backup and a clean-environment restore drill before real operational data is introduced.

- [ ] **Step 5: Add consequences, failure behavior and future ADR triggers**

Document that validation failures, Git conflicts and deployment failures stop publication without changing live content. Require a future ADR before replacing Git as public source of truth, adding direct DB publishing, expanding roles materially, changing retention policy or adopting provider-specific architecture.

### Task 2: Verify ADR completeness and repository health

**Files:**
- Verify: `docs/adr/0001-dashboard-foundation.md`
- Verify protected surfaces remain unchanged.

- [ ] **Step 1: Scan for incomplete markers and provider binding**

Run:

```powershell
rg -n "TBD|TODO|FIXME|Supabase|Firebase|Auth\.js|Clerk|Vercel Blob" docs\adr\0001-dashboard-foundation.md
```

Expected: no matches.

- [ ] **Step 2: Verify all eleven decision headings and entity mappings**

Run focused `rg` searches for the eleven required section titles plus `Content Type`, `Shared Record`, `Operational Record`, `Claim Submission`, `Editorial Task`, `Review Decision`, `Publish Request`, `Audit Event`, `Analytics Summary` and `Maintenance Finding`.

Expected: every required decision and entity is represented explicitly.

- [ ] **Step 3: Run repository gates independently**

Run:

```text
npm test
npm run check:content
npm run typecheck
npm run build
```

Expected: all commands exit 0 and the build remains at 44 routes with no new dashboard route.

- [ ] **Step 4: Inspect scope**

Run:

```text
git diff --check
git status --short
git diff -- app lib components content public package.json package-lock.json
```

Expected: no runtime, content, dependency or public-discovery changes.

### Task 3: Merge, re-verify and update Stage 1 status

**Files:**
- Modify: `docs/editorial-roadmap.md`
- Modify: `docs/superpowers/plans/2026-06-22-editorial-dashboard-roadmap-design.md`

- [ ] **Step 1: Commit the approved design, implementation plan and ADR**

Stage only:

```text
docs/superpowers/specs/2026-06-22-dashboard-architecture-decision-record-design.md
docs/superpowers/plans/2026-06-22-dashboard-architecture-decision-record.md
docs/adr/0001-dashboard-foundation.md
```

Commit with `docs: add dashboard foundation ADR`.

- [ ] **Step 2: Merge to `main` and rerun repository gates**

Merge the feature branch, then rerun `npm test`, `npm run check:content`, `npm run typecheck` and `npm run build` from `main`.

- [ ] **Step 3: Update only Stage 1 statuses**

After the post-merge gates pass:

- change Stage 13 in `docs/editorial-roadmap.md` from ⏳ to ✅ and add concise “what” and “how verified” lines;
- add `**סטטוס:** ✅ הושלם ב־2026-06-22`, “what” and “how verified” lines under Stage 1 in the primary roadmap plan;
- leave Stage 2 as ⏳ and do not add 🌐 because the ADR has no public runtime surface.

- [ ] **Step 4: Commit and push the status update**

Commit only the two status documents with `docs: mark dashboard ADR complete`, push `main`, and verify the exact GitHub CI SHA. No Vercel production verification is required for the documentation-only stage.
