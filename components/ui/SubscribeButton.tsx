"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

interface SubscribeButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function SubscribeButton({ className, children }: SubscribeButtonProps) {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleClick() {
    if (!isLoaded) return;

    if (!isSignedIn) {
      // A full page load, not router.push - avoids a client-side transition
      // serving a stale prefetched render of the sign-up page.
      window.location.href = "/sign-up";
      return;
    }

    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", { method: "POST" });

      if (res.status === 401) {
        router.push("/sign-in");
        return;
      }
      if (res.status === 403) {
        window.location.href = "/onboarding";
        return;
      }
      if (!res.ok) {
        setError("Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      setError("Something went wrong. Please try again.");
      setLoading(false);
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className={`${className ?? ""} disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        {loading ? "Redirecting to checkout..." : children}
      </button>
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
}
