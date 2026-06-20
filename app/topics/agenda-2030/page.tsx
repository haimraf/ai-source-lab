export const metadata = {
  title: "אג׳נדה 2030: מפת הטענות | מקור בדיקה",
  description: "מפת הטענות סביב אג׳נדה 2030 והקישורים בין המסמך הרשמי לבין הסיפורים שנבנו סביבו.",
};

const planned = [
  ["האם אג׳נדה 2030 מחייבת מדינות כחוק?", "בבדיקה"],
  ["האם יש קשר רשמי בין אג׳נדה 2030 לזהות דיגיטלית?", "בבדיקה"],
  ["מאיפה הגיע המשפט 'לא יהיה לכם כלום ותהיו מאושרים'?", "בתכנון"],
  ["האם מטבע דיגיטלי של בנק מרכזי הוא חלק מהאג׳נדה?", "בתכנון"],
  ["מה ההבדל בין האו״ם, ה-WEF והבנק העולמי?", "בתכנון"],
];

export default function AgendaTopicPage() {
  return (
    <article>
      <section className="hero">
        <span className="badge">אשכול אג׳נדה 2030</span>
        <h1>מסמך אחד, עשרות טענות שונות.</h1>
        <p className="lead">האשכול הזה מפריד בין מה שמופיע בהחלטת האו״ם, מה שמופיע אצל גופים אחרים ומה שנוסף בפוסטרים ובסרטונים ברשת.</p>
      </section>

      <section className="feature-card">
        <div>
          <span className="topic-label">הבדיקה הראשונה באשכול</span>
          <h2>האם קיימת "תוכנית שבעת השלבים" של האו״ם?</h2>
          <p>בדקנו שני פוסטרים בעברית מול החלטת העצרת הכללית A/RES/70/1.</p>
          <a className="button-primary" href="/claims/agenda-2030-seven-steps">לבדיקה המלאה</a>
        </div>
        <img src="/evidence/agenda-2030-poster-1.svg" alt="פוסטר ויראלי על אג׳נדה 2030" />
      </section>

      <h2>מפת הטענות</h2>
      <div className="process-grid">
        {planned.map(([title, status], index) => (
          <section className="process-card" key={title}>
            <span>{String(index + 2).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{status}. העמוד יפורסם רק לאחר איסוף מקורות ראשוניים.</p>
          </section>
        ))}
      </div>

      <h2>שלושה דברים שכבר אפשר להפריד</h2>
      <div className="source-levels">
        <div className="source-level"><strong>האו״ם</strong><div><h3>אג׳נדה 2030 הרשמית</h3><p>17 יעדי פיתוח בר-קיימא ו-169 מטרות שאומצו בהחלטת העצרת הכללית.</p></div></div>
        <div className="source-level"><strong>גופים אחרים</strong><div><h3>מסמכים ויוזמות נפרדים</h3><p>ה-WEF, בנקים מרכזיים וחברות טכנולוגיה אינם האו״ם. קשר ביניהם צריך להיבדק ולא להניח מראש.</p></div></div>
        <div className="source-level"><strong>הרשת</strong><div><h3>פוסטרים וחיבורים</h3><p>חלק מהתוכן הוויראלי מאחד מסמכים שונים לרשימה אחת שלא מופיעה באף מקור בודד.</p></div></div>
      </div>

      <section className="box method-note">
        <h2>הכלל של האשכול</h2>
        <p>כל שאלה תקבל כתובת ועמוד משלה. כך מנועי חיפוש, קוראים ובינות יוכלו לצטט תשובה ממוקדת במקום עמוד שמערבב הכול.</p>
      </section>
    </article>
  );
}
