import { describe, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));

import { getTrustedNetworkKey, isSameOriginRequest } from "./request-integrity";

describe("dashboard request integrity", () => {
  it("accepts same-origin Origin and Host headers", () => {
    expect(isSameOriginRequest({ origin: "https://example.com", host: "example.com" })).toBe(true);
    expect(isSameOriginRequest(new Headers({ origin: "https://example.com", host: "example.com" }))).toBe(true);
  });

  it("rejects cross-origin or malformed origin headers", () => {
    expect(isSameOriginRequest({ origin: "https://evil.example", host: "example.com" })).toBe(false);
    expect(isSameOriginRequest({ origin: "not a url", host: "example.com" })).toBe(false);
  });

  it("handles missing headers safely", () => {
    expect(isSameOriginRequest({})).toBe(false);
    expect(isSameOriginRequest({ host: "example.com" })).toBe(false);
    expect(isSameOriginRequest({ origin: "https://example.com" })).toBe(false);
  });

  it("hashes trusted network identifiers without persisting raw request data", () => {
    const key = getTrustedNetworkKey({ "x-vercel-id": "iad1::request-123" }, "secret");

    expect(key).toMatch(/^network:[a-f0-9]{64}$/);
    expect(key).not.toContain("iad1::request-123");
  });

  it("uses a safe placeholder when trusted request data or secret is missing", () => {
    expect(getTrustedNetworkKey({}, "secret")).toBe("network:unavailable");
    expect(getTrustedNetworkKey({ "x-vercel-id": "iad1::request-123" }, "")).toBe("network:unavailable");
    expect(getTrustedNetworkKey({ "x-forwarded-for": "203.0.113.1" }, "secret")).toBe("network:unavailable");
  });
});
