"use client";

import React, { useRef } from "react";
import { gsap } from "@/lib/motion/gsap";
import { useMotionSafe } from "@/lib/motion/useMotionSafe";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number; // duration in seconds for one full loop
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Marquee({
  speed = 28,
  direction = "left",
  pauseOnHover = true,
  className,
  children,
  ...props
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const motionSafe = useMotionSafe();

  useGSAP(
    () => {
      if (!motionSafe || !trackRef.current || !containerRef.current) return;

      const track = trackRef.current;
      const xStart = direction === "left" ? 0 : -50;
      const xEnd = direction === "left" ? -50 : 0;

      const tween = gsap.fromTo(
        track,
        { xPercent: xStart },
        {
          xPercent: xEnd,
          ease: "none",
          duration: speed,
          repeat: -1,
        }
      );

      // Pause when out of viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              tween.play();
            } else {
              tween.pause();
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(containerRef.current);

      if (pauseOnHover) {
        const handleEnter = () => tween.pause();
        const handleLeave = () => tween.play();
        const container = containerRef.current;
        container.addEventListener("mouseenter", handleEnter);
        container.addEventListener("mouseleave", handleLeave);

        return () => {
          observer.disconnect();
          container.removeEventListener("mouseenter", handleEnter);
          container.removeEventListener("mouseleave", handleLeave);
          tween.kill();
        };
      }

      return () => {
        observer.disconnect();
        tween.kill();
      };
    },
    { scope: containerRef, dependencies: [motionSafe, speed, direction, pauseOnHover] }
  );

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden select-none whitespace-nowrap w-full", className)}
      {...props}
    >
      <div ref={trackRef} className="inline-flex w-max will-change-transform">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
