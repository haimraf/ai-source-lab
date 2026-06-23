import { defineClaim, type ClaimContent } from "../../lib/content/claim-schema";
import { siteUrl } from "../../lib/site";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedWhoPandemicAgreementSovereigntyClaimContent = defineMigratedClaimContent({
  slug: "who-pandemic-agreement-sovereignty",
  path: "/claims/who-pandemic-agreement-sovereignty",
  title: "האם אמנת המגיפות נותנת ל-WHO סמכות על מדיניות פנים?",
  description: "בדיקה של הטענה שאמנת המגיפות של WHO נותנת לארגון סמכות להכתיב למדינות מדיניות פנימית, חקיקה או צעדי חירום.",
  kicker: "WHO ואמנת מגיפות",
  tags: ["WHO", "אמנת מגיפות", "ריבונות", "מדיניות פנים", "מקור רשמי"],
  verdict: "הסכם אמיתי — לא סמכות ישירה להכתיב מדיניות פנים",
  cluster: "institutional-narratives",
  updated: "2026-06-21",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה שאמנת המגיפות נותנת ל-WHO סמכות כפייה",
  claim: "אמנת המגיפות נותנת ל-WHO סמכות להכתיב למדינות מדיניות פנים, חקיקה או צעדי חירום בזמן מגיפה.",
  shortAnswer: "הסכם בינלאומי מחייב יכול להתקיים — אבל הטקסט לא נותן ל-WHO סמכות ישירה להכתיב מדיניות פנים.",
  bottomLine: "אמנת המגיפות היא הסכם בינלאומי אמיתי שמיועד לחייב מדינות שיצטרפו אליו לפי התהליכים שלהן. אבל הטקסט הרשמי, ובמיוחד סעיף 22(2), שולל פרשנות שנותנת למזכירות WHO או למנכ״ל WHO סמכות להורות למדינה לשנות חוק, להכתיב מדיניות פנים או להפעיל צעדי חירום.",
  summaryPoints: [
    "ההסכם עוסק בשיתוף פעולה, היערכות, שרשראות אספקה, מימון, דיווחים וגישה שוויונית לכלים רפואיים.",
    "הוא יכול להיות מחייב למדינות שיצטרפו אליו, אבל זה לא אותו דבר כמו סמכות ישירה של WHO על חוקי המדינה.",
    "סעיף 22(2) הוא סעיף המפתח: הוא שולל פרשנות שנותנת ל-WHO סמכות להכתיב מדיניות פנים או חקיקה במדינות.",
    "אפשר לבקר את ההסכם, את המימון, את השקיפות ואת מנגנוני היישום — אבל ביקורת כזאת אינה הוכחה לסמכות כפייה של WHO.",
  ],
  overview: "הטענה הזאת רגישה כי היא נוגעת לריבונות, בריאות ציבורית וזיכרון COVID-19. יש גרעין אמת: מדובר בהסכם בינלאומי שאמור לחייב מדינות שיצטרפו אליו. אבל הבדיקה צריכה להפריד בין שלושה דברים: הסכם בינלאומי, יישום דרך מדינות, וסמכות ישירה של WHO להורות למדינה מה לעשות. בטקסט הרשמי שנבדק לא נמצאה סמכות ישירה כזאת, וסעיף 22(2) אף שולל אותה במפורש.",
  sources: [
    { id: "who-agreement-topic", title: "WHO Pandemic Agreement — health topic page", url: "https://www.who.int/health-topics/who-pandemic-agreement", level: "official", note: "עמוד WHO שמסביר שההסכם אומץ ב-20 במאי 2025, מתאר את רכיבי ההסכם ומדגיש שהיישום נשאר בשליטת מדינות ריבוניות." },
    { id: "wha78-official-text", title: "WHA78.1 — WHO Pandemic Agreement, official text", url: "https://apps.who.int/gb/ebwha/pdf_files/WHA78/A78_R1-en.pdf", level: "primary", note: "הטקסט הרשמי שאומץ בעצרת הבריאות העולמית. סעיף 22(2) הוא מקור המפתח לשאלה אם ל-WHO יש סמכות להכתיב מדיניות פנים למדינות." },
    { id: "who-agreement-qa", title: "WHO Q&A — Pandemic prevention, preparedness and response agreement", url: "https://www.who.int/news-room/questions-and-answers/item/pandemic-prevention--preparedness-and-response-accord", level: "official", note: "שאלות ותשובות של WHO על תהליך האימוץ, נספח PABS, ריבונות המדינות ותפקיד המזכירות של WHO." },
    { id: "reuters-agreement", title: "Reuters — landmark global pandemic agreement adopted", url: "https://www.reuters.com/business/healthcare-pharmaceuticals/landmark-global-pandemic-agreement-adopted-by-world-health-organization-members-2025-05-20/", level: "secondary", note: "דיווח חדשותי על אימוץ ההסכם, ההצבעה, ההימנעויות והעובדה שההסכם לא נכנס לתוקף מיידי בלי השלמת נספח ואשרור מדינתי." },
    { id: "ap-agreement", title: "AP — WHO adopts a pandemic agreement after the chaos of COVID", url: "https://apnews.com/article/51ff7eddb83db47b869d2729a5f27a6d", level: "secondary", note: "דיווח רקע על אימוץ ההסכם, ההקשר של COVID והפער בין שיתוף פעולה בינלאומי לבין מנגנון אכיפה ישיר." },
  ],
  faq: [
    { question: "אז ההסכם לא מחייב בכלל?", answer: "הוא מיועד להיות הסכם בינלאומי מחייב למדינות שיהפכו לצד להסכם. אבל מחייב מדינה אינו אומר ש-WHO מקבל סמכות ישירה להורות למדינה אילו חוקים לחוקק או אילו צעדים להפעיל." },
    { question: "מה הסעיף הכי חשוב לבדיקה?", answer: "סעיף 22(2). הוא קובע שאין לפרש את ההסכם כנותן למזכירות WHO או למנכ״ל WHO סמכות להורות, לשנות או להכתיב חוק או מדיניות פנים של מדינה." },
    { question: "איפה מתרחשת הקפיצה הלוגית?", answer: "הקפיצה היא לעבור מ-הסכם בינלאומי שיכול לחייב מדינות שיצטרפו אליו ל-WHO יכול להורות ישירות למדינה מה לעשות. בשביל הקפיצה הזאת צריך סעיף סמכות ברור, והסעיף שנבדק אומר את ההפך." },
    { question: "האם מותר לבקר את ההסכם?", answer: "כן. אפשר לבקר את מנגנוני המימון, השקיפות, תפקיד WHO, נספח PABS או ההשפעה על מדיניות מקומית. אבל ביקורת על ההסכם אינה הוכחה לכך ש-WHO מקבל סמכות כפייה ישירה על מדינות." },
    { question: "מה עם International Health Regulations?", answer: "ההסכם וה-IHR הם מסגרות קשורות אבל לא אותו מסמך. גם שם צריך לבדוק סעיפים ספציפיים ולא לערבב בין הגדרות, המלצות, הכרזות חירום וסמכות כפייה." },
    { question: "ישראל הצביעה בעד?", answer: "לפי דיווח Reuters על ההצבעה ב-2025, ישראל הייתה בין המדינות שנמנעו. זה נתון פוליטי מעניין, אבל הוא לא משנה את נוסח סעיף הסמכות בטקסט הרשמי." },
  ],
});

export const whoPandemicAgreementSovereigntyClaimContent = defineClaim({
  ...migratedWhoPandemicAgreementSovereigntyClaimContent,
  lead: "הטענה אומרת שאמנת המגיפות של ארגון הבריאות העולמי תאפשר ל-WHO להכתיב למדינות מדיניות פנים בזמן מגיפה. הבדיקה הזו מפרידה בין הסכם בינלאומי מחייב, תהליך אשרור מדינתי, וסמכות כפייה שלא מופיעה בטקסט.",
  shareCopy: `אמנת המגיפות של ארגון הבריאות העולמי היא הסכם בינלאומי אמיתי לשיתוף פעולה בהיערכות למגיפות. היא יכולה להיות מחייבת למדינות שיצטרפו אליה, אבל הטקסט הרשמי לא נותן ל-WHO סמכות ישירה להכתיב למדינה מדיניות פנים, לשנות חוק פנימי או להורות להפעיל צעדי חירום. סעיף 22(2) שולל במפורש פרשנות כזו. זה לא אומר שאין מה לבקר בהסכם; זה אומר שטענת סמכות הכפייה לא נמצאה במקור הרשמי.
${siteUrl}/claims/who-pandemic-agreement-sovereignty`,
  exhibits: [
    {
      id: "who-pandemic-agreement-scope",
      src: "/evidence/who-pandemic-agreement-scope.svg",
      alt: "איור שמפריד בין ההסכם, יישום מדינתי וטענת כפייה של WHO",
      title: "מוצג 1.",
      caption: "איור פנימי שמפריד בין שלוש שכבות: הסכם בינלאומי, החלטות של מדינות, וטענת כפייה שלא נמצאה בטקסט.",
    },
    {
      id: "who-pandemic-agreement-timeline",
      src: "/evidence/who-pandemic-agreement-timeline.svg",
      alt: "איור של שלבי האימוץ, נספח PABS, חתימה ואשרור של אמנת המגיפות",
      title: "מוצג 2.",
      caption: "איור פנימי לעובדת הבונוס: אימוץ בעצרת הבריאות אינו אותו דבר כמו כניסה מיידית לתוקף בכל מדינה.",
    },
  ],
  body: [
    {
      id: "short-answer",
      type: "answer-box",
      eyebrow: "תשובה קצרה",
      title: "הסכם אמיתי — לא סמכות ישירה להכתיב מדיניות פנים.",
      paragraphs: [
        migratedWhoPandemicAgreementSovereigntyClaimContent.bottomLine,
        "המסקנה צרה: יש מקום לבדוק ולבקר סעיפים, מימון, שקיפות או מנגנוני יישום. אבל טענת “WHO יקבע למדינה מה לעשות” דורשת סמכות כפייה שלא נמצאה בטקסט.",
      ],
      variant: "answer",
    },
    {
      id: "verdict",
      type: "verdict-grid",
      items: [
        { label: "הטענה", text: migratedWhoPandemicAgreementSovereigntyClaimContent.claim },
        { label: "מה כן נכון", text: "ההסכם הוא מסגרת בינלאומית אמיתית שיכולה לחייב מדינות שיצטרפו אליה לפי ההליכים שלהן." },
        { label: "מה לא נמצא", text: "לא נמצא סעיף שנותן ל-WHO סמכות ישירה להכתיב חוק, מדיניות פנים או צעדי חירום למדינה." },
        { label: "מסקנה", text: migratedWhoPandemicAgreementSovereigntyClaimContent.verdict, emphasis: true },
      ],
    },
    {
      id: "three-layers",
      type: "source-levels",
      title: "שלוש שכבות שלא לערבב",
      rows: [
        { label: "ההסכם", title: "שיתוף פעולה בינלאומי", paragraphs: ["המסמך קובע מסגרת להיערכות, תגובה, מימון, שיתוף מידע וגישה לכלים רפואיים בזמן מגיפות."] },
        { label: "מדינה", title: "יישום דרך חוק פנימי", paragraphs: ["מדינה שמצטרפת להסכם עדיין פועלת דרך מוסדותיה, חוקיה ותהליכי החתימה, האשרור או ההצטרפות שלה."] },
        { label: "הטענה", title: "כפייה של WHO", paragraphs: ["כאן צריך סעיף שנותן ל-WHO סמכות להורות למדינה לבצע מדיניות פנים מסוימת. הסעיף שנבדק שולל זאת."] },
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
      id: "adoption-timeline",
      type: "method-note",
      title: "אימוץ בעצרת הבריאות אינו כניסה מיידית לתוקף",
      paragraphs: ["ההסכם אומץ בעצרת הבריאות העולמית במאי 2025, אבל לפי עמוד WHO והטקסט הרשמי, הוא אמור להיפתח לחתימה רק אחרי אימוץ נספח PABS. לאחר מכן הוא ייכנס לתוקף רק 30 יום אחרי הפקדת 60 מסמכי אשרור, קבלה, אישור או הצטרפות. כלומר גם “אומץ” וגם “בתוקף במדינה” הם שלבים שונים לגמרי."],
    },
    {
      id: "valid-criticism",
      type: "comparison-list",
      title: "מה כן אפשר לבקר?",
      items: [
        { label: "מנגנוני מימון", text: "אפשר לשאול מי מממן, מי מחליט, ואיך נמנעים מעומס רגולטורי על מדינות חלשות." },
        { label: "שקיפות ופיקוח", text: "אפשר לבדוק כיצד הוועידה העתידית של הצדדים תדווח לציבור ואיך יפורסמו דוחות." },
        { label: "PABS", text: "נספח שיתוף פתוגנים והטבות עדיין דורש פרטים, ולכן לא נכון להתייחס אליו כאילו הוא כבר נוסח סופי ומופעל." },
        { label: "יישום מקומי", text: "הוויכוח האמיתי במדינה יהיה על חתימה, אשרור, חקיקה ומדיניות מקומית, לא על הוראה ישירה של WHO." },
      ],
    },
    {
      id: "claim-chain",
      type: "logic-chain",
      title: "שרשרת הקפיצה",
      steps: ["ההסכם יכול לחייב מדינות שמצטרפות אליו", "WHO משמש מזכירות ומסייע בתיאום", "יש חשש מצעדי חירום מהעבר"],
      conclusion: "לכן WHO יוכל לכפות מדיניות על מדינה",
      note: "הקפיצה היא להפוך תיאום בינלאומי ומסגרת מחייבת למדינות לסמכות ישירה של WHO על חוקי מדינה, בלי סעיף שנותן סמכות כזו. סעיף 22(2) אף שולל פרשנות כזאת.",
    },
    {
      id: "not-found",
      type: "comparison-list",
      title: "מה לא נמצא במקורות?",
      items: [
        { label: "לא נמצא", text: "סעיף שנותן למנכ״ל WHO סמכות להורות למדינה להפעיל צעדי חירום." },
        { label: "לא נמצא", text: "סעיף שמאפשר ל-WHO להכתיב מדיניות פנים לאזרחים." },
        { label: "לא נמצא", text: "סעיף שמאפשר ל-WHO לשנות חוק פנימי של מדינה." },
        { label: "לא נמצא", text: "סעיף שמדלג על תהליך חתימה, אשרור או הצטרפות של מדינות." },
      ],
    },
    { id: "faq", type: "faq", title: "שאלות נפוצות", source: "claim" },
    { id: "copy-share", type: "copy-share", title: "תגובה קצרה להעתקה", source: "claim" },
    { id: "sources", type: "sources", title: "המקורות שנבדקו", source: "claim" },
    {
      id: "method",
      type: "method-note",
      title: "איך נבדקה הטענה?",
      paragraphs: ["בדקנו את נוסח ההסכם שאומץ בעצרת הבריאות העולמית, את עמוד ההסבר הרשמי של WHO ואת שאלות-התשובות של WHO. לאחר מכן הפרדנו בין מסגרת בינלאומית מחייבת למדינות לבין סמכות ישירה של WHO על חוקי מדינה, וחיפשנו במיוחד סעיף שמאפשר להכתיב מדיניות פנים."],
    },
  ],
  structuredData: {
    mode: "configured",
    entries: [{
      type: "article",
      placement: "page",
      headline: migratedWhoPandemicAgreementSovereigntyClaimContent.title,
      description: migratedWhoPandemicAgreementSovereigntyClaimContent.description,
      datePublished: "2026-06-21",
      dateModified: "2026-06-21",
      inLanguage: "he-IL",
    }],
  },
  metadataOverrides: {
    title: `${migratedWhoPandemicAgreementSovereigntyClaimContent.title} | מקור בדיקה`,
    description: migratedWhoPandemicAgreementSovereigntyClaimContent.description,
    canonical: migratedWhoPandemicAgreementSovereigntyClaimContent.path,
    openGraph: {
      title: migratedWhoPandemicAgreementSovereigntyClaimContent.title,
      description: migratedWhoPandemicAgreementSovereigntyClaimContent.description,
      url: `${siteUrl}${migratedWhoPandemicAgreementSovereigntyClaimContent.path}`,
      siteName: "מקור בדיקה",
      locale: "he_IL",
      type: "article",
      images: [{
        url: `${siteUrl}${migratedWhoPandemicAgreementSovereigntyClaimContent.path}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: migratedWhoPandemicAgreementSovereigntyClaimContent.ogAlt,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: migratedWhoPandemicAgreementSovereigntyClaimContent.title,
      description: migratedWhoPandemicAgreementSovereigntyClaimContent.description,
      images: [`${siteUrl}${migratedWhoPandemicAgreementSovereigntyClaimContent.path}/opengraph-image`],
    },
  },
} satisfies ClaimContent);
