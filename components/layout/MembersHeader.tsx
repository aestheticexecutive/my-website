"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Video,
  BookOpen,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/members/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/members/templates", label: "Templates", icon: FileText },
  { href: "/members/webinars", label: "Webinars", icon: Video },
  { href: "/members/resources", label: "Resources", icon: BookOpen },
];

export function MembersHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-warm-950 border-b border-warm-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/members/dashboard" className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center text-warm-950 text-sm font-semibold font-display">
            AE
          </span>
          <span className="font-display text-base font-medium text-cream tracking-wide hidden sm:block">
            Aesthetic Executive
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-2 h-9 px-4 rounded text-sm tracking-wide transition-colors",
                  active
                    ? "bg-warm-800 text-cream"
                    : "text-warm-400 hover:text-cream hover:bg-warm-900"
                )}
              >
                <Icon size={15} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* User button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/"
            className="text-xs text-warm-500 hover:text-warm-300 tracking-wide transition-colors"
          >
            ← Public Site
          </Link>
          <UserButton />
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-warm-400 hover:text-cream p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-warm-950 border-b border-warm-800 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-2.5 h-10 px-3 rounded text-sm tracking-wide transition-colors",
                  active
                    ? "bg-warm-800 text-cream"
                    : "text-warm-400 hover:text-cream hover:bg-warm-900"
                )}
                onClick={() => setMobileOpen(false)}
              >
                <Icon size={15} />
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-warm-800 flex items-center justify-between">
            <Link
              href="/"
              className="text-xs text-warm-500 hover:text-warm-300 tracking-wide"
            >
              ← Public Site
            </Link>
            <UserButton />
          </div>
        </div>
      )}
    </header>
  );
}
