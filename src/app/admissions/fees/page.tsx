import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Hairline } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";
import { feePolicy, feeSchedules } from "@/content/fees";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Fee Policy & Payment · Tuition Schedule",
  description:
    "Institutional fee policy, ERP payment portal link, and campus visit fee schedule orientation for Sunrays Vidhyalaya, Surat.",
};

export default function FeesPage() {
  const inrFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Fees", href: "/admissions/fees" },
        ]}
        eyebrow="Financial Information"
        title="Tuition & fee structure."
        lead="Transparent, statutory fee regulations aligned with state education board guidelines."
      />

      <Section tone="paper" spacing="default">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Policy statement / Notice panel */}
            <div className="p-8 md:p-10 bg-porcelain border border-[var(--line)] space-y-4">
              <span className="t-eyebrow text-sun block">Institutional Policy</span>
              <h2 className="t-display-m font-normal">Fee Details & Campus Orientation</h2>
              <p className="t-body text-muted leading-relaxed">
                {feePolicy.noticeText}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <Link
                  href="/admissions/enquire"
                  className="px-6 py-3 bg-ink text-paper text-xs uppercase tracking-widest font-semibold hover:bg-ink-2 transition-colors"
                >
                  Schedule Campus Consultation
                </Link>

                <a
                  href={feePolicy.erpPaymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-sun hover:underline font-semibold flex items-center gap-1.5"
                >
                  <span>Pay Enrolled Fees on ERP Portal</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Standards Overview Table */}
            <div className="space-y-6">
              <div>
                <span className="t-eyebrow text-sun block mb-1">Standard Categorization</span>
                <h3 className="t-display-m font-normal">Academic Divisions</h3>
                <p className="t-meta text-xs text-muted mt-1">
                  Tuition schedule applies across both English and Gujarati medium divisions.
                </p>
              </div>

              <div className="border border-[var(--line)] bg-porcelain overflow-hidden">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-[var(--line)] bg-paper/60 text-xs uppercase tracking-wider text-muted font-mono">
                      <th className="py-4 px-6">Division</th>
                      <th className="py-4 px-6">Medium</th>
                      <th className="py-4 px-6 text-right">Schedule Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--line)] text-ink">
                    {feeSchedules.map((row, idx) => (
                      <tr key={idx} className="hover:bg-paper/40 transition-colors">
                        <td className="py-4 px-6 font-medium">{row.standard}</td>
                        <td className="py-4 px-6 text-muted">{row.medium}</td>
                        <td className="py-4 px-6 text-right">
                          {row.isAvailable && row.tuitionFeePaise ? (
                            <span className="font-mono font-semibold text-ink">
                              {inrFormatter.format(row.tuitionFeePaise / 100)}
                            </span>
                          ) : (
                            <span className="t-meta text-xs text-sun-text font-medium">
                              Provided on campus visit
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <Hairline />

            {/* Payment Modes & Instructions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-porcelain border border-[var(--line)] space-y-3">
                <h4 className="font-sans text-base font-semibold text-ink">
                  Online ERP Payments
                </h4>
                <p className="t-body text-sm text-muted leading-relaxed">
                  Existing enrolled families can pay term tuition fees, review payment history,
                  and download statutory receipts directly through our integrated school ERP.
                </p>
                <a
                  href={siteConfig.erpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-sun hover:underline font-semibold inline-block pt-2"
                >
                  Open ERP Payment Portal ↗
                </a>
              </div>

              <div className="p-6 bg-porcelain border border-[var(--line)] space-y-3">
                <h4 className="font-sans text-base font-semibold text-ink">
                  Administrative Desk Assistance
                </h4>
                <p className="t-body text-sm text-muted leading-relaxed">
                  Fee payments are also accepted at the accounts counter via bank draft, UPI,
                  and electronic transfer from Monday through Saturday (10:00 AM – 05:30 PM).
                </p>
                <a
                  href={`tel:${siteConfig.phone.e164}`}
                  className="text-xs uppercase tracking-widest text-ink hover:text-sun font-semibold inline-block pt-2"
                >
                  Accounts Desk: {siteConfig.phone.display}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
