import { markTodo } from "./todo";

export interface DisclosureRow {
  label: string;
  value: string;
  documentUrl?: string;
}

export interface DisclosureSection {
  title: string;
  description: string;
  rows: DisclosureRow[];
}

export const mandatoryDisclosure: DisclosureSection[] = [
  {
    title: "General Information",
    description: "Institutional identification and trust governance details.",
    rows: [
      { label: "Name of the School", value: "Sunrays Vidhyalaya" },
      { label: "Affiliation Board", value: "Gujarat Secondary and Higher Secondary Education Board (GSEB)" },
      {
        label: "Affiliation / Index Number",
        value: markTodo("disclosure.indexNo", "disclosure.ts", "TODO_CLIENT: GSEB School Index / Registration Number"),
      },
      { label: "Trust / Managing Society", value: "Leo Institute of Education Trust" },
      {
        label: "Trust Registration Number",
        value: markTodo("disclosure.trustReg", "disclosure.ts", "TODO_CLIENT: Trust Registration Number"),
      },
      {
        label: "Complete Address",
        value: "Plot No 1 to 5, Opp. Dakheshwar BRTS, Udhna–Navsari Road, Udhna, Surat, Gujarat, India",
      },
      {
        label: "Principal Name & Qualification",
        value: markTodo("disclosure.principal", "disclosure.ts", "TODO_CLIENT: Principal Name & Qualifications"),
      },
      { label: "Official Contact Telephone", value: "+91 96244 99911" },
      { label: "Official Institutional Email", value: "sunraysvidhyalaya@gmail.com" },
    ],
  },
  {
    title: "Documents & Statutory Compliance",
    description: "Statutory compliance certificates and administrative permissions.",
    rows: [
      {
        label: "Copies of Affiliation / Recognition Letters",
        value: "Available in administrative records for inspection",
        documentUrl: "#",
      },
      {
        label: "Trust Registration Certificate",
        value: "Leo Institute of Education Trust, Surat",
        documentUrl: "#",
      },
      {
        label: "Building Safety Certificate",
        value: markTodo("disclosure.buildingSafety", "disclosure.ts", "TODO_CLIENT: Municipal Building Safety Ref"),
        documentUrl: "#",
      },
      {
        label: "Fire Safety Certificate",
        value: markTodo("disclosure.fireSafety", "disclosure.ts", "TODO_CLIENT: Fire NOC Ref & Validity"),
        documentUrl: "#",
      },
      {
        label: "Water & Sanitation Hygiene Certificate",
        value: "Certified Potable Water & Sanitary Facilities",
        documentUrl: "#",
      },
    ],
  },
  {
    title: "School Infrastructure & Campus Facilities",
    description: "Physical and technological facilities available on campus.",
    rows: [
      {
        label: "Total Campus Land Area",
        value: markTodo("disclosure.landArea", "disclosure.ts", "TODO_CLIENT: Total campus area in sq. meters"),
      },
      {
        label: "Number of Classrooms",
        value: markTodo("disclosure.classrooms", "disclosure.ts", "TODO_CLIENT: Total count of classrooms"),
      },
      {
        label: "Science Laboratories",
        value: "3 Dedicated Labs (Physics, Chemistry, Biology / General Science)",
      },
      {
        label: "Computer Science Laboratory",
        value: "Fully networked lab with modern student terminals",
      },
      {
        label: "Library & Reading Hall",
        value: markTodo("disclosure.library", "disclosure.ts", "TODO_CLIENT: Library facility with book count"),
      },
      {
        label: "Internet & Digital Facilities",
        value: "High-speed broadband connectivity across administrative and lab spaces",
      },
    ],
  },
];
