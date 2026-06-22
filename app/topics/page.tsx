import { ClaimSearch } from "@/components/ClaimSearch";
import { getPublishedClaimContent } from "@/lib/content/claim-loader";
import { getClaimsForTopicCluster, topicClusters, type TopicCluster } from "@/lib/topic-clusters";
import { getTopicClusterStats } from "@/lib/topic-stats";

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

export default function TopicsPage() {
  const claims = getPublishedClaimContent();

  return (
    <main className="container topics-page">
      <section className="hero">
        <span className="eyebrow">מפת נושאים</span>
        <h1>אשכולות הבדיקה של מקור בדיקה</h1>
        <p>
          כל אשכול מחבר בין טענות קרובות, מקורות חוזרים וקפיצות לוגיות דומות. המטרה היא לאסוף בדיקות קטנות לתמונה רחבה יותר — בלי להפוך נושא אחד לסיפור כוללני.
        </p>
      </section>

      <ClaimSearch claims={claims} />

      <section className="topic-grid" aria-label="אשכולות תוכן">
        {sortedClusters.map((cluster) => <ClusterCard cluster={cluster} key={cluster.slug} />)}
      </section>
    </main>
  );
}
