import type { Metadata } from "next";
import { Container, Section, Hairline } from "@/components/layout";
import {
  Reveal,
  SplitHeading,
  ImageCurtain,
  Magnetic,
  Counter,
  HairlineDraw,
} from "@/components/motion";
import { Sunrise } from "@/components/signature/Sunrise";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { TiltedCard } from "@/components/reactbits/TiltedCard";
import { ScrollVelocity } from "@/components/reactbits/ScrollVelocity";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Motion Specimen & React Bits · Sunrays Vidhyalaya",
  robots: { index: false, follow: false },
};

export default function DevMotionPage() {
  return (
    <main className="min-h-screen bg-paper text-ink py-16">
      <Container>
        <div className="mb-12">
          <p className="t-eyebrow mb-2">Motion Architecture Specimen</p>
          <h1 className="t-display-l">Motion Primitives & Signature</h1>
          <p className="t-lead mt-3">
            Internal animation testbed for GSAP, Motion, and restyled React Bits. Not indexed.
          </p>
        </div>

        <Hairline className="mb-16" />

        {/* 1. Sunrise Signature in all 3 modes */}
        <section className="mb-20 space-y-12">
          <div>
            <h2 className="t-eyebrow mb-2">Signature Effect · Sunrise</h2>
            <p className="t-meta mb-6">
              13 fine rays over horizon line. Shown below in &quot;intro&quot;, &quot;scroll&quot;, and &quot;ambient&quot; modes.
            </p>
          </div>

          <div className="p-8 border border-[var(--line)] bg-porcelain">
            <span className="t-eyebrow block mb-4">Mode 1: &quot;ambient&quot; (Breathing, subtle)</span>
            <Sunrise mode="ambient" />
          </div>

          <div className="p-8 border border-[var(--line)] bg-porcelain">
            <span className="t-eyebrow block mb-4">Mode 2: &quot;intro&quot; (Plays signature draw on mount)</span>
            <Sunrise mode="intro" />
          </div>

          <div className="p-8 border border-[var(--line)] bg-porcelain">
            <span className="t-eyebrow block mb-4">Mode 3: &quot;scroll&quot; (Scrubbed with viewport progress)</span>
            <Sunrise mode="scroll" />
          </div>
        </section>

        {/* 2. Typography & Reveal Primitives */}
        <section className="mb-20 space-y-8">
          <h2 className="t-eyebrow">Typography & Reveals</h2>

          <div className="p-8 border border-[var(--line)] bg-porcelain">
            <span className="t-eyebrow block mb-4">SplitHeading (Lines with overflow hidden mask)</span>
            <SplitHeading as="h2" className="t-display-m">
              A brighter tomorrow, taught with care.
            </SplitHeading>
          </div>

          <div className="p-8 border border-[var(--line)] bg-porcelain">
            <span className="t-eyebrow block mb-4">Reveal with Stagger</span>
            <Reveal className="space-y-4">
              <p className="t-lead">First paragraph rising smoothly with 24px translate.</p>
              <p className="t-body text-muted">
                Second paragraph staggered behind the first with expo.out easing.
              </p>
            </Reveal>
          </div>

          <div className="p-8 border border-[var(--line)] bg-porcelain">
            <span className="t-eyebrow block mb-4">Counter (Intl.NumberFormat en-IN)</span>
            <div className="flex items-baseline gap-4">
              <Counter to={10} suffix="+" className="font-display text-5xl text-sun" />
              <span className="t-body">Years of verified service</span>
            </div>
          </div>

          <div className="p-8 border border-[var(--line)] bg-porcelain">
            <span className="t-eyebrow block mb-4">HairlineDraw (ScaleX 0→1 on scroll)</span>
            <HairlineDraw accent />
          </div>
        </section>

        {/* 3. ImageCurtain */}
        <section className="mb-20 space-y-8">
          <h2 className="t-eyebrow">Image Curtain & Parallax</h2>
          <div className="max-w-2xl border border-[var(--line)] p-4 bg-porcelain">
            <ImageCurtain
              src="/legacy/about/01.jpg"
              alt="School building test"
              aspectRatio="aspect-[16/10]"
            />
            <p className="t-meta mt-3">ImageCurtain with clip-path inset entrance and subtle inner scrub.</p>
          </div>
        </section>

        {/* 4. Magnetic & Micro-interactions */}
        <section className="mb-20 space-y-8">
          <h2 className="t-eyebrow">Magnetic & Micro-interactions</h2>
          <div className="p-8 border border-[var(--line)] bg-porcelain flex items-center gap-8">
            <Magnetic strength={0.25}>
              <button className="px-6 py-3 bg-ink text-paper font-sans text-xs tracking-widest uppercase hover:bg-ink-2 transition-colors">
                Enquire for Admission
              </button>
            </Magnetic>
            <span className="t-meta">Hover CTA with fine pointer to test spring physics</span>
          </div>
        </section>

        {/* 5. React Bits: ScrollVelocity */}
        <section className="mb-20 space-y-4">
          <h2 className="t-eyebrow">React Bits · ScrollVelocity</h2>
          <div className="border-y border-[var(--line)] bg-paper-2 py-4">
            <ScrollVelocity text="Sunrays Vidhyalaya" />
          </div>
        </section>

        {/* 6. React Bits: SpotlightCard & TiltedCard */}
        <section className="mb-20 space-y-8">
          <h2 className="t-eyebrow">React Bits · Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SpotlightCard>
              <span className="t-eyebrow block mb-2">SpotlightCard</span>
              <h3 className="t-display-m mb-3">Science Stream</h3>
              <p className="t-body text-muted">
                Move cursor over card to test subtle 10% sun-glow radial spotlight without harsh colors.
              </p>
            </SpotlightCard>

            <TiltedCard maxTilt={6}>
              <div className="p-8 border border-[var(--line)] bg-porcelain">
                <span className="t-eyebrow block mb-2">TiltedCard (Max 6°)</span>
                <div className="relative aspect-[3/4] max-w-[200px] mb-4 bg-paper border border-[var(--line)]">
                  <Image
                    src="/legacy/team/01.jpg"
                    alt="Faculty sample"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-display text-xl">Faculty Portrait</h4>
                <p className="t-meta">Hover to inspect gentle 3D tilt and subdued white glare.</p>
              </div>
            </TiltedCard>
          </div>
        </section>

        {/* 7. Inverted Ink Tone Demonstration */}
        <Section tone="ink" spacing="tight" className="p-8 border border-[var(--line-dark)]">
          <div className="space-y-6">
            <span className="t-eyebrow text-sun">Inverted Tone (.on-ink)</span>
            <SplitHeading as="h3" className="t-display-m text-paper">
              Where knowledge liberates.
            </SplitHeading>
            <Sunrise mode="ambient" />
          </div>
        </Section>
      </Container>
    </main>
  );
}
