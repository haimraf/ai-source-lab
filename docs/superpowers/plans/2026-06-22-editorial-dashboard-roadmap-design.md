# מפת דרכים למערכת העריכה ולוח הבקרה

## מטרת המסמך

מסמך זה מגדיר את כיוון המוצר המלא ללוח הבקרה של AI Source Lab / מקור בדיקה. הוא אינו תוכנית לבנייה מיידית ואינו מאשר שינוי באתר, בנתיבים או בתוכן. מטרתו לשמור תמונה מלאה של המערכת העתידית, לסדר אותה לפי דחיפות ותלויות, ולמנוע מצב שבו יכולות חשובות נשכחות כאשר עוברים בין גרסאות.

לוח הבקרה לא יתוכנן כעורך פשוט של Claim Checks. הוא יהיה מערכת הפעלה עריכתית שמנהלת את כל מחזור החיים:

`intake → triage → research → sources/evidence → drafting → review → preview → publish → measure → maintain → correct/archive`

## הנחות לזמני העבודה

ההערכות במסמך מניחות:

- מפתח אחד שמכיר את הפרויקט ועובד באופן ממוקד כ־4–6 שעות ביום;
- המשך שימוש ב־Next.js, TypeScript, בדיקות אוטומטיות ו־Vercel;
- עבודה ב־PRs קטנים עם preview, בדיקות ויכולת חזרה לאחור;
- זמן פיתוח בלבד, ללא זמן המחקר והכתיבה של תוכן חדש;
- תשתיות חיצוניות, אישורי ספקים או שינויי דרישות עשויים להאריך את הטווחים;
- כל שלב מקבל מסמך design ותוכנית implementation נפרדים לפני ביצוע.

הטווחים הם הערכת סדר גודל, לא התחייבות. עבודה חלקית של כמה שעות בשבוע עשויה להכפיל או לשלש את הזמן הקלנדרי.

## ניהול סטטוס ועדכון המסמך

המסמך הוא גם מפת הדרכים וגם תמונת מצב קצרה. בכל פעם שמשלימים שלב או תת־שלב, מעדכנים אותו באותו PR כדי שהמצב המתועד יישאר מסונכרן עם הקוד והאתר.

### סימוני סטטוס

- ⏳ **מתוכנן** — טרם התחיל.
- 🟡 **בעבודה** — יש branch או PR פעיל, אך תנאי הסיום עדיין לא הושלמו.
- ⛔ **חסום** — נדרשת החלטה, הרשאה או תלות חיצונית; רושמים במשפט אחד מה החסם.
- ✅ **הושלם** — השינוי מוזג ל־`main` וכל הבדיקות הנדרשות עברו.
- ✅🌐 **הושלם ואומת בפרודקשן** — בנוסף למיזוג ולבדיקות, התוצאה הציבורית נבדקה באתר החי.

לא מסמנים ✅ על סמך קוד מקומי, preview או PR פתוח בלבד. שלב תיעודי שאין לו השפעה ציבורית יכול להיחשב הושלם לאחר merge והבדיקות הרלוונטיות, ללא סימון 🌐.

### תבנית קצרה לעדכון שלב שהושלם

מתחת לכותרת השלב מוסיפים לכל היותר 2–4 שורות:

```markdown
**סטטוס:** ✅ הושלם ב־YYYY-MM-DD
**מה בוצע:** תיאור קצר של התוצאה, לא יומן של כל פעולת פיתוח.
**איך אומת:** הבדיקות המרכזיות, CI, preview או production לפי העניין.
**הערה:** רק אם נשאר debt, מעקב חיצוני או החלטה חשובה להמשך.
```

אין להדביק למסמך logs ארוכים, רשימות קבצים מלאות או פירוט של כל commit. המטרה היא להבין במהירות מה קיים, כיצד אומת ומה עדיין נשאר.

### כללי שמירת היסטוריה

- לא מוחקים שלב, דרישה או החלטה שבוצעו.
- אם כיוון הוחלף, מסמנים אותו כ־`הוחלף` ומפנים להחלטה החדשה.
- אם שלב פוצל, משאירים את הכותרת המקורית ומקשרים לתת־השלבים.
- שינוי בהערכת הזמן מתועד ליד ההערכה הקיימת עם הסיבה בקצרה.
- פריט שלא בוצע נשאר ב־Later/Future גם אם אין לו תאריך יעד.

## החלטת היסוד המומלצת

### מודל דו־שכבתי

בשלבים הראשונים המערכת תפריד בין שני סוגי מידע:

1. **תוכן ציבורי שפורסם** — נשאר typed content ב־Git ומשמש source of truth לעמודים, metadata, sitemap, `llms.txt` ו־structured data.
2. **מידע תפעולי פנימי** — נשמר במסד נתונים: submissions, הערות, triage, הקצאות, פעילות משתמשים, תיעדוף ואירועי audit.

לוח הבקרה לא יכתוב ישירות לפרודקשן. פעולת פרסום תייצר שינוי מבוקר, תריץ validation, תיצור preview ותדרוש אישור לפני merge. המודל שומר על יתרונות המבנה הקיים: היסטוריית Git, build-time validation, Vercel Preview ויכולת rollback.

מעבר עתידי לתוכן ציבורי מבוסס מסד נתונים יידון ב־ADR נפרד ורק אם מגבלות המודל מבוסס Git הופכות ממשיות.

## עקרונות שאסור לשבור

- האתר הציבורי נשאר static-first כל עוד אין צורך מוכח אחרת.
- התוכן הציבורי הוא source of truth יחיד; אין עותקים ידניים שלא מסתנכרנים.
- sitemap, `llms.txt`, canonical, metadata ו־structured data נגזרים מתוכן וממדיניות content type.
- override ידני אפשרי רק בשדות שהוגדרו מראש, עם validation ו־audit.
- שינוי slug דורש החלטה מפורשת על redirect ו־canonical.
- duplicate slug, placeholder route או קישור פנימי שבור חוסמים פרסום.
- preview חייב להציג את אותה שכבת render שתופעל בפרודקשן.
- מידע פנימי, PII, הערות מחקר והרשאות לעולם אינם נכללים ב־payload ציבורי.
- כל שינוי ניתן לביקורת, לשחזור ולייחוס למשתמש או לתהליך שביצע אותו.
- AI עשוי לסייע, אך אינו מפרסם, קובע verdict או מאשר מקורות בעצמו.

## מפת הישויות

### סוגי תוכן ציבוריים

- Claim Check
- Article
- FAQ Page
- Topic Page
- Static Page
- Methodology / Policy Page

כל סוג תוכן יגדיר:

- שדות חובה ורשות;
- התנהגות metadata ו־canonical;
- התנהגות structured data;
- workflow מותר;
- validation לפני preview ופרסום;
- publish, unpublish ו־archive;
- slug, redirect ונתיב ציבורי;
- sitemap, robots ו־`llms.txt`;
- תצוגת preview ורכיבי render מותרים.

### רשומות משותפות

- Source Record
- Exhibit / Evidence Record
- Topic / Taxonomy Record
- Redirect Record
- Correction / Change Record

אלו אינן בהכרח עמודים. הן מקושרות לתוכן אחד או יותר ויכולות לשמש מחדש.

### רשומות תפעוליות פנימיות

- Claim Submission / Intake Record
- Editorial Task
- Review Decision
- Publish Request
- Audit Event
- Analytics Summary
- Maintenance Finding

רשומות אלו אינן ציבוריות, אינן נכנסות ל־sitemap ואינן ניתנות לאינדוקס.

## סטטוסים מוצעים

### מחזור עריכתי

- `draft`
- `in_review`
- `needs_sources`
- `changes_requested`
- `approved`
- `publishing`
- `published`
- `needs_update`
- `correction_needed`
- `archived`

### מחזור intake

- `new`
- `triage`
- `researching`
- `accepted`
- `rejected`
- `duplicate`
- `converted_to_claim`
- `published`

מעבר בין סטטוסים יהיה מוגדר כחוק עסקי. לדוגמה, `approved` לא יהיה אפשרי בלי מקורות ו־checklist תקין, ו־`published` לא ייקבע ידנית לפני שה־deployment אושר.

## סדר עדיפויות עליון

| שכבה | דחיפות | יעד |
|---|---|---|
| Now | מיידי | השלמת תצפית ו־ADR לפני מערכת עריכה |
| Next | גבוהה | בסיס מאובטח, intake ומקורות |
| Build | גבוהה לאחר הבסיס | עריכת Claim Check ופרסום בטוח |
| Expand | בינונית | SEO/GEO, סוגי תוכן נוספים ותחזוקה |
| Optimize | בינונית–נמוכה | analytics, תיעדוף ואוטומציה |
| Future | עתידית | הרשאות מתקדמות, scheduling ו־AI מסייע |

---

# Roadmap מלא

## שלב 0 — נעילת גבולות ובסיס מדיד

**דחיפות:** מיידית  
**משך משוער:** 2–4 ימי עבודה  
**תלות:** אין

**סטטוס:** ✅🌐 הושלם ב־2026-06-22

**מה בוצע:** נוסף `/internal/content-status` סטטי לקריאה בלבד, שנגזר בזמן build מ־12 רשומות claim ומציג workflow, checklist, מקורות, metadata/share ומצב רענון; המשטחים הותאמו לערכת העיצוב הכהה.

**איך אומת:** 145 בדיקות, `check:content`, typecheck ו־build של 44 routes עברו; CI ו־Vercel הצליחו, והנתיב החי החזיר 200 עם `noindex, nofollow` וללא כניסה ל־sitemap.

**הערה:** הנתונים מתעדכנים אוטומטית בכל build/deployment הבא לאחר שינוי ברשומות התוכן; אין רענון חי ללא פריסה.

### מטרה

לסיים את העבודה שכבר הוגדרה לפני כל dashboard ניתן לעריכה ולהבטיח שהמצב הנוכחי של האתר מדיד ומתועד.

### תכולה

- להשלים את Stage 12: עמוד סטטוס פנימי לקריאה בלבד שנגזר מ־claim records.
- להציג workflow, checklist, sources, share copy, metadata completeness ו־refresh state.
- לשמור את העמוד `noindex, nofollow` ומחוץ ל־sitemap ולניווט הציבורי.
- לעדכן baseline של route count, claims count ובדיקות build.
- לתעד שהעמוד אינו גבול אבטחה ואינו כולל מידע רגיש.

### שער סיום

- אין יכולת עריכה או מידע פנימי רגיש.
- כל הנתונים נגזרים אוטומטית מהתוכן הקיים.
- tests, `check:content`, typecheck ו־build עוברים.

---

## שלב 1 — Dashboard Architecture Decision Record

**דחיפות:** מיידית  
**משך משוער:** 3–5 ימי עבודה  
**תלות:** שלב 0

**סטטוס:** ✅ הושלם ב־2026-06-22

**מה בוצע:** נוסף `docs/adr/0001-dashboard-foundation.md`, שמכריע את כל 11 החלטות היסוד במודל דו־שכבתי וספק־ניטרלי; לא נוספו auth, DB, storage, routes, UI או workflow פעיל.

**איך אומת:** coverage scan אישר את כל ההחלטות ומיפוי הישויות; לאחר merge עברו 145 בדיקות, `check:content`, typecheck ו־build של 44 routes. Stage 2 נשאר מתוכנן ולא התחיל.

### מטרה

לקבל החלטות ארכיטקטוניות לפני בחירת מסד נתונים, auth או רכיבי UI.

### החלטות מחייבות

- source of truth לתוכן ציבורי ולמידע תפעולי;
- Git-backed publishing מול DB-backed publishing;
- גבול בין content type, shared record ו־operational record;
- סביבת preview, staging ו־production;
- מודל auth והרשאות ראשוני;
- מדיניות PII, retention ומחיקה;
- storage למדיה, screenshots ו־PDFs;
- audit, versioning ו־rollback;
- export, backup ומניעת vendor lock-in;
- sync contract בין dashboard לאתר;
- אסטרטגיית schema versioning ומיגרציות.

### המלצה

לאמץ את המודל הדו־שכבתי: Git לתוכן ציבורי ו־DB לתפעול פנימי. פרסום יוצר change set או PR ולא mutation ישיר בפרודקשן.

### שער סיום

- כל החלטה מרכזית מקבלת הכרעה מפורשת במסמך.
- כל מאפיין עתידי משויך לאחת משתי שכבות המידע.
- מוגדר מסלול export ו־recovery לפני הכנסת מידע אמיתי.

---

## שלב 2 — בסיס מאובטח ללוח הבקרה

**דחיפות:** גבוהה  
**משך משוער:** 1–2 שבועות  
**תלות:** שלב 1

**סטטוס:** 🟡 בעבודה מ־2026-06-22
**מה מתבצע:** design ו־ADR ל־admin shell פרטי ו־read-only עם Supabase ל־auth/session/audit/rate-limit בלבד.
**הערה:** implementation טרם התחיל; אין לסמן ✅ לפני merge, בדיקות, restore drill ואימות production.

### מטרה

לבנות מעטפת פרטית מינימלית שניתן להוסיף אליה כלים פנימיים בלי לחשוף מידע או פעולות באתר הציבורי.

### תכולה

- אזור `/dashboard` מופרד מה־site chrome הציבורי.
- התחברות, session מאובטח ו־logout.
- שני roles ראשונים בלבד: `admin`, `read_only`.
- server-side authorization לכל route ולכל action.
- CSRF protection, rate limiting, security headers ו־safe error responses.
- הפרדת environment variables וסודות.
- audit ראשוני ל־login, logout, create/update/status change.
- health view בסיסי למסד הנתונים ול־publishing integration.
- noindex, robots exclusion ואי־הכללה ב־sitemap/`llms.txt`.

### לא בשלב זה

- editor/reviewer roles מלאים;
- SSO ארגוני;
- UI מלא להרשאות;
- AI או analytics.

### שער סיום

- משתמש לא מחובר אינו יכול לקרוא או לשנות מידע פנימי.
- הרשאה נאכפת בשרת ולא רק בהסתרת כפתורים.
- אירועים רגישים נרשמים בלי לשמור credentials או תוכן סודי בלוגים.

---

## שלב 3 — Claim Submissions Inbox

**דחיפות:** גבוהה  
**משך משוער:** 2–3 שבועות  
**תלות:** שלב 2  
**ניתן להוציא ערך מוקדם:** כן

### מטרה

להפוך את `/suggest-claim` מתהליך GitHub ידני לצינור intake פרטי ומבוקר.

### תכולה

- Submission schema עם claim text, source URL, context ואימייל אופציונלי.
- inbox עם חיפוש, סינון ומיון לפי status, date, topic ו־duplicate.
- lifecycle מלא: new, triage, researching, accepted, rejected, duplicate, converted, published.
- admin notes שאינן מוצגות לציבור.
- קשר ל־submission קשור או כפול.
- זיהוי duplicate ראשוני לפי URL וטקסט, עם החלטה אנושית.
- קישור ל־topic cluster והוספת tags ידנית.
- rate limit, honeypot או CAPTCHA בהתאם לנפח spam.
- הסכמה ומדיניות retention לאימיילים.
- מחיקת PII לפי בקשה או לאחר תקופה מוגדרת.
- action להמרת submission מאושר ל־Claim Check draft, ללא פרסום.

### שער סיום

- שום submission אינו יוצר עמוד ציבורי אוטומטית.
- קלט לא מהימן עובר validation ו־sanitization.
- ניתן לעקוב מהצעה לטיוטה ול־claim שפורסם.

---

## שלב 4 — Source Library

**דחיפות:** גבוהה  
**משך משוער:** 3–5 שבועות  
**תלות:** שלבים 1–2; יכול להתחיל במקביל לסוף שלב 3

### מטרה

להפוך מקורות מרכיבים inline לרשומות ניתנות לשימוש חוזר, בדיקה ותחזוקה.

### תכולה

- Source Record עם title, URL, publisher, source type ו־accessedAt.
- סיווג: primary, official, secondary, context.
- קשר many-to-many בין sources לתכנים.
- notes פנימיים נפרדים מתיאור ציבורי.
- בדיקת URL, redirect chain, HTTP state ו־lastCheckedAt.
- freshness/review status ותאריך בדיקה הבא.
- canonicalization של URLs וזיהוי מקורות כפולים.
- snapshot metadata: title, publisher ותאריך כפי שנראו בזמן השימוש.
- מדיניות למקור שנעלם, משתנה או עובר paywall.
- import הדרגתי ממקורות inline בלי לשנות תוכן ציבורי.
- דו"ח claims ללא מקור primary/official כאשר הוא זמין.

### שער סיום

- אותו מקור ניתן לקישור לכמה claims בלי שכפול.
- שינוי פנימי ברשומה לא משנה בשקט טקסט ציבורי שכבר פורסם.
- מקור שבור או ישן מופיע כמשימת תחזוקה.

---

## שלב 5 — Evidence and Exhibit Library

**דחיפות:** גבוהה–בינונית  
**משך משוער:** 2–4 שבועות  
**תלות:** שלב 4

### מטרה

לנהל תמונות, screenshots, charts, excerpts ו־PDFs בצורה ניתנת לביקורת ולשימוש חוזר.

### תכולה

- Exhibit Record עם title, media, alt text, caption ו־source URL.
- license/usage note, attribution ו־copyright status.
- checksum וזיהוי קבצים כפולים.
- קישור ל־claim, source או section.
- flags נפרדים לשימוש בעמוד ציבורי, OG image או social asset.
- storage policy, file size/type limits וסריקת קבצים.
- retention ו־orphan cleanup לקבצים שאינם מקושרים.
- audit של החלפת קובץ או שינוי caption/alt.

### שער סיום

- אין publish למדיה בלי alt text ומדיניות שימוש ברורה.
- קובץ פנימי אינו מקבל URL ציבורי בטעות.
- ניתן לזהות מהיכן הגיעה כל ראיה ובאילו תכנים היא מופיעה.

---

## שלב 6 — Claim Check Editor ו־workflow מלא

**דחיפות:** גבוהה לאחר השלמת הבסיס  
**משך משוער:** 4–7 שבועות  
**תלות:** שלבים 2, 4 ו־5

### מטרה

לאפשר יצירה ועריכה בטוחה של Claim Checks בלי להפוך עדיין לעורך גנרי לכל סוגי התוכן.

### תכולה

- טופס typed שמכסה את ClaimContent הקיים.
- sections מסודרים: claim, short answer, findings, sources, FAQ, body, share copy ו־workflow.
- autosave לטיוטה עם revision/concurrency check.
- diff מול הגרסה שפורסמה.
- checklist לפני review ולפני publish.
- transitions מפורשים בין draft, review, changes requested ו־approved.
- validation זהה ככל האפשר ל־build validation.
- preview אמיתי דרך renderer הקיים.
- יצירת change set/branch/PR לפרסום.
- הצגת CI ו־Vercel Preview בתוך תהליך הפרסום.
- חסימת merge/publish כאשר checks נכשלים.
- חיבור בין submission, claim, sources ו־exhibits.
- recovery מטיוטה, conflict handling ו־idempotent publish action.

### שער סיום

- לוח הבקרה אינו יכול לעקוף schema או checks קיימים.
- אין שינוי route, metadata או structured data שלא מוצג ב־diff.
- כשל בפרסום משאיר טיוטה ניתנת לשחזור ואינו יוצר מצב ביניים ציבורי.

---

## שלב 7 — Publishing Safety ו־Route Hygiene

**דחיפות:** גבוהה  
**משך משוער:** 2–4 שבועות  
**תלות:** שלב 6

### מטרה

להפוך פרסום לפעולה בטוחה, צפויה וניתנת לחזרה לאחור.

### תכולה

- preview before publish.
- publish, unpublish ו־archive עם משמעות ברורה לכל פעולה.
- slug uniqueness ו־reserved routes.
- שינוי slug מחייב בחירה: redirect, canonical-only או ביטול.
- Redirect Record עם source, target, status code וסיבה.
- זיהוי placeholders כגון `/topics/[slug]`.
- broken internal links, accidental 404s ו־redirect candidates.
- מניעת redirect loops ו־chains ארוכים.
- deployment status, timeout ו־retry בטוח.
- rollback לגרסה האחרונה שעברה validation.
- publish receipt עם commit, deployment, actor וזמן.

### שער סיום

- כל URL ציבורי חדש או משתנה מופיע ב־publish review.
- rollback אינו מוחק audit או גרסאות קודמות.
- production אינו מתעדכן אם preview והבדיקות אינם Ready.

---

## שלב 8 — SEO, GEO ו־AI-facing Controls

**דחיפות:** בינונית–גבוהה  
**משך משוער:** 2–4 שבועות  
**תלות:** שלבים 6–7

### מטרה

לחשוף שליטה מבוקרת ב־discovery בלי ליצור כפילויות ידניות או drift.

### תכולה

- תצוגת effective metadata לצד overrides.
- sitemap inclusion ו־robots behavior לפי content type/status.
- `llms.txt` inclusion לפי מדיניות, לא כטקסט ידני.
- canonical URL ו־redirect relationship.
- Open Graph/Twitter title, description ו־image preview.
- structured data type, validation ו־render preview.
- AI-facing summary / short answer.
- recommended citation text.
- last reviewed date ו־source freshness.
- diff בין metadata מחושב ל־override.
- alerts ל־missing OG, invalid canonical, noindex conflict ו־schema error.

### Structured data debt

ה־API הקיים משתמש ב־`beforeArticle` ו־`insideArticle`, בעוד `placement` אינו תמיד מתאר DOM placement אמיתי. אין לשנות שמות כחלק מהקמת dashboard. כאשר נבנה schema migration ייעודי, יש לבחון:

- `structuredData.renderSlot`
- `structuredData.schemaBehavior`

המיגרציה חייבת לשמור parity מלא ב־JSON-LD לפני ואחרי השינוי.

### שער סיום

- ברירות המחדל נגזרות מהתוכן ומה־content type.
- override מתועד, מוצג ב־diff וניתן להסרה.
- sitemap, `llms.txt` ו־structured data מאומתים מול runtime output.

---

## שלב 9 — Internal QA ו־Validation Gate

**דחיפות:** בינונית–גבוהה  
**משך משוער:** 2–3 שבועות  
**תלות:** שלבים 6–8

### מטרה

לאחד את כל תנאי המוכנות לפרסום במקום אחד ולהבחין בין warning לבין blocker.

### בדיקות

- required fields מלאים;
- topic cluster משויך;
- source hierarchy קיימת;
- primary/official source קיים כאשר זמין;
- “מה נכון” קיים;
- “הקפיצה הלוגית” קיימת;
- FAQ קיים כאשר רלוונטי;
- share copy קיים;
- OG image קיים ותקין;
- sitemap ו־`llms.txt` צפויים לכלול את העמוד;
- structured data תקין;
- mobile review הושלם;
- source links נפתחים;
- canonical ו־redirect תקינים;
- spelling/content warnings מסומנים ללא שינוי אוטומטי.

### שער סיום

- כל כלל מסווג כ־blocker, warning או informational.
- waiver אפשרי רק ל־warning, עם actor, reason ו־expiry.
- תוצאת validation זהה ב־dashboard וב־CI.

---

## שלב 10 — סוגי תוכן נוספים

**דחיפות:** בינונית  
**משך משוער:** 4–8 שבועות, בחבילות קטנות  
**תלות:** יציבות מוכחת של שלבים 6–9

### סדר הרחבה מומלץ

1. Topic Page
2. Methodology / Policy Page
3. Static Page
4. Article
5. FAQ Page עצמאי, רק אם קיים צורך אמיתי

### עיקרון ביצוע

כל content type הוא תת־פרויקט נפרד עם schema, editor, renderer, preview, metadata policy, route policy ו־tests. אין לבנות “עורך אוניברסלי” לפני ששני סוגי תוכן לפחות הוכיחו אילו חלקים באמת משותפים.

### שער סיום לכל סוג

- אין regression בעמודים קיימים.
- rendering ציבורי ו־preview משתמשים באותה לוגיקה.
- כל התנהגות SEO/GEO ופרסום מוגדרת במפורש.

---

## שלב 11 — Editorial Analytics and Prioritization

**דחיפות:** בינונית  
**משך משוער:** 3–5 שבועות  
**תלות:** נתוני analytics אמינים ותשתית dashboard מאובטחת

### מטרה

לעזור לבחור מה לחקור, לעדכן ולתקן — לא רק להציג vanity metrics.

### מדדים

- page views לפי claim ו־topic;
- unique visitors ומגמות זמן;
- source link clicks;
- internal search queries ו־zero-result searches;
- `/suggest-claim` visits, starts, submissions והמרות;
- popular topic clusters;
- claims ישנים שקיבלו תנועה חדשה;
- 404s, redirect hits ו־broken routes;
- referrals מחיפוש, social וכלי AI כאשר ניתן לזהותם;
- share actions;
- freshness risk מול traffic;
- זמן מ־submission עד triage, claim draft ופרסום.

### תיעדוף מוצע

ציון עדיפות יוכל לשלב:

- traffic/current interest;
- source freshness risk;
- age since review;
- submission volume;
- editorial importance;
- severity של maintenance findings.

הציון יהיה מוסבר ולא “קופסה שחורה”. עורך יוכל לראות מדוע פריט קיבל עדיפות ולשנות החלטה ידנית.

### פרטיות ואיכות נתונים

- לא לשמור query strings, אימיילים או תוכן רגיש באירועי analytics.
- לסמן sampling, bot traffic ונתונים חסרים.
- לא להסיק “referral from AI” כאשר המקור אינו ניתן לזיהוי אמין.
- להפריד בין נתוני production ל־preview ולתנועת צוות.

### שער סיום

- לכל widget יש החלטה עריכתית שהוא מסייע לקבל.
- המספרים ניתנים להשוואה למקור analytics.
- אין פעולה אוטומטית על תוכן רק על סמך traffic.

---

## שלב 12 — Maintenance Center

**דחיפות:** בינונית  
**משך משוער:** 3–5 שבועות  
**תלות:** שלבים 4, 7, 8 ו־11

### מטרה

להפוך תחזוקה שוטפת מבעיה שמתגלה במקרה לתור עבודה ברור.

### תכולה

- broken link checks ו־redirect changes;
- stale content ו־scheduled review dates;
- source freshness reports;
- sitemap ו־`llms.txt` runtime validation;
- missing/invalid OG images;
- missing/invalid structured data;
- duplicate slug ו־route conflicts;
- orphan sources/exhibits;
- security/dependency maintenance notes;
- deployment failures ו־build-rate warnings;
- assignment, severity, due date ו־resolution note;
- suppression זמני עם סיבה ותאריך תפוגה.

### שער סיום

- כל finding ניתן לשחזור ומקושר לרשומה הרלוונטית.
- בדיקה חולפת אינה מוחקת היסטוריה של כשל קודם.
- המערכת מבדילה בין תקלה ציבורית, debt פנימי ו־recommendation.

---

## שלב 13 — Permissions, Audit and Version History

**דחיפות:** בינונית–נמוכה כל עוד יש מנהל יחיד  
**משך משוער:** 3–6 שבועות  
**תלות:** workflow יציב ושימוש של יותר מאדם אחד

### תכולה

- roles: admin, editor, reviewer, read-only.
- הרשאות לפי action ולא רק לפי route.
- review separation כאשר נדרש: מחבר אינו מאשר את עצמו.
- audit log לתוכן, מקור, status, permissions ופרסום.
- version history עם diff קריא.
- restore כטיוטה חדשה, לא מחיקה של היסטוריה.
- session/device management ו־revocation.
- optional MFA ו־SSO לפי צורך.
- export של audit לצורכי גיבוי או בדיקה.

### שער סיום

- כל שינוי מהותי ניתן לייחוס.
- הורדת הרשאה נכנסת לתוקף מיד.
- rollback אינו עוקף review ו־publish gates.

---

## שלב 14 — Corrections, Scheduling and Editorial Operations

**דחיפות:** נמוכה–בינונית  
**משך משוער:** 2–4 שבועות  
**תלות:** שלבים 7 ו־13

### תכולה

- correction notice עם reason, date ו־visible/public flag.
- changelog לכל claim.
- distinction בין typo, factual correction ו־material update.
- scheduled review date.
- publish scheduling רק לאחר יציבות pipeline.
- unpublish/archive policy והשפעה על route/canonical.
- reminders ו־notifications פנימיות.
- approval metadata ו־editorial ownership.
- SLA מוצע ל־correction_needed ולמקור שבור קריטי.

### שער סיום

- תיקון מהותי אינו מחליף תוכן בלי trace ציבורי או פנימי מתאים.
- schedule אינו יכול לפרסם גרסה שלא עברה את כל ה־checks.

---

## שלב 15 — AI-assisted Editorial Tools

**דחיפות:** עתידית ואופציונלית  
**משך משוער:** 4–8 שבועות לפיילוט מוגבל  
**תלות:** schemas, sources, audit, permissions ו־validation יציבים

### שימושים מותרים לפיילוט

- הצעת tags ו־topic cluster;
- זיהוי submissions דומים;
- תקציר פנימי של מקור;
- הצעת שאלות מחקר;
- איתור טענות ללא citation;
- הצעת copy-share או alt text כטיוטה;
- בדיקת עקביות בין verdict, findings ו־sources;
- תרגום טיוטה עם review אנושי.

### מגבלות

- אין פרסום אוטומטי.
- אין קביעת verdict אוטומטית.
- אין יצירת citations שלא נפתחו ואומתו.
- output מסומן כהצעת AI ונשמר ב־audit כאשר אומץ.
- prompt/input אינם כוללים PII או מידע רגיש ללא מדיניות מפורשת.
- יש מעקב על עלות, latency, failure ו־model/version.

### שער סיום

- הפיילוט מוכיח חיסכון מדיד בזמן בלי ירידה באיכות.
- כל תוצר דורש החלטה אנושית מפורשת.
- ניתן לכבות את יכולת ה־AI בלי לפגוע בתהליך העריכתי.

---

## שלב 16 — Scale and Platform Evolution

**דחיפות:** עתידית  
**משך משוער:** 1–3 חודשים לכל מהלך משמעותי  
**תלות:** צורך מוכח מנתוני שימוש

### אפשרויות עתידיות, לא התחייבויות

- מעבר מתוכן ציבורי ב־Git למסד נתונים או headless CMS.
- queue לעיבוד media, link checks ופרסום.
- multi-site או multi-language content.
- API ציבורי או feeds מבוקרים.
- external reviewer portal.
- advanced search across sources/evidence.
- data warehouse לאנליטיקה ארוכת טווח.
- disaster recovery מתקדם ו־regional redundancy.

כל מעבר כזה דורש ADR חדש, migration plan, export path, parity tests ו־rollback plan. אין לבצע אותו רק משום שהמערכת “גדלה”; נדרש bottleneck מדיד.

---

# טווח זמן מצטבר

## מסלול ממוקד לערך ראשון

- שלבים 0–2: כ־2–4 שבועות.
- שלב 3, inbox פעיל: עוד 2–3 שבועות.
- ספריית מקורות בסיסית: עוד 3–5 שבועות.
- עורך Claim Check ראשון עם preview ופרסום מבוקר: עוד 4–7 שבועות.

**סה"כ ל־Dashboard שימושי ראשון:** בערך 3–5 חודשים של עבודה ממוקדת לאדם אחד.

## מערכת עריכה בוגרת

שלבים 0–14, עם סוגי תוכן נוספים, analytics, maintenance, הרשאות ותיקונים: בערך 8–14 חודשים של עבודה ממוקדת, בהתאם להיקף UI, ספקי auth/storage ולכמות המיגרציה.

## שכבות עתידיות

AI, scale, multi-language או החלפת source of truth אינם חלק מהתחייבות זמן כוללת. כל אחד מהם עשוי להוסיף 1–3 חודשים לאחר שהמערכת הבסיסית יציבה.

# סדר ביצוע מקבילי אפשרי

כדי לחסוך זמן בלי ליצור תלות מסוכנת:

- לאחר Stage 2, אפשר לפתח inbox ובסיס source library במקביל.
- evidence library יכולה להתחיל לאחר שמודל source יציב.
- analytics instrumentation יכול להיאסף מוקדם, אך dashboard analytics נבנה רק לאחר הגדרת שאלות עריכתיות.
- maintenance checks יכולים להיווצר בהדרגה, אך מרכז תחזוקה מאוחד מגיע לאחר route/SEO controls.
- אין לפתח Claim Editor לפני ש־auth, source model ו־publishing contract הוכרעו.

# Backlog מלא לשימור

## Now

- Read-only content status.
- Dashboard ADR.
- source of truth ו־sync contract.
- privacy, security, backup ו־export decisions.

## Next

- Authenticated dashboard shell.
- Claim submissions inbox.
- Reusable source library.
- Reusable evidence/exhibit library.
- Claim Check editor.
- PR/preview-based publishing.

## Later

- Route hygiene dashboard.
- SEO/GEO/AI-facing controls.
- Publish checklist and validation gate.
- Additional typed content models.
- Editorial analytics and prioritization.
- Maintenance center.
- Audit log and version history.
- Permissions and reviewer workflow.
- Corrections and scheduling.

## Future

- AI-assisted editorial work.
- Advanced analytics/data warehouse.
- Multi-language/multi-site.
- External review portal.
- CMS/DB migration if Git becomes a measured bottleneck.
- Public API or syndication feeds.

# סיכונים מרכזיים והגנות

| סיכון | הגנה מתוכננת |
|---|---|
| dashboard והאתר יוצאים מסנכרון | source of truth יחיד ו־derived outputs |
| פרסום עוקף validation | PR, CI, preview ו־publish gate |
| דליפת notes או PII | הפרדת stores, server auth ו־public payload tests |
| עריכה מקבילה דורסת שינוי | revision checks, diff ו־conflict resolution |
| מקור משתנה או נעלם | snapshots, freshness ו־broken-link workflow |
| SEO ידני יוצר drift | computed defaults ו־controlled overrides |
| schema משתנה ושובר records | schema versioning, migrations ו־parity tests |
| יותר מדי מערכת מוקדם מדי | בנייה לפי שלבים ושערי יציאה מדידים |
| analytics מובילים להחלטות שגויות | provenance, caveats וציון עדיפות מוסבר |
| AI מייצר מידע שגוי | human approval, citation verification ו־no auto-publish |

# מדדי הצלחה למערכת

- זמן מ־submission עד triage.
- זמן מטיוטה ל־preview ולפרסום.
- אחוז פרסומים שעוברים validation בניסיון הראשון.
- claims ללא primary/official source כאשר הוא זמין.
- מספר broken links ומשך עד תיקון.
- claims שעבר תאריך review.
- שיעור submissions כפולים או שנדחו.
- זמן ממוצע לטיפול בתיקון.
- מספר rollbacks וכשלי deployment.
- כיסוי audit לפעולות רגישות.
- אחוז עמודים עם OG, canonical, sitemap, `llms.txt` ו־structured data תקינים.
- חיסכון בזמן מכלי AI, אם יופעלו, לצד בדיקת איכות אנושית.

# מה לא בונים לפני שיש הצדקה

- עורך אוניברסלי לכל content type.
- הרשאות ארגוניות מורכבות לצוות של אדם אחד.
- scheduled publishing לפני ש־manual publishing יציב.
- dashboard analytics שאין מאחוריו החלטה עריכתית.
- migration למסד נתונים רק מטעמי אופנה.
- ClaimReview schema אוטומטי בלי מתודולוגיית fact-check עקבית ושקופה.
- AI search פתוח או AI drafting שמפרסם בלי review.
- comments/community system שאינו חלק מתהליך intake מוגדר.

# כלל תכנון להמשך

המסמך הזה שומר את התמונה המלאה, אבל אינו implementation plan אחד. לפני ביצוע כל שלב יש ליצור:

1. design/spec ממוקד לאותו שלב;
2. החלטות data, security ו־failure handling;
3. implementation plan עם קבצים ובדיקות מדויקים;
4. PR קטן וניתן להחזרה;
5. verification מקומי, CI, preview ורק אז production.

כך לא נאבד את החזון המלא, אבל גם לא ננסה לבנות מערכת של שנה בתוך שינוי אחד.

# הוראות לפתיחת שיחת המשך

בתחילת שיחה חדשה יש להשתמש בנוסח הבא:

> המשך מהמסמך `docs/superpowers/specs/2026-06-22-editorial-dashboard-roadmap-design.md`. קרא גם את `docs/editorial-roadmap.md`, בדוק את מצב הריפו, ה־branch, ה־PRs וה־`main`, וזהה את השלב הדחוף הראשון שטרם הושלם. לפני ביצוע הצג בקצרה מה כבר קיים, מה השלב הבא ומה בדיוק עומד להשתנות. אל תמחק או תשנה תוכן קיים בלי אישור. בסיום כל שלב, עדכן את מסמך ה־Roadmap באותו PR: סמן ✅ רק לאחר merge וכל הבדיקות הנדרשות, הוסף 🌐 רק לאחר אימות בפרודקשן, ורשום בקצרה מה בוצע ואיך אומת — בלי logs או פירוט יתר. אם המשימה היא תכנון בלבד, אל תכתוב קוד, אל תבצע push ואל תפרוס.
