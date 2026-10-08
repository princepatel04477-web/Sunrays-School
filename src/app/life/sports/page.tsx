import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section, Hairline } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Sports & Athletics · Physical Education",
  description:
    "Athletics, team sports, outdoor games, and physical fitness programs at Sunrays Vidhyalaya, Udhna, Surat.",
};

export default function SportsPage() {
  const sportsOfferings = [
    { name: "Track & Field Athletics", note: "100m/200m sprints, relays, long jump and fitness conditioning." },
    { name: "Cricket Coaching", note: "Net sessions, batting fundamentals, bowling discipline and inter-house matches." },
    { name: "Badminton & Indoor Games", note: "Precision court play, table tennis, and strategic chess clubs." },
    { name: "Volleyball & Team Games", note: "Coordination, tactical team communication, and house tournaments." },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Life at Sunrays", href: "/life" },
          { label: "Sports", href: "/life/sports" },
        ]}
        eyebrow="Physical Discipline"
        title="Sports, grit & athletics."
        lead="Cultivating health, team loyalty, and stamina on the school grounds."
        image="/legacy/gallery/05.jpg"
        imageAlt="Athletics meet at Sunrays Vidhyalaya"
        imageCaption="Students participating in track and field competitions during the Annual Sports Meet."
      />

      <Section tone="paper" spacing="default">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4">
              <span className="t-eyebrow text-sun">Our Philosophy</span>
              <h2 className="t-display-m font-normal">Physical Wellbeing as a Foundation</h2>
              <p className="t-body text-muted leading-relaxed">
                A sharp mind requires a resilient body. At Sunrays Vidhyalaya, physical education is
                an integral part of every child&apos;s daily routine. We emphasize sportsmanship—learning
                to win with humility and accept defeat with honor—over pure winning at all costs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {sportsOfferings.map((sport, idx) => (
                <div key={idx} className="p-6 bg-porcelain border border-[var(--line)] space-y-2">
                  <span className="font-mono text-xs text-sun font-semibold">0{idx + 1}</span>
                  <h3 className="font-sans text-base font-semibold text-ink">{sport.name}</h3>
                  <p className="t-meta text-xs text-muted">{sport.note}</p>
                </div>
              ))}
            </div>

            <Hairline />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/3] border border-[var(--line)] overflow-hidden bg-porcelain">
                <Image
                  src="/legacy/about/03.jpg"
                  alt="Sports assembly grounds"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <span className="t-eyebrow text-sun">House System</span>
                <h3 className="t-display-m font-normal">Inter-House Championship</h3>
                <p className="t-body text-sm text-muted leading-relaxed">
                  Every pupil is placed into a school house upon enrollment. Throughout the year,
                  houses compete in track relays, football tournaments, chess matches, and sports
                  quizzes, culminating in the Annual Sports Trophy presentation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
