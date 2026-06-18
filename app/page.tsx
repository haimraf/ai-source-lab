const claims = [
  {
    title: "האם XRP נבחר להיות המטבע העולמי?",
    href: "/claims/xrp-global-currency",
    summary: "מה Ripple באמת אומרת, מה ISO 20022 אומר, ואיפה נולדה המסקנה על מטבע עולמי.",
  },
  {
    title: "האם מטוסים מרססים אלומיניום?",
    href: "/claims/chemtrails-aluminum",
    summary: "מה ההבדל בין שובלי התעבות, שינוי מזג אוויר והטענה על ריסוס אוכלוסייה.",
  },
  {
    title: "מהי 'תוכנית שבעת השלבים' של אג׳נדה 2030?",
    href: "/claims/agenda-2030-seven-steps",
    summary: "השוואה בין הפוסטרים שמופצים ברשת לבין המסמך הרשמי של האו״ם.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <span className="badge">בדיקות מקור בעברית</span>
        <h1>בודקים איפה העובדות נגמרות והסיפור מתחיל.</h1>
        <p className="lead">
          כל עמוד לוקח טענה נפוצה, חוזר למקורות ומראה מה נכון, מה לא נמצא ואיפה נוספה מסקנה שלא הופיעה במקור.
        </p>
      </section>

      <section className="box answer">
        <h2>למה האתר קיים?</h2>
        <p>
          כדי שיהיה אפשר לבדוק טענות רשת בעברית בלי להסתפק בפוסט, צילום מסך או תשובה כללית. כל בדיקה נשענת על מקורות שאפשר לפתוח ולקרוא.
        </p>
      </section>

      <section id="claims">
        <h2>טענות שנבדקו</h2>
        <div className="grid">
          {claims.map((claim) => (
            <article className="card" key={claim.href}>
              <a href={claim.href}>
                <h3>{claim.title}</h3>
                <p className="small">{claim.summary}</p>
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
