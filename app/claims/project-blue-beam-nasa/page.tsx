import { CopyBox } from "@/components/CopyBox";
import { siteUrl } from "@/lib/site";

export const metadata = {
  title: "האם Project Blue Beam הוא תוכנית רשמית של NASA? | מקור בדיקה",
  description:
    "בדיקה של הטענה ש־Project Blue Beam הוא פרויקט רשמי של NASA או האו״ם לזיוף פלישת חוצנים או התגלות דתית כדי ליצור סדר עולמי חדש.",
  alternates: { canonical: "/claims/project-blue-beam-nasa" },
};

const pageUrl = `${siteUrl}/claims/project-blue-beam-nasa`;

const sources = [
  {
    name: "NASA Search: Project Blue Beam",
    url: "https://search.nasa.gov/search?affiliate=nasa&query=%22Project%20Blue%20Beam%22",
    note: "חיפוש מדויק באתר NASA לביטוי Project Blue Beam. נכון למועד הבדיקה לא נמצא מקור רשמי שמציג את הביטוי כתוכנית של NASA.",
  },
  {
    name: "United Nations Search: Project Blue Beam",
    url: "https://search.un.org/results.php?query=%22Project%20Blue%20Beam%22",
    note: "חיפוש מדויק באתר האו״ם לביטוי Project Blue Beam. נכון למועד הבדיקה לא נמצא מקור רשמי שמחבר את הטענה לאו״ם.",
  },
  {
    name: "Serge Monast — background profile",
    url: "https://en.wikipedia.org/wiki/Serge_Monast",
    note: "מקור רקע על סרז׳ מונאסט, שמזוהה עם הפצת הטענה בשנות ה־90. זה מקור רקע, לא מקור רשמי של NASA או האו״ם.",
  },
  {
    name: "Projet Blue Beam — summary of the theory",
    url: "https://fr.wikipedia.org/wiki/Projet_Blue_Beam",
    note: "רקע כללי על מבנה התיאוריה: הולוגרמות, דמויות דתיות, פלישת חוצנים וסדר עולמי חדש. לא מסמך רשמי.",
  },
  {
    name: "The Guardian: drones and renewed Blue Beam claims",
    url: "https://www.theguardian.com/us-news/2024/dec/17/drones-new-jersey-fbi",
    note: "דוגמה עדכנית לאופן שבו הטענה חוזרת ברשת סביב אירועי רחפנים ואורות בשמיים. רלוונטי להפצה, לא להוכחת הטענה.",
  },
  {
    name: "Project Blue Book — real U.S. Air Force UFO study",
    url: "https://en.wikipedia.org/wiki/Project_Blue_Book",
    note: "רקע על פרויקט אמיתי בעל שם דומה: Project Blue Book של חיל האוויר האמריקאי. חשוב להפרדה בין פרויקט היסטורי אמיתי לבין Blue Beam.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "האם Project Blue Beam הוא תוכנית רשמית של NASA?",
  description:
    "בדיקה של הטענה ש־Project Blue Beam הוא פרויקט רשמי של NASA או האו״ם לזיוף אירוע דתי או חוצני לצורך סדר עולמי חדש.",
  datePublished: "2026-06-20",
  dateModified: "2026-06-20",
  inLanguage: "he-IL",
  mainEntityOfPage: pageUrl,
  author: { "@type": "Organization", name: "מקור בדיקה" },
};

export default function Page() {
  const copyText = `Project Blue Beam הוא נרטיב קונספירטיבי מוכר, בעיקר סביב טענות של סרז׳ מונאסט משנות ה־90. נכון לבדיקה הזו לא נמצא מקור רשמי של NASA או של האו״ם שמראה שמדובר בתוכנית אמיתית. הקפיצה היא להפוך סיפור שמייחס משהו ל־NASA למסמך רשמי של NASA.
${pageUrl}`;

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="claim-meta">
        <span className="badge verdict-badge">נרטיב מוכר — מקור רשמי לא נמצא</span>
        <span className="small">נבדק ועודכן: 20 ביוני 2026</span>
      </div>

      <h1>האם Project Blue Beam הוא תוכנית רשמית של NASA?</h1>
      <p className="lead">
        Project Blue Beam הוא אחד הנרטיבים הוויראליים הכי חזקים באזור שבין חוצנים, סדר עולמי חדש, טכנולוגיה סודית ודת. הטענה נשמעת כמו מסמך ממשלתי שנחשף: NASA והאו״ם יזייפו התגלות דתית או פלישת חוצנים כדי לאחד את האנושות תחת שליטה אחת. אבל השאלה שלנו צרה יותר: האם יש מקור רשמי שמראה שזה באמת פרויקט של NASA או האו״ם?
      </p>

      <section className="box answer">
        <span className="eyebrow">תשובה קצרה</span>
        <h2>לא נמצא מקור רשמי של NASA או האו״ם לתוכנית כזו.</h2>
        <p>
          Project Blue Beam מוכר בעיקר כנרטיב קונספירטיבי שמיוחס לסרז׳ מונאסט משנות ה־90. הוא מזכיר את NASA והאו״ם בתוך הסיפור, אבל נכון לבדיקה הזו לא נמצא מסמך רשמי של NASA או של האו״ם שמציג את Project Blue Beam כתוכנית אמיתית.
        </p>
      </section>

      <section className="box verdict-box">
        <div className="verdict-grid">
          <div><span className="eyebrow">הטענה</span><p>Project Blue Beam הוא פרויקט אמיתי של NASA/האו״ם לזיוף פלישת חוצנים או התגלות דתית.</p></div>
          <div><span className="eyebrow">השורה התחתונה</span><p><strong>לא נמצא מקור רשמי שמאשר את זה.</strong></p></div>
          <div><span className="eyebrow">מה כן נכון</span><p>יש נרטיב מוכר בשם הזה, והוא חוזר ברשת סביב אירועי עב״מים, רחפנים ואורות בשמיים.</p></div>
          <div><span className="eyebrow">איפה הסיפור קופץ</span><p>מ”מונאסט כתב ש־NASA מעורבת” ל”NASA מפעילה תוכנית אמיתית”.</p></div>
        </div>
      </section>

      <h2>מה זה Project Blue Beam?</h2>
      <p>
        בגרסה הנפוצה של הסיפור, גורמים חזקים משתמשים בטכנולוגיה מתקדמת — הולוגרמות, תקשורת תודעתית, אירועים בשמיים או פלישת חוצנים מבוימת — כדי לגרום לאנושות לוותר על דתות, גבולות וספקנות, ולקבל סדר עולמי חדש. זה סיפור בנוי היטב: הוא מחבר פחד מטכנולוגיה, פחד מממשלה, חוצנים, דת ואג׳נדה גלובלית.
      </p>

      <div className="comparison-list">
        <div><strong>הגרעין האמיתי:</strong><span>יש תיאוריה מוכרת בשם Project Blue Beam, והיא מופצת כבר שנים.</span></div>
        <div><strong>הייחוס:</strong><span>הטענה מייחסת את התוכנית ל־NASA ולעיתים גם לאו״ם.</span></div>
        <div><strong>הבעיה:</strong><span>ייחוס בתוך סיפור אינו מסמך רשמי של הגוף שמוזכר בסיפור.</span></div>
        <div><strong>מה צריך להראות:</strong><span>מסמך NASA/UN, מספר תיק, דף רשמי או מקור ראשוני אמין.</span></div>
      </div>

      <h2>מה בדקנו?</h2>
      <p>
        הבדיקה התחילה מהביטוי המדויק: <strong>Project Blue Beam</strong>. חיפשנו האם הביטוי מופיע כמסמך או תוכנית רשמית באתר NASA, והאם הוא מופיע באופן רשמי באתר האו״ם. בנוסף בדקנו מקורות רקע שמייחסים את מקור הסיפור לסרז׳ מונאסט ולגלי הפצה חוזרים ברשת.
      </p>

      <section className="box method-note">
        <h2>למה זה לא אותו דבר כמו Gateway?</h2>
        <p>
          ב־Gateway היה מסמך אמיתי של ה־CIA, והבדיקה הייתה: האם המסמך מוכיח את מה שאומרים עליו. ב־Blue Beam המצב הפוך: קודם צריך למצוא בכלל מסמך רשמי של NASA או של האו״ם. בלי מסמך כזה, אין עדיין מה לפרש — יש נרטיב שמייחס את עצמו למוסדות רשמיים.
        </p>
      </section>

      <h2>בלבול אפשרי: Blue Beam מול Blue Book</h2>
      <p>
        יש פרויקט אמיתי בשם <strong>Project Blue Book</strong>, שהיה מחקר של חיל האוויר האמריקאי על דיווחי עב״מים באמצע המאה ה־20. זה לא Project Blue Beam. דמיון בשם, נושא של עב״מים וארכיונים ממשלתיים יכולים לעזור לנרטיב להישמע רשמי, אבל הם לא הופכים אותו למסמך NASA.
      </p>

      <h2>שרשרת הטענה</h2>
      <div className="logic-chain">
        <span>יש סיפור בשם Blue Beam</span><span className="logic-arrow">←</span>
        <span>הסיפור מזכיר את NASA והאו״ם</span><span className="logic-arrow">←</span>
        <span>הסיפור חוזר סביב אירועים בשמיים</span><span className="logic-arrow">←</span>
        <strong>לכן זו תוכנית רשמית</strong>
      </div>
      <p className="small">שלושת החלקים הראשונים יכולים להסביר למה הטענה מושכת. הקפיצה היא החלק האחרון: ייחוס אינו ראיה רשמית.</p>

      <h2>שאלות נפוצות</h2>
      <div className="faq-list">
        <details>
          <summary>אז Project Blue Beam לא קיים בכלל?</summary>
          <p>הנרטיב קיים. אנשים מדברים עליו, מפיצים אותו, ויש מקורות רקע על מקורו. מה שלא נמצא כאן הוא מקור רשמי שמראה שזו תוכנית אמיתית של NASA או האו״ם.</p>
        </details>
        <details>
          <summary>האם זה מוכיח שאין טכנולוגיות סודיות?</summary>
          <p>לא. זו לא הבדיקה. הבדיקה כאן צרה: האם הטענה הספציפית על Project Blue Beam כתוכנית NASA/UN מגובה במסמך רשמי.</p>
        </details>
        <details>
          <summary>למה הטענה חוזרת כל פעם שיש אורות או רחפנים?</summary>
          <p>כי היא נותנת מסגרת דרמטית לאירוע לא ברור: לא “אנחנו לא יודעים עדיין”, אלא “זה חלק מתוכנית ענק”. זה אנושי ומושך, אבל לא מחליף מקור.</p>
        </details>
        <details>
          <summary>מה יגרום לעדכן את המסקנה?</summary>
          <p>מסמך רשמי, ארכיון ממשלתי, תיעוד מקורי או מקור אמין שמפנה למסמך כזה. אם מקור כזה יופיע, המסקנה תעודכן.</p>
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
          הפרדנו בין שלושה דברים: קיום הנרטיב, הייחוס שלו ל־NASA/האו״ם, והוכחה רשמית שהגופים האלה מפעילים תוכנית כזו. המסקנה אינה “כל שאלה על עב״מים היא שטויות”, אלא ש־Project Blue Beam לא הוצג כאן כמסמך רשמי של NASA או של האו״ם.
        </p>
      </section>
    </article>
  );
}
