import { markTodo } from "./todo";

export interface FeeStructureItem {
  standard: string;
  medium: string;
  tuitionFeePaise?: number; // Integer paise
  termFeePaise?: number;
  isAvailable: boolean;
  notes?: string;
}

export const feePolicy = {
  isPubliclyDisclosed: false,
  noticeText:
    "In accordance with transparent institutional norms, verified fee schedules are provided directly to parents during the campus visit and counseling session. Parents may also review their child's customized fee schedule on the official ERP portal.",
  erpPaymentUrl: "https://erp.sunraysschool.in/login",
  supportContact: "+91 96244 99911",
};

export const feeSchedules: FeeStructureItem[] = [
  {
    standard: "Pre-Primary (Nursery, Jr. KG, Sr. KG)",
    medium: "English & Gujarati Medium",
    isAvailable: false,
    notes: markTodo(
      "fees.preprimary",
      "fees.ts",
      "TODO_CLIENT: Pre-Primary annual fee structure in INR",
      "Shared on campus or entered here"
    ),
  },
  {
    standard: "Primary (Std 1 to 5)",
    medium: "English & Gujarati Medium",
    isAvailable: false,
    notes: markTodo(
      "fees.primary",
      "fees.ts",
      "TODO_CLIENT: Primary annual fee structure in INR",
      "Shared on campus or entered here"
    ),
  },
  {
    standard: "Secondary (Std 6 to 10)",
    medium: "English & Gujarati Medium",
    isAvailable: false,
    notes: markTodo(
      "fees.secondary",
      "fees.ts",
      "TODO_CLIENT: Secondary annual fee structure in INR",
      "Shared on campus or entered here"
    ),
  },
  {
    standard: "Higher Secondary (Std 11 & 12 Science)",
    medium: "English & Gujarati Medium",
    isAvailable: false,
    notes: markTodo(
      "fees.science",
      "fees.ts",
      "TODO_CLIENT: Science stream annual fee structure in INR",
      "Shared on campus or entered here"
    ),
  },
  {
    standard: "Higher Secondary (Std 11 & 12 Commerce)",
    medium: "English & Gujarati Medium",
    isAvailable: false,
    notes: markTodo(
      "fees.commerce",
      "fees.ts",
      "TODO_CLIENT: Commerce stream annual fee structure in INR",
      "Shared on campus or entered here"
    ),
  },
];
