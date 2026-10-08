import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";
import { HairlineDraw, Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Awards & Achievements · Academic Distinction",
  description:
    "Record of academic merit, GSEB board distinctions, and co-curricular achievements earned by the students of Sunrays Vidhyalaya.",
};

interface AwardRecord {
  year: string;
  title: string;
  subtitle: string;
  note: string;
  image?: string;
  verified: boolean;
}

const awardsTimeline: AwardRecord[] = [
  {
    year: "2024",
    title: "GSEB SSC Board Merit & A1 Distinctions",
    subtitle: "Secondary School Certificate State Examinations",
    note: "Historic board examination performance with 41 students securing top A1 distinction grades across Surat district centers.",
    image: "/legacy/about/01.jpg",
    verified: true,
  },
  {
    year: "2023",
    title: "Regional Science Model Competition",
    subtitle: "District Level Exhibition",
    note: "Senior secondary science candidates recognized for innovative practical physics and computing demonstrations.",
    verified: false,
  },
  {
    year: "2022",
    title: "Inter-School Athletic Championship",
    subtitle: "Surat District Sports Meet",
    note: "Merit trophies secured in track relays and badminton single championships.",
    verified: false,
  },
  {
    year: "2020",
    title: "Decade Milestone & Institutional Excellence",
    subtitle: "Leo Institute of Education Trust",
    note: "Commemorating 10 continuous years of dedicated service to education and student development in Udhna.",
    verified: true,
  },
];

export default function AwardsPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Awards & Achievements", href: "/about/awards" },
        ]}
        eyebrow="Merit & Distinction"
        title="A chronicle of achievement."
        lead="Celebrating scholastic discipline, board performance, and character distinction across our history."
      />

      <Section tone="paper" spacing="default">
        <Container>
          <div className="max-w-4xl mx-auto relative pl-6 md:pl-12 border-l border-[var(--line)] space-y-16 py-6">
            {awardsTimeline.map((award, idx) => (
              <Reveal key={idx} y={24} className="relative space-y-4">
                {/* Year Marker on Spine */}
                <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-3 h-3 rounded-full bg-paper border-2 border-sun" />

                <div className="flex items-baseline gap-4">
                  <span className="font-display text-4xl md:text-5xl text-sun font-light">
                    {award.year}
                  </span>
                  <span className="t-eyebrow text-muted text-[10px]">
                    {award.verified ? "Verified Record" : "Awaiting Archive Verification"}
                  </span>
                </div>

                <div className="p-6 md:p-8 bg-porcelain border border-[var(--line)] shadow-sm space-y-4">
                  <div>
                    <h3 className="t-display-m font-normal mb-1">{award.title}</h3>
                    <p className="t-meta text-xs uppercase tracking-wider text-sun-text font-medium">
                      {award.subtitle}
                    </p>
                  </div>

                  <p className="t-body text-muted">{award.note}</p>

                  {award.image && (
                    <div className="relative aspect-[21/9] overflow-hidden border border-[var(--line)] mt-4">
                      <Image
                        src={award.image}
                        alt={award.title}
                        fill
                        sizes="700px"
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                <HairlineDraw delay={0.2} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
