import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Hairline } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";
import { ImageCurtain, Reveal } from "@/components/motion";
import { laboratories } from "@/content/labs";

export const metadata: Metadata = {
  title: "Laboratories · Physics, Chemistry & Computing",
  description:
    "Scientific and computing laboratories at Sunrays Vidhyalaya: practical apparatus, safety systems, and guided syllabus experimentation.",
};

export default function LabsPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Academics", href: "/academics" },
          { label: "Laboratories", href: "/academics/labs" },
        ]}
        eyebrow="Scientific Facilities"
        title="Laboratories for empirical enquiry."
        lead="Dedicated facilities engineered for precision measurement, chemical observation, and computational mastery under expert faculty supervision."
      />

      <Section tone="paper" spacing="default">
        <Container>
          <div className="space-y-28 max-w-5xl mx-auto">
            {laboratories.map((lab, idx) => (
              <article key={lab.id} className="space-y-8">
                <Reveal y={20}>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-mono text-sm text-sun font-semibold">
                      0{idx + 1}
                    </span>
                    <span className="t-eyebrow text-sun">{lab.eyebrow}</span>
                  </div>
                  <h2 className="t-display-l font-normal">{lab.name}</h2>
                </Reveal>

                {/* Full-bleed style ImageCurtain */}
                <ImageCurtain
                  src={lab.image}
                  alt={lab.name}
                  aspectRatio="aspect-[21/10]"
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-4">
                  <div className="md:col-span-7">
                    <h3 className="t-eyebrow text-sun mb-3">Facility Philosophy</h3>
                    <p className="t-body text-muted text-lg leading-relaxed">
                      {lab.summary}
                    </p>
                  </div>

                  <div className="md:col-span-5 p-6 bg-porcelain border border-[var(--line)]">
                    <h3 className="font-sans text-xs uppercase tracking-widest text-ink font-semibold mb-4">
                      Equipment & Safety Features
                    </h3>
                    <ul className="space-y-2.5 text-sm text-muted">
                      {lab.equipment.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5">
                          <span className="text-sun pt-0.5">❖</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Hairline className="mt-16" />
              </article>
            ))}

            {/* Bottom soft CTA */}
            <div className="text-center space-y-4 pt-8">
              <h3 className="t-display-m font-normal">Schedule an On-Campus Laboratory Tour</h3>
              <p className="t-body text-muted max-w-xl mx-auto">
                Prospective parents and students are welcome to inspect our laboratory facilities
                during a guided campus visit.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-ink text-paper text-xs uppercase tracking-widest font-semibold hover:bg-ink-2 transition-colors"
                >
                  <span>Book a Campus Visit</span>
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
