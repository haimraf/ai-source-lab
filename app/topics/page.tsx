import { ClaimSearch } from "@/components/ClaimSearch";
import { claimRecords } from "@/lib/claims-db";
import { standaloneClaimRecords } from "@/lib/standalone-claims";
import { getClaimsForTopicCluster, getTopicClusterStats, topicClusters, type TopicCluster } from "@/lib/topic-clusters";

export const metadata = {
  title: "מפת נושאים | מקור בדיקה",
  description: "אשכולות התוכן והבדיקות של מקור בדיקה.",
};

function formatDate(value: string) {
  const [year, month, day] = value.split("-");
  return `${Number(day)}.${Number(month)}.${year.slice(2)}`;
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

function ClusterCard({ cluster }: { cluster: TopicCluster }) {
  const stats = getTopicClusterStats(cluster);
  const claims = getClaimsForTopicCluster(cluster);

  return (
    <a id={cluster.slug} className="topic-card" href={cluster.path}>
      <span className="topic-label">{cluster.eyebrow}</span>
      <h3>{cluster.shortTitle}</h3>
      <p>{cluster.description}</p>
      <small>{stats.publishedCount} בדיקות פורסמו · {stats.plannedCount} בתכנון · עודכן {formatDate(stats.updated)}</small>
      {claims.length ? <span className="status-chip">בדיקה אחרונה: {claims[0].title}</span> : null}
    </a>
  );
}

const sortedClusters = [...topicClusters].sort((a, b) => b.priority - a.priority || b.updated.localeCompare(a.updated));
const allVisibleClaims = [...claimRecords, ...standaloneClaimRecords];
const sortedClaims = [...allVisibleClaims].sort((a, b) => b.updated.localeCompare(a.updated) || b.priority - a.priority);

export default function TopicsPage() {
  return (
    <article>
      <section className="hero">
        <span className="badge">🧭 מפת נושאים</span>
        <h1>טענה אחת כמעט תמיד מחוברת לעוד חמש.</h1>
        <p className="lead">לכן האתר בנוי גם לפי אשכולות ותגיות. כל אשכול מפריד בין המקור, הטענות שנוספו לו, השאלות הציבוריות והחלקים שעדיין פתוחים לבדיקה.</p>
      </section>

      <ClaimSearch />

      <section className="box answer">
        <div className="section-head">
          <div>
            <span className="topic-label">🗂️ אשכולות</span>
            <h2>אשכולות שמחזיקים בדיקות, לא רק תגיות.</h2>
          </div>
          <p>כל אשכול הוא עמוד עבודה עצמאי: בדיקות שפורסמו, שאלות להמשך, ומפת מקור מול פרשנות.</p>
        </div>
        <div className="topic-grid">
          {sortedClusters.map((cluster) => (
            <ClusterCard cluster={cluster} key={cluster.slug} />
          ))}
        </div>
      </section>

      <section id="all-checks" className="box answer">
        <div className="section-head">
          <div><span className="topic-label">📚 כל הבדיקות</span><h2>כל הבדיקות שפורסמו באתר.</h2></div>
          <p>ברגע שעולה בדיקה חדשה, היא מופיעה גם כאן — לפי נושא, תגיות, תאריך ומסקנה קצרה.</p>
        </div>
        <div className="grid">
          {sortedClaims.map((claim) => (
            <article className="card" key={claim.path}>
              <a href={claim.path}>
                <div className="card-meta"><span>{claim.kicker}</span><span>•</span><span>{formatDate(claim.updated)}</span></div>
                <h3>{claim.title}</h3>
                <p className="small">{claim.description}</p>
                <TagList tags={claim.tags} limit={4} />
                <span className="status-chip">{claim.verdict}</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="box method-note">
        <h2>למה אשכול ולא עמוד ענק?</h2>
        <p>עמוד אחד צריך לענות על שאלה אחת. אשכול מאפשר לקשר בין שאלות בלי לערבב אותן למסקנה אחת גדולה, וזה גם מכין את האתר לניהול עתידי דרך לוח בקרה.</p>
      </section>
    </article>
  );
}
