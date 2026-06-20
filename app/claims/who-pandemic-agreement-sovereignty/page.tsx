import { ClaimHeader } from "@/components/ClaimHeader";
import { CopyBox } from "@/components/CopyBox";
import { EvidenceGallery } from "@/components/EvidenceGallery";
import { siteUrl } from "@/lib/site";

const claim = {
  slug: "who-pandemic-agreement-sovereignty",
  path: "/claims/who-pandemic-agreement-sovereignty",
  title: "האם אמנת המגיפות נותנת ל-WHO סמכות על מדיניות פנים?",
  description: "בדיקה של הטענה שאמנת המגיפות של WHO נותנת לארגון סמכות להכתיב למדינות מדיניות חירום, בריאות או חקיקה פנימית.",
  kicker: "WHO ואמנת מגיפות",
  tags: ["WHO", "אמנת מגיפות", "ריבונות", "מדיניות פנים", "בריאות ציבורית"],
  verdict: "הטקסט הרשמי שולל סמכות להכתיב מדיניות פנים למדינות",
  updated: "2026-06-21",
  changeFrequency: "monthly",
  priority: 0.9,
  cluster: "institutional-narratives",
  ogAlt: "מקור בדיקה - בדיקת הטענה שאמנת המגיפות נותנת ל-WHO סמכות כפייה",
} as const;

const pageUrl = `${siteUrl}${claim.path}`;
const ogImage = `${pageUrl}/opengraph-image`;

const lead = "הטענה אומרת שאמנת המגיפות של ארגון הבריאות העולמי תאפשר ל-WHO להכתיב למדינות מדיניות פנים בזמן מגיפה. הבדיקה הזו מפרידה בין הסכם בינלאומי מחייב, תהליך אשרור מדינתי, וסמכות כפייה שלא מופיעה בטקסט.";

export const metadata = {
  title: `${claim.title} | מקור בדיקה`,
  description: claim.description,
  alternates: { canonical: claim.path },
  openGraph: {
    title: claim.title,
    description: claim.description,
    url: pageUrl,
    siteName: "מקור בדיקה",
    locale: "he_IL",
    type: "article",
    images: [{ url: ogImage, width: 1200, height: 630, alt: claim.ogAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: claim.title,
    description: claim.description,
    images: [ogImage],
  },
};

const sources = [
  {
    name: "WHO Pandemic Agreement — health topic page",
    url: "https://www.who.int/health-topics/who-pandemic-agreement",
    note: "עמוד WHO שמסביר שההסכם אומץ ב-20 במאי 2025, מתאר את רכיבי ההסכם ומדגיש שהיישום נשאר בשליטת מדינות ריבוניות.",
  },
  {
    name: "WHA78.1 — WHO Pandemic Agreement, official text",
    url: "https://apps.who.int/gb/ebwha/pdf_files/WHA78/A78_R1-en.pdf",
    note: "הטקסט הרשמי שאומץ בעצרת הבריאות העולמית. סעיף 22(2) הוא מקור המפתח לשאלה אם ל-WHO יש סמכות להכתיב מדיניות פנים למדינות.",
  },
  {
    name: "WHO Q&A — Pandemic prevention, preparedness and response agreement",
    url: "https://www.who.int/news-room/questions-and-answers/item/pandemic-prevention--preparedness-and-response-accord",
    note: "שאלות ותשובות של WHO על תהליך האימוץ, נספח PABS, ריבונות המדינות ותפקיד המזכירות של WHO.",
  },
  {
    name: "Reuters — landmark global pandemic agreement adopted",
    url: "https://www.reuters.com/business/healthcare-pharmaceuticals/landmark-global-pandemic-agreement-adopted-by-world-health-organization-members-2025-05-20/",
    note: "דיווח חדשותי על אימוץ ההסכם, ההצבעה, ההימנעויות והעובדה שההסכם לא נכנס לתוקף מיידי בלי השלמת נספח ואשרור מדינתי.",
  },
  {
    name: "AP — WHO adopts a pandemic agreement after the chaos of COVID",
    url: "https://apnews.com/article/51ff7eddb83db47b869d2729a5f27a6d",
    note: "דיווח רקע על אימוץ ההסכם, ההקשר של COVID והפער בין שיתוף פעולה בינלאומי לבין מנגנון אכיפה ישיר.",
  },
];

const exhibits = [
  {
    src: "/evidence/who-pandemic-agreement-scope.svg",
    alt: "איור שמפריד בין ההסכם, יישום מדינתי וטענת כפייה של WHO",
    title: "מוצג 1.",
    caption: "איור פנימי שמפריד בין שלוש שכבות: הסכם בינלאומי, החלטות של מדינות, וטענת כפייה שלא נמצאה בטקסט.",
  },
  {
    src: "/evidence/who-pandemic-agreement-timeline.svg",
    alt: "איור של שלבי האימוץ, נספח PABS, חתימה ואשרור של אמנת המגיפות",
    title: "מוצג 2.",
    caption: "איור פנימי לעובדת הבונוס: אימוץ בעצרת הבריאות אינו אותו דבר כמו כניסה מיידית לתוקף בכל מדינה.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: claim.title,
  description: claim.description,
  datePublished: "2026-06-21",
  dateModified: "2026-06-21",
  inLanguage: "he-IL",
  mainEntityOfPage: pageUrl,
  author: { "@type": "Organization", name: "מקור בדיקה" },
};

export default function Page() {
  const copyText = `אמנת המגיפות של ארגון הבריאות העולמי היא הסכם בינלאומי לשיתוף פעולה בהיערכות למגיפות. הטקסט הרשמי לא נותן ל-WHO סמכות להכתיב למדינה מדיניות פנים, לשנות חוק פנימי או להורות להפעיל צעדי חירום. סעיף 22(2) שולל במפורש פרשנות כזו. זה לא אומר שאין מה לבקר בהסכם, אבל טענת סמכות הכפייה לא מופיעה במקור הרשמי.
${pageUrl}`;

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ClaimHeader claim={claim as any} verdictLabel="הטקסט שולל סמכות להכתיב מדיניות פנים" updatedLabel="נבדק ועודכן: 21 ביוני 2026" lead={lead} />

      <section className="box answer">
        <span className="eyebrow">תשובה קצרה</span>
        <h2>לא במובן שמופץ ברשת.</h2>
        <p>
          ההסכם הוא מסמך בינלאומי מחייב למדינות שיצטרפו אליו לפי התהליך החוקתי שלהן, אבל הטקסט הרשמי אינו נותן למזכירות WHO או למנכ״ל WHO סמכות להורות למדינות לשנות חוק, להכתיב מדיניות פנים או להפעיל צעדי חירום.
        </p>
        <p className="small">המסקנה צרה: יש מקום לבדוק ולבקר סעיפים, מימון, שקיפות או מנגנוני יישום. אבל טענת “WHO יקבע למדינה מה לעשות” דורשת סמכות כפייה שלא נמצאה בטקסט.</p>
      </section>

      <section className="box verdict-box">
        <div className="verdict-grid">
          <div><span className="eyebrow">הטענה</span><p>אמנת המגיפות נותנת ל-WHO סמכות להכתיב למדינות מדיניות פנים בזמן מגיפה.</p></div>
          <div><span className="eyebrow">השורה התחתונה</span><p><strong>הסעיף הרלוונטי אומר ההפך: אין ל-WHO סמכות כזו.</strong></p></div>
          <div><span className="eyebrow">מה כן נכון</span><p>ההסכם עוסק בשיתוף פעולה, היערכות, שרשראות אספקה, מימון, דיווחים וגישה שוויונית לכלים רפואיים.</p></div>
          <div><span className="eyebrow">איפה הקפיצה</span><p>מ”הסכם בינלאומי מחייב” ל”ארגון חיצוני יכול להורות למדינה מה לעשות בתוך המדינה”.</p></div>
        </div>
      </section>

      <h2>שלוש שכבות שלא לערבב</h2>
      <div className="source-levels">
        <div className="source-level"><strong>ההסכם</strong><div><h3>שיתוף פעולה בינלאומי</h3><p>המסמך קובע מסגרת להיערכות, תגובה, מימון, שיתוף מידע וגישה לכלים רפואיים בזמן מגיפות.</p></div></div>
        <div className="source-level"><strong>מדינה</strong><div><h3>יישום דרך חוק פנימי</h3><p>מדינה שמצטרפת להסכם עדיין פועלת דרך מוסדותיה, חוקיה ותהליכי האשרור שלה.</p></div></div>
        <div className="source-level"><strong>טענה</strong><div><h3>כפייה של WHO</h3><p>כאן צריך סעיף שנותן ל-WHO סמכות להורות למדינה לבצע מדיניות פנים מסוימת. הסעיף שנבדק שולל זאת.</p></div></div>
      </div>

      <h2>מוצגים ואיורים</h2>
      <p>אלה לא צילומי מקור, אלא איורים פנימיים שנועדו להסביר את ההפרדה בבדיקה.</p>
      <EvidenceGallery exhibits={exhibits} />

      <h2>עובדת בונוס</h2>
      <section className="box method-note">
        <h2>אימוץ בעצרת הבריאות אינו כניסה מיידית לתוקף</h2>
        <p>
          ההסכם אומץ בעצרת הבריאות העולמית במאי 2025, אבל לפי עמוד WHO והטקסט הרשמי, הוא אמור להיפתח לחתימה רק אחרי אימוץ נספח PABS. לאחר מכן הוא ייכנס לתוקף רק 30 יום אחרי הפקדת 60 מסמכי אשרור, קבלה, אישור או הצטרפות. כלומר גם “אומץ” וגם “בתוקף במדינה” הם שלבים שונים לגמרי.
        </p>
      </section>

      <h2>מה כן אפשר לבקר?</h2>
      <div className="comparison-list">
        <div><strong>מנגנוני מימון</strong><span>אפשר לשאול מי מממן, מי מחליט, ואיך נמנעים מעומס רגולטורי על מדינות חלשות.</span></div>
        <div><strong>שקיפות ופיקוח</strong><span>אפשר לבדוק כיצד הוועידה העתידית של הצדדים תדווח לציבור ואיך יפורסמו דוחות.</span></div>
        <div><strong>PABS</strong><span>נספח שיתוף פתוגנים והטבות עדיין דורש פרטים, ולכן לא נכון להתייחס אליו כאילו הוא כבר נוסח סופי ומופעל.</span></div>
        <div><strong>יישום מקומי</strong><span>הוויכוח האמיתי במדינה יהיה על חקיקה, אשרור ומדיניות מקומית, לא על הוראה ישירה של WHO.</span></div>
      </div>

      <h2>שרשרת הקפיצה</h2>
      <div className="logic-chain">
        <span>ההסכם מחייב מדינות שמצטרפות אליו</span><span className="logic-arrow">←</span>
        <span>WHO משמש מזכירות ומסייע בתיאום</span><span className="logic-arrow">←</span>
        <span>יש חשש מצעדי חירום מהעבר</span><span className="logic-arrow">←</span>
        <strong>לכן WHO יוכל לכפות מדיניות על מדינה</strong>
      </div>
      <p className="small">הקפיצה היא להפוך תיאום בינלאומי ומסגרת מחייבת למדינות לסמכות ישירה של WHO על חוקי מדינה, בלי סעיף שנותן סמכות כזו.</p>

      <h2>מה לא נמצא במקורות?</h2>
      <div className="comparison-list">
        <div><strong>לא נמצא</strong><span>סעיף שנותן למנכ״ל WHO סמכות להורות למדינה להפעיל צעדי חירום.</span></div>
        <div><strong>לא נמצא</strong><span>סעיף שמאפשר ל-WHO להכתיב מדיניות פנים לאזרחים.</span></div>
        <div><strong>לא נמצא</strong><span>סעיף שמאפשר ל-WHO לשנות חוק פנימי של מדינה.</span></div>
        <div><strong>לא נמצא</strong><span>סעיף שמדלג על תהליך חתימה, אשרור או הצטרפות של מדינות.</span></div>
      </div>

      <h2>שאלות נפוצות</h2>
      <div className="faq-list">
        <details>
          <summary>אז ההסכם לא מחייב בכלל?</summary>
          <p>הוא מיועד להיות הסכם בינלאומי מחייב למדינות שיהפכו לצד להסכם. אבל מחייב מדינה אינו אומר ש-WHO מקבל סמכות ישירה להורות למדינה אילו חוקים לחוקק או אילו צעדים להפעיל.</p>
        </details>
        <details>
          <summary>מה הסעיף הכי חשוב לבדיקה?</summary>
          <p>סעיף 22(2). הוא קובע שאין לפרש את ההסכם כנותן למזכירות WHO או למנכ״ל WHO סמכות להורות, לשנות או להכתיב חוק או מדיניות פנים של מדינה.</p>
        </details>
        <details>
          <summary>מה עם International Health Regulations?</summary>
          <p>ההסכם וה-IHR הם מסגרות קשורות אבל לא אותו מסמך. גם שם צריך לבדוק סעיפים ספציפיים ולא לערבב בין הגדרות, המלצות, הכרזות חירום וסמכות כפייה.</p>
        </details>
        <details>
          <summary>ישראל הצביעה בעד?</summary>
          <p>לפי דיווח Reuters על ההצבעה ב-2025, ישראל הייתה בין המדינות שנמנעו. זה נתון פוליטי מעניין, אבל הוא לא משנה את נוסח סעיף הסמכות בטקסט הרשמי.</p>
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
        <p>
          בדקנו את נוסח ההסכם שאומץ בעצרת הבריאות העולמית, את עמוד ההסבר הרשמי של WHO ואת שאלות-התשובות של WHO. לאחר מכן הפרדנו בין מסגרת בינלאומית מחייבת למדינות לבין סמכות ישירה של WHO על חוקי מדינה, וחיפשנו במיוחד סעיף שמאפשר להכתיב מדיניות פנים.
        </p>
      </section>
    </article>
  );
}
