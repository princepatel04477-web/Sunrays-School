import { markTodo } from "./todo";

export interface FacultyMember {
  id: string;
  slug: string;
  image: string;
  name: string;
  subject: string;
  department: "Pre-primary" | "Primary" | "Secondary" | "Science" | "Commerce";
  qualifications: string;
  quote: string;
}

const teamImages = [
  "/legacy/team/01.jpg",
  "/legacy/team/02.jpg",
  "/legacy/team/03.jpg",
  "/legacy/team/04.jpg",
  "/legacy/team/05.jpg",
  "/legacy/team/06.jpg",
  "/legacy/team/07.jpg",
  "/legacy/team/08.jpg",
  "/legacy/team/09.JPG",
  "/legacy/team/10.JPG",
  "/legacy/team/11.JPG",
  "/legacy/team/12.JPG",
  "/legacy/team/13.JPG",
];

const departments: Array<"Pre-primary" | "Primary" | "Secondary" | "Science" | "Commerce"> = [
  "Secondary",
  "Science",
  "Commerce",
  "Primary",
  "Secondary",
  "Science",
  "Commerce",
  "Primary",
  "Pre-primary",
  "Secondary",
  "Science",
  "Commerce",
  "Primary",
];

export const facultyMembers: FacultyMember[] = teamImages.map((imagePath, index) => {
  const numStr = String(index + 1).padStart(2, "0");
  const dept = departments[index] ?? "Secondary";
  return {
    id: `faculty-${numStr}`,
    slug: `faculty-member-${numStr}`,
    image: imagePath,
    name: markTodo(
      `faculty[${index}].name`,
      "faculty.ts",
      `TODO_CLIENT: Faculty Name #${numStr}`,
      `Provide full name for teacher photo ${numStr}`
    ),
    subject: markTodo(
      `faculty[${index}].subject`,
      "faculty.ts",
      `TODO_CLIENT: Subject #${numStr}`,
      `Provide subject/specialization for teacher ${numStr}`
    ),
    department: dept,
    qualifications: markTodo(
      `faculty[${index}].qualifications`,
      "faculty.ts",
      `TODO_CLIENT: Degrees & Qualifications #${numStr}`,
      `e.g. M.Sc., B.Ed.`
    ),
    quote: markTodo(
      `faculty[${index}].quote`,
      "faculty.ts",
      `TODO_CLIENT: Personal teaching statement #${numStr}`,
      `One short line on their philosophy of teaching`
    ),
  };
});
