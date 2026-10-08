"use client";

import React, { useRef } from "react";
import { gsap } from "@/lib/motion/gsap";
import { useMotionSafe } from "@/lib/motion/useMotionSafe";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface ParallaxMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number; // default 0.15 (15% scrub shift)
  className?: string;
  children: React.ReactNode;
}

export function ParallaxMedia({
  speed = 0.15,
  className,
  children,
  ...props
}: ParallaxMediaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const motionSafe = useMotionSafe();

  useGSAP(
    () => {
      if (!motionSafe || !containerRef.current || !targetRef.current) return;
      if (window.innerWidth < 768) return;

      const yOffset = speed * 100;

      gsap.fromTo(
        targetRef.current,
        { yPercent: -yOffset },
        {
          yPercent: yOffset,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [motionSafe, speed] }
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <div ref={targetRef} className="w-full h-full will-change-transform">
        {children}
      </div>
    </div>
  );
}
