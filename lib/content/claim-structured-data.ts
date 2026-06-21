import type {
  ClaimContent,
  ClaimFaqStructuredData,
  ClaimStructuredDataEntry,
} from "./claim-schema";

export type JsonLdDocument = Record<string, unknown> & {
  "@context": "https://schema.org";
};

export type ClaimStructuredDataSlots = {
  beforeArticle: readonly JsonLdDocument[];
  insideArticle: readonly JsonLdDocument[];
};

const faqStructuredDataAnswerOverrides = new Map([
  [
    "אז אסור להשתמש ב-AI למחקר?",
    "מותר ואף שימושי. AI טוב כמפת דרכים, לא כתחנה אחרונה. משתמשים בו כדי למצוא מה לבדוק, ואז בודקים את המקור עצמו.",
  ],
]);

function getStructuredDataEntry<TType extends ClaimStructuredDataEntry["type"]>(
  claim: ClaimContent,
  type: TType,
): Extract<ClaimStructuredDataEntry, { type: TType }> | undefined {
  if (!claim.structuredData || claim.structuredData.mode !== "configured") return undefined;
  return claim.structuredData.entries.find(
    (entry): entry is Extract<ClaimStructuredDataEntry, { type: TType }> => entry.type === type,
  );
}

function createArticleJsonLd(claim: ClaimContent, baseUrl: string): JsonLdDocument {
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
    mainEntityOfPage: `${baseUrl}${claim.path}`,
    author: author ? { "@type": "Person", name: author.name, url: `${baseUrl}/about` } : undefined,
  };
}

function createFaqJsonLd(
  claim: ClaimContent,
  config: ClaimFaqStructuredData,
  baseUrl: string,
): JsonLdDocument {
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
    ...(config.placement === "layout" || !config.items
      ? { mainEntityOfPage: `${baseUrl}${claim.path}` }
      : {}),
  };
}

function withoutJsonLdContext(document: JsonLdDocument): Record<string, unknown> {
  const { "@context": _context, ...entry } = document;
  return entry;
}

export function createClaimStructuredData(
  claim: ClaimContent,
  baseUrl: string,
): ClaimStructuredDataSlots {
  if (!claim.structuredData || claim.structuredData.mode !== "configured") {
    return { beforeArticle: [], insideArticle: [] };
  }

  const article = createArticleJsonLd(claim, baseUrl);
  const faqConfig = getStructuredDataEntry(claim, "faq");
  const faq = faqConfig ? createFaqJsonLd(claim, faqConfig, baseUrl) : undefined;

  if (claim.structuredData.container === "graph") {
    return {
      beforeArticle: [],
      insideArticle: [
        {
          "@context": "https://schema.org",
          "@graph": [article, faq]
            .filter((entry): entry is JsonLdDocument => Boolean(entry))
            .map(withoutJsonLdContext),
        },
      ],
    };
  }

  return {
    beforeArticle: faq ? [faq] : [],
    insideArticle: [article],
  };
}
