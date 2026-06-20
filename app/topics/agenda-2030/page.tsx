import { TopicClusterPage } from "@/components/TopicClusterPage";
import { getTopicClusterBySlug, type TopicCluster } from "@/lib/topic-clusters";

function getAgendaCluster(): TopicCluster {
  const cluster = getTopicClusterBySlug("agenda-2030");

  if (!cluster) {
    throw new Error("Missing agenda-2030 topic cluster");
  }

  return cluster;
}

const agendaCluster = getAgendaCluster();

export const metadata = {
  title: `${agendaCluster.shortTitle} | מקור בדיקה`,
  description: agendaCluster.description,
  alternates: { canonical: agendaCluster.path },
};

export default function AgendaTopicPage() {
  return <TopicClusterPage cluster={agendaCluster} />;
}
