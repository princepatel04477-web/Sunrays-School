import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SplitHeading, ImageCurtain } from "@/components/motion";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeroProps {
  breadcrumbs?: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  lead?: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  aspectRatio?: string;
  className?: string;
}

export function PageHero({
  breadcrumbs = [{ label: "Home", href: "/" }],
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  imageCaption,
  aspectRatio = "aspect-[21/9]",
  className,
}: PageHeroProps) {
  // Schema.org BreadcrumbList JSON-LD
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `https://sunraysschool.in${crumb.href}`,
    })),
  };

  return (
    <section className={cn("pt-12 md:pt-16 pb-12 bg-paper text-ink", className)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Container>
        {/* Breadcrumb line */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.2em] text-muted">
            {breadcrumbs.map((crumb, idx) => (
              <li key={crumb.href} className="flex items-center gap-2">
                {idx > 0 && <span className="text-sun/60">/</span>}
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-ink font-medium" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="hover:text-sun transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Header Block */}
        <div className="max-w-4xl space-y-4 mb-10">
          <span className="t-eyebrow text-sun block">{eyebrow}</span>
          <SplitHeading as="h1" className="t-display-l font-normal">
            {title}
          </SplitHeading>
          {lead && <p className="t-lead text-muted text-lg md:text-xl">{lead}</p>}
        </div>

        {/* Editorial Hero Image */}
        {image && (
          <div className="space-y-2 mt-8">
            <ImageCurtain
              src={image}
              alt={imageAlt ?? title}
              aspectRatio={aspectRatio}
              priority
            />
            {imageCaption && (
              <p className="t-meta text-xs text-muted pt-1">{imageCaption}</p>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
