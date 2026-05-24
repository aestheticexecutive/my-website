import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Target, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "About | Aesthetic Executive",
  description:
    "Learn about Aesthetic Executive's mission to support aesthetic practice owners with premium business resources.",
};

const values = [
  {
    icon: Target,
    title: "Clarity Over Complexity",
    description:
      "The business of aesthetics is complicated enough. We distill expert knowledge into clear, actionable frameworks you can implement immediately.",
  },
  {
    icon: Heart,
    title: "Built by Practitioners, for Practitioners",
    description:
      "Every resource in our library is developed with input from real aesthetic practice owners who have faced — and solved — the same challenges you're navigating.",
  },
  {
    icon: Lightbulb,
    title: "Practical Above Everything",
    description:
      "Theory is cheap. We focus on proven systems, done-for-you templates, and strategies that work in actual aesthetic practices across the country.",
  },
];

const teamMembers = [
  {
    name: "Alexandra Reed",
    role: "Founder & CEO",
    bio: "Former MedSpa owner with 12 years in aesthetic medicine. Built and sold two practices before founding Aesthetic Executive to solve the business education gap she experienced firsthand.",
    initials: "AR",
  },
  {
    name: "Dr. Marcus Chen",
    role: "Medical Director",
    bio: "Board-certified dermatologist and aesthetic physician with deep expertise in clinical compliance, FDA regulations, and treatment protocols.",
    initials: "MC",
  },
  {
    name: "Priya Nair",
    role: "Head of Content",
    bio: "Healthcare MBA with a background in healthcare operations consulting. Oversees all template development and expert webinar programming.",
    initials: "PN",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blush py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge variant="neutral" className="mb-6">
              Our Mission
            </Badge>
            <h1 className="font-display text-5xl md:text-6xl font-light text-warm-900 leading-tight mb-6">
              Closing the business education gap in aesthetic medicine
            </h1>
            <p className="text-lg text-warm-600 leading-relaxed">
              Aesthetic professionals receive rigorous clinical training — but almost
              zero education in running a business. Aesthetic Executive exists to
              change that, giving practice owners and managers access to the same
              caliber of business resources that were previously only available to
              enterprise health systems and well-funded startups.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-light text-warm-900 mb-6">
                Why we built this
              </h2>
              <div className="space-y-4 text-warm-600 leading-relaxed">
                <p>
                  When our founder opened her first MedSpa, she spent over $40,000 in
                  the first year on consultants, attorneys, and business coaches —
                  for knowledge that should have been readily accessible to any
                  serious practitioner.
                </p>
                <p>
                  She bootstrapped a second location using systems she built
                  herself, then sold both practices profitably. But she couldn&apos;t
                  stop thinking about the hundreds of injectors, PAs, and
                  physicians who were leaving their practices or staying stuck
                  because they lacked the business knowledge to move forward.
                </p>
                <p>
                  Aesthetic Executive is the membership she wished had existed.
                  Everything a practice owner needs — templates, webinars, guides,
                  compliance updates — under one roof, for less than a single hour
                  of consulting time.
                </p>
              </div>
            </div>

            <div className="bg-warm-950 rounded-2xl p-10 text-cream">
              <div className="space-y-8">
                {[
                  { number: "500+", label: "Active members" },
                  { number: "150+", label: "Templates in the library" },
                  { number: "80+", label: "Recorded webinars" },
                  { number: "$0", label: "Consulting fees saved per member (avg. $12K/year)" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-4xl font-light text-gold-400 mb-1">
                      {stat.number}
                    </p>
                    <p className="text-sm text-warm-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-blush py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-light text-warm-900 mb-3">
              Our values
            </h2>
            <p className="text-warm-600 max-w-md mx-auto">
              These principles guide every resource we create and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white rounded-xl p-8 border border-warm-200">
                  <div className="w-10 h-10 rounded-lg bg-gold-50 border border-gold-100 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-gold-600" />
                  </div>
                  <h3 className="font-display text-xl font-medium text-warm-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-warm-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <Badge variant="neutral" className="mb-5">
              The Team
            </Badge>
            <h2 className="font-display text-4xl font-light text-warm-900 mb-3">
              Built by people who&apos;ve been there
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-warm-200 rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-warm-900 flex items-center justify-center text-cream font-display text-xl font-medium mx-auto mb-5">
                  {member.initials}
                </div>
                <h3 className="font-display text-lg font-medium text-warm-900 mb-0.5">
                  {member.name}
                </h3>
                <p className="text-xs text-gold-600 tracking-widest uppercase mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-warm-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-950 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-light text-cream mb-4">
            Ready to invest in your practice&apos;s future?
          </h2>
          <p className="text-warm-400 mb-8 max-w-md mx-auto">
            Join the community of aesthetic professionals who treat their business as
            seriously as they treat their patients.
          </p>
          <Link
            href="/pricing"
            className="h-12 px-8 bg-gold-400 text-warm-950 text-sm font-medium rounded tracking-wide hover:bg-gold-500 transition-colors inline-flex items-center gap-2"
          >
            View Membership Plans
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
