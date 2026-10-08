import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Hairline } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";

export const metadata: Metadata = {
  title: "Higher Secondary Streams · Science & Commerce",
  description:
    "Standard 11 & 12 higher secondary streams at Sunrays Vidhyalaya: Science (Group A/B) and Commerce under the GSEB curriculum.",
};

export default function StreamsPage() {
  const scienceStream = {
    name: "Science Stream (Std 11 & 12)",
    eyebrow: "Engineering & Medical Focus",
    groups: "Group A (Mathematics) · Group B (Biology)",
    subjects: [
      "Physics (Theory & Practical)",
      "Chemistry (Theory & Practical)",
      "Mathematics or Biology",
      "English (First or Second Language)",
      "Computer Science / Sanskrit",
    ],
    labs: ["Physics Laboratory", "Chemistry Laboratory", "Computer Science Laboratory"],
    pathways: [
      "Engineering & Architecture (JEE Main/Advanced, GUJCET)",
      "Medical & Dental Sciences (NEET-UG, Paramedical)",
      "Pure Sciences & Research (B.Sc., Integrated M.Sc.)",
      "Data Science & Information Technology",
    ],
  };

  const commerceStream = {
    name: "Commerce Stream (Std 11 & 12)",
    eyebrow: "Finance, Management & Economics",
    groups: "Professional Accounting & Business Foundations",
    subjects: [
      "Elements of Accountancy",
      "Organization of Commerce and Management",
      "Economics",
      "Statistics",
      "English & Gujarati Medium Language",
      "Computer Studies / Commercial Art",
    ],
    labs: ["Computer Science Laboratory (Tally & Analytical Spreadsheet tools)"],
    pathways: [
      "Chartered Accountancy (CA Foundation) & CS",
      "Corporate Finance & Investment Banking (B.Com, BBA)",
      "Economics & Statistical Analysis",
      "Law & Civil Services Examination Foundations",
    ],
  };

  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Academics", href: "/academics" },
          { label: "Streams", href: "/academics/streams" },
        ]}
        eyebrow="Higher Secondary Schooling"
        title="Disciplined streams for Standard 11 & 12."
        lead="Specialized Science and Commerce curricula engineered for GSEB HSC distinction and national competitive entrance readiness."
      />

      <Section tone="paper" spacing="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Science Stream Card */}
            <SpotlightCard className="flex flex-col justify-between h-full p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <span className="t-eyebrow text-sun block mb-2">{scienceStream.eyebrow}</span>
                  <h2 className="t-display-m font-normal">{scienceStream.name}</h2>
                  <p className="t-meta text-xs uppercase tracking-wider text-muted font-medium mt-1">
                    {scienceStream.groups}
                  </p>
                </div>

                <Hairline />

                <div>
                  <h3 className="font-sans text-xs uppercase tracking-widest text-ink font-semibold mb-3">
                    Prescribed Subjects
                  </h3>
                  <ul className="space-y-2 text-sm text-muted">
                    {scienceStream.subjects.map((sub, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-sun">❖</span>
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-sans text-xs uppercase tracking-widest text-ink font-semibold mb-3">
                    Laboratory Integration
                  </h3>
                  <ul className="space-y-2 text-sm text-muted">
                    {scienceStream.labs.map((lab, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-sun">❖</span>
                        <span>{lab}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-sans text-xs uppercase tracking-widest text-ink font-semibold mb-3">
                    Higher Education Pathways
                  </h3>
                  <ul className="space-y-2 text-sm text-muted">
                    {scienceStream.pathways.map((path, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-sun">❖</span>
                        <span>{path}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-[var(--line)] mt-8">
                <Link
                  href="/admissions/enquire?standard=11&stream=science"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink hover:text-sun font-semibold transition-colors"
                >
                  <span>Enquire for Science Stream</span>
                  <span>→</span>
                </Link>
              </div>
            </SpotlightCard>

            {/* Commerce Stream Card */}
            <SpotlightCard className="flex flex-col justify-between h-full p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <span className="t-eyebrow text-sun block mb-2">{commerceStream.eyebrow}</span>
                  <h2 className="t-display-m font-normal">{commerceStream.name}</h2>
                  <p className="t-meta text-xs uppercase tracking-wider text-muted font-medium mt-1">
                    {commerceStream.groups}
                  </p>
                </div>

                <Hairline />

                <div>
                  <h3 className="font-sans text-xs uppercase tracking-widest text-ink font-semibold mb-3">
                    Prescribed Subjects
                  </h3>
                  <ul className="space-y-2 text-sm text-muted">
                    {commerceStream.subjects.map((sub, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-sun">❖</span>
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-sans text-xs uppercase tracking-widest text-ink font-semibold mb-3">
                    Practical Integration
                  </h3>
                  <ul className="space-y-2 text-sm text-muted">
                    {commerceStream.labs.map((lab, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-sun">❖</span>
                        <span>{lab}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-sans text-xs uppercase tracking-widest text-ink font-semibold mb-3">
                    Higher Education Pathways
                  </h3>
                  <ul className="space-y-2 text-sm text-muted">
                    {commerceStream.pathways.map((path, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-sun">❖</span>
                        <span>{path}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-[var(--line)] mt-8">
                <Link
                  href="/admissions/enquire?standard=11&stream=commerce"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink hover:text-sun font-semibold transition-colors"
                >
                  <span>Enquire for Commerce Stream</span>
                  <span>→</span>
                </Link>
              </div>
            </SpotlightCard>
          </div>
        </Container>
      </Section>
    </div>
  );
}
