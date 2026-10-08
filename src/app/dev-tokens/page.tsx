import type { Metadata } from "next";
import { Container, Section, Hairline } from "@/components/layout";
import { SunMark } from "@/components/brand/SunMark";
import { Wordmark } from "@/components/brand/Wordmark";

export const metadata: Metadata = {
  title: "Design Tokens & Type Specimen · Sunrays Vidhyalaya",
  robots: {
    index: false,
    follow: false,
  },
};

const tokenSwatches = [
  { name: "--paper", hex: "#F7F3EC", role: "Primary background (ivory page)" },
  { name: "--paper-2", hex: "#EFE8DC", role: "Alternate section background" },
  { name: "--porcelain", hex: "#FBFAF7", role: "Cards and photo mats" },
  { name: "--ink", hex: "#0E1638", role: "Primary body & display text (deep navy)" },
  { name: "--ink-2", hex: "#2A3358", role: "Utility bar / secondary dark" },
  { name: "--muted", hex: "#5E6478", role: "Secondary body text (AA on paper)" },
  { name: "--sun", hex: "#C8892B", role: "Saffron accent (hairlines, small caps)" },
  { name: "--sun-text", hex: "#9A6416", role: "Saffron accent as text (AA compliant)" },
  { name: "--sun-glow", hex: "#F2B25C", role: "Sunrise glow & subtle radiant highlights" },
  { name: "--line", hex: "rgba(14,22,56,0.12)", role: "Hairline rules on paper" },
  { name: "--line-dark", hex: "rgba(247,243,236,0.14)", role: "Hairline rules on ink" },
];

export default function DevTokensPage() {
  return (
    <main className="min-h-screen bg-paper text-ink py-16">
      <Container>
        <div className="mb-12">
          <p className="t-eyebrow mb-2">Design System Specimen</p>
          <h1 className="t-display-l">Tokens & Typography</h1>
          <p className="t-lead mt-3">
            Internal token verification specimen for Sunrays Vidhyalaya. Not indexed.
          </p>
        </div>

        <Hairline className="mb-12" />

        {/* Brand Marks */}
        <section className="mb-16">
          <h2 className="t-eyebrow mb-6">Brand Identity Marks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-porcelain border border-[var(--line)]">
            <div className="flex flex-col gap-4">
              <span className="t-meta">Wordmark Component</span>
              <Wordmark size="base" />
            </div>
            <div className="flex flex-col gap-4">
              <span className="t-meta">SunMark (13 Fine Rays & Horizon)</span>
              <div className="flex items-center gap-6">
                <SunMark size={56} />
                <SunMark size={80} />
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-16">
          <h2 className="t-eyebrow mb-6">Color Token Palette</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tokenSwatches.map((swatch) => (
              <div
                key={swatch.name}
                className="p-5 border border-[var(--line)] bg-porcelain flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-full h-16 border border-[var(--line)] mb-4"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <div className="font-mono text-sm font-semibold">{swatch.name}</div>
                  <div className="font-mono text-xs text-muted">{swatch.hex}</div>
                </div>
                <div className="t-meta mt-3 text-xs">{swatch.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Specimen */}
        <section className="mb-16">
          <h2 className="t-eyebrow mb-6">Type Hierarchy & Fonts</h2>
          <div className="space-y-8 p-8 bg-porcelain border border-[var(--line)]">
            <div>
              <span className="t-meta block mb-1">.t-display-xl (Cormorant Garamond 300–400)</span>
              <p className="t-display-xl">A brighter tomorrow, taught with care.</p>
            </div>
            <Hairline />
            <div>
              <span className="t-meta block mb-1">.t-display-l</span>
              <p className="t-display-l">A decade of quiet excellence.</p>
            </div>
            <Hairline />
            <div>
              <span className="t-meta block mb-1">.t-display-m</span>
              <p className="t-display-m">Every stage, one philosophy.</p>
            </div>
            <Hairline />
            <div>
              <span className="t-meta block mb-1">.font-deva (Tiro Devanagari Sanskrit)</span>
              <p className="font-deva text-3xl md:text-4xl">सा विद्या या विमुक्तये</p>
              <p className="t-meta mt-1">That is knowledge which liberates.</p>
            </div>
            <Hairline />
            <div>
              <span className="t-meta block mb-1">.font-gu (Noto Serif Gujarati)</span>
              <p className="font-gu text-2xl md:text-3xl">સનરેઝ વિદ્યાલય — ઉધના, સુરત</p>
            </div>
            <Hairline />
            <div>
              <span className="t-meta block mb-1">.t-eyebrow</span>
              <p className="t-eyebrow">Udhna, Surat · Nursery to Std 12</p>
            </div>
            <Hairline />
            <div>
              <span className="t-meta block mb-1">.t-lead</span>
              <p className="t-lead">
                A school with a long-term vision: to raise not only achievers, but thoughtful
                citizens who lead with courage and moral clarity.
              </p>
            </div>
            <Hairline />
            <div>
              <span className="t-meta block mb-1">.t-body</span>
              <p className="t-body">
                Sunrays Vidhyalaya provides comprehensive education from kindergarten through higher
                secondary examinations under the Gujarat Secondary and Higher Secondary Education
                Board (GSEB). Our curriculum harmonizes academic rigor with character formation.
              </p>
            </div>
          </div>
        </section>

        {/* Inverted Tone Specimen */}
        <Section tone="ink" spacing="tight" className="p-8 border border-[var(--line-dark)]">
          <div className="space-y-4">
            <span className="t-eyebrow text-sun">.on-ink Dark Tone Scope</span>
            <h3 className="t-display-m">Where knowledge liberates.</h3>
            <p className="t-body text-[#b6bcd2]">
              Testing inverted contrast on deep navy ink background with subdued secondary text
              and saffron hairlines.
            </p>
            <Hairline accent />
          </div>
        </Section>
      </Container>
    </main>
  );
}
