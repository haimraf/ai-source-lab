import type { Metadata } from "next";
import {
  getFeaturedClaimContent,
  getPublishedClaimContent,
  type ClaimContentIndexEntry,
} from "@/lib/content/claim-loader";
import { getClaimsForTopicCluster, topicClusters, type TopicCluster } from "@/lib/topic-clusters";
import { getTopicClusterStats } from "@/lib/topic-stats";
import { siteUrl } from "@/lib/site";

const title = "מקור בדיקה | טענות, מקורות ומסקנות";
const description = "אתר עברי שמחזיר טענות שרצות ברשת אל המקור שלהן.";
const ogImage = `${siteUrl}/api/og/home?version=og-v10`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "מקור בדיקה",
    locale: "he_IL",
    type: "website",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "מקור בדיקה - טענה אחת, מקור אחד, מסקנה זהירה" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

function formatDate(value: string) {
  const [year, month, day] = value.split("-");
  return `${Number(day)}.${Number(month)}.${year.slice(2)}`;
}

function featuredClaims(allClaims: readonly ClaimContentIndexEntry[]) {
  const featured = getFeaturedClaimContent();
  const others = allClaims.filter((claim) => claim.slug !== featured.slug).slice(0, 5);
  return [featured, ...others];
}

function ClaimCard({ claim, priority = false }: { claim: ClaimContentIndexEntry; priority?: boolean }) {
  return (
    <article className={`claim-card ${priority ? "claim-card-featured" : ""}`}>
      <span className="eyebrow">{claim.kicker}</span>
      <h3><a href={claim.path}>{claim.title}</a></h3>
      <p>{claim.description}</p>
      <div className="tag-list" aria-label="תגיות">
        {claim.tags.slice(0, 4).map((tag) => <span className="tag-chip" key={tag}>#{tag}</span>)}
      </div>
      <p className="small">עודכן: {formatDate(claim.updated)}</p>
    </article>
  );
}

function ClusterCard({ cluster }: { cluster: TopicCluster }) {
  const stats = getTopicClusterStats(cluster);
  const claims = getClaimsForTopicCluster(cluster).slice(0, 3);

  return (
    <article className="cluster-card">
      <span className="eyebrow">{cluster.eyebrow}</span>
      <h3><a href={cluster.path}>{cluster.title}</a></h3>
      <p>{cluster.description}</p>
      <p className="small">{stats.publishedCount} בדיקות · {stats.plannedCount} בתכנון · עודכן {formatDate(stats.updated)}</p>
      <ul>
        {claims.map((claim) => <li key={claim.slug}><a href={claim.path}>{claim.title}</a></li>)}
      </ul>
    </article>
  );
}

export default function Home() {
  const allClaims = getPublishedClaimContent();
  const featured = featuredClaims(allClaims);

  return (
    <main className="home-page">
      <section className="hero">
        <p className="eyebrow">מקור בדיקה</p>
        <h1>טענות שרצות ברשת, מול מקורות שאפשר לפתוח.</h1>
        <p className="lead">לא לצעוק פייק. לא לבחור צד. פשוט להראות מה נטען, מה המקור אומר, איפה מתחילה הקפיצה הלוגית ומה אפשר לקבוע בזהירות.</p>
        <div className="hero-actions">
          <a className="button" href="/topics">למפת הנושאים</a>
          <a className="button button-secondary" href="/methodology">איך אנחנו בודקים?</a>
        </div>
      </section>

      <section>
        <div className="section-heading">
          <p className="eyebrow">בדיקות אחרונות</p>
          <h2>עמודים שכבר עברו מקור, מסקנה וניסוח זהיר</h2>
        </div>
        <div className="claim-grid">
          {featured.map((claim, index) => <ClaimCard claim={claim} key={claim.slug} priority={index === 0} />)}
        </div>
      </section>

      <section>
        <div className="section-heading">
          <p className="eyebrow">אשכולות</p>
          <h2>הדרך להפוך בדיקות בודדות למערכת</h2>
        </div>
        <div className="cluster-grid">
          {topicClusters.slice(0, 4).map((cluster) => <ClusterCard cluster={cluster} key={cluster.slug} />)}
        </div>
      </section>
    </main>
  );
}
