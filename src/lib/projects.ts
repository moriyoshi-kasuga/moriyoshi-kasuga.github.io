import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

function compareProjects(
  a: CollectionEntry<"projects">,
  b: CollectionEntry<"projects">,
): number {
  if (a.data.pin !== b.data.pin) return a.data.pin ? -1 : 1;

  return b.data.createdAt.getTime() - a.data.createdAt.getTime();
}

export async function getSortedProjects(): Promise<
  CollectionEntry<"projects">[]
> {
  const projects = await getCollection("projects");
  return projects.sort(compareProjects);
}

export async function getFeaturedProjects(
  limit: number,
): Promise<CollectionEntry<"projects">[]> {
  return (await getSortedProjects()).slice(0, limit);
}
