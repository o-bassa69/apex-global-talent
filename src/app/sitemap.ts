import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://apexglobaltalentpvtltd.com";

  const routes = ["", "/gallery", "/gallery/japan", "/gallery/korea"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
