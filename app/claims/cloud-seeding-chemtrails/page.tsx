import { CopyBox } from "@/components/CopyBox";
import { siteUrl } from "@/lib/site";

export const metadata = {
  title: "האם זריעת עננים מוכיחה Chemtrails? | מקור בדיקה",
  description: "בדיקה שמפרידה בין זריעת עננים אמיתית, שובלי מטוסים וטענות על ריסוס אלומיניום.",
  alternates: { canonical: "/claims/cloud-seeding-chemtrails" },
};

const pageUrl = `${siteUrl}/claims/cloud-seeding-chemtrails`;

const sources = [
  {
    name: "GAO: Cloud Seeding Technology",
    url: "https://www.gao.gov/products/gao-25-107328",
    note: "דוח רשמי מ-2024 על זריעת עננים, יודיד כסף, מגבלות היעילות והצורך להבחין בין זריעת עננים לגיאו-הנדסה.",
  },
  {
    name: "NOAA: Project STORMFURY",
    url: "https://www.aoml.noaa.gov/hrd/hrd_sub/sfury.html",
    note: "תיעוד רשמי של ניסויי זריעת הוריקנים ביודיד כסף ושל הסיבה שהמסקנות החיוביות הוטלו בספק.",
  },
  {
    name: "FAA: Contrails",
    url: "https://www.faa.gov/contrails",
    note: "הסבר רשמי על שובלי התעבות ועל ההבחנה בין שובלים לבין פעולות פיזור מכוונות אחרות.",
  },
  {
    name: "EPA: Information on Contrails from Aircraft",
    url: "https://www.epa.gov/regulations-emissions-vehicles-and-engines/Contrails",
    note: "מידע סביבתי על שובלי מטוסים, פליטות וטענות סביב chemtrails.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "האם זריעת עננים מוכיחה Chemtrails?",
    description: "בדיקה שמפרידה בין זריעת עננים, שובלי מטוסים וטענה על ריסוס אלומיניום.",
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
    inLanguage: "he-IL",
    mainEntityOfPage: pageUrl,
    author: { "@type": "Person", name: "חיים רפאל", url: `${siteUrl}/about` },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "האם זריעת עננים קיימת באמת?",
        acceptedAnswer: { "@type": "Answer", text: "כן. זריעת עננים היא טכנולוגיה קיימת לשינוי מקומי של משקעים, בדרך כלל באמצעות חלקיקים כמו יודיד כסף, אבל היעילות שלה תלויה בתנאי ענן מתאימים ואינה מוכיחה טענות על ריסוס כללי." },
      },
      {
        "@type": "Question",
        name: "האם זריעת עננים מוכיחה ששובלי מטוסים הם ריסוס אלומיניום?",
        acceptedAnswer: { "@type": "Answer", text: "לא. זו קפיצה לוגית. כדי להוכיח ריסוס אלומיניום צריך ראיות נפרדות שמקשרות חומר, מקור, זמן, מקום וטיסה מסוימת." },
      },
    ],
  },
];

export default function Page() {
  const copyText = `זריעת עננים היא פעולה אמיתית ומוצהרת לשינוי מקומי של משקעים, לעיתים עם יודיד כסף. זה לא מוכיח שכל פס לבן בשמיים הוא ריסוס, ולא מוכיח טענה על אלומיניום בלי שרשרת ראיות נפרדת שמחברת חומר, מקור, זמן, מקום וטיסה מסוימת.\n${pageUrl}`;

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="claim-meta">
        <span className="badge verdict-badge">זריעת עננים קיימת; היא לא מוכיחה Chemtrails</span>
        <span className="small">נבדק ועודכן: 19 ביוני 2026</span>
      </div>

      <h1>האם זריעת עננים מוכיחה Chemtrails?</h1>
      <p className="lead">
        זו טענה שחוזרת הרבה: אם מודים שיש זריעת עננים, אז כנראה שגם הפסים הלבנים ממטוסים הם ריסוס מכוון של חומרים כמו אלומיניום. הבדיקה מפרידה בין שלושה דברים שונים: זריעת עננים, שובלי התעבות, והטענה הספציפית על ריסוס אלומיניום.
      </p>

      <section className="box answer">
        <span className="eyebrow">תשובה קצרה</span>
        <h2>כן, זריעת עננים קיימת. לא, זה לא מוכיח שכל שובל הוא ריסוס.</h2>
        <p>
          זריעת עננים היא פעולה אמיתית ומוצהרת לשינוי מקומי של משקעים, לרוב רק כשיש עננים ותנאים מתאימים. אבל מכאן לא נובע שכל פס לבן בשמיים הוא פעולה כזאת, ובטח לא הוכחה לריסוס אלומיניום. זו טענה נוספת שדורשת מקור וראיות משלה.
        </p>
      </section>

      <section className="box verdict-box">
        <div className="verdict-grid">
          <div><span className="eyebrow">הטענה</span><p>אם קיימת זריעת עננים, אז שובלי מטוסים הם כנראה Chemtrails.</p></div>
          <div><span className="eyebrow">השורה התחתונה</span><p><strong>לא. קיום של שיטה אחת לא מוכיח טענה רחבה על כל שובל.</strong></p></div>
          <div><span className="eyebrow">מה כן נכון</span><p>זריעת עננים קיימת, ולעיתים משתמשים בה ביודיד כסף.</p></div>
          <div><span className="eyebrow">איפה הסיפור קופץ</span><p>מפעולה מוצהרת ומקומית למסקנה על ריסוס חשאי ומתמשך.</p></div>
        </div>
      </section>

      <h2>ההבחנה החשובה</h2>
      <div className="comparison-list">
        <div><strong>זריעת עננים:</strong><span>פעולה מכוונת שמנסה להשפיע על משקעים בעננים קיימים, בתנאים מתאימים.</span></div>
        <div><strong>שובלי מטוסים:</strong><span>פסי גבישי קרח שנוצרים בתנאי קור ולחות בגובה, ויכולים להישאר או להיעלם לפי מזג האוויר בגובה.</span></div>
        <div><strong>טענת Chemtrails:</strong><span>טענה על ריסוס מכוון של חומרים על הציבור. זו טענה נפרדת שדורשת ראיות נפרדות.</span></div>
      </div>

      <h2>מה המקורות מראים?</h2>
      <div className="evidence-list">
        <section className="evidence-item">
          <span className="evidence-number">01</span>
          <div><h3>זריעת עננים היא טכנולוגיה אמיתית</h3><p>GAO מתאר זריעת עננים כטכנולוגיה בת כ-80 שנה שמוסיפה חלקיקים זעירים, בדרך כלל יודיד כסף, לעננים כדי לעודד גשם או שלג. אותו דוח מדגיש שהיעילות אינה מובטחת ושתנאי הענן חייבים להתאים.</p></div>
        </section>
        <section className="evidence-item">
          <span className="evidence-number">02</span>
          <div><h3>גם ניסויים רשמיים לא מוכיחים שליטה רחבה במזג האוויר</h3><p>NOAA מתעדת את Project STORMFURY, ניסוי ארוך לשינוי הוריקנים באמצעות יודיד כסף. בהמשך התברר שההשפעות שיוחסו להתערבות אנושית יכלו להיות חלק מהתנהגות טבעית של הוריקנים.</p></div>
        </section>
        <section className="evidence-item">
          <span className="evidence-number">03</span>
          <div><h3>שובל התעבות הוא הסבר אחר</h3><p>מקורות תעופה וסביבה מסבירים ששובלי מטוסים נוצרים כאשר אדי מים ופליטות מנוע פוגשים אוויר קר ולח בגובה. העובדה ששובל נשאר זמן רב אינה מזהה חומר מסוים.</p></div>
        </section>
      </div>

      <h2>שרשרת הטענה</h2>
      <div className="logic-chain">
        <span>יש זריעת עננים</span><span className="logic-arrow">←</span>
        <span>לפעמים משתמשים ביודיד כסף</span><span className="logic-arrow">←</span>
        <span>יש פסים לבנים ממטוסים</span><span className="logic-arrow">←</span>
        <strong>לכן הפסים הם ריסוס אלומיניום</strong>
      </div>
      <p className="small">שלושת החלקים הראשונים יכולים להיות נכונים. המסקנה האחרונה אינה נובעת מהם ודורשת ראיה עצמאית.</p>

      <h2>ומה לגבי יודיד כסף?</h2>
      <p>
        יודיד כסף אינו אלומיניום. גם אם יש ביקורת סביבתית על זריעת עננים, זו עדיין לא הוכחה לטענה אחרת על אלומיניום בשובלי מטוסים. לפי GAO, המחקר הקיים לגבי שימוש נוכחי ביודיד כסף אינו מצביע על חשש סביבתי או בריאותי ברמות השימוש הנוכחיות, אך לא ברור מה תהיה ההשפעה של שימוש רחב יותר.
      </p>

      <h2>שאלות נפוצות</h2>
      <div className="faq-list">
        <details>
          <summary>אז הרשויות מודות שיש שינוי מזג אוויר?</summary>
          <p>כן, יש פעולות מוצהרות כמו זריעת עננים. זה לא אומר שכל שובל מטוס הוא פעולה כזאת.</p>
        </details>
        <details>
          <summary>אם משתמשים ביודיד כסף, זה לא מסוכן?</summary>
          <p>זו שאלה סביבתית לגיטימית, אבל היא שונה מהטענה על ריסוס אלומיניום. גם ביקורת על יודיד כסף לא מוכיחה חומר אחר או פעולה אחרת.</p>
        </details>
        <details>
          <summary>איזו ראיה הייתה משנה את המסקנה?</summary>
          <p>מסמכים מאומתים, דגימות מבוקרות, ציוד פיזור מתועד וקישור ברור לטיסה, זמן ומקום מסוימים.</p>
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
        <p>הבדיקה לא שואלת אם זריעת עננים קיימת; היא קיימת. השאלה היא האם עצם קיומה מוכיח טענה על שובלי מטוסים וריסוס אלומיניום. במקורות שנבדקו לא נמצאה שרשרת ראיות כזאת.</p>
      </section>
    </article>
  );
}
