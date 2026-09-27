import { BLOG_ENABLED } from "@/config/features";
import { safeFetch } from "@/sanity/lib/fetch";
import { POSTS_SITEMAP_QUERY } from "@/sanity/lib/queries";
import { MetadataRoute } from "next";

const BASE_URL = "https://catarinaabreumtc.com";

// Revalidate the sitemap once per hour
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static routes — no lastModified: a fake "now" date on every request
  // teaches Google to ignore the field.
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/consultas`, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${BASE_URL}/marcar-consulta`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/perfil-clinico`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${BASE_URL}/faq`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/privacidade`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/cookies`, changeFrequency: "yearly", priority: 0.2 },
  ];

  if (!BLOG_ENABLED) return staticRoutes;

  staticRoutes.push({
    url: `${BASE_URL}/blog`,
    changeFrequency: "weekly",
    priority: 0.8,
  });

  // Dynamic blog post routes from Sanity
  const posts = await safeFetch<{ slug: string; _updatedAt: string }[]>(
    POSTS_SITEMAP_QUERY,
    {},
    [],
  );
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
