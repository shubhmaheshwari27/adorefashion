import type { MetadataRoute } from "next";

function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://adorefashion.in";

  // Main pages
  const routes = ["", "/collections", "/about", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Collection categories
  const categories = [
    "bridal",
    "sarees",
    "festive",
    "indo-western",
  ].map((category) => ({
    url: `${baseUrl}/collections?category=${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...routes, ...categories];
}

export default sitemap;
