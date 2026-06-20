import type { Metadata } from "next";
import { claimRecords, getHomeFeaturedClaim } from "@/lib/claims-db";
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

function toCheck(claim: (typeof claimRecords)[number]) {
  return {
    title: claim.title,
    href: claim.path,
    summary: claim.description,
    topic: claim.kicker,
    tags: claim.tags,
    verdict: claim.verdict,
    updated: formatDate(claim.updated),
  };
}

function TagList({ tags, limit = 3 }: { tags: readonly string[]; limit?: number }) {
  return (
    <div className="tag-list" aria-label="תגיות">
      {tags.slice(0, limit).map((tag) => (
        <span className="tag-chip" key={tag}>#{tag}</span>
      ))}
    </div>
  );
}

const checks = claimRecords.map(toCheck);
const featuredChecks = checks.slice(0, 3);
const latestChecks = checks.slice(0, 3);
const homeFeaturedCheck = toCheck(getHomeFeaturedClaim());
const latestUpdated = formatDate(claimRecords[0].updated);

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div>
          <span className="badge">🔎 מאגר בדיקות מקור</span>
          <h1>בודקים טענות שרצות ברשת מול המקור עצמו.</h1>
          <p className="lead">
            זה לא צ׳אט שבודק כל פרומפט בזמן אמת. זה מאגר בדיקות: מחפשים בדיקה קיימת, פותחים מקור, ורואים מה באמת אפשר לקבוע.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="/topics#find-check">חפש בדיקה קיימת</a>
            <a className="button-secondary" href={homeFeaturedCheck.href}>פתח בדיקה לדוגמה</a>
            <a className="button-secondary" href="/suggest-claim">הצע טענה</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="טענות שנבדקות באתר">
          <span className="topic-label">🧪 מה מקבלים?</span>
          <p className="visual-intro">
            בכל בדיקה: הטענה, שורה תחתונה, מה כן נכון, איפה הקפיצה, ומה המקורות אומרים.
          </p>
          <div className="signal-list claim-signal-list">
            {featuredChecks.map((check, index) => (
              <a className="signal-row claim-signal" href={check.href} key={check.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{check.title}</strong>
                  <small>{check.verdict}</small>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="נתוני אמון">
        <div className="trust-item"><strong>{claimRecords.length}</strong>🗂️ בדיקות שפורסמו</div>
        <div className="trust-item"><strong>14+</strong>🔗 מקורות ישירים</div>
        <div className="trust-item"><strong>100%</strong>🔓 קישורים פתוחים לבדיקה</div>
        <div className="trust-item"><strong>{latestUpdated}</strong>🕒 עדכון אחרון</div>
      </section>

      <section className="how-use box answer">
        <span className="topic-label">🧭 איך משתמשים באתר?</span>
        <h2>שלושה צעדים פשוטים</h2>
        <div className="process-grid compact-process">
          <section className="process-card">
            <span>01</span>
            <h3>מחפשים בדיקה קיימת</h3>
            <p>מקלידים טענה, מקור, מושג או תגית. החיפוש מחפש רק בתוך בדיקות שכבר פורסמו.</p>
          </section>
          <section className="process-card">
            <span>02</span>
            <h3>פותחים את הבדיקה</h3>
            <p>מקבלים שורה תחתונה, מקורות, מה כן נכון, ומה הקפיצה בין המקור למסקנה.</p>
          </section>
          <section className="process-card">
            <span>03</span>
            <h3>לא מצאתם?</h3>
            <p>שולחים טענה לבדיקה עתידית. כרגע האתר לא מחזיר בדיקה אוטומטית לכל פרומפט.</p>
          </section>
        </div>
      </section>

      <section className="box method-note">
        <span className="topic-label">🔎 מחפש משהו ספציפי?</span>
        <h2>החיפוש החי נמצא במפת הנושאים.</h2>
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
          <div><span className="topic-label">📚 בדיקות אחרונות</span><h2>הטענות עצמן, ואז הדרך אל המקור.</h2></div>
          <div>
            <p>בעמוד הבית מוצגות רק כמה בדיקות כדי לא להציף. הרשימה המלאה והחיפוש נמצאים במפת הנושאים.</p>
            <div className="hero-actions"><a className="button-secondary" href="/topics#all-checks">כל הבדיקות</a></div>
          </div>
        </div>
        <div className="grid">
          {latestChecks.map((check) => (
            <article className="card" key={check.href}>
              <a href={check.href}>
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
          <div><span className="topic-label">🧭 מפת נושאים</span><h2>נושאים שחוזרים שוב ושוב</h2></div>
          <p>האשכולות עוזרים לחבר בין בדיקות בלי להפוך אותן לעמוד ענק אחד.</p>
        </div>
        <div className="topic-grid">
          <a className="topic-card" href="/claims/cloud-seeding-chemtrails">
            <span className="topic-label">☁️ שמיים ואקלים</span>
            <h3>Contrails, זריעת עננים ו־Geoengineering</h3>
            <p>מה קיים באמת, ומה קופץ מזה לטענת ריסוס רחבה מדי.</p>
          </a>
          <a className="topic-card" href="/topics/agenda-2030">
            <span className="topic-label">🌐 אג׳נדה ומוסדות</span>
            <h3>מסמכים רשמיים מול רשימות ויראליות</h3>
            <p>הפער בין מקור שניתן לפתוח לבין סיפור שמחבר כמה דברים יחד.</p>
          </a>
          <a className="topic-card" href="/claims/ai-as-source-pyramids">
            <span className="topic-label">🤖 AI ומקורות</span>
            <h3>תשובה משכנעת אינה מקור</h3>
            <p>AI יכול לעזור למצוא כיוון, אבל צריך לפתוח את המקורות עצמם.</p>
          </a>
        </div>
      </section>

      <section className="box answer">
        <h2>🛡️ למה לסמוך על התהליך?</h2>
        <p>המטרה היא לא לנצח ויכוח ולא לבחור צד. המקורות מוצגים ליד המסקנה, תאריך הבדיקה גלוי, וטעויות ניתנות לתיקון. כלי בינה יכולים לסייע בסידור ובאיתור, אבל ההכרעה והפרסום עוברים בדיקה אנושית.</p>
        <div className="hero-actions"><a className="button-secondary" href="/editorial-policy">מדיניות עריכה</a><a className="button-secondary" href="/corrections">תיקונים ועדכונים</a></div>
      </section>
    </>
  );
}
