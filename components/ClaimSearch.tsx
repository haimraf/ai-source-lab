"use client";

import { useMemo, useState } from "react";
import { allClaimTags, claimRecords } from "@/lib/claims-db";

type Claim = (typeof claimRecords)[number];

function normalizeSearchText(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0591-\u05C7]/g, "")
    .toLowerCase()
    .replace(/["'׳״.,:;!?()[\]{}\\/|_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildSearchText(claim: Claim) {
  return normalizeSearchText([
    claim.title,
    claim.description,
    claim.kicker,
    claim.verdict,
    claim.path,
    ...claim.tags,
  ].join(" "));
}

function scoreClaim(claim: Claim, query: string, activeTag: string | null) {
  const normalizedQuery = normalizeSearchText(query);
  const normalizedTitle = normalizeSearchText(claim.title);
  const normalizedVerdict = normalizeSearchText(claim.verdict);
  const normalizedTags = claim.tags.map(normalizeSearchText);
  const searchText = buildSearchText(claim);

  let score = 0;

  if (activeTag) {
    const normalizedActiveTag = normalizeSearchText(activeTag);
    if (!normalizedTags.includes(normalizedActiveTag)) return 0;
    score += 18;
  }

  if (!normalizedQuery) return score || 1;

  const words = normalizedQuery.split(" ").filter(Boolean);

  for (const word of words) {
    if (normalizedTitle.includes(word)) score += 9;
    if (normalizedTags.some((tag) => tag.includes(word))) score += 7;
    if (normalizedVerdict.includes(word)) score += 5;
    if (searchText.includes(word)) score += 2;
  }

  if (normalizedTitle.includes(normalizedQuery)) score += 8;
  if (normalizedTags.includes(normalizedQuery)) score += 10;

  return score;
}

function getResults(query: string, activeTag: string | null) {
  const scored = claimRecords
    .map((claim) => ({ claim, score: scoreClaim(claim, query, activeTag) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || b.claim.updated.localeCompare(a.claim.updated));

  if (!query.trim() && !activeTag) return scored.slice(0, 5);
  return scored;
}

export function ClaimSearch({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const results = useMemo(() => getResults(query, activeTag), [query, activeTag]);
  const visibleTags = allClaimTags.slice(0, compact ? 10 : 18);
  const hasFilter = query.trim().length > 0 || activeTag;

  function clearSearch() {
    setQuery("");
    setActiveTag(null);
  }

  function chooseTag(tag: string) {
    setActiveTag((current) => (current === tag ? null : tag));
  }

  return (
    <section id="find-check" className="search-panel box" aria-labelledby="claim-search-title">
      <div className="search-head">
        <span className="topic-label">🔎 חיפוש חי</span>
        <div>
          <h2 id="claim-search-title">מצא בדיקה לפי טענה, מקור או תגית.</h2>
          <p className="small">בלי Enter ובלי עמוד תוצאות. מקלידים או בוחרים תגית — והבדיקות מסתדרות מיד.</p>
        </div>
      </div>

      <label className="search-label" htmlFor="claim-search-input">מה לבדוק?</label>
      <div className="search-input-row">
        <input
          id="claim-search-input"
          className="search-input"
          type="search"
          inputMode="search"
          autoComplete="off"
          placeholder="לדוגמה: NASA, אג׳נדה, Chemtrails, XRP, מקור רשמי"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {hasFilter ? <button className="search-clear" type="button" onClick={clearSearch}>ניקוי</button> : null}
      </div>

      <div className="quick-tags" aria-label="תגיות מהירות">
        {visibleTags.map((tag) => (
          <button
            className={activeTag === tag ? "tag-chip tag-button active" : "tag-chip tag-button"}
            key={tag}
            type="button"
            onClick={() => chooseTag(tag)}
            aria-pressed={activeTag === tag}
          >
            #{tag}
          </button>
        ))}
      </div>

      <p className="search-count" role="status" aria-live="polite">
        {hasFilter ? `${results.length} תוצאות נמצאו` : "מציג בדיקות אחרונות. חיפוש יצמצם את הרשימה."}
      </p>

      <div className="search-results">
        {results.length ? (
          results.map(({ claim }) => (
            <a className="search-result" href={claim.path} key={claim.path}>
              <span className="search-result-topic">{claim.kicker}</span>
              <strong>{claim.title}</strong>
              <small>{claim.verdict}</small>
              <span className="search-result-tags">{claim.tags.slice(0, 4).map((tag) => `#${tag}`).join("  ")}</span>
            </a>
          ))
        ) : (
          <div className="search-empty">
            <strong>לא נמצאה בדיקה מתאימה.</strong>
            <p>אפשר לנסות תגית רחבה יותר, או לשלוח את הטענה לבדיקה עתידית.</p>
            <a className="button-secondary" href="/suggest-claim">הצע טענה</a>
          </div>
        )}
      </div>
    </section>
  );
}
