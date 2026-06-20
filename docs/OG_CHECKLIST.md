# Open Graph checklist

כל עמוד בדיקה חדש חייב לעבור את הצעדים האלה לפני פרסום:

1. ליצור עמוד תוכן תחת `app/claims/.../page.tsx`.
2. להוסיף רשומה ל-`lib/claims-db.ts`.
3. להוסיף 4-5 תגיות מדויקות לרשומת ה-claim.
4. ליצור `opengraph-image.tsx` באותה תיקיית claim.
5. לבדוק שהתמונה מציגה עברית בסדר טבעי.
6. אם הכותרת נשברת לא טוב, להוסיף שורות ידניות ב-`splitTitleLines` בתוך `lib/social-image.tsx`.
7. אחרי פריסה, לבדוק preview חיצוני ולרענן cache.

## Homepage featured claim

כרטיס "בדיקה לדוגמה" בעמוד הבית לא משתמש יותר ב-SVG ידני.

הוא נשען על:

- `homeFeaturedClaimSlug` מתוך `lib/claims-db.ts`
- ה-`opengraph-image` של אותו עמוד claim

כדי להחליף את הבדיקה שמופיעה בהום, משנים רק את `homeFeaturedClaimSlug`. אין צורך ליצור SVG חדש לכל בדיקה.

## Topics page

עמוד `/topics` כולל רשימת "כל הבדיקות" שנבנית מתוך `claimRecords`.

כל פרסום חדש שנרשם ב-`lib/claims-db.ts` יופיע שם אוטומטית ברשימת הבדיקות. התגיות מוצגות גם שם ומשמשות תשתית לחיפוש חי עתידי.

## Generated SEO/GEO files

לא מעדכנים ידנית קבצים סטטיים ב-`public` עבור:

- `/sitemap.xml`
- `/robots.txt`
- `/llms.txt`

הם נוצרים מהקוד ומ-`claimRecords`.

הכלל: לא מעלים claim חדש בלי OG תקין ותגיות תקינות.
