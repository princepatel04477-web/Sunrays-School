import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "GSEB Board Affiliation · State Curriculum Standards",
  description:
    "Information on Gujarat Secondary and Higher Secondary Education Board (GSEB) curriculum, evaluation framework, and medium of instruction at Sunrays Vidhyalaya.",
};

export default function GsebPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Academics", href: "/academics" },
          { label: "GSEB Affiliation", href: "/academics/gseb" },
        ]}
        eyebrow="Statutory Affiliation"
        title="GSEB Board Curriculum & Integrity."
        lead="Comprehensive instruction governed by the Gujarat Secondary and Higher Secondary Education Board."
      />

      <Section tone="paper" spacing="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Main Narrative (Cols 1-8) */}
            <div className="lg:col-span-8 space-y-10">
              <div className="space-y-4">
                <span className="t-eyebrow text-sun">Curriculum Framework</span>
                <h2 className="t-display-m font-normal">What the GSEB Board Delivers</h2>
                <p className="t-body text-muted leading-relaxed">
                  The Gujarat Secondary and Higher Secondary Education Board (GSEB) is the statutory
                  authority directing school education across Gujarat. Recognized for deep conceptual
                  grounding in sciences, mathematics, and regional literature, GSEB forms an ideal
                  foundation for state examinations, national entrance tests (NEET, JEE, GUJCET),
                  and civil service preparation.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-sans text-lg font-semibold text-ink">
                  Dual-Medium Instruction: English & Gujarati
                </h3>
                <p className="t-body text-muted leading-relaxed">
                  Sunrays Vidhyalaya operates distinct, fully staffed divisions for both English
                  Medium and Gujarati Medium instruction. Both mediums follow identical learning
                  outcomes and laboratory standards, ensuring that every student reaches rigorous
                  academic literacy without cultural disconnection.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-sans text-lg font-semibold text-ink">
                  Evaluation & Board Examination Readiness
                </h3>
                <p className="t-body text-muted leading-relaxed">
                  Continuous and Comprehensive Evaluation (CCE) guides primary and secondary standards,
                  providing early diagnostic feedback rather than high-stakes exam pressure. In
                  Standards 10 (SSC) and 12 (HSC), students complete structured unit assessments,
                  term examinations, and pre-board assessment series that simulate state board
                  conditions.
                </p>
              </div>

              <div className="p-6 bg-porcelain border border-[var(--line)] space-y-3">
                <h4 className="font-sans text-sm font-semibold text-ink">
                  Statutory Recognition & Compliance
                </h4>
                <p className="t-meta text-xs leading-relaxed">
                  Our school complies with all statutory regulations prescribed by the Gujarat
                  Department of Education and GSEB regulations. Relevant recognition certificates
                  and mandatory disclosures are cataloged in our administrative registry.
                </p>
                <Link
                  href="/mandatory-disclosure"
                  className="text-xs uppercase tracking-widest text-sun hover:underline font-medium inline-block pt-1"
                >
                  View Mandatory Statutory Disclosure →
                </Link>
              </div>
            </div>

            {/* Facts Sidebar (Cols 9-12) */}
            <aside className="lg:col-span-4 p-8 bg-porcelain border border-[var(--line)] space-y-6">
              <span className="t-eyebrow text-sun block">Board Fast Facts</span>

              <div className="space-y-4 text-sm divide-y divide-[var(--line)]">
                <div className="pt-3 first:pt-0">
                  <span className="text-muted text-xs uppercase tracking-wider block mb-1">
                    Board Name
                  </span>
                  <span className="text-ink font-medium">GSEB (Gujarat Board)</span>
                </div>

                <div className="pt-3">
                  <span className="text-muted text-xs uppercase tracking-wider block mb-1">
                    Standards Offered
                  </span>
                  <span className="text-ink font-medium">Nursery to Std 12</span>
                </div>

                <div className="pt-3">
                  <span className="text-muted text-xs uppercase tracking-wider block mb-1">
                    Mediums of Instruction
                  </span>
                  <span className="text-ink font-medium">English & Gujarati Medium</span>
                </div>

                <div className="pt-3">
                  <span className="text-muted text-xs uppercase tracking-wider block mb-1">
                    Streams at HSC (Std 11–12)
                  </span>
                  <span className="text-ink font-medium">Science (Group A/B) & Commerce</span>
                </div>

                <div className="pt-3">
                  <span className="text-muted text-xs uppercase tracking-wider block mb-1">
                    Location Center
                  </span>
                  <span className="text-ink font-medium">Udhna, Surat District</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--line)]">
                <Link
                  href="/admissions/enquire"
                  className="w-full py-3 bg-ink text-paper text-xs uppercase tracking-widest font-sans font-medium text-center block hover:bg-ink-2 transition-colors"
                >
                  Enquire for Admission
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </div>
  );
}
