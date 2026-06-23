import { defineClaim, type ClaimContent } from "../../lib/content/claim-schema";
import { siteUrl } from "../../lib/site";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedRockefellerLockStepClaimContent = defineMigratedClaimContent({
  slug: "rockefeller-lock-step-pandemic-scenario",
  path: "/claims/rockefeller-lock-step-pandemic-scenario",
  title: "האם דוח Lock Step של רוקפלר חזה או תכנן את הקורונה?",
  description: "בדיקה של דוח Rockefeller Foundation מ-2010: מה באמת כתוב בתרחיש Lock Step, ומה לא מוכיח תכנון של COVID.",
  kicker: "רוקפלר ותרחישי פנדמיה",
  tags: ["Rockefeller Foundation", "Lock Step", "פנדמיה", "COVID", "תכנון תרחישים"],
  verdict: "דוח אמיתי עם תרחיש פנדמיה ושליטה ממשלתית — לא הוכחה שתכננו את COVID",
  cluster: "institutional-narratives",
  updated: "2026-06-23",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה שדוח Lock Step של רוקפלר חזה או תכנן את הקורונה",
  claim: "דוח Lock Step של Rockefeller Foundation מ-2010 חזה את הקורונה או מוכיח שהמגפה והסגרים תוכננו מראש.",
  shortAnswer: "הדוח אמיתי, אבל הוא מוצג כתרחיש חשיבה — לא כתחזית ולא כתוכנית פעולה.",
  bottomLine: "דוח Scenarios for the Future of Technology and International Development אמיתי, והתרחיש Lock Step אכן מתאר מגפה, סגרים, מסכות, בדיקות חום והתחזקות שליטה ממשלתית. אבל הדוח עצמו מציג את התרחישים כסיפורים והשערות לתכנון עתידי, לא כתחזיות ולא כהוראות ביצוע. לכן הוא מקור אמיתי עם דמיון מטריד, אבל לא הוכחה שתכננו את COVID.",
  summaryPoints: [
    "הדוח אמיתי והופק ב-2010 על ידי Rockefeller Foundation ו-Global Business Network.",
    "תרחיש Lock Step מתאר עולם עם שליטה ממשלתית חזקה יותר, הנהגה סמכותנית יותר והתנגדות אזרחית גוברת.",
    "בתוך התרחיש מופיעה מגפה דמיונית שמובילה למגבלות כמו מסכות, בדיקות חום וסגירת גבולות.",
    "הדוח עצמו מדגיש שתרחישים אינם תחזיות, ושפרטים כמו שמות ותאריכים הם דוגמאות בתוך סיפור אפשרי.",
  ],
  overview: "הטענה חזקה כי יש לה גרעין אמיתי: קיים דוח משנת 2010, ובתוכו תרחיש בשם Lock Step שמתאר מגפה ותגובה ממשלתית סמכותית. הקפיצה מתחילה כשמציגים את התרחיש כהוכחה לתכנון של COVID. הדוח עצמו אומר שהתרחישים הם כלי לחשיבה על אפשרויות, לא תחזית ולא מסמך ביצוע.",
  sources: [
    {
      id: "archive-lock-step-report",
      title: "Internet Archive mirror — Scenarios for the Future of Technology and International Development",
      url: "https://archive.org/details/pdfy-tNG7MjZUicS-wiJb",
      level: "primary",
      note: "עותק ארכיוני של הדוח המלא. המקור הרשמי המקורי של Rockefeller Foundation לא אותר בפאס הזה, ולכן מסומן כעותק ארכיוני של המסמך.",
    },
    {
      id: "archive-lock-step-full-text",
      title: "Internet Archive full text — Lock Step scenario and scenario-method notes",
      url: "https://archive.org/stream/pdfy-tNG7MjZUicS-wiJb/Scenarios%20for%20the%20Future%20ofTechnology%20and%20International%20Development_djvu.txt",
      level: "primary",
      note: "טקסט OCR של הדוח: כולל את פרק Lock Step ואת ההבהרה שהתרחישים הם stories, not forecasts.",
    },
  ],
  faq: [
    {
      question: "אז הדוח אמיתי?",
      answer: "כן. הדוח Scenarios for the Future of Technology and International Development הוא מסמך אמיתי משנת 2010, שהופק על ידי Rockefeller Foundation ו-Global Business Network.",
    },
    {
      question: "מה באמת כתוב ב-Lock Step?",
      answer: "Lock Step מתאר תרחיש של מגפה עולמית, תגובה ממשלתית חזקה, סגירת גבולות, מסכות, בדיקות חום והתחזקות שליטה ממשלתית גם אחרי שהמגפה דועכת.",
    },
    {
      question: "האם זה מוכיח שתכננו את COVID?",
      answer: "לא. הדוח עצמו מציג את התרחישים כסיפורים והשערות שנועדו לחשיבה אסטרטגית. הוא לא מציג הוראת ביצוע, תוכנית אכיפה או מסמך שמראה תכנון של COVID.",
    },
    {
      question: "למה זה בכל זאת נראה כל כך דומה?",
      answer: "כי תרחישי פנדמיה משתמשים לעיתים במרכיבים צפויים: מגבלות תנועה, בדיקות, בידוד, עומס כלכלי ותגובות ממשלתיות. דמיון כזה יכול להיות מטריד, אבל הוא לא מספיק כדי להוכיח תכנון מראש.",
    },
    {
      question: "מה היה מחזק את הטענה?",
      answer: "מסמך ביצוע, הוראה רשמית, תכתובת פנימית מאומתת או מקור ראשוני שמראה שהתרחיש הפך לתוכנית פעולה מחייבת. תרחיש חשיבה לבדו לא מספיק לכך.",
    },
  ],
});

export const rockefellerLockStepPandemicClaimContent = defineClaim({
  ...migratedRockefellerLockStepClaimContent,
  lead: "דוח Lock Step הוא אחד המקורות הכי מצוטטים בטענות על תכנון הקורונה. יש כאן גרעין אמיתי: דוח מ-2010 אכן מתאר מגפה ותגובה ממשלתית קשוחה. אבל השאלה היא האם הדוח הוא תחזית/תוכנית — או תרחיש חשיבה שנכתב כדי לדמיין אפשרויות.",
  shareCopy: `דוח Lock Step של Rockefeller Foundation אמיתי, ובו תרחיש שמתאר מגפה, סגירת גבולות, מסכות, בדיקות חום והתחזקות שליטה ממשלתית. אבל הדוח עצמו מגדיר את התרחישים כסיפורים והשערות לתכנון עתידי, לא כתחזיות ולא כהוראות ביצוע. לכן זה מקור אמיתי עם דמיון מטריד — לא הוכחה שתכננו את COVID.
${siteUrl}/claims/rockefeller-lock-step-pandemic-scenario`,
  body: [
    {
      id: "answer",
      type: "answer-box",
      eyebrow: "תשובה קצרה",
      title: migratedRockefellerLockStepClaimContent.shortAnswer,
      paragraphs: [
        migratedRockefellerLockStepClaimContent.bottomLine,
        "הניסוח המדויק הוא: המסמך אמיתי, התרחיש אמיתי, אבל המסקנה הוויראלית חזקה יותר ממה שהמסמך עצמו מוכיח.",
      ],
      variant: "answer",
    },
    {
      id: "verdict",
      type: "verdict-grid",
      items: [
        { label: "הטענה", text: migratedRockefellerLockStepClaimContent.claim },
        { label: "מה כן נכון", text: migratedRockefellerLockStepClaimContent.summaryPoints[0] },
        { label: "מה הדוח מתאר", text: migratedRockefellerLockStepClaimContent.summaryPoints[2] },
        { label: "מסקנה", text: migratedRockefellerLockStepClaimContent.verdict, emphasis: true },
      ],
    },
    {
      id: "claim-table",
      type: "comparison-list",
      title: "טבלת הטענה",
      items: [
        { label: "מה נטען:", text: "דוח Lock Step חזה או תכנן את מגפת COVID ואת הסגרים." },
        { label: "מה נמצא:", text: "דוח אמיתי מ-2010 עם תרחיש פנדמיה וסמכותיות ממשלתית." },
        { label: "מה לא נמצא:", text: "מסמך ביצוע או מקור שמראה שהתרחיש היה תוכנית פעולה מחייבת." },
        { label: "המסקנה:", text: "מקור אמיתי וחשוב לבדיקה, אבל לא הוכחה לתכנון COVID.", emphasis: true },
      ],
    },
    {
      id: "bonus",
      type: "bonus-note",
      title: "עובדת בונוס",
      paragraphs: [
        "החלק הכי חשוב בדוח לא נמצא דווקא בתרחיש Lock Step, אלא בהקדמה לשיטת העבודה: המחברים מבהירים שהתרחישים הם סיפורים ולא תחזיות.",
        "כלומר, אותו מסמך שמשמש ברשת כהוכחה לנבואה או תכנון, מגדיר את עצמו ככלי לחשיבה על אפשרויות — לא כמסמך ביצוע.",
      ],
    },
    {
      id: "evidence",
      type: "evidence-list",
      title: "מה המקורות מראים",
      numbered: true,
      items: [
        {
          id: "real-report",
          number: "01",
          title: "הדוח אמיתי",
          paragraphs: [
            "הדוח נושא את הכותרת Scenarios for the Future of Technology and International Development, ומוצג כעבודה של Rockefeller Foundation ו-Global Business Network ממאי 2010.",
          ],
        },
        {
          id: "real-lock-step",
          number: "02",
          title: "Lock Step הוא תרחיש אמיתי בתוך הדוח",
          paragraphs: [
            "הדוח כולל ארבעה תרחישים, ובהם Lock Step. התרחיש מתאר עולם של שליטה ממשלתית חזקה יותר, הנהגה סמכותנית יותר ותגובת נגד אזרחית.",
          ],
        },
        {
          id: "pandemic-details",
          number: "03",
          title: "התרחיש כולל מגפה וצעדי שליטה",
          paragraphs: [
            "בתוך Lock Step מופיעה מגפה דמיונית שמתחילה ב-2012, פוגעת בתנועה ובכלכלה, ומובילה לצעדים כמו מסכות, בדיקות חום וסגירת גבולות.",
          ],
        },
        {
          id: "not-forecast",
          number: "04",
          title: "הדוח אומר שאלה לא תחזיות",
          paragraphs: [
            "בהקדמה לתרחישים מוסבר שהם נועדו למתוח את החשיבה ולבחון אפשרויות. הדוח מבהיר שהתרחישים הם stories, not forecasts, ושפרטים כמו שמות ותאריכים הם דוגמאות בתוך תרחיש.",
          ],
        },
      ],
    },
    {
      id: "source-levels",
      type: "source-levels",
      title: "איך לקרוא את המקור",
      rows: [
        {
          label: "מקור אמיתי",
          title: "דוח Rockefeller / GBN מ-2010",
          paragraphs: ["המקור קיים וכולל תרחיש בשם Lock Step. אין טעם להכחיש את קיומו."],
        },
        {
          label: "מסגור נכון",
          title: "תרחיש חשיבה",
          paragraphs: ["הדוח מציג את התרחישים ככלי אסטרטגי לדמיין עתידים אפשריים, לא כהוראות ביצוע."],
        },
        {
          label: "קפיצה ויראלית",
          title: "מכאן לתכנון COVID",
          paragraphs: ["כדי להגיע לטענה שתכננו את COVID צריך מקור נוסף שמחבר בין התרחיש לבין פעולה ממשית. מקור כזה לא נמצא בבדיקה הזאת."],
        },
      ],
    },
    {
      id: "logic-chain",
      type: "logic-chain",
      title: "שרשרת הקפיצה",
      steps: [
        "דוח אמיתי מ-2010",
        "תרחיש פנדמיה בשם Lock Step",
        "דמיון לצעדים שנראו בקורונה",
        "טענה שזה היה תכנון מראש",
      ],
      conclusion: "השלב האחרון דורש מקור ביצוע, לא רק תרחיש",
      note: "הדמיון מסביר למה הטענה התפשטה. הוא לא מחליף ראיה לתכנון מראש.",
    },
    { id: "faq", type: "faq", title: "שאלות נפוצות", source: "claim" },
    { id: "share", type: "copy-share", title: "תגובה קצרה להעתקה", source: "claim" },
    { id: "sources", type: "sources", title: "מקורות ישירים", source: "claim" },
  ],
  structuredData: {
    mode: "configured",
    entries: [
      {
        type: "article",
        placement: "page",
        headline: migratedRockefellerLockStepClaimContent.title,
        description: migratedRockefellerLockStepClaimContent.description,
        datePublished: "2026-06-23",
        dateModified: "2026-06-23",
        inLanguage: "he-IL",
      },
      { type: "faq", placement: "page" },
    ],
  },
  metadataOverrides: {
    title: `${migratedRockefellerLockStepClaimContent.title} | מקור בדיקה`,
    description: migratedRockefellerLockStepClaimContent.description,
    canonical: migratedRockefellerLockStepClaimContent.path,
    openGraph: {
      title: `${migratedRockefellerLockStepClaimContent.title} | מקור בדיקה`,
      description: "דוח אמיתי עם תרחיש פנדמיה — לא הוכחה שתכננו את COVID.",
      url: `${siteUrl}${migratedRockefellerLockStepClaimContent.path}`,
      siteName: "מקור בדיקה",
      locale: "he_IL",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${migratedRockefellerLockStepClaimContent.title} | מקור בדיקה`,
      description: "דוח אמיתי עם תרחיש פנדמיה — לא הוכחה שתכננו את COVID.",
    },
  },
} satisfies ClaimContent);
