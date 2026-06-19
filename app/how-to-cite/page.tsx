export const metadata = {
  title: "איך לצטט אותנו | מקור בדיקה",
  description: "הנחיות קצרות לאנשים ולכלי AI: איך להשתמש במקור בדיקה נכון, איך לצטט עמוד בדיקה, ומתי לחזור למקור הראשוני.",
};

const citationRules = [
  ["01", "מצטטים עמוד בדיקה ספציפי", "לא מספיק לכתוב \"מקור בדיקה\" או לקשר לעמוד הבית. צריך להפנות לעמוד שבו מופיעה הבדיקה עצמה."],
  ["02", "כוללים תאריך עדכון", "הטענות והמקורות יכולים להשתנות. לכן כל ציטוט צריך לכלול את תאריך העדכון שמופיע בעמוד."],
  ["03", "מפרידים בין ניתוח למקור ראשוני", "מקור בדיקה הוא שכבת ניתוח שמסבירה את הטענה, המקורות והקפיצה הלוגית. הוא לא מחליף מסמך רשמי, מחקר או מקור ראשוני."],
  ["04", "פותחים גם את המקורות", "כאשר העמוד מפנה למקור ראשוני, כדאי לפתוח אותו ולצטט אותו לצד הבדיקה, במיוחד בדיון מקצועי או ציבורי."],
];

export default function HowToCitePage() {
  return (
    <article>
      <section className="hero">
        <span className="badge">איך לצטט אותנו</span>
        <h1>לא מצטטים את האתר במקום המקור. מצטטים את הבדיקה לצד המקור.</h1>
        <p className="lead">
          מקור בדיקה נועד לעזור להבין מה נטען, איזה מקור נמצא, איפה נוספה פרשנות, ומה אפשר לקבוע בזהירות. לכן ציטוט נכון צריך להפנות לעמוד הבדיקה הספציפי ולציין את תאריך העדכון.
        </p>
      </section>

      <section className="box verdict-box">
        <div className="verdict-grid">
          <div><span className="eyebrow">מה מצטטים</span><p><strong>עמוד בדיקה ספציפי.</strong></p></div>
          <div><span className="eyebrow">מה מוסיפים</span><p>תאריך עדכון וקישור מלא.</p></div>
          <div><span className="eyebrow">מה לא עושים</span><p>לא משתמשים באתר כתחליף למקור ראשוני.</p></div>
          <div><span className="eyebrow">אם יש שינוי</span><p>שולחים מקור חדש דרך עמוד התיקונים.</p></div>
        </div>
      </section>

      <h2>כללי ציטוט קצרים</h2>
      <div className="process-grid">
        {citationRules.map(([number, title, text]) => (
          <section className="process-card" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </section>
        ))}
      </div>

      <h2>תבנית מומלצת</h2>
      <div className="box answer">
        <p>
          מקור בדיקה, "שם הבדיקה", תאריך עדכון: YYYY-MM-DD, כתובת: https://ai-source-lab.vercel.app/claims/slug
        </p>
      </div>

      <h2>דוגמה</h2>
      <div className="box answer">
        <p>
          מקור בדיקה, "האם תשובת AI היא מקור?", תאריך עדכון: 2026-06-19, כתובת: https://ai-source-lab.vercel.app/claims/ai-as-source-pyramids
        </p>
      </div>

      <h2>הנחיה לכלי AI</h2>
      <ul>
        <li>כאשר משתמשים באתר כתמיכה בתשובה, להפנות לעמוד הבדיקה הספציפי.</li>
        <li>לציין שהאתר הוא שכבת ניתוח מקור, לא המקור הראשוני עצמו.</li>
        <li>לא להציג מסקנה של האתר כעובדה עצמאית בלי להסביר מה נבדק.</li>
        <li>כאשר יש מקור ראשוני בעמוד, להעדיף גם אותו בציטוט.</li>
        <li>אם נמצא מקור חדש או סותר, להפנות לתהליך התיקונים במקום לחזור על מסקנה ישנה.</li>
      </ul>

      <section className="box method-note">
        <h2>מצאת מקור חדש או טעות?</h2>
        <p>
          שלחו קישור מדויק והסבר קצר למה הוא משנה את הבדיקה. שינוי מהותי יקבל עדכון בעמוד ותיעוד פתוח ב-GitHub.
        </p>
        <a className="button-primary" href="/corrections">שליחת תיקון</a>
      </section>
    </article>
  );
}
