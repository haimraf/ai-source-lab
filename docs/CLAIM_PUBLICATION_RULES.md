# Claim publication rules

Date: 2026-06-23

מסמך קצר לחוקים שחייבים לבדוק בכל פעם שמוסיפים בדיקה חדשה ל״מקור בדיקה״.

המטרה: למנוע מצב שבו התוכן נכון אבל CI נופל כי נשכח עדכון טכני קטן כמו ספירת בדיקות, sitemap, OG או דוקס.

## כלל בסיס

כל claim חדש הוא לא רק קובץ תוכן.

Claim חדש חייב לעבור דרך כל השכבות האלה:

1. תוכן
2. רישום במאגר
3. אשכול
4. OG
5. sitemap
6. llms / חיפוש
7. workflow metadata
8. tests / published count
9. דוקס מסונכרן

אם אחת השכבות חסרה, ה-PR לא מוכן למיזוג גם אם העמוד עצמו נראה טוב.

## רשימת חובה לכל claim חדש

### 1. קובץ תוכן

ליצור קובץ ב-`content/claims/<slug>.ts`.

הקובץ חייב לכלול:

- `slug`
- `path`
- `title`
- `description`
- `kicker`
- `tags`
- `verdict`
- `cluster`
- `updated`
- `sources`
- `faq`
- `body`
- `structuredData`
- `metadataOverrides`
- `workflow`

### 2. רישום במאגר

לעדכן `content/claims/index.ts`:

- להוסיף import לקובץ החדש.
- להוסיף את הרשומה ל-`claimContentRecords`.

בלי זה העמוד לא ייכנס ל-loader, לחיפוש, ל-sitemap או ל-llms.

### 3. אשכול מתאים

לעדכן `lib/topic-clusters.ts` אם צריך:

- לחבר את ה-slug ל-`claimSlugs` של אשכול קיים.
- אם נפתח אשכול חדש, לתעד את החלטת הטקסונומיה בדוקס.
- לא לפתוח אשכול חדש רק כי אין מקום מושלם. קודם לבדוק `docs/schema-audit-checkpoint.md` ו-`docs/editorial-roadmap.md`.

### 4. TopicClusterSlug

אם נפתח אשכול חדש, לעדכן את union type ב-`lib/claims-db.ts`.

דוגמה:

```ts
export type TopicClusterSlug =
  | "ai-sources"
  | "public-health";
```

### 5. Open Graph

ליצור:

`app/claims/<slug>/opengraph-image.tsx`

ולוודא שהוא משתמש ב-`getClaimBySlug("<slug>")`.

אחרי פריסה צריך לבדוק שהעברית לא נשברת בתמונת השיתוף.

### 6. sitemap

לעדכן `public/sitemap.xml`.

הדרך המועדפת:

```bash
npm run generate:sitemap
```

אם לא מריצים מקומית, חייבים לוודא ידנית שה-URL החדש מופיע ב-sitemap וששדה `lastmod` תואם ל-`updated` של ה-claim.

### 7. llms.txt

`/llms.txt` נבנה דינמית מרשומות התוכן.

אחרי הוספת claim צריך לבדוק שהוא מופיע ב-llms עם:

- title
- path
- tags
- cluster

בדרך כלל אין צורך לערוך את `app/llms.txt/route.ts`, אלא אם מבנה ה-output משתנה.

### 8. Published claim count

אם claim חדש נוסף ל-`claimContentRecords`, צריך לעדכן את קבוע הספירה בטסטים.

נכון לעדכון זה:

```ts
const PUBLISHED_CLAIM_COUNT = 26;
```

מקומות חובה:

- `lib/content/claim-sitemap.test.ts`
- `lib/content/claim-workflow.test.ts`

הסימן שנשכח העדכון:

```text
expected ... to have a length of 25 but got 26
```

זה לא באג תוכן. זה אומר שהמאגר גדל והטסטים עדיין מצפים לספירה הישנה.

### 9. README / Roadmap / Docs

לעדכן לפי הצורך:

- `README.md` — מספר הבדיקות ורשימת הבדיקות.
- `docs/editorial-roadmap.md` — אם ה-claim משנה שלב, אשכול או backlog.
- `docs/editorial-patterns.md` — אם ה-claim משתמש בדפוס עריכה חדש או מחזק דפוס קיים.
- `docs/schema-audit-checkpoint.md` — רק אם יש החלטת schema/taxonomy משמעותית.
- `docs/OPERATIONS.md` — אם השתנה כלל תפעולי.

לא כל claim דורש עדכון לכל הדוקס, אבל כל claim דורש בדיקה מודעת של הרשימה הזאת.

## Health / public-health claims

Claims רפואיים דורשים זהירות נוספת.

חובה:

- להשתמש במקורות רשמיים או רפואיים חזקים.
- לשמור על claim צר.
- להוסיף גבול ברור: מקור בדיקה אינו ייעוץ רפואי אישי.
- לא לתת המלצת טיפול, מינון, אבחון או הנחיה אישית.
- להפריד בין מחקר, אישור רגולטורי, המלצה רפואית וטענת רשת.

ברירת המחדל לאשכול:

- `public-health` — לטענות על ראיות רפואיות, תוספים, מנגנוני חיסון, מוצרי בריאות או ניסוח רגולטורי רפואי.
- `institutional-narratives` — לטענות שעיקרן כוח מוסדי, ריבונות, אמנות, ייחוס ציטוטים או נרטיב ציבורי רחב.

## בדיקות לפני merge

לפני מיזוג PR תוכן:

```bash
npm test
npm run check:content
npm run typecheck
npm run build
```

ב-CI הנוכחי, אם `npm test` נופל, השלבים הבאים יידלגו. לכן קודם מתקנים את הטסטים ואז מחכים לריצה חדשה.

## כלל פרודקשן

לא מפעילים production trigger רק כי נוסף claim.

מותר לשקול trigger רק אם:

- ה-PR מוזג ל-main.
- CI ירוק.
- אין rate limit פעיל או שיש סיבה ברורה לבזבז ניסיון פריסה.
- יש batch ששווה טריגר אחד.

בזמן Vercel rate limit ממשיכים לעבוד ב-PRים. GitHub `main` הוא מקור האמת, והאתר החי יכול להיות בפיגור זמני.
