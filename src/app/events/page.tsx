"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Container, Section } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";
import { schoolEvents } from "@/content/events";
import { cn } from "@/lib/utils";

export default function EventsIndexPage() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");

  const filtered = schoolEvents.filter((e) =>
    tab === "upcoming" ? e.isUpcoming : !e.isUpcoming
  );

  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
        ]}
        eyebrow="Campus Calendar"
        title="Events, gatherings & fixtures."
        lead="Annual dates, scientific exhibitions, sports tournaments, and scholastic evaluations at Sunrays Vidhyalaya."
      />

      <Section tone="paper" spacing="default">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Tabs with Motion layoutId underline */}
            <div className="flex items-center gap-8 border-b border-[var(--line)] pb-4">
              <button
                onClick={() => setTab("upcoming")}
                className={cn(
                  "relative py-2 text-xs uppercase tracking-widest font-sans font-medium transition-colors",
                  tab === "upcoming" ? "text-ink" : "text-muted hover:text-ink"
                )}
              >
                <span>Upcoming Events</span>
                {tab === "upcoming" && (
                  <motion.div
                    layoutId="activeEventTab"
                    className="absolute -bottom-4 left-0 right-0 h-0.5 bg-sun"
                  />
                )}
              </button>

              <button
                onClick={() => setTab("past")}
                className={cn(
                  "relative py-2 text-xs uppercase tracking-widest font-sans font-medium transition-colors",
                  tab === "past" ? "text-ink" : "text-muted hover:text-ink"
                )}
              >
                <span>Past Events & Archives</span>
                {tab === "past" && (
                  <motion.div
                    layoutId="activeEventTab"
                    className="absolute -bottom-4 left-0 right-0 h-0.5 bg-sun"
                  />
                )}
              </button>
            </div>

            {/* Event rows */}
            <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {filtered.map((event) => (
                <div
                  key={event.slug}
                  className="py-8 group transition-colors hover:bg-porcelain/60 px-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                    <div className="flex items-start gap-8">
                      {/* Date Block in Display Serif */}
                      <div className="border border-[var(--line)] bg-porcelain p-3 text-center min-w-[76px] shrink-0">
                        <span className="font-display text-3xl font-light text-ink block leading-none">
                          {event.displayDate.day}
                        </span>
                        <span className="t-eyebrow text-sun text-[10px] block mt-1">
                          {event.displayDate.month}
                        </span>
                        <span className="font-mono text-[9px] text-muted block">
                          {event.displayDate.year}
                        </span>
                      </div>

                      {/* Event Details */}
                      <div className="space-y-1.5">
                        <span className="t-eyebrow text-sun text-[10px]">
                          {event.category}
                        </span>
                        <h3 className="t-display-m font-normal text-xl md:text-2xl group-hover:text-sun transition-colors">
                          <Link href={`/events/${event.slug}`}>{event.title}</Link>
                        </h3>
                        <p className="t-body text-sm text-muted">{event.summary}</p>
                        <div className="flex items-center gap-4 text-xs text-muted pt-2 font-mono">
                          <span>🕒 {event.time}</span>
                          <span>📍 {event.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 shrink-0">
                      <Link
                        href={`/events/${event.slug}`}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink hover:text-sun font-medium border border-[var(--line)] px-4 py-2 group-hover:border-sun transition-colors"
                      >
                        <span>Details</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {filtered.length === 0 && (
                <div className="py-16 text-center text-muted">
                  <p className="t-body">No events currently listed in this category.</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
