import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Instrument_Sans,
  Tiro_Devanagari_Sanskrit,
  Noto_Serif_Gujarati,
} from "next/font/google";
import { SmoothScroll } from "@/lib/motion/SmoothScroll";
import { MotionProvider } from "@/lib/motion/MotionProvider";
import {
  SkipToContent,
  Preloader,
  UtilityBar,
  Header,
  Footer,
} from "@/components/chrome";
import { FloatingContactPill } from "@/components/chrome/FloatingContactPill";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const sansFont = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const devaFont = Tiro_Devanagari_Sanskrit({
  subsets: ["latin", "devanagari"],
  weight: ["400"],
  variable: "--font-deva",
  display: "swap",
  preload: false,
});

const guFont = Noto_Serif_Gujarati({
  subsets: ["latin", "gujarati"],
  weight: ["400", "500"],
  variable: "--font-gu",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sunraysschool.in"),
  title: {
    default: "Sunrays Vidhyalaya · Nursery to Std 12 · Udhna, Surat",
    template: "%s · Sunrays Vidhyalaya, Udhna, Surat",
  },
  description:
    "GSEB-affiliated school in Udhna, Surat offering Nursery to Std 12 in English & Gujarati medium (Science & Commerce streams). Run by Leo Institute of Education Trust.",
  keywords: [
    "school in Udhna Surat",
    "GSEB school Surat",
    "English medium school Udhna",
    "Gujarati medium school Udhna",
    "Science commerce school Udhna",
    "Sunrays Vidhyalaya",
    "Sunrays School",
    "Leo Institute of Education Trust",
  ],
  openGraph: {
    title: "Sunrays Vidhyalaya · Nursery to Std 12 · Udhna, Surat",
    description:
      "GSEB-affiliated school in Udhna, Surat offering Nursery to Std 12 in English & Gujarati medium (Science & Commerce streams). Run by Leo Institute of Education Trust.",
    url: "https://sunraysschool.in",
    siteName: "Sunrays Vidhyalaya",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

const schoolJsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "Sunrays Vidhyalaya",
  alternateName: "Sunrays School",
  parentOrganization: {
    "@type": "EducationalOrganization",
    name: "Leo Institute of Education Trust",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No 1 to 5, Opp. Dakheshwar BRTS, Udhna–Navsari Road",
    addressLocality: "Udhna, Surat",
    addressRegion: "Gujarat",
    postalCode: "394210",
    addressCountry: "IN",
  },
  telephone: "+919624499911",
  email: "sunraysvidhyalaya@gmail.com",
  url: "https://sunraysschool.in",
  logo: "https://sunraysschool.in/legacy/logo/logo.png",
  openingHours: "Mo-Sa 10:00-17:30",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${sansFont.variable} ${devaFont.variable} ${guFont.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-paper text-ink flex flex-col font-sans selection:bg-sun-glow/35">
        <SkipToContent />
        <Preloader />
        <MotionProvider>
          <SmoothScroll>
            <UtilityBar />
            <Header />
            <main id="main" className="flex-1 flex flex-col">
              {children}
            </main>
            <Footer />
            <FloatingContactPill />
          </SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}
