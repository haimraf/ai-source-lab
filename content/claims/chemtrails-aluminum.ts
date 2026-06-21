import { defineClaim, type ClaimContent } from "../../lib/content/claim-schema";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedChemtrailsAluminumClaimContent = defineMigratedClaimContent({
  slug: "chemtrails-aluminum",
  path: "/claims/chemtrails-aluminum",
  title: "האם מטוסים מרססים אלומיניום?",
  description: "בדיקה מול FAA, EPA ושירות מזג האוויר האמריקאי לטענה שהפסים הלבנים ממטוסים הם ריסוס אלומיניום.",
  kicker: "שובלי מטוסים",
  tags: ["Chemtrails", "אלומיניום", "Contrails", "שמיים", "FAA"],
  verdict: "לא נמצאה ראיה שמקשרת שובלי טיסות רגילות לריסוס אלומיניום",
  cluster: "sky-climate",
  updated: "2026-06-18",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה שמטוסים מרססים אלומיניום",
  claim: "הפסים הלבנים הם ריסוס מכוון של אלומיניום וחומרים נוספים.",
  shortAnswer: "פס לבן בשמיים אינו ראיה לריסוס אלומיניום",
  bottomLine: "לא נמצאה ראיה שמקשרת שובלי טיסות רגילות לריסוס כזה.",
  summaryPoints: [
    "מטוסים פולטים גזים וחלקיקים, ושובלים מסוימים נשארים בשמיים זמן רב.",
    "מפס שנשאר בשמיים למסקנה על חומר מסוים ותוכנית מכוונת.",
  ],
  overview: "שובלי מטוסים יכולים להישאר זמן רב כאשר התנאים בגובה מתאימים. כדי להוכיח ריסוס אלומיניום צריך דגימה מבוקרת, מקור חומר, תיעוד פעולה וקשר לטיסה מסוימת. בבדיקה מול מקורות רשמיים לא נמצא קשר כזה.",
  sources: [
    { id: "faa-contrails", title: "FAA: Contrails", url: "https://www.faa.gov/contrails", level: "official", note: "הסבר רשמי על היווצרות שובלי התעבות, משך חייהם, פליטות מנוע ופעולות פיזור מכוונות." },
    { id: "epa-contrails", title: "EPA: Information on Contrails from Aircraft", url: "https://www.epa.gov/regulations-emissions-vehicles-and-engines/Contrails", level: "official", note: "הסבר סביבתי על שובלים, פליטות מטוסים והטענה המכונה chemtrails." },
    { id: "nws-clouds-contrails", title: "National Weather Service: Clouds and Contrails", url: "https://www.weather.gov/fgz/CloudsContrails", level: "official", note: "הסבר מטאורולוגי על לחות בגובה, הישארות שובלים ודפוסים מצטלבים." },
    { id: "faa-epa-fact-sheet", title: "FAA and EPA: Contrails Fact Sheet", url: "https://www.faa.gov/contrails/fact-sheet", level: "official", note: "דף מידע משותף של סוכנויות אמריקאיות על שובלי התעבות וטענות לריסוס מכוון." },
  ],
  faq: [
    { question: "למה פעם השובל נעלם ופעם נשאר?", answer: "ההבדל תלוי בעיקר בטמפרטורה ובלחות בגובה הטיסה. התנאים שם יכולים להיות שונים מאוד ממה שמרגישים על הקרקע." },
    { question: "האם הרשויות מכחישות כל פיזור ממטוסים?", answer: "לא. ה-FAA מפריד במפורש בין שובלי התעבות לבין פעולות כמו חקלאות, כיבוי אש וזריעת עננים." },
    { question: "אז אין שום זיהום ממטוסים?", answer: "יש פליטות ממנועי מטוסים ויש להן השפעות סביבתיות. זו טענה שונה מריסוס מכוון של אלומיניום באמצעות טיסות רגילות." },
    { question: "איזו ראיה הייתה משנה את המסקנה?", answer: "מסמכי הפעלה מאומתים, דגימות מבוקרות שמקושרות לטיסה מסוימת, ציוד פיזור מתועד או חקירה עצמאית שמציגה שרשרת ראיות מלאה." },
  ],
});

export const chemtrailsAluminumClaimContent = defineClaim({
  ...migratedChemtrailsAluminumClaimContent,
  lead: "הפסים הלבנים מאחורי מטוסים מוסברים במקורות התעופה ומזג האוויר כשובלי התעבות. הם יכולים להיעלם תוך דקות או להישאר שעות ולהתרחב. במקורות הרשמיים שנבדקו לא נמצא בסיס לטענה שטיסות רגילות מפזרות אלומיניום על האוכלוסייה.",
  shareCopy: "הפסים הלבנים שמטוסים משאירים יכולים להישאר ולהתרחב כשהאוויר בגובה קר ולח. FAA, EPA ושירות מזג האוויר מסבירים אותם כשובלי התעבות. לא נמצא אצלם בסיס לטענה שטיסות רגילות מרססות אלומיניום על האוכלוסייה.\nhttps://ai-source-lab.vercel.app/claims/chemtrails-aluminum",
  body: [
    { id: "answer", type: "answer-box", eyebrow: "תשובה קצרה", title: migratedChemtrailsAluminumClaimContent.shortAnswer, paragraphs: migratedChemtrailsAluminumClaimContent.sections[0].paragraphs, variant: "answer" },
    { id: "verdict", type: "verdict-grid", items: [
      { label: "הטענה", text: migratedChemtrailsAluminumClaimContent.claim },
      { label: "השורה התחתונה", text: migratedChemtrailsAluminumClaimContent.bottomLine, emphasis: true },
      { label: "מה כן נכון", text: migratedChemtrailsAluminumClaimContent.summaryPoints[0] },
      { label: "איפה הסיפור קופץ", text: migratedChemtrailsAluminumClaimContent.summaryPoints[1] },
    ] },
    { id: "claim-table", type: "comparison-list", title: "טבלת הטענה", items: [
      { label: "מה נטען:", text: "שובלי המטוסים הם ריסוס אלומיניום מכוון." },
      { label: "מה המקורות אומרים:", text: "שובלים נוצרים מתנאי קור ולחות בגובה ומפליטות רגילות של מנועי סילון." },
      { label: "מה נמצא:", text: "נמצאו הסברים לשובלים מתמשכים; לא נמצאה ראיה לריסוס אלומיניום מטיסות רגילות." },
      { label: "מה המסקנה:", text: "המראה בשמיים לבדו אינו מוכיח חומר, מקור או כוונה." },
    ] },
    { id: "sixty-seconds", type: "method-note", title: "גרסת 60 שניות", paragraphs: ["שובלי מטוסים הם תופעה אמיתית: אדי מים ותוצרי בעירה בגובה רב יכולים לקפוא ולהפוך לפסים לבנים. בתנאים מסוימים השובל נשאר שעות, מתרחב ונראה כמו עננות. זה עדיין לא מוכיח אלומיניום או ריסוס מכוון. כדי להוכיח את הטענה צריך שרשרת ראיות מלאה שמחברת דגימה, חומר, זמן, מקום וטיסה מסוימת. במקורות שנבדקו לא נמצאה שרשרת כזאת."] },
    { id: "contrail", type: "paragraph-section", title: "מהו שובל התעבות?", paragraphs: ["מנוע סילון פולט אדי מים ותוצרי בעירה. בגובה רב האוויר קר מאוד. כאשר התנאים מתאימים, אדי המים מתעבים וקופאים סביב חלקיקים זעירים ונוצר פס של גבישי קרח. באנגלית הוא נקרא condensation trail, או בקיצור contrail."] },
    { id: "evidence", type: "evidence-list", numbered: true, items: [
      { id: "persistent", number: "01", title: "שובל יכול להישאר שעות", paragraphs: ["כאשר האוויר בגובה קר ולח מאוד, השובל אינו חייב להיעלם מיד. הוא יכול להתרחב, לנוע עם הרוח ולהיראות כמו עננות דקה."] },
      { id: "segments", number: "02", title: "הפס יכול להתחיל ולהפסיק בפתאומיות", paragraphs: ["מטוס יכול להיכנס ולצאת מאזורים בלתי נראים שבהם הלחות שונה. לכן שובל עשוי להופיע בקטעים בלי שהמטוס שינה את המנוע או פיזר חומר."] },
      { id: "emissions", number: "03", title: "יש פליטות מנוע, אבל זו לא אותה טענה", paragraphs: ["מנועי סילון פולטים פחמן דו-חמצני, אדי מים וכמויות קטנות של תוצרי בעירה נוספים. עצם קיומן של פליטות אינו מוכיח פיזור מכוון של אלומיניום."] },
      { id: "dispersion", number: "04", title: "קיימות פעולות פיזור אמיתיות ממטוסים", paragraphs: ["חקלאות, כיבוי אש וזריעת עננים הן פעולות מוכרות. הן נעשות למטרות מוגדרות ואינן מסבירות אוטומטית שובלים של טיסות מסחריות בגובה רב."] },
    ] },
    { id: "dust", type: "paragraph-section", title: "ומה לגבי אבק או אלומיניום בבדיקה?", paragraphs: ["מציאת מתכת באבק, בקרקע או במסנן אינה מספיקה כדי לקבוע שמקורה במטוס. אלומיניום נפוץ מאוד בקרום כדור הארץ ובאבק סביבתי. כדי לקשור ממצא לריסוס צריך שרשרת ראיות: דגימה מבוקרת, שיטת מעבדה גלויה, נקודת השוואה, זמן ומקום, ולבסוף קשר ברור למטוס או למקור פליטה מסוים."] },
    { id: "observations", type: "comparison-list", items: [
      { label: "פס לבן שנשאר זמן רב:", text: "מתאים גם לשובל התעבות מתמשך." },
      { label: "פסים מצטלבים:", text: "יכולים להיווצר מנתיבי טיסה, דפוסי המתנה ורוחות בגבהים שונים." },
      { label: "אבק על רכב:", text: "לא מזהה את החומר, המקור או המסלול שבו הגיע." },
      { label: "פעולות לשינוי מזג אוויר:", text: "קיימות, אבל אינן הוכחה שכל שובל הוא ריסוס." },
    ] },
    { id: "logic", type: "logic-chain", title: "שרשרת הטענה", steps: ["יש פסים לבנים אמיתיים", "חלקם נשארים שעות", "יש בעולם פעולות פיזור ממטוסים"], conclusion: "לכן טיסות רגילות מרססות אלומיניום על האוכלוסייה", note: "שלושת החלקים הראשונים יכולים להיות נכונים. המסקנה האחרונה דורשת ראיה נפרדת, והיא לא נמצאה במקורות שנבדקו." },
    { id: "faq", type: "faq", title: "שאלות נפוצות", source: "claim" },
    { id: "share", type: "copy-share", title: "תגובה קצרה להעתקה", source: "claim" },
    { id: "sources", type: "sources", title: "המקורות שנבדקו", source: "claim" },
    { id: "method", type: "method-note", title: "איך נבדקה הטענה?", paragraphs: ["הבדיקה הפרידה בין ארבעה נושאים: היווצרות שובלים, פליטות מנוע, פיזור מכוון ממטוסים והטענה המסוימת על אלומיניום. המסקנה מתייחסת רק לקשר שלא הוכח בין שובלי טיסות רגילות לריסוס מכוון של אוכלוסייה."] },
  ],
  structuredData: { mode: "configured", entries: [{ type: "article", placement: "page", headline: migratedChemtrailsAluminumClaimContent.title, description: "בדיקה מול מקורות רשמיים לטענה ששובלי מטוסים הם ריסוס מכוון של אלומיניום.", datePublished: "2026-06-18", dateModified: "2026-06-18", inLanguage: "he-IL" }] },
  metadataOverrides: { title: "האם מטוסים מרססים אלומיניום? | מקור בדיקה", description: migratedChemtrailsAluminumClaimContent.description, canonical: migratedChemtrailsAluminumClaimContent.path },
  workflow: { ...migratedChemtrailsAluminumClaimContent.workflow, credits: [{ id: "haim-rafael", name: "חיים רפאל", role: "author" }] },
} satisfies ClaimContent);
