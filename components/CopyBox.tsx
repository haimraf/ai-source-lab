"use client";

export function CopyBox({ text }: { text: string }) {
  function handleClick() {
    window.prompt("העתקת תגובה", text);
  }

  return (
    <div className="copy-box">
      <p>{text}</p>
      <button className="copy-button" type="button" onClick={handleClick}>
        פתיחת טקסט להעתקה
      </button>
    </div>
  );
}
