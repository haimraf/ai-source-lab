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

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div>
          <span className="badge">מקורות, מסמכים ואמון ציבורי</span>
          <h1>טענה רצה ברשת? חוזרים למקור לפני שקופצים למסקנה.</h1>
          <p className="lead">
            מקור בדיקה מפרק טענות רשת, מסמכים ונרטיבים שחוזרים שוב ושוב. במקום להסתפק בכותרת, צילום מסך או תשובת AI, פותחים את המקור ובודקים מה באמת אפשר לקבוע.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="/claims/ai-as-source-pyramids">לבדיקה האחרונה</a>
            <a className="button-secondary" href="/methodology">איך אנחנו בודקים</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="מבנה בדיקה לדוגמה">
          <span className="topic-label">כך טענה נבדקת</span>
          <div className="signal-list">
            <div className="signal-row"><span>01</span><div><strong>הטענה</strong><small>מה בדיוק מופץ?</small></div></div>
            <div className="signal-row"><span>02</span><div><strong>המקור</strong><small>מה המסמך או המקור אומרים?</small></div></div>
            <div className="signal-row"><span>03</span><div><strong>הקפיצה</strong><small>איפה נוספה מסקנה שלא הופיעה במקור?</small></div></div>
            <div className="signal-row"><span>04</span><div><strong>השורה התחתונה</strong><small>מה אפשר לקבוע בזהירות?</small></div></div>
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
            <span className="topic-label">בדיקה חדשה</span>
            <h2>המשפט הכי מסוכן בדיון: “שאלתי AI”</h2>
            <p>
              תשובת AI יכולה להישמע בטוחה, מסודרת וכמעט רשמית. אבל עד שלא פותחים את המקורות שהיא נשענת עליהם, זו לא ראיה - זו רק התחלה של בדיקה.
            </p>
            <a className="button-primary" href="/claims/ai-as-source-pyramids">פתיחת הבדיקה</a>
          </div>
          <img src="/evidence/ai-as-source-card.svg" alt="איור של תשובת AI שנבדקת מול מקור אמיתי" />
        </div>
      </section>

      <section id="checks">
        <div className="section-head">
          <div><span className="topic-label">בדיקות שפורסמו</span><h2>לא רק תשובה. מסלול מלא עד המקור.</h2></div>
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
          <a className="topic-card" href="/claims/ai-as-source-pyramids"><span className="topic-label">בדיקה חדשה</span><h3>AI כמקור</h3><p>למה תשובה של מודל אינה מקור, ואיך משתמשים בבינה בלי לתת לה להכריע.</p></a>
          <a className="topic-card" href="/topics/agenda-2030"><span className="topic-label">אשכול מתפתח</span><h3>אג׳נדה 2030</h3><p>17 היעדים, שבעת השלבים, ריבונות, זהות דיגיטלית והחיבורים שמוסיפים ברשת.</p></a>
          <a className="topic-card" href="/claims/chemtrails-aluminum"><span className="topic-label">שמיים ומדע</span><h3>שובלי מטוסים</h3><p>שובלי התעבות, זריעת עננים, פליטות מנועים וטענות על ריסוס.</p></a>
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
