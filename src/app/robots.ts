import type { MetadataRoute } from "next";

const BASE_URL = "https://apexglobaltalentpvtltd.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Never block the icon/logo files: Googlebot-Image must be able to
        // fetch them for the favicon and knowledge-panel logo.
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
