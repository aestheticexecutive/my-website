"use client";

import { useState, FormEvent } from "react";
import { ArrowRight } from "lucide-react";

interface OnboardingFormProps {
  initialFirstName: string;
  initialLastName: string;
}

interface FormState {
  firstName: string;
  lastName: string;
  practiceName: string;
  practiceAddress: string;
}

const inputClasses =
  "w-full h-11 px-4 bg-white border border-warm-200 rounded-lg text-sm text-warm-900 outline-none focus:border-gold-400 transition-colors";
const labelClasses =
  "block text-xs font-medium tracking-[0.1em] uppercase text-warm-500 mb-2";

export function OnboardingForm({ initialFirstName, initialLastName }: OnboardingFormProps) {
  const [form, setForm] = useState<FormState>({
    firstName: initialFirstName,
    lastName: initialLastName,
    practiceName: "",
    practiceAddress: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  const allFieldsFilled = Object.values(form).every((v) => v.trim().length > 0);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!allFieldsFilled) return;

    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/onboarding", {
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

      // Profile's saved - every account on this site is headed toward the
      // paid membership, so continue straight to checkout rather than
      // stopping at an intermediate page.
      const checkoutRes = await fetch("/api/checkout", { method: "POST" });
      const checkoutData = await checkoutRes.json().catch(() => null);
      if (checkoutRes.ok && checkoutData?.url) {
        window.location.href = checkoutData.url;
        return;
      }
      // Profile is already saved at this point - fall through to the
      // dashboard (which bounces to /pricing) rather than stranding them
      // on a broken checkout state.
      window.location.href = "/members/dashboard";
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div className="w-full max-w-md bg-white border border-warm-200 rounded-2xl p-8 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className={labelClasses}>
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              required
              value={form.firstName}
              onChange={(e) => updateField("firstName", e.target.value)}
              className={inputClasses}
              placeholder="Jane"
            />
          </div>
          <div>
            <label htmlFor="lastName" className={labelClasses}>
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              required
              value={form.lastName}
              onChange={(e) => updateField("lastName", e.target.value)}
              className={inputClasses}
              placeholder="Doe"
            />
          </div>
        </div>

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
          <label htmlFor="practiceAddress" className={labelClasses}>
            Practice Address
          </label>
          <input
            id="practiceAddress"
            type="text"
            required
            value={form.practiceAddress}
            onChange={(e) => updateField("practiceAddress", e.target.value)}
            className={inputClasses}
            placeholder="123 Main St, City, State ZIP"
          />
        </div>

        {status === "error" && <p className="text-sm text-red-500">{errorMessage}</p>}

        <button
          type="submit"
          disabled={status === "submitting" || !allFieldsFilled}
          className="w-full h-12 bg-gold-400 text-warm-950 text-sm font-medium rounded-lg tracking-wide hover:bg-gold-300 transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Saving..." : "Continue to Payment"}
          {status !== "submitting" && <ArrowRight size={15} />}
        </button>
      </form>
    </div>
  );
}
