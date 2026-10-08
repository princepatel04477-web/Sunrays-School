import { z } from "zod";
import { markTodo } from "./todo";

export const siteConfigSchema = z.object({
  name: z.string(),
  legalName: z.string(),
  motto: z.object({
    deva: z.string(),
    translit: z.string(),
    en: z.string(),
  }),
  address: z.object({
    line1: z.string(),
    line2: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    full: z.string(),
  }),
  geo: z.object({
    lat: z.string(),
    lng: z.string(),
  }),
  phone: z.object({
    e164: z.string(),
    display: z.string(),
  }),
  email: z.string().email(),
  hours: z.string(),
  erpUrl: z.string().url(),
  appUrl: z.string().url(),
  youtubeId: z.string(),
  socials: z.object({
    facebook: z.string().optional(),
    instagram: z.string().optional(),
    youtube: z.string().optional(),
    twitter: z.string().optional(),
  }),
  whatsapp: z.string(),
});

export type SiteConfig = z.infer<typeof siteConfigSchema>;

export const siteConfig: SiteConfig = {
  name: "Sunrays Vidhyalaya",
  legalName: "Leo Institute of Education Trust",
  motto: {
    deva: "सा विद्या या विमुक्तये",
    translit: "Sā Vidyā Yā Vimuktaye",
    en: "That is knowledge which liberates",
  },
  address: {
    line1: "Plot No 1 to 5, Opp. Dakheshwar BRTS",
    line2: "Udhna–Navsari Road, Udhna",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    full: "Plot No 1 to 5, Opp. Dakheshwar BRTS, Udhna–Navsari Road, Udhna, Surat, Gujarat, India",
  },
  geo: {
    lat: markTodo(
      "geo.lat",
      "site.ts",
      "TODO_CLIENT: Latitude (e.g. 21.1458)",
      "Exact campus GPS coordinates"
    ),
    lng: markTodo(
      "geo.lng",
      "site.ts",
      "TODO_CLIENT: Longitude (e.g. 72.8422)",
      "Exact campus GPS coordinates"
    ),
  },
  phone: {
    e164: "+919624499911",
    display: "+91 96244 99911",
  },
  email: "sunraysvidhyalaya@gmail.com",
  hours: "Mon–Sat 10:00–17:30",
  erpUrl: "https://erp.sunraysschool.in/login",
  appUrl: "https://play.google.com/store/apps/details?id=com.leo.zibma",
  youtubeId: "ckHzmP1evNU",
  socials: {
    facebook: markTodo(
      "socials.facebook",
      "site.ts",
      "TODO_CLIENT: Facebook Page URL",
      "Link or leave blank"
    ),
    instagram: markTodo(
      "socials.instagram",
      "site.ts",
      "TODO_CLIENT: Instagram Profile URL",
      "Link or leave blank"
    ),
    youtube: markTodo(
      "socials.youtube",
      "site.ts",
      "TODO_CLIENT: YouTube Channel URL",
      "Link or leave blank"
    ),
    twitter: markTodo(
      "socials.twitter",
      "site.ts",
      "TODO_CLIENT: X/Twitter URL",
      "Link or leave blank"
    ),
  },
  whatsapp: markTodo(
    "whatsapp",
    "site.ts",
    "TODO_CLIENT: WhatsApp Business (+919624499911)",
    "Confirm primary WhatsApp enquiry number"
  ),
};
