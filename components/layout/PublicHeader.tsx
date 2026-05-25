"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
];

export function PublicHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-warm-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center text-warm-950 text-sm font-semibold font-display">
            AE
          </span>
          <span className="font-display text-lg font-medium text-warm-900 tracking-wide hidden sm:block">
            Aesthetic Executive
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm tracking-wide transition-colors",
                pathname === link.href
                  ? "text-warm-900 font-medium"
                  : "text-warm-600 hover:text-warm-900"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth actions */}
        <div className="hidden md:flex items-center gap-4">
          <Show when="signed-out">
            <SignInButton>
              <button
                type="button"
                className="text-sm text-warm-600 hover:text-warm-900 tracking-wide transition-colors"
              >
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button
                type="button"
                className="h-9 px-5 bg-gold-400 text-warm-950 text-sm font-medium rounded tracking-wide hover:bg-gold-500 transition-colors inline-flex items-center"
              >
                Sign Up
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <Link
              href="/members/dashboard"
              className="text-sm text-warm-600 hover:text-warm-900 tracking-wide transition-colors"
            >
              Member Area
            </Link>
            <UserButton />
          </Show>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-warm-700 hover:text-warm-900 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-b border-warm-200 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-warm-700 hover:text-warm-900 py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-warm-200 flex flex-col gap-3">
            <Show when="signed-out">
              <SignInButton>
                <button
                  type="button"
                  className="text-sm text-warm-700 hover:text-warm-900 py-1 text-left"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button
                  type="button"
                  className="h-9 px-5 bg-gold-400 text-warm-950 text-sm font-medium rounded tracking-wide hover:bg-gold-500 transition-colors inline-flex items-center justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <Link
                href="/members/dashboard"
                className="text-sm text-warm-700 hover:text-warm-900 py-1"
                onClick={() => setMobileOpen(false)}
              >
                Member Area
              </Link>
              <UserButton />
            </Show>
          </div>
        </div>
      )}
    </header>
  );
}
