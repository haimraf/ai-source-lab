export function createSiteSchema(baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${baseUrl}/#website`, name: "מקור בדיקה", url: baseUrl, inLanguage: "he" },
      { "@type": "Organization", "@id": `${baseUrl}/#organization`, name: "מקור בדיקה", url: baseUrl, founder: { "@id": `${baseUrl}/#editor` } },
      { "@type": "Person", "@id": `${baseUrl}/#editor`, name: "חיים רפאל", jobTitle: "עורך מקור בדיקה", url: `${baseUrl}/about`, sameAs: ["https://github.com/haimraf"] },
    ],
  } as const;
}
