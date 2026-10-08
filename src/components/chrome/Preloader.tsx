"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sunrise } from "@/components/signature/Sunrise";
import { Wordmark } from "@/components/brand/Wordmark";
import { siteConfig } from "@/content/site";
import { useMotionSafe } from "@/lib/motion/useMotionSafe";

export function Preloader() {
  const [show, setShow] = useState(false);
  const motionSafe = useMotionSafe();

  useEffect(() => {
    // Only show on first visit in session
    if (typeof window !== "undefined") {
      const seen = sessionStorage.getItem("sunrays_preloaded");
      if (!seen && motionSafe) {
        const startTimer = setTimeout(() => {
          setShow(true);
        }, 0);

        const endTimer = setTimeout(() => {
          setShow(false);
          sessionStorage.setItem("sunrays_preloaded", "true");
        }, 1600);

        return () => {
          clearTimeout(startTimer);
          clearTimeout(endTimer);
        };
      }
    }
  }, [motionSafe]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{
            clipPath: "inset(0% 0% 100% 0%)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink text-paper on-ink pointer-events-none select-none px-6"
        >
          <div className="w-full max-w-md flex flex-col items-center text-center">
            <div className="w-48 mb-6">
              <Sunrise mode="intro" />
            </div>

            <Wordmark size="base" className="text-paper mb-4" />

            <div className="mt-4 flex flex-col items-center space-y-2">
              <span className="font-deva text-2xl text-paper">
                {siteConfig.motto.deva}
              </span>
              <span className="t-eyebrow text-sun text-[10px] tracking-[0.24em]">
                {siteConfig.motto.en}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
