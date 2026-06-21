"use client";

import { type FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { buildGitHubIssueUrl } from "@/lib/share-links";

export function ClaimProposalForm() {
  const [claim, setClaim] = useState("");
  const [source, setSource] = useState("");
  const [context, setContext] = useState("");
  const [question, setQuestion] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.assign(buildGitHubIssueUrl({ claim, source, context, question }));
  }

  return (
    <form className="proposal-form box" onSubmit={submit}>
      <p className="small">הפרטים נשארים בדפדפן עד ללחיצה על הכפתור. לאחר מכן ייפתח GitHub עם טיוטה מוכנה לבדיקה לפני שליחה.</p>
      <label>הטענה <textarea required value={claim} onChange={(event) => setClaim(event.target.value)} /></label>
      <label>קישור למקור <input type="url" inputMode="url" value={source} onChange={(event) => setSource(event.target.value)} /></label>
      <label>איפה ראיתם אותה? <input value={context} onChange={(event) => setContext(event.target.value)} /></label>
      <label>מה מעניין לבדוק? <textarea value={question} onChange={(event) => setQuestion(event.target.value)} /></label>
      <button className="button-primary" type="submit"><Send aria-hidden="true" />פתיחת טיוטה מוכנה ב-GitHub</button>
    </form>
  );
}
