import { describe, expect, it } from "vitest";

import nextConfig from "../next.config";

describe("security headers", () => {
  it("applies the baseline browser security policy to every route", async () => {
    const rules = await nextConfig.headers?.();
    const globalRule = rules?.find((rule) => rule.source === "/(.*)");
    const names = globalRule?.headers.map((header) => header.key) ?? [];

    expect(names).toEqual(expect.arrayContaining([
      "Content-Security-Policy",
      "X-Content-Type-Options",
      "Referrer-Policy",
      "Permissions-Policy",
    ]));
  });
});
