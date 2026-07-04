import type { Metadata } from "next";
import { CheckCircle2, CircleDot, FileText, Network, Search } from "lucide-react";
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

function byHomepageFreshness(a: ClaimContentIndexEntry, b: ClaimContentIndexEntry) {
  const dateCompare = b.updated.localeCompare(a.updated);
  if (dateCompare !== 0) return dateCompare;
  return b.priority - a.priority;
}

function byClusterPriority(a: TopicCluster, b: TopicCluster) {
  const priorityCompare = b.priority - a.priority;
  if (priorityCompare !== 0) return priorityCompare;
  return b.updated.localeCompare(a.updated);
}

function toCheck(claim: ClaimContentIndexEntry) {
  return {
    title: claim.title,
    href: claim.path,
    summary: claim.description,
    topic: claim.kicker,
    tags: claim.tags,
    verdict: claim.verdict,
    updated: formatDate(claim.updated),
    coverImage: claim.coverImage,
  };
}

type HomeCheck = ReturnType<typeof toCheck>;

function TagList({ tags, limit = 3 }: { tags: readonly string[]; limit?: number }) {
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
    <a className="topic-card" href={cluster.path}>
      <span className="topic-label">{cluster.eyebrow}</span>
      <h3>{cluster.shortTitle}</h3>
      <p>{cluster.description}</p>
      <small>{stats.publishedCount} בדיקות פורסמו · {stats.plannedCount} בתכנון · עודכן {formatDate(stats.updated)}</small>
      {claims.length ? <span className="status-chip">{claims[0].verdict}</span> : null}
    </a>
  );
}

function EvidenceMapPreview({ checks }: { checks: readonly HomeCheck[] }) {
  const [primaryCheck, ...relatedChecks] = checks;

  return (
    <div className="evidence-map-preview">
      <div className="source-stack" aria-label="מקורות נבחרים">
        <strong>מקורות נבחנים</strong>
        {checks.map((check, index) => (
          <a href={check.href} key={check.href}>
            <FileText aria-hidden="true" />
            <span>{check.topic}</span>
            <small>{check.updated}</small>
            <span className="source-index">{String(index + 1).padStart(2, "0")}</span>
          </a>
        ))}
      </div>

      <div className="evidence-orbit" aria-label="מפת טענה מקור ומסקנה">
        <div className="map-node claim-node">
          <CircleDot aria-hidden="true" />
          <span>הטענה</span>
          <strong>{primaryCheck?.topic}</strong>
        </div>
        <div className="map-node source-node">
          <FileText aria-hidden="true" />
          <span>המקור</span>
          <strong>מסמך / נתון / פרסום</strong>
        </div>
        <div className="map-node verdict-node">
          <CheckCircle2 aria-hidden="true" />
          <span>המסקנה</span>
          <strong>{primaryCheck?.verdict}</strong>
        </div>
        <div className="orbit-icon orbit-icon-1"><Search aria-hidden="true" /></div>
        <div className="orbit-icon orbit-icon-2"><Network aria-hidden="true" /></div>
        <div className="orbit-icon orbit-icon-3"><FileText aria-hidden="true" /></div>
      </div>

      <div className="map-related">
        {relatedChecks.map((check) => (
          <a href={check.href} key={check.href}>
            <span>{check.topic}</span>
            <strong>{check.title}</strong>
          </a>
        ))}
      </div>
    </div>
  );
}

function ClaimCoverVisual({ check, index }: { check: HomeCheck; index: number }) {
  if (check.coverImage) {
    return (
      <div className="claim-card-cover has-cover">
        <img src={check.coverImage.src} alt={check.coverImage.alt} />
      </div>
    );
  }

  return (
    <div className={`claim-card-cover generated-cover generated-cover-${(index % 3) + 1}`} aria-hidden="true">
      <div className="cover-node cover-claim"><CircleDot /></div>
      <div className="cover-node cover-source"><FileText /></div>
      <div className="cover-node cover-verdict"><CheckCircle2 /></div>
      <div className="cover-line cover-line-a" />
      <div className="cover-line cover-line-b" />
      <span>{check.topic}</span>
    </div>
  );
}

const publishedClaims = getPublishedClaimContent();
const sortedClaims = [...publishedClaims].sort(byHomepageFreshness);
const homeFeaturedCheck = toCheck(getFeaturedClaimContent() ?? sortedClaims[0]);
const checks = sortedClaims.map(toCheck);
const homepageChecks = [homeFeaturedCheck, ...checks.filter((check) => check.href !== homeFeaturedCheck.href)].slice(0, 3);
const featuredChecks = homepageChecks;
const latestChecks = homepageChecks;
const latestUpdated = formatDate(sortedClaims[0].updated);
const homepageClusters = [...topicClusters].sort(byClusterPriority).slice(0, 3);

export default function HomePage() {
  return (
    <>
      <section className="home-hero evidence-hero">
        <div>
          <h1>בודקים טענות שרצות ברשת מול המקור עצמו.</h1>
          <p className="lead">
            זה לא צ׳אט שבודק כל פרומפט בזמן אמת. זה מאגר בדיקות: <a className="text-link" href="/topics#find-check">מחפשים בדיקה קיימת</a>, פותחים מקור, ורואים מה באמת אפשר לקבוע.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="/topics#find-check">חפש בדיקה קיימת</a>
            <a className="button-secondary" href={homeFeaturedCheck.href}>פתח בדיקה לדוגמה</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="טענות שנבדקות באתר">
          <EvidenceMapPreview checks={featuredChecks} />
        </div>
      </section>

      <section className="trust-strip" aria-label="נתוני אמון">
        <div className="trust-item"><strong>{publishedClaims.length}</strong>בדיקות שפורסמו</div>
        <div className="trust-item"><strong>{topicClusters.length}</strong>אשכולות נושא</div>
        <div className="trust-item"><strong>100%</strong>קישורים פתוחים לבדיקה</div>
        <div className="trust-item"><strong>{latestUpdated}</strong>עדכון אחרון</div>
      </section>

      <section className="how-use box answer">
        <span className="topic-label">איך משתמשים באתר?</span>
        <h2>שלושה צעדים פשוטים</h2>
        <div className="process-grid compact-process">
          <section className="process-card">
            <span>01</span>
            <h3>מחפשים בדיקה קיימת</h3>
            <p>מקלידים טענה, מקור, מושג או תגית. <a className="text-link" href="/topics#find-check">החיפוש</a> מחפש רק בתוך בדיקות שכבר פורסמו.</p>
          </section>
          <section className="process-card">
            <span>02</span>
            <h3>פותחים את הבדיקה</h3>
            <p>מקבלים שורה תחתונה, מקורות, מה כן נכון, ומה הקפיצה בין המקור למסקנה.</p>
          </section>
          <section className="process-card">
            <span>03</span>
            <h3>ממשיכים לאשכול</h3>
            <p>כל בדיקה מחוברת לאשכול נושא שמראה בדיקות קשורות, שאלות פתוחות ומה לא כדאי לערבב יחד.</p>
          </section>
        </div>
      </section>

      <section className="box method-note">
        <span className="topic-label">מחפש משהו ספציפי?</span>
        <h2><a className="text-link" href="/topics#find-check">החיפוש החי</a> נמצא במפת הנושאים.</h2>
        <p>
          שם אפשר להקליד טענה, מקור או תגית ולקבל תוצאות מיד מתוך המאגר הקיים. אם אין תוצאה, אפשר להציע טענה לבדיקה עתידית.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="/topics#find-check">פתח חיפוש חי</a>
          <a className="button-secondary" href="/topics#all-checks">כל הבדיקות</a>
        </div>
      </section>

      <section id="checks">
        <div className="section-head">
          <div><span className="topic-label">בדיקות אחרונות</span><h2>הטענות עצמן, ואז הדרך אל המקור.</h2></div>
          <div>
            <p>בעמוד הבית מוצגות רק כמה בדיקות כדי לא להציף. <a className="text-link" href="/topics#all-checks">הרשימה המלאה</a> והחיפוש נמצאים במפת הנושאים.</p>
            <div className="hero-actions"><a className="button-secondary" href="/topics#all-checks">כל הבדיקות</a></div>
          </div>
        </div>
        <div className="grid">
          {latestChecks.map((check, index) => (
            <article className="card" key={check.href}>
              <a href={check.href}>
                <ClaimCoverVisual check={check} index={index} />
                <div className="card-meta"><span>{check.topic}</span><span>•</span><span>עודכן {check.updated}</span></div>
                <h3>{check.title}</h3>
                <p className="small">{check.summary}</p>
                <TagList tags={check.tags} />
                <span className="status-chip">{check.verdict}</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="section-head">
          <div><span className="topic-label">מפת נושאים</span><h2>אשכולות אמיתיים, לא רק קטגוריות.</h2></div>
          <p>כל אשכול מחזיק את הבדיקות שכבר פורסמו, את השאלות שעדיין פתוחות ואת הגבול בין מקור, פרשנות וקפיצה לוגית.</p>
        </div>
        <div className="topic-grid">
          {homepageClusters.map((cluster) => (
            <ClusterCard cluster={cluster} key={cluster.slug} />
          ))}
        </div>
        <div className="hero-actions">
          <a className="button-secondary" href="/topics">כל האשכולות</a>
        </div>
      </section>

      <section className="box answer">
        <h2>למה לסמוך על התהליך?</h2>
        <p>המטרה היא לא לנצח ויכוח ולא לבחור צד. המקורות מוצגים ליד המסקנה, תאריך הבדיקה גלוי, וטעויות ניתנות לתיקון. כלי בינה יכולים לסייע בסידור ובאיתור, אבל ההכרעה והפרסום עוברים בדיקה אנושית.</p>
        <div className="hero-actions"><a className="button-secondary" href="/editorial-policy">מדיניות עריכה</a><a className="button-secondary" href="/corrections">תיקונים ועדכונים</a></div>
      </section>
    </>
  );
}
