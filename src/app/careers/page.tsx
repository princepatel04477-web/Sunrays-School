import type { Metadata } from "next";
import { Container, Section, Hairline } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers & Faculty Openings · Join Our Faculty",
  description:
    "Teaching opportunities, academic vacancies, and faculty culture at Sunrays Vidhyalaya, Udhna, Surat.",
};

export default function CareersPage() {
  const openPositions: Array<{
    title: string;
    department: string;
    qualifications: string;
    medium: string;
  }> = [];

  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
        ]}
        eyebrow="Faculty & Staff Opportunities"
        title="Teach at Sunrays Vidhyalaya."
        lead="Join a collegial community of dedicated educators who treat teaching as a noble calling, supported by calm discipline and small classroom sizes."
      />

      <Section tone="paper" spacing="default">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Why Teach Here (3 Short Paragraphs) */}
            <div className="space-y-8">
              <span className="t-eyebrow text-sun">Our Faculty Culture</span>
              <h2 className="t-display-m font-normal">Why Educators Flourish at Sunrays</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-porcelain border border-[var(--line)] space-y-2">
                  <span className="font-display text-3xl text-sun font-light">01</span>
                  <h3 className="font-sans text-base font-semibold text-ink">
                    Respect for Academic Autonomy
                  </h3>
                  <p className="t-body text-sm text-muted">
                    We trust our teachers. Instructors have the latitude to design engaging
                    classroom demonstrations, practical experiments, and individual remediation.
                  </p>
                </div>

                <div className="p-6 bg-porcelain border border-[var(--line)] space-y-2">
                  <span className="font-display text-3xl text-sun font-light">02</span>
                  <h3 className="font-sans text-base font-semibold text-ink">
                    Small, Focused Classes
                  </h3>
                  <p className="t-body text-sm text-muted">
                    Manageable pupil-to-teacher ratios ensure that educators can know every student
                    by name, track formative development, and build enduring mentorship.
                  </p>
                </div>

                <div className="p-6 bg-porcelain border border-[var(--line)] space-y-2">
                  <span className="font-display text-3xl text-sun font-light">03</span>
                  <h3 className="font-sans text-base font-semibold text-ink">
                    Balanced Institutional Stewardship
                  </h3>
                  <p className="t-body text-sm text-muted">
                    Under Leo Institute of Education Trust, administrative expectations are clear,
                    respectful, and consistent, fostering a harmonious professional sanctuary.
                  </p>
                </div>
              </div>
            </div>

            <Hairline />

            {/* Current Openings */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                <div>
                  <span className="t-eyebrow text-sun block mb-1">Opportunities</span>
                  <h3 className="t-display-m font-normal">Current Vacancies</h3>
                </div>
                <span className="t-meta text-xs">Updated for 2026–27 session</span>
              </div>

              {openPositions.length > 0 ? (
                <div className="space-y-4">
                  {openPositions.map((pos, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-porcelain border border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div>
                        <span className="t-eyebrow text-sun text-[10px]">{pos.department}</span>
                        <h4 className="font-display text-xl text-ink font-normal">{pos.title}</h4>
                        <p className="t-meta text-xs">
                          {pos.qualifications} · {pos.medium}
                        </p>
                      </div>
                      <a
                        href={`mailto:${siteConfig.email}?subject=Application for ${encodeURIComponent(pos.title)}`}
                        className="px-6 py-2 border border-sun text-xs uppercase tracking-widest text-ink hover:bg-sun hover:text-paper font-semibold transition-colors"
                      >
                        Apply via Email →
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                /* Empty state */
                <div className="p-8 md:p-12 bg-porcelain border border-[var(--line)] text-center space-y-4">
                  <span className="font-display text-3xl text-sun font-light block">❖</span>
                  <h4 className="font-display text-2xl font-normal text-ink">
                    No active vacancies at this moment
                  </h4>
                  <p className="t-body text-sm text-muted max-w-lg mx-auto">
                    We are always keen to review credentials from passionate educators in Mathematics,
                    Sciences, Languages, and Early Childhood Education. Send your curriculum vitae
                    directly to our administrative desk.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`mailto:${siteConfig.email}?subject=Prospective Faculty CV Submission`}
                      className="inline-flex items-center gap-2 px-8 py-3 bg-ink text-paper text-xs uppercase tracking-widest font-semibold hover:bg-ink-2 transition-colors"
                    >
                      <span>Send CV to {siteConfig.email}</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
