import { describe, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));

import {
  hashDashboardIdentifier,
  isDashboardEmailAllowed,
  normalizeDashboardEmail,
} from "./identity";

describe("dashboard identity helpers", () => {
  it("normalizes dashboard email addresses", () => {
    expect(normalizeDashboardEmail(" Owner@Example.COM ")).toBe("owner@example.com");
  });

  it("compares normalized email digests", () => {
    expect(isDashboardEmailAllowed("owner@example.com", "owner@example.com")).toBe(true);
    expect(isDashboardEmailAllowed("other@example.com", "owner@example.com")).toBe(false);
    expect(isDashboardEmailAllowed(" OWNER@EXAMPLE.COM ", "owner@example.com")).toBe(true);
  });

  it("hashes dashboard identifiers without exposing raw values", () => {
    const identifier = hashDashboardIdentifier("email", "owner@example.com", "secret");

    expect(identifier).toMatch(/^[a-f0-9]{64}$/);
    expect(identifier).not.toContain("owner@example.com");
  });

  it("requires a secret before hashing identifiers", () => {
    expect(() => hashDashboardIdentifier("email", "owner@example.com", "")).toThrow("secret");
  });
});
