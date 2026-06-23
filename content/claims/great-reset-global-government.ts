import { defineClaim } from "../../lib/content/claim-schema";
import { siteUrl } from "../../lib/site";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedGreatResetGlobalGovernmentClaimContent = defineMigratedClaimContent({
  slug: "great-reset-global-government",
  path: "/claims/great-reset-global-government",
  title: "האם The Great Reset הוא תוכנית רשמית לשלטון עולמי?",
  description: "בדיקה של הטענה ש-The Great Reset של World Economic Forum הוא תוכנית רשמית לשלטון עולמי, NWO או ביטול ריבונות מדינות, מול פרסומי WEF על איפוס הקפיטליזם, קפיטליזם של בעלי עניין ושיח מדיניות אחרי COVID-19.",
  kicker: "WEF, מוסדות ונרטיבים עולמיים",
  tags: ["Great Reset", "WEF", "Klaus Schwab", "שלטון עולמי", "NWO", "קפיטליזם בעלי עניין"],
  verdict: "יוזמה רשמית של WEF קיימת — אין בה תוכנית שלטון עולמי",
  cluster: "institutional-narratives",
  updated: "2026-06-23",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה ש-The Great Reset הוא תוכנית לשלטון עולמי",
  claim: "The Great Reset הוא תוכנית רשמית של World Economic Forum להקמת ממשלה עולמית, New World Order או שליטה עולמית סמויה שמבטלת ריבונות מדינות.",
  shortAnswer: "יוזמה רשמית של WEF קיימת — אבל לא נמצאה בה תוכנית לשלטון עולמי.",
  bottomLine: "The Great Reset הוא שם אמיתי ליוזמה של World Economic Forum מ-2020 סביב התאוששות אחרי COVID-19, איפוס הקפיטליזם, קפיטליזם של בעלי עניין, ESG וטכנולוגיה. זה גרעין אמיתי ומותר לבקר אותו. אבל במסמכים הרשמיים שנבדקו לא נמצאה תוכנית להקמת ממשלה עולמית, ביטול ריבונות מדינות או שליטה ישירה באזרחים.",
  summaryPoints: [
    "הביטוי The Great Reset אמיתי ומופיע בפרסומים של World Economic Forum.",
    "במאמר המרכזי מ-3 ביוני 2020, Klaus Schwab כתב על איפוס הקפיטליזם אחרי משבר COVID-19 ועל שלושה כיוונים: כלכלה של בעלי עניין, השקעות מוכוונות קיימות ושימוש בטכנולוגיות המהפכה התעשייתית הרביעית.",
    "אפשר לבקר את WEF, את השפעת האליטות, את קשרי הון-שלטון או את שפת ESG — אבל ביקורת כזאת אינה הוכחה לתוכנית שלטון עולמי סודית.",
    "לא נמצא מקור רשמי שמראה ש-WEF פרסם דרך The Great Reset תוכנית להקים ממשלה עולמית, לבטל ריבונות מדינות או לשלוט ישירות באזרחים.",
  ],
  overview: "הטענה הזאת חזקה כי היא לא מתחילה מכלום. WEF באמת השתמש במונח The Great Reset, Klaus Schwab באמת כתב על צורך לאפס היבטים של הקפיטליזם, והפורום באמת מחבר בין מנהיגים, חברות וארגונים בינלאומיים. לכן החשד מובן. אבל השאלה המדויקת היא מה המקור הרשמי אומר — והאם הוא באמת מציג תוכנית NWO או ממשלה עולמית. בבדיקה הזאת, הקפיצה הזאת לא נתמכה במקור רשמי.",
  sources: [
    { id: "wef-great-reset-schawb", title: "World Economic Forum — Now is the time for a 'great reset'", url: "https://www.weforum.org/stories/2020/06/now-is-the-time-for-a-great-reset/", level: "primary", note: "מאמר רשמי של Klaus Schwab באתר WEF מ-3 ביוני 2020. מקור מרכזי להבנת שלושת רכיבי היוזמה כפי שהוצגו: קפיטליזם בעלי עניין, השקעות מוכוונות קיימות וטכנולוגיות המהפכה התעשייתית הרביעית." },
    { id: "wef-davos-manifesto-2020", title: "World Economic Forum — Davos Manifesto 2020", url: "https://www.weforum.org/stories/2019/12/davos-manifesto-2020-the-universal-purpose-of-a-company-in-the-fourth-industrial-revolution/", level: "primary", note: "רקע רשמי על קפיטליזם של בעלי עניין לפני COVID-19. משמש לעובדת הבונוס: The Great Reset לא נולד כרעיון יחיד ומנותק, אלא יושב על שפה קיימת של WEF סביב stakeholder capitalism." },
    { id: "guardian-davos-postponed", title: "The Guardian — Davos postponed until summer 2021 because of pandemic", url: "https://www.theguardian.com/business/live/2020/aug/26/oil-prices-hurricane-storm-laura-coronavirus-covid-19-jackson-hole-jerome-jay-powell-ftse-business-live", level: "secondary", note: "דיווח תקשורתי על דחיית מפגש WEF ועל כך שהשיח סביב Great Reset היה חלק מהקשר התאוששות אחרי COVID-19. מקור משני להקשר, לא בסיס המסקנה." },
    { id: "guardian-conspiracy-guide", title: "The Guardian — What conspiracy theories are UK MPs being told to look out for?", url: "https://www.theguardian.com/politics/article/2024/may/07/what-conspiracy-theories-are-uk-mps-being-told-to-look-out-for", level: "secondary", note: "רקע על האופן שבו Great Reset הפך לנרטיב שליטה בקרב תיאוריות קונספירציה. משמש להקשר ציבורי בלבד." },
  ],
  faq: [
    { question: "האם The Great Reset הוא דבר אמיתי?", answer: "כן. WEF השתמש במונח הזה ביוזמה ושיח מדיניות סביב התאוששות אחרי COVID-19. הגרעין העובדתי של הטענה אמיתי." },
    { question: "האם WEF באמת קידם שינוי כלכלי גדול?", answer: "כן. המקורות הרשמיים מדברים על שינוי מודל קפיטליסטי, קפיטליזם של בעלי עניין, השקעות מוכוונות קיימות ושימוש בטכנולוגיות חדשות. זה שיח רחב, אבל הוא לא זהה למסמך שמקים ממשלה עולמית." },
    { question: "איפה מתרחשת הקפיצה לטענת NWO או ממשלה עולמית?", answer: "הקפיצה מתרחשת כשעוברים מ-WEF דיבר על שינוי כלכלי גלובלי ל-WEF פרסם תוכנית שלטון עולמי. בשביל הקפיצה הזאת צריך מקור רשמי שמראה סמכות שלטונית מעל מדינות, ובבדיקה הזאת מקור כזה לא נמצא." },
    { question: "האם מותר לבקר את WEF?", answer: "כן. מותר ואפילו רצוי לבקר את WEF על השפעה בלתי פרופורציונלית של אליטות, קשרי הון-שלטון, שפת ESG או כוח של פורומים פרטיים. אבל ביקורת על השפעה אינה הוכחה לתוכנית שלטון עולמי סודית." },
    { question: "מה היה מחזק את הטענה?", answer: "מסמך רשמי, החלטה, הסכם או הוראה שמראים ש-The Great Reset נועד להקים גוף שלטוני עולמי עם סמכויות מעל מדינות, לבטל ריבונות או לשלוט ישירות באזרחים. מקור כזה לא נמצא בבדיקה הזאת." },
  ],
});

export const greatResetGlobalGovernmentClaimContent = defineClaim({
  ...migratedGreatResetGlobalGovernmentClaimContent,
  workflow: {
    ...migratedGreatResetGlobalGovernmentClaimContent.workflow,
    checkedAt: "2026-06-23",
  },
  lead: "זה קייס קלאסי של גרעין אמת שמתחבר למסקנה גדולה מדי: The Great Reset באמת קיים בפרסומי WEF, אבל השאלה היא לא אם הביטוי אמיתי. השאלה היא האם המקור הרשמי מוכיח תוכנית לשלטון עולמי, NWO או ביטול ריבונות מדינות.",
  shareCopy: `The Great Reset הוא ביטוי אמיתי ש-WEF השתמש בו ב-2020 סביב התאוששות אחרי COVID-19, קפיטליזם של בעלי עניין, ESG וטכנולוגיה. אבל בבדיקה מול המקורות הרשמיים לא נמצא מסמך שמציג אותו כתוכנית לשלטון עולמי, NWO או ביטול ריבונות מדינות. הגרעין אמיתי; המסקנה הוויראלית לא הוכחה.
${siteUrl}/claims/great-reset-global-government`,
  body: [
    {
      id: "short-answer",
      type: "answer-box",
      eyebrow: "תשובה קצרה",
      title: "יוזמה רשמית של WEF קיימת — אין בה תוכנית שלטון עולמי.",
      paragraphs: [
        migratedGreatResetGlobalGovernmentClaimContent.bottomLine,
      ],
      variant: "answer",
    },
    {
      id: "verdict",
      type: "verdict-grid",
      items: [
        { label: "הטענה", text: migratedGreatResetGlobalGovernmentClaimContent.claim },
        { label: "מה כן נכון", text: "WEF אכן קידם את The Great Reset כשיח על התאוששות אחרי COVID-19, שינוי מודל קפיטליסטי, ESG וטכנולוגיה." },
        { label: "מה לא נמצא", text: "לא נמצא מקור רשמי שמציג את היוזמה כתוכנית NWO, ממשלה עולמית, ביטול ריבונות מדינות או שליטה ישירה באזרחים." },
        { label: "מסקנה", text: migratedGreatResetGlobalGovernmentClaimContent.verdict, emphasis: true },
      ],
    },
    {
      id: "source-levels",
      type: "source-levels",
      title: "איך לקרוא את המקורות?",
      rows: [
        { label: "מקור רשמי", title: "מה WEF עצמו כתב", paragraphs: ["המקור המרכזי הוא מאמר של Klaus Schwab באתר WEF. הוא מציג שינוי כלכלי-חברתי: קפיטליזם של בעלי עניין, השקעות שמקדמות קיימות ושימוש בטכנולוגיות המהפכה התעשייתית הרביעית."] },
        { label: "ביקורת לגיטימית", title: "מה אפשר לבקר", paragraphs: ["אפשר לבקר את WEF, את ההשפעה של פורומים פרטיים, קשרי הון-שלטון, ESG וכוח של אליטות. אבל ביקורת על השפעה אינה ראיה למסמך שלטוני סודי."] },
        { label: "קפיצה לוגית", title: "מה הטענה מוסיפה", paragraphs: ["הטענה הוויראלית מוסיפה שהשיח הזה הוא בעצם תוכנית שלטון עולמי. בשביל זה צריך מקור רשמי ישיר שמראה סמכות מעל מדינות, ולא רק שפה רחבה על שינוי מדיניות."] },
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
          title: "המאמר הרשמי מדבר על איפוס קפיטליזם, לא על ממשלה עולמית",
          paragraphs: [
            "במאמר מ-3 ביוני 2020, Klaus Schwab מציג את Great Reset כצורך לשנות היבטים של הכלכלה והחברה אחרי COVID-19. הכיוון המוצהר הוא כלכלי-חברתי: שווקים, השקעות, ESG וטכנולוגיה.",
            "זה מחזק את הגרעין האמיתי של הטענה. אבל דווקא במקור המרכזי לא מופיע מסמך שמקים ממשלה עולמית, מבטל ריבונות מדינות או נותן ל-WEF סמכות שלטונית ישירה.",
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
          title: "הנרטיב הציבורי הרחיב את היוזמה לטענת NWO ושליטה",
          paragraphs: [
            "המונח Great Reset עבר מהקשר של התאוששות כלכלית אחרי מגפה להקשר של טענות על שליטה עולמית, NWO וביטול מדינות.",
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
      title: "ביקורת על WEF אינה הוכחה לתוכנית שלטון עולמי",
      paragraphs: [
        "אפשר לטעון ש-WEF נותן יותר מדי במה לאליטות עסקיות, שפורומים פרטיים משפיעים על מדיניות ציבורית, שקשרי הון-שלטון בעייתיים או ששפת ESG משרתת אינטרסים חזקים. אלה שאלות ביקורתיות לגיטימיות. אבל כדי לקבוע שיש תוכנית רשמית לשלטון עולמי צריך מקור ישיר שמראה את זה, ולא רק תחושת אי-נוחות מהשפה או מהמשתתפים.",
      ],
    },
    {
      id: "logic-chain",
      type: "logic-chain",
      title: "שרשרת הקפיצה",
      ariaLabel: "שרשרת הקפיצה הלוגית בטענת Great Reset ושלטון עולמי",
      steps: [
        "WEF באמת השתמש במונח The Great Reset",
        "Klaus Schwab באמת כתב על איפוס הקפיטליזם אחרי COVID-19",
        "WEF באמת מחבר בין מנהיגים, חברות וארגונים בינלאומיים",
      ],
      conclusion: "לכן זו תוכנית NWO או שלטון עולמי",
      note: "השלבים הראשונים הם גרעין אמת. המסקנה האחרונה דורשת מקור רשמי וספציפי שמראה סמכות שלטונית מעל מדינות, ולא נמצא מקור כזה בבדיקה הזאת.",
    },
    {
      id: "what-not-found",
      type: "comparison-list",
      title: "מה כן נכון ומה לא הוכח?",
      items: [
        { label: "כן נכון", text: "The Great Reset הוא מונח אמיתי בפרסומי WEF.", tone: "supports" },
        { label: "כן נכון", text: "היוזמה מדברת על שינוי מודלים כלכליים, קיימות, ESG וטכנולוגיה אחרי COVID-19.", tone: "supports" },
        { label: "לא הוכח", text: "ש-WEF פרסם תוכנית רשמית להקמת ממשלה עולמית או NWO.", tone: "contradicts" },
        { label: "לא הוכח", text: "שהיוזמה מבטלת ריבונות מדינות או מעניקה ל-WEF סמכות שלטונית מעל ממשלות.", tone: "contradicts" },
        { label: "השורה", text: "יוזמת מדיניות גלובלית יכולה להיות בעייתית או שנויה במחלוקת בלי להיות ראיה לתוכנית שלטון עולמית.", tone: "caution", emphasis: true },
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
