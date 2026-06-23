import { defineClaim } from "../../lib/content/claim-schema";
import { siteUrl } from "../../lib/site";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedBillGatesVaccinesPopulationReductionClaimContent = defineMigratedClaimContent({
  slug: "bill-gates-vaccines-population-reduction",
  path: "/claims/bill-gates-vaccines-population-reduction",
  title: "האם ביל גייטס אמר שחיסונים יורידו אוכלוסייה?",
  description: "בדיקה של הציטוט הוויראלי מהרצאת TED 2010: מה גייטס אמר, מה היה ההקשר, ואיפה מתחילה הפרשנות על דילול אוכלוסייה.",
  kicker: "ציטוט ויראלי",
  tags: ["Bill Gates", "חיסונים", "אוכלוסייה", "TED", "ציטוטים"],
  verdict: "הוא דיבר על האטת גידול אוכלוסייה דרך בריאות ותכנון משפחה — לא על הרג או דילול באמצעות חיסונים",
  cluster: "institutional-narratives",
  updated: "2026-06-23",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הציטוט של ביל גייטס על חיסונים ואוכלוסייה",
  claim: "ביל גייטס הודה שחיסונים נועדו להוריד או לדלל את אוכלוסיית העולם.",
  shortAnswer: "לא כך. הציטוט המקורי עוסק בהאטת גידול אוכלוסייה, לא בהרג אנשים באמצעות חיסונים.",
  bottomLine: "יש גרעין אמיתי: בהרצאת TED 2010 גייטס הזכיר חיסונים, שירותי בריאות ושירותי בריאות רבייה בתוך נוסחה על פליטות פחמן ואוכלוסייה. אבל הטענה הוויראלית מחליפה את המשמעות: האטת גידול אוכלוסייה דרך ירידת ילודה, תמותת ילדים נמוכה יותר ותכנון משפחה אינה דילול אוכלוסייה באמצעות חיסונים.",
  summaryPoints: [
    "ההרצאה המקורית של TED2010 עסקה באפס פליטות פחמן עד 2050, לא בתוכנית חיסונים סודית.",
    "המשפט הוויראלי נלקח מתוך דיון על אוכלוסייה, בריאות, רבייה ופליטות, ולא מתוך הצעה לפגוע באנשים.",
    "הקפיצה הלוגית היא מ'האטת גידול אוכלוסייה' ל'הרג או דילול אוכלוסייה'. אלה דברים שונים לגמרי.",
    "לא נמצא במקור ניסוח שלפיו חיסונים נועדו להרוג, לעקר או לדלל אנשים.",
  ],
  overview: "זו אחת הטענות הוויראליות החזקות סביב ביל גייטס: לוקחים קטע קצר מהרצאת TED 2010, שבו הוא מזכיר חיסונים לצד בריאות ותכנון משפחה, ומציגים אותו כאילו הוא הודה שחיסונים מיועדים לדילול אוכלוסייה. הבדיקה מפרידה בין הציטוט, ההקשר הדמוגרפי והפרשנות שמוסיפים לו ברשת.",
  sources: [
    {
      id: "ted-innovating-to-zero",
      title: "TED — Bill Gates: Innovating to zero!",
      url: "https://www.ted.com/talks/bill_gates_innovating_to_zero?view=transcript",
      level: "primary",
      note: "המקור הראשוני להרצאת TED2010 שממנה נלקח הציטוט הוויראלי; ההרצאה ממוסגרת סביב אפס פליטות פחמן עד 2050.",
    },
    {
      id: "owid-fertility-rate",
      title: "Our World in Data — Fertility Rate",
      url: "https://ourworldindata.org/fertility-rate",
      level: "context",
      note: "רקע דמוגרפי על ירידת שיעורי פריון, קשר בין ילודה, הישרדות ילדים ומגמות חברתיות וכלכליות.",
    },
    {
      id: "bbc-gates-conspiracy-context",
      title: "BBC — Bill Gates and Covid conspiracy theories",
      url: "https://www.bbc.com/news/52847648",
      level: "secondary",
      note: "רקע עיתונאי על הדרך שבה ביל גייטס הפך מוקד לטענות קונספירציה סביב חיסונים וקורונה.",
    },
  ],
  faq: [
    {
      question: "אז הוא אמר את המילים חיסונים ואוכלוסייה באותו משפט?",
      answer: "כן, יש ציטוט אמיתי מהרצאת TED 2010 שבו חיסונים מוזכרים כחלק מדיון רחב על בריאות, רבייה, אוכלוסייה ופליטות. זה הגרעין האמיתי של הטענה.",
    },
    {
      question: "מה ההבדל בין האטת גידול אוכלוסייה לבין דילול אוכלוסייה?",
      answer: "האטת גידול אוכלוסייה מתייחסת לכך שלאורך זמן נולדים פחות ילדים בממוצע. דילול אוכלוסייה מרמז על הרג, פגיעה או הפחתה כפויה של אנשים קיימים. זו קפיצה משמעותית שלא מופיעה במקור.",
    },
    {
      question: "למה בכלל בריאות יכולה להיות קשורה לפחות ילודה?",
      answer: "בדמוגרפיה מקובל לדון בכך שכאשר יותר ילדים שורדים, כשיש יותר ביטחון בריאותי וכשיש גישה לתכנון משפחה, משפחות רבות בוחרות להביא פחות ילדים. זה לא אומר שחיסונים הורגים אנשים.",
    },
    {
      question: "האם זו עצה רפואית על חיסונים?",
      answer: "לא. העמוד בודק ציטוט והקשר מקור בלבד. הוא לא ממליץ לקבל או לא לקבל חיסון, ולא מחליף רופא או מקור רפואי מוסמך.",
    },
    {
      question: "איזו ראיה הייתה משנה את המסקנה?",
      answer: "מקור ראשוני שבו גייטס אומר במפורש שחיסונים נועדו להרוג, לעקר או לדלל אנשים — או מסמך פעולה שמראה תוכנית כזו. זה לא נמצא בהרצאה המקורית.",
    },
  ],
});

export const billGatesVaccinesPopulationReductionClaimContent = defineClaim({
  ...migratedBillGatesVaccinesPopulationReductionClaimContent,
  lead: "הטענה נשמעת חזקה כי היא נשענת על קטע אמיתי מהרצאה אמיתית. אבל כדי לבדוק אותה צריך לשאול שאלה צרה: האם המקור אומר שחיסונים נועדו לדלל אוכלוסייה, או שהוא מדבר על האטת גידול אוכלוסייה בהקשר של בריאות, רבייה ופליטות?",
  shareCopy: `ביל גייטס אכן דיבר בהרצאת TED 2010 על אוכלוסייה, חיסונים, שירותי בריאות ובריאות רבייה. אבל מהמקור לא עולה שהוא אמר שחיסונים נועדו להרוג או לדלל אוכלוסייה. ההקשר הוא האטת גידול אוכלוסייה דרך שיפור בריאות ותכנון משפחה, לא פגיעה באנשים קיימים.
${siteUrl}/claims/bill-gates-vaccines-population-reduction`,
  body: [
    {
      id: "answer",
      type: "answer-box",
      eyebrow: "תשובה קצרה",
      title: migratedBillGatesVaccinesPopulationReductionClaimContent.shortAnswer,
      paragraphs: [
        migratedBillGatesVaccinesPopulationReductionClaimContent.bottomLine,
        "הבדיקה כאן היא בדיקת ציטוט והקשר, לא דיון רפואי על חיסונים.",
      ],
      variant: "answer",
    },
    {
      id: "verdict",
      type: "verdict-grid",
      items: [
        { label: "הטענה", text: migratedBillGatesVaccinesPopulationReductionClaimContent.claim },
        { label: "מה כן נכון", text: migratedBillGatesVaccinesPopulationReductionClaimContent.summaryPoints[0] },
        { label: "איפה הקפיצה", text: migratedBillGatesVaccinesPopulationReductionClaimContent.summaryPoints[2] },
        { label: "מסקנה", text: migratedBillGatesVaccinesPopulationReductionClaimContent.verdict, emphasis: true },
      ],
    },
    {
      id: "distinctions",
      type: "comparison-list",
      title: "שלוש הבחנות שחייבים לשמור",
      items: [
        { label: "ציטוט אמיתי:", text: "יש קטע אמיתי שבו גייטס מזכיר חיסונים, בריאות, רבייה ואוכלוסייה." },
        { label: "הקשר מקורי:", text: "ההרצאה עוסקת בנוסחה לפליטות פחמן ובדרכים להוריד פליטות, כולל מרכיב האוכלוסייה." },
        { label: "פרשנות ויראלית:", text: "הטענה ברשת מחליפה האטת גידול אוכלוסייה בטענה על הרג או דילול באמצעות חיסונים." },
      ],
    },
    {
      id: "evidence",
      type: "evidence-list",
      title: "מה המקורות מראים?",
      numbered: true,
      items: [
        {
          id: "ted-context",
          number: "01",
          title: "המקור הוא הרצאת TED על אפס פליטות",
          paragraphs: [
            "עמוד TED הרשמי מציג את ההרצאה כהרצאה מ-TED2010 בשם Innovating to zero, וממסגר אותה סביב הצורך להגיע לאפס פליטות פחמן גלובליות עד 2050. זה ההקשר הרחב של הציטוט.",
          ],
        },
        {
          id: "quote-boundary",
          number: "02",
          title: "הציטוט אינו מספיק בלי ההקשר",
          paragraphs: [
            "הקטע הוויראלי בודד מתוך דיון על אוכלוסייה ובריאות. כדי להפוך אותו להוכחה לדילול אוכלוסייה צריך למצוא במקור אמירה מפורשת על הרג, עיקור או פגיעה מכוונת — והיא לא נמצאה בבדיקה הזאת.",
          ],
        },
        {
          id: "demography-context",
          number: "03",
          title: "יש הקשר דמוגרפי אמיתי",
          paragraphs: [
            "Our World in Data מתאר ירידה ארוכת טווח בשיעורי פריון בעולם, ומדגיש שהחלטות על מספר ילדים משקפות מגמות חברתיות וכלכליות רחבות. זה מסביר למה בריאות ורבייה יכולות להופיע בדיון על גידול אוכלוסייה בלי שזה יהיה דילול כפוי.",
          ],
        },
        {
          id: "missing-link",
          number: "04",
          title: "החוליה החסרה היא הכוונה הפוגענית",
          paragraphs: [
            "הטענה הוויראלית צריכה להראות שגייטס דיבר על שימוש בחיסונים כדי לפגוע באנשים קיימים. במקום זה, המקור מצביע על דיון במדיניות בריאות, רבייה ואקלים.",
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
          label: "מקור ראשוני",
          title: "הרצאת TED המקורית",
          paragraphs: ["המקור הראשון לבדיקה הוא ההרצאה עצמה וההקשר שבו הציטוט נאמר."],
        },
        {
          label: "רקע דמוגרפי",
          title: "פריון, בריאות ותכנון משפחה",
          paragraphs: ["רקע כזה יכול להסביר את הקשר בין בריאות, הישרדות ילדים וגודל משפחה, אבל הוא לא הוכחה לטענה פלילית או סודית."],
        },
        {
          label: "טענה ויראלית",
          title: "דילול אוכלוסייה באמצעות חיסונים",
          paragraphs: ["זו טענה נוספת וחזקה בהרבה, ולכן היא דורשת מקור ישיר וברור שלא נמצא כאן."],
        },
      ],
    },
    {
      id: "logic",
      type: "logic-chain",
      title: "שרשרת הקפיצה",
      steps: ["גייטס דיבר על אוכלוסייה", "הוא הזכיר חיסונים ובריאות", "הוא דיבר על האטת גידול אוכלוסייה", "ברשת מתרגמים את זה לדילול או הרג"],
      conclusion: "לכן חיסונים נועדו לדלל אוכלוסייה",
      note: "שלושת השלבים הראשונים שייכים להקשר המקורי. המסקנה האחרונה אינה נובעת מהם ודורשת ראיה עצמאית.",
    },
    {
      id: "not-medical-advice",
      type: "method-note",
      title: "הערת גבול",
      paragraphs: [
        "זה אינו עמוד ייעוץ רפואי ואינו קובע למישהו מה לעשות עם חיסונים. הוא בודק טענה על ציטוט, מקור והקשר.",
      ],
    },
    { id: "faq", type: "faq", source: "claim" },
    { id: "share", type: "copy-share", source: "claim" },
    { id: "sources", type: "sources", source: "claim" },
  ],
});
