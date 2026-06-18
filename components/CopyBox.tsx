"use client";

import { useState } from "react";

export function CopyBox({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      textarea.setAttribute("aria-hidden", "true");
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="copy-box">
      <p>{text}</p>
      <button className="copy-button" type="button" onClick={handleClick}>
        העתקת תגובה
      </button>
      <span className="copy-status" role="status" aria-live="polite">
        {copied ? "התגובה הועתקה ללוח" : ""}
      </span>
    </div>
  );
}
