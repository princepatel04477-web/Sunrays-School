"use client";

import React, { useRef } from "react";
import { gsap } from "@/lib/motion/gsap";
import { useMotionSafe } from "@/lib/motion/useMotionSafe";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface ScrollStackProps {
  items: Array<{
    stepNumber: string;
    title: string;
    summary: string;
    details: string;
  }>;
  className?: string;
}

export function ScrollStack({ items, className }: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const motionSafe = useMotionSafe();

  useGSAP(
    () => {
      if (!motionSafe || !containerRef.current || window.innerWidth < 768) return;

      const cards = gsap.utils.toArray<HTMLElement>(".scroll-stack-card");

      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;

        gsap.to(card, {
          scale: 0.94 - (cards.length - 1 - index) * 0.02,
          opacity: 0.4,
          scrollTrigger: {
            trigger: cards[index + 1],
            start: "top 75%",
            end: "top 25%",
            scrub: true,
          },
        });
      });
    },
    { scope: containerRef, dependencies: [items, motionSafe] }
  );

  return (
    <div ref={containerRef} className={cn("relative space-y-8 md:space-y-12", className)}>
      {items.map((item, index) => (
        <div
          key={item.stepNumber}
          className="scroll-stack-card sticky top-28 border border-[var(--line)] bg-[var(--porcelain)] p-8 md:p-12 shadow-sm will-change-transform transition-all"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
            <div>
              <span className="font-display text-4xl md:text-5xl text-sun font-light block mb-2">
                {item.stepNumber}
              </span>
              <h3 className="t-display-m">{item.title}</h3>
            </div>
            <span className="t-eyebrow self-start">Step {index + 1} of {items.length}</span>
          </div>
          <p className="t-lead mb-4 text-ink">{item.summary}</p>
          <p className="t-body text-muted">{item.details}</p>
        </div>
      ))}
    </div>
  );
}
