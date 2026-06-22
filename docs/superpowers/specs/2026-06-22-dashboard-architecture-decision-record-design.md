# Dashboard Architecture Decision Record Design

## מטרת המסמך

מסמך זה מגדיר את מבנה ה־ADR שיסגור את שלב 1 במפת הדרכים. ה־ADR יקבע את גבולות המערכת לפני בחירת ספק למסד נתונים, authentication או object storage, ולפני הוספת dashboard ניתן לעריכה.

ההחלטה המנחה היא מודל דו־שכבתי:

1. Git הוא מקור האמת היחיד לתוכן ציבורי שפורסם.
2. מסד נתונים עתידי הוא מקור האמת למידע תפעולי פנימי בלבד.
3. פרסום יוצר change set או Pull Request מבוקר; הוא אינו מבצע mutation ישיר בפרודקשן.

## גבולות השלב

שלב 1 הוא תיעודי בלבד. הוא אינו מוסיף:

- מסד נתונים, authentication או sessions;
- routes חדשים או dashboard UI;
- עריכת תוכן, CMS או publishing workflow פעיל;
- storage, העלאות קבצים או migrations בפועל;
- מידע אישי, submissions או נתונים תפעוליים אמיתיים.

ה־ADR יהיה provider-agnostic. מותר לציין מועמדים עתידיים כדוגמאות או כ־shortlist לא מחייב, אך אסור שהחוזים, מודל הנתונים או מסלול ההתאוששות יהיו תלויים בספק מסוים.

## חלופות שנבחנו

### 1. בחירת ספקים בשלב ה־ADR

יתרון: מאפשר להתחיל פיתוח מהר יותר. חסרון: הופך החלטות עקרוניות לתוצאה של API קנייני, יוצר lock-in מוקדם וסותר את מטרת השלב.

### 2. ADR ספק־ניטרלי לחלוטין ללא מועמדים

יתרון: שומר על הפרדה נקייה בין architecture ל־procurement. חסרון: עלול להישאר תאורטי ולא לספק קריטריונים מעשיים לשלב 2.

### 3. ADR ספק־ניטרלי עם shortlist לא מחייב

זו החלופה שנבחרה. ה־ADR יקבע חוזים, גבולות, דרישות אבטחה, export ו־recovery. בשלב 2 ניתן יהיה להשוות ספקים מול דרישות אלו בלי לשנות את ההחלטה הארכיטקטונית.

## מבנה ה־ADR

ה־ADR יישמר ב־`docs/adr/0001-dashboard-foundation.md` ויכלול:

- סטטוס, תאריך והקשר;
- הבעיה והכוחות המשפיעים על ההחלטה;
- ההחלטה המרכזית והחלופות שנדחו;
- טבלת שיוך ישויות לשכבות;
- חוזה sync וזרימת preview/publish;
- auth והרשאות ראשוניות;
- PII, retention ומחיקה;
- storage ומדיה;
- audit, versioning ו־rollback;
- export, backup ו־recovery;
- schema versioning ומיגרציות;
- השלכות, סיכונים וטריגרים ל־ADR עתידי;
- checklist שמוכיח שכל החלטות החובה נסגרו.

## החלטות שה־ADR יקבע

### Source of truth

- typed content שנמצא ב־Git ונכנס ל־`main` הוא המקור הקנוני היחיד לעמודים ציבוריים, metadata, sitemap, `llms.txt` ו־structured data.
- מסד הנתונים העתידי הוא המקור הקנוני ל־submissions, משימות, הערות, triage, review decisions, פעילות משתמשים ואירועי audit.
- אין סנכרון דו־כיווני של אותו שדה בין Git ל־DB ואין שני עותקים קנוניים.

### גבולות ישויות

- **Content Type**: יחידת תוכן ציבורית מלאה, למשל Claim Check, Article או Policy Page. הגרסה המפורסמת נשמרת ב־Git.
- **Shared Record**: Source, Exhibit, Taxonomy או Redirect שניתן לקשר ליותר מפריט תוכן אחד. מועמד פנימי יכול להתחיל ב־DB; לאחר אישור, הייצוג הציבורי הקנוני נכתב ל־Git עם מזהה יציב. אין להשאיר עותק DB פעיל כמקור קנוני מקביל.
- **Operational Record**: Submission, Editorial Task, Review Decision, Publish Request, Audit Event או Maintenance Finding. נשמר ב־DB ואינו נכנס ל־payload ציבורי.

כל מאפיין עתידי חייב להשתייך לשכבה אחת כמקור אמת. אם יש מעבר מ־DB ל־Git, הוא מוגדר כ־promotion עם snapshot ומזהה, לא כסנכרון דו־כיווני.

### Git-backed publishing

- dashboard עתידי ייצור change set או PR שמכיל snapshot מלא וניתן לבדיקה.
- validation, tests ו־preview רצים לפני אישור ו־merge.
- production נבנה רק מ־`main`; אין write ישיר לקבצים או לנתונים ציבוריים בפרודקשן.
- conflict, validation failure או deployment failure עוצרים את הפרסום ומשאירים את הגרסה החיה ללא שינוי.

### Preview, staging ו־production

- **Preview**: build מבודד של branch/change set, עם אותו schema ואותם renderers של production.
- **Staging**: סביבת integration ל־dashboard ולמידע תפעולי מדומה או לא־רגיש; אין לה הרשאה לפרסם ישירות.
- **Production**: האתר הציבורי נבנה מ־`main`; שירותים תפעוליים משתמשים בסודות ובנתונים נפרדים מסביבת staging.

### Auth והרשאות

- שני roles ראשונים בלבד: `admin` ו־`read_only`.
- authorization נאכף בשרת בכל route ו־action; הסתרת UI אינה בקרת הרשאה.
- בחירת ספק auth נדחית לשלב 2 ותיבחן לפי sessions מאובטחים, revocation, audit, export ויכולת החלפה.

### PII, retention ומחיקה

- אוספים רק PII הנדרש לתהליך מוגדר, בשדות מובנים; אין לאסוף מידע רגיש בטקסט חופשי כברירת מחדל.
- submissions שנדחו נמחקים לאחר 90 יום, אלא אם חובה משפטית או אירוע אבטחה מחייבים hold מתועד.
- audit events נשמרים 24 חודשים. לפני מחיקה מסירים או מצמצמים payload שאינו נדרש להוכחת הפעולה.
- מחיקה ידנית, retention hold ושינוי מדיניות נרשמים ב־audit.

### Storage ומדיה

- קבצים גולמיים נשמרים ב־object storage פרטי עם signed access, checksum, מגבלת גודל ו־allowlist של סוגי קובץ.
- screenshot או PDF אינו הופך לציבורי רק משום שהועלה. פרסום דורש אישור מפורש ויצירת נכס ציבורי נגזר.
- metadata תפעולי של העלאה נשאר ב־DB; נכס ציבורי מאושר והייחוס שלו נכנסים ל־Git.
- orphan cleanup ו־retention לקבצים יוגדרו לפני הפעלת העלאות אמיתיות.

### Audit, versioning ו־rollback

- audit הוא append-only וכולל actor, action, entity type/id, timestamp, correlation ID ותוצאה.
- audit אינו שומר credentials, tokens או תוכן סודי מלא.
- Git מספק versioning ו־rollback לתוכן ציבורי; DB migrations ו־operational records משתמשים בגרסאות ואירועי audit נפרדים.
- rollback לתוכן ציבורי יוצר commit או revert מבוקר ואינו מוחק היסטוריה או audit.

### Export, backup ו־recovery

- export תפעולי משתמש בפורמטים פתוחים ומתועדים: JSON או JSONL לנתונים, וקבצים מקוריים עם manifest ו־checksums למדיה.
- backup מוצפן, מופרד מחשבון הייצור ובעל מדיניות retention מתועדת.
- לפני הכנסת מידע אמיתי נדרש restore drill שמקים סביבה נקייה מתוך backup ו־export בלבד.
- recovery אינו רשאי להסתמך רק על API קנייני של ספק פעיל.

### Sync contract

- כל change set מקבל מזהה יציב ו־base Git SHA.
- ה־payload הציבורי נוצר מ־schema version ידועה ועובר validation לפני יצירת PR.
- לאחר merge נשמר ב־DB reference ל־commit/deployment, אך Git נשאר מקור האמת לתוצאה הציבורית.
- divergence בין base SHA ל־`main`, שינוי schema לא נתמך או validation failure מחייבים rebase/regeneration; אין last-write-wins.
- sync הוא חד־כיווני בזמן publish: operational draft → validated snapshot → Git. קריאה מ־Git ל־dashboard מיועדת להצגת מצב ואינה משכתבת history.

### Schema versioning ומיגרציות

- לכל content schema ולכל operational schema יש version מפורשת ונפרדת.
- migrations הן forward-only, idempotent כאשר אפשר, וכוללות dry run, backup, verification ותוכנית rollback או restore.
- dashboard חייב לדחות schema version שאינו מכיר במקום לבצע coercion שקט.
- שינוי ששובר consumers מחייב migration plan, parity tests ותקופת תאימות מוגדרת.

## טיפול בכשלים

- validation failure מחזיר שגיאה בטוחה ומסמן את ה־change set כלא ניתן לפרסום.
- conflict מול `main` מחייב regeneration או resolution מפורש; אין merge אוטומטי של תוכן עריכתי.
- כשל upload, export, backup או restore אינו נמחק מה־audit ומייצר finding תפעולי.
- כשל deployment אינו משנה את סטטוס התוכן ל־published עד שנמצא deployment מאומת עבור ה־commit.

## אימות וקבלה

ה־ADR ייחשב שלם כאשר:

1. כל 11 ההחלטות המחייבות בשלב 1 מקבלות הכרעה מפורשת.
2. קיימת טבלה שממפה כל entity ויכולת עתידית ל־Git, ל־DB או למסלול promotion חד־כיווני.
3. מוגדרים export ו־restore drill לפני הכנסת מידע אמיתי.
4. אין בחירת ספק מחייבת ואין implementation של auth, DB, storage או UI.
5. אין סימוני עבודה לא גמורים או סתירה בין source of truth לבין sync contract.
6. `npm test`, `npm run check:content`, `npm run typecheck` ו־`npm run build` נשארים תקינים.

## עדכון מסמכי הסטטוס

לאחר שה־ADR ייכתב, ייבדק וימוזג:

- `docs/editorial-roadmap.md` יעודכן ל־✅ עבור Stage 13/שלב ה־ADR.
- `docs/superpowers/plans/2026-06-22-editorial-dashboard-roadmap-design.md` יעודכן תחת שלב 1 עם מה בוצע ואיך אומת.
- לא יתווסף 🌐, משום שזהו שלב תיעודי ללא תוצאה ציבורית שדורשת אימות production.
