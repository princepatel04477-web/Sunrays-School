"use client";

import React, { useRef } from "react";
import { gsap } from "@/lib/motion/gsap";
import { useMotionSafe } from "@/lib/motion/useMotionSafe";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  y?: number;
  delay?: number;
  stagger?: number;
  className?: string;
  children: React.ReactNode;
}

export function Reveal({
  as: Component = "div",
  y = 24,
  delay = 0,
  stagger = 0.08,
  className,
  children,
  ...props
}: RevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const motionSafe = useMotionSafe();

  useGSAP(
    () => {
      if (!motionSafe || !containerRef.current) return;

      const targets =
        containerRef.current.children.length > 1
          ? Array.from(containerRef.current.children)
          : [containerRef.current];

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          stagger,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [motionSafe, y, delay, stagger] }
  );

  return (
    <Component
      ref={containerRef}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  );
}
