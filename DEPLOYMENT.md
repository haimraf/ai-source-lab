# פריסה וחיבורים

## Vercel

1. לפתוח את כפתור **Deploy with Vercel** ב-README.
2. לבחור את חשבון Vercel המתאים.
3. להשאיר Framework Preset על Next.js ו-Root Directory על ברירת המחדל.
4. לבצע Deploy.

אין צורך במשתני סביבה לפריסה הראשונית. Vercel מספקת כתובת זמנית אוטומטית.

## לאחר בחירת דומיין

להוסיף ב-Vercel משתנה סביבה:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

לאחר מכן לבצע Redeploy כדי שה-canonical, ה-sitemap וה-robots ישתמשו בדומיין הקבוע.

## חיבור מנועי חיפוש

- Google Search Console: אימות הדומיין ושליחת `/sitemap.xml`.
- Bing Webmaster Tools: אימות האתר ושליחת `/sitemap.xml`.
- לבדוק ש-`/robots.txt` ו-`/llms.txt` נגישים בפומבי.

## לפני אינדוקס מלא

- להשלים מקורות ראשוניים.
- להחליף תאריכי placeholder בתאריכים אמיתיים.
- לבדוק שכל מסקנה תואמת למקורות.
