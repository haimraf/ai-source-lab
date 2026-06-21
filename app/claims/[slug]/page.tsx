import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ClaimBodyRenderer } from "@/components/ClaimBodyRenderer";
import { getClaimContentRecordBySlug } from "@/lib/content/claim-loader";
import type { ClaimContent } from "@/lib/content/claim-schema";
import { createClaimStructuredData } from "@/lib/content/claim-structured-data";
import { siteUrl } from "@/lib/site";

const dynamicClaimSlugs = ["ai-as-source-pyramids", "gateway-process-out-of-body", "project-blue-beam-nasa", "cloud-seeding-chemtrails", "chemtrails-aluminum", "xrp-global-currency", "digital-shekel-spending-control", "ai-bci-synthetic-soul", "agenda-2030-seven-steps", "you-will-own-nothing-klaus-schwab", "who-pandemic-agreement-sovereignty", "15-minute-city-prison"] as const;
const dynamicClaimSlugSet = new Set<string>(dynamicClaimSlugs);
const contentSlugByRouteSlug: Partial<Record<(typeof dynamicClaimSlugs)[number], string>> = {
  "15-minute-city-prison": "fifteen-minute-city-prison",
};
const verdictLabels: Record<(typeof dynamicClaimSlugs)[number], string> = {
  "ai-as-source-pyramids": "AI אינו מקור — הוא כלי שמוביל למקורות",
  "gateway-process-out-of-body": "המסמך אמיתי — ההוכחה לא",
  "project-blue-beam-nasa": "נרטיב מוכר — מקור רשמי לא נמצא",
  "cloud-seeding-chemtrails": "זריעת עננים קיימת; היא לא מוכיחה Chemtrails",
  "chemtrails-aluminum": "לא נמצא בסיס לריסוס אלומיניום מטיסות רגילות",
  "xrp-global-currency": "לא נמצא בסיס רשמי לטענה",
  "digital-shekel-spending-control": "שאלות אמיתיות — תוכנית שליטה לא נמצאה",
  "ai-bci-synthetic-soul": "טכנולוגיה אמיתית — קפיצה לא מוכחת",
  "agenda-2030-seven-steps": "לא נמצא מקור רשמי לשבעת השלבים",
  "you-will-own-nothing-klaus-schwab": "מקור תרחישי — לא תוכנית הפקעה רשמית",
  "who-pandemic-agreement-sovereignty": "הטקסט שולל סמכות להכתיב מדיניות פנים",
  "15-minute-city-prison": "לא נמצא מקור רשמי לכליאה או איסור יציאה",
};
const headlineOverrides: Partial<Record<(typeof dynamicClaimSlugs)[number], string>> = {
  "agenda-2030-seven-steps": 'מהי "תוכנית שבעת השלבים" של אג׳נדה 2030?',
};
type ClaimPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

function getDynamicClaim(slug: string): ClaimContent | undefined {
  if (!dynamicClaimSlugSet.has(slug)) return undefined;
  const routeSlug = slug as (typeof dynamicClaimSlugs)[number];
  return getClaimContentRecordBySlug(contentSlugByRouteSlug[routeSlug] ?? routeSlug);
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
  const openGraphOverrides = claim.metadataOverrides?.openGraph;
  const twitterOverrides = claim.metadataOverrides?.twitter;

  const resolveSiteUrl = (value: string) => {
    const parsed = new URL(value, siteUrl);
    return parsed.pathname.startsWith(claim.path) ? `${siteUrl}${parsed.pathname}` : value;
  };

  const openGraphImages = openGraphOverrides?.images
    ? openGraphOverrides.images.map(({ url, width, height, alt }) => ({
        url: resolveSiteUrl(url),
        ...(width === undefined ? {} : { width }),
        ...(height === undefined ? {} : { height }),
        ...(alt === undefined ? {} : { alt }),
      }))
    : [socialImage];
  const twitterImages = twitterOverrides?.images
    ? twitterOverrides.images.map((image) => resolveSiteUrl(image))
    : [socialImage];

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: openGraphOverrides?.title ?? title,
      description: openGraphOverrides?.description ?? description,
      ...(openGraphOverrides?.url ? { url: resolveSiteUrl(openGraphOverrides.url) } : {}),
      ...(openGraphOverrides?.siteName ? { siteName: openGraphOverrides.siteName } : {}),
      ...(openGraphOverrides?.locale ? { locale: openGraphOverrides.locale } : {}),
      ...(openGraphOverrides?.type ? { type: openGraphOverrides.type } : {}),
      images: openGraphImages,
    },
    twitter: {
      card: twitterOverrides?.card ?? "summary_large_image",
      title: twitterOverrides?.title ?? title,
      description: twitterOverrides?.description ?? description,
      images: twitterImages,
    },
  };
}

export default async function ClaimPage({ params }: ClaimPageProps) {
  const { slug } = await params;
  const claim = getDynamicClaim(slug);
  if (!claim) notFound();

  const structuredData = createClaimStructuredData(claim, siteUrl);
  const updatedLabel = new Intl.DateTimeFormat("he-IL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${claim.updated}T00:00:00Z`));

  return (
    <>
      {structuredData.beforeArticle.map((document, index) => (
        <script
          key={`before-article-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(document) }}
        />
      ))}
      <article>
        {structuredData.insideArticle.map((document, index) => (
          <script
            key={`inside-article-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(document) }}
          />
        ))}

        <div className="claim-meta">
          <span className="badge verdict-badge">
            {verdictLabels[slug as (typeof dynamicClaimSlugs)[number]] ?? claim.verdict}
          </span>
          <span className="small">נבדק ועודכן: {updatedLabel}</span>
        </div>

        <h1>{headlineOverrides[slug as (typeof dynamicClaimSlugs)[number]] ?? claim.title}</h1>
        <ClaimBodyRenderer claim={claim} />
      </article>
    </>
  );
}
