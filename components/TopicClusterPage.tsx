import { getClaimsForTopicCluster, getTopicClusterStats, type TopicCluster } from "@/lib/topic-clusters";

function formatDate(value: string) {
  const [year, month, day] = value.split("-");
  return `${Number(day)}.${Number(month)}.${year.slice(2)}`;
}

function statusLabel(status: TopicCluster["status"]) {
  if (status === "active") return "אשכול פעיל";
  if (status === "planned") return "בתכנון";
  return "אשכול מתרחב";
}

function TagList({ tags, limit = 4 }: { tags: readonly string[]; limit?: number }) {
  return (
    <div className="tag-list" aria-label="תגיות">
      {tags.slice(0, limit).map((tag) => (
        <span className="tag-chip" key={tag}>#{tag}</span>
      ))}
    </div>
  );
}

export function TopicClusterPage({ cluster }: { cluster: TopicCluster }) {
  const claims = [...getClaimsForTopicCluster(cluster)].sort((a, b) => b.updated.localeCompare(a.updated));
  const stats = getTopicClusterStats(cluster);

  return (
    <article>
      <section className="hero">
        <span className="badge">{cluster.eyebrow}</span>
        <h1>{cluster.title}</h1>
        <p className="lead">{cluster.description}</p>
        <div className="hero-actions">
          <a className="button-primary" href="#published-checks">בדיקות באשכול</a>
          <a className="button-secondary" href="#claim-map">מפת המשך</a>
          <a className="button-secondary" href="/topics#find-check">חיפוש במאגר</a>
        </div>
      </section>

      <section className="trust-strip" aria-label="נתוני האשכול">
        <div className="trust-item"><strong>{stats.publishedCount}</strong>🧾 בדיקות פורסמו</div>
        <div className="trust-item"><strong>{stats.plannedCount}</strong>🧭 בדיקות בתכנון</div>
        <div className="trust-item"><strong>{formatDate(stats.updated)}</strong>🕒 עדכון אחרון</div>
        <div className="trust-item"><strong>{statusLabel(cluster.status)}</strong>🗂️ סטטוס</div>
      </section>

      <section id="published-checks" className="box answer">
        <div className="section-head">
          <div>
            <span className="topic-label">📚 בדיקות באשכול</span>
            <h2>בדיקות שפורסמו תחת {cluster.shortTitle}.</h2>
          </div>
          <p>כל בדיקה מקבלת עמוד עצמאי כדי לשמור על טענה אחת, מקורות ברורים ומסקנה ממוקדת.</p>
        </div>

        {claims.length ? (
          <div className="grid">
            {claims.map((claim) => (
              <article className="card" key={claim.path}>
                <a href={claim.path}>
                  <div className="card-meta"><span>{claim.kicker}</span><span>•</span><span>עודכן {formatDate(claim.updated)}</span></div>
                  <h3>{claim.title}</h3>
                  <p className="small">{claim.description}</p>
                  <TagList tags={claim.tags} />
                  <span className="status-chip">{claim.verdict}</span>
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="search-empty">
            <strong>עדיין אין בדיקות שפורסמו באשכול הזה.</strong>
            <p>האשכול נשמר כמסגרת עבודה כדי לאסוף טענות ומקורות לפני פרסום מסקנה.</p>
          </div>
        )}
      </section>

      <section id="claim-map">
        <div className="section-head">
          <div>
            <span className="topic-label">🧭 מפת המשך</span>
            <h2>שאלות שכדאי לבדוק בנפרד.</h2>
          </div>
          <p>החלק הזה מונע מצב שבו עמוד אחד הופך לערימה של טענות. כל שאלה תיפתח רק אחרי שיש מקורות מספיק טובים.</p>
        </div>
        <div className="process-grid">
          {cluster.plannedClaims.map((planned, index) => (
            <section className="process-card" key={planned.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{planned.title}</h3>
              <p><strong>{planned.status}</strong>. {planned.note}</p>
            </section>
          ))}
        </div>
      </section>

      <section className="box method-note">
        <h2>איך קוראים את האשכול הזה?</h2>
        <p>האשכול לא מחליף את עמודי הבדיקה. הוא מחבר ביניהם, מציג את גבולות הנושא, ומראה אילו שאלות עדיין לא קיבלו מסקנה.</p>
        <div className="source-levels">
          {cluster.sourceMap.map(([label, explanation]) => (
            <div className="source-level" key={label}>
              <strong>{label}</strong>
              <div>
                <h3>{label}</h3>
                <p>{explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="box answer">
        <h2>חסרה טענה באשכול?</h2>
        <p>אפשר להציע טענה חדשה, אבל היא לא תפורסם כמסקנה עד שיש מקור שניתן לפתוח ולבדוק.</p>
        <div className="hero-actions">
          <a className="button-primary" href="/suggest-claim">הצע טענה לבדיקה</a>
          <a className="button-secondary" href="/methodology">איך אנחנו בודקים</a>
        </div>
      </section>
    </article>
  );
}
