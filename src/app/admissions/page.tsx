import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { Sunrise } from "@/components/signature/Sunrise";
import { SplitHeading, Magnetic } from "@/components/motion";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Admissions 2026–27 · Enrollment Guidelines",
  description:
    "Admissions open for Nursery through Standard 12 (Science & Commerce streams) at Sunrays Vidhyalaya, Udhna, Surat.",
};

export default function AdmissionsPage() {
  const admissionsTracks = [
    {
      num: "01",
      title: "Admission Procedure",
      desc: "Our five-stage enrollment pathway, from initial enquiry and campus orientation to document verification.",
      href: "/admissions/procedure",
    },
    {
      num: "02",
      title: "Fee Policy & Payment",
      desc: "Transparent tuition schedules, billing timelines, and the official school ERP online payment portal.",
      href: "/admissions/fees",
    },
    {
      num: "03",
      title: "Withdrawal & TC Policies",
      desc: "Statutory Transfer Certificate issuance norms, documentation guidelines, and withdrawal timelines.",
      href: "/admissions/policy",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Ink Page Hero with Sunrise Signature */}
      <section className="bg-ink text-paper on-ink pt-28 pb-20 relative overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="max-w-xs mx-auto mb-2">
              <Sunrise mode="intro" />
            </div>

            <span className="t-eyebrow text-sun">Academic Year 2026–27</span>

            <SplitHeading as="h1" className="t-display-l text-paper font-normal">
              Admissions now open.
            </SplitHeading>

            <p className="t-lead text-[#cfd4e6] max-w-2xl mx-auto">
              Welcoming young scholars across Nursery, Primary, Secondary (GSEB SSC), and Higher
              Secondary Science & Commerce streams in English and Gujarati mediums.
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6">
              <Magnetic strength={0.25}>
                <Link
                  href="/admissions/enquire"
                  className="px-8 py-3.5 bg-paper text-ink font-sans text-xs uppercase tracking-widest font-semibold hover:bg-paper-2 transition-colors focus:ring-2 focus:ring-sun focus:outline-none"
                >
                  Submit Admission Enquiry
                </Link>
              </Magnetic>

              <a
                href={`tel:${siteConfig.phone.e164}`}
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-paper hover:text-sun transition-colors border-b border-paper/30 pb-1"
              >
                <span>Call Admissions: {siteConfig.phone.display}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 3 Entry Rows */}
      <Section tone="paper" spacing="default">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <span className="t-eyebrow text-sun block">Admissions Directory</span>

            <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {admissionsTracks.map((track) => (
                <div
                  key={track.num}
                  className="py-10 group transition-colors hover:bg-porcelain/60 px-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="flex items-start gap-8">
                      <span className="font-display text-4xl text-sun font-light">
                        {track.num}
                      </span>
                      <div className="space-y-2">
                        <h3 className="t-display-m font-normal text-2xl group-hover:text-sun transition-colors">
                          <Link href={track.href}>{track.title}</Link>
                        </h3>
                        <p className="t-body text-sm text-muted max-w-xl">{track.desc}</p>
                      </div>
                    </div>

                    <div className="pt-2 shrink-0">
                      <Link
                        href={track.href}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink hover:text-sun font-medium border border-[var(--line)] px-5 py-2.5 group-hover:border-sun transition-colors"
                      >
                        <span>View Details</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* TC Updates banner */}
            <div className="p-8 bg-porcelain border border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-12">
              <div>
                <span className="t-eyebrow text-sun block mb-1">Administrative Transparency</span>
                <h4 className="font-display text-xl text-ink font-normal">
                  Recent Transfer Certificates Issued
                </h4>
                <p className="t-meta text-xs">
                  Review verified TC numbers and student advancement notices issued by the school.
                </p>
              </div>

              <Link
                href="/admissions/tc-updates"
                className="px-6 py-2.5 border border-sun text-xs uppercase tracking-widest text-ink hover:bg-sun hover:text-paper font-semibold transition-colors shrink-0"
              >
                Inspect TC Log →
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
