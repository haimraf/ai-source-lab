# CBDC Zotero Citations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce a reviewed list of primary CBDC sources already present in the local Zotero library without changing that library.

**Architecture:** Use the installed Zotero helper against Zotero Desktop's local API. Run bounded read-only searches, normalize the results into one Markdown evidence table, and explicitly record gaps rather than silently supplementing from the web.

**Tech Stack:** Zotero Desktop local API, bundled Python 3, Markdown

---

### Task 1: Verify Zotero Desktop connectivity

**Files:**
- Read: `C:/Users/lasto/.codex/plugins/cache/openai-curated-remote/zotero/0.1.2/skills/zotero/scripts/zotero.py`

- [ ] **Step 1: Run the helper status command**

```powershell
& 'C:\Users\lasto\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' `
  'C:\Users\lasto\.codex\plugins\cache\openai-curated-remote\zotero\0.1.2\skills\zotero\scripts\zotero.py' `
  status --json
```

Expected: JSON reports Zotero availability, local API preference, and port `23119` readiness.

- [ ] **Step 2: Enable the local API only if status reports it disabled**

```powershell
& 'C:\Users\lasto\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' `
  'C:\Users\lasto\.codex\plugins\cache\openai-curated-remote\zotero\0.1.2\skills\zotero\scripts\zotero.py' `
  enable --restart
```

Expected: Zotero restarts and the local API becomes reachable. If Zotero is absent, stop this plan and report that exact blocker.

### Task 2: Search the local library

**Files:**
- Create: `docs/research/cbdc-zotero-raw.json`

- [ ] **Step 1: Run bounded searches and save the combined output**

Run the helper separately for these terms and preserve each JSON result: `CBDC`, `central bank digital currency`, `digital shekel`, `Bank of Israel`, `BIS CBDC`, and `IMF CBDC`.

```powershell
& 'C:\Users\lasto\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' `
  'C:\Users\lasto\.codex\plugins\cache\openai-curated-remote\zotero\0.1.2\skills\zotero\scripts\zotero.py' `
  search 'CBDC' --json
```

Expected: each result includes title, creators, year, Zotero item key, and BibTeX key when available.

- [ ] **Step 2: Deduplicate by Zotero item key**

Keep one record per Zotero item key. Do not deduplicate by title alone because editions and institutional updates can share titles.

- [ ] **Step 3: Commit the raw search record**

```powershell
git add docs/research/cbdc-zotero-raw.json
git commit -m "research: capture local Zotero CBDC search results"
```

### Task 3: Produce the reviewed citation list

**Files:**
- Create: `docs/research/cbdc-primary-sources.md`

- [ ] **Step 1: Create the report with this exact structure**

```markdown
# CBDC primary sources from Zotero

Search date: 2026-06-18
Library scope: local Zotero library only

| Classification | Institution or author | Title | Year | Zotero key | BibTeX key | Relevance |
|---|---|---|---:|---|---|---|

## Gaps

- Record each missing primary-source category explicitly.

## Classification rule

- Primary: an official central bank, BIS, IMF, government, standards body, or original research publication.
- Institutional secondary: a reputable institution summarizing another issuer's work.
- Unsuitable: commentary, marketing, news, or an item without enough provenance to support the claim.
```

- [ ] **Step 2: Review every retained result against the classification rule**

Expected: every row has one classification and a short relevance note; promotional or unattributed items are excluded from the primary section.

- [ ] **Step 3: Confirm no Zotero write occurred**

Do not run `import-bibtex`, `import-ris`, `cite`, or connector save commands. The raw and reviewed Markdown files are the only outputs.

- [ ] **Step 4: Commit the reviewed report**

```powershell
git add docs/research/cbdc-primary-sources.md
git commit -m "research: review primary CBDC sources from Zotero"
```

