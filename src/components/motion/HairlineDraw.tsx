"use client";

import React, { useRef } from "react";
import { gsap } from "@/lib/motion/gsap";
import { useMotionSafe } from "@/lib/motion/useMotionSafe";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface HairlineDrawProps extends React.HTMLAttributes<HTMLHRElement> {
  accent?: boolean;
  delay?: number;
  className?: string;
}

export function HairlineDraw({
  accent = false,
  delay = 0,
  className,
  ...props
}: HairlineDrawProps) {
  const lineRef = useRef<HTMLHRElement>(null);
  const motionSafe = useMotionSafe();

  useGSAP(
    () => {
      if (!motionSafe || !lineRef.current) return;

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "0% 50%" },
        {
          scaleX: 1,
          duration: 1.2,
          delay,
          ease: "expo.out",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );
    },
    { scope: lineRef, dependencies: [motionSafe, delay] }
  );

  return (
    <hr
      ref={lineRef}
      className={cn(
        "border-0 h-px w-full will-change-transform",
        accent ? "bg-sun" : "bg-[var(--line)]",
        className
      )}
      {...props}
    />
  );
}
