import { defineClaim, type ClaimContent } from "../../lib/content/claim-schema";
import { siteUrl } from "../../lib/site";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedFifteenMinuteCityPrisonClaimContent = defineMigratedClaimContent({
  slug: "fifteen-minute-city-prison",
  path: "/claims/15-minute-city-prison",
  title: "האם עיר 15 דקות היא כלא עירוני?",
  description: "בדיקה שמפרידה בין מודל תכנון עירוני של קרבה לשירותים, מדיניות תחבורה מקומית וטענה על כליאה או הגבלת יציאה מהשכונה.",
  kicker: "תכנון עירוני ואג׳נדה",
  tags: ["עיר 15 דקות", "אג׳נדה 2030", "תכנון עירוני", "תחבורה", "חופש תנועה"],
  verdict: "לא נמצא שמודל עיר 15 דקות מחייב כליאה או איסור יציאה מהשכונה",
  cluster: "agenda-2030",
  updated: "2026-06-20",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה שעיר 15 דקות היא כלא עירוני",
  claim: "עיר 15 דקות היא תוכנית להגביל אנשים לשכונה או להפוך את העיר לכלא פתוח.",
  shortAnswer: "לא. הרעיון עצמו אינו כלא עירוני.",
  bottomLine: "לא נמצא מקור רשמי שמראה כליאה או איסור יציאה.",
  summaryPoints: [
    "יש מודל אמיתי של תכנון עירוני סביב קרבה לשירותים, הליכה, אופניים ותחבורה מקומית.",
    "מ”שירותים קרובים לבית” ל”אסור לצאת מהאזור”.",
  ],
  overview: "עיר 15 דקות היא רעיון תכנוני: לנסות לארגן שכונות כך ששירותים יומיומיים יהיו קרובים לבית — ברגל, באופניים או בנסיעה קצרה. נכון למקורות שנבדקו כאן, לא נמצא מקור רשמי שמגדיר את המודל כאיסור לצאת מהשכונה או כחובת מגורים באזור סגור.",
  sources: [
    { id: "ap-15-minute-city", title: "AP Fact Focus — 15-minute city claims", url: "https://apnews.com/article/162fd388f0c435a8289cc9ea213f92ee", level: "secondary", note: "בדיקת AP שמפרידה בין רעיון עיר 15 דקות לבין טענות על הגבלת תנועה ומעקב, ובמיוחד בין הרעיון לבין traffic filters באוקספורד." },
    { id: "reuters-15-minute-city", title: "Reuters — global adoption of the 15-minute city idea", url: "https://www.reuters.com/sustainability/society-equity/two-wheeled-revolution-transforming-urban-living--ecmii-2025-12-08/", level: "secondary", note: "סקירה עדכנית על השימוש ברעיון בעולם, השמות השונים שלו, היתרונות שמקדמים תומכיו והחששות סביב יישום לא שוויוני או דיסאינפורמציה." },
    { id: "times-oxford", title: "The Times — Oxford dropped the phrase after backlash", url: "https://www.thetimes.co.uk/article/oxford-city-council-15-minute-city-phrase-dropped-p8sfrfqzh", level: "secondary", note: "דוגמה לכך שהמונח עצמו הפך רעיל פוליטית, גם כשמדיניות ההליכה, האופניים והתחבורה הציבורית המשיכה להיות חלק מהתכנון המקומי." },
    { id: "urban-heterogeneity", title: "Why urban heterogeneity limits the 15-minute city", url: "https://arxiv.org/abs/2603.12122", level: "primary", note: "מחקר שמציג ביקורת רצינית על היתכנות המודל, במיוחד סביב תעסוקה, מבנה כלכלי של עיר ופריפריה עירונית. ביקורת על יישום אינה הוכחה לכליאה." },
    { id: "mobility-data", title: "The 15-Minute City Quantified Using Mobility Data", url: "https://arxiv.org/abs/2211.14872", level: "primary", note: "מחקר שמודד שימוש מקומי בשירותים ומראה שהגישה תלויה בנגישות אמיתית לשירותים, תכנון וזונינג — וגם עשויה להעלות שאלות של בידול חברתי." },
  ],
  faq: [
    { question: "אז אין שום בעיה עם ערי 15 דקות?", answer: "לא זו המסקנה. יש ביקורת רצינית על יישום, שוויון, תעסוקה, מחירי דיור ותחבורה. אבל ביקורת על יישום אינה הוכחה לכליאה." },
    { question: "מה עם Oxford?", answer: "במקרה של Oxford התערבבו טענות על עיר 15 דקות עם מדיניות תחבורה מקומית כמו traffic filters. זה בדיוק למה צריך להפריד בין רעיון תכנוני לבין כלי אכיפה תחבורתי." },
    { question: "האם אפשר יהיה לצאת מהשכונה?", answer: "לפי המקורות שנבדקו כאן, עצם מודל עיר 15 דקות אינו מציג איסור יציאה. מי שטוען אחרת צריך להראות מסמך רשמי שאומר זאת." },
    { question: "למה הטענה נשמעת משכנעת?", answer: "כי היא מחברת דבר אמיתי — תכנון עירוני וצעדי תחבורה — לפחד רחב יותר משליטה, מצלמות וקנסות. החיבור נשמע אינטואיטיבי, אבל הוא עדיין דורש מקור." },
  ],
});

export const fifteenMinuteCityPrisonClaimContent = defineClaim({
  ...migratedFifteenMinuteCityPrisonClaimContent,
  lead: "הטענה אומרת שעיר 15 דקות היא לא רעיון תכנוני אלא תוכנית להגביל אנשים לשכונה, לעקוב אחריהם או להפוך את העיר לכלא פתוח. בבדיקה הזו מפרידים בין שלושה דברים שונים: מודל תכנון עירוני, מדיניות תחבורה מקומית, וטענת כליאה.",
  shareCopy: `עיר 15 דקות היא מודל תכנון עירוני שמדבר על קרבה לשירותים יומיומיים, לא על איסור לצאת מהשכונה. נכון לבדיקה הזו, לא נמצא מקור רשמי שמראה שהמודל מחייב כליאה, מעקב אישי או הגבלת יציאה. הקפיצה היא ערבוב בין רעיון תכנוני, מדיניות תחבורה מקומית וטענת שליטה.
${siteUrl}/claims/15-minute-city-prison`,
  exhibits: [
    {
      id: "15-minute-city-layers",
      src: "/evidence/15-minute-city-layers.svg",
      alt: "איור שמפריד בין רעיון תכנוני, מדיניות תחבורה מקומית וטענת כליאה",
      title: "מוצג 1.",
      caption: "איור פנימי של שלוש השכבות שלא כדאי לערבב בבדיקה: מודל תכנוני, כלי תחבורה מקומי וטענת כליאה.",
    },
    {
      id: "15-minute-city-bonus",
      src: "/evidence/15-minute-city-bonus.svg",
      alt: "איור של שכונה עם שירותים קרובים סביב הליכה קצרה",
      title: "מוצג 2.",
      caption: "איור פנימי לעובדת הבונוס: רעיונות של שכונה הליכתית ושירותים קרובים קדמו לשם המודרני עיר 15 דקות.",
    },
  ],
  body: [
    {
      id: "short-answer",
      type: "answer-box",
      eyebrow: "תשובה קצרה",
      title: "לא. הרעיון עצמו אינו כלא עירוני.",
      paragraphs: [
        migratedFifteenMinuteCityPrisonClaimContent.sections[0].paragraphs[0],
        "זה לא אומר שכל תוכנית עירונית בשם הזה טובה, שוויונית או ישימה. זו מסקנה צרה יותר: הטענה על כליאה דורשת מקור רשמי שמראה הגבלת תנועה כזו.",
      ],
      variant: "answer",
    },
    {
      id: "verdict",
      type: "verdict-grid",
      items: [
        { label: "הטענה", text: migratedFifteenMinuteCityPrisonClaimContent.claim },
        { label: "השורה התחתונה", text: migratedFifteenMinuteCityPrisonClaimContent.bottomLine, emphasis: true },
        { label: "מה כן נכון", text: migratedFifteenMinuteCityPrisonClaimContent.summaryPoints[0] },
        { label: "איפה הקפיצה", text: migratedFifteenMinuteCityPrisonClaimContent.summaryPoints[1] },
      ],
    },
    {
      id: "three-layers",
      type: "source-levels",
      title: "שלוש שכבות שלא לערבב",
      rows: [
        { label: "רעיון", title: "קרבה לשירותים", paragraphs: ["המודל מדבר על נגישות לשירותים יומיומיים, עירוב שימושים וצמצום תלות ברכב פרטי."] },
        { label: "מדיניות", title: "כלי תחבורה מקומיים", paragraphs: ["traffic filters, אזורי תנועה מופחתת או מצלמות תנועה הם מדיניות מקומית נפרדת. אפשר לבקר אותה, אבל היא לא ההגדרה של עיר 15 דקות."] },
        { label: "טענה", title: "כליאה או מעקב", paragraphs: ["כאן צריך מקור חזק: מסמך רשמי שמראה איסור יציאה, חלוקת תושבים לאזורים סגורים או מעקב אישי כחובה."] },
      ],
    },
    {
      id: "exhibits-intro",
      type: "paragraph-section",
      title: "מוצגים ואיורים",
      paragraphs: ["אלה לא צילומי מקור, אלא איורים פנימיים שנועדו להסביר את ההפרדה בבדיקה."],
    },
    { id: "exhibits", type: "gallery", source: "claim" },
    { id: "bonus-heading", type: "paragraph-section", title: "עובדת בונוס", paragraphs: [] },
    {
      id: "history",
      type: "method-note",
      title: "השם חדש יחסית; הרעיון לא נולד מאפס",
      paragraphs: ["הביטוי “עיר 15 דקות” מזוהה כיום בעיקר עם קרלוס מורנו ועם תכנון עירוני עכשווי. אבל השאיפה לשכונה שבה בית ספר, חנות, מרפאה, פארק ושירותים בסיסיים נמצאים קרוב לבית אינה המצאה שנולדה מאג׳נדה 2030. רעיונות של שכונה הליכתית, שירותים קרובים ועירוב שימושים קיימים בתכנון עירוני הרבה לפני שהמונח הזה הפך לטריגר ברשת."],
    },
    {
      id: "valid-criticism",
      type: "comparison-list",
      title: "מה כן אפשר לבקר?",
      items: [
        { label: "יישום לא שוויוני", text: "שכונות חזקות יכולות לקבל שירותים קרובים יותר, ושכונות חלשות עלולות להישאר מאחור." },
        { label: "תעסוקה", text: "לא כל עבודה יכולה להיות קרובה לבית, במיוחד בערים עם מרכזי תעסוקה מרוכזים." },
        { label: "ג׳נטריפיקציה", text: "שיפור נגישות יכול להעלות מחירים אם אין מדיניות דיור משלימה." },
        { label: "תחבורה ציבורית", text: "בלי תחבורה טובה, המודל עלול להישאר סיסמה יפה ולא פתרון אמיתי." },
      ],
    },
    {
      id: "claim-chain",
      type: "logic-chain",
      title: "שרשרת הקפיצה",
      steps: ["עיר 15 דקות מדברת על שירותים קרובים", "יש ערים עם מצלמות או מסנני תנועה", "יש חשש משליטה ממשלתית"],
      conclusion: "לכן אסור יהיה לצאת מהשכונה",
      note: "שלושת החלקים הראשונים יכולים להיות נושאים אמיתיים לדיון. הקפיצה היא להפוך אותם להוכחה לכליאה בלי מסמך שמראה זאת.",
    },
    {
      id: "not-found",
      type: "comparison-list",
      title: "מה לא נמצא במקורות?",
      items: [
        { label: "לא נמצא", text: "מסמך רשמי שמגדיר עיר 15 דקות כאיסור לצאת מהשכונה." },
        { label: "לא נמצא", text: "מקור שמראה חלוקה של תושבים לאזורי כליאה עירוניים." },
        { label: "לא נמצא", text: "חובה כללית למעקב אישי כחלק מהגדרת המודל." },
        { label: "לא נמצא", text: "הוכחה שעצם המונח הוא סעיף ביצוע נסתר של אג׳נדה 2030." },
      ],
    },
    { id: "faq", type: "faq", title: "שאלות נפוצות", source: "claim" },
    { id: "copy-share", type: "copy-share", title: "תגובה קצרה להעתקה", source: "claim" },
    { id: "sources", type: "sources", title: "המקורות שנבדקו", source: "claim" },
    {
      id: "method",
      type: "method-note",
      title: "איך נבדקה הטענה?",
      paragraphs: ["בדקנו אם יש מקור רשמי שמגדיר עיר 15 דקות כאיסור יציאה, כליאה, מעקב אישי או חלוקה כפויה לאזורים. לאחר מכן הפרדנו בין רעיון התכנון עצמו לבין מדיניות תחבורה מקומית ובין ביקורת לגיטימית על יישום לבין טענה עובדתית על שליטה."],
    },
  ],
  structuredData: {
    mode: "configured",
    entries: [{
      type: "article",
      placement: "page",
      headline: migratedFifteenMinuteCityPrisonClaimContent.title,
      description: migratedFifteenMinuteCityPrisonClaimContent.description,
      datePublished: "2026-06-20",
      dateModified: "2026-06-20",
      inLanguage: "he-IL",
    }],
  },
  metadataOverrides: {
    title: `${migratedFifteenMinuteCityPrisonClaimContent.title} | מקור בדיקה`,
    description: migratedFifteenMinuteCityPrisonClaimContent.description,
    canonical: migratedFifteenMinuteCityPrisonClaimContent.path,
    openGraph: {
      title: migratedFifteenMinuteCityPrisonClaimContent.title,
      description: migratedFifteenMinuteCityPrisonClaimContent.description,
      url: `${siteUrl}${migratedFifteenMinuteCityPrisonClaimContent.path}`,
      siteName: "מקור בדיקה",
      locale: "he_IL",
      type: "article",
      images: [{
        url: `${siteUrl}${migratedFifteenMinuteCityPrisonClaimContent.path}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: migratedFifteenMinuteCityPrisonClaimContent.ogAlt,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: migratedFifteenMinuteCityPrisonClaimContent.title,
      description: migratedFifteenMinuteCityPrisonClaimContent.description,
      images: [`${siteUrl}${migratedFifteenMinuteCityPrisonClaimContent.path}/opengraph-image`],
    },
  },
} satisfies ClaimContent);
