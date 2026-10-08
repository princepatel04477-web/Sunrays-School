"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container, Section, Hairline } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/content/site";
import { submitEnquiry } from "@/app/admissions/enquire/actions";

export default function ContactPage() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("standard", "General Contact");
    formData.append("medium", "English Medium");
    formData.append("childName", "N/A - General Enquiry");
    formData.append("consent", "on");

    await submitEnquiry(null, formData);
    setContactSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
        eyebrow="Campus Enquiries"
        title="Visit us in Udhna, Surat."
        lead="Our administrative desk is open Monday through Saturday to answer admissions enquiries, facilitate campus tours, and assist parents."
      />

      <Section tone="paper" spacing="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Info (Cols 1-6) */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="t-eyebrow text-sun block mb-2">Location</span>
                <h2 className="t-display-m font-normal">Our Campus Address</h2>
                <p className="t-body text-muted leading-relaxed mt-3">
                  {siteConfig.address.full}
                </p>
                <div className="pt-3">
                  <a
                    href="https://maps.google.com/?q=Plot+No+1+to+5+Opp+Dakheshwar+BRTS+Udhna+Navsari+Road+Surat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sun hover:underline font-semibold"
                  >
                    <span>Open in Google Maps</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              <Hairline />

              {/* Working Hours & Direct Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <span className="t-meta text-xs uppercase tracking-wider block mb-1">
                    Administrative Hours
                  </span>
                  <p className="font-sans text-sm font-semibold text-ink">
                    {siteConfig.hours}
                  </p>
                  <p className="t-meta text-xs mt-1">Closed on Sundays and statutory holidays</p>
                </div>

                <div>
                  <span className="t-meta text-xs uppercase tracking-wider block mb-1">
                    Telephone Enquiry
                  </span>
                  <a
                    href={`tel:${siteConfig.phone.e164}`}
                    className="font-sans text-sm font-semibold text-ink hover:text-sun transition-colors block"
                  >
                    {siteConfig.phone.display}
                  </a>
                  <p className="t-meta text-xs mt-1">Direct admissions desk</p>
                </div>

                <div>
                  <span className="t-meta text-xs uppercase tracking-wider block mb-1">
                    Electronic Mail
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-sans text-sm font-semibold text-ink hover:text-sun transition-colors block"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div>
                  <span className="t-meta text-xs uppercase tracking-wider block mb-1">
                    WhatsApp Desk
                  </span>
                  <a
                    href="https://wa.me/919624499911"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm font-semibold text-sun hover:underline block"
                  >
                    +91 96244 99911 ↗
                  </a>
                </div>
              </div>

              <Hairline />

              {/* Transit Landmark Note */}
              <div className="p-6 bg-porcelain border border-[var(--line)] space-y-2">
                <span className="t-eyebrow text-sun">Public Transit Landmark</span>
                <h4 className="font-sans text-sm font-semibold text-ink">
                  Directly Opposite Dakheshwar BRTS
                </h4>
                <p className="t-meta text-xs text-muted leading-relaxed">
                  Convenient BRTS and city bus connections along the primary Udhna–Navsari corridor
                  provide seamless transit for day scholars and visiting parents.
                </p>
              </div>
            </div>

            {/* Right: Privacy-Friendly Map Container (Cols 7-12) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="border border-[var(--line)] bg-porcelain overflow-hidden relative aspect-[4/3] flex items-center justify-center">
                {mapLoaded ? (
                  <iframe
                    src="https://maps.google.com/maps?q=Plot+No+1+to+5+Opp+Dakheshwar+BRTS+Udhna+Navsari+Road+Surat&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    title="Sunrays Vidhyalaya Location Map"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                ) : (
                  <div className="p-8 text-center space-y-4">
                    <span className="text-3xl block">📍</span>
                    <h3 className="font-display text-xl text-ink font-normal">
                      Interactive Campus Map
                    </h3>
                    <p className="t-meta text-xs text-muted max-w-sm mx-auto">
                      Click below to load the interactive Google Map. Third-party cookies and
                      scripts load only with your interaction.
                    </p>
                    <button
                      onClick={() => setMapLoaded(true)}
                      className="px-6 py-2.5 bg-ink text-paper text-xs uppercase tracking-widest font-semibold hover:bg-ink-2 transition-colors"
                    >
                      Load Interactive Map
                    </button>
                  </div>
                )}
              </div>
              <p className="t-meta text-[11px] text-muted text-center">
                Plot No 1 to 5, Opp. Dakheshwar BRTS, Udhna–Navsari Road, Surat, Gujarat.
              </p>
            </div>
          </div>

          <Hairline className="my-20" />

          {/* Quick Message Form */}
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="t-eyebrow text-sun">Direct Message</span>
              <h3 className="t-display-m font-normal">Send a Quick Message</h3>
              <p className="t-meta text-xs">
                For formal admission requests, we recommend our comprehensive{" "}
                <Link href="/admissions/enquire" className="text-sun hover:underline">
                  Admissions Enquiry form
                </Link>
                .
              </p>
            </div>

            {contactSubmitted ? (
              <div className="p-8 bg-porcelain border border-[var(--line)] text-center space-y-3">
                <h4 className="font-display text-xl text-ink">Message Sent</h4>
                <p className="t-body text-sm text-muted">
                  Thank you. Our administrative team will reach back via phone or email shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleContactSubmit}
                className="p-8 bg-porcelain border border-[var(--line)] space-y-6"
              >
                <div className="space-y-1.5">
                  <label htmlFor="parentName" className="t-eyebrow text-[11px] text-muted block">
                    Your Full Name *
                  </label>
                  <input
                    id="parentName"
                    name="parentName"
                    type="text"
                    required
                    placeholder="e.g. Jayshreeben Shah"
                    className="w-full bg-transparent border-b border-[var(--line)] py-2 text-ink focus:outline-none focus:border-sun text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone" className="t-eyebrow text-[11px] text-muted block">
                    Contact Phone Number (10 digits) *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="9876543210"
                    className="w-full bg-transparent border-b border-[var(--line)] py-2 text-ink font-mono focus:outline-none focus:border-sun text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="t-eyebrow text-[11px] text-muted block">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="How can our school administration assist you?"
                    className="w-full bg-transparent border-b border-[var(--line)] py-2 text-ink focus:outline-none focus:border-sun text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-ink text-paper text-xs uppercase tracking-widest font-semibold hover:bg-ink-2 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
}
