import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicClusterPage } from "@/components/TopicClusterPage";
import { dynamicTopicClusters, getTopicClusterBySlug } from "@/lib/topic-clusters";

type TopicPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return dynamicTopicClusters.map((cluster) => ({ slug: cluster.slug }));
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cluster = getTopicClusterBySlug(slug);

  if (!cluster) {
    return {
      title: "אשכול לא נמצא | מקור בדיקה",
    };
  }

  return {
    title: `${cluster.shortTitle} | מקור בדיקה`,
    description: cluster.description,
    alternates: { canonical: cluster.path },
  };
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const cluster = getTopicClusterBySlug(slug);

  if (!cluster) notFound();

  return <TopicClusterPage cluster={cluster} />;
}
