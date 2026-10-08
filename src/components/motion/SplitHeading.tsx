"use client";

import React, { useRef } from "react";
import { gsap, SplitText } from "@/lib/motion/gsap";
import { useMotionSafe } from "@/lib/motion/useMotionSafe";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface SplitHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";
  variant?: "lines" | "words";
  className?: string;
  children: string;
}

export function SplitHeading({
  as: Component = "h2",
  variant = "lines",
  className,
  children,
  ...props
}: SplitHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const motionSafe = useMotionSafe();

  useGSAP(
    () => {
      if (!motionSafe || !headingRef.current) return;

      const element = headingRef.current.querySelector(".split-content");
      if (!element) return;

      let split: SplitText | null = null;

      try {
        split = new SplitText(element, {
          type: variant === "lines" ? "lines" : "words",
          linesClass: "overflow-hidden inline-block",
        });

        const targets = variant === "lines" ? split.lines : split.words;

        gsap.from(targets, {
          yPercent: 110,
          duration: 1.1,
          ease: "expo.out",
          stagger: 0.09,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 88%",
            once: true,
          },
        });
      } catch {
        // Fallback gracefully if SplitText throws
      }

      return () => {
        if (split) {
          split.revert();
        }
      };
    },
    { scope: headingRef, dependencies: [motionSafe, variant, children] }
  );

  return (
    <Component
      ref={headingRef}
      className={cn("relative", className)}
      aria-label={children}
      {...props}
    >
      <span className="split-content inline-block" aria-hidden="true">
        {children}
      </span>
    </Component>
  );
}
