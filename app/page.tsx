import Link from "next/link";
import {
  FileText,
  Video,
  BookOpen,
  Users,
  TrendingUp,
  Shield,
  Star,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PublicHeader } from "@/components/layout/PublicHeader";
import { Footer } from "@/components/layout/Footer";

const features = [
  {
    icon: FileText,
    title: "Business Templates",
    description:
      "Done-for-you templates for consent forms, treatment protocols, employee handbooks, financial projections, and more.",
  },
  {
    icon: Video,
    title: "Expert Webinars",
    description:
      "Live and recorded sessions with industry leaders on marketing, operations, compliance, and growth strategy.",
  },
  {
    icon: BookOpen,
    title: "Resource Library",
    description:
      "Curated guides, checklists, and research covering FDA regulations, pricing strategies, and business scaling.",
  },
  {
    icon: Users,
    title: "Practitioner Community",
    description:
      "Network with other aesthetic practice owners and managers in our exclusive, moderated member community.",
  },
  {
    icon: TrendingUp,
    title: "Growth Playbooks",
    description:
      "Step-by-step playbooks for launching new services, building retail revenue, and expanding to multiple locations.",
  },
  {
    icon: Shield,
    title: "Compliance Updates",
    description:
      "Stay current with state regulations, insurance requirements, and clinical standards affecting your practice.",
  },
];

const personas = [
  {
    title: "Practice Owners",
    description:
      "Solo injectors to multi-location clinic owners who want proven systems to scale without sacrificing quality or compliance.",
  },
  {
    title: "Clinic Managers",
    description:
      "Operations leaders responsible for HR, finance, and team performance who need executive-grade tools without the consultant price tag.",
  },
  {
    title: "Emerging Practitioners",
    description:
      "Nurse injectors, PAs, and physicians launching their first practice who need a roadmap built specifically for aesthetic medicine.",
  },
];

const testimonials = [
  {
    quote:
      "The financial projection templates alone saved me weeks of work. I used them when opening my second location and the process was seamless.",
    name: "Dr. Sarah M.",
    role: "Medical Director, Radiance MedSpa",
    initials: "SM",
  },
  {
    quote:
      "I was spending thousands on consultants for information I now get through my Aesthetic Executive membership. The ROI is extraordinary.",
    name: "Jessica T.",
    role: "Owner, The Aesthetics Studio",
    initials: "JT",
  },
  {
    quote:
      "The webinars on team building and culture transformed how I recruit and retain staff. My turnover dropped by 60% in one year.",
    name: "Amanda L.",
    role: "Clinical Manager, Bloom Aesthetics",
    initials: "AL",
  },
];

const included = [
  "Unlimited template downloads",
  "Live webinar access + full recording archive",
  "New resources added monthly",
  "Compliance & regulatory updates",
  "Growth playbooks & frameworks",
  "Private member community",
];

export default function HomePage() {
  return (
    <>
      <PublicHeader />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="bg-warm-950 text-cream relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="max-w-7xl mx-auto px-6 py-28 md:py-40 relative">
            <div className="max-w-3xl">
              <Badge variant="gold" className="mb-8">
                Membership for Aesthetic Professionals
              </Badge>
              <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05] mb-8 text-cream">
                Elevate Your Practice.{" "}
                <span className="text-gold-400">Grow Your Business.</span>
              </h1>
              <p className="text-lg text-warm-300 leading-relaxed mb-10 max-w-2xl">
                Aesthetic Executive is the premium membership for medical aesthetics
                practice owners and managers who are serious about building a
                thriving, compliant, and profitable business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/pricing"
                  className="h-12 px-8 bg-gold-400 text-warm-950 text-sm font-medium rounded tracking-wide hover:bg-gold-500 transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-gold-400/20"
                >
                  Start Your Membership
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/about"
                  className="h-12 px-8 border border-warm-700 text-warm-300 text-sm font-medium rounded tracking-wide hover:border-warm-500 hover:text-cream transition-colors inline-flex items-center"
                >
                  Learn More
                </Link>
              </div>
              <div className="mt-14 flex flex-wrap items-center gap-6 text-sm text-warm-500">
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold-400" />
                  500+ active members
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold-400" />
                  New content every month
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold-400" />
                  Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-30" />

        {/* What's included */}
        <section className="bg-cream py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <Badge variant="neutral" className="mb-5">
                Membership Includes
              </Badge>
              <h2 className="font-display text-4xl md:text-5xl font-light text-warm-900 mb-4">
                Everything You Need to Run a{" "}
                <span className="text-gold-600 italic">Thriving Practice</span>
              </h2>
              <p className="text-warm-600 max-w-xl mx-auto leading-relaxed">
                One membership. All the tools, templates, and training your
                practice needs — curated specifically for the medical aesthetics
                industry.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-white border border-warm-200 rounded-xl p-8 hover:border-gold-300 hover:shadow-sm transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold-50 border border-gold-100 flex items-center justify-center mb-5 group-hover:bg-gold-100 transition-colors">
                      <Icon size={20} className="text-gold-600" />
                    </div>
                    <h3 className="font-display text-xl font-medium text-warm-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-warm-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="bg-blush py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="neutral" className="mb-5">
                  Who It&apos;s For
                </Badge>
                <h2 className="font-display text-4xl md:text-5xl font-light text-warm-900 mb-6 leading-tight">
                  Built for the business side of aesthetic medicine
                </h2>
                <p className="text-warm-600 leading-relaxed mb-8">
                  Whether you&apos;re opening your first suite or managing a team
                  of injectors across multiple locations — Aesthetic Executive meets
                  you where you are and gives you what you need to move forward.
                </p>
                <div className="space-y-3">
                  {included.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-gold-500 flex-shrink-0" />
                      <span className="text-sm text-warm-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Link
                    href="/pricing"
                    className="h-11 px-7 bg-warm-900 text-cream text-sm font-medium rounded tracking-wide hover:bg-warm-800 transition-colors inline-flex items-center gap-2"
                  >
                    View Membership Options
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5">
                {personas.map((persona) => (
                  <div
                    key={persona.title}
                    className="bg-white border border-warm-200 rounded-xl p-7"
                  >
                    <h3 className="font-display text-xl font-medium text-warm-900 mb-2">
                      {persona.title}
                    </h3>
                    <p className="text-sm text-warm-600 leading-relaxed">
                      {persona.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-warm-950 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="flex justify-center gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-gold-400 fill-gold-400" />
                ))}
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-cream mb-3">
                Trusted by practitioners{" "}
                <span className="text-gold-400 italic">across the country</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-warm-900 border border-warm-800 rounded-xl p-8"
                >
                  <p className="text-warm-200 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-400 flex items-center justify-center text-warm-950 text-sm font-semibold">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-cream text-sm font-medium">{t.name}</p>
                      <p className="text-warm-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing teaser */}
        <section className="bg-cream py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-xl mx-auto text-center">
              <Badge variant="gold" className="mb-5">
                Simple Pricing
              </Badge>
              <h2 className="font-display text-4xl md:text-5xl font-light text-warm-900 mb-4">
                One flat rate. Unlimited access.
              </h2>
              <p className="text-warm-600 leading-relaxed mb-10">
                No tiers, no feature gating. Every member gets full access to the
                entire library from day one.
              </p>
              <div className="bg-white border border-warm-200 rounded-2xl p-10 shadow-sm">
                <p className="text-sm text-warm-500 tracking-widest uppercase mb-1">
                  Monthly Membership
                </p>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="font-display text-6xl font-light text-warm-900">
                    $97
                  </span>
                  <span className="text-warm-500">/month</span>
                </div>
                <p className="text-sm text-warm-500 mb-8">
                  Cancel anytime. No contracts.
                </p>
                <div className="space-y-2.5 mb-8 text-left">
                  {included.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={15} className="text-gold-500 flex-shrink-0" />
                      <span className="text-sm text-warm-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/pricing"
                  className="w-full h-12 bg-gold-400 text-warm-950 text-sm font-medium rounded tracking-wide hover:bg-gold-500 transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  Start Your Membership
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gold-400 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-light text-warm-950 mb-4">
              Your practice deserves the best resources.
            </h2>
            <p className="text-warm-800 mb-8 max-w-md mx-auto">
              Join hundreds of aesthetic professionals who have made Aesthetic
              Executive their competitive edge.
            </p>
            <Link
              href="/pricing"
              className="h-12 px-8 bg-warm-950 text-cream text-sm font-medium rounded tracking-wide hover:bg-warm-900 transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              Join Today
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
