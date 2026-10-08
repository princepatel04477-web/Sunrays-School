import type { MetadataRoute } from "next";
import { schoolEvents } from "@/content/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sunraysschool.in";

  const staticRoutes = [
    "",
    "/about",
    "/about/trustee",
    "/about/headmaster",
    "/about/faculty",
    "/about/awards",
    "/academics",
    "/academics/streams",
    "/academics/gseb",
    "/academics/labs",
    "/academics/career-counselling",
    "/academics/calendar",
    "/academics/syllabus",
    "/life",
    "/life/sports",
    "/life/culture",
    "/events",
    "/gallery",
    "/admissions",
    "/admissions/procedure",
    "/admissions/fees",
    "/admissions/policy",
    "/admissions/tc-updates",
    "/admissions/enquire",
    "/contact",
    "/careers",
    "/mandatory-disclosure",
    "/privacy",
  ];

  const now = new Date();

  const routes: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path.startsWith("/admissions") ? 0.9 : 0.8,
  }));

  const eventRoutes: MetadataRoute.Sitemap = schoolEvents.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...routes, ...eventRoutes];
}
