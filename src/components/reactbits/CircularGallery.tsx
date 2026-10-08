"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useMotionSafe } from "@/lib/motion/useMotionSafe";
import { cn } from "@/lib/utils";

interface CircularGalleryProps {
  items: Array<{
    src: string;
    title: string;
    caption: string;
  }>;
  className?: string;
}

export function CircularGallery({ items, className }: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const motionSafe = useMotionSafe();
  const [activeIndex, setActiveIndex] = useState(0);

  const rotVal = useMotionValue(0);
  const smoothRot = useSpring(rotVal, { damping: 30, stiffness: 120 });

  const count = items.length;
  const radius = 320; // px
  const angleStep = 360 / count;

  const handleDrag = (_: unknown, info: { delta: { x: number } }) => {
    rotVal.set(rotVal.get() + info.delta.x * 0.25);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % count);
    rotVal.set(rotVal.get() - angleStep);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + count) % count);
    rotVal.set(rotVal.get() + angleStep);
  };

  if (!motionSafe) {
    return (
      <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6 p-6", className)}>
        {items.map((item, idx) => (
          <div key={idx} className="relative aspect-[4/3] bg-porcelain border border-[var(--line)]">
            <Image src={item.src} alt={item.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-ink/30 p-4 flex flex-col justify-end text-paper">
              <h4 className="font-display text-xl">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-[520px] overflow-hidden flex flex-col items-center justify-center select-none bg-paper",
        className
      )}
    >
      <div className="relative w-full max-w-[800px] h-[360px] flex items-center justify-center [perspective:1000px]">
        <motion.div
          drag="x"
          onDrag={handleDrag}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          style={{ rotateY: smoothRot, transformStyle: "preserve-3d" }}
          className="relative w-[280px] h-[340px] cursor-grab active:cursor-grabbing will-change-transform"
        >
          {items.map((item, idx) => {
            const angle = idx * angleStep;
            return (
              <div
                key={idx}
                className="absolute inset-0 rounded-none overflow-hidden bg-porcelain border border-[var(--line)] shadow-lg"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="relative w-full h-[240px]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-porcelain">
                  <h4 className="font-display text-lg text-ink font-normal">{item.title}</h4>
                  <p className="t-meta text-xs line-clamp-1">{item.caption}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Control bar */}
      <div className="flex items-center gap-6 mt-6 z-10">
        <button
          onClick={handlePrev}
          className="px-4 py-2 text-xs tracking-widest uppercase border border-[var(--line)] hover:border-sun transition-colors bg-porcelain"
          aria-label="Previous image"
        >
          ← Prev
        </button>
        <span className="t-meta text-xs">
          {activeIndex + 1} / {count} · Drag to rotate
        </span>
        <button
          onClick={handleNext}
          className="px-4 py-2 text-xs tracking-widest uppercase border border-[var(--line)] hover:border-sun transition-colors bg-porcelain"
          aria-label="Next image"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
