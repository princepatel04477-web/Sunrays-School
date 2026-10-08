import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Hairline } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Career Counselling · Guidance & Higher Studies",
  description:
    "Structured career guidance, stream selection counseling, and university entrance advisory at Sunrays Vidhyalaya, Surat.",
};

export default function CareerCounsellingPage() {
  const counsellingPillars = [
    {
      num: "01",
      title: "Stream Selection Guidance (Std 10 → 11)",
      desc: "Personalized discussions helping students align aptitude with Science (Group A/B) or Commerce streams, avoiding peer pressure and mismatch.",
    },
    {
      num: "02",
      title: "Competitive Exam Advisory (JEE, NEET, GUJCET)",
      desc: "Roadmaps and time management strategies for cracking national and state competitive entrance examinations while maintaining board distinction.",
    },
    {
      num: "03",
      title: "Commerce & Professional Careers (CA, CS, BBA)",
      desc: "Comprehensive orientation on professional accounting bodies, business economics, corporate law, and finance undergraduate programs.",
    },
    {
      num: "04",
      title: "Parent-Student Joint Counseling",
      desc: "Structured consultative sessions where teachers, counselors, and parents collaborate on long-term educational roadmaps.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Academics", href: "/academics" },
          { label: "Career Counselling", href: "/academics/career-counselling" },
        ]}
        eyebrow="Guidance & Advisory"
        title="Clarity for life beyond the classroom."
        lead="Guiding senior school students through stream selection, university entrance preparation, and purposeful vocation."
      />

      <Section tone="paper" spacing="default">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4">
              <span className="t-eyebrow text-sun">Our Philosophy</span>
              <h2 className="t-display-m font-normal">Individual Purpose & Structured Direction</h2>
              <p className="t-body text-muted leading-relaxed">
                Choosing a career trajectory in secondary and higher secondary years is one of the
                most critical junctures in a young person&apos;s development. At Sunrays Vidhyalaya,
                counseling is not a hurried exit seminar; it is a year-round mentorship program led
                by experienced faculty and visiting academic advisors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {counsellingPillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="p-8 bg-porcelain border border-[var(--line)] space-y-3"
                >
                  <span className="font-display text-3xl text-sun font-light">
                    {pillar.num}
                  </span>
                  <h3 className="font-sans text-base font-semibold text-ink">
                    {pillar.title}
                  </h3>
                  <p className="t-body text-sm text-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            <Hairline />

            {/* Soft CTA */}
            <div className="p-8 md:p-12 bg-porcelain border border-[var(--line)] text-center space-y-4">
              <span className="t-eyebrow text-sun">Counseling Request</span>
              <h3 className="t-display-m font-normal">Request a Career Guidance Session</h3>
              <p className="t-body text-muted max-w-xl mx-auto">
                Whether you are currently enrolled or evaluating admission into Standards 9 through
                12, our academic counseling desk is available to assist you.
              </p>
              <div className="pt-4">
                <Link
                  href="/admissions/enquire?topic=career-counselling"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-ink text-paper text-xs uppercase tracking-widest font-semibold hover:bg-ink-2 transition-colors"
                >
                  <span>Schedule a Guidance Discussion</span>
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
