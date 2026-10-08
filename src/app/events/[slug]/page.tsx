import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Section, Hairline } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";
import { schoolEvents } from "@/content/events";

export function generateStaticParams() {
  return schoolEvents.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = schoolEvents.find((e) => e.slug === slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: `${event.title} · Events`,
    description: event.summary,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = schoolEvents.find((e) => e.slug === slug);
  if (!event) notFound();

  // Create .ics calendar data uri
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Sunrays Vidhyalaya//Event Calendar//EN
BEGIN:VEVENT
SUMMARY:${event.title}
DESCRIPTION:${event.summary}
LOCATION:${event.location}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

  const icsDataUri = `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`;

  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: event.title, href: `/events/${event.slug}` },
        ]}
        eyebrow={`${event.category} Event · ${event.displayDate.day} ${event.displayDate.month} ${event.displayDate.year}`}
        title={event.title}
        lead={event.summary}
        image={event.image ?? "/legacy/event/01.jpg"}
        imageAlt={event.title}
      />

      <Section tone="paper" spacing="default">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Event Meta Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 bg-porcelain border border-[var(--line)]">
              <div>
                <span className="t-meta text-xs uppercase block mb-1">Date</span>
                <span className="font-sans font-semibold text-ink">
                  {event.displayDate.day} {event.displayDate.month} {event.displayDate.year}
                </span>
              </div>
              <div>
                <span className="t-meta text-xs uppercase block mb-1">Timing</span>
                <span className="font-sans font-semibold text-ink">{event.time}</span>
              </div>
              <div>
                <span className="t-meta text-xs uppercase block mb-1">Location</span>
                <span className="font-sans font-semibold text-ink">{event.location}</span>
              </div>
            </div>

            {/* Narrative Description */}
            <div className="space-y-6 text-lg t-body text-ink leading-relaxed">
              <h2 className="t-display-m font-normal">About this Event</h2>
              <p className="text-muted">{event.description}</p>
            </div>

            <Hairline />

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-6">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink hover:text-sun font-medium"
              >
                <span>← Back to All Events</span>
              </Link>

              <a
                href={icsDataUri}
                download={`${event.slug}.ics`}
                className="px-6 py-3 bg-ink text-paper text-xs uppercase tracking-widest font-semibold hover:bg-ink-2 transition-colors flex items-center gap-2"
              >
                <span>📅 Add to Calendar (.ics)</span>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
