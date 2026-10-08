"use client";

import React, { useState, useTransition, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Container, Section, Hairline } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";
import { Sunrise } from "@/components/signature/Sunrise";
import { submitEnquiry, type EnquiryResponse } from "./actions";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

function EnquiryForm() {
  const searchParams = useSearchParams();
  const prefillTopic = searchParams.get("topic") ?? "";
  const prefillStandard = searchParams.get("standard") ?? "";
  const prefillStream = searchParams.get("stream") ?? "";

  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [childName, setChildName] = useState("");
  const [standard, setStandard] = useState(prefillStandard ? `Std ${prefillStandard}` : "");
  const [medium, setMedium] = useState("English Medium");
  const [stream, setStream] = useState(prefillStream);
  const [visitDate, setVisitDate] = useState("");
  const [message, setMessage] = useState(
    prefillTopic === "career-counselling"
      ? "Enquiring specifically regarding academic career guidance and higher secondary counseling."
      : ""
  );
  const [consent, setConsent] = useState(false);

  const [state, setState] = useState<EnquiryResponse | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const res = await submitEnquiry(state, formData);
      setState(res);
    });
  };

  const isSeniorStd =
    standard === "Std 11" ||
    standard === "Std 12" ||
    standard === "Std 11 & 12 Science" ||
    standard === "Std 11 & 12 Commerce";

  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Enquire", href: "/admissions/enquire" },
        ]}
        eyebrow="Direct Admissions Office"
        title="Begin an admission enquiry."
        lead="Please share your details below. Our admissions coordinator will review your request and get in touch within one working day."
      />

      <Section tone="paper" spacing="default">
        <Container>
          <div className="max-w-2xl mx-auto">
            {/* Success State Screen */}
            {state?.success ? (
              <div className="p-8 md:p-12 bg-porcelain border border-[var(--line)] text-center space-y-6">
                <div className="max-w-xs mx-auto">
                  <Sunrise mode="ambient" />
                </div>

                <span className="t-eyebrow text-sun block">Enquiry Received</span>
                <h2 className="t-display-m font-normal">Thank you for your interest.</h2>
                <p className="t-body text-muted leading-relaxed max-w-lg mx-auto">
                  {state.message} We look forward to welcoming your family to Sunrays Vidhyalaya.
                </p>

                <Hairline />

                <div className="pt-2 space-y-4">
                  <p className="t-meta text-xs">Need an immediate answer?</p>
                  <div className="flex flex-wrap items-center justify-center gap-6">
                    <a
                      href={`tel:${siteConfig.phone.e164}`}
                      className="px-6 py-2.5 bg-ink text-paper text-xs uppercase tracking-widest font-semibold hover:bg-ink-2 transition-colors"
                    >
                      Call: {siteConfig.phone.display}
                    </a>
                    <a
                      href="https://wa.me/919624499911"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-widest text-sun hover:underline font-semibold"
                    >
                      Chat via WhatsApp ↗
                    </a>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setState(null)}
                    className="text-xs uppercase tracking-wider text-muted hover:text-ink underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              /* The Form */
              <form
                onSubmit={handleSubmit}
                className="p-8 md:p-12 bg-porcelain border border-[var(--line)] shadow-sm space-y-8"
              >
                {/* Honeypot field (hidden from real users) */}
                <input
                  type="text"
                  name="website_trap"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {state?.errors && (
                  <div
                    className="p-4 bg-red-50 border border-red-200 text-red-900 text-sm"
                    role="alert"
                    aria-live="polite"
                  >
                    <p className="font-semibold mb-1">Please review the following errors:</p>
                    <ul className="list-disc pl-5 space-y-1 text-xs">
                      {Object.entries(state.errors).map(([key, msg]) => (
                        <li key={key}>{msg}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Parent Full Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="parentName"
                      className="t-eyebrow text-[11px] text-muted block"
                    >
                      Parent / Guardian Name *
                    </label>
                    <input
                      id="parentName"
                      name="parentName"
                      type="text"
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="e.g. Ramesh Patel"
                      className={cn(
                        "w-full bg-transparent border-b border-[var(--line)] py-2 text-ink placeholder:text-muted/60 focus:outline-none focus:border-sun text-base transition-colors",
                        state?.errors?.parentName && "border-red-500"
                      )}
                    />
                  </div>

                  {/* Phone Number (Fixed +91 prefix) */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="phone"
                      className="t-eyebrow text-[11px] text-muted block"
                    >
                      Mobile Phone Number *
                    </label>
                    <div className="flex items-center gap-3 border-b border-[var(--line)] focus-within:border-sun transition-colors">
                      <span className="font-mono text-sm text-sun font-semibold select-none">
                        +91
                      </span>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        maxLength={10}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                        placeholder="9876543210"
                        className={cn(
                          "w-full bg-transparent py-2 text-ink placeholder:text-muted/60 focus:outline-none text-base font-mono",
                          state?.errors?.phone && "border-red-500"
                        )}
                      />
                    </div>
                  </div>

                  {/* Email (Optional) */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="t-eyebrow text-[11px] text-muted block">
                      Email Address (Optional)
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="parent@example.com"
                      className="w-full bg-transparent border-b border-[var(--line)] py-2 text-ink placeholder:text-muted/60 focus:outline-none focus:border-sun text-base transition-colors"
                    />
                  </div>

                  {/* Child Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="childName"
                      className="t-eyebrow text-[11px] text-muted block"
                    >
                      Child&apos;s Full Name *
                    </label>
                    <input
                      id="childName"
                      name="childName"
                      type="text"
                      required
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      placeholder="e.g. Aarav Patel"
                      className={cn(
                        "w-full bg-transparent border-b border-[var(--line)] py-2 text-ink placeholder:text-muted/60 focus:outline-none focus:border-sun text-base transition-colors",
                        state?.errors?.childName && "border-red-500"
                      )}
                    />
                  </div>

                  {/* Standard & Medium Selection Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="standard"
                        className="t-eyebrow text-[11px] text-muted block"
                      >
                        Standard Applying For *
                      </label>
                      <select
                        id="standard"
                        name="standard"
                        required
                        value={standard}
                        onChange={(e) => setStandard(e.target.value)}
                        className="w-full bg-transparent border-b border-[var(--line)] py-2 text-ink focus:outline-none focus:border-sun text-sm"
                      >
                        <option value="">Select Standard...</option>
                        <option value="Nursery">Nursery</option>
                        <option value="Junior KG">Junior KG</option>
                        <option value="Senior KG">Senior KG</option>
                        <option value="Std 1">Standard 1</option>
                        <option value="Std 2">Standard 2</option>
                        <option value="Std 3">Standard 3</option>
                        <option value="Std 4">Standard 4</option>
                        <option value="Std 5">Standard 5</option>
                        <option value="Std 6">Standard 6</option>
                        <option value="Std 7">Standard 7</option>
                        <option value="Std 8">Standard 8</option>
                        <option value="Std 9">Standard 9</option>
                        <option value="Std 10">Standard 10 (GSEB SSC)</option>
                        <option value="Std 11">Standard 11</option>
                        <option value="Std 12">Standard 12</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="medium"
                        className="t-eyebrow text-[11px] text-muted block"
                      >
                        Medium of Instruction *
                      </label>
                      <select
                        id="medium"
                        name="medium"
                        required
                        value={medium}
                        onChange={(e) => setMedium(e.target.value)}
                        className="w-full bg-transparent border-b border-[var(--line)] py-2 text-ink focus:outline-none focus:border-sun text-sm"
                      >
                        <option value="English Medium">English Medium</option>
                        <option value="Gujarati Medium">Gujarati Medium</option>
                      </select>
                    </div>
                  </div>

                  {/* Senior Secondary Stream if Std 11 or 12 */}
                  {isSeniorStd && (
                    <div className="space-y-1.5 pt-2">
                      <label
                        htmlFor="stream"
                        className="t-eyebrow text-[11px] text-sun block"
                      >
                        Higher Secondary Stream (Std 11–12)
                      </label>
                      <select
                        id="stream"
                        name="stream"
                        value={stream}
                        onChange={(e) => setStream(e.target.value)}
                        className="w-full bg-transparent border-b border-[var(--line)] py-2 text-ink focus:outline-none focus:border-sun text-sm"
                      >
                        <option value="">Select Stream...</option>
                        <option value="science-group-a">Science (Group A — Mathematics)</option>
                        <option value="science-group-b">Science (Group B — Biology)</option>
                        <option value="commerce">Commerce Stream</option>
                      </select>
                    </div>
                  )}

                  {/* Preferred Campus Visit Date */}
                  <div className="space-y-1.5 pt-2">
                    <label
                      htmlFor="visitDate"
                      className="t-eyebrow text-[11px] text-muted block"
                    >
                      Preferred Campus Tour Date (Optional)
                    </label>
                    <input
                      id="visitDate"
                      name="visitDate"
                      type="date"
                      value={visitDate}
                      onChange={(e) => setVisitDate(e.target.value)}
                      className="w-full bg-transparent border-b border-[var(--line)] py-2 text-ink focus:outline-none focus:border-sun text-sm"
                    />
                  </div>

                  {/* Additional Remarks */}
                  <div className="space-y-1.5 pt-2">
                    <label
                      htmlFor="message"
                      className="t-eyebrow text-[11px] text-muted block"
                    >
                      Additional Remarks / Questions
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Any specific academic questions, current school, or special interests..."
                      className="w-full bg-transparent border-b border-[var(--line)] py-2 text-ink placeholder:text-muted/60 focus:outline-none focus:border-sun text-sm resize-none"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-4 flex items-start gap-3">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 border-[var(--line)] text-sun focus:ring-sun rounded"
                    />
                    <label htmlFor="consent" className="text-xs text-muted leading-relaxed">
                      I consent to Sunrays Vidhyalaya contacting me via telephone or WhatsApp
                      regarding admission procedures and academic counseling.
                    </label>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-4 bg-ink text-paper text-xs uppercase tracking-widest font-semibold hover:bg-ink-2 transition-colors disabled:opacity-50"
                  >
                    {isPending ? "Transmitting Enquiry..." : "Submit Admission Enquiry"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default function EnquirePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-paper py-20 text-center">Loading enquiry form...</div>}>
      <EnquiryForm />
    </Suspense>
  );
}
