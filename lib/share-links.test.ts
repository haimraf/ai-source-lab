import { describe, expect, it } from "vitest";

import { buildGitHubIssueUrl, buildWhatsAppShareUrl } from "./share-links";

describe("share links", () => {
  it("encodes a Hebrew claim proposal into a GitHub issue", () => {
    const url = new URL(buildGitHubIssueUrl({ claim: "טענה לדוגמה", source: "https://example.com", context: "וואטסאפ", question: "מה המקור?" }));
    expect(url.hostname).toBe("github.com");
    expect(url.searchParams.get("title")).toContain("טענה לדוגמה");
    expect(url.searchParams.get("body")).toContain("https://example.com");
  });

  it("combines response text and page URL for WhatsApp", () => {
    const url = new URL(buildWhatsAppShareUrl("שורה תחתונה", "https://example.com/check"));
    expect(url.hostname).toBe("wa.me");
    expect(url.searchParams.get("text")).toBe("שורה תחתונה\n\nhttps://example.com/check");
  });
});
