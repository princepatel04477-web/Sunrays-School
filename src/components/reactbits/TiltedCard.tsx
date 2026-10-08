"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring } from "motion/react";
import { useMotionSafe } from "@/lib/motion/useMotionSafe";
import { cn } from "@/lib/utils";

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max 6 deg
}

export function TiltedCard({
  children,
  className,
  maxTilt = 6,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const motionSafe = useMotionSafe();
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!motionSafe || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPct = (x / rect.width - 0.5) * 2;
    const yPct = (y / rect.height - 0.5) * 2;

    rotateX.set(-yPct * maxTilt);
    rotateY.set(xPct * maxTilt);

    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.08, // White glare max 8%
    });
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: motionSafe ? rotateX : 0,
        rotateY: motionSafe ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative will-change-transform transition-shadow duration-300",
        className
      )}
    >
      {children}
      {/* Subtle white glare */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.8) 0%, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}
