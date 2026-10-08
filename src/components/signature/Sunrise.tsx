"use client";

import React, { useRef } from "react";
import { gsap } from "@/lib/motion/gsap";
import { useMotionSafe } from "@/lib/motion/useMotionSafe";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface SunriseProps {
  mode?: "intro" | "scroll" | "ambient" | "static";
  className?: string;
  size?: number; // width in px or default full/contained
  raysCount?: number;
}

export function Sunrise({
  mode = "ambient",
  className,
  size,
  raysCount = 13,
}: SunriseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizonRef = useRef<SVGLineElement>(null);
  const raysGroupRef = useRef<SVGGElement>(null);
  const glowRef = useRef<SVGCircleElement>(null);
  const glintRef = useRef<SVGCircleElement>(null);
  const motionSafe = useMotionSafe();

  const rays = Array.from({ length: raysCount }, (_, i) => {
    const angleDeg = (180 / (raysCount - 1)) * i;
    const angleRad = (angleDeg * Math.PI) / 180;
    const cx = 500;
    const cy = 250;
    const rInner = 28;
    const rOuter = 230;
    const x1 = cx - Math.cos(angleRad) * rInner;
    const y1 = cy - Math.sin(angleRad) * rInner;
    const x2 = cx - Math.cos(angleRad) * rOuter;
    const y2 = cy - Math.sin(angleRad) * rOuter;
    return { id: i, x1, y1, x2, y2, angleDeg };
  });

  useGSAP(
    () => {
      if (!motionSafe || mode === "static" || !containerRef.current) return;

      const rayLines = raysGroupRef.current?.querySelectorAll("line");
      const horizon = horizonRef.current;
      const glow = glowRef.current;
      const glint = glintRef.current;

      if (!rayLines || !horizon) return;

      if (mode === "intro") {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        // Initial state
        gsap.set(horizon, { scaleX: 0, transformOrigin: "50% 50%" });
        gsap.set(rayLines, { scale: 0, transformOrigin: "500px 250px", opacity: 0 });
        if (glow) gsap.set(glow, { opacity: 0, scale: 0.6, transformOrigin: "500px 250px" });
        if (glint) gsap.set(glint, { opacity: 0, attr: { cx: 20 } });

        // Horizon expands
        tl.to(horizon, { scaleX: 1, duration: 0.9 })
          // Rays fan outward
          .to(
            rayLines,
            {
              scale: 1,
              opacity: 1,
              duration: 1.2,
              stagger: {
                from: "center",
                amount: 0.35,
              },
            },
            "-=0.5"
          )
          // Glow bloom
          .to(glow, { opacity: 0.18, scale: 1, duration: 1.0 }, "-=0.8")
          // Glint sweep
          .to(glint, { opacity: 1, duration: 0.2 }, "-=0.6")
          .to(glint, { attr: { cx: 980 }, duration: 1.4, ease: "power2.inOut" }, "-=0.5")
          .to(glint, { opacity: 0, duration: 0.3 }, "-=0.2");
      } else if (mode === "scroll") {
        gsap.set(rayLines, { scale: 0.3, transformOrigin: "500px 250px", opacity: 0.2 });
        gsap.set(horizon, { scaleX: 0.4, transformOrigin: "50% 50%" });
        if (glow) gsap.set(glow, { opacity: 0 });

        gsap.to(rayLines, {
          scale: 1,
          opacity: 1,
          stagger: 0.02,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "bottom 60%",
            scrub: 1,
          },
        });

        gsap.to(horizon, {
          scaleX: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "bottom 70%",
            scrub: 1,
          },
        });

        if (glow) {
          gsap.to(glow, {
            opacity: 0.16,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              end: "bottom 60%",
              scrub: 1,
            },
          });
        }
      } else if (mode === "ambient") {
        // Subtle rhythmic breathing
        gsap.to(rayLines, {
          opacity: 0.55,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: {
            from: "center",
            amount: 0.8,
          },
        });

        if (glow) {
          gsap.to(glow, {
            opacity: 0.12,
            scale: 0.9,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      }
    },
    { scope: containerRef, dependencies: [mode, motionSafe] }
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative mx-auto flex items-center justify-center overflow-visible", className)}
      style={{ width: size ? `${size}px` : "100%", maxWidth: "1000px" }}
    >
      <svg
        viewBox="0 0 1000 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible select-none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="rayGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="var(--sun)" stopOpacity="0.8" />
            <stop offset="65%" stopColor="var(--sun)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--sun)" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="sunGlowGrad" cx="50%" cy="100%" r="60%">
            <stop offset="0%" stopColor="var(--sun-glow)" stopOpacity="0.8" />
            <stop offset="60%" stopColor="var(--sun)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--sun)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Radial Bloom */}
        <circle
          ref={glowRef}
          cx="500"
          cy="250"
          r="160"
          fill="url(#sunGlowGrad)"
          opacity="0.14"
          className="transition-opacity"
        />

        {/* Half Sun Arc */}
        <path
          d="M 476 250 A 24 24 0 0 1 524 250"
          stroke="var(--sun)"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        {/* 13 Fine Radiating Rays */}
        <g ref={raysGroupRef}>
          {rays.map((ray) => (
            <line
              key={ray.id}
              x1={ray.x1.toFixed(2)}
              y1={ray.y1.toFixed(2)}
              x2={ray.x2.toFixed(2)}
              y2={ray.y2.toFixed(2)}
              stroke="url(#rayGrad)"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          ))}
        </g>

        {/* Horizon Hairline */}
        <line
          ref={horizonRef}
          x1="10"
          y1="250"
          x2="990"
          y2="250"
          stroke="var(--sun)"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        {/* Specular Traveling Glint */}
        <circle
          ref={glintRef}
          cx="500"
          cy="250"
          r="3"
          fill="#FFF4D9"
          opacity="0"
          style={{ filter: "drop-shadow(0 0 6px var(--sun-glow))" }}
        />
      </svg>
    </div>
  );
}
