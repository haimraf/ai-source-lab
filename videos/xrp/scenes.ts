export type XrpScene = {
  id: string;
  kind: "hook" | "evidence" | "logic" | "verdict" | "close";
  durationInFrames: number;
  eyebrow: string;
  title: string;
  body: string;
  narration: string;
  sourceLabel?: string;
  sourceUrl?: string;
};

export const FPS = 30;
export const TOTAL_FRAMES = 1800;

export const xrpScenes: XrpScene[] = [
  {
    id: "hook",
    kind: "hook",
    durationInFrames: 210,
    eyebrow: "בדיקת טענה",
    title: "האם XRP נבחר להיות המטבע העולמי?",
    body: "הטענה נשמעת שוב ושוב. חיפשנו את ההחלטה הרשמית שמאחוריה.",
    narration:
      "האם אקס־אר־פי נבחר להיות המטבע העולמי? הטענה הזאת מופיעה שוב ושוב, אבל מה אומרים המקורות הרשמיים?",
  },
  {
    id: "xrp-use",
    kind: "evidence",
    durationInFrames: 300,
    eyebrow: "מה כן נכון",
    title: "ל-XRP יש שימוש אמיתי",
    body: "Ripple ו-XRP Ledger מתארים נכס לתשלומים שיכול לגשר בין מטבעות.",
    narration:
      "ראשית, לאקס־אר־פי יש שימוש אמיתי. ריפל והתיעוד של אקס־אר־פי לדג'ר מתארים נכס לתשלומים שיכול לגשר בין מטבעות.",
    sourceLabel: "XRP Ledger: About XRP",
    sourceUrl: "https://xrpl.org/about/xrp",
  },
  {
    id: "iso-standard",
    kind: "evidence",
    durationInFrames: 360,
    eyebrow: "המקור הרשמי",
    title: "ISO 20022 הוא תקן למסרים",
    body: "התקן מגדיר כיצד מערכות פיננסיות מחליפות מידע. הוא אינו מאשר מטבעות.",
    narration:
      "אבל תקן איי־אס־או שמספרו עשרים אלף עשרים ושתיים הוא תקן למסרים פיננסיים. הוא מגדיר איך מערכות מחליפות מידע. הוא לא בוחר ולא מאשר מטבע עולמי.",
    sourceLabel: "ISO 20022: About the Standard",
    sourceUrl: "https://www.iso20022.org/about-iso-20022",
  },
  {
    id: "sdr-basket",
    kind: "evidence",
    durationInFrames: 330,
    eyebrow: "בדיקת רזרבה",
    title: "XRP אינו חלק מסל ה-SDR",
    body: "קרן המטבע מפרטת חמישה מטבעות בסל. XRP אינו אחד מהם.",
    narration:
      "גם סל זכויות המשיכה המיוחדות של קרן המטבע לא כולל אקס־אר־פי. הוא מבוסס על חמישה מטבעות מדינתיים, ואקס־אר־פי אינו אחד מהם.",
    sourceLabel: "IMF: Special Drawing Rights",
    sourceUrl:
      "https://www.imf.org/en/about/factsheets/sheets/2023/special-drawing-rights-sdr",
  },
  {
    id: "logic-leap",
    kind: "logic",
    durationInFrames: 330,
    eyebrow: "הקפיצה הלוגית",
    title: "שימוש אפשרי אינו בחירה רשמית",
    body: "תשלומים + גישור + תקן מסרים ≠ מטבע עולמי שנבחר בהחלטה רשמית.",
    narration:
      "כאן מתרחשת הקפיצה. שימוש בתשלומים, יכולת לגשר בין מטבעות ותקן מסרים אמיתי, אינם הוכחה לבחירה רשמית במטבע עולמי.",
  },
  {
    id: "verdict",
    kind: "verdict",
    durationInFrames: 270,
    eyebrow: "המסקנה",
    title: "לא נמצא מקור רשמי לטענה",
    body: "את שרשרת המקורות המלאה אפשר לבדוק באתר מקור בדיקה.",
    narration:
      "המסקנה: לא נמצא מקור רשמי לכך שאקס־אר־פי נבחר להיות מטבע עולמי או מטבע רזרבה. את כל המקורות אפשר לפתוח ולבדוק במקור בדיקה.",
  },
];
