"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container, Section } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";

interface StandardSyllabus {
  std: string;
  category: "Pre-Primary" | "Primary" | "Secondary" | "Higher Secondary";
  subjects: string[];
  overview: string;
}

const syllabusData: StandardSyllabus[] = [
  {
    std: "Nursery & Kindergarten (Jr. & Sr. KG)",
    category: "Pre-Primary",
    subjects: [
      "Early English Phonics & Rhymes",
      "Gujarati Language Foundations (Oral)",
      "Foundational Numeracy & Shapes",
      "Sensory Play, Art & Craft",
      "Environmental Awareness",
    ],
    overview: "Play-based sensorial curriculum developing language, fine motor control, and social curiosity without academic pressure.",
  },
  {
    std: "Standard 1 to 5 (Primary)",
    category: "Primary",
    subjects: [
      "English (First / Second Language)",
      "Gujarati Language & Literature",
      "Hindi (Introduced Std 3)",
      "Mathematics & Mental Arithmetic",
      "Environmental Studies (EVS) / General Science",
      "Computer Literacy & Visual Arts",
    ],
    overview: "Conceptual understanding in mathematics and bilingual reading fluency, supported by continuous internal assessments.",
  },
  {
    std: "Standard 6 to 8 (Upper Primary)",
    category: "Secondary",
    subjects: [
      "English Literature & Composition",
      "Gujarati Literature",
      "Hindi Language",
      "Mathematics (Algebra & Geometry foundations)",
      "General Science (Physics, Chemistry, Biology basics)",
      "Social Science (History, Geography, Civics)",
      "Sanskrit (Basics)",
      "Computer Science & Physical Education",
    ],
    overview: "Transition from general learning to structured scientific and social disciplines under GSEB guidelines.",
  },
  {
    std: "Standard 9 & 10 (GSEB SSC)",
    category: "Secondary",
    subjects: [
      "English",
      "Gujarati",
      "Mathematics (Basic & Standard tracks)",
      "Science & Technology (with practical lab sessions)",
      "Social Science",
      "Hindi / Sanskrit",
      "Computer Science / Health & Physical Education",
    ],
    overview: "Rigorous preparation for GSEB Secondary School Certificate (SSC) board examinations with intensive laboratory and test cycles.",
  },
  {
    std: "Standard 11 & 12 (Science Stream)",
    category: "Higher Secondary",
    subjects: [
      "Physics (Theory & Practical)",
      "Chemistry (Theory & Practical)",
      "Mathematics (Group A) OR Biology (Group B)",
      "English (Higher / Standard Level)",
      "Computer Science / Sanskrit",
    ],
    overview: "State board curriculum synchronized with engineering (JEE/GUJCET) and medical (NEET) conceptual foundations.",
  },
  {
    std: "Standard 11 & 12 (Commerce Stream)",
    category: "Higher Secondary",
    subjects: [
      "Elements of Accountancy",
      "Organization of Commerce & Management (OC)",
      "Economics",
      "Statistics",
      "English Language",
      "Gujarati Language / Commercial Studies",
      "Computer Studies",
    ],
    overview: "Comprehensive preparation for commerce professions, CA Foundation, corporate management, and statistical analytics.",
  },
];

export default function SyllabusPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Academics", href: "/academics" },
          { label: "Syllabus", href: "/academics/syllabus" },
        ]}
        eyebrow="Curricular Outline"
        title="Syllabus by standard."
        lead="Standard-wise subject distribution and curricular frameworks from Pre-Primary through Standard 12."
      />

      <Section tone="paper" spacing="default">
        <Container>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-4 mb-8">
              <span className="t-eyebrow text-sun">GSEB Prescribed Framework</span>
              <span className="t-meta text-xs">Click standard to expand outline</span>
            </div>

            <div className="space-y-4">
              {syllabusData.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-[var(--line)] bg-porcelain transition-colors overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-paper-2"
                    >
                      <div>
                        <span className="t-eyebrow text-sun text-[10px] block mb-1">
                          {item.category}
                        </span>
                        <h3 className="font-display text-xl md:text-2xl text-ink font-normal">
                          {item.std}
                        </h3>
                      </div>
                      <span className="text-sun font-mono text-xl shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          layout
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="px-6 pb-6 pt-2 border-t border-[var(--line)] bg-paper/50"
                        >
                          <p className="t-body text-sm text-muted mb-4">{item.overview}</p>

                          <div>
                            <h4 className="font-sans text-xs uppercase tracking-widest text-ink font-semibold mb-3">
                              Subject Curriculum:
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted">
                              {item.subjects.map((sub, sIdx) => (
                                <li key={sIdx} className="flex items-center gap-2">
                                  <span className="text-sun text-xs">❖</span>
                                  <span>{sub}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-6 pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs text-muted">
                            <span>Official Gujarat State Board (GSEB) syllabus structure</span>
                            <span className="text-sun-text font-medium">
                              Detailed textbook curriculum provided at registration
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
