"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useSpring, useMotionValue } from "motion/react";
import { Container, Section } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";
import { learningStages } from "@/content/levels";

export default function AcademicsPage() {
  const [hoveredStage, setHoveredStage] = useState<(typeof learningStages)[0] | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX + 24);
    mouseY.set(e.clientY - 120);
  };

  return (
    <div className="flex flex-col w-full" onMouseMove={handleMouseMove}>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Academics", href: "/academics" },
        ]}
        eyebrow="Academic Framework"
        title="Scholarship across four learning stages."
        lead="A structured progression under the Gujarat Secondary & Higher Secondary Education Board, from early kindergarten to Std 12 board mastery."
        image="/legacy/about/02.jpg"
        imageAlt="Academics at Sunrays Vidhyalaya"
        imageCaption="Classroom instructional session focusing on conceptual fundamentals."
      />

      <Section tone="paper" spacing="default">
        <Container>
          <div className="max-w-5xl mx-auto space-y-4 mb-12">
            <span className="t-eyebrow text-sun">The Continuum</span>
            <h2 className="t-display-l font-normal">Four Stages of Learning</h2>
            <p className="t-lead">
              Hover across each stage on desktop to view campus facilities and pedagogical targets.
            </p>
          </div>

          {/* Large Numbered Rows Index List */}
          <div className="max-w-5xl mx-auto divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {learningStages.map((stage) => (
              <div
                key={stage.id}
                onMouseEnter={() => setHoveredStage(stage)}
                onMouseLeave={() => setHoveredStage(null)}
                className="py-10 group transition-colors hover:bg-porcelain/60 px-4"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex items-start gap-8">
                    <span className="font-display text-4xl md:text-5xl text-sun font-light">
                      {stage.stageNumber}
                    </span>
                    <div className="space-y-2">
                      <h3 className="t-display-m font-normal group-hover:text-sun transition-colors">
                        {stage.name}
                      </h3>
                      <p className="font-sans text-xs uppercase tracking-wider text-muted font-medium">
                        {stage.grades} · {stage.medium}
                      </p>
                      <p className="t-body text-sm text-muted max-w-2xl pt-2">
                        {stage.summary}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 shrink-0">
                    <Link
                      href={stage.href}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink hover:text-sun font-medium transition-colors border border-[var(--line)] px-4 py-2 group-hover:border-sun"
                    >
                      <span>Explore</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Academic Sub-links */}
          <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-6 bg-porcelain border border-[var(--line)]">
              <span className="t-eyebrow text-sun block mb-2">Streams</span>
              <h4 className="font-display text-xl mb-2">Science & Commerce</h4>
              <p className="t-meta text-xs mb-4">
                Specialized Std 11 & 12 pathways for medical, engineering, and commerce careers.
              </p>
              <Link
                href="/academics/streams"
                className="text-xs uppercase tracking-widest text-ink hover:text-sun font-medium"
              >
                Learn more →
              </Link>
            </div>

            <div className="p-6 bg-porcelain border border-[var(--line)]">
              <span className="t-eyebrow text-sun block mb-2">Practical Study</span>
              <h4 className="font-display text-xl mb-2">Laboratories</h4>
              <p className="t-meta text-xs mb-4">
                Explore our Physics, Chemistry, and Computer Science laboratories.
              </p>
              <Link
                href="/academics/labs"
                className="text-xs uppercase tracking-widest text-ink hover:text-sun font-medium"
              >
                Inspect labs →
              </Link>
            </div>

            <div className="p-6 bg-porcelain border border-[var(--line)]">
              <span className="t-eyebrow text-sun block mb-2">Board Framework</span>
              <h4 className="font-display text-xl mb-2">GSEB Standards</h4>
              <p className="t-meta text-xs mb-4">
                Gujarat State Education Board affiliation guidelines and curriculum benchmarks.
              </p>
              <Link
                href="/academics/gseb"
                className="text-xs uppercase tracking-widest text-ink hover:text-sun font-medium"
              >
                Board overview →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Floating Image Cursor Follower (Desktop only) */}
      {hoveredStage && (
        <motion.div
          style={{ x: springX, y: springY }}
          className="pointer-events-none fixed top-0 left-0 z-50 hidden lg:block w-72 h-48 border-2 border-sun bg-porcelain shadow-2xl overflow-hidden will-change-transform"
        >
          <div className="relative w-full h-full">
            <Image
              src={hoveredStage.image}
              alt={hoveredStage.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-ink/20" />
            <div className="absolute bottom-2 left-2 right-2 p-1 bg-ink/75 text-paper text-[10px] uppercase tracking-wider text-center">
              {hoveredStage.name}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
