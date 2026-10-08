"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { SunMark } from "@/components/brand/SunMark";
import { Wordmark } from "@/components/brand/Wordmark";
import { Magnetic } from "@/components/motion/Magnetic";
import { navigationSections, type NavSection } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { useLenis } from "@/lib/motion/SmoothScroll";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState<NavSection | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);

  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const { stop, start } = useLenis();

  // Close menus when pathname changes during navigation
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setActiveSection(null);
    setMobileMenuOpen(false);
  }

  // Handle scroll appearance (hide on scroll down, reveal on scroll up, paper after 80px)
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > 150 && currentScrollY > lastScrollY && !mobileMenuOpen) {
        setIsVisible(false);
        setActiveSection(null);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      stop();
      document.body.style.overflow = "hidden";
    } else {
      start();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, stop, start]);

  // Hover intent for mega menu
  const handleNavMouseEnter = (section: NavSection) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveSection(section);
    }, 120);
  };

  const handleNavMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveSection(null);
    }, 150);
  };

  // Keyboard navigation Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveSection(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-40 transition-all duration-300",
          isVisible ? "translate-y-0" : "-translate-y-full",
          isScrolled
            ? "bg-paper/95 backdrop-blur-md border-b border-[var(--line)] shadow-sm py-3"
            : "bg-transparent py-4 md:py-6"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 xl:px-14 flex items-center justify-between">
          {/* Left: Brand SunMark + Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-1 focus:ring-sun p-1 -m-1"
            aria-label="Sunrays Vidhyalaya - Return to Home"
          >
            <SunMark size={44} className="text-sun group-hover:scale-105 transition-transform" />
            <Wordmark size="base" />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-8"
            onMouseLeave={handleNavMouseLeave}
            aria-label="Primary Navigation"
          >
            {navigationSections.map((section) => {
              const isOpen = activeSection?.title === section.title;
              return (
                <div
                  key={section.title}
                  className="relative"
                  onMouseEnter={() => handleNavMouseEnter(section)}
                >
                  <button
                    onClick={() => setActiveSection(isOpen ? null : section)}
                    aria-expanded={isOpen}
                    aria-controls={`mega-menu-${section.title}`}
                    className={cn(
                      "font-sans text-[12px] uppercase font-medium tracking-[0.16em] py-2 transition-colors relative flex items-center gap-1",
                      isOpen ? "text-sun" : "text-ink hover:text-sun"
                    )}
                  >
                    <span>{section.title}</span>
                    <span
                      className={cn(
                        "text-[9px] transition-transform duration-200",
                        isOpen ? "rotate-180 text-sun" : "text-muted"
                      )}
                    >
                      ▾
                    </span>
                  </button>
                </div>
              );
            })}

            <Link
              href="/contact"
              className="font-sans text-[12px] uppercase font-medium tracking-[0.16em] py-2 text-ink hover:text-sun transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action: Enquire Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Magnetic strength={0.2}>
              <Link
                href="/admissions/enquire"
                className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-ink text-paper text-xs uppercase tracking-widest font-sans font-medium hover:bg-ink-2 transition-colors focus:ring-2 focus:ring-sun focus:outline-none"
              >
                Enquire for Admission
              </Link>
            </Magnetic>

            {/* Mobile Nav Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-ink hover:text-sun transition-colors focus:outline-none focus:ring-1 focus:ring-sun"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Toggle Navigation</span>
              <div className="w-6 h-4.5 flex flex-col justify-between">
                <span
                  className={cn(
                    "h-0.5 w-full bg-current transform transition-transform duration-300",
                    mobileMenuOpen && "rotate-45 translate-y-2"
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 w-full bg-current transition-opacity duration-300",
                    mobileMenuOpen && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 w-full bg-current transform transition-transform duration-300",
                    mobileMenuOpen && "-rotate-45 -translate-y-2"
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        <AnimatePresence>
          {activeSection && (
            <motion.div
              id={`mega-menu-${activeSection.title}`}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => {
                if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
              }}
              onMouseLeave={handleNavMouseLeave}
              className="hidden lg:block absolute top-full left-0 right-0 bg-paper border-b border-[var(--line)] shadow-xl z-50 py-12"
            >
              <div className="max-w-[1440px] mx-auto px-5 md:px-8 xl:px-14 grid grid-cols-12 gap-8">
                {/* Column 1: Section Title & Description */}
                <div className="col-span-3 border-r border-[var(--line)] pr-8 flex flex-col justify-between">
                  <div>
                    <span className="t-eyebrow block mb-2">{activeSection.title}</span>
                    <h3 className="t-display-m mb-4 font-normal">{activeSection.title}</h3>
                    <p className="t-lead text-sm text-muted">{activeSection.description}</p>
                  </div>
                  <Link
                    href={activeSection.href}
                    onClick={() => setActiveSection(null)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sun font-medium hover:underline pt-6"
                  >
                    <span>Explore Section</span>
                    <span>→</span>
                  </Link>
                </div>

                {/* Column 2: Numbered Links */}
                <div className="col-span-5 px-4 space-y-1">
                  {activeSection.links.map((link) => (
                    <div key={link.href} className="group border-b border-[var(--line)] last:border-b-0">
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel={link.rel ?? "noopener noreferrer"}
                          className="py-3 px-2 flex items-baseline justify-between transition-colors group-hover:text-sun block"
                        >
                          <div className="flex items-baseline gap-3">
                            <span className="font-mono text-xs text-muted group-hover:text-sun">
                              {link.index}
                            </span>
                            <span className="font-sans text-[15px] text-ink font-medium group-hover:text-sun">
                              {link.label}
                            </span>
                          </div>
                          <span className="text-xs text-sun opacity-0 group-hover:opacity-100 transition-opacity">
                            ↗
                          </span>
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setActiveSection(null)}
                          className="py-3 px-2 flex items-baseline justify-between transition-colors group-hover:text-sun block"
                        >
                          <div className="flex items-baseline gap-3">
                            <span className="font-mono text-xs text-muted group-hover:text-sun">
                              {link.index}
                            </span>
                            <span className="font-sans text-[15px] text-ink font-medium group-hover:text-sun">
                              {link.label}
                            </span>
                          </div>
                          <span className="text-xs text-sun opacity-0 group-hover:opacity-100 transition-opacity">
                            →
                          </span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Column 3: Editorial Image */}
                <div className="col-span-4 pl-8 border-l border-[var(--line)]">
                  {activeSection.image && (
                    <div className="space-y-3">
                      <div className="relative aspect-[16/10] overflow-hidden bg-porcelain border border-[var(--line)]">
                        <Image
                          src={activeSection.image}
                          alt={activeSection.imageCaption ?? activeSection.title}
                          fill
                          sizes="400px"
                          className="object-cover"
                        />
                      </div>
                      {activeSection.imageCaption && (
                        <p className="t-meta text-xs">{activeSection.imageCaption}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[60px] z-50 bg-ink text-paper on-ink overflow-y-auto p-6 flex flex-col justify-between"
          >
            <div className="space-y-6 pt-4">
              {navigationSections.map((section) => {
                const isExpanded = expandedMobileSection === section.title;
                return (
                  <div key={section.title} className="border-b border-[var(--line-dark)] pb-4">
                    <button
                      onClick={() =>
                        setExpandedMobileSection(isExpanded ? null : section.title)
                      }
                      className="w-full flex items-center justify-between text-left py-2"
                    >
                      <span className="font-display text-3xl font-light text-paper">
                        {section.title}
                      </span>
                      <span className="text-sun text-xl">{isExpanded ? "−" : "+"}</span>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 pt-3 space-y-3 overflow-hidden"
                        >
                          {section.links.map((link) => (
                            <div key={link.href}>
                              {link.external ? (
                                <a
                                  href={link.href}
                                  target="_blank"
                                  rel={link.rel ?? "noopener noreferrer"}
                                  className="text-[15px] text-paper/80 hover:text-sun flex items-center justify-between py-1"
                                >
                                  <span>{link.label}</span>
                                  <span className="text-xs text-sun">↗</span>
                                </a>
                              ) : (
                                <Link
                                  href={link.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-[15px] text-paper/80 hover:text-sun flex items-center justify-between py-1"
                                >
                                  <span>{link.label}</span>
                                  <span className="text-xs text-sun">→</span>
                                </Link>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-3xl font-light text-paper block py-2"
                >
                  Contact
                </Link>
              </div>

              <div className="pt-4">
                <Link
                  href="/admissions/enquire"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-4 bg-paper text-ink text-center text-xs uppercase tracking-widest font-sans font-medium block"
                >
                  Enquire for Admission
                </Link>
              </div>
            </div>

            {/* Mobile Contact Quick Anchors */}
            <div className="pt-10 pb-6 border-t border-[var(--line-dark)] text-xs text-paper/70 space-y-3">
              <p className="t-eyebrow text-sun">Direct Contacts</p>
              <div className="flex flex-col gap-2">
                <a
                  href={`tel:${siteConfig.phone.e164}`}
                  className="hover:text-sun transition-colors"
                >
                  Call: {siteConfig.phone.display}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-sun transition-colors"
                >
                  Email: {siteConfig.email}
                </a>
                <a
                  href={siteConfig.erpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sun hover:underline"
                >
                  Parent ERP Portal ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
