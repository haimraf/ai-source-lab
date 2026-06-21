import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ClaimBodyRenderer } from "@/components/ClaimBodyRenderer";
import { getClaimContentRecordBySlug } from "@/lib/content/claim-loader";
import type { ClaimContent, ClaimStructuredDataEntry } from "@/lib/content/claim-schema";
import { siteUrl } from "@/lib/site";

const pilotSlug = "ai-as-source-pyramids";
const pilotVerdictLabel = "AI אינו מקור — הוא כלי שמוביל למקורות";
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

function getPilotClaim(slug: string): ClaimContent | undefined {
  if (slug !== pilotSlug) return undefined;
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

function createFaqJsonLd(claim: ClaimContent) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: claim.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqStructuredDataAnswerOverrides.get(item.question) ?? item.answer,
      },
    })),
    mainEntityOfPage: `${siteUrl}${claim.path}`,
  };
}

export function generateStaticParams() {
  return [{ slug: pilotSlug }];
}

export async function generateMetadata({ params }: ClaimPageProps): Promise<Metadata> {
  const { slug } = await params;
  const claim = getPilotClaim(slug);
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
  const claim = getPilotClaim(slug);
  if (!claim) notFound();

  const articleJsonLd = createArticleJsonLd(claim);
  const faqJsonLd = createFaqJsonLd(claim);
  const updatedLabel = new Intl.DateTimeFormat("he-IL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${claim.updated}T00:00:00Z`));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

        <div className="claim-meta">
          <span className="badge verdict-badge">{pilotVerdictLabel}</span>
          <span className="small">נבדק ועודכן: {updatedLabel}</span>
        </div>

        <h1>{claim.title}</h1>
        <ClaimBodyRenderer claim={claim} />
      </article>
    </>
  );
}
