"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "motion/react";
import { useMotionSafe } from "@/lib/motion/useMotionSafe";
import { cn } from "@/lib/utils";

interface ScrollVelocityProps {
  text: string;
  defaultVelocity?: number;
  className?: string;
}

export function ScrollVelocity({
  text,
  defaultVelocity = 1.2,
  className,
}: ScrollVelocityProps) {
  const motionSafe = useMotionSafe();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${((v % 50) + 50) % 50 - 50}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    if (!motionSafe) return;
    let moveBy = directionFactor.current * defaultVelocity * (delta / 1000) * 15;

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap select-none py-4 w-full">
      <motion.div
        className={cn(
          "inline-flex font-display text-3xl md:text-5xl lg:text-6xl text-ink tracking-tight font-normal",
          className
        )}
        style={{ x: motionSafe ? x : 0 }}
      >
        <span className="mr-12 flex items-center gap-12">
          <span>{text}</span>
          <span className="text-sun opacity-60">✦</span>
          <span>सा विद्या या विमुक्तये</span>
          <span className="text-sun opacity-60">✦</span>
        </span>
        <span className="mr-12 flex items-center gap-12" aria-hidden="true">
          <span>{text}</span>
          <span className="text-sun opacity-60">✦</span>
          <span>सा विद्या या विमुक्तये</span>
          <span className="text-sun opacity-60">✦</span>
        </span>
      </motion.div>
    </div>
  );
}
