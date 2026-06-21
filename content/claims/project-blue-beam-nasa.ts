import type { ClaimContent } from "../../lib/content/claim-schema";
import { defineMigratedClaimContent } from "./define-migrated-claim";

export const projectBlueBeamNasaClaimContent = defineMigratedClaimContent({
  slug: "project-blue-beam-nasa",
  path: "/claims/project-blue-beam-nasa",
  title: "האם Project Blue Beam הוא תוכנית רשמית של NASA?",
  description: "בדיקה של הטענה ש־Project Blue Beam הוא פרויקט רשמי של NASA או האו״ם לזיוף פלישת חוצנים או התגלות דתית לצורך סדר עולמי חדש.",
  kicker: "חוצנים וסדר עולמי",
  tags: ["חוצנים", "NASA", "האו״ם", "סדר עולמי", "מקור רשמי"],
  verdict: "לא נמצא מקור רשמי של NASA או האו״ם",
  cluster: "institutional-narratives",
  updated: "2026-06-20",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה ש-Project Blue Beam הוא תוכנית רשמית של NASA",
  claim: "Project Blue Beam הוא פרויקט אמיתי של NASA/האו״ם לזיוף פלישת חוצנים או התגלות דתית.",
  shortAnswer: "לא נמצא מקור רשמי של NASA או האו״ם לתוכנית כזו.",
  bottomLine: "לא נמצא מקור רשמי שמאשר את זה.",
  summaryPoints: [
    "יש נרטיב מוכר בשם הזה, והוא חוזר ברשת סביב אירועי עב״מים, רחפנים ואורות בשמיים.",
    "מ”מונאסט כתב ש־NASA מעורבת” ל”NASA מפעילה תוכנית אמיתית”.",
  ],
  overview: "Project Blue Beam מוכר בעיקר כנרטיב קונספירטיבי שמיוחס לסרז׳ מונאסט משנות ה־90. הוא מזכיר את NASA והאו״ם בתוך הסיפור, אבל נכון לבדיקה הזו לא נמצא מסמך רשמי של NASA או של האו״ם שמציג את Project Blue Beam כתוכנית אמיתית.",
  sources: [
    { id: "nasa-search", title: "NASA Search: Project Blue Beam", url: "https://search.nasa.gov/search?affiliate=nasa&query=%22Project%20Blue%20Beam%22", level: "official", note: "חיפוש מדויק באתר NASA לביטוי Project Blue Beam. נכון למועד הבדיקה לא נמצא מקור רשמי שמציג את הביטוי כתוכנית של NASA." },
    { id: "un-search", title: "United Nations Search: Project Blue Beam", url: "https://search.un.org/results.php?query=%22Project%20Blue%20Beam%22", level: "official", note: "חיפוש מדויק באתר האו״ם לביטוי Project Blue Beam. נכון למועד הבדיקה לא נמצא מקור רשמי שמחבר את הטענה לאו״ם." },
    { id: "serge-monast", title: "Serge Monast — background profile", url: "https://en.wikipedia.org/wiki/Serge_Monast", level: "context", note: "מקור רקע על סרז׳ מונאסט, שמזוהה עם הפצת הטענה בשנות ה־90. זה מקור רקע, לא מקור רשמי של NASA או האו״ם." },
    { id: "blue-beam-theory", title: "Projet Blue Beam — summary of the theory", url: "https://fr.wikipedia.org/wiki/Projet_Blue_Beam", level: "context", note: "רקע כללי על מבנה התיאוריה: הולוגרמות, דמויות דתיות, פלישת חוצנים וסדר עולמי חדש. לא מסמך רשמי." },
    { id: "guardian-drones", title: "The Guardian: drones and renewed Blue Beam claims", url: "https://www.theguardian.com/us-news/2024/dec/17/drones-new-jersey-fbi", level: "secondary", note: "דוגמה עדכנית לאופן שבו הטענה חוזרת ברשת סביב אירועי רחפנים ואורות בשמיים. רלוונטי להפצה, לא להוכחת הטענה." },
    { id: "project-blue-book", title: "Project Blue Book — real U.S. Air Force UFO study", url: "https://en.wikipedia.org/wiki/Project_Blue_Book", level: "context", note: "רקע על פרויקט אמיתי בעל שם דומה: Project Blue Book של חיל האוויר האמריקאי. חשוב להפרדה בין פרויקט היסטורי אמיתי לבין Blue Beam." },
  ],
  faq: [
    { question: "אז Project Blue Beam לא קיים בכלל?", answer: "הנרטיב קיים. אנשים מדברים עליו, מפיצים אותו, ויש מקורות רקע על מקורו. מה שלא נמצא כאן הוא מקור רשמי שמראה שזו תוכנית אמיתית של NASA או האו״ם." },
    { question: "האם זה מוכיח שאין טכנולוגיות סודיות?", answer: "לא. זו לא הבדיקה. הבדיקה כאן צרה: האם הטענה הספציפית על Project Blue Beam כתוכנית NASA/UN מגובה במסמך רשמי." },
    { question: "למה הטענה חוזרת כל פעם שיש אורות או רחפנים?", answer: "כי היא נותנת מסגרת דרמטית לאירוע לא ברור: לא “אנחנו לא יודעים עדיין”, אלא “זה חלק מתוכנית ענק”. זה אנושי ומושך, אבל לא מחליף מקור." },
    { question: "מה יגרום לעדכן את המסקנה?", answer: "מסמך רשמי, ארכיון ממשלתי, תיעוד מקורי או מקור אמין שמפנה למסמך כזה. אם מקור כזה יופיע, המסקנה תעודכן." },
  ],
}) satisfies ClaimContent;
