import Link from "next/link";

function IconSvg({
  size = 24,
  className,
  children,
}: {
  size?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

function InstagramIcon(props: { size?: number; className?: string }) {
  return (
    <IconSvg {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </IconSvg>
  );
}

function TikTokIcon(props: { size?: number; className?: string }) {
  return (
    <IconSvg {...props}>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </IconSvg>
  );
}

const socialLinks = [
  { href: "https://www.instagram.com/aestheticexecutive/", label: "Instagram", Icon: InstagramIcon },
  { href: "https://www.tiktok.com/@aestheticexecutive", label: "TikTok", Icon: TikTokIcon },
];

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
                { href: "/contact", label: "Contact" },
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
          <div className="flex items-center gap-5 order-first sm:order-none">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-warm-500 hover:text-gold-400 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-xs text-warm-600">
            Designed for aesthetic medicine professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}
