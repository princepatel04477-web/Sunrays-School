export interface TcRecord {
  grNo: string;
  studentInitial: string;
  standard: string;
  issueDate: string;
  reason: string;
}

export interface SchoolNotice {
  id: string;
  title: string;
  date: string;
  category: "Notice" | "Circular" | "TC Update";
  content: string;
  fileUrl?: string;
}

export const tcRecords: TcRecord[] = [
  {
    grNo: "2024-0891",
    studentInitial: "P. R. Patel",
    standard: "Std 10",
    issueDate: "2026-03-28",
    reason: "Completed Std 10 (GSEB SSC)",
  },
  {
    grNo: "2024-0912",
    studentInitial: "K. M. Shah",
    standard: "Std 12 Science",
    issueDate: "2026-03-25",
    reason: "Higher Studies / University Admission",
  },
  {
    grNo: "2024-0744",
    studentInitial: "A. S. Desai",
    standard: "Std 8",
    issueDate: "2026-02-14",
    reason: "Parent Relocation Outside Surat",
  },
  {
    grNo: "2023-0620",
    studentInitial: "V. N. Sharma",
    standard: "Std 12 Commerce",
    issueDate: "2026-02-02",
    reason: "Course Completion",
  },
  {
    grNo: "2023-0518",
    studentInitial: "R. K. Mehta",
    standard: "Std 5",
    issueDate: "2026-01-20",
    reason: "Parent Transfer",
  },
];

export const generalNotices: SchoolNotice[] = [
  {
    id: "not-01",
    title: "Commencement of Admission Enquiries for 2026–27",
    date: "2026-04-01",
    category: "Notice",
    content: "Admission enquiries for the academic session 2026–27 are now being accepted for Nursery to Std 12.",
  },
  {
    id: "not-02",
    title: "GSEB Board Examination Hall Ticket Distribution",
    date: "2026-02-10",
    category: "Circular",
    content: "Registered students of Std 10 and Std 12 may collect their hall tickets from the administrative office during working hours.",
  },
];
