import Link from "next/link";
import {
  ArrowLeft,
  FileWarning,
  Shield,
  Users2,
  ScaleIcon,
  ExternalLink,
  AlertTriangle,
  Clock,
  FileText,
  PenLine,
  ClipboardList,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employee Write-Up Guide | Aesthetic Executive",
};

const pillars = [
  {
    icon: Shield,
    title: "Protects the practice",
    why: "A contemporaneous, factual, signed record is your strongest defense if a termination is ever challenged or an unemployment claim is disputed. Without documentation, it's your word against theirs — with it, there's a clear timeline.",
  },
  {
    icon: Users2,
    title: "Protects the employee",
    why: "A write-up isn't just a paper trail for you — it tells the employee exactly what's expected, exactly what fell short, and exactly what needs to change, with a real chance to fix it before anything more serious happens.",
  },
  {
    icon: ScaleIcon,
    title: "Keeps discipline consistent",
    why: "Using the same form and process for every employee, every time, is what prevents the appearance — or the reality — of favoritism or discrimination. Consistency is what holds up under scrutiny.",
  },
  {
    icon: FileText,
    title: "Proves the pattern",
    why: "A single hallway conversation is easy to forget, deny, or dispute later. A dated, signed record is what proves a pattern existed and shows that any escalation was fair, proportionate, and not a surprise.",
  },
];

const whatToDocument = [
  "Attendance issues — tardiness, no-call/no-shows, excessive absences",
  "Conduct or behavior concerns, including anything unprofessional or disruptive",
  "HIPAA, safety, or compliance violations",
  "Harassment or misrepresentation of company values",
  "Falsified documentation or records",
  "Failure to follow established procedure",
  "Missed performance standards",
  "Any other policy violation",
];

const tips = [
  {
    icon: Clock,
    title: "Document immediately",
    body: "Write it down the same day, while the details — what happened, when, who was involved — are still accurate. Memory fades fast, and a write-up drafted a week later is easier to challenge.",
  },
  {
    icon: FileWarning,
    title: "Stick to facts, not feelings",
    body: "Describe specific, observable behavior and exact dates — not character judgments or generalizations. \"Clocked in 22 minutes late on 3 occasions\" holds up; \"has a bad attitude\" doesn't.",
  },
  {
    icon: AlertTriangle,
    title: "Reference prior warnings",
    body: "Note any previous verbal or written warnings on the same issue. That's what turns an isolated incident into a documented pattern — and what justifies escalating the disciplinary action.",
  },
  {
    icon: PenLine,
    title: "Get it signed — either way",
    body: "Have the employee sign to acknowledge the conversation happened. If they refuse, note the refusal on the form itself and still keep it in their file. A refusal doesn't undo the documentation.",
  },
];

export default function EmployeeWriteUpGuidePage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">
      {/* Hero header */}
      <div className="relative overflow-hidden border-b" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.7) 0%, transparent 70%)" }}
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
              style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)" }}
            >
              <FileWarning size={18} style={{ color: "#a28c75" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#a28c75" }}>
              Performance &amp; Conduct
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: "#fffdf6" }}>
            Documentation &amp; Write-Up Guide
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
            The behaviors that eventually lead to disciplinary action almost never come out of nowhere —
            they show up as small, out-of-the-ordinary moments first. Documenting them when they happen,
            not months later, is what protects your practice and gives every employee a fair, consistent
            path forward.
          </p>
        </div>
      </div>

      {/* Why it matters */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-4">
        <div
          className="rounded-2xl border p-8 md:p-10"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
            borderColor: "rgba(162,140,117,0.2)",
          }}
        >
          <p className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.5)" }}>
            Why it matters
          </p>
          <h2 className="font-display text-2xl font-light mb-4" style={{ color: "#fffdf6" }}>
            If it isn&apos;t written down, it didn&apos;t happen
          </h2>
          <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "rgba(255,253,246,0.5)" }}>
            It&apos;s tempting to let a small issue slide with a quiet word in the hallway — but undocumented
            conversations disappear. When behavior repeats, or eventually requires termination, an
            undocumented history leaves your practice exposed and leaves the employee blindsided by a
            consequence they never saw building. A brief, factual write-up — logged the day it happens —
            is what turns &quot;we talked to them about it&quot; into a real, defensible record.
          </p>
        </div>
      </div>

      {/* 4 pillars */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            What documentation does
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Four things a real write-up does at once
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
          A single form does more work than it looks like — for the practice, and for the employee.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-xl border p-7 flex flex-col gap-4"
                style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.12)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  <Icon size={16} style={{ color: "#a28c75" }} />
                </div>
                <h3 className="font-display text-lg font-light leading-snug" style={{ color: "#fffdf6" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>{p.why}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* What to document */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div
          className="rounded-2xl border p-8 md:p-10 flex flex-col md:flex-row md:items-start gap-8"
          style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)" }}
          >
            <AlertTriangle size={22} style={{ color: "#a28c75" }} />
          </div>
          <div className="flex-1">
            <p className="text-xs tracking-[0.22em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
              Out-of-the-ordinary behavior
            </p>
            <h3 className="font-display text-xl font-light mb-3" style={{ color: "#fffdf6" }}>
              If it made you pause, it&apos;s worth writing down
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,253,246,0.5)" }}>
              Not everything needs formal discipline — but anything that&apos;s out of the ordinary, or that
              could lead to disciplinary action if it repeats, is worth a note while it&apos;s fresh. Common
              categories include:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
              {whatToDocument.map((item) => (
                <li key={item} className="text-sm flex items-start gap-2" style={{ color: "rgba(255,253,246,0.55)" }}>
                  <span style={{ color: "#a28c75", flexShrink: 0 }}>·</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Running it well */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(162,140,117,0.5)" }}>
            Execution
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.12)" }} />
        </div>
        <h2 className="font-display text-3xl font-light mb-2" style={{ color: "#fffdf6" }}>
          Documenting it well
        </h2>
        <p className="text-sm mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
          The form is the framework. These habits are what make it hold up if it&apos;s ever needed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tips.map((tip) => {
            const Icon = tip.icon;
            return (
              <div
                key={tip.title}
                className="rounded-xl border p-6 flex items-start gap-4"
                style={{ background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)", borderColor: "rgba(162,140,117,0.12)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  <Icon size={16} style={{ color: "#a28c75" }} />
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1.5" style={{ color: "#fffdf6" }}>{tip.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.42)" }}>{tip.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA to the tool */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <Link
          href="/members/resources/staff/employee-write-up-form"
          className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[#a28c75]/40"
          style={{ background: "rgba(162,140,117,0.04)", borderColor: "rgba(162,140,117,0.15)" }}
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)" }}
            >
              <ClipboardList size={22} style={{ color: "#a28c75" }} />
            </div>
            <div className="flex-1">
              <p className="text-xs tracking-[0.22em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.5)" }}>
                Put it to work
              </p>
              <h3 className="font-display text-xl font-light mb-3" style={{ color: "#fffdf6" }}>
                Fill out and save a write-up for your next incident
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.5)" }}>
                Customize the warning levels, violation categories, and disciplinary actions to match your
                practice, fill in the details, and save it under the employee&apos;s name and the date. Print
                any of them as a clean, sign-off-ready document for the file.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
              >
                Open Employee Write-Up Form
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
