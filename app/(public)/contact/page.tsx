"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, ArrowRight, Mail } from "lucide-react";

function Eyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p className={`text-[#a28c75] text-[10px] font-sans font-medium tracking-[0.35em] uppercase mb-4 ${center ? "text-center" : ""}`}>
      {children}
    </p>
  );
}

interface ContactForm {
  fullName: string;
  phone: string;
  email: string;
  practiceName: string;
  practiceLocation: string;
  message: string;
}

const emptyForm: ContactForm = {
  fullName: "",
  phone: "",
  email: "",
  practiceName: "",
  practiceLocation: "",
  message: "",
};

const inputClasses =
  "w-full h-11 px-4 bg-[#170009] border border-[#a28c75]/25 rounded-lg text-sm text-[#fffdf6] outline-none focus:border-[#a28c75]/60 transition-colors";
const labelClasses =
  "block text-xs font-sans font-medium tracking-[0.1em] uppercase text-[#fffdf6]/40 mb-2";

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(emptyForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField<K extends keyof ContactForm>(field: K, value: ContactForm[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
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
    <div className="bg-[#170009] min-h-screen">
      <div className="max-w-2xl mx-auto px-6 pt-40 pb-28">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#a28c75]/30 bg-[#a28c75]/10 mb-6">
            <Mail size={12} className="text-[#a28c75]" />
            <span className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#a28c75]">
              Get in touch
            </span>
          </div>
          <Eyebrow center>Aesthetic Executive</Eyebrow>
          <h1 className="font-display text-[clamp(2.4rem,6vw,4rem)] font-normal text-[#fffdf6] leading-[1.05] mb-6">
            Contact <em className="italic text-[#c8b3a3]">Us</em>
          </h1>
          <p className="font-sans font-light text-[#fffdf6]/60 text-lg leading-relaxed max-w-lg mx-auto">
            Have a question, want to talk through something specific, or need
            help? Fill out the form below and we&apos;ll get back to you.
          </p>
        </div>

        <div className="border-2 border-[#a28c75] rounded-2xl p-8 md:p-10 bg-[#130007] shadow-[0_0_60px_-15px_rgba(162,140,117,0.4)]">
          {status === "success" ? (
            <div className="text-center py-6">
              <CheckCircle2 size={32} className="text-[#a28c75] mx-auto mb-4" />
              <h2 className="font-display text-2xl font-normal text-[#fffdf6] mb-2">
                Message sent
              </h2>
              <p className="font-sans font-light text-sm text-[#fffdf6]/60">
                Thanks for reaching out — we&apos;ll get back to you as soon as we can.
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
                  <label htmlFor="phone" className={labelClasses}>
                    Best Contact Phone
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
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="practiceName" className={labelClasses}>
                    Practice Name <span className="normal-case text-[#fffdf6]/25">(if applicable)</span>
                  </label>
                  <input
                    id="practiceName"
                    type="text"
                    value={form.practiceName}
                    onChange={(e) => updateField("practiceName", e.target.value)}
                    className={inputClasses}
                    placeholder="Your practice's name"
                  />
                </div>
                <div>
                  <label htmlFor="practiceLocation" className={labelClasses}>
                    Practice Location <span className="normal-case text-[#fffdf6]/25">(if applicable)</span>
                  </label>
                  <input
                    id="practiceLocation"
                    type="text"
                    value={form.practiceLocation}
                    onChange={(e) => updateField("practiceLocation", e.target.value)}
                    className={inputClasses}
                    placeholder="City, State"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClasses}>
                  What would you like to discuss?
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className={`${inputClasses} h-auto py-3 resize-none`}
                  placeholder="Your question, comment, or the reason you're reaching out — the more detail, the better we can help."
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
                {status === "submitting" ? "Sending..." : "Send Message"}
                {status !== "submitting" && <ArrowRight size={15} />}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
