export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  rel?: string;
  index?: string;
  description?: string;
}

export interface NavSection {
  title: string;
  href: string;
  description: string;
  image?: string;
  imageCaption?: string;
  links: NavLink[];
}

export const navigationSections: NavSection[] = [
  {
    title: "About",
    href: "/about",
    description: "Ten years of dedicated schooling under Leo Institute of Education Trust.",
    image: "/legacy/about/01.jpg",
    imageCaption: "Sunrays Vidhyalaya campus building, Udhna",
    links: [
      { label: "The School", href: "/about", index: "01", description: "Our heritage, philosophy, and campus" },
      { label: "Trustee's Message", href: "/about/trustee", index: "02", description: "A message from Jaysukh Kathiriya" },
      { label: "Headmaster's Message", href: "/about/headmaster", index: "03", description: "Academic direction and values" },
      { label: "Faculty", href: "/about/faculty", index: "04", description: "Meet our dedicated teachers" },
      { label: "Awards & Achievements", href: "/about/awards", index: "05", description: "Academic and co-curricular distinction" },
    ],
  },
  {
    title: "Academics",
    href: "/academics",
    description: "GSEB curriculum from Nursery to Std 12 in English & Gujarati medium.",
    image: "/legacy/lab/physics.jpg",
    imageCaption: "Physics Laboratory, Sunrays Vidhyalaya",
    links: [
      { label: "Learning Stages", href: "/academics", index: "01", description: "Pre-primary to Higher Secondary" },
      { label: "Streams (Science / Commerce)", href: "/academics/streams", index: "02", description: "Higher secondary disciplines" },
      { label: "GSEB Affiliation", href: "/academics/gseb", index: "03", description: "Board curriculum and standards" },
      { label: "Laboratories", href: "/academics/labs", index: "04", description: "Computing, Physics & Chemistry labs" },
      { label: "Career Counselling", href: "/academics/career-counselling", index: "05", description: "Guiding higher study pathways" },
      { label: "School Calendar", href: "/academics/calendar", index: "06", description: "Terms, holidays and exam dates" },
      { label: "Syllabus", href: "/academics/syllabus", index: "07", description: "Curricular overview standard-wise" },
    ],
  },
  {
    title: "Life at Sunrays",
    href: "/life",
    description: "Cultivating character, sportsmanship, and cultural expression.",
    image: "/legacy/gallery/01.jpg",
    imageCaption: "Campus life and student activities",
    links: [
      { label: "Campus Life Overview", href: "/life", index: "01", description: "The student experience beyond textbooks" },
      { label: "Sports & Athletics", href: "/life/sports", index: "02", description: "Physical education and games" },
      { label: "Culture & Arts", href: "/life/culture", index: "03", description: "Celebrations, arts and debate" },
      { label: "Events", href: "/events", index: "04", description: "Annual functions and campus dates" },
      { label: "Photo Gallery", href: "/gallery", index: "05", description: "Photographs from the campus" },
    ],
  },
  {
    title: "Admissions",
    href: "/admissions",
    description: "Welcoming students for Nursery through Standard 12.",
    image: "/legacy/about/02.jpg",
    imageCaption: "Interactive learning in modern classrooms",
    links: [
      { label: "Admission Procedure", href: "/admissions/procedure", index: "01", description: "Five-step enrollment guide" },
      { label: "Fee Structure", href: "/admissions/fees", index: "02", description: "Schedule of tuition and fees" },
      { label: "Withdrawal & TC Policy", href: "/admissions/policy", index: "03", description: "Transfer certificate guidelines" },
      { label: "TC Updates", href: "/admissions/tc-updates", index: "04", description: "Recent transfer certificates issued" },
      {
        label: "Pay Fees Online (ERP)",
        href: "https://erp.sunraysschool.in/login",
        index: "05",
        description: "Official school ERP payment portal",
        external: true,
        rel: "noopener noreferrer",
      },
      { label: "Enquire for Admission", href: "/admissions/enquire", index: "06", description: "Submit an online enquiry" },
    ],
  },
];

export const utilityLinks: NavLink[] = [
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
  { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
  {
    label: "Parent Login",
    href: "https://erp.sunraysschool.in/login",
    external: true,
    rel: "noopener noreferrer",
  },
  {
    label: "Parent App",
    href: "https://play.google.com/store/apps/details?id=com.leo.zibma",
    external: true,
    rel: "noopener noreferrer",
  },
];
