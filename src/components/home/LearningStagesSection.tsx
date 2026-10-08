"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { learningStages } from "@/content/levels";
import { gsap } from "@/lib/motion/gsap";
import { useMotionSafe } from "@/lib/motion/useMotionSafe";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

export function LearningStagesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const motionSafe = useMotionSafe();

  useGSAP(
    () => {
      if (!motionSafe || !containerRef.current || !leftColRef.current) return;
      if (window.innerWidth < 1024) return;

      const stageCards = gsap.utils.toArray<HTMLElement>(".stage-card-item");

      stageCards.forEach((card, index) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 60%",
            end: "bottom 60%",
            onEnter: () => setCurrentIdx(index),
            onEnterBack: () => setCurrentIdx(index),
          },
        });
      });
    },
    { scope: containerRef, dependencies: [motionSafe] }
  );

  return (
    <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Sticky Left Column */}
      <div
        ref={leftColRef}
        className="lg:col-span-5 lg:sticky lg:top-36 space-y-8"
      >
        <div>
          <span className="t-eyebrow block mb-3">Academic Continuum</span>
          <h2 className="t-display-l">Every stage, one philosophy.</h2>
        </div>

        <p className="t-lead">
          A seamless journey from early foundational curiosity to disciplined Higher Secondary
          scholarship under the GSEB curriculum.
        </p>

        {/* Counter (01/04) */}
        <div className="pt-4 border-t border-[var(--line)] flex items-baseline gap-4">
          <span className="font-display text-5xl md:text-6xl text-sun font-light">
            {String(currentIdx + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-xs text-muted tracking-widest uppercase">
            / 0{learningStages.length} Stages
          </span>
        </div>

        <div className="hidden lg:block pt-6">
          <Link
            href="/academics"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-ink hover:text-sun font-medium transition-colors"
          >
            <span>Explore Full Academic Framework</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Scrolling Right Column: Stages Stack */}
      <div className="lg:col-span-7 space-y-16 lg:space-y-24">
        {learningStages.map((stage, idx) => (
          <div
            key={stage.id}
            className={cn(
              "stage-card-item border border-[var(--line)] bg-[var(--porcelain)] p-6 md:p-10 space-y-6 transition-all duration-500",
              currentIdx === idx ? "shadow-md" : "opacity-90"
            )}
          >
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
              <span className="font-mono text-xs text-sun font-semibold tracking-wider">
                STAGE {stage.stageNumber}
              </span>
              <span className="t-meta text-xs">{stage.medium}</span>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden bg-paper border border-[var(--line)]">
              <Image
                src={stage.image}
                alt={stage.name}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="t-display-m mb-2">{stage.name}</h3>
              <p className="font-sans text-xs uppercase tracking-wider text-sun-text font-medium mb-4">
                {stage.grades}
              </p>
              <p className="t-body text-muted mb-6">{stage.summary}</p>
              <Link
                href={stage.href}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink hover:text-sun font-medium transition-colors"
              >
                <span>Curricular Details</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
