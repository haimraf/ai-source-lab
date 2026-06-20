# Open Graph checklist

כל עמוד בדיקה חדש חייב לעבור את הצעדים האלה לפני פרסום:

1. ליצור עמוד תוכן תחת `app/claims/.../page.tsx`.
2. להוסיף רשומה ל-`lib/claims-db.ts`.
3. ליצור `opengraph-image.tsx` באותה תיקיית claim.
4. לבדוק שהתמונה מציגה עברית בסדר טבעי.
5. אם הכותרת נשברת לא טוב, להוסיף שורות ידניות ב-`splitTitleLines` בתוך `lib/social-image.tsx`.
6. לעדכן sitemap סטטי אם הוא עדיין קיים במקביל ל-`app/sitemap.ts`.
7. אחרי פריסה, לבדוק preview חיצוני ולרענן cache.

## Homepage featured claim

כרטיס "בדיקה לדוגמה" בעמוד הבית לא משתמש יותר ב-SVG ידני.

הוא נשען על:

- `homeFeaturedClaimSlug` מתוך `lib/claims-db.ts`
- ה-`opengraph-image` של אותו עמוד claim

כדי להחליף את הבדיקה שמופיעה בהום, משנים רק את `homeFeaturedClaimSlug`. אין צורך ליצור SVG חדש לכל בדיקה.

הכלל: לא מעלים claim חדש בלי OG תקין.
