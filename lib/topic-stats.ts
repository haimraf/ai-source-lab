import { getClaimsForTopicCluster, type TopicCluster } from "./topic-clusters";

export function getTopicClusterStats(cluster: TopicCluster) {
  const publishedClaims = getClaimsForTopicCluster(cluster);
  return {
    publishedCount: publishedClaims.length,
    plannedCount: cluster.plannedClaims.length,
    updated: cluster.updated,
  };
}
