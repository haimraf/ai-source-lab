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
    name: "Ripple — XRP",
    url: "https://ripple.com/xrp/",
    note: "Ripple מגדירה את XRP כאסימון המקורי של XRP Ledger וככלי שיכול לגשר בין מטבעות.",
  },
  {
    name: "XRP Ledger — XRP Overview",
    url: "https://xrpl.org/about/xrp",
    note: "התיעוד מתאר את XRP כנכס דיגיטלי שנוצר לתשלומים ויכול לשמש גשר בין מטבעות.",
  },
  {
    name: "Ripple — Cross-Border Payments",
    url: "https://ripple.com/solutions/cross-border-payments/",
    note: "הפתרון הנוכחי משלב מטבעות רגילים, XRP, Stablecoins ונכסים דיגיטליים אחרים.",
  },
  {
    name: "ISO 20022 — About the Standard",
    url: "https://www.iso20022.org/about-iso-20022",
    note: "ISO 20022 הוא תקן לפיתוח ולהחלפה של מסרים ומידע פיננסי, לא רשימת מטבעות מאושרים.",
  },
  {
    name: "IMF — Special Drawing Rights",
    url: "https://www.imf.org/en/about/factsheets/sheets/2023/special-drawing-rights-sdr",
    note: "סל ה-SDR מבוסס על דולר, אירו, רנמינבי, ין וליש״ט. XRP אינו חלק ממנו.",
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
        "@type": "Organization",
        name: "מקור בדיקה",
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
            text: "ISO 20022 הוא תקן למסרים ולמידע פיננסי. הוא אינו רשימת מטבעות מאושרים ואינו ממנה מטבע עולמי.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  const copyText = `לא נמצא מקור רשמי לכך ש-XRP נבחר להיות מטבע עולמי. XRP אכן משמש כנכס דיגיטלי וכגשר אפשרי בין מטבעות, אבל Ripple עצמה מציגה כיום פתרונות שמשלבים גם פיאט, Stablecoins ונכסים אחרים. גם ISO 20022 הוא תקן למסרים פיננסיים — לא אישור למטבע מסוים.\n\nהבדיקה והמקורות: ${pageUrl}`;

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
        לא נמצא מקור רשמי לכך ש-XRP נבחר להיות מטבע עולמי, מטבע רזרבה עולמי או תחליף מתוכנן למטבעות מדינתיים. יש ל-XRP שימוש אמיתי בתשלומים ובגישור בין מטבעות — אבל מכאן ועד “מטבע עולמי אחד” חסרה החלטה רשמית שלא הוצגה.
      </p>

      <section className="box verdict-box">
        <div className="verdict-grid">
          <div>
            <span className="eyebrow">הטענה</span>
            <p>“XRP הוא המטבע העולמי שנבחר למערכת הפיננסית החדשה.”</p>
          </div>
          <div>
            <span className="eyebrow">השורה התחתונה</span>
            <p><strong>לא מבוסס במקורות הרשמיים שנבדקו.</strong></p>
          </div>
          <div>
            <span className="eyebrow">מה כן נכון</span>
            <p>XRP הוא נכס דיגיטלי שיכול לשמש להעברת ערך ולגישור בין מטבעות.</p>
          </div>
          <div>
            <span className="eyebrow">הקפיצה המרכזית</span>
            <p>שימוש אפשרי בתשתיות תשלום אינו הוכחה לבחירה רשמית כמטבע עולמי.</p>
          </div>
        </div>
      </section>

      <h2>מאיפה הטענה מקבלת תחושת אמינות?</h2>
      <p>
        היא נבנית מכמה חלקים אמיתיים: Ripple פועלת בעולם התשלומים, XRP נועד בין היתר לתשלומים מהירים, ו-XRP יכול לשמש גשר בין מטבעות. כאשר מוסיפים לזה את המעבר של מערכות פיננסיות ל-ISO 20022, קל להפוך כמה עובדות נפרדות לסיפור אחד גדול.
      </p>

      <div className="evidence-list">
        <section className="evidence-item">
          <span className="evidence-number">01</span>
          <div>
            <h3>XRP הוא נכס אמיתי עם שימוש מוגדר</h3>
            <p>
              Ripple ו-XRP Ledger מתארים את XRP כאסימון המקורי של הרשת, שנועד לתשלומים ויכול לגשר בין מטבעות. זו עובדה טכנולוגית — לא הכרזה על מטבע עולמי.
            </p>
          </div>
        </section>

        <section className="evidence-item">
          <span className="evidence-number">02</span>
          <div>
            <h3>אפילו Ripple אינה מציגה את XRP כאפשרות היחידה</h3>
            <p>
              פתרון התשלומים הנוכחי של Ripple מתאר תנועה בין מטבעות רגילים, Stablecoins ונכסים דיגיטליים. בתהליך אפשר להשתמש ב-XRP או ב-Stablecoin כמו RLUSD. זה מחליש את הטענה שכל המערכת נבנתה סביב מטבע עולמי יחיד.
            </p>
          </div>
        </section>

        <section className="evidence-item">
          <span className="evidence-number">03</span>
          <div>
            <h3>ISO 20022 אינו “רשימת מטבעות מאושרים”</h3>
            <p>
              האתר הרשמי של ISO 20022 מגדיר אותו כגישה וכתשתית משותפת לפיתוח מסרים פיננסיים מובנים. התקן עוסק באופן שבו מערכות מחליפות מידע — הוא אינו בוחר מטבע עולמי ואינו מעניק למטבע מסוים מעמד של רזרבה.
            </p>
          </div>
        </section>

        <section className="evidence-item">
          <span className="evidence-number">04</span>
          <div>
            <h3>גם סל הרזרבה של ה-IMF אינו כולל XRP</h3>
            <p>
              ה-IMF מגדיר את ה-SDR כנכס רזרבה המבוסס על חמישה מטבעות: דולר אמריקאי, אירו, רנמינבי סיני, ין יפני וליש״ט. XRP אינו חלק מהסל, וה-SDR עצמו כלל אינו מטבע לציבור.
            </p>
          </div>
        </section>
      </div>

      <h2>איפה בדיוק נעשתה הקפיצה?</h2>
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
        שלושת החלקים הראשונים יכולים להיות נכונים בהקשרים מסוימים. המסקנה האחרונה אינה נובעת מהם בלי מסמך או החלטה רשמית.
      </p>

      <h2>מה הבדיקה הזאת לא אומרת?</h2>
      <p>
        היא לא אומרת של-XRP אין שימוש, שאין לו פוטנציאל, או שהוא לא יוכל לקבל בעתיד תפקיד רחב יותר במערכת הפיננסית. היא אומרת דבר מצומצם ומדויק: נכון ל-18 ביוני 2026, במקורות הרשמיים שנבדקו לא נמצאה בחירה ב-XRP כמטבע עולמי או כמטבע רזרבה עולמי.
      </p>

      <h2>שאלות נפוצות</h2>
      <div className="faq-list">
        <details>
          <summary>אז XRP הוא “ISO 20022 compliant”?</summary>
          <p>
            הניסוח מטעה. ISO 20022 הוא תקן למסרים פיננסיים שמערכות וארגונים יכולים ליישם. הוא אינו גוף שמאשר מטבעות ואינו מפרסם רשימת “מטבעות נבחרים”.
          </p>
        </details>
        <details>
          <summary>האם XRP כן יכול לשמש גשר בין מטבעות?</summary>
          <p>
            כן. זה אחד השימושים המתוארים שלו ב-XRP Ledger ובחומרי Ripple. אבל “יכול לשמש גשר” שונה מ“נבחר להיות המטבע היחיד בעולם”.
          </p>
        </details>
        <details>
          <summary>האם XRP יכול להפוך בעתיד לנכס רזרבה?</summary>
          <p>
            אי אפשר לקבוע מה יקרה בעתיד. כדי לטעון שהוא כבר נבחר נדרש מקור רשמי עדכני — ובבדיקה הנוכחית לא נמצא מקור כזה.
          </p>
        </details>
      </div>

      <h2>תגובה קצרה להעתקה</h2>
      <pre className="copy">{copyText}</pre>

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
        <h2>איך הגענו למסקנה?</h2>
        <p>
          הבדיקה התמקדה במקורות ראשוניים ורשמיים של Ripple, XRP Ledger, ISO 20022 וה-IMF. לא הסתמכנו על תחזיות מחיר, משפיעני קריפטו או פוסטים אנונימיים כמקור להחלטה מוסדית.
        </p>
      </section>
    </article>
  );
}
