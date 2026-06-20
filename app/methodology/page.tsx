export const metadata = {
  title: "איך אנחנו בודקים | מקור בדיקה",
  description: "השיטה שבה מקור בדיקה עובר מטענה, מסמך או צילום מסך למסקנה זהירה שמבוססת על מקורות.",
};

const steps = [
  ["01", "מנסחים את הטענה", "לא בודקים תחושה כללית. כותבים במשפט אחד מה בדיוק נטען."],
  ["02", "מאתרים את המקור", "מחפשים את המסמך, ההודעה, התקן, המחקר או הנתון שעליהם הטענה נשענת."],
  ["03", "קוראים את ההקשר", "בודקים מה נכתב לפני ואחרי הציטוט, מי פרסם, מתי ובאיזו סמכות."],
  ["04", "מפרידים בין שכבות", "מסמנים מה עובדה, מה פרשנות, מה חשד, מה אפשרי ומה פשוט לא נמצא."],
  ["05", "מסמנים את הקפיצה", "בודקים איפה עובדה נקודתית הפכה למסקנה רחבה יותר שלא מופיעה במקור."],
  ["06", "מפרסמים עם תאריך", "המסקנה מוצגת לצד המקורות ותאריך הבדיקה, כדי שאפשר יהיה לחזור אליה."],
];

export default function MethodologyPage() {
  return (
    <article>
      <section className="hero">
        <span className="badge">מתודולוגיה</span>
        <h1>לא מתחילים ב“אמת או שקר”. מתחילים בטענה שאפשר לבדוק.</h1>
        <p className="lead">המטרה היא לא לנצח ויכוח, אלא לאפשר לקורא לראות בעצמו מה המקור אומר, מה הוא לא אומר, ואיפה הסיפור התרחב מעבר אליו.</p>
      </section>

      <section className="box verdict-box">
        <div className="verdict-grid">
          <div><span className="eyebrow">העיקרון</span><p><strong>מקור לפני מסקנה.</strong></p></div>
          <div><span className="eyebrow">העדיפות</span><p>מסמך ראשוני לפני כתבה שמסכמת אותו.</p></div>
          <div><span className="eyebrow">הגבול</span><p>כשאין מספיק מידע, כותבים שאין מספיק מידע.</p></div>
          <div><span className="eyebrow">האחריות</span><p>כל עמוד מקבל תאריך ומסלול תיקון.</p></div>
        </div>
      </section>

      <h2>שישה צעדים קבועים</h2>
      <div className="process-grid">
        {steps.map(([number, title, text]) => (
          <section className="process-card" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </section>
        ))}
      </div>

      <h2>היררכיית המקורות</h2>
      <p className="lead">לא כל קישור שווה באותה מידה. ככל שאפשר, הבדיקה מתחילה ברמה הראשונה.</p>
      <div className="source-levels">
        <div className="source-level"><strong>רמה 1</strong><div><h3>מקור ראשוני</h3><p>מסמך רשמי, חקיקה, מאגר נתונים, מחקר מקורי, הודעת חברה או תיעוד טכני.</p></div></div>
        <div className="source-level"><strong>רמה 2</strong><div><h3>גוף מקצועי</h3><p>רשות ציבורית, מוסד מחקר, ארגון תקינה או גוף מדעי שמסביר את החומר.</p></div></div>
        <div className="source-level"><strong>רמה 3</strong><div><h3>דיווח עיתונאי</h3><p>כתבה איכותית יכולה לעזור לאתר הקשר, אבל לא מחליפה את המסמך כשהוא זמין.</p></div></div>
        <div className="source-level"><strong>רמה 4</strong><div><h3>פוסט, סרטון או צילום מסך</h3><p>משמשים לתיעוד הטענה שמופצת, לא כהוכחה לכך שהיא נכונה.</p></div></div>
      </div>

      <h2>איך נקבעת השורה התחתונה?</h2>
      <div className="grid">
        <div className="card"><span className="status-chip">מבוסס</span><h3>המקור תומך בטענה</h3><p>הניסוח המרכזי מופיע במקור או נובע ממנו באופן ישיר.</p></div>
        <div className="card"><span className="status-chip">חלקי</span><h3>יש גרעין נכון</h3><p>חלק מהמידע נכון, אבל נוספה לו מסקנה רחבה יותר.</p></div>
        <div className="card"><span className="status-chip">לא נמצא מקור</span><h3>הראיה החסרה לא הוצגה</h3><p>לא נמצא מקור שמאשר את הטענה בנוסח שבו היא מופצת.</p></div>
        <div className="card"><span className="status-chip">פתוח לבדיקה</span><h3>עדיין אין מספיק מידע</h3><p>העמוד נשאר מסויג עד שמופיע חומר שמאפשר מסקנה.</p></div>
      </div>

      <h2>ומה התפקיד של בינה מלאכותית?</h2>
      <div className="box answer">
        <p>כלי בינה יכולים לסייע בחיפוש, מיון, תמלול וניסוח. הם לא נחשבים מקור, ולא מקבלים את ההחלטה הסופית. לפני פרסום נבדקים הקישורים, הציטוטים והמסקנה. דוגמה מפורטת מופיעה בבדיקה <a className="text-link" href="/claims/ai-as-source-pyramids">האם תשובת AI היא מקור?</a></p>
      </div>

      <h2>מה אנחנו לא עושים</h2>
      <ul>
        <li>לא משתמשים בלוגו שמופיע על פוסטר כהוכחה למקורו.</li>
        <li>לא כותבים "שקר" כשכל מה שאפשר לקבוע הוא שלא נמצא מקור.</li>
        <li>לא מוחקים כאב ציבורי או שאלה אמיתית רק כי ניסוח מסוים ברשת קפץ רחוק מדי.</li>
        <li>לא מסתירים עובדה נכונה רק משום שהמסקנה שנבנתה עליה שגויה.</li>
        <li>לא משאירים עמוד ישן בלי תאריך או דרך לבקש תיקון.</li>
      </ul>

      <section className="box method-note">
        <h2>מצאת טעות או מקור חדש?</h2>
        <p>אפשר לשלוח תיקון דרך <a className="text-link" href="/corrections">עמוד התיקונים</a>. הפנייה צריכה לכלול קישור מדויק והסבר קצר למה הוא משנה את המסקנה.</p>
        <a className="button-primary" href="/corrections">שליחת תיקון</a>
      </section>
    </article>
  );
}
