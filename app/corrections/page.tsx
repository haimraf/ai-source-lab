export const metadata = {
  title: "תיקונים ועדכונים | מקור בדיקה",
  description: "איך שולחים תיקון, מקור חדש או בקשה לעדכון עמוד במקור בדיקה.",
};

export default function CorrectionsPage() {
  return (
    <article>
      <section className="hero">
        <span className="badge">תיקונים ועדכונים</span>
        <h1>בדיקה טובה צריכה גם דרך ברורה לתקן אותה.</h1>
        <p className="lead">אפשר לשלוח מקור חדש, להצביע על שגיאה או לבקש בדיקה חוזרת. פנייה טובה כוללת קישור והסבר קצר למה הוא משנה את העמוד.</p>
      </section>

      <div className="process-grid">
        <section className="process-card"><span>01</span><h3>מצרפים קישור מדויק</h3><p>עדיף מסמך ראשוני, עמוד רשמי או מחקר שאפשר לפתוח ולבדוק.</p></section>
        <section className="process-card"><span>02</span><h3>מסבירים מה צריך להשתנות</h3><p>משפט אחד על הטענה, ועוד משפט על החלק שהמקור החדש משנה.</p></section>
        <section className="process-card"><span>03</span><h3>החומר נבדק</h3><p>המקור נקרא בהקשר שלו ונבדק מול המקורות שכבר מופיעים בעמוד.</p></section>
        <section className="process-card"><span>04</span><h3>התיקון מתועד</h3><p>שינוי מהותי מקבל תאריך עדכון והיסטוריית הקומיטים נשארת פתוחה ב-GitHub.</p></section>
      </div>

      <h2>פתיחת פנייה</h2>
      <div className="box answer">
        <p>כרגע הדרך הישירה ביותר היא לפתוח Issue בריפו הציבורי. אין צורך בידע טכני, רק כותרת, קישור והסבר קצר. אם זו טענה חדשה ולא תיקון, עדיף להשתמש ב־<a className="text-link" href="/suggest-claim">עמוד הצעת טענה</a>.</p>
        <a className="button-primary" href="https://github.com/haimraf/ai-source-lab/issues/new" target="_blank" rel="noreferrer">פתיחת בקשת תיקון</a>
      </div>

      <h2>מתי עמוד יעודכן?</h2>
      <ul>
        <li>כאשר מקור רשמי חדש משנה את המסקנה.</li>
        <li>כאשר ציטוט הוצג בלי ההקשר המלא.</li>
        <li>כאשר קישור נשבר או הוחלף.</li>
        <li>כאשר ניסוח יוצר ודאות חזקה יותר מהראיות.</li>
      </ul>

      <h2>מה לא נחשב תיקון?</h2>
      <p>אי הסכמה לבדה אינה טעות. כדי לשנות מסקנה צריך להציג מקור או טיעון שניתן לבדוק, לא רק עמדה אחרת.</p>
    </article>
  );
}
