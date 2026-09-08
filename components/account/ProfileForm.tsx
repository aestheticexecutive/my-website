"use client";

import { useState, FormEvent } from "react";
import { Check } from "lucide-react";

interface ProfileFormProps {
  initialFirstName: string;
  initialLastName: string;
  initialPracticeName: string;
  initialPracticeAddress: string;
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

export function ProfileForm({
  initialFirstName,
  initialLastName,
  initialPracticeName,
  initialPracticeAddress,
}: ProfileFormProps) {
  const [form, setForm] = useState<FormState>({
    firstName: initialFirstName,
    lastName: initialLastName,
    practiceName: initialPracticeName,
    practiceAddress: initialPracticeAddress,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "saved" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Editing after a successful save clears the "Saved" confirmation so it
    // doesn't linger next to changes that haven't actually been saved yet.
    if (status === "saved") setStatus("idle");
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
      setStatus("saved");
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
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
        />
      </div>

      {status === "error" && <p className="text-sm text-red-500">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting" || !allFieldsFilled}
        className="h-11 px-6 rounded-lg bg-warm-900 text-cream text-sm font-medium tracking-wide hover:bg-warm-800 transition-colors inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "saved" ? (
          <>
            <Check size={15} />
            Saved
          </>
        ) : status === "submitting" ? (
          "Saving..."
        ) : (
          "Save Changes"
        )}
      </button>
    </form>
  );
}
