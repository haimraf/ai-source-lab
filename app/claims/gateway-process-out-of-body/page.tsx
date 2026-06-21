import { CopyBox } from "@/components/CopyBox";
import { siteUrl } from "@/lib/site";

export const metadata = {
  title: "האם מסמך Gateway מוכיח יציאה מהגוף? | מקור בדיקה",
  description: "בדיקה של מסמך Gateway מ־1983: מה באמת נבדק, מה אפשר ללמוד ממנו, ואיפה מתחילה הקפיצה מהתעניינות מודיעינית להוכחה רוחנית.",
  alternates: { canonical: "/claims/gateway-process-out-of-body" },
};

const pageUrl = `${siteUrl}/claims/gateway-process-out-of-body`;

const sources = [
  {
    name: "CIA Reading Room: Analysis and Assessment of Gateway Process",
    url: "https://www.cia.gov/readingroom/docs/CIA-RDP96-00788R001700210016-5.pdf",
    note: "המסמך המקורי שנושא את שם הבדיקה. עצם קיומו מראה שגורמי ביטחון בחנו את Gateway, לא שהטענות המיסטיות הוכחו.",
  },
  {
    name: "CIA Reading Room: Stargate Collection",
    url: "https://www.cia.gov/readingroom/collection/stargate",
    note: "אוסף מסמכים רחב יותר סביב תוכניות ראייה מרחוק ויכולות תודעה שנבחנו בתקופת המלחמה הקרה.",
  },
  {
    name: "The Monroe Institute: Gateway Experience",
    url: "https://www.monroeinstitute.org/products/gateway-experience",
    note: "המקור האזרחי שמציג את Gateway Experience כתוכנית שמע ומדיטציה המבוססת על Hemi-Sync.",
  },
  {
    name: "Hemi-Sync: Technology",
    url: "https://hemi-sync.com/technology/",
    note: "הסבר מסחרי על שימוש בצלילים, דפוסי שמע וביטוי Hemi-Sync. זה מקור לשיטת המוצר, לא הוכחה מדעית עצמאית לכל הטענות.",
  },
  {
    name: "American Institutes for Research: An Evaluation of Remote Viewing",
    url: "https://irp.fas.org/program/collect/air1995.pdf",
    note: "דוח הערכה מאוחר יותר על ראייה מרחוק. רלוונטי להבחנה בין עניין מודיעיני לבין הוכחה מבצעית או מדעית רחבה.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "האם מסמך Gateway מוכיח יציאה מהגוף?",
  description: "בדיקה של מסמך Gateway מ־1983 והקפיצה בין התעניינות מודיעינית לבין הוכחה ליכולות תודעה חריגות.",
  datePublished: "2026-06-19",
  dateModified: "2026-06-19",
  inLanguage: "he-IL",
  mainEntityOfPage: pageUrl,
  author: { "@type": "Person", name: "חיים רפאל", url: `${siteUrl}/about` },
};

export default function Page() {
  const copyText = `מסמך Gateway אמיתי, אבל הוא לא הוכחה לכך שאפשר לצאת מהגוף או לבצע ראייה מרחוק. הוא מראה שגורמים בצבא/מודיעין בחנו רעיון חריג בתקופת המלחמה הקרה. הקפיצה היא להפוך "המסמך קיים" ל"היכולת הוכחה".\n${pageUrl}`;

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="claim-meta">
        <span className="badge verdict-badge">המסמך אמיתי — ההוכחה לא</span>
        <span className="small">נבדק ועודכן: 19 ביוני 2026</span>
      </div>

      <h1>האם מסמך Gateway מוכיח יציאה מהגוף?</h1>
      <p className="lead">
        מסמך Gateway הוא דוגמה מושלמת לטענה שיש לה גרעין אמיתי: אכן קיים מסמך מודיעיני אמריקאי שבחן את השיטה. אבל ברשת הגרעין הזה קופץ מהר מאוד למסקנה רחבה הרבה יותר — כאילו עצם הבדיקה מוכיחה יציאה מהגוף, ראייה מרחוק או יכולות תודעה על־טבעיות.
      </p>

      <section className="box answer">
        <span className="eyebrow">תשובה קצרה</span>
        <h2>המסמך קיים. הוא לא הוכחה שהיכולת הוכחה.</h2>
        <p>
          המסמך מראה שגורמים צבאיים ומודיעיניים התעניינו ב־Gateway Process ובחנו את האפשרות שיש לשיטה ערך. זה שונה לגמרי מהטענה שהמסמך מוכיח יציאה ממשית מהגוף, שליטה במציאות או ראייה מרחוק שניתנת לשחזור מדעי.
        </p>
      </section>

      <section className="box verdict-box">
        <div className="verdict-grid">
          <div><span className="eyebrow">הטענה</span><p>מסמך Gateway של ה־CIA מוכיח שלתודעה יש יכולת לצאת מהגוף או לגשת למידע מרחוק.</p></div>
          <div><span className="eyebrow">השורה התחתונה</span><p><strong>לא. הוא מוכיח שהיה עניין ובדיקה, לא שהיכולת הוכחה.</strong></p></div>
          <div><span className="eyebrow">מה כן נכון</span><p>Gateway היא שיטה קיימת של מדיטציה, הרפיה ושמע, והמסמך אכן עוסק בה ברצינות.</p></div>
          <div><span className="eyebrow">איפה הסיפור קופץ</span><p>מ”הצבא בדק רעיון חריג” ל”הרעיון נכון ומוכח”.</p></div>
        </div>
      </section>

      <h2>מהו Gateway Process?</h2>
      <p>
        Gateway Experience היא סדרת תרגולים שפותחה סביב מכון מונרו, ומשלבת הרפיה, נשימה, דמיון מודרך ושמע שמבוסס על Hemi-Sync. הרעיון המרכזי הוא להכניס את האדם למצב קשב עמוק, שבו הגוף רגוע מאוד והמוח נשאר ער.
      </p>

      <div className="comparison-list">
        <div><strong>הגישה המעשית:</strong><span>מדיטציה, הרפיה, אימון קשב, דמיון מודרך והפחתת רעש מחשבתי.</span></div>
        <div><strong>הגישה המיסטית:</strong><span>יציאה מהגוף, ראייה מרחוק, מצבי תודעה מורחבים וממדים לא פיזיים.</span></div>
        <div><strong>מה המסמך עושה:</strong><span>מנסה להסביר תיאורטית איך השיטה עשויה לעבוד ומה אפשר לבדוק בה.</span></div>
        <div><strong>מה המסמך לא עושה:</strong><span>לא מספק הוכחה סופית ושחזורית לכל הטענות הרוחניות שמיוחסות ל־Gateway ברשת.</span></div>
      </div>

      <h2>מה לגבי Hemi-Sync?</h2>
      <p>
        Hemi-Sync מתואר כשימוש בדפוסי שמע, בין היתר צלילים מעט שונים בכל אוזן, כדי לעודד מצב תודעתי מסוים. זה יכול להיות כלי מדיטטיבי או חווייתי. אבל גם כאן צריך להפריד בין “השיטה קיימת” לבין “כל טענה על יציאה מהגוף הוכחה”.
      </p>

      <h2>ומה עם בלוטת האצטרובל?</h2>
      <div className="box method-note">
        <p>
          זו דוגמה טובה לתוספת מאוחרת של הרשת. במסמך Gateway עצמו האצטרובל אינו המרכז של השיטה. השיטה מדברת הרבה יותר על הרפיה, תדרים, קשב, מודעות, סנכרון, דמיון ותיאוריות תודעה. החיבור ל”עין שלישית” הוא בעיקר שכבת ניו־אייג׳ שנוספה סביב הנושא.
        </p>
      </div>

      <h2>שרשרת הטענה</h2>
      <div className="logic-chain">
        <span>יש מסמך אמיתי</span><span className="logic-arrow">←</span>
        <span>המסמך נכתב בהקשר מודיעיני</span><span className="logic-arrow">←</span>
        <span>הוא עוסק במצבי תודעה חריגים</span><span className="logic-arrow">←</span>
        <strong>לכן יציאה מהגוף וראייה מרחוק הוכחו</strong>
      </div>
      <p className="small">שלושת החלקים הראשונים יכולים להיות נכונים. הקפיצה היא להפוך בדיקה, השערה ועניין מודיעיני להוכחה.</p>

      <h2>שאלות נפוצות</h2>
      <div className="faq-list">
        <details>
          <summary>אז המסמך מזויף?</summary>
          <p>לא. המסמך אמיתי ומופיע בארכיון ה־CIA. הבעיה היא לא עצם המסמך, אלא המסקנות שמוסיפים לו ברשת.</p>
        </details>
        <details>
          <summary>האם זה אומר שאין שום ערך ל־Gateway?</summary>
          <p>לא. ייתכן שיש ערך מעשי בתרגול הרפיה, נשימה, קשב ודמיון מודרך. זה לא מחייב לקבל את כל הטענות על יציאה מהגוף או ממדים אחרים.</p>
        </details>
        <details>
          <summary>האם ה־CIA הוכיח ראייה מרחוק?</summary>
          <p>לא דרך המסמך הזה. לכל היותר הוא מראה עניין ובחינה של האפשרות. הוכחה דורשת תוצאות עקביות, מדידות ושחזוריות, לא רק מסמך תיאורטי.</p>
        </details>
        <details>
          <summary>אז איך נכון להשתמש בזה?</summary>
          <p>ככלי לפתיחת שאלה: מה נבדק, מי בדק, מה נמצא, ומה רק משוער. לא כקלף שסוגר דיון.</p>
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
          הבדיקה הפרידה בין שלושה דברים: קיום המסמך, התוכן וההקשר שלו, והמסקנה שאנשים מוסיפים מעליו. המסקנה כאן אינה ש־Gateway “שטויות”, אלא שמסמך התעניינות אינו הוכחה ליכולת על־טבעית.
        </p>
      </section>
    </article>
  );
}
