import React from "react";

export function SkipToContent() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-ink focus:text-paper focus:border focus:border-sun focus:outline-none"
    >
      Skip to primary content
    </a>
  );
}
