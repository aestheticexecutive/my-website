"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

function Eyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p className={`text-[#a28c75] text-[10px] font-sans font-medium tracking-[0.35em] uppercase mb-4 ${center ? "text-center" : ""}`}>
      {children}
    </p>
  );
}

const perks = [
  "Early access before membership opens to the public",
  "Exclusive founders pricing, locked in for as long as you stay a member",
  "First look at the resource library as it goes live",
];

interface WaitlistForm {
  fullName: string;
  practiceName: string;
  practiceLocation: string;
  email: string;
  phone: string;
  notes: string;
}

const emptyForm: WaitlistForm = {
  fullName: "",
  practiceName: "",
  practiceLocation: "",
  email: "",
  phone: "",
  notes: "",
};

const inputClasses =
  "w-full h-11 px-4 bg-[#0c0004] border border-[#a28c75]/25 rounded-lg text-sm text-[#fffdf6] outline-none focus:border-[#a28c75]/60 transition-colors";
const labelClasses =
  "block text-xs font-sans font-medium tracking-[0.1em] uppercase text-[#fffdf6]/40 mb-2";

export default function WaitlistPage() {
  const [form, setForm] = useState<WaitlistForm>(emptyForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField<K extends keyof WaitlistForm>(field: K, value: WaitlistForm[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div className="bg-[#0c0004] min-h-screen">
      <div className="max-w-2xl mx-auto px-6 pt-40 pb-28">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#a28c75]/30 bg-[#a28c75]/10 mb-6">
            <Sparkles size={12} className="text-[#a28c75]" />
            <span className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#a28c75]">
              Membership — Coming Soon
            </span>
          </div>
          <Eyebrow center>Aesthetic Executive</Eyebrow>
          <h1 className="font-display text-[clamp(2.4rem,6vw,4rem)] font-normal text-[#fffdf6] leading-[1.05] mb-6">
            Get on the <em className="italic text-[#c8b3a3]">VIP List</em>
          </h1>
          <p className="font-sans font-light text-[#fffdf6]/50 text-lg leading-relaxed max-w-lg mx-auto">
            Membership isn&apos;t open to the public yet — but the list is. Join now
            for early access and exclusive founders pricing the moment we launch.
          </p>
        </div>

        <div className="border border-[#a28c75]/20 rounded-2xl p-8 md:p-10 bg-[#130007]">
          <ul className="space-y-3 mb-8">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <CheckCircle2 size={15} className="text-[#a28c75] flex-shrink-0 mt-0.5" />
                <span className="font-sans font-light text-sm text-[#fffdf6]/60">{perk}</span>
              </li>
            ))}
          </ul>

          {status === "success" ? (
            <div className="text-center py-6">
              <CheckCircle2 size={32} className="text-[#a28c75] mx-auto mb-4" />
              <h2 className="font-display text-2xl font-normal text-[#fffdf6] mb-2">
                You&apos;re on the list
              </h2>
              <p className="font-sans font-light text-sm text-[#fffdf6]/50">
                We&apos;ll reach out with early access and founders pricing details
                as soon as membership opens.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className={labelClasses}>
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  className={inputClasses}
                  placeholder="Your full name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="practiceName" className={labelClasses}>
                    Practice Name
                  </label>
                  <input
                    id="practiceName"
                    type="text"
                    required
                    value={form.practiceName}
                    onChange={(e) => updateField("practiceName", e.target.value)}
                    className={inputClasses}
                    placeholder="Your practice's name"
                  />
                </div>
                <div>
                  <label htmlFor="practiceLocation" className={labelClasses}>
                    Practice Location
                  </label>
                  <input
                    id="practiceLocation"
                    type="text"
                    required
                    value={form.practiceLocation}
                    onChange={(e) => updateField("practiceLocation", e.target.value)}
                    className={inputClasses}
                    placeholder="City, State"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Best Contact Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={inputClasses}
                    placeholder="you@practice.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className={inputClasses}
                    placeholder="(555) 555-5555"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="notes" className={labelClasses}>
                  Anything else I should know?
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  value={form.notes}
                  onChange={(e) => updateField("notes", e.target.value)}
                  className={`${inputClasses} h-auto py-3 resize-none`}
                  placeholder="Tell me a bit more about you and your practice — anything you think is worth knowing."
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full h-12 bg-[#a28c75] text-[#0c0004] text-sm font-medium rounded tracking-wide hover:bg-[#c8b3a3] transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Joining..." : "Join the VIP List"}
                {status !== "submitting" && <ArrowRight size={15} />}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
