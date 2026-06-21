import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ClaimBodyRenderer } from "@/components/ClaimBodyRenderer";
import { getClaimContentRecordBySlug } from "@/lib/content/claim-loader";
import type { ClaimContent, ClaimFaqStructuredData, ClaimStructuredDataEntry } from "@/lib/content/claim-schema";
import { siteUrl } from "@/lib/site";

const dynamicClaimSlugs = ["ai-as-source-pyramids", "gateway-process-out-of-body", "project-blue-beam-nasa", "cloud-seeding-chemtrails", "chemtrails-aluminum", "xrp-global-currency"] as const;
const dynamicClaimSlugSet = new Set<string>(dynamicClaimSlugs);
const verdictLabels: Record<(typeof dynamicClaimSlugs)[number], string> = {
  "ai-as-source-pyramids": "AI אינו מקור — הוא כלי שמוביל למקורות",
  "gateway-process-out-of-body": "המסמך אמיתי — ההוכחה לא",
  "project-blue-beam-nasa": "נרטיב מוכר — מקור רשמי לא נמצא",
  "cloud-seeding-chemtrails": "זריעת עננים קיימת; היא לא מוכיחה Chemtrails",
  "chemtrails-aluminum": "לא נמצא בסיס לריסוס אלומיניום מטיסות רגילות",
  "xrp-global-currency": "לא נמצא בסיס רשמי לטענה",
};
const faqStructuredDataAnswerOverrides = new Map([
  [
    "אז אסור להשתמש ב-AI למחקר?",
    "מותר ואף שימושי. AI טוב כמפת דרכים, לא כתחנה אחרונה. משתמשים בו כדי למצוא מה לבדוק, ואז בודקים את המקור עצמו.",
  ],
]);

type ClaimPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

function getDynamicClaim(slug: string): ClaimContent | undefined {
  if (!dynamicClaimSlugSet.has(slug)) return undefined;
  return getClaimContentRecordBySlug(slug);
}

function getStructuredDataEntry<TType extends ClaimStructuredDataEntry["type"]>(
  claim: ClaimContent,
  type: TType,
): Extract<ClaimStructuredDataEntry, { type: TType }> | undefined {
  if (!claim.structuredData || claim.structuredData.mode !== "configured") return undefined;
  return claim.structuredData.entries.find(
    (entry): entry is Extract<ClaimStructuredDataEntry, { type: TType }> => entry.type === type,
  );
}

function createArticleJsonLd(claim: ClaimContent) {
  const config = getStructuredDataEntry(claim, "article");
  const author = claim.workflow.credits.find((credit) => credit.role === "author");

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: config?.headline ?? claim.title,
    description: config?.description ?? claim.description,
    datePublished: config?.datePublished ?? claim.workflow.publishedAt,
    dateModified: config?.dateModified ?? claim.updated,
    inLanguage: config?.inLanguage ?? "he-IL",
    mainEntityOfPage: `${siteUrl}${claim.path}`,
    author: author ? { "@type": "Person", name: author.name, url: `${siteUrl}/about` } : undefined,
  };
}

function createFaqJsonLd(claim: ClaimContent, config: ClaimFaqStructuredData) {
  const items = config.items ?? claim.faq;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqStructuredDataAnswerOverrides.get(item.question) ?? item.answer,
      },
    })),
    ...(config.items ? {} : { mainEntityOfPage: `${siteUrl}${claim.path}` }),
  };
}

function withoutJsonLdContext(document: Record<string, unknown>) {
  const { "@context": _context, ...entry } = document;
  return entry;
}

export function generateStaticParams() {
  return dynamicClaimSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ClaimPageProps): Promise<Metadata> {
  const { slug } = await params;
  const claim = getDynamicClaim(slug);
  if (!claim) return {};

  const title = claim.metadataOverrides?.title ?? claim.seo.title ?? claim.title;
  const description = claim.metadataOverrides?.description ?? claim.seo.description ?? claim.description;
  const canonical = claim.metadataOverrides?.canonical ?? claim.path;
  const socialImage = { url: `${claim.path}/opengraph-image`, alt: claim.ogAlt };

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default async function ClaimPage({ params }: ClaimPageProps) {
  const { slug } = await params;
  const claim = getDynamicClaim(slug);
  if (!claim) notFound();

  const articleJsonLd = createArticleJsonLd(claim);
  const faqConfig = getStructuredDataEntry(claim, "faq");
  const faqJsonLd = faqConfig ? createFaqJsonLd(claim, faqConfig) : undefined;
  const usesGraph = claim.structuredData?.mode === "configured" && claim.structuredData.container === "graph";
  const graphJsonLd = usesGraph ? {
    "@context": "https://schema.org",
    "@graph": [articleJsonLd, faqJsonLd].filter(Boolean).map((entry) => withoutJsonLdContext(entry!)),
  } : undefined;
  const updatedLabel = new Intl.DateTimeFormat("he-IL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${claim.updated}T00:00:00Z`));

  return (
    <>
      {faqJsonLd && !usesGraph ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      ) : null}
      <article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphJsonLd ?? articleJsonLd) }} />

        <div className="claim-meta">
          <span className="badge verdict-badge">
            {verdictLabels[claim.slug as (typeof dynamicClaimSlugs)[number]] ?? claim.verdict}
          </span>
          <span className="small">נבדק ועודכן: {updatedLabel}</span>
        </div>

        <h1>{claim.title}</h1>
        <ClaimBodyRenderer claim={claim} />
      </article>
    </>
  );
}
