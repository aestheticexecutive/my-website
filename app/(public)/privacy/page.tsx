import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Aesthetic Executive",
  description:
    "How Aesthetic Executive collects, uses, and protects your information.",
};

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    body: (
      <>
        <p>We collect information you provide directly to us, information collected automatically when you use our services, and information from third parties who help us operate our platform.</p>
        <p className="font-medium text-warm-800 mt-4 mb-1">Information you provide</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Account information — your name, email address, and password when you create an account (handled through our authentication provider, Clerk)</li>
          <li>Billing information — your name, billing address, and payment details when you purchase a membership (processed directly by our payment processor, Stripe; we do not store your full card number)</li>
          <li>Content you submit — anything you enter into tools in the member library, such as checklists, templates, notes, or forms you build or fill out</li>
          <li>Communications — messages you send us for support, feedback, or inquiries</li>
        </ul>
        <p className="font-medium text-warm-800 mt-4 mb-1">Information collected automatically</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Usage data — pages visited, features used, and time spent on the site</li>
          <li>Device and log data — browser type, IP address, device identifiers, and referring URLs</li>
          <li>Cookies and similar technologies (see Section 4 below)</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>To create and maintain your account and provide access to the member library</li>
        <li>To process payments and manage your membership or subscription</li>
        <li>To save the content you create using our interactive tools so it's there when you return</li>
        <li>To communicate with you about your account, purchases, and support requests</li>
        <li>To send you product updates or educational content, where you&apos;ve opted in — you can unsubscribe at any time</li>
        <li>To monitor, maintain, and improve the site's performance and security</li>
        <li>To comply with legal obligations and enforce our Terms of Service</li>
      </ul>
    ),
  },
  {
    id: "how-we-share",
    title: "3. How We Share Your Information",
    body: (
      <>
        <p>We do not sell your personal information. We share information only in the following circumstances:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Service providers</strong> — with companies that perform services on our behalf, including Clerk (authentication and account management) and Stripe (payment processing). Each is bound by its own privacy and security obligations.</li>
          <li><strong>Legal requirements</strong> — if required to do so by law, or in the good-faith belief that disclosure is necessary to comply with a legal process, protect our rights, or protect the safety of our users or the public.</li>
          <li><strong>Business transfers</strong> — in connection with a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction, subject to the same protections described here.</li>
          <li><strong>With your consent</strong> — for any other purpose disclosed to you at the time we collect the information, or with your consent.</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "4. Cookies & Tracking Technologies",
    body: (
      <>
        <p>We use cookies and similar technologies to keep you signed in, remember your preferences, and understand how the site is used so we can improve it. Some of these are set by third-party services we rely on, such as our authentication and payment providers.</p>
        <p className="mt-3">Most browsers let you block or delete cookies through their settings. Blocking cookies may affect your ability to sign in or use certain features of the member library.</p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    body: (
      <p>We retain your information for as long as your account is active or as needed to provide you services, comply with our legal obligations, resolve disputes, and enforce our agreements. If you close your account, we&apos;ll delete or anonymize your personal information within a reasonable period, except where we&apos;re required to retain it for legal, tax, or accounting purposes.</p>
    ),
  },
  {
    id: "your-rights",
    title: "6. Your Rights & Choices",
    body: (
      <>
        <p>Depending on where you live, you may have the right to:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your information, subject to certain legal exceptions</li>
          <li>Opt out of marketing communications at any time by using the unsubscribe link in any email or contacting us directly</li>
          <li>Object to or restrict certain processing of your information</li>
        </ul>
        <p className="mt-3">To exercise any of these rights, contact us using the details in Section 9 below.</p>
      </>
    ),
  },
  {
    id: "security",
    title: "7. Data Security",
    body: (
      <p>We use administrative, technical, and physical safeguards designed to protect your information, and we rely on established, security-audited third parties (Clerk and Stripe) to handle authentication and payment data specifically. That said, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
    ),
  },
  {
    id: "childrens-privacy",
    title: "8. Children's Privacy",
    body: (
      <p>Aesthetic Executive is intended for business owners and professionals and is not directed at children. We do not knowingly collect personal information from anyone under 18. If you believe a child has provided us with personal information, please contact us and we will delete it.</p>
    ),
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    body: (
      <p>We may update this Privacy Policy from time to time. If we make material changes, we&apos;ll update the &quot;Last updated&quot; date below and, where appropriate, notify you directly. Your continued use of the site after a change becomes effective constitutes acceptance of the revised policy.</p>
    ),
  },
  {
    id: "contact",
    title: "10. Contact Us",
    body: (
      <p>
        If you have questions about this Privacy Policy or how we handle your information, contact us at{" "}
        <a href="mailto:privacy@aestheticexecutive.com" className="text-gold-600 underline underline-offset-2 hover:text-gold-700">
          privacy@aestheticexecutive.com
        </a>.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.3em] uppercase text-gold-600 mb-4">
          Legal
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-light text-warm-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-warm-500 mb-14">
          Last updated: August 16, 2026
        </p>

        <p className="text-warm-600 leading-relaxed mb-14 text-[15px]">
          Aesthetic Executive (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is
          committed to protecting the personal information you share with us. This Privacy
          Policy explains what information we collect, how we use it, and the choices you
          have — whether you&apos;re browsing the site, exploring a membership, or an active
          member using the resource library.
        </p>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="font-display text-2xl font-light text-warm-900 mb-4">
                {section.title}
              </h2>
              <div className="text-warm-600 leading-relaxed text-[15px] space-y-3">
                {section.body}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
