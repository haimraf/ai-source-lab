import { defineClaim } from "../../lib/content/claim-schema";
import { siteUrl } from "../../lib/site";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedCovidSupplementsVitaminDZincCureClaimContent = defineMigratedClaimContent({
  slug: "covid-supplements-vitamin-d-zinc-cure",
  path: "/claims/covid-supplements-vitamin-d-zinc-cure",
  title: "האם ויטמין D, ויטמין C ואבץ מרפאים קורונה?",
  description:
    "בדיקה לטענה שתוספי ויטמין D, ויטמין C או אבץ יכולים לרפא או למנוע COVID-19: מה כן ידוע על תוספים, ומה המקורות הרשמיים לא מוכיחים.",
  kicker: "תוספים ובריאות ציבורית",
  tags: ["COVID-19", "תוספים", "ויטמין D", "ויטמין C", "אבץ", "בריאות ציבורית"],
  verdict: "תוספים יכולים להיות חשובים לבריאות כללית או למחסור תזונתי — אבל לא נמצאה הוכחה שהם מרפאים או מונעים COVID-19",
  cluster: "public-health",
  updated: "2026-06-23",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה שתוספי ויטמינים ואבץ מרפאים קורונה",
  claim: "ויטמין D, ויטמין C, אבץ או שילוב תוספים יכולים לרפא COVID-19, למנוע הדבקה, או להחליף טיפול רפואי מוכר.",
  shortAnswer:
    "לא לפי המקורות הרשמיים שנבדקו. יש תוספים שחשובים לבריאות ולתיקון מחסור, אבל זה לא אותו דבר כמו הוכחה שהם מרפאים או מונעים COVID-19.",
  bottomLine:
    "הגרעין האמיתי הוא שמערכת החיסון זקוקה לוויטמינים ומינרלים, ושמחסור תזונתי יכול להיות בעיה רפואית אמיתית. אבל NIH/ODS, NCCIH ו-WHO לא מציגים ויטמין D, ויטמין C או אבץ כתרופה או מניעה מוכחת ל-COVID-19. FDA גם הזהיר מפני מוצרים שמוצגים ככאלה שמונעים, מטפלים או מרפאים קורונה בלי אישור.",
  summaryPoints: [
    "מה כן נכון: ויטמין D, ויטמין C ואבץ חשובים לתפקוד תקין של הגוף ומערכת החיסון.",
    "מה לא נמצא: מקור רפואי רשמי שמציג את התוספים האלה כתרופה, מניעה מוכחת או תחליף לטיפול רפואי ב-COVID-19.",
    "הקפיצה: מעבר מ'רכיב חשוב לבריאות' ל'זה מרפא מחלה ויראלית מסוימת'.",
    "העמוד הזה אינו המלצה לקחת או לא לקחת תוסף. הוא בודק טענה ציבורית על ריפוי/מניעה של COVID-19.",
  ],
  overview:
    "טענות על ויטמין D, ויטמין C ואבץ נשמעות משכנעות כי הן מתחילות ממשהו נכון: הגוף צריך רכיבים תזונתיים, ויש קשר בין תזונה, חיסוניות ובריאות. אבל בדיקת מקור צריכה לשאול שאלה מדויקת יותר: האם המקורות הרשמיים אומרים שהתוספים האלה מרפאים או מונעים COVID-19? התשובה שנמצאה היא לא.",
  sources: [
    {
      id: "nih-ods-covid-supplements",
      title: "NIH Office of Dietary Supplements — Dietary Supplements in the Time of COVID-19",
      url: "https://ods.od.nih.gov/factsheets/DietarySupplementsInTheTimeOfCOVID19-Consumer/",
      level: "official",
      note:
        "מקור רשמי ומפורט של NIH/ODS על תוספים שנבדקו בהקשר COVID-19, כולל ויטמין C, ויטמין D ואבץ, עם הבחנה בין בריאות כללית לבין הוכחת מניעה או טיפול.",
    },
    {
      id: "nccih-covid-complementary-approaches",
      title: "NCCIH — COVID-19 Symptoms and Complementary Approaches: What You Need To Know",
      url: "https://www.nccih.nih.gov/health/covid-19-symptoms-and-complementary-approaches-what-you-need-to-know",
      level: "official",
      note:
        "מקור NIH/NCCIH שמסביר שהמחקר על גישות משלימות ותוספים ל-COVID-19 עדיין מוגבל, וש-ODS לא מצא הוכחה ברורה שתוסף כלשהו מונע COVID-19 או מפחית את חומרת הסימפטומים.",
    },
    {
      id: "who-covid-mythbusters-supplements",
      title: "WHO — Coronavirus disease (COVID-19) advice for the public: Mythbusters",
      url: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters",
      level: "official",
      note:
        "עמוד WHO שמבהיר כי ויטמינים ומינרלים חשובים לבריאות, אך אינם מוצגים כטיפול שמרפא COVID-19.",
    },
    {
      id: "fda-fraudulent-covid-products",
      title: "FDA — Fraudulent Coronavirus Disease 2019 (COVID-19) Products",
      url: "https://www.fda.gov/consumers/health-fraud-scams/fraudulent-coronavirus-disease-2019-covid-19-products",
      level: "official",
      note:
        "מקור FDA על אזהרות נגד מוצרים שמוצגים ככאלה שמונעים, מטפלים, מאבחנים או מרפאים COVID-19 בלי אישור מתאים.",
    },
  ],
  faq: [
    {
      question: "אז ויטמין D, ויטמין C ואבץ לא חשובים בכלל?",
      answer:
        "לא. הם חשובים לבריאות, ותיקון מחסור יכול להיות דבר רפואי חשוב. אבל חשיבות תזונתית אינה הוכחה שתוסף מסוים מרפא או מונע COVID-19.",
    },
    {
      question: "מה ההבדל בין מחסור לבין ריפוי?",
      answer:
        "מחסור הוא מצב שבו לגוף חסר רכיב מסוים, וייתכן שרופא ימליץ להשלים אותו. ריפוי COVID-19 הוא טענה אחרת לגמרי: שהיא דורשת ראיות קליניות והמלצה רפואית ברורה למחלה מסוימת.",
    },
    {
      question: "האם מותר לקחת תוסף?",
      answer:
        "העמוד הזה לא נותן ייעוץ אישי. תוספים יכולים להתאים לחלק מהאנשים ולהזיק או להתנגש עם תרופות אצל אחרים. החלטה אישית צריכה להיעשות מול רופא, רוקח או גורם רפואי מוסמך.",
    },
    {
      question: "למה הטענה הזאת כל כך נפוצה?",
      answer:
        "כי היא מתחילה ממשהו אינטואיטיבי: מערכת החיסון צריכה תזונה תקינה. הקפיצה מתחילה כשמשם מסיקים שתוסף מסוים הוא טיפול מוכח במחלה ויראלית ספציפית.",
    },
    {
      question: "איזו ראיה הייתה משנה את המסקנה?",
      answer:
        "המלצה רשמית או ראיות קליניות חזקות שמראות שתוסף מסוים, במינון מוגדר ובקבוצת מטופלים מוגדרת, מונע או מטפל ב-COVID-19 באופן שמצדיק המלצה רפואית. זה לא נמצא במקורות שנבדקו כאן.",
    },
  ],
});

export const covidSupplementsVitaminDZincCureClaimContent = defineClaim({
  ...migratedCovidSupplementsVitaminDZincCureClaimContent,
  lead:
    "הטענה שתוסף יכול לרפא קורונה נשמעת מרגיעה כי היא נותנת תחושת שליטה: לקחת משהו פשוט וזמין. אבל כדי לבדוק אותה צריך להפריד בין בריאות כללית ותיקון מחסור לבין הוכחה שתוסף מסוים מונע או מרפא COVID-19.",
  shareCopy: `ויטמין D, ויטמין C ואבץ חשובים לבריאות, אבל זה לא אומר שהם מרפאים קורונה. לפי מקורות רשמיים כמו NIH/ODS, NCCIH ו-WHO, אין הוכחה ברורה שתוסף תזונה מונע או מרפא COVID-19. זו בדיקת מקור, לא ייעוץ רפואי אישי.
${siteUrl}/claims/covid-supplements-vitamin-d-zinc-cure`,
  body: [
    {
      id: "answer",
      type: "answer-box",
      eyebrow: "תשובה קצרה",
      title: migratedCovidSupplementsVitaminDZincCureClaimContent.shortAnswer,
      paragraphs: [
        migratedCovidSupplementsVitaminDZincCureClaimContent.bottomLine,
        "הגבול חשוב במיוחד כאן: מקור בדיקה לא מחליף רופא, רוקח או הנחיות טיפול אישיות. העמוד בודק טענה ציבורית על מקור וראיות.",
      ],
      variant: "answer",
    },
    {
      id: "verdict",
      type: "verdict-grid",
      items: [
        { label: "הטענה", text: migratedCovidSupplementsVitaminDZincCureClaimContent.claim },
        { label: "מה כן נכון", text: migratedCovidSupplementsVitaminDZincCureClaimContent.summaryPoints[0] },
        { label: "מה לא נמצא", text: migratedCovidSupplementsVitaminDZincCureClaimContent.summaryPoints[1] },
        { label: "מסקנה", text: migratedCovidSupplementsVitaminDZincCureClaimContent.verdict, emphasis: true },
      ],
    },
    {
      id: "terms",
      type: "comparison-list",
      title: "בריאות כללית, מחסור וטיפול — לא אותו דבר",
      items: [
        { label: "רכיב חשוב", text: "ויטמין או מינרל שהגוף צריך לתפקוד תקין." },
        { label: "מחסור", text: "מצב רפואי שיכול להצדיק בדיקה, אבחון והשלמה לפי צורך אישי." },
        { label: "תוסף", text: "מוצר שיכול להשלים רכיב, אבל אינו בהכרח תרופה למחלה מסוימת." },
        { label: "טיפול מוכח", text: "המלצה רפואית שמבוססת על ראיות קליניות, מינון, אוכלוסייה וסיכון מול תועלת.", emphasis: true },
      ],
    },
    {
      id: "medical-boundary",
      type: "method-note",
      title: "גבול הבדיקה",
      paragraphs: [
        "העמוד לא קובע אם לאדם מסוים חסר ויטמין D, אם כדאי לו לקחת אבץ, או אם תוסף מסוים מתאים לו. אלה שאלות רפואיות אישיות.",
        "הבדיקה כאן צרה יותר: האם המקורות הרשמיים שנבדקו תומכים בטענה שהתוספים האלה מרפאים או מונעים COVID-19. לפי המקורות — לא.",
      ],
    },
    {
      id: "evidence",
      type: "evidence-list",
      title: "מה המקורות מראים",
      numbered: true,
      items: [
        {
          id: "ods-supplements",
          number: "01",
          title: "NIH/ODS: תזונה חשובה, אבל אין הוכחה ברורה לתוסף שמונע או מטפל בקורונה",
          paragraphs: [
            "ODS מסביר שמערכת החיסון זקוקה לרכיבים כמו ויטמין C, ויטמין D ואבץ, אבל המחקר לא הראה בבירור שתוסף תזונה כלשהו עוזר למנוע COVID-19 או לטפל בו.",
          ],
        },
        {
          id: "nccih-limitations",
          number: "02",
          title: "NCCIH: המחקר על גישות משלימות מוגבל ולא מספיק חזק",
          paragraphs: [
            "NCCIH מציג מחקרים על גישות משלימות ל-COVID-19, אבל מדגיש מגבלות איכות, גודל מדגם, וחוסר יכולת להסיק מסקנות חד-משמעיות בהרבה תחומים.",
          ],
        },
        {
          id: "who-supplements",
          number: "03",
          title: "WHO: ויטמינים ומינרלים אינם מוצגים כתרופה לקורונה",
          paragraphs: [
            "WHO מבחין בין חשיבות של מיקרו-נוטריינטים לבריאות לבין שימוש בהם כטיפול ל-COVID-19. זו בדיוק ההבחנה שהטענה הוויראלית מדלגת עליה.",
          ],
        },
        {
          id: "fda-fraud",
          number: "04",
          title: "FDA: טענות ריפוי ומניעה סביב COVID-19 הן אזור אזהרה רגולטורי",
          paragraphs: [
            "FDA פרסם אזהרות נגד מוצרים שמוצגים ככאלה שמונעים, מטפלים, מאבחנים או מרפאים COVID-19 ללא אישור. זה לא אומר שכל תוסף מזיק, אלא שטענת ריפוי דורשת ראיות ואישור מתאימים.",
          ],
        },
      ],
    },
    {
      id: "logic",
      type: "logic-chain",
      title: "שרשרת הקפיצה",
      steps: [
        "הגוף צריך ויטמינים ומינרלים",
        "מחסור יכול לפגוע בבריאות",
        "יש מחקרים על תוספים ומערכת החיסון",
        "ברשת מציגים את זה כטיפול מוכח בקורונה",
      ],
      conclusion: "ויטמין D, ויטמין C או אבץ מרפאים COVID-19",
      note: "הקפיצה היא בין תמיכה בבריאות כללית לבין טענת טיפול ספציפית. כדי לתמוך בה צריך ראיות קליניות והמלצה רפואית ברורה, לא רק קשר כללי למערכת החיסון.",
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
        headline: migratedCovidSupplementsVitaminDZincCureClaimContent.title,
        description: migratedCovidSupplementsVitaminDZincCureClaimContent.description,
        datePublished: "2026-06-23",
        dateModified: "2026-06-23",
        inLanguage: "he-IL",
      },
      { type: "faq", placement: "page" },
    ],
  },
  metadataOverrides: {
    title: "האם ויטמין D, ויטמין C ואבץ מרפאים קורונה? | מקור בדיקה",
    description: migratedCovidSupplementsVitaminDZincCureClaimContent.description,
    canonical: "/claims/covid-supplements-vitamin-d-zinc-cure",
  },
});
