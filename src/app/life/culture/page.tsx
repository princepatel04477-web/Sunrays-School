import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section, Hairline } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Culture & Arts · Expression & Heritage",
  description:
    "Cultural celebrations, classical dance, Sanskrit recitation, drama, and fine arts at Sunrays Vidhyalaya, Surat.",
};

export default function CulturePage() {
  const culturalEvents = [
    { name: "Saraswati Vandana & Navratri", desc: "Devotional gatherings, garba traditions, and Sanskrit hymn recitations honoring knowledge." },
    { name: "Annual Day Cultural Showcase", desc: "Theatrical plays, classical music ensembles, and regional dance recitals." },
    { name: "Elocution, Debate & Quiz Societies", desc: "Developing persuasive public speech and critical thinking in English, Hindi, and Gujarati." },
    { name: "Fine Arts & Handicraft Exhibits", desc: "Drawing, painting, calligraphic work, and clay modeling exhibitions." },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Life at Sunrays", href: "/life" },
          { label: "Culture", href: "/life/culture" },
        ]}
        eyebrow="Aesthetic Heritage"
        title="Culture, arts & expression."
        lead="Connecting modern scholarship with enduring cultural roots, literary eloquence, and artistic confidence."
        image="/legacy/gallery/04.jpg"
        imageAlt="Cultural performance at Sunrays Vidhyalaya"
        imageCaption="Students performing classical Indian dance during annual cultural celebrations."
      />

      <Section tone="paper" spacing="default">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4">
              <span className="t-eyebrow text-sun">Rooted in Tradition</span>
              <h2 className="t-display-m font-normal">Expressive Confidence & Cultural Pride</h2>
              <p className="t-body text-muted leading-relaxed">
                Culture is the heartbeat of Sunrays Vidhyalaya. We provide young learners with
                uninhibited platforms to recite, act, sing, paint, and articulate their thoughts.
                Honoring our motto सा विद्या या विमुक्तये, cultural pursuits teach students that
                aesthetic sensitivity and moral empathy are essential companions to intellectual mastery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {culturalEvents.map((item, idx) => (
                <div key={idx} className="p-6 bg-porcelain border border-[var(--line)] space-y-2">
                  <span className="font-mono text-xs text-sun font-semibold">0{idx + 1}</span>
                  <h3 className="font-sans text-base font-semibold text-ink">{item.name}</h3>
                  <p className="t-meta text-xs text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <Hairline />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/3] border border-[var(--line)] overflow-hidden bg-porcelain">
                <Image
                  src="/legacy/gallery/06.jpg"
                  alt="Annual celebration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <span className="t-eyebrow text-sun">Annual Tradition</span>
                <h3 className="t-display-m font-normal">The Annual Gathering</h3>
                <p className="t-body text-sm text-muted leading-relaxed">
                  The crowning event of our academic year brings together parents, trustees, alumni,
                  and educators. Meritorious scholars are awarded medals, while dramatic productions
                  and musical harmonies celebrate our collective heritage.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
