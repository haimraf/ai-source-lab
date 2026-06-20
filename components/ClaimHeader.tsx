import type { ClaimRecord } from "@/lib/claims-db";

type ClaimHeaderProps = {
  claim: ClaimRecord;
  verdictLabel?: string;
  updatedLabel?: string;
  lead: string;
};

const agendaTags = new Set<string>(["אג׳נדה 2030", "SDGs"]);

function topicHrefForClaim(claim: ClaimRecord) {
  if (claim.tags.some((tag) => agendaTags.has(tag))) return "/topics/agenda-2030";
  return "/topics#all-checks";
}

export function ClaimHeader({ claim, verdictLabel, updatedLabel, lead }: ClaimHeaderProps) {
  return (
    <header className="claim-header">
      <a className="badge claim-kicker-link" href={topicHrefForClaim(claim)}>
        {claim.kicker}
      </a>
      <h1>{claim.title}</h1>
      <div className="claim-header-meta">
        {verdictLabel ? <span className="badge verdict-badge">{verdictLabel}</span> : null}
        {updatedLabel ? <span className="small">{updatedLabel}</span> : null}
      </div>
      <p className="lead">{lead}</p>
    </header>
  );
}
