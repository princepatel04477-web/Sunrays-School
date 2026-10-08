import { markTodo } from "./todo";

export interface SchoolStat {
  label: string;
  value: number;
  suffix?: string;
  verified: boolean;
  note?: string;
}

export const verifiedStats: SchoolStat[] = [
  {
    label: "Years of dedicated educational service",
    value: 10,
    suffix: "+",
    verified: true,
    note: "Serving families across Udhna and Surat since founding",
  },
];

export const pendingStats = [
  {
    label: "Students actively enrolled",
    placeholder: markTodo(
      "stats.studentCount",
      "stats.ts",
      "TODO_CLIENT: Total student enrollment (e.g. 1,200)",
      "Provide official active enrollment"
    ),
  },
  {
    label: "Board Distinction (A1 Grade)",
    placeholder: markTodo(
      "stats.a1Count",
      "stats.ts",
      "TODO_CLIENT: Total A1 board results (banner indicates 41)",
      "Verify exact number from recent board examinations"
    ),
  },
  {
    label: "Qualified Faculty Members",
    placeholder: markTodo(
      "stats.facultyCount",
      "stats.ts",
      "TODO_CLIENT: Exact faculty count (not 750)",
      "Verify exact faculty strength"
    ),
  },
];
