import { CopyBox } from "@/components/CopyBox";
import { siteUrl } from "@/lib/site";

export const metadata = {
  title: "האם תשובת AI היא מקור? | מקור בדיקה",
  description: "בדיקה של הטענה שתשובה של AI יכולה לשמש מקור, דרך קייס הפירמידות והפער בין תשובה משכנעת לבין מקור שניתן לפתוח.",
  alternates: { canonical: "/claims/ai-as-source-pyramids" },
};

const pageUrl = `${siteUrl}/claims/ai-as-source-pyramids`;

const sources = [
  {
    name: "arXiv: LLM hallucinations in the wild",
    url: "https://arxiv.org/abs/2605.07723",
    note: "מחקר רחב על הופעת ציטוטים לא קיימים בטקסטים מדעיים לאחר אימוץ רחב של כלי שפה.",
  },
  {
    name: "arXiv: Measuring Google AI Overviews",
    url: "https://arxiv.org/abs/2605.14021",
    note: "מדידה של תשובות AI בחיפוש, כולל בדיקת נאמנות הטענות למקורות המצוטטים.",
  },
  {
    name: "arXiv: Do Language Models Know When They're Hallucinating References?",
    url: "https://arxiv.org/abs/2305.18248",
    note: "מחקר על ציטוטים שמודלים מייצרים, כולל הפער בין מקור אמיתי לבין הפניה שנראית אמיתית.",
  },
  {
    name: "arXiv: How Generative AI Disrupts Search",
    url: "https://arxiv.org/abs/2604.27790",
    note: "השוואה בין חיפוש רגיל, Gemini ו-AI Overviews, שמראה שהמקורות והתשובות משתנים בין מערכות.",
  },
  {
    name: "arXiv: Timekeeping at Akhet Khufu, as shown by the Diary of Merer",
    url: "https://arxiv.org/abs/2411.08061",
    note: "דוגמה למקור היסטורי ממשי סביב פירמידת ח׳ופו: יומן מרר והובלת אבני גיר מטורה לגיזה.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "האם תשובת AI היא מקור?",
  description: "בדיקה של הטענה שתשובת AI יכולה לשמש מקור, דרך קייס הפירמידות והפער בין תשובה משכנעת לבין מקור שניתן לפתוח.",
  datePublished: "2026-06-19",
  dateModified: "2026-06-19",
  inLanguage: "he-IL",
  mainEntityOfPage: pageUrl,
  author: { "@type": "Organization", name: "מקור בדיקה" },
};

export default function Page() {
  const copyText = `תשובה של AI יכולה להיות נקודת התחלה טובה, אבל היא לא מקור. גם כשהתשובה נשמעת בטוחה, צריך לפתוח את הקישורים, לבדוק מה המקור באמת אומר, ולראות אם המסקנה מופיעה שם או רק נוספה על ידי המודל.\n${pageUrl}`;

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="claim-meta">
        <span className="badge verdict-badge">AI אינו מקור — הוא כלי שמוביל למקורות</span>
        <span className="small">נבדק ועודכן: 19 ביוני 2026</span>
      </div>

      <h1>האם תשובת AI היא מקור?</h1>
      <p className="lead">
        זו אחת הקפיצות החדשות ברשת: שואלים מודל, מקבלים תשובה חלקה, ואז מתייחסים אליה כאילו היא מסמך. אבל תשובה שנשמעת חכמה אינה מקור. המקור הוא הדבר שאפשר לפתוח, לקרוא, לבדוק ולצטט.
      </p>

      <section className="box answer">
        <span className="eyebrow">תשובה קצרה</span>
        <h2>AI יכול לעזור למצוא מקור. הוא לא מחליף אותו.</h2>
        <p>
          מודלים יכולים לסכם, להשוות, להציע כיווני חיפוש ולנסח. הם גם יכולים לטעות, לערבב מקורות, להציג ציטוט לא מדויק או לתת למסקנה מעמד של עובדה. לכן תשובת AI היא רמז לבדיקה — לא הוכחה.
        </p>
      </section>

      <section className="box verdict-box">
        <div className="verdict-grid">
          <div><span className="eyebrow">הטענה</span><p>אם AI ענה משהו בביטחון, אפשר להשתמש בזה כמקור בדיון.</p></div>
          <div><span className="eyebrow">השורה התחתונה</span><p><strong>לא. צריך לבדוק את המקורות שהמודל מפנה אליהם, לא את הטון של התשובה.</strong></p></div>
          <div><span className="eyebrow">מה כן נכון</span><p>AI יכול לחסוך זמן באיתור כיוונים, מושגים ושאלות המשך.</p></div>
          <div><span className="eyebrow">איפה הסיפור קופץ</span><p>מ”המודל ניסח תשובה” ל”יש מקור שמוכיח את זה”.</p></div>
        </div>
      </section>

      <h2>למה זה כל כך משכנע?</h2>
      <div className="evidence-list">
        <section className="evidence-item">
          <span className="evidence-number">01</span>
          <div><h3>הטון נשמע סמכותי</h3><p>מודל לא מגמגם. הוא כותב משפטים חלקים, מסודרים ובטוחים. למוח שלנו זה מרגיש כמו ידע, גם כשזו רק תשובה שנוצרה עכשיו.</p></div>
        </section>
        <section className="evidence-item">
          <span className="evidence-number">02</span>
          <div><h3>יש מילים שמרגישות כמו מקור</h3><p>שם של מחקר, מוסד, מסמך או תקופה היסטורית יכול לגרום לתשובה להיראות מבוססת. אבל עד שפותחים את הקישור ובודקים אותו, זו עדיין לא ראיה.</p></div>
        </section>
        <section className="evidence-item">
          <span className="evidence-number">03</span>
          <div><h3>הוא סוגר לנו את הסיפור מהר</h3><p>בדיון עמוס, תשובה אחת מסודרת נותנת תחושת סיום. זו בדיוק הסכנה: לפעמים היא סוגרת שאלה שהמקורות עדיין משאירים פתוחה.</p></div>
        </section>
      </div>

      <h2>קייס הפירמידות: מה הבעיה?</h2>
      <p>
        פירמידות הן דוגמה מצוינת כי יש בהן גם עובדות אמיתיות, גם שאלות פתוחות וגם המון סיפורים ברשת. מודל יכול לכתוב תשובה יפה על רמפות, יומן מרר, אבני גיר מטורה, עובדים מאורגנים או תאוריות בנייה שונות. חלק מזה יכול להיות נכון. הבעיה מתחילה כשהתשובה הופכת את הכל למסקנה סגורה מדי.
      </p>

      <div className="comparison-list">
        <div><strong>מה מקור יכול להראות:</strong><span>למשל תיעוד היסטורי על הובלת אבני גיר מטורה לגיזה ביומן מרר.</span></div>
        <div><strong>מה מקור לא בהכרח מוכיח:</strong><span>את כל שיטת הבנייה של הפירמידה, או שכל תאוריה על רמפה מסוימת הוכחה סופית.</span></div>
        <div><strong>מה AI עלול לעשות:</strong><span>לחבר עובדות אמיתיות, השערות ומסקנה רחבה למשפט אחד שנשמע סגור.</span></div>
        <div><strong>מה בודקים בפועל:</strong><span>האם המסקנה מופיעה במקור עצמו, או רק בתשובה של המודל.</span></div>
      </div>

      <h2>גרסת 60 שניות</h2>
      <div className="box method-note">
        <p>
          תשובת AI היא כמו אדם חכם שאומר לך “תחפש פה”. זה שימושי. אבל היא לא מסמך, לא מחקר, לא תקן ולא עדות. אם מודל אומר “לפי מחקר” — פותחים את המחקר. אם הוא אומר “מקובל לחשוב” — בודקים מי חושב כך ועל בסיס מה. ואם הוא לא מציג מקור שניתן לפתוח, התשובה לא יכולה לסגור את הדיון.
        </p>
      </div>

      <h2>שרשרת הטענה</h2>
      <div className="logic-chain">
        <span>AI נתן תשובה בטוחה</span><span className="logic-arrow">←</span>
        <span>התשובה הזכירה מושגים אמיתיים</span><span className="logic-arrow">←</span>
        <span>חלק מהמקורות אולי קיימים</span><span className="logic-arrow">←</span>
        <strong>לכן התשובה עצמה היא מקור שמוכיח את הטענה</strong>
      </div>
      <p className="small">שלושת החלקים הראשונים יכולים להיות נכונים. הקפיצה היא להפוך תשובה של מודל למסמך סמכותי.</p>

      <h2>איך להשתמש ב-AI נכון בבדיקת מקורות?</h2>
      <div className="comparison-list">
        <div><strong>כן:</strong><span>לבקש ממנו מונחים, שמות מסמכים, שאלות נגדיות וכיווני חיפוש.</span></div>
        <div><strong>כן:</strong><span>לבקש ממנו להסביר מקור שכבר פתחת ולבקש ממנו לציין איפה בדיוק כתוב כל דבר.</span></div>
        <div><strong>לא:</strong><span>להעתיק תשובה בלי לפתוח את המקורות שהיא מזכירה.</span></div>
        <div><strong>לא:</strong><span>להשתמש ב”ה-AI אמר” כראיה בדיון ציבורי.</span></div>
      </div>

      <h2>שאלות נפוצות</h2>
      <div className="faq-list">
        <details>
          <summary>אם המודל מצרף קישורים, זה לא מספיק?</summary>
          <p>לא. צריך לפתוח את הקישור ולבדוק שהמקור באמת אומר את מה שהמודל מייחס לו. לפעמים הקישור אמיתי אבל המסקנה לא מופיעה בו.</p>
        </details>
        <details>
          <summary>אז אסור להשתמש ב-AI למחקר?</summary>
          <p>מותר ואף שימושי. הוא טוב כמפת דרכים, לא כתחנה אחרונה. משתמשים בו כדי למצוא מה לבדוק, ואז בודקים את המקור עצמו.</p>
        </details>
        <details>
          <summary>מה ההבדל בין מקור לבין סיכום?</summary>
          <p>מקור הוא המסמך, המחקר, הנתון או העדות שאפשר לפתוח ולבדוק. סיכום הוא פרשנות או עיבוד של מקור, גם אם הוא נכתב יפה.</p>
        </details>
        <details>
          <summary>איזו ראיה הייתה משנה את המסקנה?</summary>
          <p>לא תשובה של מודל, אלא מקור שניתן לפתוח: מחקר, מסמך, נתון, תיעוד או ציטוט מדויק שתומך בטענה עצמה.</p>
        </details>
      </div>

      <h2>תגובה קצרה להעתקה</h2>
      <CopyBox text={copyText} />

      <h2>המקורות שנבדקו</h2>
      <ol className="source-list source-cards">
        {sources.map((source) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noreferrer"><strong>{source.name}</strong></a>
            <p className="small">{source.note}</p>
          </li>
        ))}
      </ol>

      <section className="box method-note">
        <h2>איך נבדקה הטענה?</h2>
        <p>הבדיקה הפרידה בין שלושה דברים: תשובת המודל, המקורות שהמודל מפנה אליהם, והמסקנה שהמשתמש לוקח מהתשובה. המסקנה כאן אינה ש-AI לא שימושי, אלא שהוא לא מחליף מקור שניתן לבדיקה.</p>
      </section>
    </article>
  );
}
