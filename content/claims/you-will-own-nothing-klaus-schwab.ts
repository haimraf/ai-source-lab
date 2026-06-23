import { defineClaim, type ClaimContent } from "../../lib/content/claim-schema";
import { siteUrl } from "../../lib/site";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedOwnNothingClaimContent = defineMigratedClaimContent({
  slug: "you-will-own-nothing-klaus-schwab",
  path: "/claims/you-will-own-nothing-klaus-schwab",
  title: "האם קלאוס שוואב אמר שלא יהיה לכם כלום?",
  description: "בדיקת מקור למשפט ״לא יהיה לכם כלום ותהיו מאושרים״: מאיפה הוא הגיע, מי כתב את הטקסט, ומה לא נמצא כמסמך מדיניות רשמי.",
  kicker: "WEF ואג׳נדה 2030",
  tags: ["WEF", "קלאוס שוואב", "אג׳נדה 2030", "רכוש", "מקור רשמי"],
  verdict: "מאמר תרחישי אמיתי באתר WEF — לא ציטוט של שוואב ולא תוכנית רשמית לביטול בעלות",
  cluster: "agenda-2030",
  updated: "2026-06-23",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה שקלאוס שוואב אמר שלא יהיה לכם כלום",
  claim: "קלאוס שוואב או ה-WEF הודיעו שעד 2030 לא יהיה לאנשים רכוש והם יהיו מאושרים, כחלק מתוכנית רשמית לקחת רכוש מהציבור.",
  shortAnswer: "יש מקור אמיתי למשפט, אבל לא נמצא שזה ציטוט של קלאוס שוואב או תוכנית רשמית להפקיע רכוש.",
  bottomLine: "המשפט נשען על מאמר תרחישי שפורסם באתר WEF ונכתב על ידי Ida Auken. בבדיקה הזו לא נמצא שהוא ציטוט ישיר של קלאוס שוואב, סעיף באג׳נדה 2030 או מסמך מדיניות שמורה לקחת רכוש מהציבור.",
  summaryPoints: [
    "הגרעין האמיתי: פורסם באתר WEF מאמר עתידני של Ida Auken שתיאר תרחיש עירוני עם פחות בעלות ויותר שירותים משותפים.",
    "מה לא נמצא: מקור רשמי שמראה שקלאוס שוואב אמר את המשפט כציטוט אישי או הציג אותו כתוכנית מחייבת.",
    "הקפיצה: מעבר ממאמר תרחישי ופרובוקטיבי לטענה על תוכנית רשמית, סודית או מחייבת להפקיע רכוש.",
    "ביקורת על WEF, כלכלת מנויים או ריכוז כוח יכולה להיות לגיטימית, אבל היא לא מוכיחה את הייחוס הוויראלי.",
  ],
  overview: "הבדיקה מפרידה בין שלושה דברים שונים: המשפט שהפך ויראלי, הפרסום המקורי באתר WEF, והטענה הרחבה כאילו מדובר בהוראה רשמית של קלאוס שוואב או של אג׳נדה 2030. המקור הראשון אכן קיים כתרחיש עתידני, אבל בבדיקה לא נמצא מסמך רשמי שמגדיר אותו כתוכנית להפקיע רכוש מהציבור.",
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
      answer: "במקורות שנבדקו כאן לא נמצא שהמשפט הוא ציטוט ישיר של קלאוס שוואב. המקור המרכזי שמזוהה עם המשפט הוא מאמר של Ida Auken שפורסם באתר WEF.",
    },
    {
      question: "האם זה חלק רשמי מאג׳נדה 2030 של האו״ם?",
      answer: "לא נמצא במסמך הרשמי של אג׳נדה 2030 סעיף שאומר שלא יהיה לאזרחים רכוש או שצריך להפקיע רכוש מהציבור.",
    },
    {
      question: "איפה מתרחשת הקפיצה הלוגית?",
      answer: "הקפיצה היא לעבור ממאמר עתידני על עיר בשנת 2030 לטענה שקיימת תוכנית רשמית לקחת רכוש מאנשים. בשביל הקפיצה הזאת צריך מקור מדיניות ברור, ולא רק פרסום תרחישי באתר WEF.",
    },
    {
      question: "האם מותר לבקר את WEF או את הרעיון עצמו?",
      answer: "כן. אפשר לבקר את WEF, ריכוז כוח, כלכלת מנויים, פרטיות ותלות בשירותים. אבל ביקורת כזאת אינה הוכחה שהמשפט הוא ציטוט של שוואב או תוכנית רשמית להפקעת רכוש.",
    },
    {
      question: "איזו ראיה הייתה מחזקת את הטענה?",
      answer: "נאום, מסמך מדיניות, החלטה רשמית או מקור ראשוני שמראה שקלאוס שוואב או גוף רשמי הציגו את המשפט כתוכנית מחייבת לביטול בעלות פרטית. מאמר תרחישי לבדו לא מספיק לזה.",
    },
  ],
});

export const ownNothingKlausSchwabClaimContent = defineClaim({
  ...migratedOwnNothingClaimContent,
  lead: "המשפט ״לא יהיה לכם כלום ותהיו מאושרים״ נשמע כמו הודאה דרמטית בתוכנית לקחת רכוש. בפועל יש גרעין אמיתי — מאמר תרחישי באתר WEF — אבל המקור לא מראה שקלאוס שוואב אמר את המשפט או שהוצגה תוכנית רשמית להפקעת בעלות פרטית.",
  shareCopy: `המשפט ״לא יהיה לכם כלום ותהיו מאושרים״ נשען על מאמר תרחישי באתר WEF, לא על ציטוט ישיר שנמצא של קלאוס שוואב ולא על סעיף רשמי באג׳נדה 2030. אפשר לבקר את WEF או כלכלת מנויים — אבל זו לא ראיה לתוכנית רשמית להפקיע רכוש.
${siteUrl}/claims/you-will-own-nothing-klaus-schwab`,
  body: [
    {
      id: "answer",
      type: "answer-box",
      eyebrow: "תשובה קצרה",
      title: migratedOwnNothingClaimContent.shortAnswer,
      paragraphs: [
        migratedOwnNothingClaimContent.bottomLine,
        "המסקנה המדויקת: יש מקור אמיתי לרעיון, אבל המשמעות הוויראלית גדולה יותר ממה שהמקור מוכיח.",
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
        { label: "מה לא נמצא", text: migratedOwnNothingClaimContent.summaryPoints[1] },
      ],
    },
    {
      id: "claim-table",
      type: "comparison-list",
      title: "טבלת הטענה",
      items: [
        { label: "מה נטען", text: "קלאוס שוואב או ה-WEF הודיעו על תוכנית שבה לא יהיה לציבור רכוש." },
        { label: "מה נמצא", text: "מאמר תרחישי באתר WEF שמדמיין עתיד עירוני עם פחות בעלות ויותר שירותים." },
        { label: "מה לא נמצא", text: "מסמך מדיניות רשמי שמורה להפקיע רכוש, או ציטוט ישיר של שוואב בנוסח הזה." },
        { label: "המסקנה", text: "המקור אמיתי, אבל המשמעות הוויראלית גדולה בהרבה ממה שהמקור עצמו מוכיח.", emphasis: true },
      ],
    },
    {
      id: "source-context",
      type: "method-note",
      title: "המסגור המקורי מול המסגור הוויראלי",
      paragraphs: [
        "המקור התחיל כתרחיש עתידני על חיים בעיר בשנת 2030, עם יותר שירותים, שיתוף ומשאבים דיגיטליים. ברשת הוא הפך לסיסמה קצרה שנשמעת כמו הודאה בתוכנית סודית.",
        "הבדיקה לא אומרת שהרעיון לא בעייתי או שלא מותר לבקר אותו. היא אומרת דבר צר יותר: כדי לטעון שזו תוכנית רשמית להפקעת רכוש צריך מקור שמראה זאת במפורש.",
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
      id: "valid-criticism",
      type: "comparison-list",
      title: "מה כן אפשר לבקר?",
      items: [
        { label: "WEF והשפעה ציבורית", text: "אפשר לבקר את כוחם של פורומים בינלאומיים, קשרי הון-שלטון והשפעת אליטות על שיח מדיניות." },
        { label: "כלכלת מנויים", text: "אפשר לבקר מעבר ממוצרים בבעלות לשירותים, מנויים ותלות בפלטפורמות." },
        { label: "פרטיות", text: "אפשר לבקר חזונות טכנולוגיים שמקטינים פרטיות או מגדילים תלות במערכות דיגיטליות." },
        { label: "מה זה לא מוכיח", text: "ביקורת כזאת אינה הוכחה שהמשפט הוא ציטוט של שוואב או תוכנית רשמית להפקעת רכוש." },
      ],
    },
    {
      id: "logic",
      type: "logic-chain",
      title: "שרשרת הקפיצה",
      steps: [
        "מאמר תרחישי באתר WEF",
        "משפט קליט על פחות בעלות",
        "ייחוס לקלאוס שוואב",
        "חיבור לאג׳נדה 2030",
      ],
      conclusion: "טענה על תוכנית רשמית להפקעת רכוש",
      note: "כל חוליה בשרשרת צריכה מקור. עצם קיום המאמר לא מוכיח את הייחוס לשוואב, את החיבור לאג׳נדה 2030 או את המסקנה על תוכנית אכיפה.",
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
        dateModified: "2026-06-23",
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
