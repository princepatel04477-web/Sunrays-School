"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";
import { tcRecords } from "@/content/notices";

export default function TcUpdatesPage() {
  const [query, setQuery] = useState("");
  const [selectedStandard, setSelectedStandard] = useState("All");

  const filtered = tcRecords.filter((rec) => {
    const matchesQuery =
      rec.grNo.toLowerCase().includes(query.toLowerCase()) ||
      rec.studentInitial.toLowerCase().includes(query.toLowerCase()) ||
      rec.issueDate.includes(query);
    const matchesStd =
      selectedStandard === "All" || rec.standard.includes(selectedStandard);
    return matchesQuery && matchesStd;
  });

  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "TC Updates", href: "/admissions/tc-updates" },
        ]}
        eyebrow="Administrative Records"
        title="Transfer Certificate register."
        lead="Searchable registry of verified Transfer Certificates (TC) issued by the administrative office."
      />

      <Section tone="paper" spacing="default">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Privacy Notification Banner */}
            <div className="p-4 bg-porcelain border border-[var(--line)] flex items-start gap-3 text-xs text-muted">
              <span className="text-sun">ℹ</span>
              <p>
                <strong>Privacy Notice:</strong> In compliance with child data privacy guidelines,
                records display student initials and verified GR registration numbers. For complete
                official verification, contact the administrative desk.
              </p>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between border-b border-[var(--line)] pb-6">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search by GR Number, student initial, or date (YYYY-MM-DD)..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-porcelain border border-[var(--line)] px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-sun"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-3 text-muted hover:text-ink text-xs"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <span className="t-meta text-xs">Standard:</span>
                <select
                  value={selectedStandard}
                  onChange={(e) => setSelectedStandard(e.target.value)}
                  className="bg-porcelain border border-[var(--line)] px-3 py-2.5 text-sm text-ink focus:outline-none focus:border-sun"
                >
                  <option value="All">All Standards</option>
                  <option value="Std 5">Std 5</option>
                  <option value="Std 8">Std 8</option>
                  <option value="Std 10">Std 10 (SSC)</option>
                  <option value="Std 12">Std 12 (HSC)</option>
                </select>
              </div>
            </div>

            {/* Search Results Table */}
            <div className="border border-[var(--line)] bg-porcelain overflow-hidden">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[var(--line)] bg-paper/60 text-xs uppercase tracking-wider text-muted font-mono">
                    <th className="py-4 px-6">GR Number</th>
                    <th className="py-4 px-6">Student Initial</th>
                    <th className="py-4 px-6">Standard</th>
                    <th className="py-4 px-6">Date of Issue</th>
                    <th className="py-4 px-6">Reason / Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)] text-ink">
                  {filtered.map((item, idx) => (
                    <tr key={idx} className="hover:bg-paper/40 transition-colors">
                      <td className="py-4 px-6 font-mono font-semibold text-sun">
                        {item.grNo}
                      </td>
                      <td className="py-4 px-6 font-medium">{item.studentInitial}</td>
                      <td className="py-4 px-6 text-muted">{item.standard}</td>
                      <td className="py-4 px-6 font-mono text-xs">{item.issueDate}</td>
                      <td className="py-4 px-6 text-xs text-muted">{item.reason}</td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-muted text-sm">
                        No matching Transfer Certificate records found for &ldquo;{query}&rdquo;.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="pt-6 flex items-center justify-between text-xs text-muted">
              <span>Showing {filtered.length} verified records</span>
              <Link
                href="/admissions/policy"
                className="text-sun hover:underline font-medium"
              >
                Review Transfer Certificate Policy →
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
