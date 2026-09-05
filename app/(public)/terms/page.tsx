import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Aesthetic Executive",
  description:
    "The terms governing your use of Aesthetic Executive's membership, resources, and consulting services.",
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: (
      <p>By creating an account, purchasing a membership, booking a one-on-one session, or otherwise using Aesthetic Executive (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;), you agree to be bound by these Terms of Service. If you don&apos;t agree to these terms, please don&apos;t use our services.</p>
    ),
  },
  {
    id: "description",
    title: "2. Description of Service",
    body: (
      <p>Aesthetic Executive provides business resources, templates, interactive tools, guides, webinars, courses, and consulting services for aesthetic and wellness practice owners and managers. Access to certain features requires an active membership.</p>
    ),
  },
  {
    id: "membership-billing",
    title: "3. Membership & Billing",
    body: (
      <>
        <p>Memberships run on a rolling 12-month term from your sign-up date and automatically renew unless canceled before the renewal date. If you cancel, you retain access through the end of your current paid period.</p>
        <p className="mt-3">All sales are final. Once a payment has processed — including a renewal — it is non-refundable. Full billing, cancellation, and refund details are set out in our{" "}
          <Link href="/refund" className="text-gold-600 underline underline-offset-2 hover:text-gold-700">
            Refund Policy
          </Link>
          , which is part of these Terms.
        </p>
        <p className="mt-3">We may change membership pricing from time to time. Any pricing change will apply starting with your next renewal and won&apos;t affect the period you&apos;ve already paid for.</p>
      </>
    ),
  },
  {
    id: "one-on-one",
    title: "4. One-on-One Sessions & Project-Based Work",
    body: (
      <p>One-on-one consulting sessions are billed for the full scheduled duration regardless of late arrival, early ending, no-shows, or cancellations made within 24 hours of the session. Project-based engagements are billed at 100% of cost at project start unless otherwise agreed in writing. Full details are set out in our{" "}
        <Link href="/refund" className="text-gold-600 underline underline-offset-2 hover:text-gold-700">
          Refund Policy
        </Link>.
      </p>
    ),
  },
  {
    id: "payment-method",
    title: "5. Payment Method on File",
    body: (
      <p>A valid credit card must be kept on file to process membership payments, one-on-one session fees (charged upon booking the session), and project-based invoices. By using our services, you authorize us to charge the card on file for all applicable fees.</p>
    ),
  },
  {
    id: "intellectual-property",
    title: "6. Intellectual Property",
    body: (
      <>
        <p>All templates, checklists, guides, courses, and other content available through Aesthetic Executive are owned by us or our licensors and protected by copyright and other intellectual property laws.</p>
        <p className="mt-3">As a member, you&apos;re granted a personal, non-exclusive, non-transferable license to use this content for your own practice. You may not resell, redistribute, publicly republish, or share member content or account access with anyone outside your own organization.</p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "7. Acceptable Use",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>You&apos;re responsible for keeping your login credentials confidential and for all activity under your account</li>
        <li>Accounts are for use by you and your own practice — sharing a single membership across unrelated businesses isn&apos;t permitted</li>
        <li>You agree not to scrape, copy at scale, or use automated tools to extract content from the platform</li>
        <li>You agree not to use the service for any unlawful purpose or in a way that infringes on the rights of others</li>
      </ul>
    ),
  },
  {
    id: "no-guarantee",
    title: "8. No Guarantee of Results",
    body: (
      <p>Aesthetic Executive provides education, resources, tools, and strategic guidance — we don&apos;t guarantee any specific business outcome, including revenue, patient volume, or growth results. Your results depend on many factors outside our control, including how the strategies and tools are implemented in your practice.</p>
    ),
  },
  {
    id: "not-professional-advice",
    title: "9. Not Professional Advice",
    body: (
      <p>Content provided through Aesthetic Executive is for general business education and informational purposes only. It is not legal, financial, tax, medical, or clinical advice. You should consult your own qualified professionals before making decisions based on anything you access through our platform.</p>
    ),
  },
  {
    id: "liability",
    title: "10. Limitation of Liability",
    body: (
      <p>To the fullest extent permitted by law, Aesthetic Executive and its founder are not liable for any indirect, incidental, or consequential damages arising from your use of our services. Our total liability for any claim relating to our services is limited to the amount you paid us in the 12 months prior to the claim.</p>
    ),
  },
  {
    id: "termination",
    title: "11. Termination",
    body: (
      <p>We may suspend or terminate your access to Aesthetic Executive if you violate these Terms. You may cancel your own membership at any time as described in Section 3 and our{" "}
        <Link href="/refund" className="text-gold-600 underline underline-offset-2 hover:text-gold-700">
          Refund Policy
        </Link>.
      </p>
    ),
  },
  {
    id: "changes",
    title: "12. Changes to These Terms",
    body: (
      <p>We may update these Terms from time to time. If we make material changes, we&apos;ll update the &quot;Last updated&quot; date below and, where appropriate, notify you directly. Continuing to use our services after a change takes effect means you accept the revised Terms.</p>
    ),
  },
  {
    id: "governing-law",
    title: "13. Governing Law",
    body: (
      <p>These Terms are governed by the laws of the State of Ohio, without regard to conflict-of-law principles.</p>
    ),
  },
  {
    id: "contact",
    title: "14. Contact Us",
    body: (
      <p>
        Questions about these Terms? Reach us at{" "}
        <a href="mailto:aestheticexecutivekyla@gmail.com" className="text-gold-600 underline underline-offset-2 hover:text-gold-700">
          aestheticexecutivekyla@gmail.com
        </a>.
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.3em] uppercase text-gold-600 mb-4">
          Legal
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-light text-warm-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-warm-500 mb-14">
          Last updated: August 16, 2026
        </p>

        <p className="text-warm-600 leading-relaxed mb-14 text-[15px]">
          These Terms of Service govern your access to and use of Aesthetic Executive,
          including our membership, resource library, courses, and one-on-one consulting
          services. Please also review our{" "}
          <Link href="/refund" className="text-gold-600 underline underline-offset-2 hover:text-gold-700">
            Refund Policy
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-gold-600 underline underline-offset-2 hover:text-gold-700">
            Privacy Policy
          </Link>
          , which are incorporated into these Terms by reference.
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
