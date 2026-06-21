"use client";

import { useMemo, useState } from "react";
import { allClaimTags, claimRecords } from "@/lib/claims-db";
import { getTopicClusterBySlug } from "@/lib/topic-clusters";

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

function getClusterTerms(claim: Claim) {
  const cluster = getTopicClusterBySlug(claim.cluster);

  if (!cluster) return [claim.cluster];

  return [
    cluster.slug,
    cluster.title,
    cluster.shortTitle,
    cluster.eyebrow,
    cluster.description,
    ...cluster.sourceMap.flatMap(([label, explanation]) => [label, explanation]),
  ];
}

function buildSearchText(claim: Claim) {
  return normalizeSearchText([
    claim.title,
    claim.description,
    claim.kicker,
    claim.verdict,
    claim.path,
    claim.cluster,
    ...claim.tags,
    ...getClusterTerms(claim),
  ].join(" "));
}

function getClaimTopicLabel(claim: Claim) {
  const cluster = getTopicClusterBySlug(claim.cluster);
  if (!cluster) return claim.kicker;
  return `${cluster.shortTitle} · ${claim.kicker}`;
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

const priorityTags = ["AI", "BCI", "Chemtrails", "NASA", "אג׳נדה 2030", "מקור רשמי", "תודעה", "XRP", "עיר 15 דקות"];

function sortTagsForDisplay(tags: readonly string[]) {
  return [...tags].sort((firstTag, secondTag) => {
    const firstPriority = priorityTags.indexOf(firstTag);
    const secondPriority = priorityTags.indexOf(secondTag);

    if (firstPriority !== -1 || secondPriority !== -1) {
      if (firstPriority === -1) return 1;
      if (secondPriority === -1) return -1;
      return firstPriority - secondPriority;
    }

    return firstTag.localeCompare(secondTag, "he");
  });
}

export function ClaimSearch({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [showAllTags, setShowAllTags] = useState(false);

  const results = useMemo(() => getResults(query, activeTag), [query, activeTag]);
  const sortedTags = useMemo(() => sortTagsForDisplay(allClaimTags), []);
  const initialTagCount = compact ? 10 : 14;
  const visibleTags = showAllTags ? sortedTags : sortedTags.slice(0, initialTagCount);
  const hiddenTagCount = Math.max(sortedTags.length - initialTagCount, 0);
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
        <span className="topic-label">חיפוש במאגר</span>
        <div>
          <h2 id="claim-search-title">חיפוש בתוך בדיקות שכבר פורסמו.</h2>
          <p className="small">זה לא צ׳אט שבודק כל פרומפט בזמן אמת. כאן מחפשים בדיקה קיימת לפי טענה, מקור, מושג, אשכול או תגית. אם אין תוצאה — אפשר להציע טענה לבדיקה עתידית.</p>
        </div>
      </div>

      <div className="search-guide" aria-label="איך משתמשים בחיפוש">
        <div><strong>Input</strong><span>מילה, מקור או נושא: NASA, BCI, אג׳נדה, Chemtrails.</span></div>
        <div><strong>Output</strong><span>בדיקות קיימות עם שורה תחתונה, תגיות, אשכול וקישור לעמוד המלא.</span></div>
        <div><strong>תחום</strong><span>רק בדיקות שפורסמו באתר. לא כל האינטרנט בזמן אמת.</span></div>
      </div>

      <label className="search-label" htmlFor="claim-search-input">חיפוש במאגר הקיים</label>
      <div className="search-input-row">
        <input
          id="claim-search-input"
          className="search-input"
          type="search"
          inputMode="search"
          autoComplete="off"
          placeholder="לדוגמה: NASA, BCI, אג׳נדה, Chemtrails, XRP"
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
        {hiddenTagCount > 0 ? (
          <button
            className="tag-chip tag-more-button"
            type="button"
            onClick={() => setShowAllTags((current) => !current)}
            aria-expanded={showAllTags}
          >
            {showAllTags ? "פחות תגיות" : `עוד ${hiddenTagCount} תגיות`}
          </button>
        ) : null}
      </div>

      <p className="search-count" role="status" aria-live="polite">
        {hasFilter ? `${results.length} תוצאות נמצאו` : "מציג בדיקות אחרונות. הקלדה או תגית יצמצמו את הרשימה."}
      </p>

      <div className="search-results">
        {results.length ? (
          results.map(({ claim }) => (
            <a className="search-result" href={claim.path} key={claim.path}>
              <span className="search-result-topic">{getClaimTopicLabel(claim)}</span>
              <strong>{claim.title}</strong>
              <small>{claim.verdict}</small>
              <span className="search-result-tags">{claim.tags.slice(0, 4).map((tag) => `#${tag}`).join("  ")}</span>
            </a>
          ))
        ) : (
          <div className="search-empty">
            <strong>לא נמצאה בדיקה קיימת.</strong>
            <p>זה לא אומר שהטענה נכונה או לא נכונה. זה רק אומר שעדיין לא פורסמה עליה בדיקה באתר.</p>
            <a className="button-secondary" href="/suggest-claim">הצע טענה לבדיקה</a>
          </div>
        )}
      </div>
    </section>
  );
}
