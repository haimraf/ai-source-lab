import { defineClaim } from "../../lib/content/claim-schema";
import { siteUrl } from "../../lib/site";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedHaarpEarthquakesClaimContent = defineMigratedClaimContent({
  slug: "haarp-earthquakes",
  path: "/claims/haarp-earthquakes",
  title: "האם HAARP יכול לגרום לרעידות אדמה?",
  description: "בדיקה שמפרידה בין מתקן HAARP האמיתי לחקר היונוספירה לבין הטענה שהוא מפעיל רעידות אדמה מרחוק.",
  kicker: "HAARP ורעידות אדמה",
  tags: ["HAARP", "רעידות אדמה", "יונוספירה", "אלסקה", "USGS"],
  verdict: "מתקן אמיתי לחקר היונוספירה — לא נמצאה ראיה שהוא מפעיל רעידות אדמה",
  cluster: "sky-climate",
  updated: "2026-06-23",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה ש-HAARP יכול לגרום לרעידות אדמה",
  claim: "מתקן HAARP באלסקה יכול לגרום לרעידות אדמה או שימש כדי ליצור רעידות אדמה בעולם.",
  shortAnswer: "HAARP הוא מתקן אמיתי, אבל המקורות שנבדקו לא מראים יכולת לגרום לרעידות אדמה.",
  bottomLine: "HAARP אמיתי והוא עוסק במחקר של היונוספירה באמצעות שידורי רדיו בתדר גבוה. זה לא אותו דבר כמו מנגנון שמזיז לוחות טקטוניים או מפעיל שברים גיאולוגיים. מקורות סיסמולוגיים כן מכירים ברעידות אדמה שנגרמות מפעילות אנושית כמו הזרקת נוזלים עמוקה, אבל זו שרשרת פיזיקלית אחרת לגמרי — והיא לא מספקת ראיה ש-HAARP יכול ליצור רעידות אדמה.",
  summaryPoints: [
    "HAARP הוא מתקן מחקר אמיתי באלסקה, שמקושר לאוניברסיטת אלסקה פיירבנקס ולמחקר היונוספירה.",
    "הטענות הוויראליות קופצות ממתקן רדיו אמיתי למסקנה על נשק שמפעיל רעידות אדמה מרחוק.",
    "USGS מתאר רעידות אדמה מושרות בעיקר בהקשרים של פעילות תת-קרקעית כמו הזרקת או חילוץ נוזלים, לא שידור רדיו ליונוספירה.",
    "לא נמצא מקור פתוח שמראה מנגנון, ניסוי או מסמך פעולה שמחבר בין HAARP לבין יצירת רעידת אדמה ממשית.",
  ],
  overview: "הטענה על HAARP חזקה כי יש לה גרעין אמיתי: המתקן קיים, יש לו עבר צבאי, והוא משדר אנרגיית רדיו חזקה אל אזור קטן ביונוספירה. הקפיצה מתחילה כשמתרגמים את זה ליכולת לשלוט במזג אוויר, באורות בשמיים או ברעידות אדמה. בבדיקה הזאת לא נמצא מקור שמראה ש-HAARP יכול להפעיל שברים גיאולוגיים או לגרום לרעידות אדמה מרחוק.",
  reviewScope: {
    whatThisChecks: [
      "האם המקורות שנבדקו תומכים בטענה שמתקן HAARP מסוגל לגרום לרעידות אדמה או שימש ליצירת רעידות אדמה בעולם.",
      "האם העובדה ש-HAARP הוא מתקן אמיתי לחקר היונוספירה מספיקה כדי להוכיח יכולת סיסמית או קשר לאירוע רעידת אדמה מסוים.",
    ],
    whatThisDoesNotCheck: [
      "העמוד אינו בודק את כל הטענות האפשריות על HAARP, מזג אוויר, אורות בשמיים או פרויקטים צבאיים היסטוריים.",
      "העמוד אינו שולל עצם קיום רעידות אדמה מושרות מפעילות אנושית; הוא בודק אם המקורות שנבדקו מחברים את המנגנון הזה ל-HAARP.",
    ],
    evidenceLimitations: [
      "הבדיקה נשענת על מקורות פתוחים, בדיקות עובדה ומקור סיסמולוגי רשמי. היא לא חקירה טכנית מלאה של כל יכולות המתקן או כל תיעוד היסטורי סביבו.",
      "היעדר ראיה במקורות שנבדקו אינו מוכיח שכל ביקורת על HAARP אינה לגיטימית; הוא רק לא מספיק כדי להוכיח את טענת רעידות האדמה.",
    ],
    strongerEvidenceWouldBe: [
      "מסמך טכני מאומת, ניסוי פתוח, נתוני מדידה או מחקר סיסמולוגי שמראה קשר סיבתי ברור בין פעילות HAARP לבין אירוע רעידת אדמה מסוים.",
    ],
    sourceQualityNotes: [
      "Reuters משמש לבדיקת טענות ויראליות ספציפיות; USGS משמש כמקור סיסמולוגי רשמי להבנת רעידות אדמה מושרות ומנגנונים מוכרים.",
    ],
  },
  sources: [
    {
      id: "reuters-turkey-haarp",
      title: "Reuters Fact Check — Nighttime footage unrelated to 2023 Turkey earthquake",
      url: "https://www.reuters.com/fact-check/nighttime-footage-bright-light-sky-unrelated-2023-turkey-earthquake-2024-02-22/",
      level: "secondary",
      quality: "journalism",
      note: "בדיקת טענה שקישרה סרטון אור בשמיים ל-HAARP ולרעידת האדמה בטורקיה; Reuters לא מצא קשר בין הסרטון, HAARP והרעידה.",
    },
    {
      id: "reuters-haarp-hurricanes",
      title: "Reuters Fact Check — HAARP did not modify weather to create Hurricane Helene or Milton",
      url: "https://www.reuters.com/fact-check/haarp-did-not-modify-weather-create-hurricane-helene-or-milton-2024-10-14/",
      level: "secondary",
      quality: "journalism",
      note: "כולל תיאור של HAARP כתוכנית מחקר של השכבה העליונה באטמוספירה וציטוטים שמבהירים שאינה יכולה ליצור או לשנות הוריקנים.",
    },
    {
      id: "usgs-induced-earthquakes",
      title: "USGS — Induced Earthquakes",
      url: "https://www.usgs.gov/programs/earthquake-hazards/science/induced-earthquakes",
      level: "official",
      quality: "official-document",
      note: "מקור רשמי שמסביר מחקר על רעידות אדמה מושרות מפעילות אנושית, בעיקר דרך תהליכים תת-קרקעיים כמו הזרקת או חילוץ נוזלים.",
    },
  ],
  faq: [
    {
      question: "אז HAARP אמיתי?",
      answer: "כן. HAARP הוא מתקן מחקר אמיתי באלסקה, שמזוהה עם מחקר היונוספירה ועם עבר של מימון/ניהול צבאי לפני שהועבר לאוניברסיטת אלסקה פיירבנקס.",
    },
    {
      question: "מה הקפיצה הלוגית בטענה?",
      answer: "הקפיצה היא ממתקן אמיתי שמשדר גלי רדיו ליונוספירה למסקנה שהוא מסוגל להזיז שברים גיאולוגיים או ליצור רעידות אדמה. זה דורש מקור ומנגנון נפרדים.",
    },
    {
      question: "האם בני אדם יכולים לגרום לרעידות אדמה?",
      answer: "כן, יש תחום מוכר של רעידות אדמה מושרות, אבל הדוגמאות המרכזיות קשורות לשינויי לחץ ותהליכים תת-קרקעיים כמו הזרקת נוזלים. זה לא מוכיח יכולת של HAARP.",
    },
    {
      question: "למה HAARP מופיע בכל כך הרבה טענות?",
      answer: "כי הוא מתקן אמיתי, טכני, מרוחק, עם עבר צבאי ושם שנשמע מסתורי. זה מספיק כדי להפוך אותו לעוגן נוח לסיפורים, אבל לא לראיה.",
    },
    {
      question: "איזה מקור היה משנה את המסקנה?",
      answer: "מסמך טכני מאומת, ניסוי פתוח, נתוני מדידה או מחקר סיסמולוגי שמראה קשר סיבתי ברור בין פעילות HAARP לבין אירוע רעידת אדמה מסוים.",
    },
  ],
});

export const haarpEarthquakesClaimContent = defineClaim({
  ...migratedHaarpEarthquakesClaimContent,
  lead: "HAARP הפך לשם קוד כמעט לכל טענה על שליטה סודית במזג אוויר, אורות בשמיים ורעידות אדמה. הבדיקה כאן לא שואלת אם HAARP קיים — הוא קיים — אלא האם המקורות מראים יכולת לגרום לרעידות אדמה.",
  shareCopy: `HAARP הוא מתקן אמיתי לחקר היונוספירה, עם היסטוריה שמסבירה למה הוא מושך חשד. אבל מהמקורות שנבדקו לא נמצאה ראיה שהוא יכול לגרום לרעידות אדמה. רעידות אדמה מושרות מפעילות אנושית קיימות בעיקר בהקשרים תת-קרקעיים כמו הזרקת נוזלים, וזה לא מוכיח יכולת של HAARP.
${siteUrl}/claims/haarp-earthquakes`,
  body: [
    {
      id: "answer",
      type: "answer-box",
      eyebrow: "תשובה קצרה",
      title: migratedHaarpEarthquakesClaimContent.shortAnswer,
      paragraphs: [
        migratedHaarpEarthquakesClaimContent.bottomLine,
        "הניסוח הזהיר: מתקן אמיתי, חשד מובן, אבל לא נמצאה שרשרת ראיות שמחברת אותו ליצירת רעידת אדמה.",
      ],
      variant: "answer",
    },
    {
      id: "verdict",
      type: "verdict-grid",
      items: [
        { label: "הטענה", text: migratedHaarpEarthquakesClaimContent.claim },
        { label: "מה כן נכון", text: migratedHaarpEarthquakesClaimContent.summaryPoints[0] },
        { label: "איפה הקפיצה", text: migratedHaarpEarthquakesClaimContent.summaryPoints[1] },
        { label: "מסקנה", text: migratedHaarpEarthquakesClaimContent.verdict, emphasis: true },
      ],
    },
    {
      id: "distinctions",
      type: "comparison-list",
      title: "שלוש הבחנות שחייבים לשמור",
      items: [
        { label: "מתקן אמיתי:", text: "HAARP קיים, והוא אכן מתקן מחקר טכני ולא אתר מומצא." },
        { label: "יכולת מוכחת:", text: "מקור שמראה מה המתקן מסוגל לעשות בפועל, לא רק מה אנשים חושדים שהוא עושה." },
        { label: "טענת רעידת אדמה:", text: "כדי להוכיח אותה צריך קשר סיבתי לאירוע סיסמי מסוים, לא רק סרטון או תזמון חשוד." },
      ],
    },
    {
      id: "evidence",
      type: "evidence-list",
      title: "מה המקורות מראים?",
      numbered: true,
      items: [
        {
          id: "real-facility",
          number: "01",
          title: "המתקן אמיתי, אבל תחום המחקר אחר",
          paragraphs: [
            "המקורות שנבדקו מתארים את HAARP כתוכנית מחקר של היונוספירה והשכבה העליונה של האטמוספירה. זה מסביר את הגרעין האמיתי של הסיפור, אבל לא מוכיח יכולת סיסמית.",
          ],
        },
        {
          id: "earthquake-claim",
          number: "02",
          title: "טענות על HAARP ורעידות אדמה חוזרות סביב אירועים אמיתיים",
          paragraphs: [
            "Reuters בדק טענה שקישרה סרטון אור בשמיים לרעידת האדמה בטורקיה ול-HAARP. הסרטון עצמו לא היה מהאירוע, ולא נמצא קשר ל-HAARP או ליצירת רעידת אדמה.",
          ],
        },
        {
          id: "induced-earthquakes",
          number: "03",
          title: "רעידות אדמה מושרות הן דבר אמיתי — אבל במנגנון אחר",
          paragraphs: [
            "USGS מתאר מחקר על רעידות אדמה מושרות מפעילות אנושית, בעיקר בהקשרים שבהם פעילות תת-קרקעית משנה לחצים או תנאים סביב שברים. זה לא אותו מנגנון כמו שידורי רדיו אל היונוספירה.",
          ],
        },
        {
          id: "missing-link",
          number: "04",
          title: "החוליה החסרה היא קשר סיבתי",
          paragraphs: [
            "כדי שהטענה תהיה חזקה צריך מקור שמראה איך פעילות HAARP מסוימת הפעילה שבר גיאולוגי מסוים בזמן מסוים. מקור כזה לא נמצא בבדיקה הזאת.",
          ],
        },
      ],
    },
    {
      id: "source-levels",
      type: "source-levels",
      title: "איך לקרוא את המקורות",
      rows: [
        {
          label: "גרעין אמיתי",
          title: "HAARP קיים",
          paragraphs: ["העובדה שהמתקן אמיתי לא מוכיחה כל טענה שמייחסים לו."],
        },
        {
          label: "מדע מוכר",
          title: "רעידות אדמה מושרות קיימות",
          paragraphs: ["אבל המקורות הסיסמולוגיים קושרים אותן בדרך כלל לפעילות תת-קרקעית, לא לשידורי רדיו מרחוק."],
        },
        {
          label: "טענה ויראלית",
          title: "HAARP גרם לרעידה",
          paragraphs: ["השלב הזה דורש ראיה ישירה, לא רק שם של מתקן טכנולוגי ותזמון מפחיד."],
        },
      ],
    },
    {
      id: "logic",
      type: "logic-chain",
      title: "שרשרת הקפיצה",
      steps: ["HAARP אמיתי", "הוא משדר אנרגיית רדיו", "יש רעידת אדמה או אור בשמיים", "אנשים מחברים ביניהם ברשת"],
      conclusion: "לכן HAARP גרם לרעידת האדמה",
      note: "השלבים הראשונים יכולים להסביר למה הטענה נשמעת משכנעת. המסקנה האחרונה דורשת מקור שלא נמצא כאן.",
    },
    {
      id: "legitimate-criticism",
      type: "paragraph-section",
      title: "ומה לגבי ביקורת לגיטימית על HAARP?",
      paragraphs: [
        "אפשר לשאול שאלות על עבר צבאי, שקיפות ציבורית, ניסויים באטמוספירה והשפעה סביבתית. אלה שאלות לגיטימיות. אבל ביקורת כזאת אינה הוכחה אוטומטית לכך שהמתקן מפעיל רעידות אדמה.",
      ],
    },
    { id: "faq", type: "faq", source: "claim" },
    { id: "share", type: "copy-share", source: "claim" },
    { id: "sources", type: "sources", source: "claim" },
  ],
});
