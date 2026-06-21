import { defineClaim, type ClaimContent } from "../../lib/content/claim-schema";
import { siteUrl } from "../../lib/site";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedOwnNothingClaimContent = defineMigratedClaimContent({
  slug: "you-will-own-nothing-klaus-schwab",
  path: "/claims/you-will-own-nothing-klaus-schwab",
  title: "האם קלאוס שוואב אמר שלא יהיה לכם כלום?",
  description: "בדיקה של המשפט ״לא יהיה לכם כלום ותהיו מאושרים״: מה המקור האמיתי, מי כתב אותו, ומה לא נמצא כמסמך מדיניות רשמי.",
  kicker: "WEF ואג׳נדה 2030",
  tags: ["WEF", "קלאוס שוואב", "אג׳נדה 2030", "רכוש", "מקור רשמי"],
  verdict: "המקור קיים כמאמר תרחישי; לא נמצא שזה ציטוט של שוואב או תוכנית הפקעה",
  cluster: "agenda-2030",
  updated: "2026-06-21",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה שקלאוס שוואב אמר שלא יהיה לכם כלום",
  claim: "קלאוס שוואב או ה-WEF הודיעו שעד 2030 לא יהיה לאנשים רכוש והם יהיו מאושרים, כחלק מתוכנית רשמית לקחת רכוש מהציבור.",
  shortAnswer: "יש מקור למשפט, אבל לא נמצא שזה ציטוט של שוואב או תוכנית רשמית להפקעת רכוש.",
  bottomLine: "המשפט נשען על מאמר תרחישי שפורסם באתר WEF, לא על סעיף מדיניות רשמי שמורה לקחת רכוש.",
  summaryPoints: [
    "פורסם באתר WEF מאמר עתידני של Ida Auken שתיאר תרחיש עירוני שבו אדם כמעט לא מחזיק דברים בבעלות.",
    "הקפיצה היא ממאמר תרחישי ופרובוקטיבי לטענה על תוכנית רשמית, מחייבת וסודית להפקעת רכוש.",
  ],
  overview: "הבדיקה מפרידה בין שלושה דברים: המשפט שהפך ויראלי, הפרסום המקורי באתר WEF, והטענה הרחבה כאילו מדובר בהוראה רשמית של קלאוס שוואב או של אג׳נדה 2030. המקור הראשון אכן קיים כתרחיש עתידני, אבל בבדיקה לא נמצא מסמך רשמי שמגדיר אותו כתוכנית להפקיע רכוש מהציבור.",
  sources: [
    {
      id: "wef-2030-city",
      title: "World Economic Forum — Here's how life could change in my city by the year 2030",
      url: "https://www.weforum.org/stories/2016/11/how-life-could-change-2030/",
      level: "official",
      note: "המקור המרכזי לטענה: מאמר תרחישי של Ida Auken שפורסם באתר WEF ומתאר חזון עתידני, לא נוסח חוק או תוכנית אכיפה.",
    },
    {
      id: "un-2030-agenda",
      title: "United Nations — Transforming our world: the 2030 Agenda for Sustainable Development",
      url: "https://sdgs.un.org/2030agenda",
      level: "official",
      note: "המסמך הרשמי של אג׳נדה 2030. הוא משמש להשוואה מול הטענה שהמשפט הוא סעיף רשמי באג׳נדה.",
    },
    {
      id: "wef-great-reset",
      title: "World Economic Forum — The Great Reset",
      url: "https://www.weforum.org/focus/the-great-reset",
      level: "official",
      note: "רקע על יוזמת Great Reset. עצם קיום היוזמה אינו מוכיח שהמשפט הוא הוראת מדיניות להפקעת רכוש.",
    },
  ],
  faq: [
    {
      question: "אז המשפט לא קיים בכלל?",
      answer: "המשפט והרעיונות סביבו אכן הופיעו בהקשר של מאמר תרחישי שפורסם באתר WEF. המסקנה כאן אינה שהכול מומצא, אלא שהייחוס והמשמעות הורחבו מעבר למה שהמקור מוכיח.",
    },
    {
      question: "האם קלאוס שוואב אמר את זה?",
      answer: "במקורות שנבדקו כאן לא נמצא שהמשפט הוא ציטוט ישיר של קלאוס שוואב. הוא מזוהה בעיקר עם מאמר של Ida Auken שפורסם באתר WEF.",
    },
    {
      question: "האם זה חלק רשמי מאג׳נדה 2030 של האו״ם?",
      answer: "לא נמצא במסמך הרשמי של אג׳נדה 2030 סעיף שאומר שלא יהיה לאזרחים רכוש או שצריך להפקיע רכוש מהציבור.",
    },
    {
      question: "אז אין ביקורת לגיטימית על WEF?",
      answer: "יש מקום לביקורת על חזונות טכנולוגיים, ריכוז כוח, כלכלת שירותים ופרטיות. אבל ביקורת חזקה יותר כשהיא נשענת על הייחוס המדויק ולא הופכת תרחיש למזימה מוכחת.",
    },
  ],
});

export const ownNothingKlausSchwabClaimContent = defineClaim({
  ...migratedOwnNothingClaimContent,
  lead: "המשפט ״לא יהיה לכם כלום ותהיו מאושרים״ הפך לאחד הסמלים הכי חזקים של טענות על אג׳נדה 2030 וה-WEF. בבדיקה הזו לא מוחקים את הגרעין האמיתי: היה פרסום כזה באתר WEF. השאלה היא מה הוא מוכיח — ומה הוא לא מוכיח.",
  shareCopy: `המשפט ״לא יהיה לכם כלום ותהיו מאושרים״ נשען על מאמר תרחישי שפורסם באתר WEF ונכתב על ידי Ida Auken. מהמקורות הפתוחים שנבדקו כאן לא עולה שזה ציטוט ישיר של קלאוס שוואב או תוכנית רשמית להפקעת רכוש. הקפיצה היא מ״מאמר עתידני״ ל״תוכנית אכיפה רשמית״.
${siteUrl}/claims/you-will-own-nothing-klaus-schwab`,
  body: [
    {
      id: "answer",
      type: "answer-box",
      eyebrow: "תשובה קצרה",
      title: migratedOwnNothingClaimContent.shortAnswer,
      paragraphs: [
        migratedOwnNothingClaimContent.sections[0].paragraphs[0],
        "לכן המסקנה אינה ״אין שום מקור״, אלא מדויקת יותר: יש מקור לרעיון, אבל לא נמצא שהוא מוכיח תוכנית רשמית לקחת בעלות פרטית מהציבור.",
      ],
      variant: "answer",
    },
    {
      id: "verdict",
      type: "verdict-grid",
      items: [
        { label: "הטענה", text: migratedOwnNothingClaimContent.claim },
        { label: "השורה התחתונה", text: migratedOwnNothingClaimContent.bottomLine, emphasis: true },
        { label: "מה כן נכון", text: migratedOwnNothingClaimContent.summaryPoints[0] },
        { label: "איפה הסיפור קופץ", text: migratedOwnNothingClaimContent.summaryPoints[1] },
      ],
    },
    {
      id: "claim-table",
      type: "comparison-list",
      title: "טבלת הטענה",
      items: [
        { label: "מה נטען:", text: "קלאוס שוואב או ה-WEF הודיעו על תוכנית שבה לא יהיה לציבור רכוש." },
        { label: "מה נמצא:", text: "מאמר תרחישי באתר WEF שמדמיין עתיד עירוני עם פחות בעלות ויותר שירותים." },
        { label: "מה לא נמצא:", text: "מסמך מדיניות רשמי שמורה להפקיע רכוש או ציטוט ישיר של שוואב בנוסח הזה." },
        { label: "המסקנה:", text: "המקור אמיתי, אבל המשמעות הוויראלית גדולה בהרבה ממה שהמקור עצמו מוכיח.", emphasis: true },
      ],
    },
    {
      id: "bonus",
      type: "method-note",
      title: "עובדת בונוס",
      paragraphs: [
        "החלק הכי חשוב פה הוא שינוי המסגור. המקור התחיל כתרחיש פרובוקטיבי על עתיד עירוני, ואז הפך ברשת לסיסמה פוליטית קצרה שנשמעת כמו הודאה בתוכנית סודית.",
        "כלומר: המקור קיים, אבל המשמעות שהודבקה לו ברשת גדולה בהרבה ממה שהמקור עצמו מוכיח.",
      ],
    },
    {
      id: "evidence",
      type: "evidence-list",
      title: "מה המקורות מראים",
      numbered: true,
      items: [
        {
          id: "wef-article",
          number: "01",
          title: "המאמר באתר WEF הוא תרחיש, לא חוק",
          paragraphs: [
            "הפרסום המקורי כתוב כתרחיש עתידי בגוף ראשון. הוא מתאר אפשרות חברתית וטכנולוגית, לא מנגנון אכיפה ולא נוסח מחייב של מדיניות ציבורית.",
          ],
        },
        {
          id: "wrong-attribution",
          number: "02",
          title: "הייחוס לשוואב דורש מקור נפרד",
          paragraphs: [
            "גם אם המאמר פורסם באתר WEF, זה לא הופך כל משפט בו לציטוט של קלאוס שוואב. טענה כזו צריכה מקור שמראה שהוא אמר את הדברים בעצמו.",
          ],
        },
        {
          id: "agenda-2030",
          number: "03",
          title: "אג׳נדה 2030 היא מסמך אחר",
          paragraphs: [
            "המסמך הרשמי של האו״ם עוסק ביעדי פיתוח בר-קיימא. בבדיקה הזו לא נמצא בו סעיף שמורה לבטל בעלות פרטית או לקחת רכוש מאזרחים.",
          ],
        },
      ],
    },
    {
      id: "logic",
      type: "logic-chain",
      title: "שרשרת הקפיצה",
      steps: [
        "מאמר תרחישי באתר WEF",
        "משפט קליט על בעלות",
        "ייחוס לקלאוס שוואב",
        "חיבור לאג׳נדה 2030",
      ],
      conclusion: "טענה על תוכנית רשמית להפקעת רכוש",
      note: "כל חוליה בשרשרת צריכה מקור. עצם קיום החוליה הראשונה לא מוכיח את המסקנה האחרונה.",
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
        headline: migratedOwnNothingClaimContent.title,
        description: migratedOwnNothingClaimContent.description,
        datePublished: "2026-06-21",
        dateModified: "2026-06-21",
        inLanguage: "he-IL",
      },
      { type: "faq", placement: "page" },
    ],
  },
  metadataOverrides: {
    title: "האם קלאוס שוואב אמר שלא יהיה לכם כלום? | מקור בדיקה",
    description: migratedOwnNothingClaimContent.description,
    canonical: "/claims/you-will-own-nothing-klaus-schwab",
  },
} satisfies ClaimContent);
