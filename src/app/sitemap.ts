import { MetadataRoute } from "next";
import { SITE, SERVICES, BLOG_POSTS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: SITE.url, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${SITE.url}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/blog`, priority: 0.8, changeFrequency: "daily" as const },
    { url: `${SITE.url}/contact`, priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const servicePages = SERVICES.map((s) => ({
    url: `${SITE.url}/services#${s.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const blogPages = BLOG_POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...servicePages, ...blogPages].map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
