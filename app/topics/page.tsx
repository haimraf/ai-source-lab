import { claimRecords } from "@/lib/claims-db";

export const metadata = {
  title: "מפת נושאים | מקור בדיקה",
  description: "אשכולות התוכן והבדיקות של מקור בדיקה.",
};

export default function TopicsPage() {
  return (
    <article>
      <section className="hero">
        <span className="badge">🧭 מפת נושאים</span>
        <h1>טענה אחת כמעט תמיד מחוברת לעוד חמש.</h1>
        <p className="lead">לכן האתר בנוי גם לפי אשכולות. כל אשכול מפריד בין המקור, הטענות שנוספו לו, השאלות הציבוריות והחלקים שעדיין פתוחים לבדיקה.</p>
      </section>

      <div className="topic-grid">
        <a className="topic-card" href="/claims/project-blue-beam-nasa"><span className="topic-label">🛸 בדיקה שפורסמה</span><h3>Blue Beam ונרטיבים ציבוריים</h3><p>בדיקה של סיפור ויראלי מול השאלה הפשוטה: האם יש מקור רשמי שניתן לפתוח.</p></a>
        <a className="topic-card" href="/claims/gateway-process-out-of-body"><span className="topic-label">🧠 בדיקה שפורסמה</span><h3>תודעה ומודיעין</h3><p>Gateway Process וההבדל בין מסמך אמיתי לבין הוכחה למה שמייחסים לו ברשת.</p></a>
        <a className="topic-card" href="/claims/ai-as-source-pyramids"><span className="topic-label">🤖 בדיקה שפורסמה</span><h3>AI כמקור</h3><p>תשובה של מודל יכולה לעזור למצוא כיוון, אבל היא לא מקור בפני עצמה.</p></a>
        <a className="topic-card" href="/topics/agenda-2030"><span className="topic-label">🌐 אשכול פעיל</span><h3>אג׳נדה 2030</h3><p>הפער בין מסמך רשמי לבין רשימות שמופצות ברשת.</p></a>
        <a className="topic-card" href="/claims/cloud-seeding-chemtrails"><span className="topic-label">☁️ אשכול מתרחב</span><h3>שמיים, אקלים וסביבה</h3><p>שובלי התעבות, זריעת עננים והקפיצה מטכנולוגיה קיימת לטענה רחבה מדי.</p></a>
        <a className="topic-card" href="/claims/xrp-global-currency"><span className="topic-label">💳 בדיקה שפורסמה</span><h3>כסף דיגיטלי ומערכות תשלום</h3><p>XRP, תקני תשלום והפער בין שימוש טכנולוגי לבחירה רשמית.</p></a>
        <a className="topic-card" href="/editorial-policy"><span className="topic-label">🔮 עתידי</span><h3>ציטוטים ומקורות</h3><p>בירור ציטוטים שמופצים בשם מקור חיצוני, בלי לקבוע מסקנות שלא מופיעות במקור.</p></a>
      </div>

      <section id="all-checks" className="box answer">
        <div className="section-head">
          <div><span className="topic-label">📚 כל הבדיקות</span><h2>כל הבדיקות שפורסמו באתר.</h2></div>
          <p>ברגע שעולה בדיקה חדשה, היא מופיעה גם כאן — לפי נושא, תאריך ומסקנה קצרה.</p>
        </div>
        <div className="grid">
          {claimRecords.map((claim) => (
            <article className="card" key={claim.path}>
              <a href={claim.path}>
                <div className="card-meta"><span>{claim.kicker}</span><span>•</span><span>{claim.updated}</span></div>
                <h3>{claim.title}</h3>
                <p className="small">{claim.description}</p>
                <span className="status-chip">{claim.verdict}</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="box method-note">
        <h2>למה אשכול ולא עמוד ענק?</h2>
        <p>עמוד אחד צריך לענות על שאלה אחת. אשכול מאפשר לקשר בין שאלות בלי לערבב אותן למסקנה אחת גדולה.</p>
      </section>
    </article>
  );
}
