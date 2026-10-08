import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container, Section } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";
import { CircularGallery } from "@/components/reactbits/CircularGallery";
import { galleryPhotos } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Life at Sunrays · Student Culture & Activities",
  description:
    "Student life, athletics, creative expression, and co-curricular pursuits at Sunrays Vidhyalaya, Udhna, Surat.",
};

export default function LifePage() {
  const carouselItems = galleryPhotos.map((p) => ({
    src: p.src,
    title: p.title,
    caption: p.caption,
  }));

  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Life at Sunrays", href: "/life" },
        ]}
        eyebrow="Campus Life"
        title="Character, expression & vitality."
        lead="Beyond academic rigor, school is where habits of honor, sportsmanship, and artistic curiosity take root for a lifetime."
      />

      {/* Immersive 3D Circular Gallery Moment */}
      <section className="py-12 bg-paper border-b border-[var(--line)]">
        <Container>
          <div className="text-center mb-8">
            <span className="t-eyebrow text-sun block mb-2">Campus Mosaic</span>
            <h2 className="t-display-m font-normal">A Panorama of Student Days</h2>
          </div>
          <CircularGallery items={carouselItems} />
        </Container>
      </section>

      {/* Two Large Entry Tiles: Sports and Culture */}
      <Section tone="paper" spacing="default">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Tile 1: Sports & Athletics */}
            <div className="group border border-[var(--line)] bg-porcelain p-8 md:p-12 space-y-6 flex flex-col justify-between hover:border-sun transition-colors">
              <div className="space-y-4">
                <div className="relative aspect-[16/10] overflow-hidden bg-paper border border-[var(--line)]">
                  <Image
                    src="/legacy/gallery/05.jpg"
                    alt="Sports and athletics at Sunrays Vidhyalaya"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <span className="t-eyebrow text-sun block pt-2">Physical Discipline</span>
                <h3 className="t-display-m font-normal">Sports & Athletics</h3>
                <p className="t-body text-muted text-sm leading-relaxed">
                  Daily physical education, inter-house athletics, cricket, badminton, and team
                  competitions building stamina, resilience, and gracious sportsmanship.
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--line)]">
                <Link
                  href="/life/sports"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink group-hover:text-sun font-semibold transition-colors"
                >
                  <span>Explore Sports Programme</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Tile 2: Culture & Arts */}
            <div className="group border border-[var(--line)] bg-porcelain p-8 md:p-12 space-y-6 flex flex-col justify-between hover:border-sun transition-colors">
              <div className="space-y-4">
                <div className="relative aspect-[16/10] overflow-hidden bg-paper border border-[var(--line)]">
                  <Image
                    src="/legacy/gallery/04.jpg"
                    alt="Cultural arts and drama at Sunrays Vidhyalaya"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <span className="t-eyebrow text-sun block pt-2">Aesthetic & Moral Expression</span>
                <h3 className="t-display-m font-normal">Culture & Arts</h3>
                <p className="t-body text-muted text-sm leading-relaxed">
                  Annual gatherings, debate societies, Saraswati Vandana recitals, classical dance,
                  theatrical drama, and regional Gujarati heritage celebrations.
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--line)]">
                <Link
                  href="/life/culture"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink group-hover:text-sun font-semibold transition-colors"
                >
                  <span>Explore Cultural Life</span>
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
