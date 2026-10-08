import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Section, Hairline } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";
import { trusteeMessage } from "@/content/messages";

export const metadata: Metadata = {
  title: "Trustee's Message · Jaysukh Kathiriya",
  description:
    "Read the address from Jaysukh Kathiriya, Trustee of Leo Institute of Education Trust, to parents and well-wishers of Sunrays Vidhyalaya.",
};

export default function TrusteePage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Trustee's Message", href: "/about/trustee" },
        ]}
        eyebrow="Leadership Message"
        title="To parents and well-wishers."
        lead="A message of gratitude and responsibility from Jaysukh Kathiriya, Trustee."
      />

      <Section tone="paper" spacing="tight">
        <Container>
          <div className="max-w-[62ch] mx-auto space-y-10 py-6">
            {/* Portrait Mat */}
            <div className="p-4 bg-porcelain border border-[var(--line)] shadow-sm max-w-sm mx-auto">
              <div className="relative aspect-[4/3] overflow-hidden bg-paper border border-[var(--line)]">
                <Image
                  src={trusteeMessage.image ?? "/legacy/about/01.jpg"}
                  alt={trusteeMessage.author}
                  fill
                  sizes="360px"
                  className="object-cover"
                />
              </div>
              <div className="pt-3 text-center">
                <h3 className="font-display text-xl text-ink font-normal">
                  {trusteeMessage.author}
                </h3>
                <p className="t-meta text-xs text-sun-text">
                  {trusteeMessage.role}, {trusteeMessage.organization}
                </p>
              </div>
            </div>

            {/* Letter Body with Drop Cap */}
            <div className="space-y-6 text-ink t-body leading-relaxed text-lg font-sans">
              <p className="first-letter:font-display first-letter:text-6xl first-letter:text-sun first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                {trusteeMessage.fullMessage[0]}
              </p>

              {trusteeMessage.fullMessage.slice(1).map((paragraph, idx) => (
                <p key={idx} className="text-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <Hairline />

            {/* Sign-off */}
            <div className="pt-4 space-y-1">
              <p className="font-display text-2xl text-ink italic font-normal">
                {trusteeMessage.author}
              </p>
              <p className="t-meta text-xs text-muted uppercase tracking-wider">
                {trusteeMessage.role} · {trusteeMessage.organization}
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink hover:text-sun font-medium transition-colors"
              >
                <span>← Return to School Overview</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
