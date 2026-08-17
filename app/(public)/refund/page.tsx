import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy | Aesthetic Executive",
  description:
    "Aesthetic Executive's billing, cancellation, and refund policy for memberships, one-on-one sessions, and project-based work.",
};

const sections = [
  {
    id: "all-sales-final",
    title: "1. All Sales Are Final",
    body: (
      <p>All purchases made through Aesthetic Executive — including membership fees, one-on-one consulting sessions, and project-based services — are final. Once a payment has been processed, it is non-refundable, except where required by applicable law.</p>
    ),
  },
  {
    id: "membership-renewal",
    title: "2. Membership Auto-Renewal & Cancellation",
    body: (
      <>
        <ul className="list-disc pl-5 space-y-1">
          <li>Memberships run on a rolling 12-month term starting from your original sign-up date, and automatically renew at the end of each term unless canceled.</li>
          <li>You may cancel your membership at any time. If you cancel, you&apos;ll continue to have full access through the end of your current paid membership period — we don&apos;t cut off access early.</li>
          <li>To avoid being charged for the next 12-month term, you must cancel <strong>before</strong> your renewal date. Cancellation requests received after a renewal payment has processed do not qualify for a refund of that payment — you&apos;ll have access through the end of that newly-renewed period instead.</li>
          <li>There are no partial refunds or credits for unused time within a membership period.</li>
        </ul>
      </>
    ),
  },
  {
    id: "one-on-one",
    title: "3. One-on-One Meetings",
    body: (
      <>
        <p>One-on-one sessions with Kyla are billed for the full duration of time booked, regardless of how the time is actually used. This protects the time reserved on her calendar for you.</p>
        <ul className="list-disc pl-5 space-y-1 mt-3">
          <li><strong>Late arrival</strong> — if you join late, you&apos;ll still be billed for the entire scheduled duration of the meeting.</li>
          <li><strong>Ending early</strong> — if the meeting ends before its scheduled time, you&apos;ll still be billed for the entire scheduled duration.</li>
          <li><strong>No-shows and late cancellations</strong> — if you don&apos;t show up, or cancel within 24 hours of your scheduled meeting, you&apos;ll be billed the full cost of the session.</li>
          <li><strong>Rescheduling</strong> — if you need to reschedule and give more than 24 hours&apos; notice, we&apos;re happy to move your session to a new time at no additional charge.</li>
        </ul>
      </>
    ),
  },
  {
    id: "project-based",
    title: "4. Project-Based Services",
    body: (
      <p>Project-based engagements are billed at 100% of the total project cost at the start of the project, unless a different payment structure has been specified in writing in advance.</p>
    ),
  },
  {
    id: "payment-method",
    title: "5. Payment Method on File",
    body: (
      <>
        <p>A valid credit card must be kept on file to process:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Membership payments (including auto-renewals)</li>
          <li>One-on-one meeting fees — charged the day of your scheduled session</li>
          <li>Project-based invoices</li>
        </ul>
        <p className="mt-3">By booking a membership, a one-on-one session, or a project, you authorize Aesthetic Executive to charge the card on file for the applicable amount, including renewals, no-show/late-cancellation fees, and full-duration meeting charges as described above.</p>
      </>
    ),
  },
  {
    id: "contact",
    title: "6. Questions About Billing",
    body: (
      <p>
        If you have a question about a charge on your account, contact us at{" "}
        <a href="mailto:aestheticexecutivekyla@gmail.com" className="text-gold-600 underline underline-offset-2 hover:text-gold-700">
          aestheticexecutivekyla@gmail.com
        </a>
        . For the full terms governing your use of Aesthetic Executive, see our{" "}
        <Link href="/terms" className="text-gold-600 underline underline-offset-2 hover:text-gold-700">
          Terms of Service
        </Link>
        .
      </p>
    ),
  },
];

export default function RefundPolicyPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.3em] uppercase text-gold-600 mb-4">
          Legal
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-light text-warm-900 mb-4">
          Refund Policy
        </h1>
        <p className="text-sm text-warm-500 mb-14">
          Last updated: August 16, 2026
        </p>

        <p className="text-warm-600 leading-relaxed mb-14 text-[15px]">
          Please read this policy carefully before purchasing a membership, booking a
          one-on-one session, or starting a project with Aesthetic Executive. By making a
          purchase, you agree to the terms below.
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
