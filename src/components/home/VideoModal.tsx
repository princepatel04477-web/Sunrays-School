"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Magnetic } from "@/components/motion/Magnetic";
import { siteConfig } from "@/content/site";
import { useLenis } from "@/lib/motion/SmoothScroll";

export function VideoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { stop, start } = useLenis();

  useEffect(() => {
    if (isOpen) {
      stop();
      document.body.style.overflow = "hidden";
    } else {
      start();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, stop, start]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-ink group">
        <Image
          src="/legacy/video/01.jpg"
          alt="Sunrays Vidhyalaya campus film preview"
          fill
          sizes="(max-width: 1440px) 100vw, 1440px"
          className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-ink/40 flex flex-col items-center justify-center p-6 text-center">
          <Magnetic strength={0.3}>
            <button
              onClick={() => setIsOpen(true)}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-paper/40 bg-ink/60 backdrop-blur-sm text-paper flex items-center justify-center hover:border-sun hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-sun mb-4"
              aria-label="Play documentary film"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 md:w-8 md:h-8 translate-x-0.5 text-sun"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </Magnetic>
          <span className="t-eyebrow text-sun tracking-[0.24em]">Campus Documentary</span>
          <h3 className="t-display-m text-paper mt-2">Watch the School Film</h3>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Campus documentary video player"
          >
            <div className="relative w-full max-w-5xl aspect-[16/9] bg-black border border-[var(--line-dark)] shadow-2xl">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 text-paper hover:text-sun font-sans text-xs uppercase tracking-widest p-2 flex items-center gap-2"
              >
                <span>Close</span>
                <span>✕</span>
              </button>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${siteConfig.youtubeId}?autoplay=1&rel=0`}
                title="Sunrays Vidhyalaya Film"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
