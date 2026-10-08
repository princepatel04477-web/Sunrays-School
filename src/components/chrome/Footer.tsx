import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sunrise } from "@/components/signature/Sunrise";
import { Wordmark } from "@/components/brand/Wordmark";
import { siteConfig } from "@/content/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { label: "The School", href: "/about" },
    { label: "Trustee's Message", href: "/about/trustee" },
    { label: "Our Faculty", href: "/about/faculty" },
    { label: "Laboratories", href: "/academics/labs" },
    { label: "Streams (Science & Commerce)", href: "/academics/streams" },
    { label: "Campus Gallery", href: "/gallery" },
    { label: "Upcoming Events", href: "/events" },
  ];

  const admissionLinks = [
    { label: "Admissions Procedure", href: "/admissions/procedure" },
    { label: "Fee Policy & Overview", href: "/admissions/fees" },
    { label: "TC Updates & Transfer Records", href: "/admissions/tc-updates" },
    { label: "Withdrawal Policy", href: "/admissions/policy" },
    { label: "Enquire for Admission", href: "/admissions/enquire" },
  ];

  return (
    <footer className="bg-ink text-paper on-ink border-t border-[var(--line-dark)] relative overflow-hidden">
      {/* Top Statement with Sunrise */}
      <div className="pt-24 pb-16 px-5 md:px-8 xl:px-14 max-w-[1440px] mx-auto border-b border-[var(--line-dark)] text-center">
        <span className="t-eyebrow text-sun mb-4 block">Leo Institute of Education Trust</span>
        <h2 className="t-display-l text-paper max-w-4xl mx-auto mb-8 font-normal">
          Where knowledge liberates.
        </h2>
        <div className="max-w-2xl mx-auto">
          <Sunrise mode="scroll" />
        </div>
      </div>

      {/* Main 4-Column Grid */}
      <div className="py-20 px-5 md:px-8 xl:px-14 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        {/* Column 1: School Identity & Motto (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 bg-white/5 rounded-full p-1 border border-sun/30 flex items-center justify-center">
              <Image
                src="/legacy/logo/logo.png"
                alt="Sunrays Vidhyalaya Crest"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <Wordmark size="sm" className="text-paper" />
          </div>

          <div className="border-l-2 border-sun pl-4 py-1">
            <p className="font-deva text-xl text-paper">{siteConfig.motto.deva}</p>
            <p className="t-meta text-xs text-sun mt-0.5 tracking-wider uppercase">
              {siteConfig.motto.en}
            </p>
          </div>

          <p className="t-body text-sm text-[#b6bcd2] max-w-sm">
            Nursery to Standard 12 (Science and Commerce streams). Providing GSEB-affiliated
            instruction in English and Gujarati mediums with holistic character discipline.
          </p>

          <div>
            <a
              href={siteConfig.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-2.5 border border-sun/40 hover:border-sun text-xs uppercase tracking-widest text-paper hover:bg-white/5 transition-all"
            >
              <span className="text-sun">❖</span>
              <span>Download Parent Mobile App</span>
              <span className="text-sun">↗</span>
            </a>
          </div>
        </div>

        {/* Column 2: Explore (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="t-eyebrow text-sun">Explore</h3>
          <ul className="space-y-2.5 text-sm">
            {exploreLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[#b6bcd2] hover:text-paper hover:underline transition-colors block py-0.5"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Admissions (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <h3 className="t-eyebrow text-sun">Admissions</h3>
          <ul className="space-y-2.5 text-sm">
            {admissionLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[#b6bcd2] hover:text-paper hover:underline transition-colors block py-0.5"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.erpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sun hover:underline transition-colors flex items-center gap-1.5 py-0.5 font-medium"
              >
                <span>Pay Fees via ERP</span>
                <span>↗</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Visit & Direct Contact (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <h3 className="t-eyebrow text-sun">Campus Visit</h3>
          <p className="text-sm text-[#b6bcd2] leading-relaxed">
            {siteConfig.address.full}
          </p>
          <div className="space-y-2 text-sm text-[#b6bcd2] pt-2">
            <p>
              <strong className="text-paper font-medium">Hours:</strong> {siteConfig.hours}
            </p>
            <p>
              <strong className="text-paper font-medium">Telephone:</strong>{" "}
              <a
                href={`tel:${siteConfig.phone.e164}`}
                className="hover:text-sun transition-colors underline-offset-4 hover:underline"
              >
                {siteConfig.phone.display}
              </a>
            </p>
            <p>
              <strong className="text-paper font-medium">Email:</strong>{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-sun transition-colors underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
          <div className="pt-2">
            <a
              href="https://maps.google.com/?q=Plot+No+1+to+5+Opp+Dakheshwar+BRTS+Udhna+Navsari+Road+Surat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-sun hover:underline font-medium"
            >
              <span>Get Campus Directions</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--line-dark)] py-8 px-5 md:px-8 xl:px-14 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8a91aa]">
        <div>
          © {currentYear} {siteConfig.legalName}. All rights reserved.
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <Link href="/mandatory-disclosure" className="hover:text-paper transition-colors">
            Mandatory Disclosure
          </Link>
          <span>·</span>
          <Link href="/privacy" className="hover:text-paper transition-colors">
            Privacy Policy
          </Link>
          <span>·</span>
          <Link href="/careers" className="hover:text-paper transition-colors">
            Careers
          </Link>
          <span>·</span>
          <a
            href={siteConfig.erpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-paper transition-colors"
          >
            ERP Login ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
