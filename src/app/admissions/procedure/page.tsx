import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Hairline } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";
import { ScrollStack } from "@/components/reactbits/ScrollStack";
import { admissionSteps, requiredDocuments } from "@/content/admissions";

export const metadata: Metadata = {
  title: "Admission Procedure · 5-Step Enrollment Guide",
  description:
    "Step-by-step admission procedure for Sunrays Vidhyalaya, Surat: online enquiry, campus tour, readiness interaction, and document submission.",
};

export default function ProcedurePage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Procedure", href: "/admissions/procedure" },
        ]}
        eyebrow="Step-by-Step Enrollment"
        title="Five steps to admission."
        lead="Our structured, supportive admissions journey designed to introduce your family to our faculty and campus."
      />

      {/* ScrollStack Steps */}
      <Section tone="paper" spacing="default">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4">
              <span className="t-eyebrow text-sun">The Pathway</span>
              <h2 className="t-display-m font-normal">Sequential Admissions Roadmap</h2>
              <p className="t-lead">
                Follow the 5 progressive milestones from initial contact to student induction.
              </p>
            </div>

            <ScrollStack items={admissionSteps} />

            <Hairline className="my-16" />

            {/* Required Documents Checklist */}
            <div className="space-y-8">
              <div>
                <span className="t-eyebrow text-sun block mb-2">Checklist for Parents</span>
                <h2 className="t-display-m font-normal">Documents Required for Verification</h2>
                <p className="t-body text-muted mt-2">
                  Please keep original certificates and two self-attested photocopies ready for
                  presentation at the admissions office.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {requiredDocuments.map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-porcelain border border-[var(--line)] space-y-2 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <span className="font-mono text-xs text-sun font-semibold">
                          DOC 0{idx + 1}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-[var(--line)] text-muted">
                          {doc.mandatory ? "Mandatory" : "Optional"}
                        </span>
                      </div>
                      <h4 className="font-sans text-sm font-semibold text-ink">{doc.name}</h4>
                      <p className="t-meta text-xs mt-1 text-muted">{doc.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Action */}
            <div className="p-8 bg-porcelain border border-[var(--line)] text-center space-y-4 mt-12">
              <h3 className="t-display-m font-normal">Ready to Begin Step 01?</h3>
              <p className="t-body text-muted max-w-lg mx-auto">
                Fill our online admission enquiry form to schedule your initial interaction.
              </p>
              <div className="pt-2">
                <Link
                  href="/admissions/enquire"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-ink text-paper text-xs uppercase tracking-widest font-semibold hover:bg-ink-2 transition-colors"
                >
                  <span>Begin Online Enquiry</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
