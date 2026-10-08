"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { laboratories } from "@/content/labs";
import { gsap } from "@/lib/motion/gsap";
import { useMotionSafe } from "@/lib/motion/useMotionSafe";
import { useGSAP } from "@gsap/react";

export function LabsHorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const motionSafe = useMotionSafe();

  useGSAP(
    () => {
      if (!motionSafe || !sectionRef.current || !trackRef.current) return;
      if (window.innerWidth < 1024) return;

      const track = trackRef.current;
      const totalPanels = laboratories.length;

      gsap.to(track, {
        xPercent: -100 * (totalPanels - 1) / totalPanels,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${track.offsetWidth}`,
        },
      });
    },
    { scope: sectionRef, dependencies: [motionSafe] }
  );

  return (
    <div ref={sectionRef} className="relative w-full overflow-hidden bg-paper">
      {/* Header bar */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 xl:px-14 pt-16 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--line)]">
        <div>
          <span className="t-eyebrow block mb-2">Scientific Infrastructure</span>
          <h2 className="t-display-l">Modern Laboratories</h2>
        </div>
        <Link
          href="/academics/labs"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink hover:text-sun font-medium transition-colors"
        >
          <span>View All Facility Specifications</span>
          <span>→</span>
        </Link>
      </div>

      {/* Horizontal Panels (Desktop) / Vertical Stack (Mobile) */}
      <div className="lg:h-[75vh] w-full flex flex-col lg:flex-row overflow-hidden">
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row w-full lg:w-[300%] h-full"
        >
          {laboratories.map((lab, idx) => (
            <div
              key={lab.id}
              className="w-full lg:w-[100vw] h-full p-6 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 border-b lg:border-b-0 lg:border-r border-[var(--line)] bg-[var(--porcelain)]"
            >
              <div className="relative w-full lg:w-3/5 h-[320px] lg:h-full overflow-hidden border border-[var(--line)]">
                <Image
                  src={lab.image}
                  alt={lab.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>

              <div className="w-full lg:w-2/5 space-y-6 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-sun font-semibold">0{idx + 1}</span>
                  <span className="t-eyebrow">{lab.eyebrow}</span>
                </div>

                <h3 className="t-display-m">{lab.name}</h3>
                <p className="t-body text-muted">{lab.summary}</p>

                <div className="pt-4">
                  <Link
                    href={`/academics/labs`}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink hover:text-sun font-medium transition-colors border-b border-sun pb-1"
                  >
                    <span>Inspect Lab Standards</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
