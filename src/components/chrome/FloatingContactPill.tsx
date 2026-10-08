"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/content/site";

export function FloatingContactPill() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrolledPct = window.scrollY / scrollHeight;
        setVisible(scrolledPct > 0.35);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Do not show on enquiry page
  if (pathname === "/admissions/enquire") {
    return null;
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 flex items-center bg-ink text-paper on-ink shadow-2xl border border-[var(--line-dark)] rounded-full pl-5 pr-2 py-2 gap-3"
        >
          <Link
            href="/admissions/enquire"
            className="text-xs uppercase tracking-widest font-sans font-semibold hover:text-sun transition-colors"
          >
            Enquire
          </Link>

          <div className="h-4 w-px bg-paper/20" />

          {/* Call icon button */}
          <a
            href={`tel:${siteConfig.phone.e164}`}
            className="w-8 h-8 rounded-full bg-ink-2 hover:bg-sun hover:text-ink text-paper flex items-center justify-center transition-colors text-xs"
            aria-label={`Call school at ${siteConfig.phone.display}`}
          >
            📞
          </a>

          {/* WhatsApp icon button */}
          <a
            href="https://wa.me/919624499911"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-ink-2 hover:bg-[#25D366] hover:text-white text-paper flex items-center justify-center transition-colors text-xs"
            aria-label="Enquire via WhatsApp"
          >
            💬
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
