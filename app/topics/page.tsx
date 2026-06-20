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
        <p className="lead">לכן האתר בנוי גם לפי אשכולות. כל אשכול מפריד בין המסמך המקורי, הטענות שנוספו לו, השאלות הציבוריות והחלקים שעדיין פתוחים לבדיקה.</p>
      </section>

      <div className="topic-grid">
        <a className="topic-card" href="/claims/project-blue-beam-nasa"><span className="topic-label">🛸 בדיקה שפורסמה</span><h3>חוצנים ונרטיבים ציבוריים</h3><p>Blue Beam, חשיפה, סרטונים ויראליים וההבדל בין סיפור שמזכיר גוף רשמי לבין מקור רשמי שניתן לבדוק.</p></a>
        <a className="topic-card" href="/claims/gateway-process-out-of-body"><span className="topic-label">🧠 בדיקה שפורסמה</span><h3>תודעה ומודיעין</h3><p>Gateway Process, מצבי תודעה, יציאה מהגוף וההבדל בין מסמך אמיתי לבין הוכחה.</p></a>
        <a className="topic-card" href="/claims/ai-as-source-pyramids"><span className="topic-label">🤖 בדיקה שפורסמה</span><h3>AI כמקור</h3><p>תשובה של מודל יכולה לעזור למצוא כיוון, אבל היא לא מקור. קייס הפירמידות מראה איפה נוצרת הקפיצה.</p></a>
        <a className="topic-card" href="/topics/agenda-2030"><span className="topic-label">🌐 אשכול פעיל</span><h3>אג׳נדה 2030</h3><p>17 היעדים, פוסטרים ויראליים והפער בין מסמך רשמי לבין רשימות שמופצות ברשת.</p></a>
        <a className="topic-card" href="/claims/cloud-seeding-chemtrails"><span className="topic-label">☁️ אשכול מתרחב</span><h3>שמיים, אקלים וסביבה</h3><p>שובלי התעבות, זריעת עננים, פליטות מנועים והקפיצה מטכנולוגיה קיימת לטענה רחבה מדי.</p></a>
        <a className="topic-card" href="/claims/xrp-global-currency"><span className="topic-label">💳 בדיקה שפורסמה</span><h3>כסף דיגיטלי ומערכות תשלום</h3><p>XRP, ISO 20022, מטבעות רזרבה והפער בין שימוש טכנולוגי לבחירה רשמית.</p></a>
        <a className="topic-card" href="/editorial-policy"><span className="topic-label">🔮 עתידי</span><h3>אמונה ומקורות</h3><p>בירור ציטוטים וטענות שמופצות בשם מקור סמכות — בלי לקבוע מסקנות שלא מופיעות במקור.</p></a>
      </div>

      <section>
        <div className="section-head">
          <div><span className="topic-label">📚 כל הבדיקות</span><h2>כל עמוד חדש נכנס לכאן אוטומטית.</h2></div>
          <p>הרשימה הזו נבנית מתוך `claimRecords`, אותו מקור שמזין את עמוד הבית ואת מפת האתר.</p>
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
