# מקור בדיקה - AI Source Lab

מיזם עברי עצמאי לבדיקת טענות רשת, מסמכים ונרטיבים ציבוריים מול מקורות שניתן לפתוח.

המטרה אינה לצעוק "פייק" ואינה לבחור צד. המטרה היא להראות לקורא מה נטען, מה המקור אומר, איפה מתחילה הקפיצה הלוגית ומה אפשר לקבוע בזהירות.

## האתר החי

https://ai-source-lab.vercel.app/

האתר מתפרס אוטומטית ב-Vercel בכל עדכון לענף `main`, אבל production יכול להיות בפיגור כאשר יש build-rate-limit. במצב כזה GitHub `main` הוא מקור האמת.

## מודל שימוש ציבורי

מקור בדיקה אינו צ׳אט שבודק כל פרומפט בזמן אמת.

המודל הנוכחי:

1. מחפשים בדיקה קיימת במאגר.
2. פותחים עמוד בדיקה עם שורה תחתונה, מקור, מה כן נכון ואיפה הקפיצה.
3. אם אין בדיקה קיימת, מציעים טענה לבדיקה עתידית.

## למה הפרויקט קיים

ברשת קל מאוד להפוך צילום מסך, פוסט, סרטון או תשובת AI ל"מקור". מקור בדיקה נבנה כדי להחזיר את השיחה צעד אחד אחורה: לפתוח את המקור, לקרוא אותו, ולראות האם המסקנה באמת מופיעה בו.

זה גם ניסוי SEO/GEO: האם אתר עברי קטן, מסודר ושקוף יכול להיסרק, להתאנדקס ולהופיע בתוצאות חיפוש ובתשובות של מנועי AI.

## שלב נוכחי

הפרויקט עבר משלב MVP ראשוני לשלב מאגר תוכן פעיל.

- יש 25 בדיקות שפורסמו או מוכנות לפרסום בענף הנוכחי.
- יעד קצר ראשון של 24 בדיקות הושלם.
- יעד מאגר ראשון: 50-70 בדיקות איכותיות כדי להפוך לכתובת שחוזרים אליה.
- כל בדיקה חדשה צריכה להישאר claim צר עם מקור מרכזי פתוח, אשכול ברור, OG, sitemap, llms ותיעוד מסונכרן.

## בדיקות שפורסמו

- `/claims/ai-bci-synthetic-soul` - האם BCI ו-AI מוכיחים שליטה חיצונית בגוף?
- `/claims/gravity-loss-2026-project-anchor` - האם פרויקט Anchor של 2026 מוכיח איבוד כוח כבידה?
- `/claims/monster-energy-666-logo` - האם הלוגו של Monster Energy הוא 666 מוסתר?
- `/claims/spider-man-hand-sign` - האם תנועת היד של ספיידרמן היא סמל נסתר?
- `/claims/kal-el-hebrew-meaning` - האם Kal-El בעברית אומר קול האל?
- `/claims/project-blue-beam-nasa` - האם Project Blue Beam הוא תוכנית רשמית של NASA?
- `/claims/moon-landing-flag-shadows-stars` - האם הדגל, הצללים והכוכבים מוכיחים שהנחיתה על הירח זויפה?
- `/claims/mrna-vaccines-dna-genome` - האם חיסון mRNA משנה את ה-DNA או הגנום?
- `/claims/rockefeller-lock-step-pandemic-scenario` - האם דוח Lock Step של רוקפלר חזה או תכנן את הקורונה?
- `/claims/who-pandemic-agreement-sovereignty` - האם אמנת המגיפות נותנת ל-WHO סמכות על מדיניות פנים?
- `/claims/event-201-pandemic-exercise` - האם Event 201 מוכיח שתכננו את מגפת הקורונה?
- `/claims/pallavicini-islam-responsibility` - האם משפחת Pallavicini אחראית על האסלאם?
- `/claims/great-reset-global-government` - האם The Great Reset הוא תוכנית רשמית לשלטון עולמי?
- `/claims/bill-gates-vaccines-population-reduction` - האם ביל גייטס אמר שחיסונים יורידו אוכלוסייה?
- `/claims/gateway-process-out-of-body` - האם מסמך Gateway מוכיח יציאה מהגוף?
- `/claims/ai-as-source-pyramids` - האם תשובת AI היא מקור?
- `/claims/cloud-seeding-chemtrails` - האם זריעת עננים מוכיחה Chemtrails?
- `/claims/haarp-earthquakes` - האם HAARP יכול לגרום לרעידות אדמה?
- `/claims/15-minute-city-prison` - האם עיר 15 דקות היא כלא עירוני?
- `/claims/agenda-2030-seven-steps` - האם קיימת תוכנית רשמית בת שבעה שלבים של אג׳נדה 2030?
- `/claims/you-will-own-nothing-klaus-schwab` - האם קלאוס שוואב אמר שלא יהיה לכם כלום?
- `/claims/digital-shekel-spending-control` - האם שקל דיגיטלי יאפשר להגביל קניות?
- `/claims/iso-20022-global-currency` - האם ISO 20022 הוא מטבע עולמי או בחירה ב-XRP?
- `/claims/xrp-global-currency` - האם XRP נבחר להיות המטבע העולמי?
- `/claims/chemtrails-aluminum` - האם מטוסים מרססים אלומיניום?

## תשתית אמון באתר

- `/methodology` - שיטת הבדיקה והיררכיית המקורות
- `/editorial-policy` - מדיניות עריכה ושימוש בכלי בינה
- `/corrections` - תיקונים ועדכונים
- `/about` - אודות המיזם
- `/topics` - מפת נושאים, תגיות ואשכולות עתידיים
- `/privacy` - פרטיות ומדידה
- `/accessibility` - הצהרת נגישות
- `/llms.txt` - קובץ ניסיוני למנועי AI, נוצר מתוך רשימת הבדיקות והתגיות
- `/sitemap.xml` - מפת אתר סטטית למנועי חיפוש, נוצרת מרשומות התוכן
- `/robots.txt` - כללי סריקה סטטיים

## מפת דוקס

- `docs/feedback-round-1.md` - משוב עריכה ראשון, baseline היסטורי ותוכנית שיוף.
- `docs/editorial-roadmap.md` - רודמאפ תוכן, אשכולות, backlog ובדיקות עתידיות.
- `docs/content-sync-2026-06-23-haarp.md` - סטטוס סנכרון אחרי Lock Step, HAARP וטריגר batch.
- `docs/schema-audit-checkpoint.md` - שלב בקרה עתידי לבחינת schema, דפי דגל וטקסונומיית בריאות לפני יצירת batch תוכן נוסף.
- `docs/OPERATIONS.md` - צ׳קליסט תפעול לפרסום בדיקה חדשה, SEO, GEO ופריסה.
- `docs/TECHNICAL_STATUS.md` - מצב טכני של הפרויקט והחלטות תשתית.
- `docs/DEPLOYMENT_NOTES.md` - הערות פריסה, תקלות Vercel/Search Console ומה לא לחזור עליו.
- `docs/OG_CHECKLIST.md` - בדיקות Open Graph ותמונות שיתוף.
- `docs/DOMAIN_MIGRATION_CHECKLIST.md` - כללי מעבר דומיין עתידי.
- `docs/POSTHOG.md` - תוכנית מדידה עתידית בלבד, לא פעילה כרגע.
- `docs/REACTIONS_ROADMAP.md` - רעיון עתידי לתגובות/ריאקשנים.
- `docs/day-0-baseline.md` - תמונת מצב בסיסית מתחילת העבודה.
- `docs/research/` - הערות מחקר לטענות ספציפיות.

## מבנה קבוע לעמוד בדיקה

1. הטענה המדויקת
2. תשובה קצרה
3. מה כן נכון
4. איפה מתרחשת הקפיצה הלוגית
5. מה לא נמצא או לא הוכח במקור
6. פירוט ראיות ומקורות
7. שאלות נפוצות
8. תגובה קצרה להעתקה
9. מקורות ישירים
10. תגיות נושא
11. הסבר מתודולוגי ותאריך עדכון

## עקרונות עריכה

- מקור ראשוני לפני סיכום משני.
- טענה אחת ברורה בכל עמוד.
- לא לכתוב "שקר" כאשר המסקנה המדויקת היא "לא נמצא מקור".
- להפריד בין עובדה, פרשנות, אפשרות והשערה.
- להציג גם את הגרעין הנכון שעליו נבנתה הטענה.
- להפריד בין ביקורת לגיטימית לבין הוכחה לטענה הוויראלית.
- לא להשתמש בתשובת AI כמקור.
- כלי בינה יכולים לסייע בחיפוש, סידור ועריכה, אך אינם קובעים את המסקנה.
- כל עמוד צריך להיות ניתן לתיקון אם מופיע מקור חדש.

## שפה עיצובית

האתר עבר משפת Landing רגילה לשפה של מערכת בדיקה:

- רקע כהה, חד ונקי
- כרטיסים שמרגישים כמו תיקי בדיקה ולא כמו פרסומת
- דגש על מקור, תאריך, תגיות ומסקנה
- איורים ותמונות פנימיים ככל האפשר כדי להימנע מבעיות זכויות יוצרים
- פחות קישוטים, יותר היררכיית מידע
- תמונות Open Graph בסגנון source file / editorial file

## תשתית טכנית

- Next.js 16.2.9
- React 19.2.7
- TypeScript 5
- Vercel
- Vercel Web Analytics
- ללא CMS בשלב הנוכחי

## קבצים מרכזיים

- `content/claims/` - רשומות התוכן המלאות של כל בדיקה.
- `content/claims/index.ts` - רישום כל הבדיקות שנטענות למערכת.
- `lib/claims-db.ts` - שכבת אינדקס, featured claim ונתוני SEO נגזרים.
- `lib/topic-clusters.ts` - אשכולות תוכן, בדיקות מתוכננות ומיפוי מקורות.
- `lib/content/claim-loader.ts` - טעינת claims לפי slug, path ואשכול.
- `app/claims/[slug]` - route דינמי שמרנדר את כל עמודי הבדיקות.
- `app/page.tsx` - עמוד הבית.
- `app/topics/page.tsx` - מפת נושאים וכל הבדיקות.
- `components/ClaimSearch.tsx` - חיפוש חי בתוך בדיקות קיימות.
- `public/sitemap.xml` - sitemap סטטי שנוצר מרשומות התוכן.
- `public/robots.txt` - robots סטטי.
- `app/llms.txt/route.ts` - llms.txt דינמי.
