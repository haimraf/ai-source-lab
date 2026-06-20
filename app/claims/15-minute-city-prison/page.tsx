import { ClaimHeader } from "@/components/ClaimHeader";
import { CopyBox } from "@/components/CopyBox";
import { EvidenceGallery } from "@/components/EvidenceGallery";
import { getClaimBySlug } from "@/lib/claims-db";
import { siteUrl } from "@/lib/site";

const claim = getClaimBySlug("fifteen-minute-city-prison")!;
const pageUrl = `${siteUrl}${claim.path}`;
const ogImage = `${pageUrl}/opengraph-image`;

const lead = "הטענה אומרת שעיר 15 דקות היא לא רעיון תכנוני אלא תוכנית להגביל אנשים לשכונה, לעקוב אחריהם או להפוך את העיר לכלא פתוח. בבדיקה הזו מפרידים בין שלושה דברים שונים: מודל תכנון עירוני, מדיניות תחבורה מקומית, וטענת כליאה.";

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
    name: "AP Fact Focus — 15-minute city claims",
    url: "https://apnews.com/article/162fd388f0c435a8289cc9ea213f92ee",
    note: "בדיקת AP שמפרידה בין רעיון עיר 15 דקות לבין טענות על הגבלת תנועה ומעקב, ובמיוחד בין הרעיון לבין traffic filters באוקספורד.",
  },
  {
    name: "Reuters — global adoption of the 15-minute city idea",
    url: "https://www.reuters.com/sustainability/society-equity/two-wheeled-revolution-transforming-urban-living--ecmii-2025-12-08/",
    note: "סקירה עדכנית על השימוש ברעיון בעולם, השמות השונים שלו, היתרונות שמקדמים תומכיו והחששות סביב יישום לא שוויוני או דיסאינפורמציה.",
  },
  {
    name: "The Times — Oxford dropped the phrase after backlash",
    url: "https://www.thetimes.co.uk/article/oxford-city-council-15-minute-city-phrase-dropped-p8sfrfqzh",
    note: "דוגמה לכך שהמונח עצמו הפך רעיל פוליטית, גם כשמדיניות ההליכה, האופניים והתחבורה הציבורית המשיכה להיות חלק מהתכנון המקומי.",
  },
  {
    name: "Why urban heterogeneity limits the 15-minute city",
    url: "https://arxiv.org/abs/2603.12122",
    note: "מחקר שמציג ביקורת רצינית על היתכנות המודל, במיוחד סביב תעסוקה, מבנה כלכלי של עיר ופריפריה עירונית. ביקורת על יישום אינה הוכחה לכליאה.",
  },
  {
    name: "The 15-Minute City Quantified Using Mobility Data",
    url: "https://arxiv.org/abs/2211.14872",
    note: "מחקר שמודד שימוש מקומי בשירותים ומראה שהגישה תלויה בנגישות אמיתית לשירותים, תכנון וזונינג — וגם עשויה להעלות שאלות של בידול חברתי.",
  },
];

const exhibits = [
  {
    src: "/evidence/15-minute-city-layers.svg",
    alt: "איור שמפריד בין רעיון תכנוני, מדיניות תחבורה מקומית וטענת כליאה",
    title: "מוצג 1.",
    caption: "איור פנימי של שלוש השכבות שלא כדאי לערבב בבדיקה: מודל תכנוני, כלי תחבורה מקומי וטענת כליאה.",
  },
  {
    src: "/evidence/15-minute-city-bonus.svg",
    alt: "איור של שכונה עם שירותים קרובים סביב הליכה קצרה",
    title: "מוצג 2.",
    caption: "איור פנימי לעובדת הבונוס: רעיונות של שכונה הליכתית ושירותים קרובים קדמו לשם המודרני עיר 15 דקות.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: claim.title,
  description: claim.description,
  datePublished: "2026-06-20",
  dateModified: "2026-06-20",
  inLanguage: "he-IL",
  mainEntityOfPage: pageUrl,
  author: { "@type": "Organization", name: "מקור בדיקה" },
};

export default function Page() {
  const copyText = `עיר 15 דקות היא מודל תכנון עירוני שמדבר על קרבה לשירותים יומיומיים, לא על איסור לצאת מהשכונה. נכון לבדיקה הזו, לא נמצא מקור רשמי שמראה שהמודל מחייב כליאה, מעקב אישי או הגבלת יציאה. הקפיצה היא ערבוב בין רעיון תכנוני, מדיניות תחבורה מקומית וטענת שליטה.
${pageUrl}`;

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ClaimHeader claim={claim} verdictLabel="לא נמצא מקור רשמי לכליאה או איסור יציאה" updatedLabel="נבדק ועודכן: 20 ביוני 2026" lead={lead} />

      <section className="box answer">
        <span className="eyebrow">תשובה קצרה</span>
        <h2>לא. הרעיון עצמו אינו כלא עירוני.</h2>
        <p>
          עיר 15 דקות היא רעיון תכנוני: לנסות לארגן שכונות כך ששירותים יומיומיים יהיו קרובים לבית — ברגל, באופניים או בנסיעה קצרה. נכון למקורות שנבדקו כאן, לא נמצא מקור רשמי שמגדיר את המודל כאיסור לצאת מהשכונה או כחובת מגורים באזור סגור.
        </p>
        <p className="small">זה לא אומר שכל תוכנית עירונית בשם הזה טובה, שוויונית או ישימה. זו מסקנה צרה יותר: הטענה על כליאה דורשת מקור רשמי שמראה הגבלת תנועה כזו.</p>
      </section>

      <section className="box verdict-box">
        <div className="verdict-grid">
          <div><span className="eyebrow">הטענה</span><p>עיר 15 דקות היא תוכנית להגביל אנשים לשכונה או להפוך את העיר לכלא פתוח.</p></div>
          <div><span className="eyebrow">השורה התחתונה</span><p><strong>לא נמצא מקור רשמי שמראה כליאה או איסור יציאה.</strong></p></div>
          <div><span className="eyebrow">מה כן נכון</span><p>יש מודל אמיתי של תכנון עירוני סביב קרבה לשירותים, הליכה, אופניים ותחבורה מקומית.</p></div>
          <div><span className="eyebrow">איפה הקפיצה</span><p>מ”שירותים קרובים לבית” ל”אסור לצאת מהאזור”.</p></div>
        </div>
      </section>

      <h2>שלוש שכבות שלא לערבב</h2>
      <div className="source-levels">
        <div className="source-level"><strong>רעיון</strong><div><h3>קרבה לשירותים</h3><p>המודל מדבר על נגישות לשירותים יומיומיים, עירוב שימושים וצמצום תלות ברכב פרטי.</p></div></div>
        <div className="source-level"><strong>מדיניות</strong><div><h3>כלי תחבורה מקומיים</h3><p>traffic filters, אזורי תנועה מופחתת או מצלמות תנועה הם מדיניות מקומית נפרדת. אפשר לבקר אותה, אבל היא לא ההגדרה של עיר 15 דקות.</p></div></div>
        <div className="source-level"><strong>טענה</strong><div><h3>כליאה או מעקב</h3><p>כאן צריך מקור חזק: מסמך רשמי שמראה איסור יציאה, חלוקת תושבים לאזורים סגורים או מעקב אישי כחובה.</p></div></div>
      </div>

      <h2>מוצגים ואיורים</h2>
      <p>אלה לא צילומי מקור, אלא איורים פנימיים שנועדו להסביר את ההפרדה בבדיקה.</p>
      <EvidenceGallery exhibits={exhibits} />

      <h2>עובדת בונוס</h2>
      <section className="box method-note">
        <h2>השם חדש יחסית; הרעיון לא נולד מאפס</h2>
        <p>
          הביטוי “עיר 15 דקות” מזוהה כיום בעיקר עם קרלוס מורנו ועם תכנון עירוני עכשווי. אבל השאיפה לשכונה שבה בית ספר, חנות, מרפאה, פארק ושירותים בסיסיים נמצאים קרוב לבית אינה המצאה שנולדה מאג׳נדה 2030. רעיונות של שכונה הליכתית, שירותים קרובים ועירוב שימושים קיימים בתכנון עירוני הרבה לפני שהמונח הזה הפך לטריגר ברשת.
        </p>
      </section>

      <h2>מה כן אפשר לבקר?</h2>
      <div className="comparison-list">
        <div><strong>יישום לא שוויוני</strong><span>שכונות חזקות יכולות לקבל שירותים קרובים יותר, ושכונות חלשות עלולות להישאר מאחור.</span></div>
        <div><strong>תעסוקה</strong><span>לא כל עבודה יכולה להיות קרובה לבית, במיוחד בערים עם מרכזי תעסוקה מרוכזים.</span></div>
        <div><strong>ג׳נטריפיקציה</strong><span>שיפור נגישות יכול להעלות מחירים אם אין מדיניות דיור משלימה.</span></div>
        <div><strong>תחבורה ציבורית</strong><span>בלי תחבורה טובה, המודל עלול להישאר סיסמה יפה ולא פתרון אמיתי.</span></div>
      </div>

      <h2>שרשרת הקפיצה</h2>
      <div className="logic-chain">
        <span>עיר 15 דקות מדברת על שירותים קרובים</span><span className="logic-arrow">←</span>
        <span>יש ערים עם מצלמות או מסנני תנועה</span><span className="logic-arrow">←</span>
        <span>יש חשש משליטה ממשלתית</span><span className="logic-arrow">←</span>
        <strong>לכן אסור יהיה לצאת מהשכונה</strong>
      </div>
      <p className="small">שלושת החלקים הראשונים יכולים להיות נושאים אמיתיים לדיון. הקפיצה היא להפוך אותם להוכחה לכליאה בלי מסמך שמראה זאת.</p>

      <h2>מה לא נמצא במקורות?</h2>
      <div className="comparison-list">
        <div><strong>לא נמצא</strong><span>מסמך רשמי שמגדיר עיר 15 דקות כאיסור לצאת מהשכונה.</span></div>
        <div><strong>לא נמצא</strong><span>מקור שמראה חלוקה של תושבים לאזורי כליאה עירוניים.</span></div>
        <div><strong>לא נמצא</strong><span>חובה כללית למעקב אישי כחלק מהגדרת המודל.</span></div>
        <div><strong>לא נמצא</strong><span>הוכחה שעצם המונח הוא סעיף ביצוע נסתר של אג׳נדה 2030.</span></div>
      </div>

      <h2>שאלות נפוצות</h2>
      <div className="faq-list">
        <details>
          <summary>אז אין שום בעיה עם ערי 15 דקות?</summary>
          <p>לא זו המסקנה. יש ביקורת רצינית על יישום, שוויון, תעסוקה, מחירי דיור ותחבורה. אבל ביקורת על יישום אינה הוכחה לכליאה.</p>
        </details>
        <details>
          <summary>מה עם Oxford?</summary>
          <p>במקרה של Oxford התערבבו טענות על עיר 15 דקות עם מדיניות תחבורה מקומית כמו traffic filters. זה בדיוק למה צריך להפריד בין רעיון תכנוני לבין כלי אכיפה תחבורתי.</p>
        </details>
        <details>
          <summary>האם אפשר יהיה לצאת מהשכונה?</summary>
          <p>לפי המקורות שנבדקו כאן, עצם מודל עיר 15 דקות אינו מציג איסור יציאה. מי שטוען אחרת צריך להראות מסמך רשמי שאומר זאת.</p>
        </details>
        <details>
          <summary>למה הטענה נשמעת משכנעת?</summary>
          <p>כי היא מחברת דבר אמיתי — תכנון עירוני וצעדי תחבורה — לפחד רחב יותר משליטה, מצלמות וקנסות. החיבור נשמע אינטואיטיבי, אבל הוא עדיין דורש מקור.</p>
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
          בדקנו אם יש מקור רשמי שמגדיר עיר 15 דקות כאיסור יציאה, כליאה, מעקב אישי או חלוקה כפויה לאזורים. לאחר מכן הפרדנו בין רעיון התכנון עצמו לבין מדיניות תחבורה מקומית ובין ביקורת לגיטימית על יישום לבין טענה עובדתית על שליטה.
        </p>
      </section>
    </article>
  );
}
