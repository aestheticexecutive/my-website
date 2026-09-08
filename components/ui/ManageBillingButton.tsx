"use client";

import { useState } from "react";

interface ManageBillingButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function ManageBillingButton({ className, children }: ManageBillingButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleClick() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/billing-portal", { method: "POST" });
      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.url) {
        setError(data?.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      window.location.href = data.url;
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className={`${className ?? ""} disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        {loading ? "Opening billing portal..." : children}
      </button>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
