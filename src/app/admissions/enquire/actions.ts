"use server";

import { z } from "zod";

export const enquirySchema = z.object({
  parentName: z.string().min(2, "Parent name must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  childName: z.string().min(2, "Child's name must be at least 2 characters"),
  standard: z.string().min(1, "Please select the standard applying for"),
  medium: z.enum(["English Medium", "Gujarati Medium"]),
  stream: z.string().optional(),
  visitDate: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "Consent is required to process the enquiry",
  }),
  // Honeypot field for bot mitigation
  website_trap: z.string().max(0, "Bot submission blocked"),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;

export type EnquiryResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

export async function submitEnquiry(
  prevState: EnquiryResponse | null,
  formData: FormData
): Promise<EnquiryResponse> {
  const rawData = {
    parentName: formData.get("parentName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    childName: formData.get("childName"),
    standard: formData.get("standard"),
    medium: formData.get("medium"),
    stream: formData.get("stream") || undefined,
    visitDate: formData.get("visitDate") || undefined,
    message: formData.get("message") || undefined,
    consent: formData.get("consent") === "on",
    website_trap: formData.get("website_trap") ?? "",
  };

  const parsed = enquirySchema.safeParse(rawData);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    const issues = parsed.error.issues ?? [];
    issues.forEach((issue) => {
      const path = issue.path[0];
      if (typeof path === "string") {
        fieldErrors[path] = issue.message;
      }
    });
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors: fieldErrors,
    };
  }

  // Artificial server processing delay for smooth state transition
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    success: true,
    message:
      "Thank you for reaching out. Our admissions coordinator will contact you within one working day.",
  };
}
