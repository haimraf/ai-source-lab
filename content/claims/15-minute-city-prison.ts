import type { ClaimContent } from "../../lib/content/claim-schema";
import { defineMigratedClaimContent } from "./define-migrated-claim";

export const fifteenMinuteCityPrisonClaimContent = defineMigratedClaimContent({
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
}) satisfies ClaimContent;
