import { CopyBox } from "@/components/CopyBox";
import { EvidenceGallery } from "@/components/EvidenceGallery";
import { siteUrl } from "@/lib/site";

export const metadata = {
  title: "האם קיימת תוכנית רשמית בת שבעה שלבים של אג׳נדה 2030? | מקור בדיקה",
  description: "בדיקה שמפרידה בין אג׳נדה 2030 הרשמית של האו״ם לבין פוסטרים ויראליים שמציגים רשימת שבעה שלבים שלא נמצאה במסמך המקור.",
  alternates: { canonical: "/claims/agenda-2030-seven-steps" },
};

const pageUrl = `${siteUrl}/claims/agenda-2030-seven-steps`;

const sources = [
  {
    name: "החלטת העצרת הכללית A/RES/70/1",
    url: "https://documents.un.org/doc/undoc/gen/n15/291/89/pdf/n1529189.pdf",
    note: "המסמך הרשמי שאימץ את אג׳נדה 2030 בשנת 2015.",
  },
  {
    name: "עמוד אג׳נדה 2030 באתר האו״ם",
    url: "https://sdgs.un.org/2030agenda",
    note: "עמוד רשמי שמציג את 17 היעדים ואת מטרות התוכנית.",
  },
];

const exhibits = [
  {
    src: "/evidence/agenda-2030-poster-1.webp",
    alt: "פוסטר ויראלי בעברית שמציג רשימת טענות על אג׳נדה 2030",
    title: "מוצג 1.",
    caption: "פוסטר בעברית שמחבר את אג׳נדה 2030 לשורה של טענות. מקורו הראשוני לא אותר.",
  },
  {
    src: "/evidence/agenda-2030-poster-2.webp",
    alt: "פוסטר ויראלי שכותרתו תוכנית שבעת השלבים המוצעת של האו״ם",
    title: "מוצג 2.",
    caption: "פוסטר שמציג רשימה בת שבעה שלבים. הופעת תמונות בו אינה מוכיחה שהמצולמים כתבו או אישרו את הטקסט.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "האם קיימת תוכנית רשמית בת שבעה שלבים של אג׳נדה 2030?",
  description: "בדיקה שמפרידה בין אג׳נדה 2030 הרשמית של האו״ם לבין פוסטרים ויראליים שמציגים רשימת שבעה שלבים שלא נמצאה במסמך המקור.",
  datePublished: "2026-06-18",
  dateModified: "2026-06-23",
  inLanguage: "he-IL",
  mainEntityOfPage: pageUrl,
  author: { "@type": "Person", name: "חיים רפאל", url: `${siteUrl}/about` },
};

export default function Page() {
  const copyText = `אג׳נדה 2030 היא מסמך אמיתי של האו״ם עם 17 יעדי פיתוח בר-קיימא ו-169 מטרות. אבל רשימת "שבעת השלבים" שמופצת בפוסטרים לא נמצאה במסמך הרשמי. נכון לומר: אג׳נדה 2030 קיימת; הייחוס של הרשימה הוויראלית כמסמך רשמי של האו״ם לא נמצא במקור.
${pageUrl}`;

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="claim-meta">
        <span className="badge verdict-badge">אג׳נדה 2030 קיימת — רשימת שבעת השלבים לא נמצאה כמסמך רשמי</span>
        <span className="small">נבדק ועודכן: 23 ביוני 2026</span>
      </div>

      <h1>האם קיימת תוכנית רשמית בת שבעה שלבים של אג׳נדה 2030?</h1>
      <p className="lead">אג׳נדה 2030 היא מסמך אמיתי של האו״ם. אבל הרשימה שמופיעה בפוסטרים תחת הכותרת "שבעת השלבים" אינה מופיעה במסמך הרשמי שנבדק.</p>

      <section className="box answer">
        <span className="eyebrow">תשובה קצרה</span>
        <h2>אג׳נדה 2030 קיימת — רשימת שבעת השלבים לא נמצאה כמסמך רשמי</h2>
        <p>
          המסמך הרשמי של אג׳נדה 2030 קיים והוא כולל 17 יעדי פיתוח בר-קיימא ו-169 מטרות. בבדיקה מול החלטת האו״ם A/RES/70/1 ועמוד אג׳נדה 2030 הרשמי לא נמצאה רשימת שבעה שלבים כמו זו שמופצת בפוסטרים. לכן הגרעין נכון — אג׳נדה 2030 קיימת — אבל הייחוס של הרשימה הוויראלית כמסמך רשמי של האו״ם לא נמצא במקור.
        </p>
        <p>
          המסקנה צרה: הפוסטרים יכולים לבטא פרשנות, ביקורת או חשש פוליטי, אבל כדי לקרוא להם תוכנית רשמית צריך מקור רשמי שמציג את אותה רשימה. מקור כזה לא נמצא בבדיקה.
        </p>
      </section>

      <section className="box verdict-box">
        <div className="verdict-grid">
          <div><span className="eyebrow">הטענה</span><p>פוסטרים ברשת מציגים רשימת שבעה שלבים וטוענים שהיא תוכנית רשמית של האו״ם במסגרת אג׳נדה 2030.</p></div>
          <div><span className="eyebrow">מה כן נכון</span><p>אג׳נדה 2030 היא מסמך רשמי של האו״ם שאומץ בשנת 2015.</p></div>
          <div><span className="eyebrow">מה לא נמצא</span><p>לא נמצאה במסמך הרשמי רשימת שבעה שלבים כמו זו שמופצת בפוסטרים.</p></div>
          <div><span className="eyebrow">מסקנה</span><p><strong>אג׳נדה 2030 קיימת — רשימת שבעת השלבים לא נמצאה כמסמך רשמי</strong></p></div>
        </div>
      </section>

      <h2>טבלת הטענה</h2>
      <div className="comparison-list">
        <div><strong>מה נטען:</strong><span>האו״ם פרסם תוכנית רשמית בת שבעה שלבים.</span></div>
        <div><strong>מה המקור אומר:</strong><span>המסמך הרשמי מציג 17 יעדי פיתוח בר-קיימא ו-169 מטרות.</span></div>
        <div><strong>מה נמצא:</strong><span>נמצא מסמך אג׳נדה 2030; לא נמצאה בו הרשימה מהפוסטרים.</span></div>
        <div><strong>מה המסקנה:</strong><span>הפוסטרים אינם מקור רשמי לאג׳נדה 2030.</span></div>
      </div>

      <h2>גרסת 60 שניות</h2>
      <div className="box method-note">
        <p>
          יש מסמך אמיתי של האו״ם בשם אג׳נדה 2030. הוא אומץ בשנת 2015 ומציג 17 יעדי פיתוח בר-קיימא ו-169 מטרות. ברשת מסתובבים פוסטרים שמציגים "שבעה שלבים" ומייחסים אותם לאו״ם. בבדיקה מול המסמך הרשמי לא נמצאה חלוקה כזאת ולא נמצאה הרשימה שמופיעה בפוסטרים. לכן נכון לומר: אג׳נדה 2030 קיימת, אבל רשימת שבעת השלבים כפי שמופצת ברשת לא נמצאה כמקור רשמי.
        </p>
      </div>

      <h2>מה כתוב במסמך הרשמי?</h2>
      <p>
        החלטת האו״ם A/RES/70/1 עוסקת בעוני, בריאות, חינוך, שוויון, תשתיות, סביבה ושיתוף פעולה. היא כוללת 17 יעדי פיתוח בר-קיימא ו-169 מטרות. זו התשתית הרשמית של אג׳נדה 2030, לא רשימת שבעה שלבים.
      </p>

      <div className="evidence-list">
        <section className="evidence-item">
          <span className="evidence-number">01</span>
          <div><h3>המסמך הרשמי קיים</h3><p>העצרת הכללית של האו״ם אימצה את אג׳נדה 2030 בספטמבר 2015.</p></div>
        </section>
        <section className="evidence-item">
          <span className="evidence-number">02</span>
          <div><h3>אין בו חלוקה לשבעה שלבים</h3><p>החלוקה הרשמית היא ל-17 יעדי SDGs ול-169 מטרות, ולא לרשימה שמופיעה בפוסטרים שנבדקו.</p></div>
        </section>
        <section className="evidence-item">
          <span className="evidence-number">03</span>
          <div><h3>הריבונות לא מוצגת כמבוטלת</h3><p>המסמך מדגיש את האחריות והמרחב של מדינות בקביעת המדיניות שלהן. זה לא אומר שאין השפעה בינלאומית, אבל זה לא אותו דבר כמו ביטול ריבונות.</p></div>
        </section>
        <section className="evidence-item">
          <span className="evidence-number">04</span>
          <div><h3>הפוסטר מוסיף טענות משלו</h3><p>כמה מהטענות הבולטות בפוסטרים לא נמצאו בטקסט הרשמי שנבדק, ולכן צריך להתייחס אליהן כאל טענות נפרדות שדורשות מקור משלהן.</p></div>
        </section>
      </div>

      <h2>הפוסטרים שנבדקו</h2>
      <p>אלה דוגמאות לתוכן שמופץ ברשת. הן מוצגות כאן כדי לתעד את הטענה, לא כמקור שמוכיח אותה.</p>
      <EvidenceGallery exhibits={exhibits} />

      <h2>השוואה קצרה</h2>
      <div className="comparison-list">
        <div><strong>שבעת השלבים:</strong><span>לא נמצאו במסמך הרשמי.</span></div>
        <div><strong>סוף הריבונות:</strong><span>המסמך אינו מציג ביטול ריבונות מדינות.</span></div>
        <div><strong>17 יעדים ו-169 מטרות:</strong><span>כן, אלה מופיעים במסמך הרשמי.</span></div>
        <div><strong>שיתוף פעולה וטכנולוגיה:</strong><span>כן, בהקשר של פיתוח, ידע ויישום מדיניות.</span></div>
      </div>

      <h2>מה כן אפשר לבקר?</h2>
      <div className="comparison-list">
        <div><strong>יעדים גלובליים</strong><span>אפשר לבקר את הרעיון של יעדים בינלאומיים ואת ההשפעה שלהם על סדרי עדיפויות מקומיים.</span></div>
        <div><strong>מדידה ודיווח</strong><span>אפשר לשאול איך מדדים בינלאומיים משפיעים על מדיניות ועל תקציבים.</span></div>
        <div><strong>השפעת מוסדות</strong><span>אפשר לבקר את כוחם של מוסדות בינלאומיים, קרנות, ממשלות ופורומים כלכליים.</span></div>
        <div><strong>מה זה לא מוכיח</strong><span>ביקורת כזאת אינה הוכחה שהפוסטרים הם מסמך רשמי של האו״ם או תוכנית בת שבעה שלבים.</span></div>
      </div>

      <h2>שרשרת הקפיצה</h2>
      <div className="logic-chain">
        <span>יש מסמך רשמי</span><span className="logic-arrow">←</span>
        <span>יש בו יעדים עולמיים</span><span className="logic-arrow">←</span>
        <span>ברשת נוספה רשימה אחרת</span><span className="logic-arrow">←</span>
        <strong>הרשימה מוצגת כאילו נלקחה מהמסמך</strong>
      </div>
      <p className="small">השלב האחרון הוא בדיוק המקום שבו צריך מקור רשמי שמחבר בין הפוסטר לבין המסמך. מקור כזה לא נמצא בבדיקה.</p>

      <h2>שאלות נפוצות</h2>
      <div className="faq-list">
        <details><summary>אז אג׳נדה 2030 אמיתית?</summary><p>כן. אג׳נדה 2030 היא מסמך רשמי של האו״ם שאומץ ב-2015. הבדיקה אינה אומרת שהמסמך לא קיים, אלא שרשימת שבעת השלבים שמופצת בפוסטרים לא נמצאה במסמך הרשמי.</p></details>
        <details><summary>מה כן מופיע במסמך הרשמי?</summary><p>המסמך מציג 17 יעדי פיתוח בר-קיימא ו-169 מטרות בתחומים כמו עוני, בריאות, חינוך, תשתיות, סביבה ושיתוף פעולה. זו החלוקה הרשמית שנמצאה במקור.</p></details>
        <details><summary>איפה מתרחשת הקפיצה הלוגית?</summary><p>הקפיצה היא לעבור ממסמך אמיתי של האו״ם לרשימה ויראלית אחרת, ואז להציג את הרשימה כאילו היא חלק מהמסמך. בשביל זה צריך מקור רשמי שמחבר בין השניים, ומקור כזה לא נמצא בבדיקה הזאת.</p></details>
        <details><summary>האם מותר לבקר את אג׳נדה 2030?</summary><p>כן. אפשר לבקר יעדים, מדיניות, מדידה, השפעה פוליטית או יישום מקומי. אבל ביקורת על המסמך או על האו״ם אינה הוכחה לכך שפוסטר מסוים הוא מסמך רשמי.</p></details>
        <details><summary>איזו ראיה הייתה משנה את המסקנה?</summary><p>מסמך רשמי של האו״ם, החלטה, נספח, עמוד רשמי או פרסום מוסדי שמציג את אותה רשימת שבעה שלבים כחלק מאג׳נדה 2030. פוסטר בלי מקור ראשוני אינו מספיק.</p></details>
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
        <p>השווינו בין הפוסטרים לבין החלטת האו״ם A/RES/70/1 ועמוד אג׳נדה 2030 הרשמי. מקורם הראשוני של הפוסטרים עדיין לא אותר, ולכן הם משמשים כאן כתיעוד של הטענה, לא כמקור שמוכיח אותה.</p>
      </section>
    </article>
  );
}
