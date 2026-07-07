import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Business Profile Optimization | Aesthetic Executive",
  description:
    "Complete SOP for optimizing your med spa's Google Business Profile — setup, services, photos, posts, reviews, and a monthly maintenance checklist.",
};

const setupChecklist = [
  "Business Name",
  "Primary Category",
  "Secondary Categories",
  "Address",
  "Service Area (if applicable)",
  "Phone Number",
  "Website",
  "Appointment Link",
  "Business Hours",
  "Holiday Hours",
  "Business Description",
  "Services",
  "Products",
  "FAQs",
  "Attributes",
  "Opening Date",
];

const primaryCategories = [
  { label: "Medical Spa", recommended: true },
  { label: "Skin Care Clinic", recommended: false },
  { label: "Laser Hair Removal Service", recommended: false },
  { label: "Weight Loss Service", recommended: false },
  { label: "Facial Spa", recommended: false },
  { label: "Wellness Center", recommended: false },
  { label: "Women's Health Clinic", recommended: false },
  { label: "Cosmetic Surgeon", recommended: false },
  { label: "Dermatologist", recommended: false },
  { label: "Hair Removal Service", recommended: false },
];

const descriptionKeywords = [
  "Botox", "Dermal Fillers", "Morpheus8", "RF Microneedling",
  "Laser Hair Removal", "IPL", "Skin Tightening", "Medical Weight Loss",
  "Acne Scar Treatment", "Hyperpigmentation", "Wrinkle Reduction",
];

const serviceSplitExample = {
  instead: "Botox",
  createIndividual: [
    "Botox for Forehead Lines",
    "Botox for Crow's Feet",
    "Botox Lip Flip",
    "Masseter Botox",
    "Chin Botox",
    "Bunny Lines",
    "Neck Botox",
  ],
  doSameFor: [
    "Microneedling", "Laser Hair Removal", "Chemical Peels",
    "Morpheus8", "Body Contouring", "Skin Tightening",
    "IPL", "Weight Loss", "Hormone Therapy",
  ],
};

const faqExamples = [
  "How much does Botox cost?",
  "How long does Morpheus8 last?",
  "Is laser hair removal permanent?",
  "What is the downtime after RF microneedling?",
  "Do you offer financing?",
  "Do consultations cost anything?",
];

const photoTypes = [
  "Office exterior",
  "Reception area",
  "Treatment rooms",
  "Equipment",
  "Providers & staff",
  "Events",
  "Products",
  "Waiting room",
  "Before & after (HIPAA-compliant with patient consent)",
];

const videoIdeas = [
  "Office walkthrough",
  "Treatment demonstrations",
  "Provider introductions",
  "Patient testimonials",
  "Open house events",
  "Educational clips",
  "Behind-the-scenes content",
];

const postTypes = [
  { type: "Educational", example: "What's the difference between Botox and filler?" },
  { type: "Promotions", example: "Limited-time offer on Morpheus8 packages" },
  { type: "Events", example: "Join our next VIP Open House" },
  { type: "Seasonal", example: "Fall laser season is here — best time to start LHR" },
  { type: "Provider Spotlight", example: "Meet [Provider Name]" },
  { type: "New Technology", example: "We just added [treatment] — here's what it does" },
  { type: "Patient Testimonials", example: "Share a real result (with consent)" },
  { type: "Blog Highlights", example: "Link to a new blog post with a compelling excerpt" },
];

const reviewMethods = [
  "Text message immediately after appointment",
  "Email follow-up same day",
  "QR code at checkout",
  "Checkout card at the front desk",
  "After-appointment automation",
  "Front desk verbal reminder",
];

const napPlatforms = [
  "Website", "Google", "Facebook", "Yelp",
  "Apple Maps", "Bing", "Healthgrades", "RealSelf", "Insurance directories",
];

const localKeywordExamples = [
  { instead: "Botox", use: "Botox in [Your City]" },
  { instead: "Medical Spa", use: "Medical Spa in [Neighborhood]" },
  { instead: "Laser Hair Removal", use: "Laser Hair Removal near [Suburb]" },
  { instead: "RF Microneedling", use: "RF Microneedling in [City]" },
];

const authorityBacklinks = [
  "Local gyms",
  "Dermatologists",
  "OB/GYN offices",
  "Plastic surgeons",
  "Hair salons",
  "Bridal businesses",
  "Local magazines",
  "Community organizations",
  "Charities",
  "Event sponsorships",
];

const monthlyChecklist = [
  "Publish 4–8 Google Posts",
  "Upload 12–40 new photos",
  "Upload 2–4 videos",
  "Add new before & after photos",
  "Respond to every review",
  "Request reviews from every patient",
  "Update promotions",
  "Verify business hours",
  "Review profile insights",
  "Add any new services",
  "Refresh FAQs",
  "Check appointment links",
  "Review competitor profiles",
  "Update seasonal content",
];

const proTips = [
  {
    tip: "Name your image files before uploading",
    detail: "Use descriptive filenames like \"morpheus8-face-treatment-columbus-oh.jpg\" instead of \"IMG_1234.jpg\". Google indexes file names.",
  },
  {
    tip: "Embed a Google Map on your contact page",
    detail: "Adding an embedded map to your website reinforces your business location and supports your local authority signals.",
  },
  {
    tip: "Post when you publish new content",
    detail: "Every time you add a new treatment page or blog post, publish a Google Post linking to it. Creates supporting relevance signals.",
  },
  {
    tip: "Feature high-value services repeatedly",
    detail: "Don't spread posts across random topics. Repeat your highest-value services over time to reinforce relevance.",
  },
  {
    tip: "Ask reviewers to mention specifics",
    detail: "Encourage reviewers to naturally mention the treatment they received and your city — never script or incentivize reviews in ways that violate Google's policies.",
  },
  {
    tip: "Audit competitors quarterly",
    detail: "Check competing med spas every quarter to identify categories, services, FAQs, and content gaps you can leverage.",
  },
  {
    tip: "Keep NAP identical everywhere",
    detail: "Exact match: \"Suite 200\" vs \"Ste. 200\" or \"(614)\" vs \"614-\" are inconsistencies Google notices. Pick one format and use it everywhere.",
  },
  {
    tip: "Use UTM parameters on every profile link",
    detail: "Add UTM tracking to your website URL, appointment link, and offer links so you can measure exactly how much traffic your GBP drives in Analytics.",
  },
];

const mistakes = [
  "Keyword stuffing in your business name",
  "Buying fake reviews",
  "Ignoring negative reviews",
  "Using stock photography exclusively",
  "Letting hours become outdated",
  "Posting once and disappearing",
  "Duplicating services instead of creating distinct entries",
  "Using blurry or low-quality photos",
  "Forgetting to answer patient questions",
  "Ignoring profile suggestions from Google",
];

const successMetrics = [
  "Local Map Pack rankings",
  "Website clicks from GBP",
  "Phone calls from GBP",
  "Direction requests",
  "Consultation bookings",
  "Organic website traffic",
  "Google review volume",
  "Average star rating",
];

export default function GoogleBusinessProfilePage() {
  return (
    <div className="bg-[#0c0004] min-h-screen">
      {/* Hero */}
      <div
        className="relative overflow-hidden border-b"
        style={{ borderColor: "rgba(162,140,117,0.12)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(47,4,16,0.75) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 pt-12 pb-14">
          <Link
            href="/members/resources/marketing"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-8 transition-opacity hover:opacity-70"
            style={{ color: "rgba(162,140,117,0.65)" }}
          >
            <ArrowLeft size={13} />
            Marketing Resources
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(162,140,117,0.12)",
                border: "1px solid rgba(162,140,117,0.25)",
              }}
            >
              <MapPin size={16} style={{ color: "#a28c75" }} />
            </div>
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: "rgba(162,140,117,0.65)" }}
            >
              Marketing Resources · Local SEO
            </span>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            Google Business Profile Optimization
          </h1>
          <p
            className="text-base leading-relaxed max-w-2xl mb-6"
            style={{ color: "rgba(255,253,246,0.5)" }}
          >
            A complete standard operating procedure for building, maintaining, and growing your Google Business Profile — the single most powerful free marketing tool available to your practice.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Local SEO", "SOP", "Free Tool"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wide"
                style={{
                  background: "rgba(162,140,117,0.1)",
                  border: "1px solid rgba(162,140,117,0.22)",
                  color: "rgba(162,140,117,0.75)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 space-y-20">

        {/* Goal callout */}
        <div
          className="rounded-2xl border p-7 flex items-start gap-5"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 100%)",
            borderColor: "rgba(162,140,117,0.25)",
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ background: "rgba(162,140,117,0.15)", border: "1px solid rgba(162,140,117,0.3)" }}
          >
            <MapPin size={16} style={{ color: "#a28c75" }} />
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.6)" }}>
              The Goal
            </p>
            <p className="text-lg font-light leading-snug mb-2" style={{ color: "#fffdf6" }}>
              Become one of the top three businesses in Google&apos;s Local Map Pack for your services.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
              An optimized GBP improves your local search rankings, increases website traffic, generates direct phone calls, and drives appointment bookings — at zero cost.
            </p>
          </div>
        </div>

        {/* ── Section 1: Profile Foundation ── */}
        <div>
          <SectionHeader num="01" title="Profile Foundation" sub="Complete every field. Google favors complete profiles — a partial profile is a missed opportunity." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Complete Every Section */}
            <div
              className="rounded-xl border p-6"
              style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.55)" }}>
                Complete Every Field (100%)
              </p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                {setupChecklist.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span style={{ color: "rgba(162,140,117,0.5)", fontSize: "10px" }}>□</span>
                    <span className="text-xs" style={{ color: "rgba(255,253,246,0.6)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div
              className="rounded-xl border p-6"
              style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.55)" }}>
                Choose the Right Categories
              </p>
              <p className="text-xs mb-4" style={{ color: "rgba(255,253,246,0.3)" }}>
                Your primary category carries significant ranking weight.
              </p>
              <div className="space-y-2">
                {primaryCategories.map((cat) => (
                  <div key={cat.label} className="flex items-center gap-2.5">
                    {cat.recommended ? (
                      <span
                        className="text-xs px-2 py-0.5 rounded font-medium flex-shrink-0"
                        style={{ background: "rgba(162,140,117,0.15)", color: "#a28c75", border: "1px solid rgba(162,140,117,0.3)" }}
                      >
                        Primary
                      </span>
                    ) : (
                      <span
                        className="text-xs px-2 py-0.5 rounded font-medium flex-shrink-0"
                        style={{ background: "rgba(162,140,117,0.04)", color: "rgba(162,140,117,0.45)", border: "1px solid rgba(162,140,117,0.1)" }}
                      >
                        Secondary
                      </span>
                    )}
                    <span className="text-xs" style={{ color: cat.recommended ? "#fffdf6" : "rgba(255,253,246,0.5)" }}>
                      {cat.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-4" style={{ color: "rgba(255,253,246,0.25)" }}>
                Only select categories that truly represent your practice. Avoid irrelevant categories just to rank higher.
              </p>
            </div>
          </div>

          {/* Description */}
          <div
            className="rounded-xl border p-6 mt-5"
            style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.12)" }}
          >
            <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.55)" }}>
              Optimize Your Business Description
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-medium mb-3" style={{ color: "rgba(255,253,246,0.6)" }}>
                  Description structure
                </p>
                <div className="space-y-2">
                  {["Who you are", "What you specialize in", "Where you're located", "What makes you unique", "Call-to-action"].map((item, i) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="text-xs font-light" style={{ color: "rgba(162,140,117,0.45)", width: "16px" }}>{i + 1}</span>
                      <span className="text-xs" style={{ color: "rgba(255,253,246,0.55)" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs mt-4" style={{ color: "rgba(255,253,246,0.25)" }}>
                  Avoid keyword stuffing. Use natural language that incorporates terms patients actually search.
                </p>
              </div>
              <div>
                <p className="text-xs font-medium mb-3" style={{ color: "rgba(255,253,246,0.6)" }}>
                  Incorporate these keywords naturally
                </p>
                <div className="flex flex-wrap gap-2">
                  {descriptionKeywords.map((kw) => (
                    <span
                      key={kw}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(162,140,117,0.07)", color: "rgba(162,140,117,0.7)", border: "1px solid rgba(162,140,117,0.12)" }}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 2: Services & Offerings ── */}
        <div>
          <SectionHeader num="02" title="Services & Offerings" sub="One of the biggest missed opportunities in most practices. Every service entry is another chance to appear in search results." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            {/* Service split */}
            <div
              className="rounded-xl border p-6"
              style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.55)" }}>
                Split Services Into Individual Entries
              </p>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs" style={{ color: "rgba(248,113,113,0.7)" }}>✕ Instead of listing:</span>
                </div>
                <div
                  className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs"
                  style={{ background: "rgba(248,113,113,0.06)", color: "rgba(248,113,113,0.6)", border: "1px solid rgba(248,113,113,0.12)" }}
                >
                  {serviceSplitExample.instead}
                </div>
              </div>
              <div className="mb-4">
                <span className="text-xs mb-2 block" style={{ color: "rgba(34,197,94,0.7)" }}>✓ Create individual entries:</span>
                <div className="space-y-1">
                  {serviceSplitExample.createIndividual.map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <span style={{ color: "rgba(162,140,117,0.4)", fontSize: "9px" }}>·</span>
                      <span className="text-xs" style={{ color: "rgba(255,253,246,0.55)" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs" style={{ color: "rgba(255,253,246,0.3)" }}>
                Do the same for: {serviceSplitExample.doSameFor.join(", ")}
              </p>
            </div>

            <div className="space-y-4">
              {/* Service descriptions */}
              <div
                className="rounded-xl border p-5"
                style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.12)" }}
              >
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>
                  Each Service Description Should Include
                </p>
                {["Who it's for", "Benefits", "Common concerns addressed", "Treatment areas", "Keywords naturally incorporated"].map((item) => (
                  <div key={item} className="flex items-center gap-2 mb-1.5">
                    <span style={{ color: "#a28c75", fontSize: "10px" }}>→</span>
                    <span className="text-xs" style={{ color: "rgba(255,253,246,0.55)" }}>{item}</span>
                  </div>
                ))}
                <div
                  className="mt-4 rounded-lg p-3 border-l-2"
                  style={{ background: "rgba(162,140,117,0.04)", borderLeftColor: "rgba(162,140,117,0.3)" }}
                >
                  <p className="text-xs italic leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                    &quot;Morpheus8 is an advanced RF microneedling treatment that improves skin laxity, acne scars, wrinkles, fine lines, enlarged pores, and overall skin texture with minimal downtime.&quot;
                  </p>
                </div>
              </div>

              {/* Products */}
              <div
                className="rounded-xl border p-5"
                style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.12)" }}
              >
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>
                  Add Products — Most Practices Ignore This
                </p>
                <div className="grid grid-cols-2 gap-y-1.5">
                  {["Skin Care Lines", "Memberships", "Treatment Packages", "Gift Cards", "Popular Procedures"].map((p) => (
                    <div key={p} className="flex items-center gap-2">
                      <span style={{ color: "rgba(162,140,117,0.45)", fontSize: "9px" }}>·</span>
                      <span className="text-xs" style={{ color: "rgba(255,253,246,0.55)" }}>{p}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs mt-3" style={{ color: "rgba(255,253,246,0.3)" }}>
                  Include an image, description, optional price, and a CTA on each product.
                </p>
              </div>

              {/* FAQs */}
              <div
                className="rounded-xl border p-5"
                style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.12)" }}
              >
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>
                  Add Q&amp;A — Don&apos;t Wait for Patients to Ask
                </p>
                <div className="space-y-1.5">
                  {faqExamples.map((q) => (
                    <div key={q} className="flex items-start gap-2">
                      <span style={{ color: "rgba(162,140,117,0.5)", fontSize: "10px", marginTop: "2px" }}>?</span>
                      <span className="text-xs" style={{ color: "rgba(255,253,246,0.5)" }}>{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 3: Visual Content ── */}
        <div>
          <SectionHeader num="03" title="Visual Content" sub="Google prioritizes active profiles. Upload content weekly — not monthly, not quarterly." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            {/* Photos */}
            <div
              className="rounded-xl border p-6"
              style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(162,140,117,0.55)" }}>Photos</p>
                <span
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(162,140,117,0.1)", color: "#a28c75", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  3–10 per week
                </span>
              </div>
              <div className="space-y-1.5">
                {photoTypes.map((p) => (
                  <div key={p} className="flex items-start gap-2">
                    <span style={{ color: "rgba(162,140,117,0.45)", fontSize: "9px", marginTop: "4px" }}>·</span>
                    <span className="text-xs" style={{ color: "rgba(255,253,246,0.55)" }}>{p}</span>
                  </div>
                ))}
              </div>
              <div
                className="mt-4 rounded-lg p-3"
                style={{ background: "rgba(162,140,117,0.05)", border: "1px solid rgba(162,140,117,0.1)" }}
              >
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                  <span style={{ color: "#a28c75" }}>Pro tip:</span> Name files descriptively before uploading — e.g. <span style={{ color: "rgba(162,140,117,0.7)" }}>morpheus8-face-columbus-oh.jpg</span> not IMG_1234.jpg.
                </p>
              </div>
            </div>

            {/* Videos */}
            <div
              className="rounded-xl border p-6"
              style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(162,140,117,0.55)" }}>Videos</p>
                <span
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(162,140,117,0.1)", color: "#a28c75", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  15–60 seconds
                </span>
              </div>
              <p className="text-xs mb-4" style={{ color: "rgba(255,253,246,0.35)" }}>
                Short videos consistently outperform static images on GBP.
              </p>
              <div className="space-y-1.5">
                {videoIdeas.map((v) => (
                  <div key={v} className="flex items-center gap-2">
                    <span style={{ color: "rgba(162,140,117,0.45)", fontSize: "9px" }}>·</span>
                    <span className="text-xs" style={{ color: "rgba(255,253,246,0.55)" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 4: Google Posts ── */}
        <div>
          <SectionHeader num="04" title="Google Posts" sub="One of Google's strongest freshness signals. Publish 1–2 posts every week without fail." />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div
              className="rounded-xl border p-6"
              style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.55)" }}>
                Post Types
              </p>
              <div className="space-y-3">
                {postTypes.map((p) => (
                  <div key={p.type}>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs px-2 py-0.5 rounded font-medium"
                        style={{ background: "rgba(162,140,117,0.1)", color: "#a28c75", border: "1px solid rgba(162,140,117,0.18)" }}
                      >
                        {p.type}
                      </span>
                    </div>
                    <p className="text-xs pl-1" style={{ color: "rgba(255,253,246,0.4)" }}>{p.example}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-xl border p-6"
              style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.55)" }}>
                Every Post Must Include
              </p>
              {[
                { item: "An image", why: "Posts without images get far less engagement" },
                { item: "A call-to-action", why: "Tell readers exactly what to do next" },
                { item: "Keywords", why: "Naturally reinforce what you offer" },
                { item: "A link to your website", why: "Drive traffic and create a signal chain" },
              ].map((p) => (
                <div key={p.item} className="flex items-start gap-3 mb-4">
                  <span style={{ color: "#a28c75", fontSize: "11px", marginTop: "2px" }}>✓</span>
                  <div>
                    <p className="text-xs font-medium" style={{ color: "#fffdf6" }}>{p.item}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,253,246,0.35)" }}>{p.why}</p>
                  </div>
                </div>
              ))}

              <div
                className="rounded-lg p-4 mt-2"
                style={{ background: "rgba(162,140,117,0.06)", border: "1px solid rgba(162,140,117,0.14)" }}
              >
                <p className="text-xs font-medium mb-1" style={{ color: "#fffdf6" }}>Seasonal post calendar</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["Summer Skin Protection", "Wedding Season", "Holiday Glow", "Back-to-School Skin", "New Year Wellness", "Fall Laser Season", "Winter Peel Season"].map((s) => (
                    <span key={s} className="text-xs" style={{ color: "rgba(162,140,117,0.6)" }}>· {s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 5: Reviews ── */}
        <div>
          <SectionHeader num="05" title="Reviews" sub="One of the strongest local ranking factors. Every patient should receive a review request — no exceptions." />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Getting reviews */}
            <div
              className="rounded-xl border p-6"
              style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(162,140,117,0.55)" }}>
                  Getting Reviews
                </p>
                <span
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(162,140,117,0.1)", color: "#a28c75", border: "1px solid rgba(162,140,117,0.2)" }}
                >
                  Goal: 10–20 / month
                </span>
              </div>
              <div className="space-y-2">
                {reviewMethods.map((m) => (
                  <div key={m} className="flex items-center gap-2">
                    <span style={{ color: "rgba(162,140,117,0.45)", fontSize: "9px" }}>·</span>
                    <span className="text-xs" style={{ color: "rgba(255,253,246,0.55)" }}>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Responding */}
            <div
              className="rounded-xl border p-6"
              style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.55)" }}>
                Responding to Reviews
              </p>
              <p className="text-xs mb-4 leading-relaxed" style={{ color: "rgba(255,253,246,0.4)" }}>
                Respond to <strong style={{ color: "#fffdf6" }}>every</strong> review — positive, neutral, and negative. Never use identical copy-paste responses.
              </p>
              {[
                { type: "Positive", guidance: "Include keywords naturally. Thank them specifically." },
                { type: "Neutral", guidance: "Acknowledge their feedback. Invite them to connect directly." },
                { type: "Negative", guidance: "Stay professional, never defensive. Offer to resolve offline." },
              ].map((r) => (
                <div key={r.type} className="flex items-start gap-3 mb-3">
                  <span
                    className="text-xs px-2 py-0.5 rounded flex-shrink-0 font-medium"
                    style={{ background: "rgba(162,140,117,0.08)", color: "rgba(162,140,117,0.65)", border: "1px solid rgba(162,140,117,0.12)" }}
                  >
                    {r.type}
                  </span>
                  <p className="text-xs" style={{ color: "rgba(255,253,246,0.45)" }}>{r.guidance}</p>
                </div>
              ))}
              <div
                className="mt-4 rounded-lg px-4 py-3 border-l-2"
                style={{ background: "rgba(162,140,117,0.04)", borderLeftColor: "rgba(162,140,117,0.3)" }}
              >
                <p className="text-xs italic leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                  &quot;We&apos;re so glad you loved your Morpheus8 treatment. Thank you for trusting our team.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 6: Technical Accuracy ── */}
        <div>
          <SectionHeader num="06" title="Technical Accuracy" sub="Google uses consistency to build trust in your listing. Inconsistencies can suppress your rankings." />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* NAP */}
            <div
              className="rounded-xl border p-5"
              style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>
                NAP Consistency
              </p>
              <p className="text-xs mb-3" style={{ color: "rgba(255,253,246,0.35)" }}>
                Name · Address · Phone — must be <em>exactly</em> identical everywhere.
              </p>
              <div className="space-y-1.5">
                {napPlatforms.map((p) => (
                  <div key={p} className="flex items-center gap-2">
                    <span style={{ color: "rgba(162,140,117,0.4)", fontSize: "9px" }}>·</span>
                    <span className="text-xs" style={{ color: "rgba(255,253,246,0.5)" }}>{p}</span>
                  </div>
                ))}
              </div>
              <div
                className="mt-4 rounded p-2.5"
                style={{ background: "rgba(248,113,113,0.05)", border: "1px solid rgba(248,113,113,0.1)" }}
              >
                <p className="text-xs" style={{ color: "rgba(248,113,113,0.6)" }}>
                  Avoid: Suite # vs Ste. · Road vs Rd. · (614) vs 614-
                </p>
              </div>
            </div>

            {/* Hours */}
            <div
              className="rounded-xl border p-5"
              style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>
                Keep Hours Updated
              </p>
              <div className="space-y-1.5 mb-4">
                {["Holidays", "Weather closures", "Special events", "Temporary changes"].map((h) => (
                  <div key={h} className="flex items-center gap-2">
                    <span style={{ color: "rgba(162,140,117,0.4)", fontSize: "9px" }}>·</span>
                    <span className="text-xs" style={{ color: "rgba(255,253,246,0.5)" }}>{h}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs" style={{ color: "rgba(255,253,246,0.3)" }}>
                Outdated hours erode patient trust and can trigger negative reviews before a patient even walks in.
              </p>
            </div>

            {/* Booking Links + UTM */}
            <div
              className="rounded-xl border p-5"
              style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>
                Booking Links & UTM Tracking
              </p>
              <p className="text-xs mb-3" style={{ color: "rgba(255,253,246,0.35)" }}>
                Add direct links for:
              </p>
              {["Consultations", "Online booking", "Membership info", "Contact page"].map((l) => (
                <div key={l} className="flex items-center gap-2 mb-1.5">
                  <span style={{ color: "rgba(162,140,117,0.4)", fontSize: "9px" }}>·</span>
                  <span className="text-xs" style={{ color: "rgba(255,253,246,0.5)" }}>{l}</span>
                </div>
              ))}
              <div
                className="mt-4 rounded p-2.5"
                style={{ background: "rgba(162,140,117,0.06)", border: "1px solid rgba(162,140,117,0.1)" }}
              >
                <p className="text-xs font-medium mb-1" style={{ color: "#fffdf6" }}>Add UTM parameters</p>
                <p className="text-xs" style={{ color: "rgba(255,253,246,0.35)" }}>
                  Tag your website URL, appointment link, and offer links so Google Analytics shows exactly how much traffic your GBP drives.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 7: Local SEO Integration ── */}
        <div>
          <SectionHeader num="07" title="Local SEO Integration" sub="Your GBP and your website work together. Strengthen both and they reinforce each other." />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Website optimization */}
            <div
              className="rounded-xl border p-6"
              style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.12)" }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.55)" }}>
                Optimize Your Website for Local SEO
              </p>
              <div className="grid grid-cols-2 gap-y-2">
                {[
                  "City names in content",
                  "Neighborhoods served",
                  "Nearby suburbs",
                  "Location-specific pages",
                  "Treatment pages",
                  "Internal linking",
                  "Schema markup",
                  "Fast page speed",
                  "Mobile optimization",
                  "Google Map embed",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span style={{ color: "rgba(162,140,117,0.45)", fontSize: "9px" }}>□</span>
                    <span className="text-xs" style={{ color: "rgba(255,253,246,0.55)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {/* Local keywords */}
              <div
                className="rounded-xl border p-5"
                style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.12)" }}
              >
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>
                  Add Local Keywords Naturally
                </p>
                <div className="space-y-2">
                  {localKeywordExamples.map((ex) => (
                    <div key={ex.instead} className="flex items-center gap-2 text-xs">
                      <span style={{ color: "rgba(248,113,113,0.5)" }}>{ex.instead}</span>
                      <span style={{ color: "rgba(162,140,117,0.4)" }}>→</span>
                      <span style={{ color: "rgba(162,140,117,0.8)" }}>{ex.use}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs mt-3" style={{ color: "rgba(255,253,246,0.28)" }}>
                  Only use locations you actually serve.
                </p>
              </div>

              {/* Authority */}
              <div
                className="rounded-xl border p-5"
                style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.12)" }}
              >
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.55)" }}>
                  Build Local Authority
                </p>
                <p className="text-xs mb-3" style={{ color: "rgba(255,253,246,0.35)" }}>
                  Earn backlinks and mentions from local organizations:
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {authorityBacklinks.map((b) => (
                    <div key={b} className="flex items-center gap-1.5">
                      <span style={{ color: "rgba(162,140,117,0.4)", fontSize: "9px" }}>·</span>
                      <span className="text-xs" style={{ color: "rgba(255,253,246,0.5)" }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Monthly Checklist ── */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
              Monthly Checklist
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          <div
            className="rounded-2xl border p-7 md:p-8"
            style={{
              background: "linear-gradient(145deg, #2f0410 0%, #1a000c 60%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.2)",
            }}
          >
            <p className="text-xs mb-6" style={{ color: "rgba(255,253,246,0.35)" }}>
              Run through this every month without exception. Consistency is what separates top-ranked practices from everyone else.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {monthlyChecklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span
                    className="w-4 h-4 rounded flex-shrink-0 flex items-center justify-center"
                    style={{ border: "1px solid rgba(162,140,117,0.3)", background: "rgba(162,140,117,0.05)" }}
                  >
                    <span style={{ color: "rgba(162,140,117,0.4)", fontSize: "8px" }}>□</span>
                  </span>
                  <span className="text-sm" style={{ color: "rgba(255,253,246,0.65)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Pro Tips ── */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-light flex-shrink-0" style={{ color: "#fffdf6" }}>
              Pro Tips
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {proTips.map((tip) => (
              <div
                key={tip.tip}
                className="rounded-xl border p-5"
                style={{
                  background: "rgba(162,140,117,0.03)",
                  borderColor: "rgba(162,140,117,0.12)",
                }}
              >
                <p className="text-sm font-medium mb-2" style={{ color: "#fffdf6" }}>
                  {tip.tip}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                  {tip.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Avoid These Mistakes + Metrics ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mistakes */}
          <div
            className="rounded-xl border p-6"
            style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.12)" }}
          >
            <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.55)" }}>
              Avoid These Mistakes
            </p>
            <div className="space-y-2">
              {mistakes.map((m) => (
                <div key={m} className="flex items-start gap-2.5">
                  <span style={{ color: "rgba(248,113,113,0.55)", fontSize: "11px", marginTop: "1px", flexShrink: 0 }}>✕</span>
                  <span className="text-xs leading-snug" style={{ color: "rgba(255,253,246,0.5)" }}>{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Success metrics */}
          <div
            className="rounded-xl border p-6"
            style={{ background: "rgba(162,140,117,0.03)", borderColor: "rgba(162,140,117,0.12)" }}
          >
            <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(162,140,117,0.55)" }}>
              Success Metrics
            </p>
            <p className="text-xs mb-4" style={{ color: "rgba(255,253,246,0.35)" }}>
              A well-optimized profile shows measurable improvement in all of these. Review your GBP Insights monthly.
            </p>
            <div className="space-y-2.5">
              {successMetrics.map((m) => (
                <div key={m} className="flex items-center gap-2.5">
                  <span style={{ color: "#a28c75", fontSize: "11px" }}>↑</span>
                  <span className="text-xs" style={{ color: "rgba(255,253,246,0.6)" }}>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function SectionHeader({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div className="flex items-start gap-5">
      <span
        className="font-display text-4xl font-light leading-none flex-shrink-0 mt-1"
        style={{ color: "rgba(162,140,117,0.18)" }}
      >
        {num}
      </span>
      <div>
        <div className="flex items-center gap-4 mb-1">
          <h2 className="font-display text-2xl font-light" style={{ color: "#fffdf6" }}>
            {title}
          </h2>
          <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)", minWidth: "40px" }} />
        </div>
        <p className="text-sm" style={{ color: "rgba(255,253,246,0.4)" }}>{sub}</p>
      </div>
    </div>
  );
}
