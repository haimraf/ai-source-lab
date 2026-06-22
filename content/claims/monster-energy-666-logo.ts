import { defineClaim, type ClaimContent } from "../../lib/content/claim-schema";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedMonsterEnergy666LogoClaimContent = defineMigratedClaimContent({
  slug: "monster-energy-666-logo",
  path: "/claims/monster-energy-666-logo",
  title: "האם הלוגו של Monster Energy מסתיר 666 בעברית?",
  description: "בדיקה של הטענה שהלוגו של Monster Energy מורכב משלוש פעמים האות ו׳ בעברית ולכן מסתיר את המספר 666, מול ההסבר העיצובי של M מטפרים וההבדל בין דמיון חזותי לכוונה מוכחת.",
  kicker: "סמלים נסתרים ותרבות פופולרית",
  tags: ["Monster Energy", "666", "גימטריה", "סמלים", "תרבות פופולרית"],
  verdict: "יש דמיון חזותי; כוונה נסתרת לא הוכחה",
  cluster: "pop-culture-symbols",
  updated: "2026-06-22",
  changeFrequency: "monthly",
  priority: 0.86,
  ogAlt: "מקור בדיקה - בדיקת הטענה שהלוגו של Monster Energy מסתיר 666 בעברית",
  claim: "הלוגו של Monster Energy אינו רק M מטפרים, אלא שלוש פעמים האות ו׳ בעברית — כלומר 6־6־6 — ולכן הוא מסתיר מסר שטני או דתי נסתר.",
  shortAnswer: "לא נמצאה ראיה מספקת שהלוגו תוכנן כ־666 בעברית.",
  bottomLine: "הטענה נשענת על דמיון חזותי אמיתי ועל כך ש־ו׳ מייצגת 6 בגימטריה, אבל לא נמצאה ראיה שהלוגו נוצר בכוונה כקוד 666. ההסבר הפשוט יותר הוא M ירוקה בסגנון טפרים/שריטות של מפלצת.",
  summaryPoints: [
    "האות ו׳ אכן יכולה לייצג את המספר 6 בגימטריה, ולכן שלוש ווין יכולות להיקרא כ־6־6־6.",
    "הטענה הפכה ויראלית במיוחד סביב סרטונים נוצריים שטענו ש־Monster Energy מקדם מסר שטני.",
    "ההסבר העיצובי המקובל ללוגו הוא M ירוקה המורכבת משלושה סימני טפרים/שריטות, בהתאם לשם המותג Monster.",
    "דמיון צורני אינו מספיק כדי להוכיח כוונה. כדי להוכיח מסר נסתר צריך מקור עיצובי, תיאור רשמי או ראיה ישירה אחרת.",
  ],
  overview: "הטענה עובדת כי היא לא נראית מופרכת במבט ראשון: שלושת הקווים הירוקים באמת יכולים להזכיר למי שמכיר עברית שלוש ווין, והאות ו׳ אכן שווה 6 בגימטריה. אבל הבדיקה לא עוצרת בשאלה מה אפשר לראות בתוך צורה. היא בודקת מה אפשר להוכיח. נכון למקורות שנבדקו, יש דמיון חזותי וטענה ויראלית מוכרת, אבל אין ראיה שהלוגו תוכנן כ־666 בעברית או כמסר שטני. ההסבר העיצובי הפשוט יותר הוא לוגו M של Monster, בסגנון טפרים שקורעים את הפחית.",
  sources: [
    { id: "monster-energy-logo-summary", title: "Monster Energy: Logo and popular culture summary", url: "https://en.wikipedia.org/wiki/Monster_Energy", level: "secondary", note: "מקור רקע שמסכם את הלוגו כ־M ירוקה בשלושה קווים על רקע שחור, המיוחסת ל־McLean Design ומרמזת על טפרים של מפלצת. כולל גם את הטענה הוויראלית סביב Christine Weick." },
    { id: "christine-weick-monster-claim", title: "Christine Weick: Monster Energy viral claim", url: "https://en.wikipedia.org/wiki/Christine_Weick", level: "secondary", note: "מקור רקע על הסרטון הוויראלי מ־2014 שבו נטען כי Monster Energy קשור לשטן וכי הלוגו מציג את מספר החיה." },
    { id: "waw-letter-six", title: "Waw/Vav letter: numerical value", url: "https://en.wikipedia.org/wiki/Waw_(letter)", level: "secondary", note: "מסביר שהאות ו׳/Vav מייצגת את המספר 6 בגימטריה. זה הגרעין הטכני שמאפשר את פרשנות ה־666." },
    { id: "gematria-standard-values", title: "Gematria: standard Hebrew letter values", url: "https://en.wikipedia.org/wiki/Gematria", level: "secondary", note: "רקע על גימטריה כשיטה שבה אותיות עבריות מקבלות ערכים מספריים." },
    { id: "number-of-the-beast", title: "Number of the beast: 666 in Christian tradition", url: "https://en.wikipedia.org/wiki/Number_of_the_beast", level: "secondary", note: "רקע תרבותי־דתי על 666 כמספר טעון במסורת הנוצרית. מסביר למה הטענה מעוררת תגובה חזקה." },
  ],
  faq: [
    { question: "אז באמת אפשר לראות בלוגו שלוש ווין?", answer: "אפשר לפרש את שלושת הקווים כך, במיוחד כשמציגים אותם ליד האות ו׳. אבל אפשרות חזותית אינה הוכחה לכוונה עיצובית." },
    { question: "האם ו׳ באמת שווה 6?", answer: "כן. בגימטריה עברית האות ו׳ מייצגת את הערך 6. זה החלק החזק והאמיתי בטענה." },
    { question: "אז למה המסקנה לא מאשרת את הטענה?", answer: "כי הטענה דורשת יותר מדמיון. היא דורשת ראיה שהמעצב או החברה התכוונו ל־666 בעברית. מקור כזה לא נמצא בבדיקה הזאת." },
    { question: "מה היה מחזק את הטענה?", answer: "מסמך עיצובי, ראיון עם המעצב, תיאור רשמי או ראיה ישירה שמראה שהקווים נועדו להיות שלוש ווין ולא M מטפרים." },
  ],
});

export const monsterEnergy666LogoClaimContent = defineClaim({
  ...migratedMonsterEnergy666LogoClaimContent,
  workflow: {
    ...migratedMonsterEnergy666LogoClaimContent.workflow,
    checkedAt: "2026-06-22",
  },
  exhibits: [
    {
      id: "symbol-comparison",
      src: "/claims/monster-energy-666-symbol-comparison.svg",
      alt: "איור מופשט ללא מלל של שלושה סימני טפרים ירוקים לצד שלושה סימנים אנכיים דמויי ו׳",
      title: "דמיון חזותי אינו הוכחת כוונה",
      caption: "האיור מדגים למה הטענה תופסת את העין בלי להשתמש בצילום או בלוגו מסחרי מלא: שלושה סימנים יכולים להזכיר גם טפרים וגם שלוש צורות דומות ל־ו׳. השאלה היא מה ניתן להוכיח מעבר לדמיון.",
      kind: "image",
    },
  ],
  lead: "זו אחת הטענות הוויראליות החזקות כי היא נותנת לקורא רגע של 'רגע, באמת רואים את זה'. שלושה קווים ירוקים, אות עברית אחת, מספר דתי טעון — והסיפור מתחבר מהר. אבל בדיוק כאן צריך להאט: דמיון חזותי יכול להסביר למה טענה תפסה, לא בהכרח להוכיח למה לוגו עוצב.",
  shareCopy: "הלוגו של Monster Energy באמת יכול להזכיר לשלושה אנשים שונים שלושה דברים שונים: M, טפרים, או שלוש צורות דומות לאות ו׳. ו׳ אכן שווה 6 בגימטריה, אבל לא נמצאה ראיה שהלוגו תוכנן בכוונה כ־666 בעברית. זה קייס טוב להבדל בין דמיון חזותי לבין הוכחת כוונה.\nhttps://ai-source-lab.vercel.app/claims/monster-energy-666-logo",
  body: [
    { id: "answer", type: "answer-box", eyebrow: "תשובה קצרה", title: migratedMonsterEnergy666LogoClaimContent.shortAnswer, paragraphs: [migratedMonsterEnergy666LogoClaimContent.bottomLine], variant: "answer" },
    { id: "visual", type: "gallery", title: "למה הטענה תופסת את העין?", source: "claim", exhibitIds: ["symbol-comparison"] },
    { id: "verdict", type: "verdict-grid", items: [
      { label: "הטענה", text: migratedMonsterEnergy666LogoClaimContent.claim },
      { label: "מה כן נכון", text: migratedMonsterEnergy666LogoClaimContent.summaryPoints[0] },
      { label: "מה לא הוכח", text: "לא נמצאה ראיה שהלוגו תוכנן בכוונה כ־666 בעברית או כמסר שטני." },
      { label: "השורה התחתונה", text: migratedMonsterEnergy666LogoClaimContent.bottomLine, emphasis: true },
    ] },
    { id: "logic", type: "logic-chain", title: "איפה הקפיצה הלוגית?", ariaLabel: "שרשרת הטענה על Monster Energy ו־666", steps: [
      "שלושה קווים ירוקים",
      "דמיון אפשרי לאות ו׳",
      "ו׳ שווה 6 בגימטריה",
      "שלוש ווין = 666",
    ], conclusion: "מכאן עדיין לא נובעת כוונה נסתרת", note: "השלבים הראשונים מסבירים למה הטענה משכנעת. השלב האחרון הוא הקפיצה שדורשת ראיה נפרדת." },
    { id: "distinctions", type: "comparison-list", title: "ההבחנה החשובה", items: [
      { label: "דמיון חזותי", text: "אפשר לראות בשלושת הקווים צורות שמזכירות ו׳. זו תצפית, לא הוכחה." },
      { label: "ערך מספרי", text: "ו׳ אכן יכולה לייצג 6 בגימטריה. זה גרעין אמת אמיתי." },
      { label: "כוונת מעצב", text: "כדי לקבוע שהלוגו תוכנן כ־666 צריך מקור עיצובי, תיאור רשמי או ראיה ישירה אחרת." },
      { label: "הסבר חלופי", text: "הלוגו נקרא בדרך כלל כ־M של Monster בסגנון טפרים/שריטות, הסבר שמתאים לשם המותג." },
    ] },
    { id: "evidence", type: "evidence-list", title: "מה בדקנו", numbered: true, items: [
      { id: "vav", title: "האות ו׳ והמספר 6", paragraphs: ["החלק הזה בטענה נכון: בגימטריה עברית האות ו׳ מייצגת את המספר 6. לכן שלוש ווין יכולות ליצור קריאה של 6־6־6."] },
      { id: "viral", title: "הטענה הוויראלית", paragraphs: ["הקשר בין Monster Energy לבין 666 וסמליות שטנית הופץ במיוחד דרך סרטונים נוצריים ויראליים, ובהם הטענה שהלוגו מציג את מספר החיה."] },
      { id: "logo", title: "ההסבר העיצובי", paragraphs: ["במקורות הרקע הלוגו מתואר כ־M ירוקה בשלושה קווים על רקע שחור, בעיצוב שמרמז על טפרים של מפלצת שקורעים את הפחית. זה הסבר פשוט שתואם את שם המותג."] },
      { id: "missing-proof", title: "מה חסר כדי לאשר", paragraphs: ["לא נמצא מקור ישיר שמראה שהמעצב או החברה התכוונו לשלוש ווין בעברית, ל־666 או למסר דתי נסתר. בלי מקור כזה, הדמיון נשאר פרשנות ולא הוכחה."] },
    ] },
    { id: "method", type: "method-note", title: "כלל בדיקה לשימוש חוזר", paragraphs: ["כשבודקים סמלים ויראליים, השאלה אינה רק 'האם אפשר לראות את זה'. כמעט תמיד אפשר למצוא צורות בתוך צורות. השאלה היא מה מחבר בין הדמיון לבין כוונה מוכחת: מסמך, מקור רשמי, ראיון, תהליך עיצוב או ראיה ישירה אחרת."] },
    { id: "faq", type: "faq", title: "שאלות קצרות", source: "claim" },
    { id: "sources", type: "sources", title: "מקורות שנבדקו", source: "claim" },
    { id: "share", type: "copy-share", title: "טקסט קצר לשיתוף", source: "claim" },
  ],
} satisfies ClaimContent);
