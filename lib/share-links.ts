type Proposal = {
  claim: string;
  source?: string;
  context?: string;
  question?: string;
};

export function buildGitHubIssueUrl(proposal: Proposal) {
  const url = new URL("https://github.com/haimraf/ai-source-lab/issues/new");
  url.searchParams.set("title", `הצעת בדיקה: ${proposal.claim.trim()}`);
  url.searchParams.set("body", [
    `## הטענה\n${proposal.claim.trim()}`,
    `## המקור שעליו היא נשענת\n${proposal.source?.trim() || "לא צורף"}`,
    `## איפה ראיתי אותה\n${proposal.context?.trim() || "לא צוין"}`,
    `## מה מעניין לבדוק\n${proposal.question?.trim() || "לא צוין"}`,
  ].join("\n\n"));
  return url.toString();
}

export function buildWhatsAppShareUrl(text: string, pageUrl: string) {
  const url = new URL("https://wa.me/");
  const preparedText = text.trim();
  const message = /https?:\/\/\S+$/.test(preparedText) ? preparedText : `${preparedText}\n\n${pageUrl}`;
  url.searchParams.set("text", message);
  return url.toString();
}
