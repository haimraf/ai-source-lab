import type { Metadata } from "next";
import { CopyBox } from "@/components/CopyBox";
import { getClaimBySlug } from "@/lib/claims-db";
import { siteUrl } from "@/lib/site";

const claim = getClaimBySlug("ai-bci-synthetic-soul")!;
const pageUrl = `${siteUrl}${claim.path}`;
const ogImage = `${pageUrl}/opengraph-image`;

export const metadata: Metadata = {
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

const copyText = `קיימות טכנולוגיות אמיתיות כמו BCI, כפילים דיגיטליים, נוירופידבק ו-AI Agents.
אבל זה לא מוכיח "נשמה סינטטית", השתלטות המונית על בני אדם, או שליטה דרך LED, Wi-Fi, אנטנות או ריסוס.
הבדיקה הנכונה היא להפריד בין טכנולוגיה קיימת לבין הקפיצה: "לכן AI מפעיל את הגוף במקום האדם".
${pageUrl}`;

const sources = [
  {
    name: "Wired - Everything We Know About Neuralink's Brain Implant Trial",
    url: "https://www.wired.com/story/everything-we-know-about-neuralinks-brain-implant-trial",
    note: "מסביר ש-BCI אוסף אותות מוח, מנתח אותם ומתרגם אותם לפקודות לשליטה במכשיר חיצוני. הניסוי המתואר מכוון לאנשים עם שיתוק ולשליטה בסמן או מקלדת.",
  },
  {
    name: "Reuters - Neuralink feasibility trial with brain implant and robotic arm",
    url: "https://www.reuters.com/business/healthcare-pharmaceuticals/musks-neuralink-launch-new-feasibility-trial-with-brain-implant-2024-11-25/",
    note: "מתאר ניסוי היתכנות שבו אנשים עם שיתוק משתמשים בממשק מוח-מחשב כדי לשלוט במכשירים חיצוניים, כולל בדיקה של זרוע רובוטית.",
  },
  {
    name: "Wired - Neuralink first human subject demonstration",
    url: "https://www.wired.com/story/neuralink-implant-first-human-patient-demonstration",
    note: "מתאר הדגמה של שליטה במחשב באמצעות שתל BCI, ומדגיש שמדובר בטכנולוגיה ניסיונית שעדיין דורשת עבודה ומעקב.",
  },
  {
    name: "Digital Twins: State of the Art Theory and Practice",
    url: "https://arxiv.org/abs/2011.02833",
    note: "סקירה על כפילים דיגיטליים כמערכות מודל, ניטור וסימולציה. לא מדובר בהעתקה של נשמה או תודעה אנושית.",
  },
  {
    name: "What is a Digital Twin Anyway?",
    url: "https://arxiv.org/abs/2409.19005",
    note: "מאמר שמראה שגם להגדרת Digital Twin יש שונות ומגבלות, ושיכולות מתקדמות אינן בהכרח בשלות בכל תחום.",
  },
  {
    name: "Adobe Firefly",
    url: "https://firefly.adobe.com/",
    note: "כלי יצירה גנרטיבי לתוכן. לא מערכת BCI ולא כלי שמפעיל גוף אנושי.",
  },
];

export default function SyntheticSoulClaimPage() {
  return (
    <article>
      <nav className="breadcrumbs" aria-label="פירורי לחם">
        <ol>
          <li><a href="/">בית</a></li>
          <li><a href="/topics">נושאים</a></li>
          <li aria-current="page"><span>{claim.title}</span></li>
        </ol>
      </nav>

      <section className="hero">
        <span className="badge">{claim.kicker}</span>
        <h1>{claim.title}</h1>
        <p className="lead">הטענה מערבבת מונחים אמיתיים כמו BCI, כפילים דיגיטליים, AI Agents ונוירופידבק עם מסקנה גדולה בהרבה: כאילו קיימת מערכת שמחליפה את התודעה האנושית ומפעילה את הגוף במקום האדם.</p>
      </section>

      <section className="box answer">
        <h2>שורה תחתונה</h2>
        <p>
          קיימות טכנולוגיות אמיתיות שמחברות בין מוח, מחשב ומכשירים חיצוניים. אבל במקורות שנבדקו לא נמצאה ראיה לכך ש־AI, BCI או כפיל דיגיטלי מאפשרים "נשמה סינטטית", השתלטות המונית על הגוף, או שליטה בבני אדם דרך LED, Wi-Fi, אנטנות או ריסוס.
        </p>
        <p className="small">המסקנה אינה "כל נוירוטכנולוגיה בטוחה או חסרת סיכון". המסקנה צרה יותר: הטכנולוגיות הידועות אינן מוכיחות את הטענה על החלפת תודעה או הפעלת גוף אנושי במקום האדם.</p>
      </section>

      <h2>מה כן אמיתי?</h2>
      <div className="source-levels">
        <div className="source-level"><strong>BCI</strong><div><h3>ממשק מוח-מחשב קיים</h3><p>יש מערכות שקוראות אותות עצביים ומתרגמות אותם לפעולות במחשב, סמן, מקלדת או מכשיר חיצוני. ברוב הדוגמאות הציבוריות מדובר בסיוע לאנשים עם שיתוק.</p></div></div>
        <div className="source-level"><strong>AI</strong><div><h3>מודלים וסוכנים קיימים</h3><p>מודלי שפה וסוכני AI יכולים לנתח מידע, לתכנן צעדים ולהפעיל תוכנה. זה לא אומר שהם נטמעים בגוף או מחליפים תודעה אנושית.</p></div></div>
        <div className="source-level"><strong>Digital Twin</strong><div><h3>כפיל דיגיטלי הוא מודל</h3><p>כפיל דיגיטלי הוא ייצוג, סימולציה או מודל של מערכת. הוא יכול לעזור לניטור ולחיזוי, אבל אינו "עותק נשמה".</p></div></div>
        <div className="source-level"><strong>Neurofeedback</strong><div><h3>אימון נוירולוגי אינו דיבוק</h3><p>נוירופידבק וטיפולים התנהגותיים יכולים להשפיע על הרגלים, קשב וויסות רגשי. זה לא שקול להשתלטות חיצונית על אדם.</p></div></div>
      </div>

      <h2>איפה הקפיצה?</h2>
      <div className="logic-chain">
        <span>BCI ו-AI קיימים</span><span className="logic-arrow">←</span>
        <span>יש ניסויים בשליטה במחשב או במכשיר חיצוני</span><span className="logic-arrow">←</span>
        <span>יש כפילים דיגיטליים ומודלים אישיים</span><span className="logic-arrow">←</span>
        <strong>לכן AI מחליף את נשמת האדם ומפעיל את הגוף</strong>
      </div>
      <p className="small">שלושת החלקים הראשונים מתארים תחומים אמיתיים. הקפיצה היא המעבר מהם לטענה טוטאלית על שליטה באוכלוסייה או החלפת תודעה.</p>

      <h2>מה לא נמצא במקורות?</h2>
      <div className="comparison-list">
        <div><strong>לא נמצא</strong><span>מסמך רשמי שמראה "החדרת נשמה סינטטית" לבני אדם.</span></div>
        <div><strong>לא נמצא</strong><span>מקור שמחבר בין Firefly, AI Agents או כפילים דיגיטליים לבין הפעלת גוף אנושי.</span></div>
        <div><strong>לא נמצא</strong><span>ראיה לכך ש־LED, Wi-Fi, אנטנות או ריסוס אוויר מטמיעים AI בגוף.</span></div>
        <div><strong>לא נמצא</strong><span>ראיה שכל האוכלוסייה "נגועה" או שפועלת עם תודעה סינטטית.</span></div>
      </div>

      <h2>פירוק המונחים</h2>
      <div className="comparison-list">
        <div><strong>BCI</strong><span>ממשק בין פעילות מוחית לבין מחשב או מכשיר. המכשיר מפענח אותות ומתרגם אותם לפקודות.</span></div>
        <div><strong>Digital Twin</strong><span>מודל דיגיטלי של מערכת, מוצר או תהליך. לא הוכחה להעתקת תודעה.</span></div>
        <div><strong>AI Agent</strong><span>תוכנה שמבצעת צעדים או מפעילה כלים דיגיטליים לפי הנחיות. לא ישות בתוך גוף.</span></div>
        <div><strong>Neurofeedback</strong><span>שיטה לאימון תגובות מוחיות בעזרת מדידה ומשוב. לא "תכנות נשמה".</span></div>
      </div>

      <h2>שאלות נפוצות</h2>
      <div className="faq-list">
        <details>
          <summary>אז BCI לא מסוכן בכלל?</summary>
          <p>לא זו המסקנה. BCI הוא תחום רפואי וטכנולוגי רגיש, עם שאלות בטיחות, פרטיות ואתיקה. אבל סיכון או אתיקה אינם הוכחה להשתלטות המונית או ל"נשמה סינטטית".</p>
        </details>
        <details>
          <summary>האם AI יכול להפעיל רובוט או מחשב?</summary>
          <p>כן, AI יכול להפעיל תוכנה, לסייע בשליטה במכשירים ולנתח מידע. זה שונה מהפעלת גוף אנושי במקום האדם.</p>
        </details>
        <details>
          <summary>מה לגבי כפיל דיגיטלי שמחקה אדם?</summary>
          <p>אפשר לבנות מודלים שמחקים קול, סגנון כתיבה, דמות או הרגלים. זה לא אותו דבר כמו העתקת תודעה, זיכרונות מלאים או שליטה בגוף.</p>
        </details>
        <details>
          <summary>למה הטענה נשמעת משכנעת?</summary>
          <p>כי היא משתמשת במונחים אמיתיים ומתקדמים. כשמחברים אותם מהר מדי, נוצרת תחושה שכל החלקים מוכיחים סיפור אחד. הבדיקה מפרידה בין החלקים.</p>
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
          פירקנו את הטענה למונחים: BCI, AI Agents, Digital Twins, Neurofeedback וטענות על LED, Wi-Fi, אנטנות וריסוס. לאחר מכן בדקנו מה כל תחום באמת עושה, ומה לא נמצא במקורות שנבדקו. הבדיקה אינה עוסקת בשאלה רוחנית על קיום נשמה, אלא בטענה העובדתית שיש טכנולוגיה שמחליפה או מפעילה את התודעה האנושית.
        </p>
      </section>
    </article>
  );
}
