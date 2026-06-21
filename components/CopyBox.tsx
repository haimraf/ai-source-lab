"use client";

import { useState } from "react";
import { Copy, MessageCircle } from "lucide-react";
import { buildWhatsAppShareUrl } from "@/lib/share-links";

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

  function handleWhatsAppShare() {
    window.open(buildWhatsAppShareUrl(text, window.location.href), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="copy-box">
      <p>{text}</p>
      <div className="copy-actions">
        <button className="copy-button" type="button" onClick={handleClick}><Copy aria-hidden="true" />העתקת תגובה</button>
        <button className="button-secondary" type="button" onClick={handleWhatsAppShare}><MessageCircle aria-hidden="true" />שיתוף ב-WhatsApp</button>
      </div>
      <span className="copy-status" role="status" aria-live="polite">
        {copied ? "התגובה הועתקה ללוח" : ""}
      </span>
    </div>
  );
}
