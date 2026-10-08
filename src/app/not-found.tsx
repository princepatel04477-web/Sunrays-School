import React from "react";
import Link from "next/link";
import { Sunrise } from "@/components/signature/Sunrise";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-ink text-paper on-ink px-6 py-24 text-center">
      <div className="max-w-md w-full space-y-6">
        <div className="max-w-xs mx-auto">
          <Sunrise mode="ambient" />
        </div>

        <span className="font-mono text-xs text-sun tracking-[0.24em] uppercase block">
          404 · Page Not Found
        </span>

        <h1 className="t-display-m text-paper font-normal">
          This page has wandered off.
        </h1>

        <p className="t-body text-[#b6bcd2] text-sm max-w-sm mx-auto">
          The link you followed may have changed, or the page may have been restructured during our
          campus portal update.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-2.5 bg-paper text-ink text-xs uppercase tracking-widest font-semibold hover:bg-paper-2 transition-colors"
          >
            Return to Home
          </Link>
          <Link
            href="/admissions"
            className="px-6 py-2.5 border border-[var(--line-dark)] text-paper text-xs uppercase tracking-widest font-medium hover:border-sun hover:text-sun transition-colors"
          >
            Admissions
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2.5 border border-[var(--line-dark)] text-paper text-xs uppercase tracking-widest font-medium hover:border-sun hover:text-sun transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
