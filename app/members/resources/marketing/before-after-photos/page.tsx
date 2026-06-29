import Link from "next/link";
import { ArrowLeft, Camera } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before & After Photography Guide | Aesthetic Executive",
  description:
    "How to capture before-and-after photos that actually showcase your results — lighting, angles, patient prep, consistency, and compliance.",
};

const whyItMatters = [
  {
    title: "They're your most powerful marketing asset",
    body: "A single great before-and-after set does more to convert a prospective patient than any ad, caption, or testimonial. They show — not tell — what you're capable of.",
  },
  {
    title: "Quality signals credibility",
    body: "Blurry, inconsistent, or poorly lit photos make even excellent results look underwhelming. A polished photo set communicates that your practice is professional and detail-oriented — before a patient even books.",
  },
  {
    title: "Consistency makes the transformation visible",
    body: "The before-and-after comparison only works if everything except the result is the same. Same angle, same lighting, same expression — otherwise patients can't see the change, and neither can you.",
  },
  {
    title: "They live everywhere your marketing does",
    body: "Website, Instagram, consultation presentations, Google profile, email campaigns — one great photo set gets used across every channel, for years.",
  },
  {
    title: "They build trust before a patient walks in",
    body: "Patients researching treatments want proof. Seeing real, consistent results from your practice specifically is far more persuasive than stock imagery or generic claims.",
  },
  {
    title: "They document your clinical outcomes",
    body: "Beyond marketing, a consistent photo archive lets you track patient progress, refine your protocols, and demonstrate efficacy over time.",
  },
];

const categories = [
  {
    num: "01",
    title: "Lighting",
    icon: "💡",
    intro: "Lighting is the single most important factor in a before-and-after photo. It directly affects how skin tone, texture, and results are perceived.",
    tips: [
      {
        label: "Use natural light whenever possible",
        detail:
          "Natural light provides the most accurate, flattering representation of skin tone and treatment results. Position your patient near a large window with consistent, diffused light — not direct sunlight.",
      },
      {
        label: "Avoid camera flash",
        detail:
          "Flash creates harsh shadows, blows out skin tone, and distorts colors — making it nearly impossible to compare before-and-after images accurately. Turn flash off entirely.",
      },
      {
        label: "Use the same light source for every shot",
        detail:
          "Whether you use a ring light, softbox, or a window, use the same one every single time. If lighting changes between the before and after, patients won't be able to see the result clearly.",
      },
      {
        label: "Avoid overhead or single-source lighting",
        detail:
          "Overhead lighting creates unflattering shadows under the eyes and nose. Two light sources placed at 45-degree angles on either side of the patient produce even, consistent illumination.",
      },
    ],
  },
  {
    num: "02",
    title: "Background & Location",
    icon: "🖼️",
    intro: "The background should never compete with your patient. A distracting background pulls attention away from the result.",
    tips: [
      {
        label: "Use a plain, neutral-colored background",
        detail:
          "Black, navy, or medium gray work best for facial treatments — they recede and let the patient's face be the focal point. Avoid white (creates glare) and busy patterns (distracting).",
      },
      {
        label: "Always shoot in the same location",
        detail:
          "Pick one dedicated spot in your office and use it every time. Same wall, same corner, same backdrop. Consistency in location ensures consistent lighting, background, and distance.",
      },
      {
        label: "Mark the floor for patient positioning",
        detail:
          "Place a small strip of tape on the floor where patients should stand. This ensures the same distance from the camera every time, keeping image scale consistent across visits.",
      },
    ],
  },
  {
    num: "03",
    title: "Patient Positioning & Angles",
    icon: "📐",
    intro: "Angle inconsistency is one of the most common mistakes — and the hardest to fix after the fact. Every angle must be reproducible.",
    tips: [
      {
        label: "Always capture the same five angles",
        detail:
          "For facial treatments, the standard set is: full front-facing, left profile (90°), right profile (90°), left 45-degree angle, right 45-degree angle. Shoot all five before and after every treatment.",
      },
      {
        label: "Keep the camera at eye level",
        detail:
          "The lens should be at the patient's eye level — not tilted up or down. Shooting from below elongates the face; shooting from above compresses it. Both distort the result.",
      },
      {
        label: "Instruct patients to maintain a neutral expression",
        detail:
          "Ask patients to relax their face completely and look straight into the camera. Smiling, squinting, or raising the brows changes the appearance of results and makes comparison impossible.",
      },
      {
        label: "Use floor marks for consistent distance",
        detail:
          "The patient should stand the same distance from the camera at every session. Even a few inches of difference changes how close or far the face appears relative to the frame.",
      },
    ],
  },
  {
    num: "04",
    title: "Camera & Equipment",
    icon: "📷",
    intro: "You don't need a professional camera — but you do need to use the same setup every single time.",
    tips: [
      {
        label: "Use the same device for every patient",
        detail:
          "Different phones and cameras produce different color profiles, resolutions, and focal lengths. Pick one device for all clinical photography and stick with it.",
      },
      {
        label: "Use a tripod",
        detail:
          "A tripod eliminates hand shake, maintains a consistent height, and keeps the frame identical across sessions. This is one of the highest-impact investments you can make in photo quality.",
      },
      {
        label: "Set consistent camera settings",
        detail:
          "Use the same resolution, portrait mode setting, and zoom level every time. Lock focus and exposure manually if your camera allows it. Avoid digital zoom — it degrades image quality.",
      },
      {
        label: "Never use filters or editing software",
        detail:
          "Any filter, skin-smoothing, or color-correction tool applied to one photo and not the other destroys the validity of the comparison. Authenticity is your most valuable asset.",
      },
    ],
  },
  {
    num: "05",
    title: "Patient Preparation",
    icon: "🪞",
    intro: "What the patient wears, how their hair is styled, and whether they're wearing makeup all affect the photo — and need to be exactly the same each time.",
    tips: [
      {
        label: "Remove all makeup before photos",
        detail:
          "Ask patients to arrive without makeup, or have them remove it before the shoot. Foundation, concealer, and blush can mask the very changes you're trying to document.",
      },
      {
        label: "Always pull hair back",
        detail:
          "Secure hair away from the face with a clip or headband — especially for facial treatments. Hair obscuring the temples, jawline, or neck makes it impossible to compare those areas.",
      },
      {
        label: "Keep clothing neutral and consistent",
        detail:
          "Ask patients to wear a plain top with no bold patterns or logos. For body treatment photos, provide a disposable covering or gown. Clothing that changes between sessions becomes a visual distraction.",
      },
      {
        label: "Remove jewelry from the treatment area",
        detail:
          "Earrings, necklaces, or other jewelry near the face should be removed. They catch light, create reflections, and draw the eye away from the result.",
      },
    ],
  },
  {
    num: "06",
    title: "Image Consistency & Labeling",
    icon: "🗂️",
    intro: "How you organize, label, and present photos determines whether they can actually be used for comparison and marketing.",
    tips: [
      {
        label: "Present before-and-after photos side by side",
        detail:
          "Place images in a consistent left-before, right-after orientation. Ensure the cropping, sizing, and orientation are identical between the two. Any difference in framing reduces perceived impact.",
      },
      {
        label: "Label every photo with date and treatment",
        detail:
          "File names or folders should include the patient identifier, treatment performed, and date of each session. This is essential for both clinical tracking and accurately representing timelines in marketing.",
      },
      {
        label: "Note the time interval between images",
        detail:
          "Always communicate how much time passed between the before and after — whether it's 4 weeks post-treatment or a final result at 3 months. This sets honest patient expectations.",
      },
      {
        label: "Add a subtle branded watermark",
        detail:
          "Place your practice logo or website URL in a corner of every published image. Keep it small enough not to distract from the result. This protects your content and reinforces brand visibility.",
      },
    ],
  },
  {
    num: "07",
    title: "Consent & Compliance",
    icon: "📋",
    intro: "Every photo used for marketing or education requires explicit written consent. This is non-negotiable.",
    tips: [
      {
        label: "Obtain written consent before every shoot",
        detail:
          "Your consent form should clearly state what the photos will be used for — social media, website, educational content, internal training — and allow patients to specify their preferences.",
      },
      {
        label: "Respect requests for anonymity",
        detail:
          "If a patient consents to photos being used but wishes to remain unidentifiable, crop or blur the eyes or other identifying features before publishing. Document this preference in their chart.",
      },
      {
        label: "Follow all HIPAA regulations",
        detail:
          "Photos that include a patient's face are considered protected health information. Any use of identifiable patient images requires a HIPAA-compliant authorization form — separate from your standard consent form.",
      },
      {
        label: "Store clinical photos securely",
        detail:
          "Keep before-and-after photos in a HIPAA-compliant system — not in your personal iCloud or a shared Google Drive. Access should be limited to clinical staff who need them.",
      },
    ],
  },
];

const checklist = [
  "Same backdrop and location confirmed",
  "Lighting source in correct position",
  "Tripod set up at eye level",
  "Same device with consistent settings",
  "Floor mark in place for patient distance",
  "Patient makeup removed",
  "Hair pulled completely back",
  "Neutral clothing / no jewelry in frame",
  "All 5 angles captured (front, left/right profile, left/right 45°)",
  "Neutral expression confirmed before each shot",
  "No flash, no filters, no digital zoom",
  "Photos labeled with date and treatment",
  "Consent form signed and documented",
];

export default function BeforeAfterPhotosPage() {
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
              <Camera size={16} style={{ color: "#a28c75" }} />
            </div>
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: "rgba(162,140,117,0.65)" }}
            >
              Marketing Resources · Photography
            </span>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-light mb-4 leading-tight"
            style={{ color: "#fffdf6" }}
          >
            Before & After Photography
          </h1>
          <p
            className="text-base leading-relaxed max-w-2xl"
            style={{ color: "rgba(255,253,246,0.5)" }}
          >
            How to capture photos that actually showcase your results — not just take them.
            Consistent lighting, angles, patient prep, and compliance guidance all in one place.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14">

        {/* Why It Matters */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-3">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              Why Quality Photos Matter
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>
          <p
            className="text-sm leading-relaxed mb-8 max-w-2xl"
            style={{ color: "rgba(255,253,246,0.42)" }}
          >
            Anyone can take a before-and-after photo. The practices that stand out are the ones
            that take them <em style={{ color: "rgba(255,253,246,0.65)" }}>well</em> — consistently,
            professionally, and with intention.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyItMatters.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border p-6"
                style={{
                  background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
                  borderColor: "rgba(162,140,117,0.1)",
                }}
              >
                <h3
                  className="font-display text-base font-light mb-2 leading-snug"
                  style={{ color: "#fffdf6" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.42)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Intro callout */}
        <div
          className="rounded-2xl border p-7 mb-16"
          style={{
            background: "linear-gradient(135deg, #2f0410 0%, #1a000c 100%)",
            borderColor: "rgba(162,140,117,0.2)",
            borderLeft: "3px solid #a28c75",
          }}
        >
          <p
            className="font-display text-lg font-light italic leading-relaxed"
            style={{ color: "rgba(255,253,246,0.85)" }}
          >
            "The best before-and-after photo isn't the one where the result looks the most
            dramatic — it's the one where every variable except the result is identical. That's
            what makes the transformation undeniable."
          </p>
          <p
            className="text-xs tracking-[0.18em] uppercase mt-4"
            style={{ color: "rgba(162,140,117,0.55)" }}
          >
            The goal of a consistent photography protocol
          </p>
        </div>

        {/* Category sections */}
        <div className="space-y-12 mb-16">
          {categories.map((cat) => (
            <div key={cat.num}>
              <div className="flex items-start gap-5 mb-6">
                <span
                  className="font-display text-4xl font-light flex-shrink-0 leading-none mt-1"
                  style={{ color: "rgba(162,140,117,0.2)" }}
                >
                  {cat.num}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xl">{cat.icon}</span>
                    <h2
                      className="font-display text-2xl font-light"
                      style={{ color: "#fffdf6" }}
                    >
                      {cat.title}
                    </h2>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>
                    {cat.intro}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-0 md:ml-16">
                {cat.tips.map((tip) => (
                  <div
                    key={tip.label}
                    className="rounded-xl border p-5"
                    style={{
                      background: "rgba(162,140,117,0.04)",
                      borderColor: "rgba(162,140,117,0.1)",
                    }}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <span
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: "#a28c75", fontSize: "18px", lineHeight: 1 }}
                      >
                        ·
                      </span>
                      <h4
                        className="text-sm font-semibold leading-snug"
                        style={{ color: "#fffdf6" }}
                      >
                        {tip.label}
                      </h4>
                    </div>
                    <p
                      className="text-sm leading-relaxed pl-6"
                      style={{ color: "rgba(255,253,246,0.42)" }}
                    >
                      {tip.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="h-px mt-12"
                style={{ background: "rgba(162,140,117,0.08)" }}
              />
            </div>
          ))}
        </div>

        {/* Pre-shoot checklist */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2
              className="font-display text-2xl font-light flex-shrink-0"
              style={{ color: "#fffdf6" }}
            >
              Pre-Shoot Checklist
            </h2>
            <div className="h-px flex-1" style={{ background: "rgba(162,140,117,0.15)" }} />
          </div>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "rgba(255,253,246,0.42)" }}
          >
            Run through this before every patient photo session — before and after.
          </p>

          <div
            className="rounded-2xl border p-7 md:p-8"
            style={{
              background: "linear-gradient(145deg, #140008 0%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.15)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
              {checklist.map((item, i) => (
                <div
                  key={item}
                  className="flex items-start gap-3 py-3 border-b"
                  style={{ borderColor: "rgba(162,140,117,0.07)" }}
                >
                  <span
                    className="font-display text-sm flex-shrink-0 mt-0.5"
                    style={{ color: "rgba(162,140,117,0.35)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-sm leading-snug"
                    style={{ color: "rgba(255,253,246,0.55)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
