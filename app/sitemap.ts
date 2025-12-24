import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ghayas-tech.pages.dev";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${baseUrl}/work/high-performance-brand`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/work/b2b-leader-experience`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/work/innovative-startup-landing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    }
  ];
}

