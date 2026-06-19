import type { Metadata } from "next";
import { claimRecords } from "@/lib/claims-db";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function formatDate(value: string) {
  const [year, month, day] = value.split("-");
  return `${Number(day)}.${Number(month)}.${year.slice(2)}`;
}

const checks = claimRecords.map((claim) => ({
  title: claim.title,
  href: claim.path,
  summary: claim.description,
  topic: claim.kicker,
  verdict: claim.verdict,
  updated: formatDate(claim.updated),
}));

const featuredChecks = checks.slice(0, 5);
const latestCheck = checks[0];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div>
          <span className="badge">בדיקות טענות מול מקורות</span>
          <h1>בודקים טענות שרצות ברשת מול המקור עצמו.</h1>
          <p className="lead">
            כל בדיקה מתחילה בטענה אחת ברורה, מציגה שורה תחתונה, ואז פותחת את המקור כדי לראות מה באמת אפשר לקבוע ומה נוסף בדרך.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href={latestCheck.href}>פתח בדיקה לדוגמה</a>
            <a className="button-secondary" href="#checks">כל הטענות שנבדקו</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="טענות שנבדקות באתר">
          <span className="topic-label">טענות שנבדקות עכשיו</span>
          <p className="visual-intro">
            קודם רואים את הטענה ואת המסקנה. הרקע, השיטה והמקורות מגיעים אחרי שהעיקר ברור.
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
        <div className="trust-item"><strong>{claimRecords.length}</strong>בדיקות שפורסמו</div>
        <div className="trust-item"><strong>14+</strong>מקורות ישירים</div>
        <div className="trust-item"><strong>100%</strong>קישורים פתוחים לבדיקה</div>
        <div className="trust-item"><strong>19.6.26</strong>עדכון אחרון</div>
      </section>

      <section>
        <div className="feature-card">
          <div>
            <span className="topic-label">בדיקה לדוגמה</span>
            <h2>{latestCheck.title}</h2>
            <p>{latestCheck.summary}</p>
            <a className="button-primary" href={latestCheck.href}>פתיחת הבדיקה</a>
          </div>
          <img src="/evidence/ai-as-source-card.svg" alt="איור של תשובה שנבדקת מול מקור אמיתי" />
        </div>
      </section>

      <section id="checks">
        <div className="section-head">
          <div><span className="topic-label">בדיקות שפורסמו</span><h2>הטענות עצמן, ואז הדרך אל המקור.</h2></div>
          <p>כל כרטיס מוביל לעמוד עם מסקנה, שרשרת הטענה, שאלות נפוצות וקישורים ישירים למקורות.</p>
        </div>
        <div className="grid">
          {checks.map((check) => (
            <article className="card" key={check.href}>
              <a href={check.href}>
                <div className="card-meta"><span>{check.topic}</span><span>•</span><span>עודכן {check.updated}</span></div>
                <h3>{check.title}</h3>
                <p className="small">{check.summary}</p>
                <span className="status-chip">{check.verdict}</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="section-head">
          <div><span className="topic-label">מפת נושאים</span><h2>נושאים שחוזרים שוב ושוב</h2></div>
          <p>יש נושאים שלא נסגרים בכן או לא. לכן הם נבנים כאשכולות: טענה אחת בכל פעם, בלי לערבב הכול למסקנה אחת גדולה.</p>
        </div>
        <div className="topic-grid">
          {checks.slice(0, 3).map((check) => (
            <a className="topic-card" href={check.href} key={`topic-${check.href}`}>
              <span className="topic-label">{check.topic}</span>
              <h3>{check.title}</h3>
              <p>{check.summary}</p>
            </a>
          ))}
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
