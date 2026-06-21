import { describe, expect, it } from "vitest";
import { createSiteSchema } from "./site-schema";

describe("site trust schema", () => {
  it("identifies the website, publisher, and responsible editor", () => {
    const schema = createSiteSchema("https://example.com");
    expect(schema["@graph"].map((item) => item["@type"])).toEqual(["WebSite", "Organization", "Person"]);
    expect(schema["@graph"][2].sameAs).toContain("https://github.com/haimraf");
  });
});
