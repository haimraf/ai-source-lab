import { defineClaim, type ClaimContent } from "../../lib/content/claim-schema";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedGatewayClaimContent = defineMigratedClaimContent({
  slug: "gateway-process-out-of-body",
  path: "/claims/gateway-process-out-of-body",
  title: "האם מסמך Gateway מוכיח יציאה מהגוף?",
  description: "בדיקה של מסמך Gateway מ־1983: מה באמת נבדק, מה אפשר ללמוד ממנו, ואיפה מתחילה הקפיצה מהתעניינות מודיעינית להוכחה רוחנית.",
  kicker: "תודעה ומודיעין",
  tags: ["תודעה", "CIA", "Gateway", "ראייה מרחוק", "מסמך רשמי"],
  verdict: "המסמך אמיתי, אבל הוא לא הוכחה ליציאה מהגוף",
  cluster: "consciousness-intelligence",
  updated: "2026-06-19",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה שמסמך Gateway מוכיח יציאה מהגוף",
  claim: "מסמך Gateway של ה־CIA מוכיח שלתודעה יש יכולת לצאת מהגוף או לגשת למידע מרחוק.",
  shortAnswer: "המסמך קיים. הוא לא הוכחה שהיכולת הוכחה.",
  bottomLine: "לא. הוא מוכיח שהיה עניין ובדיקה, לא שהיכולת הוכחה.",
  summaryPoints: [
    "Gateway היא שיטה קיימת של מדיטציה, הרפיה ושמע, והמסמך אכן עוסק בה ברצינות.",
    "מ”הצבא בדק רעיון חריג” ל”הרעיון נכון ומוכח”.",
  ],
  overview: "המסמך מראה שגורמים צבאיים ומודיעיניים התעניינו ב־Gateway Process ובחנו את האפשרות שיש לשיטה ערך. זה שונה לגמרי מהטענה שהמסמך מוכיח יציאה ממשית מהגוף, שליטה במציאות או ראייה מרחוק שניתנת לשחזור מדעי.",
  sources: [
    { id: "cia-gateway", title: "CIA Reading Room: Analysis and Assessment of Gateway Process", url: "https://www.cia.gov/readingroom/docs/CIA-RDP96-00788R001700210016-5.pdf", level: "primary", note: "המסמך המקורי שנושא את שם הבדיקה. עצם קיומו מראה שגורמי ביטחון בחנו את Gateway, לא שהטענות המיסטיות הוכחו." },
    { id: "cia-stargate", title: "CIA Reading Room: Stargate Collection", url: "https://www.cia.gov/readingroom/collection/stargate", level: "official", note: "אוסף מסמכים רחב יותר סביב תוכניות ראייה מרחוק ויכולות תודעה שנבחנו בתקופת המלחמה הקרה." },
    { id: "monroe-gateway", title: "The Monroe Institute: Gateway Experience", url: "https://www.monroeinstitute.org/products/gateway-experience", level: "official", note: "המקור האזרחי שמציג את Gateway Experience כתוכנית שמע ומדיטציה המבוססת על Hemi-Sync." },
    { id: "hemi-sync", title: "Hemi-Sync: Technology", url: "https://hemi-sync.com/technology/", level: "official", note: "הסבר מסחרי על שימוש בצלילים, דפוסי שמע וביטוי Hemi-Sync. זה מקור לשיטת המוצר, לא הוכחה מדעית עצמאית לכל הטענות." },
    { id: "air-remote-viewing", title: "American Institutes for Research: An Evaluation of Remote Viewing", url: "https://irp.fas.org/program/collect/air1995.pdf", level: "primary", note: "דוח הערכה מאוחר יותר על ראייה מרחוק. רלוונטי להבחנה בין עניין מודיעיני לבין הוכחה מבצעית או מדעית רחבה." },
  ],
  faq: [
    { question: "אז המסמך מזויף?", answer: "לא. המסמך אמיתי ומופיע בארכיון ה־CIA. הבעיה היא לא עצם המסמך, אלא המסקנות שמוסיפים לו ברשת." },
    { question: "האם זה אומר שאין שום ערך ל־Gateway?", answer: "לא. ייתכן שיש ערך מעשי בתרגול הרפיה, נשימה, קשב ודמיון מודרך. זה לא מחייב לקבל את כל הטענות על יציאה מהגוף או ממדים אחרים." },
    { question: "האם ה־CIA הוכיח ראייה מרחוק?", answer: "לא דרך המסמך הזה. לכל היותר הוא מראה עניין ובחינה של האפשרות. הוכחה דורשת תוצאות עקביות, מדידות ושחזוריות, לא רק מסמך תיאורטי." },
    { question: "אז איך נכון להשתמש בזה?", answer: "ככלי לפתיחת שאלה: מה נבדק, מי בדק, מה נמצא, ומה רק משוער. לא כקלף שסוגר דיון." },
  ],
});

export const gatewayProcessOutOfBodyClaimContent = defineClaim({
  ...migratedGatewayClaimContent,
  lead:
    "מסמך Gateway הוא דוגמה מושלמת לטענה שיש לה גרעין אמיתי: אכן קיים מסמך מודיעיני אמריקאי שבחן את השיטה. אבל ברשת הגרעין הזה קופץ מהר מאוד למסקנה רחבה הרבה יותר — כאילו עצם הבדיקה מוכיחה יציאה מהגוף, ראייה מרחוק או יכולות תודעה על־טבעיות.",
  shareCopy:
    'מסמך Gateway אמיתי, אבל הוא לא הוכחה לכך שאפשר לצאת מהגוף או לבצע ראייה מרחוק. הוא מראה שגורמים בצבא/מודיעין בחנו רעיון חריג בתקופת המלחמה הקרה. הקפיצה היא להפוך "המסמך קיים" ל"היכולת הוכחה".\nhttps://ai-source-lab.vercel.app/claims/gateway-process-out-of-body',
  body: [
    {
      id: "short-answer",
      type: "answer-box",
      eyebrow: "תשובה קצרה",
      title: "המסמך קיים. הוא לא הוכחה שהיכולת הוכחה.",
      paragraphs: [
        "המסמך מראה שגורמים צבאיים ומודיעיניים התעניינו ב־Gateway Process ובחנו את האפשרות שיש לשיטה ערך. זה שונה לגמרי מהטענה שהמסמך מוכיח יציאה ממשית מהגוף, שליטה במציאות או ראייה מרחוק שניתנת לשחזור מדעי.",
      ],
      variant: "answer",
    },
    {
      id: "verdict",
      type: "verdict-grid",
      items: [
        {
          label: "הטענה",
          text: "מסמך Gateway של ה־CIA מוכיח שלתודעה יש יכולת לצאת מהגוף או לגשת למידע מרחוק.",
        },
        {
          label: "השורה התחתונה",
          text: "לא. הוא מוכיח שהיה עניין ובדיקה, לא שהיכולת הוכחה.",
          emphasis: true,
        },
        {
          label: "מה כן נכון",
          text: "Gateway היא שיטה קיימת של מדיטציה, הרפיה ושמע, והמסמך אכן עוסק בה ברצינות.",
        },
        {
          label: "איפה הסיפור קופץ",
          text: "מ”הצבא בדק רעיון חריג” ל”הרעיון נכון ומוכח”.",
        },
      ],
    },
    {
      id: "gateway-process",
      type: "paragraph-section",
      title: "מהו Gateway Process?",
      paragraphs: [
        "Gateway Experience היא סדרת תרגולים שפותחה סביב מכון מונרו, ומשלבת הרפיה, נשימה, דמיון מודרך ושמע שמבוסס על Hemi-Sync. הרעיון המרכזי הוא להכניס את האדם למצב קשב עמוק, שבו הגוף רגוע מאוד והמוח נשאר ער.",
      ],
    },
    {
      id: "gateway-comparison",
      type: "comparison-list",
      items: [
        {
          label: "הגישה המעשית:",
          text: "מדיטציה, הרפיה, אימון קשב, דמיון מודרך והפחתת רעש מחשבתי.",
        },
        {
          label: "הגישה המיסטית:",
          text: "יציאה מהגוף, ראייה מרחוק, מצבי תודעה מורחבים וממדים לא פיזיים.",
        },
        {
          label: "מה המסמך עושה:",
          text: "מנסה להסביר תיאורטית איך השיטה עשויה לעבוד ומה אפשר לבדוק בה.",
        },
        {
          label: "מה המסמך לא עושה:",
          text: "לא מספק הוכחה סופית ושחזורית לכל הטענות הרוחניות שמיוחסות ל־Gateway ברשת.",
        },
      ],
    },
    {
      id: "hemi-sync",
      type: "paragraph-section",
      title: "מה לגבי Hemi-Sync?",
      paragraphs: [
        "Hemi-Sync מתואר כשימוש בדפוסי שמע, בין היתר צלילים מעט שונים בכל אוזן, כדי לעודד מצב תודעתי מסוים. זה יכול להיות כלי מדיטטיבי או חווייתי. אבל גם כאן צריך להפריד בין “השיטה קיימת” לבין “כל טענה על יציאה מהגוף הוכחה”.",
      ],
    },
    {
      id: "pineal-gland",
      type: "method-note",
      title: "ומה עם בלוטת האצטרובל?",
      paragraphs: [
        "זו דוגמה טובה לתוספת מאוחרת של הרשת. במסמך Gateway עצמו האצטרובל אינו המרכז של השיטה. השיטה מדברת הרבה יותר על הרפיה, תדרים, קשב, מודעות, סנכרון, דמיון ותיאוריות תודעה. החיבור ל”עין שלישית” הוא בעיקר שכבת ניו־אייג׳ שנוספה סביב הנושא.",
      ],
    },
    {
      id: "claim-chain",
      type: "logic-chain",
      title: "שרשרת הטענה",
      steps: [
        "יש מסמך אמיתי",
        "המסמך נכתב בהקשר מודיעיני",
        "הוא עוסק במצבי תודעה חריגים",
      ],
      conclusion: "לכן יציאה מהגוף וראייה מרחוק הוכחו",
      note: "שלושת החלקים הראשונים יכולים להיות נכונים. הקפיצה היא להפוך בדיקה, השערה ועניין מודיעיני להוכחה.",
    },
    {
      id: "faq",
      type: "faq",
      title: "שאלות נפוצות",
      source: "claim",
    },
    {
      id: "copy-share",
      type: "copy-share",
      title: "תגובה קצרה להעתקה",
      source: "claim",
    },
    {
      id: "sources",
      type: "sources",
      title: "המקורות שנבדקו",
      source: "claim",
    },
    {
      id: "method",
      type: "method-note",
      title: "איך נבדקה הטענה?",
      paragraphs: [
        "הבדיקה הפרידה בין שלושה דברים: קיום המסמך, התוכן וההקשר שלו, והמסקנה שאנשים מוסיפים מעליו. המסקנה כאן אינה ש־Gateway “שטויות”, אלא שמסמך התעניינות אינו הוכחה ליכולת על־טבעית.",
      ],
    },
  ],
  structuredData: {
    mode: "configured",
    entries: [
      {
        type: "article",
        placement: "page",
        headline: "האם מסמך Gateway מוכיח יציאה מהגוף?",
        description:
          "בדיקה של מסמך Gateway מ־1983 והקפיצה בין התעניינות מודיעינית לבין הוכחה ליכולות תודעה חריגות.",
        datePublished: "2026-06-19",
        dateModified: "2026-06-19",
        inLanguage: "he-IL",
      },
    ],
  },
  metadataOverrides: {
    title: "האם מסמך Gateway מוכיח יציאה מהגוף? | מקור בדיקה",
    description:
      "בדיקה של מסמך Gateway מ־1983: מה באמת נבדק, מה אפשר ללמוד ממנו, ואיפה מתחילה הקפיצה מהתעניינות מודיעינית להוכחה רוחנית.",
    canonical: "/claims/gateway-process-out-of-body",
  },
  workflow: {
    ...migratedGatewayClaimContent.workflow,
    credits: [
      {
        id: "haim-rafael",
        name: "חיים רפאל",
        role: "author",
      },
    ],
  },
} satisfies ClaimContent);
