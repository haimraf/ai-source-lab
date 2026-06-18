export const metadata = {
  title: "אודות | מקור בדיקה",
  description: "מהו מקור בדיקה, למה הוא קיים ואיך נשמרת עצמאות העריכה.",
};

export default function AboutPage() {
  return (
    <article>
      <section className="hero">
        <span className="badge">אודות</span>
        <h1>מקור בדיקה נולד מבעיה פשוטה: צילום מסך רץ מהר יותר מהמקור.</h1>
        <p className="lead">זהו מיזם עצמאי בעברית שמפרק טענות רשת, חוזר למסמכים שעליהם הן נשענות ומציג לקורא את הדרך למסקנה.</p>
      </section>

      <div className="process-grid">
        <section className="process-card"><span>01</span><h3>למי האתר מיועד?</h3><p>למי שנתקל בטענה ורוצה תשובה שאפשר לפתוח, לבדוק ולשלוח הלאה בלי להסתפק ב"תאמין לי".</p></section>
        <section className="process-card"><span>02</span><h3>מה האתר אינו?</h3><p>לא אנציקלופדיה, לא תחליף לעיתונות ולא מערכת אוטומטית שמחליטה מה אמת.</p></section>
        <section className="process-card"><span>03</span><h3>איך נבחרים נושאים?</h3><p>לפי תפוצה ברשת, חוסר במקור עברי ברור והאפשרות לבדוק את הטענה מול חומר ראשוני.</p></section>
        <section className="process-card"><span>04</span><h3>איך נשמרת שקיפות?</h3><p>הקוד פתוח, המקורות גלויים, תאריכי העדכון מופיעים ותיקונים מתועדים.</p></section>
      </div>

      <h2>עצמאות ותוכן ממומן</h2>
      <div className="box answer">
        <p>דפי הבדיקה אינם מציגים תוכן ממומן. אם בעתיד יהיה שיתוף פעולה מסחרי, הוא יסומן בצורה ברורה ולא יקבע את מסקנת הבדיקה.</p>
      </div>

      <h2>שימוש בכלי בינה</h2>
      <p>כלי בינה יכולים לסייע באיתור מקורות, סידור חומר, תמלול ועריכה. הם אינם משמשים כמקור, והם אינם מפרסמים עמוד בלי מעבר אנושי על המקורות והמסקנה.</p>

      <h2>הפרויקט פתוח לבדיקה</h2>
      <p>הריפו הציבורי מאפשר לראות את הקוד ואת היסטוריית השינויים. אפשר גם לפתוח פנייה עם מקור חדש, תיקון או הצעה לבדיקה.</p>
      <div className="hero-actions">
        <a className="button-primary" href="https://github.com/haimraf/ai-source-lab" target="_blank" rel="noreferrer">פתיחת GitHub</a>
        <a className="button-secondary" href="/corrections">תיקונים ועדכונים</a>
      </div>
    </article>
  );
}
