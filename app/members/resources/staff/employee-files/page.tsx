import Link from "next/link";
import {
  ArrowLeft,
  FolderOpen,
  Shield,
  AlertTriangle,
  Lock,
  AlertCircle,
  ChevronDown,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employee File Guide | Aesthetic Executive",
};

type FileCategory = {
  number: string;
  title: string;
  docs: string[];
  alert: string | null;
  note: string | null;
};

const categories: FileCategory[] = [
  {
    number: "01",
    title: "Personal & Employment Information",
    docs: [
      "Employment application & resume",
      "Signed offer letter",
      "Signed employment contract or at-will acknowledgment",
      "Signed job description (acknowledging role and responsibilities)",
      "Emergency contact form",
      "Background check authorization and results (if conducted)",
      "Non-compete, non-disclosure, or non-solicitation agreement (if applicable)",
      "Copy of government-issued ID (if collected at hire)",
      "Completed new hire onboarding checklist",
    ],
    alert: null,
    note: null,
  },
  {
    number: "02",
    title: "Payroll & Compensation",
    docs: [
      "IRS Form W-4 — Employee's Withholding Certificate",
      "State tax withholding form (varies by state)",
      "Direct deposit authorization form",
      "Compensation history and pay rate change notices",
      "Commission or bonus plan agreement (signed)",
      "Wage garnishment orders (if applicable)",
      "Final paycheck acknowledgment (completed at separation)",
    ],
    alert: null,
    note: "Payroll records: 3-year minimum retention (FLSA). W-4 and withholding forms: 4-year retention required (IRS).",
  },
  {
    number: "03",
    title: "Performance & Development",
    docs: [
      "30/60/90-day review notes",
      "Semi-annual and annual performance reviews",
      "Written goals and goal-tracking records",
      "Training completion logs",
      "Continuing education certificates",
      "Coaching notes and one-on-one documentation",
      "Promotion, demotion, or role change records",
      "Signed individual development plans",
    ],
    alert: null,
    note: null,
  },
  {
    number: "04",
    title: "Medical & Leave Documents",
    docs: [
      "FMLA designation notices and medical certifications",
      "ADA accommodation requests and supporting documentation",
      "Doctor's notes for extended absences",
      "Return-to-work medical releases",
      "Workers' compensation claim documentation",
      "Vaccine records (if required by your practice)",
      "Pregnancy accommodation requests",
    ],
    alert: "Federal law (ADA) requires all medical information to be stored in a completely separate, locked file — never co-mingled with the general personnel folder. This applies whether your system is digital or paper.",
    note: null,
  },
  {
    number: "05",
    title: "Disciplinary & Legal",
    docs: [
      "Written warnings and verbal warning documentation",
      "Corrective action plans and performance improvement plans (PIPs)",
      "Termination notice and separation documentation",
      "Resignation letter",
      "Exit interview notes",
      "Harassment, discrimination, or hostile workplace complaint records",
      "Investigation notes and witness statements",
      "Signed acknowledgment of policies violated",
    ],
    alert: null,
    note: "Active investigation records should be secured separately from the general file, with access restricted to the owner or designated HR contact only.",
  },
  {
    number: "06",
    title: "Certifications & Licenses",
    docs: [
      "RN / NP / PA / MD state license (expiration date tracked)",
      "Medical aesthetician or cosmetology license (expiration tracked)",
      "CPR / BLS certification (renews every 2 years)",
      "Laser safety certification",
      "Botox, filler, and neuromodulator training certificates",
      "Bloodborne pathogen and OSHA training completion records",
      "DEA registration (if applicable)",
      "State-specific aesthetic or medical certifications",
    ],
    alert: "Expired licenses and certifications are a serious regulatory and legal liability. Build a separate expiration tracker and send renewal reminders at least 60 days in advance.",
    note: null,
  },
];

type RetentionItem = {
  category: string;
  period: string;
  law: string;
};

const retentionSchedule: RetentionItem[] = [
  {
    category: "I-9 Forms",
    period: "3 years from hire OR 1 year after termination — whichever is later",
    law: "USCIS",
  },
  {
    category: "Payroll Records",
    period: "3 years minimum",
    law: "FLSA",
  },
  {
    category: "W-4 & Tax Withholding",
    period: "4 years after due date or payment",
    law: "IRS",
  },
  {
    category: "General Personnel File",
    period: "7 years after termination (some states require longer)",
    law: "Recommended",
  },
  {
    category: "Medical & Leave Records",
    period: "3 years after separation",
    law: "ADA / HIPAA",
  },
  {
    category: "Disciplinary Records",
    period: "Duration of employment + 7 years",
    law: "Best Practice",
  },
  {
    category: "Workers' Compensation",
    period: "5 years minimum",
    law: "OSHA / State",
  },
  {
    category: "Certifications & Licenses",
    period: "3 years after termination",
    law: "Best Practice",
  },
];

const maintenanceBlocks = [
  {
    cadence: "At Hire (Days 1–3)",
    color: "#a28c75",
    bg: "rgba(162,140,117,0.06)",
    border: "rgba(162,140,117,0.2)",
    items: [
      "Collect and file all required documents before or on Day 1",
      "Complete and verify Form I-9 within 3 business days of the start date",
      "Add all license and certification expiration dates to your tracker",
    ],
  },
  {
    cadence: "Monthly",
    color: "#a28c75",
    bg: "rgba(162,140,117,0.03)",
    border: "rgba(162,140,117,0.13)",
    items: [
      "File any new training completions, certificates, or policy acknowledgments",
      "Review for missing documents in recently onboarded employees' files",
    ],
  },
  {
    cadence: "Quarterly",
    color: "#a28c75",
    bg: "rgba(162,140,117,0.06)",
    border: "rgba(162,140,117,0.2)",
    items: [
      "Full audit of all active employee files — check each against the 6-category checklist",
      "Review license and certification expiration tracker",
      "Send renewal reminders for anything expiring within the next 60 days",
    ],
  },
  {
    cadence: "At Separation",
    color: "#e8a87c",
    bg: "rgba(232,168,124,0.06)",
    border: "rgba(232,168,124,0.2)",
    items: [
      "File all separation documents within 7 days of the last day",
      "Move file to an archived or terminated folder",
      "Write the required retention end date on the file before archiving",
      "Revoke all system and facility access on or before the last day",
    ],
  },
  {
    cadence: "Annually",
    color: "#a28c75",
    bg: "rgba(162,140,117,0.03)",
    border: "rgba(162,140,117,0.13)",
    items: [
      "Review retention schedule and purge files that have passed their required retention period",
      "Update your file organization system if your team structure has changed",
      "Confirm medical files remain properly separated from general personnel files",
    ],
  },
  {
    cadence: "Access Levels",
    color: "#a28c75",
    bg: "rgba(162,140,117,0.06)",
    border: "rgba(162,140,117,0.2)",
    items: [
      "Practice Owner — full access to all files",
      "Practice Manager — general file, performance records, certifications",
      "Payroll or Bookkeeper — payroll & compensation files only",
      "No other team member without documented reason and owner approval",
    ],
  },
];

export default function EmployeeFileGuidePage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">
      <style>{`
        details.file-accordion > summary { list-style: none; }
        details.file-accordion > summary::-webkit-details-marker { display: none; }
        details.file-accordion > summary::marker { display: none; }
        details.file-accordion .file-chevron { transition: transform 0.25s ease; }
        details.file-accordion[open] .file-chevron { transform: rotate(180deg); }
      `}</style>

      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden border-b"
        style={{ borderColor: "rgba(162,140,117,0.12)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.7) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-12">
          <Link
            href="/members/resources/staff"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-8 transition-colors duration-200 hover:opacity-80"
            style={{ color: "rgba(162,140,117,0.7)" }}
          >
            <ArrowLeft size={13} />
            Staff Resources
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <FolderOpen size={18} style={{ color: "#a28c75" }} />
            </div>
            <p
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: "#a28c75" }}
            >
              Staff Resources
            </p>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            Employee File Guide
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,253,246,0.5)" }}
          >
            Everything your practice must keep in an employee file — organized by
            category, compliant by design, with clear rules on what must be separated,
            how long to keep it, and how to audit it.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 space-y-20">

        {/* ── Why It Matters ── */}
        <div
          className="rounded-2xl border p-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(47,4,16,0.5) 0%, rgba(20,0,8,0.5) 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <div className="flex items-start gap-5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{
                background: "rgba(162,140,117,0.1)",
                border: "1px solid rgba(162,140,117,0.22)",
              }}
            >
              <Shield size={18} style={{ color: "#a28c75" }} />
            </div>
            <div>
              <h2
                className="font-display text-lg font-light mb-2"
                style={{ color: "#fffdf6" }}
              >
                Why This Matters
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>
                Employee files are your legal paper trail. In the event of a wrongful
                termination claim, wage dispute, ADA complaint, or Department of Labor
                audit, disorganized or incomplete files can cost your practice significantly
                — in fines, legal fees, and credibility. A structured system protects you,
                demonstrates good faith, and keeps you audit-ready at all times. The
                guidance below reflects federal requirements; always consult an employment
                attorney for your state&apos;s specific rules.
              </p>
            </div>
          </div>
        </div>

        {/* ── The 6 File Categories ── */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              The 6 File Categories
            </h2>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(162,140,117,0.15)" }}
            />
          </div>

          <div className="space-y-3">
            {categories.map((cat) => (
              <details
                key={cat.number}
                className="file-accordion rounded-2xl border overflow-hidden"
                style={{ borderColor: "rgba(162,140,117,0.18)" }}
              >
                <summary
                  className="cursor-pointer select-none"
                  style={{
                    background:
                      "linear-gradient(135deg, #1a000c 0%, #0c0004 100%)",
                  }}
                >
                  <div className="px-7 py-5 flex items-center gap-5">
                    <span
                      className="font-display text-2xl font-light flex-shrink-0"
                      style={{ color: "rgba(162,140,117,0.3)", minWidth: "2.25rem" }}
                    >
                      {cat.number}
                    </span>

                    <div className="flex-1 min-w-0">
                      <h3
                        className="font-display text-lg font-light leading-tight"
                        style={{ color: "#fffdf6" }}
                      >
                        {cat.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 flex-shrink-0">
                      {cat.alert && (
                        <span
                          className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium"
                          style={{
                            color: "#e8a87c",
                            background: "rgba(232,168,124,0.1)",
                            border: "1px solid rgba(232,168,124,0.25)",
                          }}
                        >
                          <AlertTriangle size={10} />
                          Requires separation
                        </span>
                      )}
                      <span
                        className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium"
                        style={{
                          color: "#a28c75",
                          background: "rgba(162,140,117,0.1)",
                          border: "1px solid rgba(162,140,117,0.22)",
                        }}
                      >
                        {cat.docs.length} documents
                      </span>
                      <div
                        className="file-chevron w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{
                          background: "rgba(162,140,117,0.08)",
                          border: "1px solid rgba(162,140,117,0.18)",
                        }}
                      >
                        <ChevronDown size={14} style={{ color: "#a28c75" }} />
                      </div>
                    </div>
                  </div>
                </summary>

                <div
                  style={{
                    background:
                      "linear-gradient(180deg, #110006 0%, #0c0004 100%)",
                    borderTop: "1px solid rgba(162,140,117,0.1)",
                  }}
                >
                  <div className="px-7 py-7 space-y-5">
                    {cat.alert && (
                      <div
                        className="flex items-start gap-3 rounded-xl p-4"
                        style={{
                          background: "rgba(232,168,124,0.07)",
                          border: "1px solid rgba(232,168,124,0.22)",
                        }}
                      >
                        <AlertTriangle
                          size={15}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: "#e8a87c" }}
                        />
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "rgba(232,168,124,0.9)" }}
                        >
                          {cat.alert}
                        </p>
                      </div>
                    )}

                    <ul className="space-y-2.5">
                      {cat.docs.map((doc) => (
                        <li
                          key={doc}
                          className="flex items-start gap-3 text-sm"
                          style={{ color: "rgba(255,253,246,0.65)" }}
                        >
                          <span
                            className="flex-shrink-0 w-1 h-1 rounded-full mt-2"
                            style={{ background: "#a28c75" }}
                          />
                          {doc}
                        </li>
                      ))}
                    </ul>

                    {cat.note && (
                      <p
                        className="text-xs leading-relaxed pt-4 border-t"
                        style={{
                          color: "rgba(162,140,117,0.65)",
                          borderColor: "rgba(162,140,117,0.1)",
                        }}
                      >
                        {cat.note}
                      </p>
                    )}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* ── Files That Must Be Stored Separately ── */}
        <div>
          <div className="flex items-center gap-4 mb-3">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              Files That Must Be Stored Separately
            </h2>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(162,140,117,0.15)" }}
            />
          </div>
          <p
            className="text-sm mb-8"
            style={{ color: "rgba(255,253,246,0.4)" }}
          >
            These three categories must be physically or digitally separated from the
            general personnel file. Co-mingling them is a compliance violation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Medical Records */}
            <div
              className="rounded-2xl border p-6 flex flex-col gap-4"
              style={{
                background: "rgba(232,168,124,0.04)",
                borderColor: "rgba(232,168,124,0.22)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(232,168,124,0.1)",
                  border: "1px solid rgba(232,168,124,0.28)",
                }}
              >
                <Lock size={18} style={{ color: "#e8a87c" }} />
              </div>
              <div>
                <p
                  className="text-xs tracking-[0.22em] uppercase mb-1.5"
                  style={{ color: "rgba(232,168,124,0.6)" }}
                >
                  ADA Requirement
                </p>
                <h3
                  className="font-display text-xl font-light mb-2"
                  style={{ color: "#fffdf6" }}
                >
                  Medical Records
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,253,246,0.5)" }}
                >
                  All medical documents — FMLA forms, doctor&apos;s notes, ADA
                  accommodations, vaccine records, workers&apos; comp — must be in a
                  completely separate, locked file. This is a federal requirement with
                  no exceptions.
                </p>
              </div>
              <div
                className="mt-auto pt-4 border-t"
                style={{ borderColor: "rgba(232,168,124,0.15)" }}
              >
                <p className="text-xs leading-relaxed" style={{ color: "rgba(232,168,124,0.65)" }}>
                  Digital: separate folder, owner-only access. Paper: sealed envelope
                  in a separate locked drawer.
                </p>
              </div>
            </div>

            {/* I-9 Forms */}
            <div
              className="rounded-2xl border p-6 flex flex-col gap-4"
              style={{
                background: "rgba(162,140,117,0.04)",
                borderColor: "rgba(162,140,117,0.2)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(162,140,117,0.1)",
                  border: "1px solid rgba(162,140,117,0.28)",
                }}
              >
                <Shield size={18} style={{ color: "#a28c75" }} />
              </div>
              <div>
                <p
                  className="text-xs tracking-[0.22em] uppercase mb-1.5"
                  style={{ color: "rgba(162,140,117,0.6)" }}
                >
                  USCIS Guidance
                </p>
                <h3
                  className="font-display text-xl font-light mb-2"
                  style={{ color: "#fffdf6" }}
                >
                  I-9 Forms
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,253,246,0.5)" }}
                >
                  Form I-9 (Employment Eligibility Verification) should be kept in
                  its own separate binder — not inside individual personnel folders.
                  This keeps government audits cleaner and limits exposure of other
                  employee records.
                </p>
              </div>
              <div
                className="mt-auto pt-4 border-t"
                style={{ borderColor: "rgba(162,140,117,0.15)" }}
              >
                <p className="text-xs leading-relaxed" style={{ color: "rgba(162,140,117,0.65)" }}>
                  One I-9 binder for all employees, ordered alphabetically, separate
                  from all personnel folders.
                </p>
              </div>
            </div>

            {/* Active Investigations */}
            <div
              className="rounded-2xl border p-6 flex flex-col gap-4"
              style={{
                background: "rgba(162,140,117,0.04)",
                borderColor: "rgba(162,140,117,0.15)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(162,140,117,0.1)",
                  border: "1px solid rgba(162,140,117,0.22)",
                }}
              >
                <AlertCircle size={18} style={{ color: "#a28c75" }} />
              </div>
              <div>
                <p
                  className="text-xs tracking-[0.22em] uppercase mb-1.5"
                  style={{ color: "rgba(162,140,117,0.6)" }}
                >
                  Best Practice
                </p>
                <h3
                  className="font-display text-xl font-light mb-2"
                  style={{ color: "#fffdf6" }}
                >
                  Active Investigations
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,253,246,0.5)" }}
                >
                  Harassment, discrimination, or hostile workplace investigation
                  records should be secured separately from the general file —
                  accessible only to the owner or designated HR contact to protect
                  the integrity of the process.
                </p>
              </div>
              <div
                className="mt-auto pt-4 border-t"
                style={{ borderColor: "rgba(162,140,117,0.12)" }}
              >
                <p className="text-xs leading-relaxed" style={{ color: "rgba(162,140,117,0.65)" }}>
                  Store by case number (not employee name) in a separate
                  password-protected folder or physical lockbox.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Storage System Setup ── */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              Setting Up Your Storage System
            </h2>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(162,140,117,0.15)" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Digital */}
            <div
              className="rounded-2xl border p-7"
              style={{
                background: "rgba(162,140,117,0.04)",
                borderColor: "rgba(162,140,117,0.15)",
              }}
            >
              <p
                className="text-xs tracking-[0.28em] uppercase mb-6"
                style={{ color: "rgba(162,140,117,0.55)" }}
              >
                Digital Setup
              </p>
              <ul className="space-y-5">
                {(
                  [
                    [
                      "Platform",
                      "Use a secure HRIS platform or Google Drive with folder-level permissions — not a personal device or unprotected shared drive.",
                    ],
                    [
                      "Naming convention",
                      "LastName_FirstName_Role (e.g., Evans_Ashley_PCC) — consistent across all employees.",
                    ],
                    [
                      "Folder structure",
                      "One top-level folder per employee with subfolders for each of the 6 categories. Never dump everything into one folder.",
                    ],
                    [
                      "Access permissions",
                      "Medical folder: owner only. Payroll: owner + bookkeeper. General file: owner + manager.",
                    ],
                    [
                      "Activity logging",
                      "Enable file activity logs and version history so you have an audit trail of who accessed or changed what.",
                    ],
                    [
                      "Backup",
                      "Encrypt and back up all employee files at minimum quarterly — offsite or to a secure cloud backup.",
                    ],
                  ] as [string, string][]
                ).map(([label, detail]) => (
                  <li key={label} className="flex flex-col gap-1">
                    <span
                      className="text-xs font-medium tracking-wide"
                      style={{ color: "#a28c75" }}
                    >
                      {label}
                    </span>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,253,246,0.5)" }}
                    >
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Paper */}
            <div
              className="rounded-2xl border p-7"
              style={{
                background: "rgba(162,140,117,0.04)",
                borderColor: "rgba(162,140,117,0.15)",
              }}
            >
              <p
                className="text-xs tracking-[0.28em] uppercase mb-6"
                style={{ color: "rgba(162,140,117,0.55)" }}
              >
                Paper Setup
              </p>
              <ul className="space-y-5">
                {(
                  [
                    [
                      "Individual folders",
                      "One hanging folder per employee — tabbed with last name, role, and hire date visible on the front.",
                    ],
                    [
                      "Category dividers",
                      "Tab dividers inside each folder for each of the 6 categories. Do not keep all documents loose in one pocket.",
                    ],
                    [
                      "Medical separation",
                      "Medical documents go in a separate sealed envelope, stored in a separate locked filing drawer — not inside the main folder.",
                    ],
                    [
                      "I-9 binder",
                      "All I-9 forms in one separate binder, alphabetical order — never tucked inside the individual employee folder.",
                    ],
                    [
                      "Lock & access",
                      "Personnel files locked at all times. Access is logged. Limit to authorized staff only — never left unattended or unsecured.",
                    ],
                    [
                      "Cover sheet",
                      "A front-of-folder cover sheet listing hire date, role, emergency contact, and key dates (next review, license expirations).",
                    ],
                  ] as [string, string][]
                ).map(([label, detail]) => (
                  <li key={label} className="flex flex-col gap-1">
                    <span
                      className="text-xs font-medium tracking-wide"
                      style={{ color: "#a28c75" }}
                    >
                      {label}
                    </span>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,253,246,0.5)" }}
                    >
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Compliance Traps ── */}
        <div>
          <div className="flex items-center gap-4 mb-3">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              Common Compliance Traps
            </h2>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(162,140,117,0.15)" }}
            />
          </div>
          <p
            className="text-sm mb-8"
            style={{ color: "rgba(255,253,246,0.4)" }}
          >
            These mistakes come up repeatedly in aesthetic practices — each carries
            real legal and regulatory risk.
          </p>

          <div className="space-y-4">
            {[
              {
                trap: "Medical documents filed inside the general personnel folder",
                fix: "Move all medical documents to a completely separate, locked file. This is a federal ADA requirement — not optional.",
              },
              {
                trap: "Vaccine cards clipped to a performance review",
                fix: "Vaccine cards are medical records. Remove and file in the designated medical folder immediately.",
              },
              {
                trap: "Employee folders labeled with notes like 'Ashley – Attendance Issues' visible in a shared drive",
                fix: "Use neutral naming conventions and restrict access. Identifying an employee alongside a disciplinary issue in an accessible location is a privacy violation.",
              },
              {
                trap: "Expired CPR or laser certifications on file with no expiration tracking system",
                fix: "Build a certification expiration tracker — a spreadsheet works. Set 60-day renewal reminders for every license and certification on file.",
              },
              {
                trap: "Shredding or deleting terminated employee files within 1–2 years of separation",
                fix: "Federal retention requirements extend to 7+ years for most categories. Write the required retention end date on every terminated file before archiving and never purge without checking.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border overflow-hidden"
                style={{ borderColor: "rgba(162,140,117,0.12)" }}
              >
                <div
                  className="px-6 py-4 flex items-start gap-4"
                  style={{
                    background: "rgba(200,70,70,0.06)",
                    borderBottom: "1px solid rgba(162,140,117,0.1)",
                  }}
                >
                  <span
                    className="flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded mt-0.5"
                    style={{
                      background: "rgba(200,70,70,0.15)",
                      color: "#e88080",
                      border: "1px solid rgba(200,70,70,0.25)",
                    }}
                  >
                    ✗ Trap
                  </span>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,253,246,0.7)" }}
                  >
                    {item.trap}
                  </p>
                </div>
                <div
                  className="px-6 py-4 flex items-start gap-4"
                  style={{ background: "rgba(140,200,168,0.03)" }}
                >
                  <span
                    className="flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded mt-0.5"
                    style={{
                      background: "rgba(143,201,168,0.12)",
                      color: "#8fc9a8",
                      border: "1px solid rgba(143,201,168,0.25)",
                    }}
                  >
                    ✓ Fix
                  </span>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,253,246,0.55)" }}
                  >
                    {item.fix}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Retention Schedule ── */}
        <div>
          <div className="flex items-center gap-4 mb-3">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              Retention Schedule
            </h2>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(162,140,117,0.15)" }}
            />
          </div>
          <p
            className="text-sm mb-8"
            style={{ color: "rgba(255,253,246,0.4)" }}
          >
            How long to keep each file category after an employee separates.
          </p>

          <div
            className="rounded-2xl border overflow-hidden"
            style={{ borderColor: "rgba(162,140,117,0.18)" }}
          >
            {retentionSchedule.map((item, i) => (
              <div
                key={item.category}
                className="flex flex-col md:flex-row md:items-center gap-3 px-7 py-5"
                style={{
                  background:
                    i % 2 === 0
                      ? "rgba(255,253,246,0.02)"
                      : "transparent",
                  borderBottom:
                    i < retentionSchedule.length - 1
                      ? "1px solid rgba(162,140,117,0.08)"
                      : "none",
                }}
              >
                <span
                  className="font-display text-sm font-light flex-shrink-0 md:w-52"
                  style={{ color: "#fffdf6" }}
                >
                  {item.category}
                </span>
                <span
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "rgba(255,253,246,0.5)" }}
                >
                  {item.period}
                </span>
                <span
                  className="text-xs px-2.5 py-1 rounded-md font-medium tracking-wide flex-shrink-0 w-fit"
                  style={{
                    color: "rgba(162,140,117,0.8)",
                    background: "rgba(162,140,117,0.08)",
                    border: "1px solid rgba(162,140,117,0.18)",
                  }}
                >
                  {item.law}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs mt-4" style={{ color: "rgba(255,253,246,0.28)" }}>
            Some states have retention requirements that exceed federal minimums.
            Verify with a licensed employment attorney for your specific state.
          </p>
        </div>

        {/* ── Maintenance Plan ── */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              Maintenance Plan
            </h2>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(162,140,117,0.15)" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {maintenanceBlocks.map((block) => (
              <div
                key={block.cadence}
                className="rounded-xl border p-6"
                style={{
                  background: block.bg,
                  borderColor: block.border,
                }}
              >
                <p
                  className="text-xs tracking-[0.25em] uppercase mb-4"
                  style={{ color: block.color }}
                >
                  {block.cadence}
                </p>
                <ul className="space-y-2.5">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm"
                      style={{ color: "rgba(255,253,246,0.6)" }}
                    >
                      <span
                        className="flex-shrink-0 mt-2 w-1 h-1 rounded-full"
                        style={{ background: block.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Legal disclaimer ── */}
        <div
          className="rounded-2xl border p-7"
          style={{
            background: "rgba(162,140,117,0.02)",
            borderColor: "rgba(162,140,117,0.1)",
          }}
        >
          <p
            className="text-xs leading-relaxed"
            style={{ color: "rgba(255,253,246,0.3)" }}
          >
            <strong style={{ color: "rgba(255,253,246,0.45)" }}>
              Disclaimer:
            </strong>{" "}
            This guide is intended as general educational content and does not
            constitute legal advice. Employment record requirements vary by state,
            industry, and practice size. Consult a licensed employment attorney or
            qualified HR professional familiar with the laws in your state before
            establishing your file management policies.
          </p>
        </div>

      </div>
    </div>
  );
}
