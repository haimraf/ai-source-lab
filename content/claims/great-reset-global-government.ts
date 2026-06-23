import { defineClaim } from "../../lib/content/claim-schema";
import { siteUrl } from "../../lib/site";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedGreatResetGlobalGovernmentClaimContent = defineMigratedClaimContent({
  slug: "great-reset-global-government",
  path: "/claims/great-reset-global-government",
  title: "האם The Great Reset הוא תוכנית רשמית להקמת ממשלה עולמית?",
  description: "בדיקה של הטענה ש-The Great Reset של World Economic Forum הוא תוכנית רשמית להקמת ממשלה עולמית, מול פרסומי WEF על איפוס הקפיטליזם, קפיטליזם של בעלי עניין ושיח מדיניות אחרי COVID-19.",
  kicker: "WEF, מוסדות ונרטיבים עולמיים",
  tags: ["Great Reset", "WEF", "Klaus Schwab", "ממשלה עולמית", "קפיטליזם בעלי עניין", "COVID-19"],
  verdict: "יוזמה אמיתית; תוכנית רשמית לממשלה עולמית לא נמצאה",
  cluster: "institutional-narratives",
  updated: "2026-06-23",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה ש-The Great Reset הוא תוכנית להקמת ממשלה עולמית",
  claim: "The Great Reset הוא תוכנית רשמית של World Economic Forum להקמת ממשלה עולמית או שליטה עולמית סמויה.",
  shortAnswer: "לא לפי המקורות הרשמיים שנבדקו.",
  bottomLine: "The Great Reset הוא שם אמיתי ליוזמה ושיח מדיניות ש-WEF קידם ב-2020 סביב התאוששות כלכלית וחברתית אחרי COVID-19. המקורות הרשמיים מדברים על איפוס של קפיטליזם, קפיטליזם של בעלי עניין, השקעות ירוקות, ESG ושימוש בטכנולוגיות של המהפכה התעשייתית הרביעית. אבל בבדיקה הזאת לא נמצא מסמך רשמי שמציג את The Great Reset כתוכנית להקמת ממשלה עולמית, ביטול מדינות או שליטה ישירה באזרחים.",
  summaryPoints: [
    "הביטוי The Great Reset אמיתי ומופיע בפרסומים של World Economic Forum.",
    "במאמר המרכזי מ-3 ביוני 2020, Klaus Schwab כתב על איפוס הקפיטליזם אחרי משבר COVID-19 ועל שלושה כיוונים: כלכלה של בעלי עניין, השקעות מוכוונות קיימות ושימוש בטכנולוגיות המהפכה התעשייתית הרביעית.",
    "הביקורת על WEF והשפעת אליטות עסקיות יכולה להיות לגיטימית, אבל היא לא זהה להוכחה למסמך רשמי על ממשלה עולמית.",
    "לא נמצא מקור רשמי שמראה ש-WEF פרסם תוכנית להקים ממשלה עולמית או לבטל ריבונות מדינתית דרך The Great Reset.",
  ],
  overview: "הטענה הזאת חזקה כי היא לא מתחילה מכלום. WEF באמת השתמש במונח The Great Reset, Klaus Schwab באמת כתב על צורך לאפס היבטים של הקפיטליזם, והפורום באמת מקדם שיתופי פעולה בין ממשלות, עסקים וארגונים בינלאומיים. אבל השאלה המדויקת היא מה המקור הרשמי אומר. יש הבדל בין יוזמת מדיניות גלובלית שנויה במחלוקת לבין ראיה לתוכנית רשמית להקמת ממשלה עולמית.",
  sources: [
    { id: "wef-great-reset-schawb", title: "World Economic Forum — Now is the time for a 'great reset'", url: "https://www.weforum.org/stories/2020/06/now-is-the-time-for-a-great-reset/", level: "primary", note: "מאמר רשמי של Klaus Schwab באתר WEF מ-3 ביוני 2020. מקור מרכזי להבנת שלושת רכיבי היוזמה כפי שהוצגו: קפיטליזם בעלי עניין, השקעות מוכוונות קיימות וטכנולוגיות המהפכה התעשייתית הרביעית." },
    { id: "wef-davos-manifesto-2020", title: "World Economic Forum — Davos Manifesto 2020", url: "https://www.weforum.org/stories/2019/12/davos-manifesto-2020-the-universal-purpose-of-a-company-in-the-fourth-industrial-revolution/", level: "primary", note: "רקע רשמי על קפיטליזם של בעלי עניין לפני COVID-19. משמש לעובדת הבונוס: The Great Reset לא נולד כרעיון יחיד ומנותק, אלא יושב על שפה קיימת של WEF סביב stakeholder capitalism." },
    { id: "guardian-davos-postponed", title: "The Guardian — Davos postponed until summer 2021 because of pandemic", url: "https://www.theguardian.com/business/live/2020/aug/26/oil-prices-hurricane-storm-laura-coronavirus-covid-19-jackson-hole-jerome-jay-powell-ftse-business-live", level: "secondary", note: "דיווח תקשורתי על דחיית מפגש WEF ועל כך שהשיח סביב Great Reset היה חלק מהקשר התאוששות אחרי COVID-19. מקור משני להקשר, לא בסיס המסקנה." },
    { id: "guardian-conspiracy-guide", title: "The Guardian — What conspiracy theories are UK MPs being told to look out for?", url: "https://www.theguardian.com/politics/article/2024/may/07/what-conspiracy-theories-are-uk-mps-being-told-to-look-out-for", level: "secondary", note: "רקע על האופן שבו Great Reset הפך לנרטיב שליטה בקרב תיאוריות קונספירציה. משמש להקשר ציבורי בלבד." },
  ],
  faq: [
    { question: "האם The Great Reset הוא דבר אמיתי?", answer: "כן. WEF השתמש במונח הזה ביוזמה ושיח מדיניות סביב התאוששות אחרי COVID-19. הגרעין העובדתי של הטענה אמיתי." },
    { question: "אז למה הטענה על ממשלה עולמית לא מוכחת?", answer: "כי המקורות הרשמיים שנבדקו מדברים על שינוי מדיניות כלכלית, קיימות, קפיטליזם בעלי עניין וטכנולוגיה. הם לא מציגים תוכנית רשמית להקמת ממשלה עולמית או ביטול מדינות." },
    { question: "האם מותר לבקר את WEF?", answer: "כן. אפשר לבקר את השפעת WEF, את כוחם של פורומים פרטיים, את שפת ה-ESG או את המעורבות של חברות גדולות במדיניות ציבורית. אבל ביקורת כזאת אינה הוכחה אוטומטית לתוכנית סודית לשליטה עולמית." },
    { question: "מה היה מחזק את הטענה?", answer: "מסמך רשמי, החלטה, הסכם או הוראה שמראים ש-The Great Reset נועד להקים גוף שלטוני עולמי עם סמכויות מעל מדינות. מקור כזה לא נמצא בבדיקה הזאת." },
  ],
});

export const greatResetGlobalGovernmentClaimContent = defineClaim({
  ...migratedGreatResetGlobalGovernmentClaimContent,
  workflow: {
    ...migratedGreatResetGlobalGovernmentClaimContent.workflow,
    checkedAt: "2026-06-23",
  },
  lead: "זה קייס קלאסי של גרעין אמת שמתחבר למסקנה גדולה מדי: The Great Reset באמת קיים בפרסומי WEF, אבל השאלה היא לא אם הביטוי אמיתי. השאלה היא האם המקור הרשמי מוכיח תוכנית להקמת ממשלה עולמית.",
  shareCopy: `The Great Reset הוא ביטוי אמיתי ש-WEF השתמש בו ב-2020 סביב התאוששות אחרי COVID-19, קפיטליזם של בעלי עניין, קיימות וטכנולוגיה. אבל בבדיקה מול המקורות הרשמיים לא נמצא מסמך שמציג אותו כתוכנית להקמת ממשלה עולמית או ביטול מדינות. הגרעין אמיתי; המסקנה הוויראלית לא הוכחה.
${siteUrl}/claims/great-reset-global-government`,
  body: [
    {
      id: "short-answer",
      type: "answer-box",
      eyebrow: "תשובה קצרה",
      title: "יש יוזמה אמיתית, אבל לא נמצאה תוכנית רשמית לממשלה עולמית.",
      paragraphs: [
        migratedGreatResetGlobalGovernmentClaimContent.bottomLine,
        "המשפט המרכזי של הבדיקה: שיח מדיניות גלובלי אינו שווה למסמך שלטוני שמקים ממשלה עולמית.",
      ],
      variant: "answer",
    },
    {
      id: "verdict",
      type: "verdict-grid",
      items: [
        { label: "הטענה", text: migratedGreatResetGlobalGovernmentClaimContent.claim },
        { label: "מה כן נכון", text: "WEF אכן קידם את The Great Reset כשיח על התאוששות אחרי COVID-19 ושינוי מודל קפיטליסטי." },
        { label: "מה לא נמצא", text: "לא נמצא מקור רשמי שמציג את היוזמה כתוכנית להקמת ממשלה עולמית, ביטול מדינות או שליטה ישירה באזרחים." },
        { label: "מסקנה", text: migratedGreatResetGlobalGovernmentClaimContent.verdict, emphasis: true },
      ],
    },
    {
      id: "source-levels",
      type: "source-levels",
      title: "איך לקרוא את המקורות?",
      rows: [
        { label: "מקור רשמי", title: "מה WEF עצמו כתב", paragraphs: ["המקור המרכזי הוא מאמר של Klaus Schwab באתר WEF. הוא מציג שלושה רכיבים ל-Great Reset: כלכלה של בעלי עניין, השקעות שמקדמות קיימות ושימוש בטכנולוגיות המהפכה התעשייתית הרביעית לטובת הציבור."] },
        { label: "ביקורת לגיטימית", title: "מה אפשר לבקר", paragraphs: ["אפשר לבקר השפעה של פורומים גלובליים, קשרים בין ממשלות לחברות, ESG או כוח של אליטות. אבל ביקורת היא לא אותו דבר כמו ראיה למסמך שלטוני סודי."] },
        { label: "קפיצה לוגית", title: "מה הטענה מוסיפה", paragraphs: ["הטענה הוויראלית מוסיפה שהשיח הזה הוא בעצם תוכנית להקמת ממשלה עולמית. בשביל זה צריך מקור ישיר הרבה יותר חזק מכתבה או נאום על שינוי מדיניות כלכלית."] },
      ],
    },
    {
      id: "evidence",
      type: "evidence-list",
      title: "מה המקורות מראים?",
      numbered: true,
      items: [
        {
          id: "official-article",
          title: "המאמר הרשמי מדבר על איפוס של קפיטליזם, לא על ממשלה עולמית",
          paragraphs: [
            "במאמר מ-3 ביוני 2020, Klaus Schwab מציג את Great Reset כצורך לשנות היבטים של הכלכלה והחברה אחרי COVID-19. הוא משתמש בשפה רחבה מאוד, אבל הכיוון המוצהר הוא כלכלי-חברתי: שווקים, השקעות, ESG וטכנולוגיה.",
            "זה מקור חשוב כי הוא מחזק את הגרעין האמיתי של הטענה. אבל דווקא בגלל שהוא המקור המרכזי, צריך לשים לב מה לא מופיע בו: לא מסמך שמקים ממשלה עולמית ולא הוראה שמבטלת מדינות.",
          ],
        },
        {
          id: "stakeholder-capitalism",
          title: "קפיטליזם של בעלי עניין היה חלק משפת WEF עוד לפני COVID-19",
          paragraphs: [
            "Davos Manifesto 2020 פורסם בדצמבר 2019 ומדבר על חברה שמשרתת לא רק בעלי מניות אלא גם עובדים, לקוחות, ספקים, קהילות והחברה הרחבה.",
            "זו עובדת בונוס חשובה: Great Reset לא צץ בחלל ריק, אלא התחבר לשפה קיימת של WEF סביב stakeholder capitalism. זה מסביר למה אנשים מזהים בו אידאולוגיה רחבה, אבל עדיין לא מוכיח תוכנית שלטונית עולמית.",
          ],
        },
        {
          id: "public-conspiracy-frame",
          title: "הנרטיב הציבורי הרחיב את היוזמה לטענת שליטה",
          paragraphs: [
            "דיווחים וניתוחים תקשורתיים מתארים איך המונח Great Reset עבר מהקשר של התאוששות כלכלית אחרי מגפה להקשר של תיאוריות שליטה עולמית.",
            "המעבר הזה הוא בדיוק לב הבדיקה: שם רשמי ומונח אמיתי אינם מספיקים כדי להוכיח את המסקנה הוויראלית הרחבה.",
          ],
        },
      ],
    },
    {
      id: "bonus-heading",
      type: "paragraph-section",
      title: "עובדות בונוס",
      paragraphs: [],
    },
    {
      id: "bonus-stakeholder-capitalism",
      type: "method-note",
      title: "הביטוי Great Reset יושב על רעיון ישן יותר של WEF",
      paragraphs: [
        "עוד לפני COVID-19, WEF קידם שפה של stakeholder capitalism: חברות שאמורות להתחשב בעובדים, לקוחות, ספקים, קהילות, חברה וסביבה, ולא רק בבעלי מניות. זה עוזר להבין למה The Great Reset נשמע כמו תפיסת עולם רחבה, אבל זה לא הופך אותו למסמך שמקים ממשלה עולמית.",
      ],
    },
    {
      id: "bonus-criticism-vs-proof",
      type: "method-note",
      title: "ביקורת על WEF אינה אותו דבר כמו הוכחה לקונספירציה",
      paragraphs: [
        "אפשר לטעון ש-WEF נותן יותר מדי במה לאליטות עסקיות, שפורומים פרטיים משפיעים על מדיניות ציבורית, או ששפת ESG משרתת אינטרסים חזקים. אלה שאלות ביקורתיות לגיטימיות. אבל כדי לקבוע שיש תוכנית רשמית לממשלה עולמית צריך מקור ישיר שמראה את זה, ולא רק תחושת אי-נוחות מהשפה או מהמשתתפים.",
      ],
    },
    {
      id: "logic-chain",
      type: "logic-chain",
      title: "שרשרת הקפיצה",
      ariaLabel: "שרשרת הקפיצה הלוגית בטענת Great Reset וממשלה עולמית",
      steps: [
        "WEF באמת השתמש במונח The Great Reset",
        "Klaus Schwab באמת כתב על איפוס הקפיטליזם אחרי COVID-19",
        "WEF באמת מחבר בין מנהיגים, חברות וארגונים בינלאומיים",
      ],
      conclusion: "לכן זו תוכנית רשמית להקמת ממשלה עולמית",
      note: "השלבים הראשונים הם גרעין אמת. המסקנה האחרונה דורשת מקור רשמי וספציפי שלא נמצא בבדיקה הזאת.",
    },
    {
      id: "what-not-found",
      type: "comparison-list",
      title: "מה כן נכון ומה לא הוכח?",
      items: [
        { label: "כן נכון", text: "The Great Reset הוא מונח אמיתי בפרסומי WEF.", tone: "supports" },
        { label: "כן נכון", text: "היוזמה מדברת על שינוי מודלים כלכליים, קיימות, ESG וטכנולוגיה אחרי COVID-19.", tone: "supports" },
        { label: "לא הוכח", text: "ש-WEF פרסם תוכנית רשמית להקמת ממשלה עולמית.", tone: "contradicts" },
        { label: "לא הוכח", text: "שהיוזמה מבטלת ריבונות מדינות או מעניקה ל-WEF סמכות שלטונית מעל ממשלות.", tone: "contradicts" },
        { label: "השורה", text: "יוזמת מדיניות גלובלית יכולה להיות שנויה במחלוקת בלי להיות ראיה לתוכנית שלטון עולמית.", tone: "caution", emphasis: true },
      ],
    },
    {
      id: "method-note",
      type: "method-note",
      title: "כלל עבודה לקייסים על מוסדות גלובליים",
      paragraphs: [
        "ככל שהמוסד גדול יותר והשפה שלו רחבה יותר, קל יותר להפוך מסמך מדיניות לנרטיב טוטאלי. לכן הבדיקה צריכה להישאר צמודה לשאלה: האם המקור אומר את המסקנה, או רק מאפשר לפרש אותה?",
      ],
    },
    { id: "faq", type: "faq", title: "שאלות נפוצות", source: "claim" },
    { id: "copy", type: "copy-share", title: "תגובה קצרה להעתקה", source: "claim" },
    { id: "sources", type: "sources", title: "מקורות ישירים", source: "claim" },
  ],
  structuredData: {
    mode: "configured",
    entries: [{
      type: "article",
      placement: "page",
      headline: migratedGreatResetGlobalGovernmentClaimContent.title,
      description: migratedGreatResetGlobalGovernmentClaimContent.description,
      datePublished: "2026-06-23",
      dateModified: "2026-06-23",
      inLanguage: "he-IL",
    }],
  },
  metadataOverrides: {
    title: `${migratedGreatResetGlobalGovernmentClaimContent.title} | מקור בדיקה`,
    description: migratedGreatResetGlobalGovernmentClaimContent.description,
    canonical: migratedGreatResetGlobalGovernmentClaimContent.path,
    openGraph: {
      title: migratedGreatResetGlobalGovernmentClaimContent.title,
      description: migratedGreatResetGlobalGovernmentClaimContent.description,
      url: `${siteUrl}${migratedGreatResetGlobalGovernmentClaimContent.path}`,
      siteName: "מקור בדיקה",
      locale: "he_IL",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: migratedGreatResetGlobalGovernmentClaimContent.title,
      description: migratedGreatResetGlobalGovernmentClaimContent.description,
    },
  },
});
