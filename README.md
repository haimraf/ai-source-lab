# מקור בדיקה — AI Source Lab

MVP קטן בעברית שמטרתו לבדוק האם מקור חדש, מסודר ומובנה יכול להיסרק, להתאנדקס ולהופיע כמקור בתשובות של מנועי חיפוש ובינות מלאכותיות.

## האתר החי

[https://ai-source-lab.vercel.app/](https://ai-source-lab.vercel.app/)

הפרויקט מחובר ל-Vercel ומתפרס אוטומטית בכל עדכון לענף `main`.

## מה יש בגרסה הראשונה

- עמוד בית
- עמוד מתודולוגיה
- 3 עמודי טענות ראשוניים
- `robots.txt` פתוח לסורקים מרכזיים
- `sitemap.xml`
- `llms.txt` ניסיוני
- CI שבודק TypeScript ו-build בכל push
- מבנה תוכן אחיד: מה נטען, מה ידוע, מה לא הוכח, איפה הקפיצה, תגובה להעתקה

## התקנה מקומית

```bash
npm install
npm run dev
```

## בדיקות

```bash
npm run typecheck
npm run build
```

## כתובת האתר

כרגע האתר זמין בכתובת:

```text
https://ai-source-lab.vercel.app/
```

לאחר חיבור דומיין קבוע אפשר להגדיר ב-Vercel:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## לפני פרסום תוכן כמקור

1. להשלים מקורות ראשוניים בכל עמוד.
2. להחליף את שם האתר אם בוחרים מותג אחר.
3. לעדכן תאריכי בדיקה ורמות ודאות.
4. לחבר Google Search Console ו-Bing Webmaster Tools.

## מדידת הצלחה

- האם הדפים נסרקו ב-Google Search Console
- האם הם מופיעים על ביטויי זנב ארוך
- האם Perplexity / Copilot / ChatGPT Search מצטטים אותם
- אילו מקורות אחרים נבחרים במקום האתר ולמה

`llms.txt` הוא ניסוי משלים בלבד, לא תחליף לאינדוקס, תוכן איכותי וקישורים אמיתיים.
