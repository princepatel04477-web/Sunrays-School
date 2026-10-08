"use client";

import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ScrollTrigger } from "@/lib/motion/gsap";
import { useLenis } from "@/lib/motion/SmoothScroll";

export default function Template({ children }: { children: React.ReactNode }) {
  const { scrollTo } = useLenis();

  useEffect(() => {
    scrollTo(0, { immediate: true });
    // Refresh ScrollTrigger calculations after initial paint
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
    return () => clearTimeout(timer);
  }, [scrollTo]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col flex-1 w-full"
    >
      {children}
    </motion.div>
  );
}
