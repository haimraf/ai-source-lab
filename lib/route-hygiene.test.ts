import { describe, expect, it } from "vitest";

import nextConfig from "../next.config";
import { dynamicTopicClusters, topicClusters } from "./topic-clusters";

describe("route hygiene", () => {
  it("redirects the legacy XRP claim URL to its canonical claim", async () => {
    const redirects = await nextConfig.redirects?.();

    expect(redirects).toContainEqual({
      source: "/claims/xrp-world-currency",
      destination: "/claims/xrp-global-currency",
      permanent: true,
    });
  });

  it("keeps the unrelated sermap typo as a normal 404", async () => {
    const redirects = await nextConfig.redirects?.();

    expect(redirects ?? []).not.toEqual(
      expect.arrayContaining([expect.objectContaining({ source: "/sermap" })]),
    );
  });

  it("maps every topic to one concrete public URL", () => {
    const paths = topicClusters.map((topic) => topic.path);
    const allPathsAreConcrete = topicClusters.every(
      (topic) =>
        topic.path === `/topics/${topic.slug}` &&
        !topic.path.includes("[") &&
        !topic.path.includes("]"),
    );

    expect(new Set(paths).size).toBe(paths.length);
    expect(allPathsAreConcrete).toBe(true);
    expect(dynamicTopicClusters.map((topic) => topic.slug)).toEqual(
      topicClusters.filter((topic) => topic.slug !== "agenda-2030").map((topic) => topic.slug),
    );
  });
});
