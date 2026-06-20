import { TopicClusterPage } from "@/components/TopicClusterPage";
import { getTopicClusterBySlug } from "@/lib/topic-clusters";

const agendaCluster = getTopicClusterBySlug("agenda-2030");

if (!agendaCluster) {
  throw new Error("Missing agenda-2030 topic cluster");
}

export const metadata = {
  title: `${agendaCluster.shortTitle} | מקור בדיקה`,
  description: agendaCluster.description,
  alternates: { canonical: agendaCluster.path },
};

export default function AgendaTopicPage() {
  return <TopicClusterPage cluster={agendaCluster} />;
}
