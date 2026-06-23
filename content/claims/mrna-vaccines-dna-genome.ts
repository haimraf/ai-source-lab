import { defineClaim } from "../../lib/content/claim-schema";
import { siteUrl } from "../../lib/site";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedMrnaVaccinesDnaGenomeClaimContent = defineMigratedClaimContent({
  slug: "mrna-vaccines-dna-genome",
  path: "/claims/mrna-vaccines-dna-genome",
  title: "האם חיסון mRNA משנה את ה-DNA או הגנום?",
  description: "בדיקה צרה לטענה שחיסוני mRNA משנים DNA: מה mRNA עושה בתא, איפה נמצא ה-DNA, ומה המקורות הרשמיים כן ולא אומרים.",
  kicker: "בריאות וטכנולוגיה",
  tags: ["mRNA", "DNA", "חיסונים", "גנטיקה", "בריאות ציבורית"],
  verdict: "לפי מקורות רפואיים רשמיים: חיסוני mRNA לא נכנסים לגרעין התא ולא משנים את ה-DNA",
  cluster: "institutional-narratives",
  updated: "2026-06-23",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה שחיסוני mRNA משנים DNA",
  claim: "חיסוני mRNA משנים את ה-DNA או את הגנום של האדם ולכן הם בעצם שינוי גנטי קבוע.",
  shortAnswer: "לא לפי המקורות הרשמיים שנבדקו. mRNA פועל מחוץ לגרעין התא, מתפרק לאחר השימוש, ולא נכנס למקום שבו נמצא ה-DNA.",
  bottomLine: "הגרעין האמיתי הוא שחיסון mRNA אכן מכניס לתא הוראה זמנית לייצור חלבון. אבל לפי CDC ומקורות רשמיים נוספים, הוא אינו נכנס לגרעין התא שבו נמצא ה-DNA, אינו מתקשר עם ה-DNA, והתא מפרק את ה-mRNA לאחר השימוש. זה לא מוכיח או אומר שהטכנולוגיה משנה את הגנום.",
  summaryPoints: [
    "מה כן נכון: mRNA הוא חומר גנטי מסוג RNA שנושא הוראה זמנית לתא לייצר חלבון מסוים.",
    "מה לא נמצא: מקור רשמי שמראה שחיסוני mRNA משנים את DNA האדם או משתלבים בגנום.",
    "הקפיצה: מעבר מ'יש חומר גנטי בשם RNA' ל'זה משנה את ה-DNA'.",
    "העמוד בודק טענה על מנגנון ו-DNA בלבד. הוא לא נותן המלצה רפואית בעד או נגד חיסון.",
  ],
  overview: "הטענה נשמעת מדעית כי היא משתמשת במילים אמיתיות: mRNA, DNA, גנים וגנום. אבל בדיקה טובה צריכה להפריד בין חומר גנטי מסוג RNA שנכנס זמנית לציטופלזמה של התא, לבין שינוי קבוע של DNA בתוך גרעין התא. המקורות הרשמיים שנבדקו לא תומכים בקפיצה הזאת.",
  sources: [
    {
      id: "cdc-covid-vaccine-basics",
      title: "CDC — COVID-19 Vaccine Basics",
      url: "https://www.cdc.gov/covid/vaccines/how-they-work.html",
      level: "official",
      note: "המקור המרכזי: CDC מסביר שחיסוני COVID-19 אינם משפיעים או מתקשרים עם DNA, ושחיסוני mRNA אינם נכנסים לגרעין התא שבו נמצא ה-DNA.",
    },
    {
      id: "nci-covid-vaccines-cancer",
      title: "National Cancer Institute — COVID-19 Vaccines and People with Cancer",
      url: "https://www.cancer.gov/about-cancer/coronavirus/covid-19-vaccines-people-with-cancer",
      level: "official",
      note: "מקור רשמי נוסף שמנסח בפשטות שאין ראיה שחיסוני COVID-19 גורמים לסרטן או משנים DNA.",
    },
    {
      id: "cdc-vaccine-development-monitoring",
      title: "CDC — COVID-19 vaccine development, authorization and safety monitoring",
      url: "https://www.cdc.gov/covid/vaccines/how-they-work.html#cdc_generic_section_5-about-developing-covid-19-vaccines",
      level: "official",
      note: "רקע על תהליך האישור, הניטור וההקשר הרגולטורי. אינו מקור לטענה על DNA בפני עצמו, אלא למסגרת הבדיקה הרשמית.",
    },
  ],
  faq: [
    {
      question: "אז mRNA הוא חומר גנטי?",
      answer: "כן. mRNA הוא מולקולת RNA שנושאת הוראות לייצור חלבון. זה הגרעין האמיתי של הטענה. אבל RNA שמוביל הוראה זמנית אינו אותו דבר כמו שינוי DNA קבוע בגנום.",
    },
    {
      question: "איפה נמצא ה-DNA לעומת איפה פועל ה-mRNA?",
      answer: "ה-DNA נמצא בגרעין התא. לפי CDC, חיסוני mRNA אינם נכנסים לגרעין התא. הם פועלים מחוץ לגרעין, מלמדים את התא לייצר חלבון, ואז ה-mRNA מפורק ומוסר מהגוף.",
    },
    {
      question: "האם זה אומר שאין בכלל שאלות לגיטימיות על חיסונים?",
      answer: "לא. אפשר לשאול שאלות על יעילות, תופעות לוואי, מדיניות ציבורית ושקיפות. העמוד הזה בודק רק טענה אחת צרה: האם mRNA משנה DNA או גנום.",
    },
    {
      question: "האם זו עצה רפואית?",
      answer: "לא. זו בדיקת מקור וטענה על מנגנון ביולוגי. החלטות רפואיות אישיות צריך לקבל עם רופא או מקור רפואי מוסמך, במיוחד כשיש מצב רפואי אישי.",
    },
    {
      question: "איזו ראיה הייתה מחזקת את הטענה?",
      answer: "מקור ראשוני, רגולטורי או מחקרי שמראה שחיסון mRNA נכנס לגרעין התא, משתלב ב-DNA האנושי ומשנה את הגנום באופן קבוע. זה לא נמצא במקורות שנבדקו כאן.",
    },
  ],
});

export const mrnaVaccinesDnaGenomeClaimContent = defineClaim({
  ...migratedMrnaVaccinesDnaGenomeClaimContent,
  lead: "הטענה ש-mRNA משנה DNA נשמעת חזקה כי היא מערבבת מושגים אמיתיים: RNA, DNA, גנטיקה וחיסונים. אבל השאלה המדויקת היא לא אם mRNA הוא חומר גנטי, אלא האם חיסון mRNA נכנס לגרעין התא ומשנה את ה-DNA. לפי המקורות הרשמיים שנבדקו כאן — לא.",
  shareCopy: `mRNA הוא חומר גנטי מסוג RNA, אבל זה לא אומר שחיסון mRNA משנה את ה-DNA. לפי CDC, החיסון לא נכנס לגרעין התא שבו נמצא ה-DNA, לא מתקשר עם ה-DNA, והתא מפרק את ה-mRNA אחרי השימוש. זו בדיקת מקור, לא עצה רפואית.
${siteUrl}/claims/mrna-vaccines-dna-genome`,
  body: [
    {
      id: "answer",
      type: "answer-box",
      eyebrow: "תשובה קצרה",
      title: migratedMrnaVaccinesDnaGenomeClaimContent.shortAnswer,
      paragraphs: [
        migratedMrnaVaccinesDnaGenomeClaimContent.bottomLine,
        "העמוד הזה לא קובע אם אדם מסוים צריך להתחסן. הוא בודק טענה צרה על DNA, גנום ומנגנון mRNA.",
      ],
      variant: "answer",
    },
    {
      id: "verdict",
      type: "verdict-grid",
      items: [
        { label: "הטענה", text: migratedMrnaVaccinesDnaGenomeClaimContent.claim },
        { label: "מה כן נכון", text: migratedMrnaVaccinesDnaGenomeClaimContent.summaryPoints[0] },
        { label: "איפה הקפיצה", text: migratedMrnaVaccinesDnaGenomeClaimContent.summaryPoints[2] },
        { label: "מסקנה", text: migratedMrnaVaccinesDnaGenomeClaimContent.verdict, emphasis: true },
      ],
    },
    {
      id: "mechanism-table",
      type: "comparison-list",
      title: "הפרדה בין המושגים",
      items: [
        { label: "mRNA", text: "הוראה זמנית לייצור חלבון. זה חומר גנטי מסוג RNA, אבל אינו ה-DNA של האדם." },
        { label: "DNA", text: "החומר הגנטי שנמצא בגרעין התא ונושא את הקוד הגנטי הקבוע." },
        { label: "שינוי גנום", text: "טענה חזקה בהרבה: שילוב או שינוי קבוע של DNA. בשביל זה צריך ראיה ישירה." },
        { label: "מה המקורות אומרים", text: "המקורות הרשמיים שנבדקו אומרים שה-mRNA לא נכנס לגרעין התא ולא משנה DNA.", emphasis: true },
      ],
    },
    {
      id: "not-medical-advice",
      type: "method-note",
      title: "גבול הבדיקה",
      paragraphs: [
        "בדיקה על DNA אינה אותו דבר כמו המלצה רפואית. אנשים יכולים לשאול שאלות על חיסונים, תופעות לוואי, מדיניות בריאות או שקיפות רגולטורית. אלה שאלות אחרות.",
        "הטענה שנבדקת כאן צרה יותר: האם מנגנון mRNA משנה את ה-DNA או את הגנום. לפי המקורות שנבדקו, הטענה הזאת לא נתמכת.",
      ],
    },
    {
      id: "evidence",
      type: "evidence-list",
      title: "מה המקורות מראים",
      numbered: true,
      items: [
        {
          id: "cdc-dna",
          number: "01",
          title: "CDC: החיסונים לא משפיעים או מתקשרים עם DNA",
          paragraphs: [
            "CDC מסביר שחיסוני COVID-19 אינם משפיעים או מתקשרים עם ה-DNA, ושחיסוני mRNA אינם נכנסים לגרעין התא שבו נמצא החומר הגנטי.",
          ],
        },
        {
          id: "mrna-breakdown",
          number: "02",
          title: "ה-mRNA מפורק לאחר השימוש",
          paragraphs: [
            "לפי ההסבר של CDC, אחרי שהתא משתמש בהוראה לייצור חלבון, הוא מפרק את ה-mRNA ומסיר אותו. זה תומך בהבחנה בין הוראה זמנית לבין שינוי גנטי קבוע.",
          ],
        },
        {
          id: "nci-dna",
          number: "03",
          title: "NCI: חיסוני COVID-19 לא משנים DNA",
          paragraphs: [
            "NCI, בהקשר של שאלות על חולי סרטן וחיסוני COVID-19, מציין שאין ראיה שחיסוני COVID-19 גורמים לסרטן או משנים את הקוד הגנטי.",
          ],
        },
      ],
    },
    {
      id: "logic",
      type: "logic-chain",
      title: "שרשרת הקפיצה",
      steps: [
        "mRNA הוא חומר גנטי מסוג RNA",
        "חיסון mRNA מכניס הוראה זמנית לתא",
        "DNA הוא חומר גנטי שנמצא בגרעין",
        "מכאן מסיקים שהחיסון משנה DNA",
      ],
      conclusion: "חיסון mRNA משנה את הגנום",
      note: "החוליה האחרונה היא הקפיצה. כדי לתמוך בה צריך מקור שמראה כניסה לגרעין ושינוי DNA, לא רק שימוש במילה 'גנטי'.",
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
        headline: migratedMrnaVaccinesDnaGenomeClaimContent.title,
        description: migratedMrnaVaccinesDnaGenomeClaimContent.description,
        datePublished: "2026-06-23",
        dateModified: "2026-06-23",
        inLanguage: "he-IL",
      },
      { type: "faq", placement: "page" },
    ],
  },
  metadataOverrides: {
    title: "האם חיסון mRNA משנה את ה-DNA או הגנום? | מקור בדיקה",
    description: migratedMrnaVaccinesDnaGenomeClaimContent.description,
    canonical: "/claims/mrna-vaccines-dna-genome",
  },
});
