import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-blush flex flex-col items-center justify-center px-4 py-16">
      <div className="mb-8 text-center">
        <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
          <span className="w-9 h-9 rounded-full bg-gold-400 flex items-center justify-center text-warm-950 text-sm font-semibold font-display">
            AE
          </span>
          <span className="font-display text-xl font-medium text-warm-900 tracking-wide">
            Aesthetic Executive
          </span>
        </Link>
        <p className="text-warm-600 text-sm">
          Welcome back. Sign in to access your member area.
        </p>
      </div>
      <SignIn />
    </div>
  );
}
