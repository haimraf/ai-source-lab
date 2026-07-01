import { ClaimProposalForm } from "@/components/ClaimProposalForm";

export const metadata = {
  title: "הצע טענה לבדיקה | מקור בדיקה",
  description: "עמוד קצר לשליחת טענה לבדיקה עתידית, עם קישור או מקור שאפשר לפתוח ולבדוק.",
};

const suggestionEmail = "lastonehaim@gmail.com";

const emailSubject = "הצעת טענה לבדיקה";

const emailBody = `היי,
אני מציע/ה טענה לבדיקה:

הטענה:
[להדביק כאן את הטענה כמו שהיא הופיעה]

איפה ראיתי אותה:
[פייסבוק / וואטסאפ / טיקטוק / אתר / תגובה / סרטון / אחר]

קישור או צילום מסך אם יש:
[להדביק כאן]

מקור ישיר או פתוח, אם יש:
[מסמך רשמי / מחקר / עמוד מקור / תמלול / קישור ישיר]

מה מעניין לבדוק:
[מה גרם לכם לעצור? מקור חסר, ציטוט בלי הקשר, קפיצה לוגית, טענה שחוזרת הרבה וכו']

הערה:
[לא חובה]`;

const emailHref = `mailto:${suggestionEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

const requestFields = [
  ["01", "מה הטענה?", "נסחו במשפט אחד מה בדיוק נטען. לא נושא כללי, אלא טענה שאפשר לבדוק."],
  ["02", "איפה ראיתם אותה?", "פוסט, סרטון, כתבה, תגובה, קבוצת וואטסאפ, צילום מסך או כל מקום אחר שבו הטענה הופיעה."],
  ["03", "יש מקור או קישור?", "עדיף קישור ישיר למסמך, מחקר, עמוד רשמי, כתבה או סרטון מקור. צילום מסך עוזר להבין מה הופץ, אבל הוא לא מספיק לבדו כהוכחה."],
  ["04", "מה מעניין לבדוק?", "כתבו מה גרם לכם לעצור: מקור חסר, קפיצה לוגית, ציטוט בלי הקשר או טענה שחוזרת הרבה."],
];

export default function SuggestClaimPage() {
  return (
    <article>
      <section className="hero">
        <span className="badge">הצע טענה לבדיקה</span>
        <h1>ראיתם טענה שרצה ברשת? אפשר להציע אותה לבדיקה.</h1>
        <p className="lead">
          מקור בדיקה לא בודק כל פרומפט בזמן אמת. הוא בונה בדיקות מקור מסודרות: טענה אחת, מקור שאפשר לפתוח, ומה באמת אפשר להסיק ממנו.
        </p>
      </section>

      <section className="box verdict-box">
        <div className="verdict-grid">
          <div><span className="eyebrow">Input</span><p><strong>טענה אחת + הקשר.</strong></p></div>
          <div><span className="eyebrow">Output</span><p>בדיקה עתידית עם שורה תחתונה, מקור, מה כן נכון ואיפה הקפיצה.</p></div>
          <div><span className="eyebrow">תחום</span><p>טענות ציבוריות, מסמכים, ציטוטים, AI, בריאות, טכנולוגיה, כסף, אקלים ונרטיבים חוזרים.</p></div>
          <div><span className="eyebrow">מה קורה אחר כך</span><p>הטענה תיבחן ידנית מול מקורות פתוחים. שום הצעה לא מתפרסמת אוטומטית.</p></div>
        </div>
      </section>

      <h2>הדרך הכי פשוטה: שליחת טענה במייל</h2>
      <div className="box answer">
        <p>
          לא צריך חשבון GitHub ולא צריך לנסח מושלם. מספיק לשלוח את הטענה כמו שראיתם אותה, איפה היא הופיעה, וקישור או צילום מסך אם יש.
          אם יש מקור ישיר או פתוח מעבר לצילום מסך או כיתוב ויראלי, כדאי לצרף אותו כי הוא יכול לשנות את סדר העדיפות ואת תוצאת הבדיקה.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href={emailHref}>
            שליחת טענה במייל
          </a>
          <a className="button-secondary" href="/methodology">
            איך אנחנו בודקים
          </a>
        </div>
        <p className="small">
          ההצעה תיבדק ידנית. לא כל טענה תהפוך לעמוד, אבל טענות שחוזרות הרבה או נשענות על מקור מעניין יקבלו עדיפות.
        </p>
      </div>

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
          מקור ישיר או פתוח, אם יש: ...<br />
          מה מעניין לבדוק: ...<br />
          הערה נוספת, אם יש: ...
        </p>
      </div>

      <h2>רוצים מעקב ציבורי? אפשר גם דרך GitHub</h2>
      <div className="box answer">
        <p>
          למי שנוח לו עם GitHub, אפשר לפתוח טיוטת Issue מסודרת. שום פרט לא נשלח בזמן ההקלדה; רק אחרי לחיצה ייפתח GitHub עם טיוטה שאפשר לבדוק ולערוך לפני פרסום.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="https://github.com/haimraf/ai-source-lab/issues/new" target="_blank" rel="noreferrer">
            פתיחת הצעה ב-GitHub
          </a>
          <a className="button-secondary" href="/editorial-policy">
            מדיניות עריכה
          </a>
        </div>
      </div>

      <h2>מילוי טופס ל-GitHub</h2>
      <ClaimProposalForm />

      <section className="box method-note">
        <h2>לא כל הצעה תהפוך מיד לעמוד.</h2>
        <p>
          קודם בודקים אם יש טענה ברורה, מקור שאפשר לפתוח וערך ציבורי. המטרה היא לקבל ראיות טובות יותר, לא לפתוח ויכוח. לפעמים התשובה תהיה בדיקה מלאה, ולפעמים רק הסבר קצר או תיעוד להמשך.
        </p>
      </section>
    </article>
  );
}
