export const metadata = {
  title: "הצע טענה לבדיקה | מקור בדיקה",
  description: "עמוד קצר לשליחת טענה, פוסט, צילום מסך או קישור לבדיקה עתידית במקור בדיקה.",
};

const requestFields = [
  ["01", "מה הטענה?", "נסחו במשפט אחד מה בדיוק נטען. לא נושא כללי, אלא טענה שאפשר לבדוק."],
  ["02", "איפה ראיתם אותה?", "ציינו אם היא הופיעה בפוסט, סרטון, כתבה, תגובה, קבוצת וואטסאפ או צילום מסך."],
  ["03", "יש קישור או צילום מסך?", "עדיף לצרף קישור ישיר. אם אין קישור, אפשר לתאר מה מופיע בצילום המסך."],
  ["04", "מה מעניין לבדוק?", "כתבו מה גרם לכם לעצור: מקור חסר, קפיצה לוגית, מספר חשוד, ציטוט בלי הקשר או טענה שחוזרת הרבה."],
];

export default function SuggestClaimPage() {
  return (
    <article>
      <section className="hero">
        <span className="badge">הצע טענה לבדיקה</span>
        <h1>ראיתם טענה שרצה ברשת? אפשר להציע אותה לבדיקה.</h1>
        <p className="lead">
          מקור בדיקה נבנה סביב טענות שאנשים באמת פוגשים: פוסטים, סרטונים, צילומי מסך, מסמכים, הבטחות גדולות ותשובות AI שנשמעות בטוחות מדי. כדי לבדוק טוב, צריך להתחיל מטענה אחת ברורה וממקור שאפשר לפתוח.
        </p>
      </section>

      <section className="box verdict-box">
        <div className="verdict-grid">
          <div><span className="eyebrow">מה לשלוח</span><p><strong>טענה אחת ברורה.</strong></p></div>
          <div><span className="eyebrow">מה לצרף</span><p>קישור, צילום מסך או תיאור מדויק.</p></div>
          <div><span className="eyebrow">מה עוזר</span><p>להסביר איפה נראה שיש קפיצה או מקור חסר.</p></div>
          <div><span className="eyebrow">מה קורה אחר כך</span><p>הטענה תיבחן מול מקורות פתוחים.</p></div>
        </div>
      </section>

      <h2>מה כדאי לכלול בהצעה?</h2>
      <div className="process-grid">
        {requestFields.map(([number, title, text]) => (
          <section className="process-card" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </section>
        ))}
      </div>

      <h2>תבנית קצרה לשליחה</h2>
      <div className="box answer">
        <p>
          הטענה: ...<br />
          איפה ראיתי אותה: ...<br />
          קישור או צילום מסך: ...<br />
          מה מעניין לבדוק: ...
        </p>
      </div>

      <h2>איך שולחים כרגע?</h2>
      <div className="box answer">
        <p>
          בשלב הזה אין טופס באתר ואין איסוף פרטים אוטומטי. הדרך הנקייה ביותר היא לפתוח Issue בריפו הציבורי ולצרף את הפרטים. אין צורך בידע טכני.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="https://github.com/haimraf/ai-source-lab/issues/new" target="_blank" rel="noreferrer">פתיחת הצעה ב-GitHub</a>
          <a className="button-secondary" href="/methodology">איך אנחנו בודקים</a>
        </div>
      </div>

      <section className="box method-note">
        <h2>לא כל הצעה תהפוך מיד לעמוד.</h2>
        <p>
          קודם בודקים אם יש טענה ברורה, מקור שאפשר לפתוח וערך ציבורי. לפעמים התשובה תהיה בדיקה מלאה, ולפעמים רק הסבר קצר או תיעוד להמשך.
        </p>
      </section>
    </article>
  );
}
