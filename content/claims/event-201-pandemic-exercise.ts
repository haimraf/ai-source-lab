import { defineClaim } from "../../lib/content/claim-schema";
import { siteUrl } from "../../lib/site";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedEvent201PandemicExerciseClaimContent = defineMigratedClaimContent({
  slug: "event-201-pandemic-exercise",
  path: "/claims/event-201-pandemic-exercise",
  title: "האם Event 201 מוכיח שתכננו את הקורונה מראש?",
  description: "בדיקה של הטענה שתרגיל Event 201 מאוקטובר 2019 מוכיח שהקורונה תוכננה מראש, מול דף התרגיל הרשמי וההצהרה של Johns Hopkins אחרי פרוץ nCoV.",
  kicker: "תרגילי מגיפה ונרטיבים מוסדיים",
  tags: ["Event 201", "קורונה", "תרגיל מגיפה", "Johns Hopkins", "WEF"],
  verdict: "תרגיל אמיתי — לא ראיה לתכנון COVID-19 מראש",
  cluster: "institutional-narratives",
  updated: "2026-06-23",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה ש-Event 201 מוכיח תכנון מוקדם של הקורונה",
  claim: "Event 201 היה לא רק תרגיל מגיפה, אלא חזרה גנרלית, תחזית מכוונת או תכנון מוקדם של מגפת הקורונה.",
  shortAnswer: "Event 201 היה תרגיל אמיתי — אבל המקורות שנבדקו לא מראים שהוא היה תכנון של COVID-19.",
  bottomLine: "Event 201 היה תרגיל שולחני אמיתי שנערך באוקטובר 2019 ועסק במגפת קורונה בדיונית. זה גרעין אמת חזק ולכן הטענה נשמעת משכנעת. אבל המקורות הרשמיים מתארים אותו כתרחיש לימודי והכשרתי, ו-Johns Hopkins פרסם במפורש שלא מדובר בתחזית או בניבוי של התפרצות nCoV/COVID-19.",
  summaryPoints: [
    "Event 201 אכן התקיים ב-18 באוקטובר 2019 בניו יורק, בשיתוף Johns Hopkins Center for Health Security, World Economic Forum ו-Bill & Melinda Gates Foundation.",
    "התרגיל דימה מגפה היפותטית אך אפשרית מדעית, וכלל דיונים על מדיניות, כלכלה, תקשורת ושיתוף פעולה ציבורי-פרטי.",
    "Johns Hopkins כתב במפורש שהתרחיש היה בדיוני, שהקלטים למידול היו בדיוניים, ושהתרגיל לא היה תחזית.",
    "הדמיון הכללי בין תרגיל מגפה לבין מגפה אמיתית אינו מספיק כדי להוכיח תכנון מוקדם של האירוע האמיתי.",
  ],
  overview: "הטענה מתחילה מגרעין אמת חזק: Event 201 באמת התקיים זמן קצר לפני התפרצות COVID-19, ובאמת עסק בתרחיש של מגפת קורונה. לכן לא נכון לנפנף את החשד בזלזול. אבל השאלה אינה אם היה תרגיל, אלא מה אפשר להסיק ממנו. המקורות הרשמיים מתארים אותו כתרגיל שולחני לימודי שנועד להמחיש פערי מוכנות ושיתוף פעולה בזמן מגפה קשה. הם לא מציגים אותו כתוכנית פעולה להפצת וירוס, ובינואר 2020 Johns Hopkins הבהיר שהתרגיל לא נועד לנבא את nCoV.",
  sources: [
    { id: "event-201-official", title: "Johns Hopkins Center for Health Security — Event 201", url: "https://centerforhealthsecurity.org/our-work/tabletop-exercises/event-201-pandemic-tabletop-exercise", level: "primary", note: "דף התרגיל הרשמי. מתאר את Event 201 כתרגיל שולחני על תרחיש בדיוני, שנועד להמחיש אתגרי מוכנות ושיתוף פעולה בזמן מגפה קשה." },
    { id: "event-201-statement-ncov", title: "Johns Hopkins — Statement about nCoV and our pandemic exercise", url: "https://centerforhealthsecurity.org/2020/statement-about-ncov-and-our-pandemic-exercise", level: "primary", note: "הצהרה רשמית מ-24 בינואר 2020 שמבהירה שהתרגיל לא היה תחזית, שהתרחיש היה בדיוני, ושקלטי המידול לא היו דומים ל-nCoV-2019." },
    { id: "wef-event-201-press", title: "World Economic Forum — Live Simulation Exercise to Prepare Public and Private Leaders for Pandemic Response", url: "https://www.weforum.org/press/2019/10/live-simulation-exercise-to-prepare-public-and-private-leaders-for-pandemic-response/", level: "official", note: "הודעת WEF לפני האירוע. מתארת את התרגיל כסימולציה היפותטית שנועדה לקדם מוכנות ושיתוף פעולה ציבורי-פרטי." },
  ],
  faq: [
    { question: "האם Event 201 באמת התרחש לפני הקורונה?", answer: "כן. התרגיל התקיים ב-18 באוקטובר 2019 בניו יורק, כמה חודשים לפני שהעולם הכיר את COVID-19." },
    { question: "האם התרגיל באמת עסק בקורונה?", answer: "כן, אבל בקורונה בדיונית. זה גרעין האמת של הטענה: היה תרגיל אמיתי על מגפת קורונה אפשרית. השאלה היא האם מזה נובע שתוכננה מגפה אמיתית." },
    { question: "איפה מתרחשת הקפיצה הלוגית?", answer: "הקפיצה מתרחשת כשעוברים מ-היה תרגיל מוכנות על תרחיש קורונה ל-התרגיל היה תכנון או חזרה גנרלית ל-COVID-19. בשביל זה צריך מקור ישיר שמראה פעולה, הוראה או ידע מוקדם, ולא רק דמיון בין תרחיש לאירוע אמיתי." },
    { question: "האם מותר לבקר את Event 201 ואת המשתתפים בו?", answer: "כן. אפשר לבקר את המעורבות של גופים פרטיים, פורומים גלובליים, חברות וקרנות בדיוני מדיניות בריאות. אבל ביקורת על השפעה או על מסגור אינה הוכחה לכך שהמגפה תוכננה מראש." },
    { question: "מה היה מחזק את הטענה?", answer: "מסמך, תיעוד פעולה, הוראה, הודאה או מקור ישיר שמחבר בין התרגיל לבין יצירה, הפצה או ניהול מכוון של COVID-19 לפני ההתפרצות. מקור כזה לא נמצא בבדיקה הזאת." },
  ],
});

export const event201PandemicExerciseClaimContent = defineClaim({
  ...migratedEvent201PandemicExerciseClaimContent,
  workflow: {
    ...migratedEvent201PandemicExerciseClaimContent.workflow,
    checkedAt: "2026-06-23",
  },
  lead: "Event 201 הוא קייס קלאסי שבו עובדה אמיתית הופכת מהר למסקנה גדולה מדי: כן, היה תרגיל מגפה לפני COVID-19. כן, הוא עסק בנגיף קורונה בדיוני. אבל מכאן ועד הוכחה שהמגפה תוכננה מראש יש קפיצה שצריך לבדוק מול המקור.",
  shareCopy: `Event 201 באמת היה תרגיל מגפה שנערך באוקטובר 2019, והוא באמת עסק בתרחיש בדיוני של נגיף קורונה. אבל לפי הדף הרשמי וההצהרה של Johns Hopkins מינואר 2020, זה היה תרגיל שולחני ללמידה ומוכנות, לא תחזית ולא ראיה לתכנון COVID-19 מראש. הגרעין נכון; המסקנה הוויראלית לא הוכחה.
${siteUrl}/claims/event-201-pandemic-exercise`,
  body: [
    {
      id: "short-answer",
      type: "answer-box",
      eyebrow: "תשובה קצרה",
      title: "תרגיל אמיתי — לא ראיה לתכנון COVID-19 מראש.",
      paragraphs: [
        migratedEvent201PandemicExerciseClaimContent.bottomLine,
      ],
      variant: "answer",
    },
    {
      id: "verdict",
      type: "verdict-grid",
      items: [
        { label: "הטענה", text: migratedEvent201PandemicExerciseClaimContent.claim },
        { label: "מה כן נכון", text: "התרגיל התקיים לפני COVID-19 ועסק בתרחיש של נגיף קורונה בדיוני." },
        { label: "מה לא נמצא", text: "לא נמצא מקור רשמי שמציג את התרגיל כתוכנית להפצת וירוס, כהוראה מבצעית או כחזרה גנרלית ל-COVID-19." },
        { label: "מסקנה", text: migratedEvent201PandemicExerciseClaimContent.verdict, emphasis: true },
      ],
    },
    {
      id: "evidence",
      type: "evidence-list",
      title: "מה המקורות מראים?",
      numbered: true,
      items: [
        {
          id: "official-exercise",
          title: "התרגיל הרשמי מתואר כתרחיש בדיוני",
          paragraphs: [
            "בדף הרשמי של Johns Hopkins נכתב שהתרגיל מבוסס על תרחיש בדיוני, עם קלטים בדיוניים למידול ההשפעה האפשרית. מטרתו הייתה ללמד ולהכשיר גורמי בריאות וממשל.",
            "זה מחזק את החלק העובדתי: כן, היה תרגיל. אבל הוא גם מגביל את המסקנה: המקור מתאר סימולציה, לא תיעוד של פעולה אמיתית.",
          ],
        },
        {
          id: "statement-after-ncov",
          title: "אחרי פרוץ nCoV פורסמה הבהרה רשמית",
          paragraphs: [
            "בינואר 2020 פרסם המרכז הצהרה בעקבות שאלות על הדמיון בין התרגיל לבין ההתפרצות בסין. ההצהרה אומרת במפורש שהתרגיל לא היה תחזית.",
            "זה מקור מפתח כי הוא מתייחס בדיוק לטענה הוויראלית: האם התרגיל ניבא את הקורונה. לפי המרכז, לא.",
          ],
        },
        {
          id: "wef-framing",
          title: "גם WEF הציג את האירוע כסימולציית מוכנות",
          paragraphs: [
            "הודעת WEF מאוקטובר 2019 הציגה את Event 201 כסימולציה שתפגיש מנהיגים ציבוריים ופרטיים סביב תרחיש מגפה היפותטי.",
            "אפשר לבקר את המסגור, את המשתתפים או את ההמלצות. אבל עצם קיום סימולציה אינו ראיה מספקת לתכנון מגפה אמיתית.",
          ],
        },
      ],
    },
    {
      id: "logic-jump",
      type: "logic-chain",
      title: "איפה מתרחשת הקפיצה?",
      ariaLabel: "שרשרת הקפיצה הלוגית בטענת Event 201",
      steps: [
        "היה תרגיל מגפה אמיתי",
        "התרגיל עסק בקורונה בדיונית",
        "אחרי כמה חודשים הופיעה מגפת COVID-19",
      ],
      conclusion: "לכן המגפה תוכננה מראש",
      note: "השלבים הראשונים נכונים או קרובים לנכון. המסקנה האחרונה דורשת ראיה ישירה לפעולה, הוראה או ידע מוקדם — ולא נמצאה ראיה כזאת במקורות שנבדקו.",
    },
    {
      id: "what-not-found",
      type: "comparison-list",
      title: "מה כן נכון ומה לא הוכח?",
      items: [
        { label: "כן נכון", text: "Event 201 היה תרגיל מגפה אמיתי, ציבורי ומתועד.", tone: "supports" },
        { label: "כן נכון", text: "התרחיש כלל נגיף קורונה בדיוני והשלכות כלכליות וחברתיות רחבות.", tone: "supports" },
        { label: "לא הוכח", text: "שהתרגיל היה הוראה מבצעית, תכנון להפצת וירוס או חזרה גנרלית ל-COVID-19.", tone: "contradicts" },
        { label: "לא הוכח", text: "שהמשתתפים ידעו מראש על התפרצות אמיתית שתקרה חודשים אחר כך.", tone: "contradicts" },
        { label: "השורה", text: "תרגיל מוכנות יכול להיות אמיתי, מטריד או ראוי לביקורת — ועדיין לא להוכיח תכנון מוקדם של מגפה אמיתית.", tone: "caution", emphasis: true },
      ],
    },
    {
      id: "method-note",
      type: "method-note",
      title: "הערת מתודולוגיה",
      paragraphs: [
        "תרגילי חירום נועדו לדמות אירועים קשים לפני שהם קורים. לכן עצם הדמיון בין תרגיל לבין אירוע אמיתי אינו מפתיע בהכרח. השאלה היא האם יש מקור שמראה מעבר מסימולציה לפעולה.",
      ],
    },
    { id: "faq", type: "faq", title: "שאלות נפוצות", source: "claim" },
    { id: "copy", type: "copy-share", title: "תגובה קצרה להעתקה", source: "claim" },
    { id: "sources", type: "sources", title: "מקורות ישירים", source: "claim" },
  ],
});
