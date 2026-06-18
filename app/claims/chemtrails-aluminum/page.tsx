import { CopyBox } from "@/components/CopyBox";
import { siteUrl } from "@/lib/site";

export const metadata = {
  title: "האם מטוסים מרססים אלומיניום? | מקור בדיקה",
  description: "בדיקה מול FAA, EPA ושירות מזג האוויר האמריקאי לטענה שהפסים הלבנים ממטוסים הם ריסוס אלומיניום.",
  alternates: { canonical: "/claims/chemtrails-aluminum" },
};

const pageUrl = `${siteUrl}/claims/chemtrails-aluminum`;

const sources = [
  {
    name: "FAA: Contrails",
    url: "https://www.faa.gov/contrails",
    note: "הסבר רשמי על היווצרות שובלי התעבות, משך חייהם, פליטות מנוע ופעולות פיזור מכוונות.",
  },
  {
    name: "EPA: Information on Contrails from Aircraft",
    url: "https://www.epa.gov/regulations-emissions-vehicles-and-engines/Contrails",
    note: "הסבר סביבתי על שובלים, פליטות מטוסים והטענה המכונה chemtrails.",
  },
  {
    name: "National Weather Service: Clouds and Contrails",
    url: "https://www.weather.gov/fgz/CloudsContrails",
    note: "הסבר מטאורולוגי על לחות בגובה, הישארות שובלים ודפוסים מצטלבים.",
  },
  {
    name: "FAA and EPA: Contrails Fact Sheet",
    url: "https://www.faa.gov/contrails/fact-sheet",
    note: "דף מידע משותף של סוכנויות אמריקאיות על שובלי התעבות וטענות לריסוס מכוון.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "האם מטוסים מרססים אלומיניום?",
  description: "בדיקה מול מקורות רשמיים לטענה ששובלי מטוסים הם ריסוס מכוון של אלומיניום.",
  datePublished: "2026-06-18",
  dateModified: "2026-06-18",
  inLanguage: "he-IL",
  mainEntityOfPage: pageUrl,
  author: { "@type": "Organization", name: "מקור בדיקה" },
};

export default function Page() {
  const copyText = `הפסים הלבנים שמטוסים משאירים יכולים להישאר ולהתרחב כשהאוויר בגובה קר ולח. FAA, EPA ושירות מזג האוויר מסבירים אותם כשובלי התעבות. לא נמצא אצלם בסיס לטענה שטיסות רגילות מרססות אלומיניום על האוכלוסייה.\n${pageUrl}`;

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="claim-meta">
        <span className="badge verdict-badge">לא נמצא בסיס לריסוס אלומיניום מטיסות רגילות</span>
        <span className="small">נבדק ועודכן: 18 ביוני 2026</span>
      </div>

      <h1>האם מטוסים מרססים אלומיניום?</h1>
      <p className="lead">
        הפסים הלבנים מאחורי מטוסים מוסברים במקורות התעופה ומזג האוויר כשובלי התעבות. הם יכולים להיעלם תוך דקות או להישאר שעות ולהתרחב. במקורות הרשמיים שנבדקו לא נמצא בסיס לטענה שטיסות רגילות מפזרות אלומיניום על האוכלוסייה.
      </p>

      <section className="box answer">
        <span className="eyebrow">תשובה קצרה</span>
        <h2>פס לבן בשמיים אינו ראיה לריסוס אלומיניום</h2>
        <p>
          שובלי מטוסים יכולים להישאר זמן רב כאשר התנאים בגובה מתאימים. כדי להוכיח ריסוס אלומיניום צריך דגימה מבוקרת, מקור חומר, תיעוד פעולה וקשר לטיסה מסוימת. בבדיקה מול מקורות רשמיים לא נמצא קשר כזה.
        </p>
      </section>

      <section className="box verdict-box">
        <div className="verdict-grid">
          <div><span className="eyebrow">הטענה</span><p>הפסים הלבנים הם ריסוס מכוון של אלומיניום וחומרים נוספים.</p></div>
          <div><span className="eyebrow">השורה התחתונה</span><p><strong>לא נמצאה ראיה שמקשרת שובלי טיסות רגילות לריסוס כזה.</strong></p></div>
          <div><span className="eyebrow">מה כן נכון</span><p>מטוסים פולטים גזים וחלקיקים, ושובלים מסוימים נשארים בשמיים זמן רב.</p></div>
          <div><span className="eyebrow">איפה הסיפור קופץ</span><p>מפס שנשאר בשמיים למסקנה על חומר מסוים ותוכנית מכוונת.</p></div>
        </div>
      </section>

      <h2>טבלת הטענה</h2>
      <div className="comparison-list">
        <div><strong>מה נטען:</strong><span>שובלי המטוסים הם ריסוס אלומיניום מכוון.</span></div>
        <div><strong>מה המקורות אומרים:</strong><span>שובלים נוצרים מתנאי קור ולחות בגובה ומפליטות רגילות של מנועי סילון.</span></div>
        <div><strong>מה נמצא:</strong><span>נמצאו הסברים לשובלים מתמשכים; לא נמצאה ראיה לריסוס אלומיניום מטיסות רגילות.</span></div>
        <div><strong>מה המסקנה:</strong><span>המראה בשמיים לבדו אינו מוכיח חומר, מקור או כוונה.</span></div>
      </div>

      <h2>גרסת 60 שניות</h2>
      <div className="box method-note">
        <p>
          שובלי מטוסים הם תופעה אמיתית: אדי מים ותוצרי בעירה בגובה רב יכולים לקפוא ולהפוך לפסים לבנים. בתנאים מסוימים השובל נשאר שעות, מתרחב ונראה כמו עננות. זה עדיין לא מוכיח אלומיניום או ריסוס מכוון. כדי להוכיח את הטענה צריך שרשרת ראיות מלאה שמחברת דגימה, חומר, זמן, מקום וטיסה מסוימת. במקורות שנבדקו לא נמצאה שרשרת כזאת.
        </p>
      </div>

      <h2>מהו שובל התעבות?</h2>
      <p>
        מנוע סילון פולט אדי מים ותוצרי בעירה. בגובה רב האוויר קר מאוד. כאשר התנאים מתאימים, אדי המים מתעבים וקופאים סביב חלקיקים זעירים ונוצר פס של גבישי קרח. באנגלית הוא נקרא condensation trail, או בקיצור contrail.
      </p>

      <div className="evidence-list">
        <section className="evidence-item">
          <span className="evidence-number">01</span>
          <div><h3>שובל יכול להישאר שעות</h3><p>כאשר האוויר בגובה קר ולח מאוד, השובל אינו חייב להיעלם מיד. הוא יכול להתרחב, לנוע עם הרוח ולהיראות כמו עננות דקה.</p></div>
        </section>
        <section className="evidence-item">
          <span className="evidence-number">02</span>
          <div><h3>הפס יכול להתחיל ולהפסיק בפתאומיות</h3><p>מטוס יכול להיכנס ולצאת מאזורים בלתי נראים שבהם הלחות שונה. לכן שובל עשוי להופיע בקטעים בלי שהמטוס שינה את המנוע או פיזר חומר.</p></div>
        </section>
        <section className="evidence-item">
          <span className="evidence-number">03</span>
          <div><h3>יש פליטות מנוע, אבל זו לא אותה טענה</h3><p>מנועי סילון פולטים פחמן דו-חמצני, אדי מים וכמויות קטנות של תוצרי בעירה נוספים. עצם קיומן של פליטות אינו מוכיח פיזור מכוון של אלומיניום.</p></div>
        </section>
        <section className="evidence-item">
          <span className="evidence-number">04</span>
          <div><h3>קיימות פעולות פיזור אמיתיות ממטוסים</h3><p>חקלאות, כיבוי אש וזריעת עננים הן פעולות מוכרות. הן נעשות למטרות מוגדרות ואינן מסבירות אוטומטית שובלים של טיסות מסחריות בגובה רב.</p></div>
        </section>
      </div>

      <h2>ומה לגבי אבק או אלומיניום בבדיקה?</h2>
      <p>
        מציאת מתכת באבק, בקרקע או במסנן אינה מספיקה כדי לקבוע שמקורה במטוס. אלומיניום נפוץ מאוד בקרום כדור הארץ ובאבק סביבתי. כדי לקשור ממצא לריסוס צריך שרשרת ראיות: דגימה מבוקרת, שיטת מעבדה גלויה, נקודת השוואה, זמן ומקום, ולבסוף קשר ברור למטוס או למקור פליטה מסוים.
      </p>

      <div className="comparison-list">
        <div><strong>פס לבן שנשאר זמן רב:</strong><span>מתאים גם לשובל התעבות מתמשך.</span></div>
        <div><strong>פסים מצטלבים:</strong><span>יכולים להיווצר מנתיבי טיסה, דפוסי המתנה ורוחות בגבהים שונים.</span></div>
        <div><strong>אבק על רכב:</strong><span>לא מזהה את החומר, המקור או המסלול שבו הגיע.</span></div>
        <div><strong>פעולות לשינוי מזג אוויר:</strong><span>קיימות, אבל אינן הוכחה שכל שובל הוא ריסוס.</span></div>
      </div>

      <h2>שרשרת הטענה</h2>
      <div className="logic-chain">
        <span>יש פסים לבנים אמיתיים</span><span className="logic-arrow">←</span>
        <span>חלקם נשארים שעות</span><span className="logic-arrow">←</span>
        <span>יש בעולם פעולות פיזור ממטוסים</span><span className="logic-arrow">←</span>
        <strong>לכן טיסות רגילות מרססות אלומיניום על האוכלוסייה</strong>
      </div>
      <p className="small">שלושת החלקים הראשונים יכולים להיות נכונים. המסקנה האחרונה דורשת ראיה נפרדת, והיא לא נמצאה במקורות שנבדקו.</p>

      <h2>שאלות נפוצות</h2>
      <div className="faq-list">
        <details>
          <summary>למה פעם השובל נעלם ופעם נשאר?</summary>
          <p>ההבדל תלוי בעיקר בטמפרטורה ובלחות בגובה הטיסה. התנאים שם יכולים להיות שונים מאוד ממה שמרגישים על הקרקע.</p>
        </details>
        <details>
          <summary>האם הרשויות מכחישות כל פיזור ממטוסים?</summary>
          <p>לא. ה-FAA מפריד במפורש בין שובלי התעבות לבין פעולות כמו חקלאות, כיבוי אש וזריעת עננים.</p>
        </details>
        <details>
          <summary>אז אין שום זיהום ממטוסים?</summary>
          <p>יש פליטות ממנועי מטוסים ויש להן השפעות סביבתיות. זו טענה שונה מריסוס מכוון של אלומיניום באמצעות טיסות רגילות.</p>
        </details>
        <details>
          <summary>איזו ראיה הייתה משנה את המסקנה?</summary>
          <p>מסמכי הפעלה מאומתים, דגימות מבוקרות שמקושרות לטיסה מסוימת, ציוד פיזור מתועד או חקירה עצמאית שמציגה שרשרת ראיות מלאה.</p>
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
        <p>הבדיקה הפרידה בין ארבעה נושאים: היווצרות שובלים, פליטות מנוע, פיזור מכוון ממטוסים והטענה המסוימת על אלומיניום. המסקנה מתייחסת רק לקשר שלא הוכח בין שובלי טיסות רגילות לריסוס מכוון של אוכלוסייה.</p>
      </section>
    </article>
  );
}
