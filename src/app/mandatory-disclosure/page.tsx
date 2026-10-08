"use client";

import React from "react";
import { Container, Section, Hairline } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";
import { mandatoryDisclosure } from "@/content/disclosure";

export default function MandatoryDisclosurePage() {
  return (
    <div className="flex flex-col w-full print:bg-white print:text-black">
      <div className="print:hidden">
        <PageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
          ]}
          eyebrow="Statutory Compliance"
          title="Mandatory public disclosure."
          lead="Institutional registration, statutory certificates, and infrastructure metrics published in accordance with education department directives."
        />
      </div>

      <Section tone="paper" spacing="default" className="print:py-0 print:bg-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Print Header */}
            <div className="hidden print:block border-b-2 border-black pb-4 mb-8">
              <h1 className="text-2xl font-bold uppercase">Sunrays Vidhyalaya · Surat</h1>
              <p className="text-xs">
                Run by Leo Institute of Education Trust · GSEB Affiliated School
              </p>
              <p className="text-xs">Plot No 1 to 5, Opp. Dakheshwar BRTS, Udhna–Navsari Road, Surat</p>
            </div>

            <div className="flex items-center justify-between border-b border-[var(--line)] pb-4 print:hidden">
              <span className="t-eyebrow text-sun">Official Records</span>
              <button
                onClick={() => {
                  if (typeof window !== "undefined") window.print();
                }}
                className="text-xs uppercase tracking-widest text-ink hover:text-sun font-medium underline flex items-center gap-1 cursor-pointer"
              >
                <span>🖨 Print Disclosure</span>
              </button>
            </div>

            {/* Disclosure Sections */}
            <div className="space-y-12">
              {mandatoryDisclosure.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <div>
                    <h2 className="font-display text-2xl text-ink font-normal print:text-black">
                      {section.title}
                    </h2>
                    <p className="t-meta text-xs text-muted print:text-gray-600">
                      {section.description}
                    </p>
                  </div>

                  <div className="border border-[var(--line)] bg-porcelain overflow-hidden print:border-black print:bg-white">
                    <table className="w-full text-left border-collapse text-sm">
                      <tbody className="divide-y divide-[var(--line)] print:divide-black text-ink print:text-black">
                        {section.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-paper/40 transition-colors">
                            <td className="py-3.5 px-6 font-medium text-xs sm:text-sm w-1/2">
                              {row.label}
                            </td>
                            <td className="py-3.5 px-6 text-xs sm:text-sm text-muted print:text-black w-1/2">
                              {row.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            <Hairline className="print:hidden" />

            <div className="p-6 bg-porcelain border border-[var(--line)] text-xs text-muted space-y-2 print:border-black print:bg-white print:text-black">
              <p className="font-semibold text-ink print:text-black">Administrative Verification Notice</p>
              <p>
                Certified original statutory certificates, municipal fire NOC, water hygiene
                test certifications, and Trust deed copies are permanently preserved for inspection
                at the school administrative office during designated working hours.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
