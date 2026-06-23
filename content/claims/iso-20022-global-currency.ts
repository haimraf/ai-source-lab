import { defineClaim } from "../../lib/content/claim-schema";
import { siteUrl } from "../../lib/site";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedIso20022GlobalCurrencyClaimContent = defineMigratedClaimContent({
  slug: "iso-20022-global-currency",
  path: "/claims/iso-20022-global-currency",
  title: "האם ISO 20022 הוא מטבע עולמי או בחירה ב-XRP?",
  description: "בדיקה לטענה ש-ISO 20022 הוא תוכנית למטבע עולמי או בחירה רשמית במטבע קריפטו מסוים. מה התקן באמת עושה ומה הוא לא קובע.",
  kicker: "כסף דיגיטלי ותקני תשלום",
  tags: ["ISO 20022", "SWIFT", "XRP", "CBDC", "תשלומים"],
  verdict: "ISO 20022 הוא תקן למסרים פיננסיים — לא מטבע, לא CBDC, ולא בחירה רשמית ב-XRP",
  cluster: "digital-money",
  updated: "2026-06-23",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה ש-ISO 20022 הוא מטבע עולמי או בחירה ב-XRP",
  claim: "ISO 20022 הוא תקן שמוכיח מעבר למטבע עולמי אחד, או בחירה רשמית ב-XRP ובמטבעות מסוימים כתשתית הכסף העולמית.",
  shortAnswer: "לא. ISO 20022 הוא תקן פתוח למסרים פיננסיים מובנים. הוא לא מטבע, לא רשת סליקה, ולא החלטה לבחור נכס קריפטו מסוים.",
  bottomLine: "יש גרעין אמיתי: ISO 20022 הוא תקן פיננסי גלובלי חשוב, ו-SWIFT ומוסדות פיננסיים עוברים אליו כדי להעביר נתוני תשלום עשירים ומובנים יותר. אבל התקן מגדיר שפת מסרים ומבנה נתונים. הוא לא קובע איזה מטבע ישמש בעולם, לא יוצר CBDC, ולא בוחר ב-XRP או בכל נכס אחר כמטבע רשמי.",
  summaryPoints: [
    "מה כן נכון: ISO 20022 הוא תקן גלובלי פתוח למידע פיננסי ומסרי תשלום מובנים.",
    "מה לא נמצא: מקור רשמי שמראה שהתקן בוחר ב-XRP, במטבע עולמי אחד או ב-CBDC ספציפי.",
    "הקפיצה: מעבר מ'תקן שמשמש מערכות תשלום' ל'התקן בוחר את הכסף העולמי'.",
    "העמוד משלים את בדיקת XRP: גם אם נכס מסוים יכול להשתמש במסרים תקניים, זה לא אומר שהוא נבחר על ידי התקן.",
  ],
  overview: "ISO 20022 הפך למילת מפתח חזקה סביב כסף דיגיטלי, SWIFT, CBDC וקריפטו. הבלבול מתחיל כי התקן אכן משמש בתשתיות תשלום אמיתיות, ולכן קל להפוך אותו לסיפור על מטבע עולמי. אבל תקן מסרים אינו מטבע. הוא דומה יותר לשפה משותפת שמערכות פיננסיות יכולות להשתמש בה כדי להעביר מידע מדויק יותר.",
  sources: [
    {
      id: "iso20022-about",
      title: "ISO 20022 — About ISO 20022",
      url: "https://www.iso20022.org/about-iso-20022",
      level: "official",
      note: "המקור הרשמי של התקן: ISO 20022 מוצג כתקן גלובלי פתוח למידע פיננסי ומסרים עסקיים.",
    },
    {
      id: "swift-iso20022",
      title: "Swift — About ISO 20022",
      url: "https://www.swift.com/standards/iso-20022",
      level: "official",
      note: "Swift מסביר שהתקן מספק נתונים מובנים ועשירים למסרי תשלום, ולא מציג אותו כמטבע או כנכס דיגיטלי.",
    },
    {
      id: "iso-standard-55005",
      title: "ISO — ISO 20022-1:2013 Financial services — Universal financial industry message scheme",
      url: "https://www.iso.org/standard/55005.html",
      level: "official",
      note: "עמוד התקן הרשמי ב-ISO, שממסגר את ISO 20022 כחלק מתקן לשירותים פיננסיים ולסכמת מסרים אוניברסלית.",
    },
  ],
  faq: [
    {
      question: "אז ISO 20022 קשור לכסף?",
      answer: "כן. הוא קשור למידע פיננסי ולמסרי תשלום. אבל קשר לכסף אינו אומר שהוא עצמו מטבע או שהוא בוחר מטבע אחד לעולם.",
    },
    {
      question: "האם XRP יכול להיות תואם ISO 20022?",
      answer: "מערכות ונכסים שונים יכולים לטעון לתאימות או שימוש במבני מסרים. אבל תאימות לתקן אינה בחירה רשמית על ידי ISO או SWIFT כנכס הכסף העולמי.",
    },
    {
      question: "האם ISO 20022 הוא CBDC?",
      answer: "לא. CBDC הוא מטבע דיגיטלי של בנק מרכזי. ISO 20022 הוא תקן מסרים. בנק מרכזי יכול להשתמש במסרים תקניים, אבל התקן עצמו אינו המטבע.",
    },
    {
      question: "למה הטענה נשמעת משכנעת?",
      answer: "כי התקן באמת מאומץ על ידי תשתיות פיננסיות גדולות, והוא באמת גלובלי. הקפיצה מתחילה כשמבלבלים בין שפת מסרים משותפת לבין החלטה על מטבע או נכס ספציפי.",
    },
    {
      question: "איזו ראיה הייתה מחזקת את הטענה?",
      answer: "מסמך רשמי של ISO, SWIFT, בנק מרכזי או גוף רגולטורי שאומר במפורש ש-ISO 20022 בוחר ב-XRP או במטבע אחד כמטבע עולמי. מסמך כזה לא נמצא במקורות שנבדקו כאן.",
    },
  ],
});

export const iso20022GlobalCurrencyClaimContent = defineClaim({
  ...migratedIso20022GlobalCurrencyClaimContent,
  lead: "ISO 20022 הוא תקן אמיתי וחשוב, ולכן קל להפוך אותו לסימן דרמטי על עתיד הכסף. אבל התקן לא יוצר מטבע, לא בוחר קריפטו, ולא מחליף בנקים מרכזיים. הוא מגדיר שפה ומבנה למסרים פיננסיים.",
  shareCopy: `ISO 20022 הוא תקן למסרים פיננסיים מובנים, לא מטבע עולמי ולא בחירה רשמית ב-XRP. מערכות תשלום יכולות להשתמש בו כדי להעביר מידע עשיר ומסודר יותר, אבל התקן עצמו לא קובע איזה מטבע ייבחר ולא יוצר CBDC.
${siteUrl}/claims/iso-20022-global-currency`,
  body: [
    {
      id: "answer",
      type: "answer-box",
      eyebrow: "תשובה קצרה",
      title: migratedIso20022GlobalCurrencyClaimContent.shortAnswer,
      paragraphs: [
        migratedIso20022GlobalCurrencyClaimContent.bottomLine,
        "הבדיקה כאן מפרידה בין שלושה דברים: תקן מסרים, רשת תשלומים ונכס/מטבע. ערבוב ביניהם הוא המקור העיקרי לטענה הוויראלית.",
      ],
      variant: "answer",
    },
    {
      id: "verdict",
      type: "verdict-grid",
      items: [
        { label: "הטענה", text: migratedIso20022GlobalCurrencyClaimContent.claim },
        { label: "מה כן נכון", text: migratedIso20022GlobalCurrencyClaimContent.summaryPoints[0] },
        { label: "מה לא נמצא", text: migratedIso20022GlobalCurrencyClaimContent.summaryPoints[1] },
        { label: "מסקנה", text: migratedIso20022GlobalCurrencyClaimContent.verdict, emphasis: true },
      ],
    },
    {
      id: "terms",
      type: "comparison-list",
      title: "תקן, רשת ומטבע — לא אותו דבר",
      items: [
        { label: "תקן מסרים", text: "מגדיר איך מידע פיננסי נכתב ומועבר בצורה מובנית ועקבית." },
        { label: "רשת תשלומים", text: "תשתית או שירות שמעבירים הודעות או תשלומים בין גופים פיננסיים." },
        { label: "מטבע / נכס", text: "דולר, שקל, CBDC, XRP או כל יחידת ערך אחרת. התקן לא הופך דבר כזה לרשמי." },
        { label: "הקפיצה", text: "מהעובדה שיש תקן גלובלי למסקנה שיש מטבע גלובלי שנבחר מראש.", emphasis: true },
      ],
    },
    {
      id: "why-confusing",
      type: "method-note",
      title: "למה הבלבול הזה נפוץ?",
      paragraphs: [
        "תקנים פיננסיים נשמעים יבשים, אבל הם פועלים מאחורי מערכות ענק: בנקים, תשלומים בינלאומיים, תשתיות שוק ובנקים מרכזיים. לכן כשמישהו רואה תקן גלובלי, קל לדמיין שמדובר גם במטבע גלובלי.",
        "בפועל, תקן הוא שכבת שפה. הוא יכול לשמש הרבה מערכות והרבה מטבעות במקביל. השימוש בו לא מוכיח בחירה בנכס אחד.",
      ],
    },
    {
      id: "evidence",
      type: "evidence-list",
      title: "מה המקורות מראים",
      numbered: true,
      items: [
        {
          id: "iso-standard",
          number: "01",
          title: "ISO: תקן למידע פיננסי",
          paragraphs: [
            "המקור הרשמי של ISO 20022 מציג את התקן כתקן גלובלי פתוח למידע פיננסי. זה מסביר את מטרת התקן כשפת נתונים, לא כמטבע.",
          ],
        },
        {
          id: "swift-data",
          number: "02",
          title: "Swift: נתונים עשירים ומובנים יותר במסרי תשלום",
          paragraphs: [
            "Swift מתאר את ISO 20022 כדרך להעביר נתוני תשלום עשירים, מובנים ומפורטים יותר. זה מחזק את ההבנה שמדובר במסרים ובנתונים, לא בבחירת מטבע.",
          ],
        },
        {
          id: "no-asset-selection",
          number: "03",
          title: "לא נמצאה בחירה בנכס מסוים",
          paragraphs: [
            "במקורות הרשמיים שנבדקו לא נמצא ניסוח שלפיו ISO 20022 בוחר ב-XRP, במטבע קריפטו אחר או במטבע עולמי יחיד. טענה כזו צריכה מקור מדיניות מפורש.",
          ],
        },
      ],
    },
    {
      id: "logic",
      type: "logic-chain",
      title: "שרשרת הקפיצה",
      steps: [
        "ISO 20022 הוא תקן פיננסי אמיתי",
        "מוסדות גדולים מאמצים אותו",
        "הוא קשור למסרי תשלום בינלאומיים",
        "יש נכסי קריפטו שמדברים על תאימות",
      ],
      conclusion: "התקן בחר מטבע עולמי או XRP",
      note: "החוליה האחרונה אינה נובעת מהקודמות. תאימות לתקן או אימוץ של תקן מסרים אינם בחירה רשמית במטבע.",
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
        headline: migratedIso20022GlobalCurrencyClaimContent.title,
        description: migratedIso20022GlobalCurrencyClaimContent.description,
        datePublished: "2026-06-23",
        dateModified: "2026-06-23",
        inLanguage: "he-IL",
      },
      { type: "faq", placement: "page" },
    ],
  },
  metadataOverrides: {
    title: "האם ISO 20022 הוא מטבע עולמי או בחירה ב-XRP? | מקור בדיקה",
    description: migratedIso20022GlobalCurrencyClaimContent.description,
    canonical: "/claims/iso-20022-global-currency",
  },
});
