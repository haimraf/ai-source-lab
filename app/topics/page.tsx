export const metadata = {
  title: "מפת נושאים | מקור בדיקה",
  description: "אשכולות התוכן והבדיקות של מקור בדיקה.",
};

export default function TopicsPage() {
  return (
    <article>
      <section className="hero">
        <span className="badge">מפת נושאים</span>
        <h1>טענה אחת כמעט תמיד מחוברת לעוד חמש.</h1>
        <p className="lead">לכן האתר בנוי גם לפי אשכולות. כל אשכול מפריד בין המסמך המקורי, הטענות שנוספו לו, השאלות הציבוריות והחלקים שעדיין פתוחים לבדיקה.</p>
      </section>

      <div className="topic-grid">
        <a className="topic-card" href="/topics/agenda-2030"><span className="topic-label">אשכול פעיל</span><h3>אג׳נדה 2030</h3><p>שבעת השלבים, 17 היעדים, ריבונות, זהות דיגיטלית, כסף דיגיטלי והפוסטרים שמחברים ביניהם.</p></a>
        <a className="topic-card" href="/claims/chemtrails-aluminum"><span className="topic-label">בדיקה שפורסמה</span><h3>שמיים, אקלים וסביבה</h3><p>שובלי התעבות, פליטות מנועים, זריעת עננים והטענות על ריסוס חומרים.</p></a>
        <a className="topic-card" href="/claims/xrp-global-currency"><span className="topic-label">בדיקה שפורסמה</span><h3>כסף דיגיטלי ומערכות תשלום</h3><p>XRP, ISO 20022, מטבעות רזרבה והפער בין שימוש טכנולוגי לבחירה רשמית.</p></a>
        <a className="topic-card" href="/methodology"><span className="topic-label">תשתית</span><h3>AI כמקור</h3><p>למה תשובה של מודל אינה מקור, ואיך משתמשים בבינה כדי למצוא מקורות בלי לתת לה להכריע.</p></a>
        <a className="topic-card" href="/about"><span className="topic-label">עתידי</span><h3>מדינה, מוסדות ואמון ציבורי</h3><p>מסמכים רשמיים, ועדות, מדיניות ציבורית והפער בין מה שנכתב לבין מה שמופץ ברשת.</p></a>
        <a className="topic-card" href="/editorial-policy"><span className="topic-label">עתידי</span><h3>אמונה ומקורות</h3><p>בירור מקורות, ציטוטים וטענות שמופצות בשם רבנים או מסורת — בלי פסיקת הלכה ובלי ערעור אמונה.</p></a>
      </div>

      <section className="box method-note">
        <h2>למה אשכול ולא עמוד ענק?</h2>
        <p>עמוד אחד צריך לענות על שאלה אחת. אשכול מאפשר לקשר בין שאלות בלי לערבב אותן למסקנה אחת גדולה.</p>
      </section>
    </article>
  );
}
