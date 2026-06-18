import { CopyBox } from "@/components/CopyBox";
import { EvidenceGallery } from "@/components/EvidenceGallery";
import { siteUrl } from "@/lib/site";

export const metadata = {
  title: "מהי תוכנית שבעת השלבים של אג׳נדה 2030? | מקור בדיקה",
  description: "השוואה בין פוסטרים שמופצים ברשת לבין המסמך הרשמי של אג׳נדה 2030.",
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
    src: "/evidence/agenda-2030-poster-1.svg",
    alt: "פוסטר ויראלי בעברית שמציג רשימת טענות על אג׳נדה 2030",
    title: "מוצג 1.",
    caption: "פוסטר בעברית שמחבר את אג׳נדה 2030 לשורה של טענות. מקורו הראשוני לא אותר.",
  },
  {
    src: "/evidence/agenda-2030-poster-2.svg",
    alt: "פוסטר ויראלי שכותרתו תוכנית שבעת השלבים המוצעת של האו״ם",
    title: "מוצג 2.",
    caption: "פוסטר שמציג רשימה בת שבעה שלבים. הופעת תמונות בו אינה מוכיחה שהמצולמים כתבו או אישרו את הטקסט.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "מהי תוכנית שבעת השלבים של אג׳נדה 2030?",
  description: "השוואה בין פוסטרים שמופצים ברשת לבין המסמך הרשמי של אג׳נדה 2030.",
  datePublished: "2026-06-18",
  dateModified: "2026-06-18",
  inLanguage: "he-IL",
  mainEntityOfPage: pageUrl,
  author: { "@type": "Organization", name: "מקור בדיקה" },
};

export default function Page() {
  const copyText = `אג׳נדה 2030 היא מסמך אמיתי עם 17 יעדים ו-169 מטרות. הרשימה שמכונה "שבעת השלבים" לא נמצאה במסמך הרשמי. המסמך גם מדגיש את הריבונות של כל מדינה.\n${pageUrl}`;

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="claim-meta">
        <span className="badge verdict-badge">לא נמצא מקור רשמי לשבעת השלבים</span>
        <span className="small">נבדק ועודכן: 18 ביוני 2026</span>
      </div>

      <h1>מהי "תוכנית שבעת השלבים" של אג׳נדה 2030?</h1>
      <p className="lead">
        אג׳נדה 2030 היא מסמך אמיתי של האו״ם. הרשימה שמופיעה בפוסטרים תחת הכותרת "שבעת השלבים" אינה מופיעה במסמך הרשמי.
      </p>

      <section className="box answer">
        <span className="eyebrow">תשובה קצרה</span>
        <h2>לא נמצאה תוכנית רשמית בת שבעה שלבים</h2>
        <p>
          המסמך הרשמי של אג׳נדה 2030 כולל 17 יעדים ו-169 מטרות. הפוסטרים שנבדקו מציגים רשימה אחרת, אך בבדיקה לא נמצא מקור רשמי של האו״ם שמנסח או מאשר את אותה רשימה.
        </p>
      </section>

      <section className="box verdict-box">
        <div className="verdict-grid">
          <div><span className="eyebrow">הטענה</span><p>הפוסטר מסכם תוכנית רשמית של האו״ם.</p></div>
          <div><span className="eyebrow">השורה התחתונה</span><p><strong>לא נמצא מסמך רשמי שתומך ברשימה.</strong></p></div>
          <div><span className="eyebrow">מה כן נכון</span><p>אג׳נדה 2030 כוללת 17 יעדים ו-169 מטרות.</p></div>
          <div><span className="eyebrow">איפה הסיפור קופץ</span><p>מיעדי פיתוח לרשימת מסקנות שלא מופיעה במקור.</p></div>
        </div>
      </section>

      <h2>טבלת הטענה</h2>
      <div className="comparison-list">
        <div><strong>מה נטען:</strong><span>האו״ם פרסם תוכנית בת שבעה שלבים.</span></div>
        <div><strong>מה המקור אומר:</strong><span>המסמך הרשמי מציג 17 יעדים ו-169 מטרות.</span></div>
        <div><strong>מה נמצא:</strong><span>נמצא מסמך אג׳נדה 2030; לא נמצאה בו הרשימה מהפוסטר.</span></div>
        <div><strong>מה המסקנה:</strong><span>הפוסטר אינו מקור רשמי לאג׳נדה 2030.</span></div>
      </div>

      <h2>גרסת 60 שניות</h2>
      <div className="box method-note">
        <p>
          יש מסמך אמיתי של האו״ם בשם אג׳נדה 2030. הוא אומץ בשנת 2015 ומציג 17 יעדי פיתוח בר-קיימא ו-169 מטרות. ברשת מסתובבים פוסטרים שמציגים "שבעה שלבים" ומייחסים אותם לאו״ם. בבדיקה מול המסמך הרשמי לא נמצאה חלוקה כזאת ולא נמצאה הרשימה שמופיעה בפוסטר. לכן נכון לומר: אג׳נדה 2030 קיימת, אבל רשימת שבעת השלבים כפי שמופצת ברשת לא נמצאה כמקור רשמי.
        </p>
      </div>

      <h2>מה כתוב במסמך?</h2>
      <p>
        החלטת האו״ם A/RES/70/1 עוסקת בעוני, בריאות, חינוך, שוויון, תשתיות, סביבה ושיתוף פעולה. היא כוללת 17 יעדים ו-169 מטרות.
      </p>

      <div className="evidence-list">
        <section className="evidence-item">
          <span className="evidence-number">01</span>
          <div><h3>המסמך הרשמי קיים</h3><p>העצרת הכללית של האו״ם אימצה אותו בספטמבר 2015.</p></div>
        </section>
        <section className="evidence-item">
          <span className="evidence-number">02</span>
          <div><h3>אין בו חלוקה לשבעה שלבים</h3><p>החלוקה הרשמית היא ל-17 יעדים ול-169 מטרות.</p></div>
        </section>
        <section className="evidence-item">
          <span className="evidence-number">03</span>
          <div><h3>הריבונות לא מבוטלת</h3><p>המסמך מדגיש שלכל מדינה יש ריבונות על המשאבים והפעילות הכלכלית שלה.</p></div>
        </section>
        <section className="evidence-item">
          <span className="evidence-number">04</span>
          <div><h3>הפוסטר מוסיף טענות משלו</h3><p>כמה מהטענות הבולטות בפוסטרים לא נמצאו בטקסט הרשמי שנבדק.</p></div>
        </section>
      </div>

      <h2>הפוסטרים שנבדקו</h2>
      <p>אלה דוגמאות לתוכן שמופץ ברשת. הן מוצגות כאן כדי לתעד את הטענה, לא כמקור שמוכיח אותה.</p>
      <EvidenceGallery exhibits={exhibits} />

      <h2>השוואה קצרה</h2>
      <div className="comparison-list">
        <div><strong>שבעת השלבים:</strong><span>לא נמצאו במסמך הרשמי.</span></div>
        <div><strong>סוף הריבונות:</strong><span>המסמך מדגיש ריבונות של מדינות.</span></div>
        <div><strong>17 יעדים ו-169 מטרות:</strong><span>כן, אלה מופיעים במסמך.</span></div>
        <div><strong>שיתוף פעולה וטכנולוגיה:</strong><span>כן, בהקשר של פיתוח וידע.</span></div>
      </div>

      <h2>שרשרת הטענה</h2>
      <div className="logic-chain">
        <span>יש מסמך רשמי</span><span className="logic-arrow">←</span>
        <span>יש בו יעדים עולמיים</span><span className="logic-arrow">←</span>
        <span>ברשת נוספה רשימה אחרת</span><span className="logic-arrow">←</span>
        <strong>הרשימה מוצגת כאילו נלקחה מהמסמך</strong>
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
        <p>השווינו בין שני הפוסטרים לבין מסמך האו״ם. מקורם הראשוני של הפוסטרים עדיין לא אותר.</p>
      </section>
    </article>
  );
}
