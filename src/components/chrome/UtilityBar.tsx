"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function UtilityBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > 80 && current > lastScroll) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "hidden lg:block bg-ink-2 text-paper text-[12px] h-9 border-b border-[var(--line-dark)] transition-transform duration-300 z-40 relative",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 xl:px-14 h-full flex items-center justify-between">
        <div className="flex items-center gap-6 text-paper/80">
          <span>Udhna–Navsari Road, Surat</span>
          <span className="text-sun/50">·</span>
          <span>{siteConfig.hours}</span>
          <span className="text-sun/50">·</span>
          <a
            href={`tel:${siteConfig.phone.e164}`}
            className="hover:text-sun transition-colors underline-offset-4 hover:underline"
          >
            {siteConfig.phone.display}
          </a>
          <span className="text-sun/50">·</span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-sun transition-colors underline-offset-4 hover:underline"
          >
            {siteConfig.email}
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={siteConfig.erpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper/90 hover:text-sun transition-colors flex items-center gap-1.5"
          >
            <span>Parent Login</span>
            <span className="text-[10px] text-sun">↗</span>
          </a>
          <span className="text-sun/50">·</span>
          <a
            href={siteConfig.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper/90 hover:text-sun transition-colors flex items-center gap-1.5"
          >
            <span>Parent App</span>
            <span className="text-[10px] text-sun">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
