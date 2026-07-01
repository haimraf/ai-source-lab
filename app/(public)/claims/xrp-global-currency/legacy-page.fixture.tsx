import { CopyBox } from "@/components/CopyBox";
import { siteUrl } from "@/lib/site";

export const metadata = {
  title: "האם XRP נבחר להיות המטבע העולמי? | מקור בדיקה",
  description:
    "בדיקה מבוססת מקורות רשמיים לטענה ש-XRP נבחר להיות מטבע עולמי, מטבע רזרבה או תחליף למטבעות מדינתיים.",
  alternates: {
    canonical: "/claims/xrp-global-currency",
  },
};

const pageUrl = `${siteUrl}/claims/xrp-global-currency`;

const sources = [
  {
    name: "Ripple: XRP",
    url: "https://ripple.com/xrp/",
    note: "Ripple מתארת את XRP כנכס של XRP Ledger וככלי שיכול לגשר בין מטבעות.",
  },
  {
    name: "XRP Ledger: About XRP",
    url: "https://xrpl.org/about/xrp",
    note: "התיעוד הרשמי מסביר ש-XRP נועד לתשלומים ויכול לשמש גשר בין מטבעות.",
  },
  {
    name: "Ripple: Cross-Border Payments",
    url: "https://ripple.com/solutions/cross-border-payments/",
    note: "פתרון התשלומים של Ripple משלב מטבעות רגילים, XRP, מטבעות יציבים ונכסים נוספים.",
  },
  {
    name: "ISO 20022: About the Standard",
    url: "https://www.iso20022.org/about-iso-20022",
    note: "ISO 20022 הוא תקן למסרים פיננסיים. הוא אינו רשימת מטבעות מאושרים.",
  },
  {
    name: "IMF: Special Drawing Rights",
    url: "https://www.imf.org/en/about/factsheets/sheets/2023/special-drawing-rights-sdr",
    note: "סל ה-SDR כולל חמישה מטבעות. XRP אינו אחד מהם.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "האם XRP נבחר להיות המטבע העולמי?",
      description:
        "בדיקה מבוססת מקורות רשמיים לטענה ש-XRP נבחר להיות מטבע עולמי או מטבע רזרבה.",
      datePublished: "2026-06-18",
      dateModified: "2026-06-18",
      inLanguage: "he-IL",
      mainEntityOfPage: pageUrl,
      author: {
        "@type": "Person",
        name: "חיים רפאל",
        url: `${siteUrl}/about`,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "האם XRP נבחר להיות המטבע העולמי?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "לא נמצא מקור רשמי לכך ש-XRP נבחר להיות מטבע עולמי, מטבע רזרבה עולמי או תחליף למטבעות מדינתיים.",
          },
        },
        {
          "@type": "Question",
          name: "האם ISO 20022 מאשר את XRP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "לא. ISO 20022 הוא תקן למסרים ולמידע פיננסי. הוא אינו גוף שמאשר מטבעות.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  const copyText = `לא נמצא מקור רשמי לכך ש-XRP נבחר להיות מטבע עולמי. Ripple עצמה עובדת גם עם מטבעות רגילים, מטבעות יציבים ונכסים נוספים. ISO 20022 הוא תקן למסרים פיננסיים, לא אישור למטבע מסוים.\n${pageUrl}`;

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="claim-meta">
        <span className="badge verdict-badge">לא נמצא בסיס רשמי לטענה</span>
        <span className="small">נבדק ועודכן: 18 ביוני 2026</span>
      </div>

      <h1>האם XRP נבחר להיות המטבע העולמי?</h1>
      <p className="lead">
        לא נמצא מקור רשמי לכך ש-XRP נבחר להיות מטבע עולמי, מטבע רזרבה עולמי או תחליף למטבעות מדינתיים. יש לו שימוש אמיתי בתשלומים ובגישור בין מטבעות, אבל זה לא מוכיח שנבחר למלא תפקיד עולמי רשמי.
      </p>

      <section className="box answer">
        <span className="eyebrow">תשובה קצרה</span>
        <h2>לא נמצא מקור רשמי שבחר ב-XRP כמטבע עולמי</h2>
        <p>
          XRP הוא נכס דיגיטלי אמיתי עם שימושים שמתוארים על ידי Ripple ו-XRP Ledger. אבל בבדיקה לא נמצא מסמך רשמי של Ripple, ISO, קרן המטבע או גוף בינלאומי שבוחר בו כמטבע עולמי או כמטבע רזרבה.
        </p>
      </section>

      <section className="box verdict-box">
        <div className="verdict-grid">
          <div>
            <span className="eyebrow">הטענה</span>
            <p>"XRP נבחר להיות המטבע העולמי של המערכת הפיננסית החדשה".</p>
          </div>
          <div>
            <span className="eyebrow">השורה התחתונה</span>
            <p><strong>לא נמצא לכך מקור רשמי.</strong></p>
          </div>
          <div>
            <span className="eyebrow">מה כן נכון</span>
            <p>XRP יכול לשמש להעברת ערך ולגישור בין מטבעות.</p>
          </div>
          <div>
            <span className="eyebrow">איפה הסיפור קופץ</span>
            <p>משימוש אפשרי בתשתיות תשלום לבחירה רשמית כמטבע עולמי.</p>
          </div>
        </div>
      </section>

      <h2>טבלת הטענה</h2>
      <div className="comparison-list">
        <div><strong>מה נטען:</strong><span>XRP נבחר להיות המטבע העולמי או מטבע הרזרבה הבא.</span></div>
        <div><strong>מה המקורות אומרים:</strong><span>Ripple ו-XRP Ledger מתארים שימושים בתשלומים ובגישור בין מטבעות.</span></div>
        <div><strong>מה נמצא:</strong><span>לא נמצא מסמך רשמי שמעניק ל-XRP מעמד עולמי רשמי.</span></div>
        <div><strong>מה המסקנה:</strong><span>יש שימושים אמיתיים; אין ראיה לבחירה רשמית כמטבע עולמי.</span></div>
      </div>

      <h2>גרסת 60 שניות</h2>
      <div className="box method-note">
        <p>
          XRP הוא נכס דיגיטלי אמיתי, וריפל אכן פועלת בעולם התשלומים הבינלאומיים. בנוסף, ISO 20022 הוא תקן אמיתי למסרים פיננסיים. הקפיצה מתחילה כשמחברים את העובדות האלה למסקנה ש-XRP נבחר להיות המטבע העולמי. בבדיקה מול מקורות רשמיים של Ripple, XRP Ledger, ISO 20022 וקרן המטבע לא נמצא מקור שמעניק ל-XRP מעמד כזה.
        </p>
      </div>

      <h2>למה הטענה נשמעת הגיונית?</h2>
      <p>
        היא בנויה מכמה עובדות אמיתיות. Ripple פועלת בתחום התשלומים, XRP נועד בין השאר להעברת ערך, ומערכות פיננסיות עוברות ל-ISO 20022. הבעיה מתחילה כשמחברים את כל זה להחלטה עולמית שלא הוצג לה מסמך.
      </p>

      <div className="evidence-list">
        <section className="evidence-item">
          <span className="evidence-number">01</span>
          <div>
            <h3>XRP הוא נכס עם שימוש מוגדר</h3>
            <p>
              Ripple ו-XRP Ledger מתארים אותו כנכס שנועד לתשלומים ויכול לגשר בין מטבעות. זו עובדה. זו לא הכרזה על מטבע עולמי.
            </p>
          </div>
        </section>

        <section className="evidence-item">
          <span className="evidence-number">02</span>
          <div>
            <h3>Ripple לא עובדת רק עם XRP</h3>
            <p>
              פתרון התשלומים של Ripple משלב מטבעות רגילים, מטבעות יציבים ונכסים דיגיטליים. במקרים מסוימים אפשר להשתמש ב-XRP, ובמקרים אחרים בנכס אחר. זה לא נראה כמו מערכת שנבנתה סביב מטבע יחיד.
            </p>
          </div>
        </section>

        <section className="evidence-item">
          <span className="evidence-number">03</span>
          <div>
            <h3>ISO 20022 אינו רשימת מטבעות מאושרים</h3>
            <p>
              ISO 20022 הוא תקן למסרים פיננסיים. הוא מגדיר איך מערכות מחליפות מידע. הוא לא בוחר מטבע עולמי ולא מעניק למטבע כלשהו מעמד של רזרבה.
            </p>
          </div>
        </section>

        <section className="evidence-item">
          <span className="evidence-number">04</span>
          <div>
            <h3>XRP אינו חלק מסל ה-SDR</h3>
            <p>
              לפי קרן המטבע, סל ה-SDR מבוסס על דולר, אירו, רנמינבי, ין וליש"ט. XRP אינו חלק מהסל. גם ה-SDR עצמו אינו מטבע שמיועד לציבור.
            </p>
          </div>
        </section>
      </div>

      <h2>שרשרת הטענה</h2>
      <div className="logic-chain" aria-label="שרשרת הקפיצה הלוגית">
        <span>Ripple עובדת על תשלומים</span>
        <span className="logic-arrow">←</span>
        <span>XRP יכול לגשר בין מטבעות</span>
        <span className="logic-arrow">←</span>
        <span>בנקים משתמשים ב-ISO 20022</span>
        <span className="logic-arrow">←</span>
        <strong>לכן XRP נבחר כמטבע העולמי</strong>
      </div>
      <p className="small">
        שלושת השלבים הראשונים יכולים להיות נכונים. המסקנה האחרונה לא נובעת מהם בלי מסמך או החלטה רשמית.
      </p>

      <h2>מה אפשר לקבוע?</h2>
      <p>
        ל-XRP יש שימוש אמיתי והוא עשוי לקבל בעתיד תפקיד רחב יותר. נכון ל-18 ביוני 2026, לא נמצא מקור רשמי שבחר בו כמטבע עולמי או כמטבע רזרבה עולמי.
      </p>

      <h2>שאלות נפוצות</h2>
      <div className="faq-list">
        <details>
          <summary>אז XRP תואם ל-ISO 20022?</summary>
          <p>
            הניסוח הזה מבלבל. ISO 20022 הוא תקן למסרים פיננסיים שמערכות וארגונים יכולים ליישם. הוא אינו גוף שמאשר מטבעות.
          </p>
        </details>
        <details>
          <summary>האם XRP יכול לשמש גשר בין מטבעות?</summary>
          <p>
            כן. זה אחד השימושים שמתוארים בחומרי Ripple ובתיעוד של XRP Ledger. זה עדיין שונה מבחירה בו כמטבע היחיד בעולם.
          </p>
        </details>
        <details>
          <summary>האם XRP יכול להפוך בעתיד לנכס רזרבה?</summary>
          <p>
            אי אפשר לדעת מה יקרה בעתיד. כדי לטעון שהוא כבר נבחר צריך להציג מקור רשמי עדכני. בבדיקה הזאת לא נמצא מקור כזה.
          </p>
        </details>
      </div>

      <h2>תגובה קצרה להעתקה</h2>
      <CopyBox text={copyText} />

      <h2>המקורות שנבדקו</h2>
      <ol className="source-list source-cards">
        {sources.map((source) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noreferrer">
              <strong>{source.name}</strong>
            </a>
            <p className="small">{source.note}</p>
          </li>
        ))}
      </ol>

      <section className="box method-note">
        <h2>איך נבדקה הטענה?</h2>
        <p>
          הבדיקה התבססה על מקורות רשמיים של Ripple, XRP Ledger, ISO 20022 וקרן המטבע. תחזיות מחיר, משפיעני קריפטו ופוסטים אנונימיים לא שימשו מקור להחלטה מוסדית.
        </p>
      </section>
    </article>
  );
}
