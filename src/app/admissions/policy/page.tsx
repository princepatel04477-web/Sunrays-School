import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Hairline } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Withdrawal & Transfer Certificate Policy · Regulations",
  description:
    "Statutory guidelines, notice periods, and clearance procedures for student withdrawal and Transfer Certificate (TC) issuance at Sunrays Vidhyalaya.",
};

export default function PolicyPage() {
  const policySections = [
    { id: "notice-period", title: "Notice Period & Application" },
    { id: "clearance", title: "Institutional Clearance (No-Dues)" },
    { id: "tc-issuance", title: "Transfer Certificate Issuance" },
    { id: "fee-adjustment", title: "Fee Adjustments & Refunds" },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Policy", href: "/admissions/policy" },
        ]}
        eyebrow="Statutory Policies"
        title="Withdrawal & TC regulations."
        lead="Clear administrative procedures governing student relocation, clearance, and certificate issuance."
      />

      <Section tone="paper" spacing="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
            {/* Sticky Anchor TOC */}
            <aside className="lg:col-span-4 lg:sticky lg:top-36 space-y-4 p-6 bg-porcelain border border-[var(--line)]">
              <span className="t-eyebrow text-sun block">Policy Navigation</span>
              <nav className="space-y-2 text-sm">
                {policySections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block text-muted hover:text-ink transition-colors py-1 text-xs uppercase tracking-wider font-medium"
                  >
                    → {sec.title}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-[var(--line)]">
                <Link
                  href="/admissions/tc-updates"
                  className="text-xs uppercase tracking-widest text-sun hover:underline font-semibold block"
                >
                  View Issued TC Log →
                </Link>
              </div>
            </aside>

            {/* Policy Narrative */}
            <div className="lg:col-span-8 space-y-12">
              <section id="notice-period" className="scroll-mt-36 space-y-4">
                <span className="t-eyebrow text-sun">Section 01</span>
                <h2 className="t-display-m font-normal">Notice Period & Application</h2>
                <p className="t-body text-muted leading-relaxed">
                  Parents wishing to withdraw their child from the school at the end of the academic
                  term must submit a formal written application signed by both parents/legal guardians
                  to the Principal at least 30 days prior to the commencement of the subsequent term.
                </p>
                <p className="t-body text-muted leading-relaxed">
                  Mid-term withdrawals necessitated by sudden parent transfer or relocation require
                  formal documentation from the parent&apos;s employer alongside the standard TC
                  request form.
                </p>
              </section>

              <Hairline />

              <section id="clearance" className="scroll-mt-36 space-y-4">
                <span className="t-eyebrow text-sun">Section 02</span>
                <h2 className="t-display-m font-normal">Institutional Clearance (No-Dues)</h2>
                <p className="t-body text-muted leading-relaxed">
                  Prior to the issuance of any Transfer Certificate or School Leaving Certificate,
                  all outstanding institutional accounts must be fully settled:
                </p>
                <ul className="space-y-2 text-sm text-muted list-disc pl-5">
                  <li>Tuition and term dues cleared on the school accounts ledger.</li>
                  <li>All library books and materials returned in good condition.</li>
                  <li>Laboratory apparatus and equipment clearance from department heads.</li>
                  <li>Return of school sports uniform or equipment (if applicable).</li>
                </ul>
              </section>

              <Hairline />

              <section id="tc-issuance" className="scroll-mt-36 space-y-4">
                <span className="t-eyebrow text-sun">Section 03</span>
                <h2 className="t-display-m font-normal">Transfer Certificate Issuance</h2>
                <p className="t-body text-muted leading-relaxed">
                  Upon completion of clearance, the formal Transfer Certificate (TC) is prepared by
                  the administrative office within seven working days. The TC records the student&apos;s
                  General Register (GR) Number, date of birth per official records, attendance record,
                  and character conduct.
                </p>
                <p className="t-body text-muted leading-relaxed">
                  For students migrating outside Gujarat state or seeking admission to central boards
                  (CBSE/ICSE), counter-signature procedures through the competent District Education
                  Officer (DEO) are facilitated upon request.
                </p>
              </section>

              <Hairline />

              <section id="fee-adjustment" className="scroll-mt-36 space-y-4">
                <span className="t-eyebrow text-sun">Section 04</span>
                <h2 className="t-display-m font-normal">Fee Adjustments & Refunds</h2>
                <p className="t-body text-muted leading-relaxed">
                  Admission registration charges are non-refundable once an applicant has been inducted
                  into a classroom. Tuition fee refunds for mid-term departures are prorated strictly
                  in accordance with state education department directives and trust regulations.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
