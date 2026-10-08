import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Section, Hairline } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "The School · Heritage & Philosophy",
  description:
    "Discover the history, educational philosophy, and campus of Sunrays Vidhyalaya in Udhna, Surat, run by Leo Institute of Education Trust.",
};

export default function AboutPage() {
  const chapters = [
    { id: "chapter-1", num: "I", title: "Our Beginnings" },
    { id: "chapter-2", num: "II", title: "What We Believe" },
    { id: "chapter-3", num: "III", title: "The Campus" },
    { id: "chapter-4", num: "IV", title: "Mediums & Board" },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
        eyebrow="Institution & Heritage"
        title="A decade of thoughtful education."
        lead="Founded by Leo Institute of Education Trust to provide grounded, rigorous schooling to the families of Udhna and Surat."
        image="/legacy/about/01.jpg"
        imageAlt="Sunrays Vidhyalaya School Campus"
        imageCaption="The primary and secondary academic block at Udhna–Navsari Road, Surat."
      />

      <Section tone="paper" spacing="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Sticky Table of Contents (Desktop) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-36 space-y-6">
              <span className="t-eyebrow text-sun">Contents</span>
              <nav className="space-y-3 text-sm">
                {chapters.map((ch) => (
                  <a
                    key={ch.id}
                    href={`#${ch.id}`}
                    className="flex items-center gap-3 py-1.5 text-muted hover:text-ink transition-colors group"
                  >
                    <span className="font-mono text-xs text-sun group-hover:translate-x-1 transition-transform">
                      {ch.num}
                    </span>
                    <span className="font-sans font-medium text-ink">{ch.title}</span>
                  </a>
                ))}
              </nav>

              <div className="pt-8 border-t border-[var(--line)] space-y-3">
                <span className="t-eyebrow text-sun">Leadership</span>
                <div className="space-y-2 text-sm">
                  <Link
                    href="/about/trustee"
                    className="block text-ink hover:text-sun transition-colors"
                  >
                    Trustee&apos;s Message →
                  </Link>
                  <Link
                    href="/about/headmaster"
                    className="block text-ink hover:text-sun transition-colors"
                  >
                    Principal&apos;s Message →
                  </Link>
                  <Link
                    href="/about/faculty"
                    className="block text-ink hover:text-sun transition-colors"
                  >
                    Our Teaching Faculty →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Chapters Narrative (Cols 5-12) */}
            <div className="lg:col-span-8 space-y-20">
              {/* Chapter I: Our Beginnings */}
              <article id="chapter-1" className="scroll-mt-36 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-sun font-semibold">I</span>
                  <span className="t-eyebrow">Origins & Trust</span>
                </div>
                <h2 className="t-display-m font-normal">Our Beginnings</h2>
                <div className="space-y-4 t-body text-muted leading-relaxed">
                  <p>
                    Sunrays Vidhyalaya was established under the stewardship of{" "}
                    <strong className="text-ink font-semibold">
                      Leo Institute of Education Trust
                    </strong>{" "}
                    with a clear calling: to provide Surat with a center of learning where academic
                    achievement and personal character are cultivated side by side.
                  </p>
                  <p>
                    Over a decade of dedicated service, our campus on Udhna–Navsari Road has grown
                    from foundational classrooms into a comprehensive institution supporting students
                    from Nursery through Standard 12 in both Science and Commerce disciplines.
                  </p>
                </div>
              </article>

              <Hairline />

              {/* Chapter II: What We Believe */}
              <article id="chapter-2" className="scroll-mt-36 space-y-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-sun font-semibold">II</span>
                  <span className="t-eyebrow">Guiding Creed</span>
                </div>
                <h2 className="t-display-m font-normal">What We Believe</h2>

                <div className="border-l-2 border-sun pl-6 py-2 my-6">
                  <p className="font-deva text-2xl md:text-3xl text-ink mb-1">
                    {siteConfig.motto.deva}
                  </p>
                  <p className="t-meta text-xs uppercase tracking-widest text-sun font-medium">
                    &ldquo;{siteConfig.motto.en}&rdquo;
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="font-display text-3xl text-sun font-light pt-1">01</span>
                    <div>
                      <h3 className="font-sans text-base font-semibold text-ink mb-1">
                        Discipline Without Fear
                      </h3>
                      <p className="t-body text-sm text-muted">
                        We encourage intellectual rigor through respectful, attentive mentorship
                        rather than pressure, teaching children to govern themselves with honor.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="font-display text-3xl text-sun font-light pt-1">02</span>
                    <div>
                      <h3 className="font-sans text-base font-semibold text-ink mb-1">
                        Bilingual Literacy & Depth
                      </h3>
                      <p className="t-body text-sm text-muted">
                        True intellectual liberation requires mastery of language. We give equal
                        dignity and focus to English expression and regional Gujarati literary
                        heritage.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="font-display text-3xl text-sun font-light pt-1">03</span>
                    <div>
                      <h3 className="font-sans text-base font-semibold text-ink mb-1">
                        Empirical Enquiry Over Rote
                      </h3>
                      <p className="t-body text-sm text-muted">
                        Science and mathematics are learned through observation and guided
                        experimentation in our laboratories, building lasting intuition.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <Hairline />

              {/* Chapter III: The Campus */}
              <article id="chapter-3" className="scroll-mt-36 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-sun font-semibold">III</span>
                  <span className="t-eyebrow">Physical Space</span>
                </div>
                <h2 className="t-display-m font-normal">The Campus</h2>
                <p className="t-body text-muted leading-relaxed">
                  Situated conveniently opposite Dakheshwar BRTS on the Udhna–Navsari corridor, our
                  campus offers well-ventilated classrooms, specialized laboratory halls for Physics,
                  Chemistry, and Computer Science, an assembly quadrangle, and dedicated activity
                  spaces designed for quiet concentration.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="relative aspect-[4/3] bg-porcelain border border-[var(--line)]">
                    <Image
                      src="/legacy/about/02.jpg"
                      alt="Classrooms at Sunrays"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] bg-porcelain border border-[var(--line)]">
                    <Image
                      src="/legacy/about/03.jpg"
                      alt="Campus gathering area"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </article>

              <Hairline />

              {/* Chapter IV: Mediums & Board */}
              <article id="chapter-4" className="scroll-mt-36 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-sun font-semibold">IV</span>
                  <span className="t-eyebrow">Affiliation & Pedagogy</span>
                </div>
                <h2 className="t-display-m font-normal">Mediums & Board</h2>
                <div className="space-y-4 t-body text-muted leading-relaxed">
                  <p>
                    Sunrays Vidhyalaya follows the recognized state framework prescribed by the{" "}
                    <strong className="text-ink font-semibold">
                      Gujarat Secondary and Higher Secondary Education Board (GSEB)
                    </strong>
                    . Both English Medium and Gujarati Medium divisions operate under rigorous
                    supervision.
                  </p>
                  <p>
                    For senior secondary students (Std 11 & 12), we provide structured curriculum
                    pathways in both Science (Group A Mathematics, Group B Biology) and Commerce,
                    preparing candidates for university entrance as well as professional careers.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
