export interface AdmissionStep {
  stepNumber: string;
  title: string;
  summary: string;
  details: string;
}

export const admissionSteps: AdmissionStep[] = [
  {
    stepNumber: "01",
    title: "Initial Enquiry",
    summary: "Submit your basic details online or visit the school reception desk.",
    details:
      "Parents begin by filling our streamlined online enquiry form or visiting our campus office on Udhna–Navsari Road. Our admissions coordinator reviews your enquiry and contacts you within one working day.",
  },
  {
    stepNumber: "02",
    title: "Campus Visit & Orientation",
    summary: "Tour our laboratories, classrooms, and grounds with our academic team.",
    details:
      "Experience our environment first-hand. You will be guided through our science and computing laboratories, classrooms, library, and sports grounds, while discussing our philosophy and academic approach.",
  },
  {
    stepNumber: "03",
    title: "Interaction & Readiness Assessment",
    summary: "An informal discussion for young learners, or a foundational concept review for senior standards.",
    details:
      "For pre-primary and primary applicants, this is a welcoming, pressure-free interaction. For secondary and higher secondary candidates, an assessment helps identify foundational readiness in mathematics, language, and sciences.",
  },
  {
    stepNumber: "04",
    title: "Document Verification",
    summary: "Submission and verification of vital identity, birth, and previous academic records.",
    details:
      "Our administrative office reviews original certificates and collects self-attested photocopies per state education department regulations.",
  },
  {
    stepNumber: "05",
    title: "Enrollment & Welcome",
    summary: "Payment of fees via the official ERP portal and classroom allocation.",
    details:
      "Upon verification, admission is confirmed. Fee payment is completed through our official school ERP, and the student kit and academic calendar are issued.",
  },
];

export const requiredDocuments = [
  {
    name: "Birth Certificate",
    mandatory: true,
    description: "Issued by the competent Municipal Corporation or Gram Panchayat (for Pre-Primary & Std 1).",
  },
  {
    name: "Transfer Certificate / School Leaving Certificate (LC)",
    mandatory: true,
    description: "Original TC from the previously attended recognized school, counter-signed if from another district/board.",
  },
  {
    name: "Previous Academic Report Card",
    mandatory: true,
    description: "Photocopy of the annual mark sheet/progress report from the preceding standard.",
  },
  {
    name: "Aadhaar Card Copy (Student & Parents)",
    mandatory: true,
    description: "Self-attested photocopies of student and both parents' Aadhaar identity cards.",
  },
  {
    name: "Passport Size Photographs",
    mandatory: true,
    description: "4 recent color passport-sized photographs of the student in formal attire.",
  },
  {
    name: "Caste / Category Certificate (if applicable)",
    mandatory: false,
    description: "Issued by the competent authority for state demographic reporting.",
  },
];
