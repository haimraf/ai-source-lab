import type { ClaimContent } from "../../lib/content/claim-schema";
import { defineMigratedClaimContent } from "./define-migrated-claim";

export const aiBciSyntheticSoulClaimContent = defineMigratedClaimContent({
  slug: "ai-bci-synthetic-soul",
  path: "/claims/ai-bci-synthetic-soul",
  title: "האם BCI ו-AI מוכיחים שליטה חיצונית בגוף?",
  description: "בדיקה של טענה שמערבבת BCI, סוכני AI, כפילים דיגיטליים, נוירופידבק, LED ו-Wi-Fi למסקנה על שליטה חיצונית באדם.",
  kicker: "AI, מוח ותודעה",
  tags: ["AI", "BCI", "נשמה סינטטית", "Digital Twin", "נוירוטכנולוגיה"],
  verdict: "הטכנולוגיות קיימות, אבל לא מוכיחות שליטה חיצונית באדם",
  cluster: "ai-sources",
  updated: "2026-06-20",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה ש-BCI ו-AI מוכיחים שליטה חיצונית בגוף",
  claim: "הטענה מערבבת מונחים אמיתיים כמו BCI, כפילים דיגיטליים, AI Agents ונוירופידבק עם מסקנה גדולה בהרבה: כאילו קיימת מערכת שמחליפה את התודעה האנושית ומפעילה את הגוף במקום האדם.",
  shortAnswer: "שורה תחתונה",
  bottomLine: "המסקנה אינה \"כל נוירוטכנולוגיה בטוחה או חסרת סיכון\". המסקנה צרה יותר: הטכנולוגיות הידועות אינן מוכיחות את הטענה על החלפת תודעה או הפעלת גוף אנושי במקום האדם.",
  summaryPoints: [
    "יש מערכות שקוראות אותות עצביים ומתרגמות אותם לפעולות במחשב, סמן, מקלדת או מכשיר חיצוני. ברוב הדוגמאות הציבוריות מדובר בסיוע לאנשים עם שיתוק.",
    "מודלי שפה וסוכני AI יכולים לנתח מידע, לתכנן צעדים ולהפעיל תוכנה. זה לא אומר שהם נטמעים בגוף או מחליפים תודעה אנושית.",
  ],
  overview: "קיימות טכנולוגיות אמיתיות שמחברות בין מוח, מחשב ומכשירים חיצוניים. אבל במקורות שנבדקו לא נמצאה ראיה לכך ש־AI, BCI או כפיל דיגיטלי מאפשרים \"נשמה סינטטית\", השתלטות המונית על הגוף, או שליטה בבני אדם דרך LED, Wi-Fi, אנטנות או ריסוס.",
  sources: [
    { id: "wired-neuralink-trial", title: "Wired - Everything We Know About Neuralink's Brain Implant Trial", url: "https://www.wired.com/story/everything-we-know-about-neuralinks-brain-implant-trial", level: "secondary", note: "מסביר ש-BCI אוסף אותות מוח, מנתח אותם ומתרגם אותם לפקודות לשליטה במכשיר חיצוני. הניסוי המתואר מכוון לאנשים עם שיתוק ולשליטה בסמן או מקלדת." },
    { id: "reuters-neuralink-arm", title: "Reuters - Neuralink feasibility trial with brain implant and robotic arm", url: "https://www.reuters.com/business/healthcare-pharmaceuticals/musks-neuralink-launch-new-feasibility-trial-with-brain-implant-2024-11-25/", level: "secondary", note: "מתאר ניסוי היתכנות שבו אנשים עם שיתוק משתמשים בממשק מוח-מחשב כדי לשלוט במכשירים חיצוניים, כולל בדיקה של זרוע רובוטית." },
    { id: "wired-neuralink-demonstration", title: "Wired - Neuralink first human subject demonstration", url: "https://www.wired.com/story/neuralink-implant-first-human-patient-demonstration", level: "secondary", note: "מתאר הדגמה של שליטה במחשב באמצעות שתל BCI, ומדגיש שמדובר בטכנולוגיה ניסיונית שעדיין דורשת עבודה ומעקב." },
    { id: "digital-twins-state-of-art", title: "Digital Twins: State of the Art Theory and Practice", url: "https://arxiv.org/abs/2011.02833", level: "primary", note: "סקירה על כפילים דיגיטליים כמערכות מודל, ניטור וסימולציה. לא מדובר בהעתקה של נשמה או תודעה אנושית." },
    { id: "what-is-digital-twin", title: "What is a Digital Twin Anyway?", url: "https://arxiv.org/abs/2409.19005", level: "primary", note: "מאמר שמראה שגם להגדרת Digital Twin יש שונות ומגבלות, ושיכולות מתקדמות אינן בהכרח בשלות בכל תחום." },
    { id: "adobe-firefly", title: "Adobe Firefly", url: "https://firefly.adobe.com/", level: "official", note: "כלי יצירה גנרטיבי לתוכן. לא מערכת BCI ולא כלי שמפעיל גוף אנושי." },
  ],
  faq: [
    { question: "אז BCI לא מסוכן בכלל?", answer: "לא זו המסקנה. BCI הוא תחום רפואי וטכנולוגי רגיש, עם שאלות בטיחות, פרטיות ואתיקה. אבל סיכון או אתיקה אינם הוכחה להשתלטות המונית או ל\"נשמה סינטטית\"." },
    { question: "האם AI יכול להפעיל רובוט או מחשב?", answer: "כן, AI יכול להפעיל תוכנה, לסייע בשליטה במכשירים ולנתח מידע. זה שונה מהפעלת גוף אנושי במקום האדם." },
    { question: "מה לגבי כפיל דיגיטלי שמחקה אדם?", answer: "אפשר לבנות מודלים שמחקים קול, סגנון כתיבה, דמות או הרגלים. זה לא אותו דבר כמו העתקת תודעה, זיכרונות מלאים או שליטה בגוף." },
    { question: "למה הטענה נשמעת משכנעת?", answer: "כי היא משתמשת במונחים אמיתיים ומתקדמים. כשמחברים אותם מהר מדי, נוצרת תחושה שכל החלקים מוכיחים סיפור אחד. הבדיקה מפרידה בין החלקים." },
  ],
}) satisfies ClaimContent;
