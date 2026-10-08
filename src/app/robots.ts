import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dev-tokens", "/dev-motion", "/admin"],
      },
    ],
    sitemap: "https://sunraysschool.in/sitemap.xml",
  };
}
