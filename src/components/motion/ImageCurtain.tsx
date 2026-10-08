"use client";

import React, { useRef } from "react";
import Image, { type ImageProps } from "next/image";
import { gsap } from "@/lib/motion/gsap";
import { useMotionSafe } from "@/lib/motion/useMotionSafe";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface ImageCurtainProps extends Omit<ImageProps, "className"> {
  containerClassName?: string;
  imageClassName?: string;
  aspectRatio?: string; // e.g. "aspect-[4/3]" or "aspect-[16/10]"
  priority?: boolean;
}

export function ImageCurtain({
  containerClassName,
  imageClassName,
  aspectRatio = "aspect-[16/10]",
  priority = false,
  alt,
  ...props
}: ImageCurtainProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const motionSafe = useMotionSafe();

  useGSAP(
    () => {
      if (!motionSafe || !containerRef.current || !imageWrapperRef.current) return;

      const container = containerRef.current;
      const inner = imageWrapperRef.current;

      // Curtain clip-path entrance
      gsap.fromTo(
        container,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Light image scale scrub
      gsap.fromTo(
        inner,
        { scale: 1.15 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [motionSafe] }
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden w-full bg-[var(--porcelain)]",
        aspectRatio,
        containerClassName
      )}
    >
      <div ref={imageWrapperRef} className="relative w-full h-full will-change-transform">
        <Image
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1200px"
          className={cn("object-cover", imageClassName)}
          {...props}
        />
      </div>
    </div>
  );
}
