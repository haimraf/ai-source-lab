import { defineClaim, type ClaimContent } from "../../lib/content/claim-schema";
import { siteUrl } from "../../lib/site";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedYouWillOwnNothingKlausSchwabClaimContent = defineMigratedClaimContent({
  slug: "you-will-own-nothing-klaus-schwab",
  path: "/claims/you-will-own-nothing-klaus-schwab",
  title: "האם קלאוס שוואב אמר שלא יהיה לכם כלום?",
  description: "בדיקה של הטענה שהמשפט 'לא יהיה לכם כלום ותהיו מאושרים' הוא ציטוט של קלאוס שוואב או תוכנית רשמית של WEF לקחת רכוש פרטי.",
  kicker: "WEF וציטוטים ויראליים",
  tags: ["WEF", "קלאוס שוואב", "אג׳נדה 2030", "ציטוטים ויראליים", "ייחוס שגוי"],
  verdict: "המקור הוא מאמר תרחישי; לא נמצא שזה ציטוט ישיר של קלאוס שוואב",
  cluster: "agenda-2030",
  updated: "2026-06-21",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה שקלאוס שוואב אמר שלא יהיה לכם כלום ותהיו מאושרים",
  claim: "קלאוס שוואב אמר שעד 2030 לא יהיה לאנשים רכוש פרטי והם יהיו מאושרים, כחלק מתוכנית רשמית של WEF.",
  shortAnswer: "לא נמצא שזה ציטוט ישיר של קלאוס שוואב.",
  bottomLine: "המקור המוכר הוא מאמר תרחישי של Ida Auken שפורסם באתר WEF; לא נמצא שמדובר בציטוט ישיר של שוואב או בסעיף מדיניות רשמי להפקעת רכוש.",
  summaryPoints: [
    "הביטוי נשען על פרסום אמיתי באתר WEF ועל סרטון תחזיות שהפך לוויראלי.",
    "המאמר מתאר תרחיש עתידי סביב כלכלת שיתוף ושירותים, לא החלטה רשמית שמורה לקחת רכוש מאנשים.",
  ],
  overview: "הטענה מערבבת בין מקור אמיתי, ניסוח פרובוקטיבי וייחוס לא מדויק. אכן היה פרסום באתר WEF שבו Ida Auken תיארה תרחיש עתידי לשנת 2030 שבו פחות דברים נמצאים בבעלות אישית ויותר דברים נצרכים כשירות. אבל בבדיקה לא נמצא מקור שמראה שקלאוס שוואב אמר את המשפט כציטוט ישיר, ולא נמצא מסמך רשמי של WEF שמורה להפקיע רכוש פרטי.",
  sources: [
    { id: "wef-auken-2030", title: "World Economic Forum: Here's how life could change in my city by the year 2030", url: "https://www.weforum.org/agenda/2016/11/shopping-i-can-t-really-remember-what-that-is/", level: "primary", note: "הפרסום המקורי שממנו נולד חלק מרכזי של הטענה. יש לבדוק בו מי הכותבת, מה סוג הטקסט ומה בדיוק נטען." },
    { id: "wired-mirror", title: "Wired: Denmark as a Service", url: "https://www.wired.com/beyond-the-beyond/2016/11/denmark-as-a-service/", level: "secondary", note: "שיקוף/דיון מוקדם בטקסט של Ida Auken, מועיל כאשר עותקים רשמיים משתנים או מוסרים." },
    { id: "un-2030-agenda", title: "United Nations: Transforming our world - the 2030 Agenda for Sustainable Development", url: "https://sdgs.un.org/2030agenda", level: "primary", note: "מקור רשמי של אג׳נדה 2030 של האו״ם. משמש כדי להפריד בין מסמך האו״ם לבין טקסט WEF או סרטון ויראלי." },
    { id: "wef-great-reset", title: "World Economic Forum: The Great Reset", url: "https://www.weforum.org/great-reset/", level: "official", note: "הקשר ציבורי רחב יותר סביב WEF וה-Great Reset, בלי להחליף את בדיקת הטענה המדויקת." },
  ],
  faq: [
    { question: "אז המשפט לא קיים בכלל?", answer: "יש מקור אמיתי לרעיון ולניסוח שהפך ויראלי. השאלה בבדיקה היא לא אם המשפט הסתובב ברשת, אלא האם הוא ציטוט ישיר של קלאוס שוואב או תוכנית רשמית להפקעת רכוש. לזה לא נמצא מקור." },
    { question: "האם WEF לא קשור לזה בכלל?", answer: "כן קשור: הפרסום הופיע באתר WEF והסרטון הוויראלי שויך ל-WEF. אבל הופעה באתר או סרטון תחזיות אינם אותו דבר כמו מסמך מדיניות מחייב." },
    { question: "זה קשור לאג׳נדה 2030 של האו״ם?", answer: "לא אוטומטית. צריך להפריד בין WEF, האו״ם, מאמר תרחישי, סרטון תחזיות ופוסט רשת. אלה לא אותו מקור ולא אותה סמכות." },
    { question: "אפשר עדיין לבקר את הרעיון?", answer: "כן. אפשר לבקר כלכלת שיתוף, ריכוזיות, פגיעה בפרטיות או חזונות טכנולוגיים. הבדיקה רק מפרידה בין ביקורת לגיטימית לבין ייחוס לא מוכח." },
  ],
});

export const youWillOwnNothingKlausSchwabClaimContent = defineClaim({
  ...migratedYouWillOwnNothingKlausSchwabClaimContent,
  lead: "המשפט 'לא יהיה לכם כלום ותהיו מאושרים' הפך לאחד הסמלים הגדולים של ביקורת על WEF, אג׳נדה 2030 וה-Great Reset. יש לו גרעין אמיתי, אבל הייחוס הנפוץ לקלאוס שוואב ולתוכנית רשמית הוא המקום שבו הבדיקה צריכה לעצור ולפתוח מקור.",
  shareCopy: `המשפט “לא יהיה לכם כלום ותהיו מאושרים” נשען על פרסום אמיתי באתר WEF ועל תרחיש עתידי של Ida Auken. אבל בבדיקה לא נמצא שזה ציטוט ישיר של קלאוס שוואב או תוכנית רשמית להפקיע רכוש פרטי. אפשר לבקר את החזון, אבל זו לא אותה טענה.
${siteUrl}/claims/you-will-own-nothing-klaus-schwab`,
  exhibits: [
    {
      id: "own-nothing-source-map",
      src: "/evidence/own-nothing-source-map.svg",
      alt: "איור פנימי ללא טקסט שמראה מעבר ממאמר תרחישי לטענה ויראלית",
      title: "מוצג 1.",
      caption: "איור פנימי ללא טקסט בתוך התמונה: מקור אמיתי, סרטון/שיתוף ויראלי, ואז קפיצה לייחוס גורף. הקישורים למקורות עצמם נמצאים ברשימת המקורות למטה.",
    },
  ],
  body: [
    { id: "answer", type: "answer-box", eyebrow: "תשובה קצרה", title: migratedYouWillOwnNothingKlausSchwabClaimContent.shortAnswer, paragraphs: migratedYouWillOwnNothingKlausSchwabClaimContent.sections[0].paragraphs, variant: "answer" },
    { id: "gallery", type: "gallery", title: "מוצג חזותי", source: "claim" },
    { id: "verdict", type: "verdict-grid", items: [
      { label: "הטענה", text: migratedYouWillOwnNothingKlausSchwabClaimContent.claim },
      { label: "השורה התחתונה", text: migratedYouWillOwnNothingKlausSchwabClaimContent.bottomLine, emphasis: true },
      { label: "מה כן נכון", text: migratedYouWillOwnNothingKlausSchwabClaimContent.summaryPoints[0] },
      { label: "איפה הסיפור קופץ", text: "ממאמר תרחישי וסרטון תחזיות למסקנה שקיים מסמך רשמי להפקעת רכוש." },
    ] },
    { id: "claim-table", type: "comparison-list", title: "טבלת הטענה", items: [
      { label: "מה נטען:", text: "קלאוס שוואב אמר שלא יהיה לכם כלום ותהיו מאושרים כחלק מתוכנית רשמית." },
      { label: "מה המקורות אומרים:", text: "הפרסום המוכר הוא טקסט תרחישי של Ida Auken באתר WEF, לצד סרטון תחזיות שהפך ויראלי." },
      { label: "מה נמצא:", text: "נמצא מקור אמיתי לביטוי, אך לא נמצא ייחוס ישיר לקלאוס שוואב כמקור המשפט." },
      { label: "מה המסקנה:", text: "הטענה צריכה להיות מנוסחת כייחוס לא מדויק, לא כהוכחה לתוכנית רשמית." },
    ] },
    { id: "sixty-seconds", type: "method-note", title: "גרסת 60 שניות", paragraphs: ["יש מקור אמיתי מאחורי המשפט: פרסום באתר WEF שבו Ida Auken מתארת תרחיש עתידי לשנת 2030. אבל המקור הזה אינו מסמך מדיניות שמורה לקחת רכוש פרטי, ולא נמצא שהוא ציטוט ישיר של קלאוס שוואב. הקפיצה היא מ'טקסט עתידני שפורסם באתר WEF' ל'תוכנית רשמית להפקעת רכוש'."] },
    { id: "bonus", type: "bonus-note", title: "עובדת בונוס", paragraphs: ["החלק הכי חשוב פה הוא לא רק המשפט עצמו, אלא שינוי המסגור שלו. המקור התחיל כתרחיש פרובוקטיבי על עתיד עירוני, ואז הפך ברשת לסיסמה פוליטית קצרה. זו דוגמה קלאסית לאיך טקסט שנועד לפתוח דיון הופך עם הזמן ל'הודאה' כביכול בתוכנית סודית.", "במילים פשוטות: המקור קיים, אבל המשמעות שהודבקה לו ברשת גדולה בהרבה ממה שהמקור עצמו מוכיח."] },
    { id: "evidence", type: "evidence-list", numbered: true, items: [
      { id: "real-source", number: "01", title: "יש מקור אמיתי לביטוי", paragraphs: ["הביטוי לא נולד מכלום. הוא נשען על פרסום אמיתי באתר WEF ועל תרחיש עתידי שנוסח סביב חיים בעיר בשנת 2030."] },
      { id: "not-schwab", number: "02", title: "הכותבת אינה קלאוס שוואב", paragraphs: ["הטקסט המוכר מיוחס ל-Ida Auken. בבדיקה לא נמצא מקור שמראה שקלאוס שוואב אמר את המשפט כציטוט ישיר שלו."] },
      { id: "not-policy", number: "03", title: "תרחיש אינו תוכנית אכיפה", paragraphs: ["גם אם טקסט פורסם באתר של גוף מוכר, צריך לבדוק אם הוא מאמר דעה, תחזית, תרחיש, סרטון או מסמך מדיניות. כאן הקפיצה הגדולה היא להציג תרחיש כפקודה רשמית."] },
      { id: "un-separation", number: "04", title: "WEF אינו האו״ם", paragraphs: ["טענות רבות מערבבות WEF, אג׳נדה 2030 של האו״ם וה-Great Reset כאילו מדובר במסמך אחד. אלה גופים, טקסטים והקשרים שונים." ] },
    ] },
    { id: "logic", type: "logic-chain", title: "שרשרת הקפיצה הלוגית", ariaLabel: "שרשרת הקפיצה הלוגית", steps: ["מאמר תרחישי באתר WEF", "משפט קצר הופך ויראלי", "המשפט מיוחס לשוואב"], conclusion: "לכן זו תוכנית רשמית", note: "השלבים הראשונים מבוססים על מקור אמיתי. המסקנה האחרונה דורשת מקור אחר וחזק יותר." },
    { id: "conclusion", type: "paragraph-section", title: "מה אפשר לקבוע?", paragraphs: ["אפשר לקבוע בזהירות שהמשפט נשען על מקור אמיתי, אבל לא נמצא שזה ציטוט ישיר של קלאוס שוואב או מסמך רשמי שמורה לקחת רכוש פרטי. מי שרוצה לבקר את החזון יכול לעשות זאת, אבל צריך לבקר את המקור המדויק ולא גרסה מנופחת שלו."] },
    { id: "faq", type: "faq", title: "שאלות נפוצות", source: "claim" },
    { id: "share", type: "copy-share", title: "תגובה קצרה להעתקה", source: "claim" },
    { id: "sources", type: "sources", title: "המקורות שנבדקו", source: "claim" },
    { id: "method", type: "method-note", title: "איך נבדקה הטענה?", paragraphs: ["הבדיקה הפרידה בין שלוש שכבות: מקור הביטוי, זהות הדובר או הכותב, והטענה הרחבה על תוכנית רשמית. המקורות המרכזיים הם פרסום WEF, שיקוף מוקדם של הטקסט, ומסמך אג׳נדה 2030 של האו״ם כדי למנוע ערבוב בין גופים."] },
  ],
  structuredData: { mode: "configured", container: "graph", entries: [
    { type: "article", placement: "page", headline: migratedYouWillOwnNothingKlausSchwabClaimContent.title, description: migratedYouWillOwnNothingKlausSchwabClaimContent.description, datePublished: "2026-06-21", dateModified: "2026-06-21", inLanguage: "he-IL" },
    { type: "faq", placement: "page", items: migratedYouWillOwnNothingKlausSchwabClaimContent.faq },
  ] },
  metadataOverrides: {
    title: "האם קלאוס שוואב אמר שלא יהיה לכם כלום? | מקור בדיקה",
    description: migratedYouWillOwnNothingKlausSchwabClaimContent.description,
    canonical: migratedYouWillOwnNothingKlausSchwabClaimContent.path,
    openGraph: { title: "האם קלאוס שוואב אמר שלא יהיה לכם כלום? | מקור בדיקה", description: migratedYouWillOwnNothingKlausSchwabClaimContent.description, url: `${siteUrl}/claims/you-will-own-nothing-klaus-schwab`, siteName: "מקור בדיקה", locale: "he_IL", type: "article" },
    twitter: { card: "summary_large_image", title: "האם קלאוס שוואב אמר שלא יהיה לכם כלום? | מקור בדיקה", description: migratedYouWillOwnNothingKlausSchwabClaimContent.description },
  },
  workflow: { ...migratedYouWillOwnNothingKlausSchwabClaimContent.workflow, credits: [{ id: "haim-rafael", name: "חיים רפאל", role: "author" }] },
} satisfies ClaimContent);
