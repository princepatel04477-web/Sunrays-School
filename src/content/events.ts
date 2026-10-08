export interface SchoolEvent {
  slug: string;
  title: string;
  category: "Academic" | "Sports" | "Cultural" | "Examination";
  date: string; // ISO date string YYYY-MM-DD
  displayDate: {
    day: string;
    month: string;
    year: string;
  };
  time: string;
  location: string;
  summary: string;
  description: string;
  isUpcoming: boolean;
  image?: string;
}

export const schoolEvents: SchoolEvent[] = [
  {
    slug: "annual-science-exhibition-2026",
    title: "Annual Science & Innovation Fair",
    category: "Academic",
    date: "2026-11-15",
    displayDate: { day: "15", month: "NOV", year: "2026" },
    time: "09:30 AM – 03:00 PM",
    location: "Senior Science Laboratories & Quadrangle",
    summary:
      "Working scientific models, robotics prototypes, and computational demonstrations crafted by secondary and higher secondary students.",
    description:
      "The Annual Science Fair invites parents and educationists to observe practical student projects across Physics, Chemistry, Biology, and Computing. Young innovators demonstrate experimental methodology and defend their working hypotheses.",
    isUpcoming: true,
    image: "/legacy/lab/physics.jpg",
  },
  {
    slug: "annual-sports-meet-2026",
    title: "Annual Athletics & Sports Meet",
    category: "Sports",
    date: "2026-12-05",
    displayDate: { day: "05", month: "DEC", year: "2026" },
    time: "08:00 AM – 04:00 PM",
    location: "Main School Grounds, Udhna",
    summary:
      "Track and field events, house marches, and team sports championships across all standards.",
    description:
      "A celebration of grit, athletic discipline, and sportsmanship. House teams compete in track relays, high jumps, sprints, and team tournaments with trophies presented by distinguished sports guests.",
    isUpcoming: true,
    image: "/legacy/gallery/05.jpg",
  },
  {
    slug: "pre-board-examinations-std-10-12",
    title: "Pre-Board Academic Assessments (Std 10 & 12)",
    category: "Examination",
    date: "2027-01-12",
    displayDate: { day: "12", month: "JAN", year: "2027" },
    time: "10:00 AM – 01:15 PM",
    location: "Examination Halls",
    summary:
      "Simulated GSEB SSC & HSC board examination sessions to prepare students for final state board examinations.",
    description:
      "Structured full-length simulated board examinations under strict exam conditions, followed by comprehensive answer analysis sessions to refine student presentation and timing.",
    isUpcoming: true,
    image: "/legacy/about/02.jpg",
  },
  {
    slug: "annual-cultural-day-2026",
    title: "Annual Cultural Fest & Saraswati Vandana",
    category: "Cultural",
    date: "2026-02-20",
    displayDate: { day: "20", month: "FEB", year: "2026" },
    time: "05:00 PM – 08:30 PM",
    location: "School Auditorium",
    summary:
      "Music, classical dance recitals, Devanagari verse recitation, and drama performances celebrating regional and national heritage.",
    description:
      "An evening dedicated to Indian classical arts, theatrical drama, and celebratory presentations highlighting our motto सा विद्या या विमुक्तये.",
    isUpcoming: false,
    image: "/legacy/gallery/04.jpg",
  },
];
