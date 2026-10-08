import type { Metadata } from "next";
import { Container, Section, Hairline } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy · Data Protection Guidelines",
  description:
    "Data privacy and protection policy for Sunrays Vidhyalaya and Leo Institute of Education Trust regarding student and parent information.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy" },
        ]}
        eyebrow="Data Protection"
        title="Privacy & communications policy."
        lead="How Sunrays Vidhyalaya and Leo Institute of Education Trust handle, protect, and process parent and child information."
      />

      <Section tone="paper" spacing="default">
        <Container>
          <div className="max-w-[68ch] mx-auto space-y-10 text-ink leading-relaxed">
            <div className="p-4 bg-porcelain border border-[var(--line)] text-xs text-muted">
              <strong>Draft Note:</strong> This policy outlines standard school data protection
              commitments for online enquiries, ERP processing, and statutory compliance. Subject
              to final approval by the Leo Institute of Education Trust legal desk.
            </div>

            <section className="space-y-4">
              <h2 className="t-display-m font-normal">1. Information We Collect</h2>
              <p className="t-body text-muted">
                When you interact with our website, submit an admission enquiry, or register through
                our administrative portal, we may collect:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-muted">
                <li>Parent/Guardian contact details (Full name, mobile telephone number, email).</li>
                <li>Child applicant details (Full name, standard applying for, medium of preference).</li>
                <li>Preferred dates for on-campus tours and counseling appointments.</li>
                <li>Official statutory records during formal enrollment (Birth certificate, previous report cards, Transfer Certificates).</li>
              </ul>
            </section>

            <Hairline />

            <section className="space-y-4">
              <h2 className="t-display-m font-normal">2. Purpose of Processing</h2>
              <p className="t-body text-muted">
                Information provided is utilized strictly for institutional and academic purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-muted">
                <li>Responding to admission enquiries and coordinating school visits.</li>
                <li>Fulfilling state education department and GSEB statutory reporting requirements.</li>
                <li>Facilitating parent communications regarding attendance, academic updates, and fee payments via the official school ERP.</li>
              </ul>
              <p className="t-body text-muted">
                We do not sell, lease, or monetize parent or student personal information to any
                third-party marketing or commercial entities.
              </p>
            </section>

            <Hairline />

            <section className="space-y-4">
              <h2 className="t-display-m font-normal">3. Data Retention & Security</h2>
              <p className="t-body text-muted">
                Prospective enquiries that do not result in enrollment are retained for one academic
                cycle to facilitate admissions follow-ups and then securely purged. Enrolled student
                records are preserved in permanent administrative registers as required by Gujarat
                state educational codes.
              </p>
            </section>

            <Hairline />

            <section className="space-y-4">
              <h2 className="t-display-m font-normal">4. Contact & Inquiries</h2>
              <p className="t-body text-muted">
                If you have questions regarding personal records or wish to update your contact
                details, please reach out to our administrative desk:
              </p>
              <div className="p-5 bg-porcelain border border-[var(--line)] space-y-1 text-sm">
                <p><strong>Sunrays Vidhyalaya</strong> (Leo Institute of Education Trust)</p>
                <p>Plot No 1 to 5, Opp. Dakheshwar BRTS, Udhna–Navsari Road, Surat, Gujarat</p>
                <p>Email: <a href={`mailto:${siteConfig.email}`} className="text-sun underline">{siteConfig.email}</a></p>
                <p>Phone: {siteConfig.phone.display}</p>
              </div>
            </section>
          </div>
        </Container>
      </Section>
    </div>
  );
}
