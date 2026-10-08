"use client";

import React, { useState, useEffect, useCallback, Suspense } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Container, Section, Hairline } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";
import { TiltedCard } from "@/components/reactbits/TiltedCard";
import { facultyMembers, type FacultyMember } from "@/content/faculty";
import { cn } from "@/lib/utils";

const departments = [
  "All",
  "Pre-primary",
  "Primary",
  "Secondary",
  "Science",
  "Commerce",
] as const;

function FacultyGrid() {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const searchParams = useSearchParams();
  const router = useRouter();

  const teacherSlug = searchParams.get("teacher");
  const activeTeacher = teacherSlug
    ? facultyMembers.find((m) => m.slug === teacherSlug) ?? null
    : null;

  const handleSelect = (member: FacultyMember) => {
    router.push(`?teacher=${member.slug}`, { scroll: false });
  };

  const handleClose = useCallback(() => {
    router.push("/about/faculty", { scroll: false });
  }, [router]);

  // Keyboard navigation Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  const filtered = facultyMembers.filter(
    (m) => selectedDept === "All" || m.department === selectedDept
  );

  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Faculty", href: "/about/faculty" },
        ]}
        eyebrow="Our Educators"
        title="The faculty of Sunrays Vidhyalaya."
        lead="Mentors dedicated to intellectual clarity, student welfare, and character formation across every academic division."
      />

      <Section tone="paper" spacing="tight">
        <Container>
          {/* Department Filter Pills (Outlined hairline, not filled) */}
          <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-[var(--line)] pb-6">
            <span className="t-eyebrow text-sun mr-2">Filter:</span>
            {departments.map((dept) => {
              const isSelected = selectedDept === dept;
              return (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={cn(
                    "relative px-4 py-1.5 text-xs uppercase tracking-wider font-sans transition-colors rounded-full border",
                    isSelected
                      ? "border-sun text-ink font-semibold"
                      : "border-[var(--line)] text-muted hover:border-sun/60 hover:text-ink"
                  )}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeDeptPill"
                      className="absolute inset-0 rounded-full border border-sun pointer-events-none"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span>{dept}</span>
                </button>
              );
            })}
          </div>

          {/* Faculty Grid of 13 Portraits */}
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            <AnimatePresence>
              {filtered.map((member) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={member.id}
                  className="cursor-pointer"
                  onClick={() => handleSelect(member)}
                >
                  <TiltedCard maxTilt={5}>
                    <div className="p-3 bg-porcelain border border-[var(--line)] group transition-all duration-300 hover:shadow-md">
                      <div className="relative aspect-[3/4] overflow-hidden bg-paper border border-[var(--line)] mb-3">
                        <motion.div
                          layoutId={`faculty-img-${member.id}`}
                          className="w-full h-full relative"
                        >
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                          />
                        </motion.div>
                      </div>

                      <div className="space-y-1">
                        <span className="t-eyebrow text-[10px] text-sun block">
                          {member.department}
                        </span>
                        <h3 className="font-display text-lg text-ink font-normal truncate">
                          {member.name}
                        </h3>
                        <p className="t-meta text-xs truncate">{member.subject}</p>
                      </div>
                    </div>
                  </TiltedCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </Section>

      {/* Shared-Element Morph Modal / Detail Sheet */}
      <AnimatePresence>
        {activeTeacher && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl bg-porcelain border border-[var(--line)] shadow-2xl p-6 md:p-10 text-ink overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 text-muted hover:text-ink text-xs uppercase tracking-widest p-2"
                aria-label="Close details"
              >
                ✕ Close
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5">
                  <div className="relative aspect-[3/4] border border-[var(--line)] overflow-hidden bg-paper">
                    <motion.div
                      layoutId={`faculty-img-${activeTeacher.id}`}
                      className="w-full h-full relative"
                    >
                      <Image
                        src={activeTeacher.image}
                        alt={activeTeacher.name}
                        fill
                        sizes="400px"
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                </div>

                <div className="md:col-span-7 space-y-4">
                  <span className="t-eyebrow text-sun block">
                    {activeTeacher.department} Division
                  </span>
                  <h2 className="t-display-m font-normal">{activeTeacher.name}</h2>
                  <p className="font-sans text-sm font-semibold text-sun-text">
                    {activeTeacher.subject}
                  </p>

                  <Hairline />

                  <div className="space-y-2 text-sm">
                    <p className="text-muted">
                      <strong className="text-ink font-medium">Qualifications:</strong>{" "}
                      {activeTeacher.qualifications}
                    </p>
                  </div>

                  <div className="pt-2">
                    <p className="font-display text-lg italic text-ink/80 border-l-2 border-sun pl-4">
                      &ldquo;{activeTeacher.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleClose}
                      className="px-6 py-2 border border-[var(--line)] text-xs uppercase tracking-widest hover:border-sun text-ink transition-colors"
                    >
                      Return to Faculty
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FacultyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-paper py-20 text-center">Loading faculty directory...</div>}>
      <FacultyGrid />
    </Suspense>
  );
}
