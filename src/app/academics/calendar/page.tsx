import type { Metadata } from "next";
import { Container, Section, Hairline } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "School Calendar · Academic Schedule & Terms",
  description:
    "Official academic term dates, examination blocks, vacations, and institutional events for Sunrays Vidhyalaya, Surat.",
};

interface TermBlock {
  term: string;
  duration: string;
  milestones: Array<{ date: string; title: string; note: string }>;
}

const academicTerms: TermBlock[] = [
  {
    term: "Term I (Monsoon & Autumn Session)",
    duration: "June 2026 – October 2026",
    milestones: [
      { date: "June 08", title: "Commencement of Academic Session", note: "Welcome assembly and textbook kit distribution" },
      { date: "July 25", title: "First Periodic Assessment (PA-1)", note: "Foundational syllabus review across all standards" },
      { date: "August 15", title: "Independence Day Commemoration", note: "Flag hoisting, patriotic parade & address" },
      { date: "September 05", title: "Teachers' Day Celebrations", note: "Student council leadership program" },
      { date: "October 08 – 22", title: "Terminal Mid-Year Examinations", note: "First semester comprehensive board evaluations" },
    ],
  },
  {
    term: "Diwali Vacation",
    duration: "Late October 2026 – Early November 2026",
    milestones: [
      { date: "Oct 24 – Nov 12", title: "Diwali Festival Recess", note: "Campus administrative desk open on select working days" },
    ],
  },
  {
    term: "Term II (Winter & Spring Session)",
    duration: "November 2026 – April 2027",
    milestones: [
      { date: "November 16", title: "Reopening for Second Term", note: "Resumption of all academic divisions" },
      { date: "December 05", title: "Annual Athletics & Sports Meet", note: "Inter-house athletic events on school grounds" },
      { date: "January 12", title: "Pre-Board Assessments (Std 10 & 12)", note: "Full GSEB simulation examination blocks" },
      { date: "January 26", title: "Republic Day Observance", note: "Campus cultural and patriotic address" },
      { date: "March 02", title: "Annual GSEB Board Examinations", note: "SSC and HSC state board examination centers" },
      { date: "April 15", title: "Annual Result Declarations", note: "Issuance of grade sheets and advancement certificates" },
    ],
  },
];

export default function CalendarPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Academics", href: "/academics" },
          { label: "School Calendar", href: "/academics/calendar" },
        ]}
        eyebrow="Academic Almanac"
        title="Terms, vacations & examination dates."
        lead="Annual schedule of academic milestones, term assessments, and statutory holidays."
      />

      <Section tone="paper" spacing="default">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--line)] pb-6">
              <div>
                <span className="t-eyebrow text-sun">Academic Year</span>
                <h2 className="font-display text-3xl font-normal">2026–2027 Session</h2>
              </div>
              <p className="t-meta text-xs">
                Subject to official GSEB state education circular notifications
              </p>
            </div>

            <div className="space-y-12">
              {academicTerms.map((termBlock, idx) => (
                <div key={idx} className="space-y-6">
                  <div className="flex items-baseline justify-between border-b border-[var(--line)] pb-3">
                    <h3 className="font-display text-2xl text-ink font-normal">
                      {termBlock.term}
                    </h3>
                    <span className="font-mono text-xs text-sun font-medium">
                      {termBlock.duration}
                    </span>
                  </div>

                  <div className="divide-y divide-[var(--line)] border border-[var(--line)] bg-porcelain">
                    {termBlock.milestones.map((item, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="flex items-baseline gap-6">
                          <span className="font-mono text-xs font-semibold text-sun min-w-[70px]">
                            {item.date}
                          </span>
                          <div>
                            <h4 className="font-sans text-sm font-semibold text-ink">
                              {item.title}
                            </h4>
                            <p className="t-meta text-xs">{item.note}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Hairline />

            <div className="p-8 bg-porcelain border border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-display text-xl mb-1">Parent ERP Sync</h4>
                <p className="t-meta text-xs">
                  Active parents can view daily timetable updates and attendance records via the ERP.
                </p>
              </div>
              <a
                href="https://erp.sunraysschool.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-ink text-paper text-xs uppercase tracking-widest font-semibold hover:bg-ink-2 transition-colors shrink-0"
              >
                ERP Login ↗
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
