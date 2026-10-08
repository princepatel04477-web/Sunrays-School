import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Section, Hairline } from "@/components/layout";
import {
  Reveal,
  SplitHeading,
  ImageCurtain,
  Magnetic,
  Counter,
} from "@/components/motion";
import { Sunrise } from "@/components/signature/Sunrise";
import { LightRays } from "@/components/reactbits/LightRays";
import { VideoModal } from "@/components/home/VideoModal";
import { LearningStagesSection } from "@/components/home/LearningStagesSection";
import { LabsHorizontalScroll } from "@/components/home/LabsHorizontalScroll";
import { siteConfig } from "@/content/site";
import { trusteeMessage } from "@/content/messages";
import { facultyMembers } from "@/content/faculty";
import { galleryPhotos } from "@/content/gallery";
import { verifiedStats } from "@/content/stats";

export default function HomePage() {
  const verifiedYears = verifiedStats[0]?.value ?? 10;

  return (
    <div className="flex flex-col w-full">
      {/* =========================================================================
          1. HERO SCENE (100svh, ink tone)
          ========================================================================= */}
      <section className="relative w-full min-h-[92svh] lg:min-h-[100svh] bg-ink text-paper on-ink flex flex-col justify-end overflow-hidden pb-16 pt-32">
        {/* Full-bleed Background Image with Tone Lift */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/legacy/slider/slider-1.jpg"
            alt="Sunrays Vidhyalaya Campus, Udhna Surat"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter saturate-[0.85] contrast-[1.05]"
          />
          {/* Deep Navy ink gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/30" />
        </div>

        {/* Ambient Light Rays from top center */}
        <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
          <LightRays intensity={0.22} />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-20 max-w-[1440px] mx-auto px-5 md:px-8 xl:px-14 w-full">
          <div className="max-w-4xl space-y-6">
            <Reveal y={16}>
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-sun" />
                <span className="t-eyebrow text-sun">Udhna, Surat · Nursery to Std 12</span>
              </div>
            </Reveal>

            <SplitHeading as="h1" className="t-display-xl text-paper font-light">
              A brighter tomorrow, taught with care.
            </SplitHeading>

            <Reveal y={20} delay={0.2}>
              <p className="t-lead text-[#d6dbe8] max-w-2xl text-lg md:text-xl font-normal leading-relaxed">
                A school with a long-term vision: to raise not only achievers, but thoughtful
                citizens who lead with knowledge, conscience, and quiet resilience.
              </p>
            </Reveal>

            <Reveal y={20} delay={0.3} className="pt-4 flex flex-wrap items-center gap-6">
              <Magnetic strength={0.25}>
                <Link
                  href="/admissions/enquire"
                  className="px-8 py-3.5 bg-paper text-ink font-sans text-xs uppercase tracking-widest font-semibold hover:bg-paper-2 transition-colors focus:ring-2 focus:ring-sun focus:outline-none"
                >
                  Enquire for Admission
                </Link>
              </Magnetic>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-paper hover:text-sun font-medium transition-colors border-b border-paper/40 pb-1 hover:border-sun"
              >
                <span>Book a campus visit</span>
                <span className="text-sun">→</span>
              </Link>
            </Reveal>
          </div>

          {/* Bottom Hairline & Scroll indicator */}
          <div className="mt-16 pt-6 border-t border-[var(--line-dark)] flex items-center justify-between text-xs text-[#8e95ae]">
            <div className="flex items-center gap-4">
              <span className="font-deva text-sun text-sm">{siteConfig.motto.deva}</span>
              <span className="text-white/20">|</span>
              <span>English & Gujarati Medium</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="tracking-widest uppercase text-[10px]">Scroll</span>
              <span className="h-4 w-px bg-sun animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. MOTTO STATEMENT (paper tone)
          ========================================================================= */}
      <Section tone="paper" spacing="default" className="text-center">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="t-eyebrow text-sun block">Our Guiding Principle</span>

            <h2 className="font-deva text-4xl md:text-6xl text-ink font-normal leading-tight">
              {siteConfig.motto.deva}
            </h2>

            <p className="font-sans text-xs uppercase tracking-[0.22em] text-sun-text font-medium">
              {siteConfig.motto.translit} · &ldquo;{siteConfig.motto.en}&rdquo;
            </p>

            <div className="max-w-xs mx-auto py-4">
              <Sunrise mode="scroll" />
            </div>

            <p className="t-body mx-auto text-muted text-base md:text-lg leading-relaxed">
              At Sunrays Vidhyalaya, education is neither a hurried race nor rote memorization.
              True knowledge liberates the mind from prejudice, builds intellectual discernment,
              and prepares young people to navigate the modern world with steady moral grounding.
            </p>
          </div>
        </Container>
      </Section>

      <Hairline />

      {/* =========================================================================
          3. LEARNING STAGES (Sticky Left, Scrolling Right)
          ========================================================================= */}
      <Section tone="paper" spacing="default">
        <Container>
          <LearningStagesSection />
        </Container>
      </Section>

      {/* =========================================================================
          4. ABOUT TEASER (Asymmetric 12-col)
          ========================================================================= */}
      <Section tone="paper-2" spacing="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Cluster (Cols 1-7) */}
            <div className="lg:col-span-7 relative">
              <div className="relative z-10 w-full max-w-[560px]">
                <ImageCurtain
                  src="/legacy/about/01.jpg"
                  alt="Sunrays Vidhyalaya Main Academic Building"
                  aspectRatio="aspect-[4/3]"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-10 -right-6 lg:-right-4 z-20 w-56 md:w-64 border-4 border-paper shadow-2xl bg-paper">
                <ImageCurtain
                  src="/legacy/about/02.jpg"
                  alt="Classroom learning environment"
                  aspectRatio="aspect-[4/3]"
                />
              </div>
            </div>

            {/* Editorial Copy (Cols 8-12) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="t-eyebrow text-sun">About Sunrays</span>
              <SplitHeading as="h2" className="t-display-l">
                A decade of quiet excellence.
              </SplitHeading>

              <p className="t-body text-muted">
                Established under the Leo Institute of Education Trust in Udhna, Surat, Sunrays
                Vidhyalaya has nurtured thousands of young learners with balanced discipline.
                We believe that small classrooms, dedicated mentors, and authentic attention to
                every child create an environment where true scholarship thrives.
              </p>

              {/* Three Real Commitments */}
              <div className="space-y-4 pt-4 border-t border-[var(--line)]">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-sun font-semibold pt-0.5">01</span>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-ink">
                      Dual-Medium GSEB Affiliation
                    </h4>
                    <p className="t-meta text-xs">
                      English and Gujarati mediums provided from foundational kindergarten through
                      Standard 12.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-sun font-semibold pt-0.5">02</span>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-ink">
                      Higher Secondary Science & Commerce
                    </h4>
                    <p className="t-meta text-xs">
                      Rigorous preparation for engineering, medical entrance foundations, and commerce
                      scholarship.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-sun font-semibold pt-0.5">03</span>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-ink">
                      Dedicated Scientific Infrastructure
                    </h4>
                    <p className="t-meta text-xs">
                      Modern Physics, Chemistry, and Computing laboratories supporting syllabus-guided
                      practical experiment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink hover:text-sun font-medium transition-colors border-b border-sun pb-1"
                >
                  <span>Read our story</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          5. NUMBERS (Verified Stats Only)
          ========================================================================= */}
      <Section tone="paper" spacing="tight" className="border-y border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-6">
            <div className="md:col-span-5">
              <span className="t-eyebrow text-sun block mb-2">Verified Landmark</span>
              <div className="flex items-baseline gap-4">
                <Counter
                  to={verifiedYears}
                  suffix="+"
                  className="font-display text-6xl md:text-7xl text-ink font-light"
                />
                <span className="t-body text-ink font-medium">Years of educational service</span>
              </div>
            </div>

            <div className="md:col-span-7 border-t md:border-t-0 md:border-l border-[var(--line)] pt-6 md:pt-0 md:pl-12">
              <p className="font-display text-2xl md:text-3xl text-ink font-normal leading-snug">
                &ldquo;Ten years. One campus. Every child known by name.&rdquo;
              </p>
              <p className="t-meta mt-2 text-muted">
                Serving generations of Surat families with steady stewardship and transparent
                academic principles.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          6. LABORATORIES (Horizontal scroll on desktop)
          ========================================================================= */}
      <LabsHorizontalScroll />

      {/* =========================================================================
          7. FILM (Nocookie Modal Embed)
          ========================================================================= */}
      <section className="w-full">
        <VideoModal />
      </section>

      {/* =========================================================================
          8. TRUSTEE'S MESSAGE (Editorial Pullquote)
          ========================================================================= */}
      <Section tone="paper" spacing="default">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center gap-3">
              <span className="text-sun font-display text-6xl leading-none select-none">&ldquo;</span>
              <span className="t-eyebrow text-sun">Trustee Address</span>
            </div>

            <blockquote className="font-display text-2xl md:text-4xl text-ink italic font-light leading-relaxed">
              {trusteeMessage.excerpt}
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[var(--line)]">
              <div>
                <h4 className="font-sans text-base font-semibold text-ink">
                  {trusteeMessage.author}
                </h4>
                <p className="t-meta text-xs">
                  {trusteeMessage.role}, {trusteeMessage.organization}
                </p>
              </div>

              <Link
                href="/about/trustee"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink hover:text-sun font-medium transition-colors"
              >
                <span>Read Full Message</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          9. FACULTY STRIP (The People Who Teach Here)
          ========================================================================= */}
      <Section tone="paper-2" spacing="tight" className="border-y border-[var(--line)]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="t-eyebrow text-sun block mb-2">Our Educators</span>
              <h2 className="t-display-m">The people who teach here</h2>
            </div>
            <Link
              href="/about/faculty"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink hover:text-sun font-medium transition-colors"
            >
              <span>Meet the Faculty</span>
              <span>→</span>
            </Link>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
            {facultyMembers.map((member, idx) => (
              <div
                key={member.id}
                className="shrink-0 w-36 sm:w-44 border border-[var(--line)] bg-porcelain group overflow-hidden"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-paper">
                  <Image
                    src={member.image}
                    alt={`Sunrays Vidhyalaya faculty portrait ${idx + 1}`}
                    fill
                    sizes="180px"
                    className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-2.5 text-center">
                  <span className="font-mono text-[10px] text-muted uppercase">
                    Teacher {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          10. GALLERY PREVIEW (5-Image Asymmetric Collage)
          ========================================================================= */}
      <Section tone="paper" spacing="default">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="t-eyebrow text-sun block mb-2">Campus Moments</span>
              <h2 className="t-display-l">Life within our grounds</h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink hover:text-sun font-medium transition-colors border-b border-sun pb-1"
            >
              <span>View the complete gallery</span>
              <span>→</span>
            </Link>
          </div>

          {/* 5-Image Collage */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            <div className="md:col-span-7">
              <ImageCurtain
                src={galleryPhotos[0]?.src ?? "/legacy/gallery/01.jpg"}
                alt={galleryPhotos[0]?.title ?? "Campus Gallery"}
                aspectRatio="aspect-[16/11]"
              />
              <p className="t-meta text-xs mt-2">{galleryPhotos[0]?.title}</p>
            </div>

            <div className="md:col-span-5 grid grid-cols-2 gap-4">
              {galleryPhotos.slice(1, 5).map((photo) => (
                <div key={photo.id} className="space-y-1">
                  <div className="relative aspect-[4/3] overflow-hidden border border-[var(--line)] bg-porcelain">
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      sizes="300px"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="t-meta text-[11px] truncate">{photo.title}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          11. ADMISSIONS CTA (Ink Section with Sunrise)
          ========================================================================= */}
      <section className="bg-ink text-paper on-ink py-24 md:py-32 relative overflow-hidden">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="max-w-xs mx-auto">
              <Sunrise mode="intro" />
            </div>

            <span className="t-eyebrow text-sun">Admissions 2026–27</span>

            <SplitHeading as="h2" className="t-display-l text-paper font-light">
              Begin your child&apos;s journey at Sunrays.
            </SplitHeading>

            <p className="t-lead text-[#c6ccdf] mx-auto">
              Applications are welcomed for Nursery through Standard 12 in English and Gujarati
              mediums. Speak with our admissions team or plan a campus tour today.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6">
              <Magnetic strength={0.25}>
                <Link
                  href="/admissions/enquire"
                  className="px-8 py-3.5 bg-paper text-ink font-sans text-xs uppercase tracking-widest font-semibold hover:bg-paper-2 transition-colors focus:ring-2 focus:ring-sun focus:outline-none"
                >
                  Enquire for Admission
                </Link>
              </Magnetic>

              <a
                href={`tel:${siteConfig.phone.e164}`}
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-paper hover:text-sun transition-colors border-b border-paper/30 pb-1"
              >
                <span>Call {siteConfig.phone.display}</span>
              </a>

              <a
                href={`https://wa.me/919624499911`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-sun hover:underline"
              >
                <span>WhatsApp Enquiry ↗</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
