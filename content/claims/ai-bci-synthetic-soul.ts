import { defineClaim, type ClaimContent } from "../../lib/content/claim-schema";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedAiBciSyntheticSoulClaimContent = defineMigratedClaimContent({
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
});

export const aiBciSyntheticSoulClaimContent = defineClaim({
  ...migratedAiBciSyntheticSoulClaimContent,
  lead: migratedAiBciSyntheticSoulClaimContent.claim,
  shareCopy: `קיימות טכנולוגיות אמיתיות כמו BCI, כפילים דיגיטליים, נוירופידבק ו-AI Agents.
אבל זה לא מוכיח "נשמה סינטטית", השתלטות המונית על בני אדם, או שליטה דרך LED, Wi-Fi, אנטנות או ריסוס.
הבדיקה הנכונה היא להפריד בין טכנולוגיה קיימת לבין הקפיצה: "לכן AI מפעיל את הגוף במקום האדם".
https://ai-source-lab.vercel.app/claims/ai-bci-synthetic-soul`,
  body: [
    {
      id: "bottom-line",
      type: "answer-box",
      title: "שורה תחתונה",
      paragraphs: [
        "קיימות טכנולוגיות אמיתיות שמחברות בין מוח, מחשב ומכשירים חיצוניים. אבל במקורות שנבדקו לא נמצאה ראיה לכך ש־AI, BCI או כפיל דיגיטלי מאפשרים \"נשמה סינטטית\", השתלטות המונית על הגוף, או שליטה בבני אדם דרך LED, Wi-Fi, אנטנות או ריסוס.",
        "המסקנה אינה \"כל נוירוטכנולוגיה בטוחה או חסרת סיכון\". המסקנה צרה יותר: הטכנולוגיות הידועות אינן מוכיחות את הטענה על החלפת תודעה או הפעלת גוף אנושי במקום האדם.",
      ],
      variant: "answer",
    },
    {
      id: "real-technologies",
      type: "source-levels",
      title: "מה כן אמיתי?",
      rows: [
        { label: "BCI", title: "ממשק מוח-מחשב קיים", paragraphs: [migratedAiBciSyntheticSoulClaimContent.summaryPoints[0]] },
        { label: "AI", title: "מודלים וסוכנים קיימים", paragraphs: [migratedAiBciSyntheticSoulClaimContent.summaryPoints[1]] },
        { label: "Digital Twin", title: "כפיל דיגיטלי הוא מודל", paragraphs: ["כפיל דיגיטלי הוא ייצוג, סימולציה או מודל של מערכת. הוא יכול לעזור לניטור ולחיזוי, אבל אינו \"עותק נשמה\"."] },
        { label: "Neurofeedback", title: "אימון נוירולוגי אינו דיבוק", paragraphs: ["נוירופידבק וטיפולים התנהגותיים יכולים להשפיע על הרגלים, קשב וויסות רגשי. זה לא שקול להשתלטות חיצונית על אדם."] },
      ],
    },
    {
      id: "claim-jump",
      type: "logic-chain",
      title: "איפה הקפיצה?",
      steps: ["BCI ו-AI קיימים", "יש ניסויים בשליטה במחשב או במכשיר חיצוני", "יש כפילים דיגיטליים ומודלים אישיים"],
      conclusion: "לכן AI מחליף את נשמת האדם ומפעיל את הגוף",
      note: "שלושת החלקים הראשונים מתארים תחומים אמיתיים. הקפיצה היא המעבר מהם לטענה טוטאלית על שליטה באוכלוסייה או החלפת תודעה.",
    },
    {
      id: "not-found",
      type: "comparison-list",
      title: "מה לא נמצא במקורות?",
      items: [
        { label: "לא נמצא", text: "מסמך רשמי שמראה \"החדרת נשמה סינטטית\" לבני אדם." },
        { label: "לא נמצא", text: "מקור שמחבר בין Firefly, AI Agents או כפילים דיגיטליים לבין הפעלת גוף אנושי." },
        { label: "לא נמצא", text: "ראיה לכך ש־LED, Wi-Fi, אנטנות או ריסוס אוויר מטמיעים AI בגוף." },
        { label: "לא נמצא", text: "ראיה שכל האוכלוסייה \"נגועה\" או שפועלת עם תודעה סינטטית." },
      ],
    },
    {
      id: "term-breakdown",
      type: "comparison-list",
      title: "פירוק המונחים",
      items: [
        { label: "BCI", text: "ממשק בין פעילות מוחית לבין מחשב או מכשיר. המכשיר מפענח אותות ומתרגם אותם לפקודות." },
        { label: "Digital Twin", text: "מודל דיגיטלי של מערכת, מוצר או תהליך. לא הוכחה להעתקת תודעה." },
        { label: "AI Agent", text: "תוכנה שמבצעת צעדים או מפעילה כלים דיגיטליים לפי הנחיות. לא ישות בתוך גוף." },
        { label: "Neurofeedback", text: "שיטה לאימון תגובות מוחיות בעזרת מדידה ומשוב. לא \"תכנות נשמה\"." },
      ],
    },
    { id: "faq", type: "faq", title: "שאלות נפוצות", source: "claim" },
    { id: "copy-share", type: "copy-share", title: "תגובה קצרה להעתקה", source: "claim" },
    { id: "sources", type: "sources", title: "המקורות שנבדקו", source: "claim" },
    {
      id: "method",
      type: "method-note",
      title: "איך נבדקה הטענה?",
      paragraphs: ["פירקנו את הטענה למונחים: BCI, AI Agents, Digital Twins, Neurofeedback וטענות על LED, Wi-Fi, אנטנות וריסוס. לאחר מכן בדקנו מה כל תחום באמת עושה, ומה לא נמצא במקורות שנבדקו. הבדיקה אינה עוסקת בשאלה רוחנית על קיום נשמה, אלא בטענה העובדתית שיש טכנולוגיה שמחליפה או מפעילה את התודעה האנושית."],
    },
  ],
  structuredData: { mode: "none" },
  metadataOverrides: {
    title: `${migratedAiBciSyntheticSoulClaimContent.title} | מקור בדיקה`,
    description: migratedAiBciSyntheticSoulClaimContent.description,
    canonical: migratedAiBciSyntheticSoulClaimContent.path,
    openGraph: {
      title: migratedAiBciSyntheticSoulClaimContent.title,
      description: migratedAiBciSyntheticSoulClaimContent.description,
      url: "https://ai-source-lab.vercel.app/claims/ai-bci-synthetic-soul",
      siteName: "מקור בדיקה",
      locale: "he_IL",
      type: "article",
      images: [{
        url: "https://ai-source-lab.vercel.app/claims/ai-bci-synthetic-soul/opengraph-image",
        width: 1200,
        height: 630,
        alt: migratedAiBciSyntheticSoulClaimContent.ogAlt,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: migratedAiBciSyntheticSoulClaimContent.title,
      description: migratedAiBciSyntheticSoulClaimContent.description,
      images: ["https://ai-source-lab.vercel.app/claims/ai-bci-synthetic-soul/opengraph-image"],
    },
  },
} satisfies ClaimContent);
