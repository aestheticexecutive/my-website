"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Printer,
  Save,
  Check,
  ChevronDown,
  ExternalLink,
  Target,
  Fingerprint,
  Compass,
  BarChart2,
  Trash2,
  Plus,
  Palette,
  ListChecks,
  Share2,
  TrendingUp,
  Search,
  Building2,
  Handshake,
  Gift,
  CalendarDays,
  Star,
  Mail,
  Camera,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

type Tab = "aim" | "identity" | "method" | "scorecard";
type ChannelStatus = "not-started" | "in-progress" | "active" | "needs-review";

type ChannelKey =
  | "branding"
  | "brandConsistency"
  | "organicSocial"
  | "paidSocial"
  | "seo"
  | "googleAds"
  | "communityPresence"
  | "localPartners"
  | "patientReferral"
  | "events"
  | "monthlyFeatures"
  | "emailText"
  | "patientExperience";

interface ChannelEntry {
  status: ChannelStatus;
  strategy: string;
  owner: string;
  cadence: string;
}

interface AimData {
  primaryAim: string;
  revenueGrowth: string;
  profitability: string;
  brandAwareness: string;
  brandExperience: string;
  operationalStability: string;
  recurringRevenue: string;
  serviceMix: string;
  teamDevelopment: string;
}

interface IdentityData {
  feeling: string;
  words: string;
  phrases: string;
  visualIdentity: string;
  differentiator: string;
  slogan: string;
  customerExperience: string;
}

interface ScorecardEntry {
  id: string;
  month: string;
  adSpend: string;
  agencyFee: string;
  newPatientRevenue: string;
  allPatientRevenue: string;
  impressions: string;
  newLeads: string;
  newConsults: string;
  newProcedures: string;
  overallVisits: string;
  newMembers: string;
  totalMembers: string;
  patientReferrals: string;
  googleReviews: string;
  featureRevenue: string;
  productRevenue: string;
  productAttachRate: string;
  overallRevenue: string;
  reBookingRate: string;
  avgInvoiceValue: string;
  igFollowers: string;
  tiktokFollowers: string;
  whatWorked: string;
  whatUnderperformed: string;
  nextMonthActions: string;
  createdAt: string;
}

interface StoreData {
  aim: AimData;
  identity: IdentityData;
  channels: Record<ChannelKey, ChannelEntry>;
  leadConversionNotes: string;
  scorecardEntries: ScorecardEntry[];
}

// ── Constants ────────────────────────────────────────────────────────────────

const AIM_FIELDS: { key: keyof Omit<AimData, "primaryAim">; label: string; prompt: string }[] = [
  { key: "revenueGrowth", label: "Revenue Stability & Growth", prompt: "Define clear monthly and annual revenue targets and how you'll build consistent, repeatable revenue streams." },
  { key: "profitability", label: "Profitability & Financial Health", prompt: "How will you prioritize predictable profitability, keep expenses disciplined, and reinvest with intention?" },
  { key: "brandAwareness", label: "Brand Awareness & Market Positioning", prompt: "How will you increase local visibility and become the trusted, go-to destination in your market?" },
  { key: "brandExperience", label: "Brand Experience Consistency", prompt: "What should the brand feel like at every touchpoint, and how will you audit execution to keep it consistent?" },
  { key: "operationalStability", label: "Operational Stability & Scalability", prompt: "What systems and procedures will let the practice grow without chaos or burning out the team?" },
  { key: "recurringRevenue", label: "Recurring & Predictable Revenue", prompt: "How will you grow memberships, packages, or programs to increase retention and reduce month-to-month volatility?" },
  { key: "serviceMix", label: "Service & Product Mix Optimization", prompt: "Which services will you strategically grow, and how will you balance demand, margin, and long-term value?" },
  { key: "teamDevelopment", label: "Team Development & Culture", prompt: "How will you build a skilled, engaged team with clear expectations, accountability, and growth paths?" },
];

const IDENTITY_FIELDS: { key: keyof IdentityData; label: string }[] = [
  { key: "feeling", label: "What do you want your brand to make people feel?" },
  { key: "words", label: "What words embody the brand?" },
  { key: "phrases", label: "What phrases embody the brand?" },
  { key: "visualIdentity", label: "What color scheme, fonts, logo, and imagery embody the brand?" },
  { key: "differentiator", label: "What is the brand's differentiator?" },
  { key: "slogan", label: "What is the brand's slogan?" },
  { key: "customerExperience", label: "How is the brand embodied through the patient experience?" },
];

interface ChannelMeta {
  key: ChannelKey;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  prompt: string;
  links: { label: string; href: string; external?: boolean }[];
}

const CHANNELS: ChannelMeta[] = [
  {
    key: "branding",
    label: "Branding",
    icon: Palette,
    prompt: "Document how your visual identity, voice, and brand kit come together — and who owns keeping it current.",
    links: [
      { label: "Brand Kit Builder", href: "/tools/brand-kit-builder.html", external: true },
      { label: "Why Your Brand Kit Matters", href: "/members/resources/marketing/brand-kit" },
      { label: "Ideal Client Builder", href: "/tools/ideal-client-builder.html", external: true },
    ],
  },
  {
    key: "brandConsistency",
    label: "Brand Consistency",
    icon: ListChecks,
    prompt: "How will you audit every touchpoint — website, social, phone, in-clinic — to keep the brand experience consistent as you grow?",
    links: [],
  },
  {
    key: "organicSocial",
    label: "Organic Social Media",
    icon: Share2,
    prompt: "Platforms, posting cadence, and content standards for building trust before you expect it to convert.",
    links: [{ label: "Social Media Best Practices", href: "/members/resources/marketing/social-media" }],
  },
  {
    key: "paidSocial",
    label: "Paid Social Media",
    icon: TrendingUp,
    prompt: "Ad budget, target services, creative approach, and how leads get followed up on.",
    links: [{ label: "Meta Ads", href: "/members/resources/marketing/meta-ads" }],
  },
  {
    key: "seo",
    label: "SEO",
    icon: Search,
    prompt: "Website visibility, Google Business Profile, reviews, and content strategy working together.",
    links: [
      { label: "Treatment Landing Pages", href: "/members/resources/marketing/landing-pages" },
      { label: "SEO & Online Visibility Guide", href: "/members/resources/marketing/seo-guide" },
      { label: "Google Business Profile", href: "/members/resources/marketing/google-business-profile" },
      { label: "Google Reviews", href: "/members/resources/marketing/google-reviews" },
      { label: "Blog Strategy", href: "/members/resources/marketing/blog-strategy" },
    ],
  },
  {
    key: "googleAds",
    label: "Google Ads",
    icon: Target,
    prompt: "Keyword strategy, budget, and what you expect to see given your market's competitiveness.",
    links: [{ label: "Google Ads", href: "/members/resources/marketing/google-ads" }],
  },
  {
    key: "communityPresence",
    label: "Community Presence",
    icon: Building2,
    prompt: "Local events, sponsorships, and grassroots engagement that build brand affinity over time.",
    links: [{ label: "Strategic Community Partnerships", href: "/members/resources/marketing/community-partnerships" }],
  },
  {
    key: "localPartners",
    label: "Local Partners",
    icon: Handshake,
    prompt: "Which local influencers or business owners will you build referral relationships with, and how?",
    links: [{ label: "Referral Partner Program", href: "/members/resources/marketing/referral-partners" }],
  },
  {
    key: "patientReferral",
    label: "Patient Referral Program",
    icon: Gift,
    prompt: "How you'll make sure every patient knows about the referral program and how easy it is to use.",
    links: [{ label: "Patient Referral Program", href: "/members/resources/marketing/patient-referral" }],
  },
  {
    key: "events",
    label: "Events",
    icon: CalendarDays,
    prompt: "How many events per year, who they're for, and what makes them feel exclusive rather than routine.",
    links: [
      { label: "Event Planning", href: "/members/resources/marketing/event-planning" },
      { label: "Event Planner Tool", href: "/tools/event-planner.html", external: true },
    ],
  },
  {
    key: "monthlyFeatures",
    label: "Monthly Features",
    icon: Star,
    prompt: "What gets featured each month, to which demographic, and how you'll track performance.",
    links: [
      { label: "Monthly Features", href: "/members/resources/marketing/monthly-features" },
      { label: "Promo Calendar Tool", href: "/tools/promo-calendar.html", external: true },
    ],
  },
  {
    key: "emailText",
    label: "Email & Text Blasts",
    icon: Mail,
    prompt: "Your monthly email cadence, text segmentation approach, and the goals behind each message.",
    links: [
      { label: "Email & Text Marketing", href: "/members/resources/marketing/email-text-marketing" },
      { label: "Automated Campaigns", href: "/members/resources/marketing/automated-campaigns" },
    ],
  },
  {
    key: "patientExperience",
    label: "Patient Experience Optimization",
    icon: Camera,
    prompt: "How the patient journey naturally introduces new services, photography, and membership value.",
    links: [
      { label: "Before & After Photography", href: "/members/resources/marketing/before-after-photos" },
      { label: "Maximizing Memberships + Rewards Guide", href: "/members/resources/marketing/membership-rewards-guide" },
      { label: "Membership + Rewards Audit Tool", href: "/members/resources/marketing/membership-rewards-audit" },
    ],
  },
];

const STATUS_LABELS: Record<ChannelStatus, string> = {
  "not-started": "Not Started",
  "in-progress": "In Progress",
  active: "Active",
  "needs-review": "Needs Review",
};

const STATUS_COLORS: Record<ChannelStatus, string> = {
  "not-started": "rgba(255,253,246,0.35)",
  "in-progress": "#c8823c",
  active: "#5cb0a8",
  "needs-review": "#c26f96",
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function uid(): string {
  return Math.random().toString(36).slice(2, 11);
}

function currentMonthValue(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

function monthLabel(value: string): string {
  if (!value) return "";
  const [y, m] = value.split("-").map(Number);
  if (!y || !m) return value;
  return new Date(y, m - 1, 1).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function parseNum(s: string): number {
  const n = parseFloat(String(s).replace(/[^0-9.-]/g, ""));
  return isNaN(n) ? 0 : n;
}

function formatMoney(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function formatPercent(n: number): string {
  if (!isFinite(n)) return "—";
  return `${n.toFixed(1)}%`;
}

function formatRatio(n: number): string {
  if (!isFinite(n) || n === 0) return "—";
  return `${n.toFixed(2)}x`;
}

function relativeTime(iso: string): string {
  const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (diff < 10) return "just now";
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  return new Date(iso).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function computeScorecardStats(e: ScorecardEntry) {
  const adSpend = parseNum(e.adSpend);
  const agencyFee = parseNum(e.agencyFee);
  const totalSpent = adSpend + agencyFee;
  const newPatientRevenue = parseNum(e.newPatientRevenue);
  const allPatientRevenue = parseNum(e.allPatientRevenue);
  const impressions = parseNum(e.impressions);
  const newLeads = parseNum(e.newLeads);
  const newConsults = parseNum(e.newConsults);
  const newProcedures = parseNum(e.newProcedures);

  return {
    totalSpent,
    newPatientROAS: totalSpent > 0 ? newPatientRevenue / totalSpent : 0,
    allPatientROAS: totalSpent > 0 ? allPatientRevenue / totalSpent : 0,
    impressionToLead: impressions > 0 ? (newLeads / impressions) * 100 : 0,
    leadToConsult: newLeads > 0 ? (newConsults / newLeads) * 100 : 0,
    consultToProcedure: newConsults > 0 ? (newProcedures / newConsults) * 100 : 0,
  };
}

function defaultAim(): AimData {
  return {
    primaryAim: "",
    revenueGrowth: "",
    profitability: "",
    brandAwareness: "",
    brandExperience: "",
    operationalStability: "",
    recurringRevenue: "",
    serviceMix: "",
    teamDevelopment: "",
  };
}

function defaultIdentity(): IdentityData {
  return {
    feeling: "",
    words: "",
    phrases: "",
    visualIdentity: "",
    differentiator: "",
    slogan: "",
    customerExperience: "",
  };
}

function defaultChannels(): Record<ChannelKey, ChannelEntry> {
  const out = {} as Record<ChannelKey, ChannelEntry>;
  for (const c of CHANNELS) {
    out[c.key] = { status: "not-started", strategy: "", owner: "", cadence: "" };
  }
  return out;
}

function defaultScorecardEntry(): Omit<ScorecardEntry, "id" | "createdAt"> {
  return {
    month: currentMonthValue(),
    adSpend: "",
    agencyFee: "",
    newPatientRevenue: "",
    allPatientRevenue: "",
    impressions: "",
    newLeads: "",
    newConsults: "",
    newProcedures: "",
    overallVisits: "",
    newMembers: "",
    totalMembers: "",
    patientReferrals: "",
    googleReviews: "",
    featureRevenue: "",
    productRevenue: "",
    productAttachRate: "",
    overallRevenue: "",
    reBookingRate: "",
    avgInvoiceValue: "",
    igFollowers: "",
    tiktokFollowers: "",
    whatWorked: "",
    whatUnderperformed: "",
    nextMonthActions: "",
  };
}

function defaultData(): StoreData {
  return {
    aim: defaultAim(),
    identity: defaultIdentity(),
    channels: defaultChannels(),
    leadConversionNotes: "",
    scorecardEntries: [],
  };
}

// ── Small shared UI ──────────────────────────────────────────────────────────

const inputStyle = { background: "rgba(162,140,117,0.07)", border: "1px solid rgba(162,140,117,0.2)", color: "#fffdf6" };

function TextField({ label, value, onChange, placeholder }: { label?: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div>
      {label && (
        <label className="block text-xs tracking-[0.1em] uppercase mb-2" style={{ color: "rgba(255,253,246,0.4)" }}>
          {label}
        </label>
      )}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-10 px-3 rounded-lg text-sm outline-none"
        style={inputStyle}
      />
    </div>
  );
}

function NumberField({ label, value, onChange, prefix }: { label: string; value: string; onChange: (v: string) => void; prefix?: string }) {
  return (
    <div>
      <label className="block text-xs tracking-[0.1em] uppercase mb-2" style={{ color: "rgba(255,253,246,0.4)" }}>
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: "rgba(255,253,246,0.35)" }}>
            {prefix}
          </span>
        )}
        <input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="0"
          className="w-full h-10 rounded-lg text-sm outline-none"
          style={{ ...inputStyle, paddingLeft: prefix ? "1.6rem" : "0.75rem", paddingRight: "0.75rem" }}
        />
      </div>
    </div>
  );
}

function TextArea({ label, value, onChange, placeholder, rows = 3 }: { label?: string; value: string; onChange: (v: string) => void; placeholder?: string; rows?: number }) {
  return (
    <div>
      {label && (
        <label className="block text-xs tracking-[0.1em] uppercase mb-2" style={{ color: "rgba(255,253,246,0.4)" }}>
          {label}
        </label>
      )}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-3 py-2.5 rounded-lg text-sm outline-none resize-none leading-relaxed"
        style={inputStyle}
      />
    </div>
  );
}

function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg px-3 py-2.5" style={{ background: "rgba(162,140,117,0.06)", border: "1px solid rgba(162,140,117,0.14)" }}>
      <p className="text-[10px] tracking-[0.12em] uppercase mb-1" style={{ color: "rgba(162,140,117,0.6)" }}>{label}</p>
      <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>{value}</p>
    </div>
  );
}

// ── Component ────────────────────────────────────────────────────────────────

export default function MarketingStrategyToolPage() {
  const { user } = useUser();
  const [data, setData] = useState<StoreData>(defaultData());
  const [tab, setTab] = useState<Tab>("aim");
  const [openChannel, setOpenChannel] = useState<ChannelKey | null>("branding");
  const [entryDraft, setEntryDraft] = useState(defaultScorecardEntry());
  const [openEntryId, setOpenEntryId] = useState<string | null>(null);

  const [savedFlash, setSavedFlash] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [, setTick] = useState(0);

  const storageKey = user ? `ae_marketing_strategy_${user.id}` : null;

  useEffect(() => {
    if (!storageKey) return;
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        setData({
          aim: { ...defaultAim(), ...(parsed.aim ?? {}) },
          identity: { ...defaultIdentity(), ...(parsed.identity ?? {}) },
          channels: { ...defaultChannels(), ...(parsed.channels ?? {}) },
          leadConversionNotes: parsed.leadConversionNotes ?? "",
          scorecardEntries: Array.isArray(parsed.scorecardEntries) ? parsed.scorecardEntries : [],
        });
        if (parsed._savedAt) setLastSaved(parsed._savedAt);
      }
    } catch {}
  }, [storageKey]);

  useEffect(() => {
    if (!storageKey) return;
    const t = setTimeout(() => {
      const now = new Date().toISOString();
      localStorage.setItem(storageKey, JSON.stringify({ ...data, _savedAt: now }));
      setLastSaved(now);
    }, 800);
    return () => clearTimeout(t);
  }, [data, storageKey]);

  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 30000);
    return () => clearInterval(t);
  }, []);

  const handleSave = useCallback(() => {
    if (!storageKey) return;
    const now = new Date().toISOString();
    localStorage.setItem(storageKey, JSON.stringify({ ...data, _savedAt: now }));
    setLastSaved(now);
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 2000);
  }, [storageKey, data]);

  const handlePrint = () => window.print();

  function updateAimField<K extends keyof AimData>(key: K, value: AimData[K]) {
    setData((prev) => ({ ...prev, aim: { ...prev.aim, [key]: value } }));
  }
  function updateIdentityField<K extends keyof IdentityData>(key: K, value: IdentityData[K]) {
    setData((prev) => ({ ...prev, identity: { ...prev.identity, [key]: value } }));
  }
  function updateChannelField(key: ChannelKey, field: keyof ChannelEntry, value: string) {
    setData((prev) => ({
      ...prev,
      channels: { ...prev.channels, [key]: { ...prev.channels[key], [field]: value } },
    }));
  }

  function addScorecardEntry() {
    const entry: ScorecardEntry = { id: uid(), createdAt: new Date().toISOString(), ...entryDraft };
    setData((prev) => ({ ...prev, scorecardEntries: [entry, ...prev.scorecardEntries] }));
    setEntryDraft({ ...defaultScorecardEntry(), month: currentMonthValue() });
  }
  function deleteScorecardEntry(id: string) {
    setData((prev) => ({ ...prev, scorecardEntries: prev.scorecardEntries.filter((e) => e.id !== id) }));
    if (openEntryId === id) setOpenEntryId(null);
  }

  const sortedEntries = useMemo(
    () => [...data.scorecardEntries].sort((a, b) => (a.month < b.month ? 1 : -1)),
    [data.scorecardEntries]
  );
  const latestEntry = sortedEntries[0] ?? null;
  const latestStats = latestEntry ? computeScorecardStats(latestEntry) : null;

  const draftStats = useMemo(() => computeScorecardStats({ ...entryDraft, id: "", createdAt: "" }), [entryDraft]);

  const channelsCompleted = Object.values(data.channels).filter((c) => c.status === "active").length;

  const tabs: { key: Tab; label: string; icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }> }[] = [
    { key: "aim", label: "Aim", icon: Compass },
    { key: "identity", label: "Identity", icon: Fingerprint },
    { key: "method", label: "Method", icon: ListChecks },
    { key: "scorecard", label: "Scorecard", icon: BarChart2 },
  ];

  return (
    <>
      <style>{`
        @media print {
          body * { visibility: hidden; }
          .no-print { display: none !important; }
          #strategy-print-doc, #strategy-print-doc * { visibility: visible; }
          #strategy-print-doc {
            display: block !important;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 0.5in;
            margin: 0;
            color: #111;
            background: #fff;
          }
        }
      `}</style>

      <div className="min-h-screen" style={{ background: "#170009" }}>
        {/* Header */}
        <div className="border-b px-6 md:px-10 py-6 no-print" style={{ borderColor: "rgba(162,140,117,0.12)" }}>
          <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
            <Link
              href="/members/resources/marketing"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors hover:opacity-70"
              style={{ color: "rgba(162,140,117,0.6)" }}
            >
              <ArrowLeft size={13} />
              Marketing
            </Link>
            <div className="flex items-center gap-2">
              {lastSaved && !savedFlash && (
                <span className="text-xs hidden sm:block" style={{ color: "rgba(162,140,117,0.4)" }}>
                  Auto-saved {relativeTime(lastSaved)}
                </span>
              )}
              <button
                onClick={handleSave}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-all"
                style={{
                  background: savedFlash ? "rgba(162,140,117,0.2)" : "transparent",
                  borderColor: "rgba(162,140,117,0.25)",
                  color: savedFlash ? "#a28c75" : "rgba(162,140,117,0.55)",
                }}
              >
                {savedFlash ? <Check size={12} /> : <Save size={12} />}
                {savedFlash ? "Saved!" : "Save"}
              </button>
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90"
                style={{ background: "#a28c75", color: "#170009" }}
              >
                <Printer size={13} />
                Print
              </button>
            </div>
          </div>

          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#a28c75" }}>
            Marketing
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-light mb-3" style={{ color: "#fffdf6" }}>
            Marketing Strategy Builder
          </h1>
          <p className="text-sm max-w-2xl leading-relaxed mb-8" style={{ color: "rgba(255,253,246,0.5)" }}>
            Work through the AIMS framework — Aim, Identity, Method, Scorecard — and document your
            practice&apos;s actual marketing strategy as you go, channel by channel, with the metrics
            that tell you if it&apos;s working.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => {
              const Icon = t.icon;
              const isActive = tab === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className="inline-flex items-center gap-2 px-4 h-10 rounded-lg text-sm font-medium tracking-wide transition-all"
                  style={{
                    background: isActive ? "#a28c75" : "rgba(162,140,117,0.08)",
                    color: isActive ? "#170009" : "rgba(255,253,246,0.6)",
                    border: `1px solid ${isActive ? "#a28c75" : "rgba(162,140,117,0.2)"}`,
                  }}
                >
                  <Icon size={14} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-10 py-12 no-print">
          {/* ── AIM ── */}
          {tab === "aim" && (
            <div className="space-y-8">
              <div className="rounded-xl p-6" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.2)" }}>
                <TextArea
                  label="Your Primary Aim — what are you aiming for right now?"
                  value={data.aim.primaryAim}
                  onChange={(v) => updateAimField("primaryAim", v)}
                  placeholder="In one or two sentences, what is this practice's marketing working toward this year?"
                  rows={3}
                />
              </div>

              <div>
                <p className="text-xs tracking-[0.2em] uppercase mb-5" style={{ color: "rgba(162,140,117,0.6)" }}>
                  The Guiding Light — your 8 strategic focus areas
                </p>
                <div className="space-y-5">
                  {AIM_FIELDS.map((f, i) => (
                    <div key={f.key} className="rounded-xl p-6" style={{ background: "rgba(162,140,117,0.04)", border: "1px solid rgba(162,140,117,0.12)" }}>
                      <div className="flex items-start gap-3 mb-3">
                        <span
                          className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5"
                          style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
                        >
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-sm font-medium" style={{ color: "#fffdf6" }}>{f.label}</p>
                          <p className="text-xs leading-relaxed mt-1" style={{ color: "rgba(255,253,246,0.45)" }}>{f.prompt}</p>
                        </div>
                      </div>
                      <TextArea value={data.aim[f.key]} onChange={(v) => updateAimField(f.key, v)} placeholder="Document your goal and how you'll get there..." rows={2} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── IDENTITY ── */}
          {tab === "identity" && (
            <div className="space-y-8">
              <div className="rounded-xl p-6" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.2)" }}>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.6)" }}>
                  Your brand is the perception people have of your business — how it feels, not just how
                  it looks. It&apos;s shaped by every interaction, and it exists whether you define it or
                  not. Answer these honestly; they&apos;re the foundation everything else in this playbook builds on.
                </p>
              </div>
              <div className="space-y-5">
                {IDENTITY_FIELDS.map((f) => (
                  <div key={f.key} className="rounded-xl p-6" style={{ background: "rgba(162,140,117,0.04)", border: "1px solid rgba(162,140,117,0.12)" }}>
                    <TextArea label={f.label} value={data.identity[f.key]} onChange={(v) => updateIdentityField(f.key, v)} rows={2} />
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="/tools/brand-kit-builder.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 h-10 rounded text-xs font-medium tracking-wide" style={{ background: "transparent", color: "#a28c75", border: "1px solid rgba(162,140,117,0.3)" }}>
                  <ExternalLink size={12} />
                  Open Brand Kit Builder
                </a>
                <a href="/tools/ideal-client-builder.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 h-10 rounded text-xs font-medium tracking-wide" style={{ background: "transparent", color: "#a28c75", border: "1px solid rgba(162,140,117,0.3)" }}>
                  <ExternalLink size={12} />
                  Open Ideal Client Builder
                </a>
              </div>
            </div>
          )}

          {/* ── METHOD ── */}
          {tab === "method" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(162,140,117,0.6)" }}>
                  {channelsCompleted} of {CHANNELS.length} channels marked Active
                </p>
              </div>
              <div className="space-y-3">
                {CHANNELS.map((c) => {
                  const entry = data.channels[c.key];
                  const isOpen = openChannel === c.key;
                  const Icon = c.icon;
                  return (
                    <div key={c.key} className="rounded-xl overflow-hidden" style={{ background: "rgba(162,140,117,0.04)", border: "1px solid rgba(162,140,117,0.14)" }}>
                      <button
                        onClick={() => setOpenChannel(isOpen ? null : c.key)}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.2)" }}>
                            <Icon size={14} style={{ color: "#a28c75" }} />
                          </div>
                          <span className="text-sm font-medium truncate" style={{ color: "#fffdf6" }}>{c.label}</span>
                          <span
                            className="text-[10px] tracking-[0.1em] uppercase px-2 py-1 rounded-full flex-shrink-0"
                            style={{ background: `${STATUS_COLORS[entry.status]}1a`, color: STATUS_COLORS[entry.status], border: `1px solid ${STATUS_COLORS[entry.status]}40` }}
                          >
                            {STATUS_LABELS[entry.status]}
                          </span>
                        </div>
                        <ChevronDown size={16} className="flex-shrink-0 transition-transform" style={{ color: "rgba(162,140,117,0.6)", transform: isOpen ? "rotate(180deg)" : "none" }} />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 space-y-4">
                          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,253,246,0.45)" }}>{c.prompt}</p>

                          {c.links.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {c.links.map((link) =>
                                link.external ? (
                                  <a
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-colors"
                                    style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)", color: "#a28c75" }}
                                  >
                                    {link.label}
                                    <ExternalLink size={10} />
                                  </a>
                                ) : (
                                  <Link
                                    key={link.href}
                                    href={link.href}
                                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-colors"
                                    style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)", color: "#a28c75" }}
                                  >
                                    {link.label}
                                    <ArrowRight size={10} />
                                  </Link>
                                )
                              )}
                            </div>
                          )}

                          <div className="grid sm:grid-cols-3 gap-3">
                            <div>
                              <label className="block text-xs tracking-[0.1em] uppercase mb-2" style={{ color: "rgba(255,253,246,0.4)" }}>Status</label>
                              <select
                                value={entry.status}
                                onChange={(e) => updateChannelField(c.key, "status", e.target.value)}
                                className="w-full h-10 px-3 rounded-lg text-sm outline-none"
                                style={inputStyle}
                              >
                                {(Object.keys(STATUS_LABELS) as ChannelStatus[]).map((s) => (
                                  <option key={s} value={s} style={{ background: "#170009" }}>{STATUS_LABELS[s]}</option>
                                ))}
                              </select>
                            </div>
                            <TextField label="Owner" value={entry.owner} onChange={(v) => updateChannelField(c.key, "owner", v)} placeholder="Who runs this?" />
                            <TextField label="Cadence" value={entry.cadence} onChange={(v) => updateChannelField(c.key, "cadence", v)} placeholder="e.g. 3x per week" />
                          </div>

                          <TextArea
                            label="Strategy & Documentation"
                            value={entry.strategy}
                            onChange={(v) => updateChannelField(c.key, "strategy", v)}
                            placeholder="What is the actual plan for this channel? Document what you're doing, not just what you intend to do."
                            rows={4}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── SCORECARD ── */}
          {tab === "scorecard" && (
            <div className="space-y-10">
              {/* Lead Conversion */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Handshake size={16} style={{ color: "#a28c75" }} />
                  <h2 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Lead Conversion</h2>
                </div>
                <div className="rounded-xl p-6 mb-3" style={{ background: "rgba(162,140,117,0.04)", border: "1px solid rgba(162,140,117,0.12)" }}>
                  <TextArea
                    value={data.leadConversionNotes}
                    onChange={(v) => setData((prev) => ({ ...prev, leadConversionNotes: v }))}
                    placeholder="Document your lead response and conversion process — response time targets, who owns follow-up, and where leads tend to fall off."
                    rows={4}
                  />
                </div>
                <Link href="/members/resources/marketing/lead-conversion" className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg" style={{ background: "rgba(162,140,117,0.1)", border: "1px solid rgba(162,140,117,0.22)", color: "#a28c75" }}>
                  Lead Conversion Playbook
                  <ArrowRight size={10} />
                </Link>
              </div>

              {/* Marketing Analytics */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <BarChart2 size={16} style={{ color: "#a28c75" }} />
                  <h2 className="font-display text-xl font-light" style={{ color: "#fffdf6" }}>Marketing Analytics</h2>
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,253,246,0.5)" }}>
                  Log a scorecard entry every month to track performance and see how you&apos;re trending over time.
                </p>

                {/* Add entry form */}
                <div className="rounded-xl p-6 mb-6" style={{ background: "linear-gradient(145deg, #2f0410 0%, #1a000c 100%)", border: "1px solid rgba(162,140,117,0.2)" }}>
                  <div className="mb-5 max-w-[200px]">
                    <label className="block text-xs tracking-[0.1em] uppercase mb-2" style={{ color: "rgba(255,253,246,0.4)" }}>Month</label>
                    <input
                      type="month"
                      value={entryDraft.month}
                      onChange={(e) => setEntryDraft((d) => ({ ...d, month: e.target.value }))}
                      className="w-full h-10 px-3 rounded-lg text-sm outline-none"
                      style={inputStyle}
                    />
                  </div>

                  <p className="text-[11px] tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Spend & Investment</p>
                  <div className="grid sm:grid-cols-3 gap-3 mb-5">
                    <NumberField label="Total Ad Spend" prefix="$" value={entryDraft.adSpend} onChange={(v) => setEntryDraft((d) => ({ ...d, adSpend: v }))} />
                    <NumberField label="Total Agency Fee" prefix="$" value={entryDraft.agencyFee} onChange={(v) => setEntryDraft((d) => ({ ...d, agencyFee: v }))} />
                    <StatChip label="Total Spent" value={formatMoney(draftStats.totalSpent)} />
                  </div>

                  <p className="text-[11px] tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Revenue Impact</p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-5">
                    <NumberField label="New Patient Revenue" prefix="$" value={entryDraft.newPatientRevenue} onChange={(v) => setEntryDraft((d) => ({ ...d, newPatientRevenue: v }))} />
                    <NumberField label="All Patient Revenue" prefix="$" value={entryDraft.allPatientRevenue} onChange={(v) => setEntryDraft((d) => ({ ...d, allPatientRevenue: v }))} />
                  </div>

                  <p className="text-[11px] tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Lead & Conversion Flow</p>
                  <div className="grid sm:grid-cols-3 gap-3 mb-5">
                    <NumberField label="Total Impressions" value={entryDraft.impressions} onChange={(v) => setEntryDraft((d) => ({ ...d, impressions: v }))} />
                    <NumberField label="Total New Leads" value={entryDraft.newLeads} onChange={(v) => setEntryDraft((d) => ({ ...d, newLeads: v }))} />
                    <NumberField label="New Patient Consults" value={entryDraft.newConsults} onChange={(v) => setEntryDraft((d) => ({ ...d, newConsults: v }))} />
                    <NumberField label="New Patient Procedures" value={entryDraft.newProcedures} onChange={(v) => setEntryDraft((d) => ({ ...d, newProcedures: v }))} />
                    <NumberField label="Total Overall Patient Visits" value={entryDraft.overallVisits} onChange={(v) => setEntryDraft((d) => ({ ...d, overallVisits: v }))} />
                  </div>

                  <p className="text-[11px] tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Conversion Rates &amp; ROAS (calculated)</p>
                  <div className="grid sm:grid-cols-3 gap-3 mb-5">
                    <StatChip label="Impression → Lead" value={formatPercent(draftStats.impressionToLead)} />
                    <StatChip label="Lead → Consult" value={formatPercent(draftStats.leadToConsult)} />
                    <StatChip label="Consult → Procedure" value={formatPercent(draftStats.consultToProcedure)} />
                    <StatChip label="New Patient ROAS" value={formatRatio(draftStats.newPatientROAS)} />
                    <StatChip label="All Patient ROAS" value={formatRatio(draftStats.allPatientROAS)} />
                  </div>

                  <p className="text-[11px] tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Growth &amp; Loyalty</p>
                  <div className="grid sm:grid-cols-4 gap-3 mb-5">
                    <NumberField label="Total New Members" value={entryDraft.newMembers} onChange={(v) => setEntryDraft((d) => ({ ...d, newMembers: v }))} />
                    <NumberField label="Total Members" value={entryDraft.totalMembers} onChange={(v) => setEntryDraft((d) => ({ ...d, totalMembers: v }))} />
                    <NumberField label="Total Patient Referrals" value={entryDraft.patientReferrals} onChange={(v) => setEntryDraft((d) => ({ ...d, patientReferrals: v }))} />
                    <NumberField label="Total Google Reviews" value={entryDraft.googleReviews} onChange={(v) => setEntryDraft((d) => ({ ...d, googleReviews: v }))} />
                  </div>

                  <p className="text-[11px] tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Revenue Performance</p>
                  <div className="grid sm:grid-cols-3 gap-3 mb-5">
                    <NumberField label="Revenue from Features" prefix="$" value={entryDraft.featureRevenue} onChange={(v) => setEntryDraft((d) => ({ ...d, featureRevenue: v }))} />
                    <NumberField label="Product Revenue" prefix="$" value={entryDraft.productRevenue} onChange={(v) => setEntryDraft((d) => ({ ...d, productRevenue: v }))} />
                    <NumberField label="Product Attachment Rate %" value={entryDraft.productAttachRate} onChange={(v) => setEntryDraft((d) => ({ ...d, productAttachRate: v }))} />
                  </div>

                  <p className="text-[11px] tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Operational &amp; Financial Health</p>
                  <div className="grid sm:grid-cols-3 gap-3 mb-5">
                    <NumberField label="Overall Revenue" prefix="$" value={entryDraft.overallRevenue} onChange={(v) => setEntryDraft((d) => ({ ...d, overallRevenue: v }))} />
                    <NumberField label="Re-Booking Rate %" value={entryDraft.reBookingRate} onChange={(v) => setEntryDraft((d) => ({ ...d, reBookingRate: v }))} />
                    <NumberField label="Average Invoice Value" prefix="$" value={entryDraft.avgInvoiceValue} onChange={(v) => setEntryDraft((d) => ({ ...d, avgInvoiceValue: v }))} />
                  </div>

                  <p className="text-[11px] tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Brand Growth (Digital Presence)</p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-5">
                    <NumberField label="Instagram Follower Count" value={entryDraft.igFollowers} onChange={(v) => setEntryDraft((d) => ({ ...d, igFollowers: v }))} />
                    <NumberField label="TikTok Follower Count" value={entryDraft.tiktokFollowers} onChange={(v) => setEntryDraft((d) => ({ ...d, tiktokFollowers: v }))} />
                  </div>

                  <p className="text-[11px] tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(162,140,117,0.6)" }}>Insights &amp; Decision-Making</p>
                  <div className="space-y-3 mb-6">
                    <TextArea label="What worked / underperformed" value={entryDraft.whatWorked} onChange={(v) => setEntryDraft((d) => ({ ...d, whatWorked: v }))} placeholder="Key findings from this month's data..." rows={2} />
                    <TextArea label="What underperformed" value={entryDraft.whatUnderperformed} onChange={(v) => setEntryDraft((d) => ({ ...d, whatUnderperformed: v }))} placeholder="Where were the drop-offs or inefficiencies?" rows={2} />
                    <TextArea label="Thoughts for next month" value={entryDraft.nextMonthActions} onChange={(v) => setEntryDraft((d) => ({ ...d, nextMonthActions: v }))} placeholder="Budget reallocations, campaign adjustments, messaging refinements..." rows={2} />
                  </div>

                  <button
                    onClick={addScorecardEntry}
                    className="inline-flex items-center gap-2 px-5 h-11 rounded text-xs font-medium tracking-[0.15em] uppercase transition-all hover:opacity-90"
                    style={{ background: "#a28c75", color: "#170009" }}
                  >
                    <Plus size={14} />
                    Save Scorecard Entry
                  </button>
                </div>

                {/* History */}
                {sortedEntries.length > 0 && (
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(162,140,117,0.6)" }}>
                      Monthly History ({sortedEntries.length})
                    </p>
                    <div className="space-y-3">
                      {sortedEntries.map((e) => {
                        const stats = computeScorecardStats(e);
                        const isOpen = openEntryId === e.id;
                        return (
                          <div key={e.id} className="rounded-xl overflow-hidden" style={{ background: "rgba(162,140,117,0.04)", border: "1px solid rgba(162,140,117,0.14)" }}>
                            <button onClick={() => setOpenEntryId(isOpen ? null : e.id)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left flex-wrap">
                              <span className="text-sm font-medium" style={{ color: "#fffdf6" }}>{monthLabel(e.month)}</span>
                              <div className="flex items-center gap-4 flex-wrap">
                                <span className="text-xs" style={{ color: "rgba(255,253,246,0.5)" }}>Overall Revenue: <strong style={{ color: "#a28c75" }}>{formatMoney(parseNum(e.overallRevenue))}</strong></span>
                                <span className="text-xs" style={{ color: "rgba(255,253,246,0.5)" }}>All Patient ROAS: <strong style={{ color: "#a28c75" }}>{formatRatio(stats.allPatientROAS)}</strong></span>
                                <ChevronDown size={16} style={{ color: "rgba(162,140,117,0.6)", transform: isOpen ? "rotate(180deg)" : "none" }} />
                              </div>
                            </button>
                            {isOpen && (
                              <div className="px-5 pb-5">
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                                  <StatChip label="Total Spent" value={formatMoney(stats.totalSpent)} />
                                  <StatChip label="New Patient ROAS" value={formatRatio(stats.newPatientROAS)} />
                                  <StatChip label="Lead → Consult" value={formatPercent(stats.leadToConsult)} />
                                  <StatChip label="Consult → Procedure" value={formatPercent(stats.consultToProcedure)} />
                                  <StatChip label="New Members" value={e.newMembers || "—"} />
                                  <StatChip label="Google Reviews" value={e.googleReviews || "—"} />
                                  <StatChip label="Re-Booking Rate" value={e.reBookingRate ? `${e.reBookingRate}%` : "—"} />
                                  <StatChip label="Avg Invoice Value" value={e.avgInvoiceValue ? formatMoney(parseNum(e.avgInvoiceValue)) : "—"} />
                                </div>
                                {(e.whatWorked || e.whatUnderperformed || e.nextMonthActions) && (
                                  <div className="space-y-2 mb-4 text-sm leading-relaxed" style={{ color: "rgba(255,253,246,0.65)" }}>
                                    {e.whatWorked && <p><span style={{ color: "#a28c75" }}>What worked:</span> {e.whatWorked}</p>}
                                    {e.whatUnderperformed && <p><span style={{ color: "#a28c75" }}>What underperformed:</span> {e.whatUnderperformed}</p>}
                                    {e.nextMonthActions && <p><span style={{ color: "#a28c75" }}>Next month:</span> {e.nextMonthActions}</p>}
                                  </div>
                                )}
                                <button onClick={() => deleteScorecardEntry(e.id)} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-colors" style={{ color: "rgba(200,100,100,0.7)", border: "1px solid rgba(200,100,100,0.2)" }}>
                                  <Trash2 size={11} />
                                  Delete Entry
                                </button>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Print doc */}
      <div id="strategy-print-doc" style={{ display: "none" }}>
        <h1 style={{ fontSize: 24, marginBottom: 4 }}>Marketing Strategy — {user?.fullName || "Practice"}</h1>
        <p style={{ fontSize: 11, color: "#555", marginBottom: 24 }}>Printed {new Date().toLocaleDateString()}</p>

        <h2 style={{ fontSize: 16, marginTop: 20, marginBottom: 8 }}>Aim</h2>
        {data.aim.primaryAim && <p style={{ fontSize: 12, marginBottom: 8 }}><strong>Primary Aim:</strong> {data.aim.primaryAim}</p>}
        {AIM_FIELDS.map((f) => data.aim[f.key] && (
          <p key={f.key} style={{ fontSize: 12, marginBottom: 6 }}><strong>{f.label}:</strong> {data.aim[f.key]}</p>
        ))}

        <h2 style={{ fontSize: 16, marginTop: 20, marginBottom: 8 }}>Identity</h2>
        {IDENTITY_FIELDS.map((f) => data.identity[f.key] && (
          <p key={f.key} style={{ fontSize: 12, marginBottom: 6 }}><strong>{f.label}:</strong> {data.identity[f.key]}</p>
        ))}

        <h2 style={{ fontSize: 16, marginTop: 20, marginBottom: 8 }}>Method</h2>
        {CHANNELS.map((c) => {
          const entry = data.channels[c.key];
          return (
            <div key={c.key} style={{ marginBottom: 10, fontSize: 12 }}>
              <strong>{c.label}</strong> — {STATUS_LABELS[entry.status]}
              {entry.owner && ` · Owner: ${entry.owner}`}
              {entry.cadence && ` · Cadence: ${entry.cadence}`}
              {entry.strategy && <p style={{ marginTop: 2, color: "#333" }}>{entry.strategy}</p>}
            </div>
          );
        })}

        <h2 style={{ fontSize: 16, marginTop: 20, marginBottom: 8 }}>Scorecard</h2>
        {data.leadConversionNotes && <p style={{ fontSize: 12, marginBottom: 10 }}><strong>Lead Conversion:</strong> {data.leadConversionNotes}</p>}
        {latestEntry && latestStats && (
          <div style={{ fontSize: 12 }}>
            <p style={{ marginBottom: 4 }}><strong>Latest month:</strong> {monthLabel(latestEntry.month)}</p>
            <p>Total Spent: {formatMoney(latestStats.totalSpent)} · New Patient ROAS: {formatRatio(latestStats.newPatientROAS)} · All Patient ROAS: {formatRatio(latestStats.allPatientROAS)}</p>
            <p>Overall Revenue: {formatMoney(parseNum(latestEntry.overallRevenue))} · Re-Booking Rate: {latestEntry.reBookingRate || "—"}%</p>
          </div>
        )}
      </div>
    </>
  );
}
