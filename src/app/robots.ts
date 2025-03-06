import type { MetadataRoute } from "next";

function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://adorefashion.in/sitemap.xml",
  };
}

export default robots;
