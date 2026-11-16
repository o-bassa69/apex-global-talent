import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "APEX GLOBAL TALENT | Language Institute & Visa Advisory",
    short_name: "Apex Global Talent",
    description: siteConfig.company.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fafbfc",
    theme_color: "#0b1220",
    icons: [
      { src: "/assets/logo.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
