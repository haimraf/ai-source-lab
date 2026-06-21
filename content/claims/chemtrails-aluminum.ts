import type { ClaimContent } from "../../lib/content/claim-schema";
import { defineMigratedClaimContent } from "./define-migrated-claim";

export const chemtrailsAluminumClaimContent = defineMigratedClaimContent({
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
}) satisfies ClaimContent;
