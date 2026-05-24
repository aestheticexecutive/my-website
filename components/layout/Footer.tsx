import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-warm-950 text-warm-400 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center text-warm-950 text-sm font-semibold font-display">
                AE
              </span>
              <span className="font-display text-lg font-medium text-cream tracking-wide">
                Aesthetic Executive
              </span>
            </div>
            <p className="text-sm text-warm-500 leading-relaxed max-w-xs">
              Premium business resources for aesthetic practice owners and
              managers. Elevate your practice. Grow your business.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-cream text-sm font-medium tracking-widest uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About" },
                { href: "/pricing", label: "Pricing" },
                { href: "/sign-in", label: "Member Login" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-500 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-cream text-sm font-medium tracking-widest uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/refund", label: "Refund Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-500 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warm-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-600">
            © {new Date().getFullYear()} Aesthetic Executive. All rights reserved.
          </p>
          <p className="text-xs text-warm-600">
            Designed for aesthetic medicine professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}
