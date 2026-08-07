// Static, hand-curated index of everything searchable across the member site.
// There's no CMS/database backing Resources/Templates/Webinars — content lives in
// per-page arrays and hand-written JSX — so this index is maintained by hand
// alongside those pages rather than generated.

export type SearchEntry = {
  title: string;
  description: string;
  category: string;
  type: string;
  href: string;
  external?: boolean; // opens in a new tab (static /tools/*.html pages)
};

export const searchIndex: SearchEntry[] = [
  // ── Home ──────────────────────────────────────────────────────────────────
  { title: "Dashboard", description: "Your member home base — quick links to Templates, Webinars, and Resources plus recent activity.", category: "Home", type: "Page", href: "/members/dashboard" },
  { title: "All Resources", description: "Browse every resource category — Marketing, Operations, Finance, Staff, and Clinical.", category: "Home", type: "Page", href: "/members/resources" },

  // ── Operations ────────────────────────────────────────────────────────────
  { title: "Consultation Conversion Tracker", description: "Log consultations by provider and service type, then run reports by date range to see conversion rates and track notes on what drove the numbers.", category: "Operations", type: "Tool", href: "/members/resources/operations/consultation-conversion-tracker" },
  { title: "Opening & Closing Checklist Builder", description: "Pre-loaded MedSpa opening and closing duties — toggle, edit, add your own, set frequency, and print a branded checklist with checkbox, initials, and date lines.", category: "Operations", type: "Tool", href: "/members/resources/operations/opening-closing-checklist" },
  { title: "Patient Intake Form Builder", description: "Build a branded patient intake form — toggle or edit 34 pre-loaded concern questions across 4 sections, add your own, and print or save as PDF.", category: "Operations", type: "Tool", href: "/members/resources/operations/intake-form-builder" },
  { title: "Treatment Plan Builder", description: "Build a branded, print-ready treatment plan with up to 6 treatment blocks, pricing, a home care product table, and notes.", category: "Operations", type: "Tool", href: "/members/resources/operations/treatment-plan-builder" },
  { title: "Secret Shopper Log", description: "Log every secret shop — own practice or competitor — across all 9 questionnaire sections with photo uploads and scoring.", category: "Operations", type: "Tool", href: "/tools/secret-shopper-log.html", external: true },
  { title: "Why Secret Shop?", description: "The strategy behind secret shopping — why to shop yourself and competitors, cadence, debriefing, and what to do with results.", category: "Operations", type: "Guide", href: "/members/resources/operations/secret-shopping" },
  { title: "Printable Secret Shopper Questionnaire", description: "All 9 sections with write-in lines and scoring boxes, formatted for print.", category: "Operations", type: "Print / PDF", href: "/tools/secret-shopper-questionnaire.html", external: true },
  { title: "New Patient Intake SOP", description: "End-to-end checklist covering booking confirmation through chart creation, medical history, and pre-treatment prep.", category: "Operations", type: "Checklist", href: "/members/resources/operations" },
  { title: "Appointment Scheduling Best Practices", description: "How to structure your schedule for maximum revenue per hour and protect time for high-value appointments.", category: "Operations", type: "Guide", href: "/members/resources/operations" },
  { title: "Inventory Management System", description: "Spreadsheet system for tracking product inventory, reorder points, expiration dates, and cost of goods.", category: "Operations", type: "Template", href: "/members/resources/operations" },
  { title: "Treatment Room Setup Standards", description: "Room-by-room setup standards for cleanliness, supply stocking, and equipment positioning.", category: "Operations", type: "Checklist", href: "/members/resources/operations" },
  { title: "Patient Complaint Resolution SOP", description: "Step-by-step protocol for handling patient dissatisfaction from first contact to resolution documentation.", category: "Operations", type: "Guide", href: "/members/resources/operations" },
  { title: "Vendor Contract Template", description: "Customizable contract template for product vendors, equipment suppliers, and service providers.", category: "Operations", type: "Template", href: "/members/resources/operations" },
  { title: "Practice Operations Manual Outline", description: "A structured framework for building your practice's master operations manual.", category: "Operations", type: "Template", href: "/members/resources/operations" },

  // ── Marketing ─────────────────────────────────────────────────────────────
  { title: "Treatment Landing Pages", description: "SEO + conversion playbook for building treatment pages that rank in Google and turn visits into booked consultations.", category: "Marketing", type: "Guide", href: "/members/resources/marketing/landing-pages" },
  { title: "SEO & Online Visibility Guide", description: "How Google ranks your practice, the 10 factors that determine visibility, and quick wins.", category: "Marketing", type: "Guide", href: "/members/resources/marketing/seo-guide" },
  { title: "AI SEO Analyzer", description: "Enter your website URL and get an AI-powered scan of all 10 SEO ranking factors with what to fix.", category: "Marketing", type: "Tool", href: "/tools/seo-analyzer.html", external: true },
  { title: "Google Business Profile", description: "Complete SOP for ranking in Google's Local Map Pack — setup, services, photos, posts, and a monthly checklist.", category: "Marketing", type: "Guide", href: "/members/resources/marketing/google-business-profile" },
  { title: "Google Reviews", description: "A practical system for collecting reviews consistently — the ask script, automation flow, and team culture.", category: "Marketing", type: "Guide", href: "/members/resources/marketing/google-reviews" },
  { title: "Monthly Features", description: "How to plan monthly features that grow revenue without discounting, plus an interactive marketing calendar.", category: "Marketing", type: "Guide", href: "/members/resources/marketing/monthly-features" },
  { title: "Promo Calendar Tool", description: "Plan and track features, campaigns, and events across the year with notes and performance metrics per entry.", category: "Marketing", type: "Tool", href: "/tools/promo-calendar.html", external: true },
  { title: "Blog Strategy", description: "How to turn your website into a patient-generating machine with consistent blog content — topics, structure, and repurposing.", category: "Marketing", type: "Guide", href: "/members/resources/marketing/blog-strategy" },
  { title: "Email & Text Marketing", description: "How to use email and text to increase retention, reactivate lapsed patients, and fill your schedule.", category: "Marketing", type: "Guide", href: "/members/resources/marketing/email-text-marketing" },
  { title: "Automated Campaigns", description: "15 automated campaigns your practice should have running — acquisition, retention, reactivation, and revenue.", category: "Marketing", type: "Guide", href: "/members/resources/marketing/automated-campaigns" },
  { title: "Meta Ads", description: "A practical guide to profitable Facebook and Instagram advertising for aesthetic practices.", category: "Marketing", type: "Guide", href: "/members/resources/marketing/meta-ads" },
  { title: "Google Ads", description: "How to build profitable Google Search campaigns — keyword tiers, negative keywords, and Quality Score.", category: "Marketing", type: "Guide", href: "/members/resources/marketing/google-ads" },
  { title: "Before & After Photography", description: "A complete protocol for lighting, angles, patient prep, and HIPAA-compliant consent for before/after photos.", category: "Marketing", type: "Guide", href: "/members/resources/marketing/before-after-photos" },
  { title: "Event Planning", description: "123-item interactive checklist covering pre-event planning, day-of execution, and post-event follow-up.", category: "Marketing", type: "Guide", href: "/members/resources/marketing/event-planning" },
  { title: "Event Planner Tool", description: "Create events, mark items done/pending/N-A, add notes, and watch a color-coded progress bar update live.", category: "Marketing", type: "Tool", href: "/tools/event-planner.html", external: true },
  { title: "Social Media Best Practices", description: "The 5 P's, push vs. pull marketing, content categories, post anatomy, and a pre-post checklist.", category: "Marketing", type: "Guide", href: "/members/resources/marketing/social-media" },
  { title: "Patient Referral Program", description: "A 12-step system for building a patient referral program that generates consistent new patient growth.", category: "Marketing", type: "Guide", href: "/members/resources/marketing/patient-referral" },
  { title: "Referral Partner Program", description: "Build a structured 'Give $50, Get $50' referral program with hairstylists, lash artists, and other providers.", category: "Marketing", type: "Guide", href: "/members/resources/marketing/referral-partners" },
  { title: "Strategic Community Partnerships", description: "Build cross-promotional relationships with gyms, yoga studios, boutiques, and wellness centers.", category: "Marketing", type: "Guide", href: "/members/resources/marketing/community-partnerships" },
  { title: "Brand Kit Builder", description: "Document your brand's mission, values, color palette, typography, voice, and target client — export a formatted brand kit.", category: "Marketing", type: "Tool", href: "/tools/brand-kit-builder.html", external: true },
  { title: "Why Your Brand Kit Matters", description: "Why an intentional brand matters and what goes into a complete brand kit before you start building yours.", category: "Marketing", type: "Guide", href: "/members/resources/marketing/brand-kit" },
  { title: "Ideal Client Builder", description: "Build three detailed ideal client personas plus your brand personality, voice, and promise — export for agencies.", category: "Marketing", type: "Tool", href: "/tools/ideal-client-builder.html", external: true },
  { title: "Lead Conversion Playbook", description: "A step-by-step system for responding to, nurturing, and converting new patient inquiries into treatments.", category: "Marketing", type: "Guide", href: "/members/resources/marketing/lead-conversion" },
  { title: "Patient Acquisition Funnel Template", description: "Map your full patient journey from first touchpoint to booked appointment with channel attribution.", category: "Marketing", type: "Template", href: "/members/resources/marketing" },
  { title: "Social Media Content Calendar", description: "90-day content planning spreadsheet with post types, caption prompts, and hashtag strategy.", category: "Marketing", type: "Template", href: "/members/resources/marketing" },
  { title: "Email Campaign Sequences", description: "Five ready-to-use email sequences — welcome, follow-up, reactivation, seasonal, and referral request.", category: "Marketing", type: "Template", href: "/members/resources/marketing" },
  { title: "Competitive Analysis Worksheet", description: "Structured framework for auditing competitors — pricing, services, online presence, and positioning.", category: "Marketing", type: "Tool", href: "/members/resources/marketing" },
  { title: "Brand Voice & Messaging Guide", description: "How to define and document your practice's unique voice, tone, and key messages.", category: "Marketing", type: "Guide", href: "/members/resources/marketing" },
  { title: "Review Generation SOP", description: "A repeatable system for timing review requests and responding to feedback professionally.", category: "Marketing", type: "Checklist", href: "/members/resources/marketing" },

  // ── Finance & Business Performance ───────────────────────────────────────
  { title: "Treatment Profitability Analyzer", description: "Enter price and direct costs per treatment to see net profit and margin, with 15 pre-loaded services.", category: "Finance", type: "Tool", href: "/members/resources/finance/treatment-profitability" },
  { title: "Budget & Financial Dashboard", description: "Four-tab interactive dashboard — annual budget, monthly expense tracking, quarterly rollups, and KPI benchmarking.", category: "Finance", type: "Tool", href: "/members/resources/finance/budget-tracker" },
  { title: "Budget Tracker Tool", description: "Open the interactive budget tracker directly — revenue entry, CSV expense import, and variance tracking.", category: "Finance", type: "Tool", href: "/tools/budget-tracker.html", external: true },
  { title: "KPI Tracker", description: "Track all 16 key performance indicators month over month, tagged by team member, with benchmarks and trends.", category: "Finance", type: "Tool", href: "/members/resources/finance/kpi-tracker" },
  { title: "Med Spa P&L Guide", description: "What to track, how to categorize every dollar, and how to interpret the numbers for your practice.", category: "Finance", type: "Guide", href: "/members/resources/finance/pl-guide" },
  { title: "Monthly & Annual P&L Template", description: "Four-tab Excel workbook with pre-built formulas for gross margin, payroll %, net profit, and 9 KPI metrics.", category: "Finance", type: "Template", href: "/downloads/ae-pl-template.xlsx" },
  { title: "Membership Program Pricing Model", description: "Calculate optimal membership tier pricing based on treatment costs and volume, with projected MRR.", category: "Finance", type: "Tool", href: "/members/resources/finance" },
  { title: "Cash Flow Projection Worksheet", description: "13-week cash flow projection model to anticipate shortfalls and plan for payroll.", category: "Finance", type: "Tool", href: "/members/resources/finance" },
  { title: "Pricing Strategy Playbook", description: "How to price your services with confidence — competitive positioning, value-based pricing, and bundling.", category: "Finance", type: "Guide", href: "/members/resources/finance" },
  { title: "Expense Benchmarking Guide", description: "Industry benchmarks for every major expense category in an aesthetic practice.", category: "Finance", type: "Guide", href: "/members/resources/finance" },

  // ── Staff ─────────────────────────────────────────────────────────────────
  { title: "Job Post Generator", description: "Answer a few questions and get a complete, polished job post in seconds — covers 7 roles.", category: "Staff", type: "Tool", href: "/tools/job-post-generator.html", external: true },
  { title: "Interview Guide Generator", description: "Generate a three-stage interview guide built on the MBI framework — skill, attitude, and passion.", category: "Staff", type: "Tool", href: "/tools/interview-guide-generator.html", external: true },
  { title: "Core Values Generator", description: "AI distills your authentic core values from reflective questions about your team's best moments.", category: "Staff", type: "Tool", href: "/tools/core-values-generator.html", external: true },
  { title: "Living Your Values", description: "7 activation areas — hiring, daily ops, recognition, meetings, and performance reviews — for embedding culture.", category: "Staff", type: "Guide", href: "/members/resources/staff/embed-values" },
  { title: "Mission Statement Generator", description: "Answer reflective questions about your purpose and patients — AI drafts three mission statement options.", category: "Staff", type: "Tool", href: "/tools/mission-statement-generator.html", external: true },
  { title: "Team Health Assessment", description: "Rate your team across 8 key areas — trust, communication, recognition — with a strategy builder and history tracking.", category: "Staff", type: "Tool", href: "/tools/team-satisfaction.html", external: true },
  { title: "Management Structure Builder", description: "Build a responsibility library and drag-and-drop every responsibility onto a full monthly calendar.", category: "Staff", type: "Tool", href: "/tools/management-structure.html", external: true },
  { title: "Handling Escalated Clients", description: "How to de-escalate difficult clients and resolve concerns using the 7-step LEAP FWD framework.", category: "Staff", type: "Training", href: "/members/resources/staff/escalated-customer-service" },
  { title: "Presenting Patient Financing", description: "How to introduce financing options confidently — a 6-step talk track with word-for-word scripts.", category: "Staff", type: "Training", href: "/members/resources/staff/patient-financing" },
  { title: "The Art of the Consult", description: "Complete conversion playbook from first inquiry to closed treatment plan, with objection handling.", category: "Staff", type: "Training", href: "/members/resources/staff/sales-process" },
  { title: "Phone Call Mastery", description: "A 10-step framework for turning every inbound call into a booked, confident patient.", category: "Staff", type: "Training", href: "/members/resources/staff/phone-call-mastery" },
  { title: "In-Office Sales Mastery", description: "Cross-selling framework and scripts for in-person device treatments, plus the arrival experience.", category: "Staff", type: "Training", href: "/members/resources/staff/front-desk-sales" },
  { title: "Employee File Guide", description: "The 6 required file categories, retention schedules, compliance traps, and a maintenance plan.", category: "Staff", type: "Guide", href: "/members/resources/staff/employee-files" },
  { title: "12-Week Leadership Development", description: "A self-paced curriculum built around 8 leadership books, TED talks, and podcasts with weekly reflections.", category: "Staff", type: "Course", href: "/members/resources/staff/leadership-course" },
  { title: "Employee Evaluation Forms", description: "Role-specific evaluation forms for Patient Care Coordinator, Med Spa Manager, and Provider/Injector, plus the review process.", category: "Staff", type: "Template", href: "/members/resources/staff" },
  { title: "Job Description Templates", description: "Ready-to-use job descriptions for Injector/NP, Medical Aesthetician, Patient Care Coordinator, and more.", category: "Staff", type: "Template", href: "/members/resources/staff" },
  { title: "90-Day Onboarding Checklist", description: "Structured onboarding plan covering orientation, training milestones, and 30/60/90-day expectations.", category: "Staff", type: "Checklist", href: "/members/resources/staff" },
  { title: "Performance Review Template", description: "Semi-annual performance review framework with goal-setting and competency ratings.", category: "Staff", type: "Template", href: "/members/resources/staff" },
  { title: "Staff Meeting Agenda Template", description: "A repeatable agenda structure for weekly and monthly team meetings.", category: "Staff", type: "Template", href: "/members/resources/staff" },
  { title: "Compensation Benchmarking Guide", description: "2025 salary and commission benchmarks for every role in an aesthetic practice.", category: "Staff", type: "Guide", href: "/members/resources/staff" },
  { title: "Culture & Values Workshop Guide", description: "Step-by-step facilitation guide for running a team values workshop.", category: "Staff", type: "Guide", href: "/members/resources/staff" },
  { title: "Corrective Action Documentation Template", description: "Professionally structured documentation for warnings and performance improvement plans.", category: "Staff", type: "Template", href: "/members/resources/staff" },
  { title: "Retention Strategy Playbook", description: "Proven strategies for retaining top-performing aesthetic staff.", category: "Staff", type: "Guide", href: "/members/resources/staff" },

  // ── Clinical ──────────────────────────────────────────────────────────────
  { title: "Neuromodulator Treatment Protocol Template", description: "Customizable protocol document for neurotoxin treatments — consultation criteria, dosing, and aftercare.", category: "Clinical", type: "Template", href: "/members/resources/clinical" },
  { title: "Adverse Event Response SOP", description: "Step-by-step response protocols for vascular occlusion, infection, bruising, and product migration.", category: "Clinical", type: "Checklist", href: "/members/resources/clinical" },
  { title: "Patient Consent Form Templates", description: "Legally reviewed consent templates for neurotoxins, fillers, laser treatments, peels, and microneedling.", category: "Clinical", type: "Template", href: "/members/resources/clinical" },
  { title: "Scope of Practice Reference Guide", description: "State-by-state reference for RN, APRN, PA, and physician oversight requirements.", category: "Clinical", type: "Guide", href: "/members/resources/clinical" },
  { title: "Pre & Post Care Instruction Templates", description: "Patient-facing pre and post care instruction sheets for 10 common treatments.", category: "Clinical", type: "Template", href: "/members/resources/clinical" },
  { title: "Treatment Menu Optimization Guide", description: "How to structure your treatment menu for clarity, upsell potential, and patient comprehension.", category: "Clinical", type: "Guide", href: "/members/resources/clinical" },
  { title: "Clinical Documentation Audit Checklist", description: "Quarterly audit checklist for charts, consents, treatment notes, and photography compliance.", category: "Clinical", type: "Checklist", href: "/members/resources/clinical" },
  { title: "Continuing Education Tracker", description: "Spreadsheet for tracking CE credits, certifications, and training hours across your clinical team.", category: "Clinical", type: "Template", href: "/members/resources/clinical" },

  // ── Templates ─────────────────────────────────────────────────────────────
  { title: "Event RSVP Tracking Sheet", description: "Track attendee RSVPs, contact information, and attendance for practice events and treatment nights.", category: "Templates", type: "Template", href: "/templates/event-rsvp-sheet.xlsx" },
  { title: "Employee Social Media Policy", description: "Customizable social media policy covering professional representation, HIPAA, and brand standards.", category: "Templates", type: "Template", href: "/templates/employee-social-media-policy.docx" },
  { title: "Employee Offer Letter Template", description: "Professionally formatted offer letter for clinical and administrative staff.", category: "Templates", type: "Template", href: "/members/templates" },
  { title: "Staff Performance Review Form", description: "Structured 90-day and annual performance review template.", category: "Templates", type: "Template", href: "/members/templates" },
  { title: "Monthly Financial KPI Dashboard", description: "Excel model tracking revenue per provider, average ticket value, and retail %.", category: "Templates", type: "Template", href: "/members/templates" },
  { title: "Practice Startup Budget Model", description: "Comprehensive startup budget covering equipment, buildout, licensing, and staffing.", category: "Templates", type: "Template", href: "/members/templates" },
  { title: "Patient Consent Form — Neurotoxin", description: "Legally reviewed consent form for neurotoxin treatments.", category: "Templates", type: "Template", href: "/members/templates" },
  { title: "Patient Consent Form — Filler", description: "Comprehensive consent form for dermal filler treatments including vascular occlusion risk disclosure.", category: "Templates", type: "Template", href: "/members/templates" },
  { title: "Service Menu & Price List", description: "Elegant, print-ready service menu template organized by treatment category.", category: "Templates", type: "Template", href: "/members/templates" },
  { title: "New Provider Onboarding Checklist", description: "30/60/90-day onboarding checklist for injectors and aesthetic providers.", category: "Templates", type: "Template", href: "/members/templates" },
  { title: "Vendor Comparison Worksheet", description: "Side-by-side comparison tool for evaluating product and device vendors.", category: "Templates", type: "Template", href: "/members/templates" },
  { title: "Treatment Protocol: Skin Care Analysis", description: "Standardized patient skin analysis framework for new patient consultations.", category: "Templates", type: "Template", href: "/members/templates" },
  { title: "HIPAA Privacy Policy Template", description: "Attorney-reviewed HIPAA-compliant privacy policy template for aesthetic practices.", category: "Templates", type: "Template", href: "/members/templates" },

  // ── Webinars ──────────────────────────────────────────────────────────────
  { title: "Scaling to Multiple Locations: What No One Tells You", description: "A candid conversation on the operational, financial, and cultural realities of opening a second location.", category: "Webinars", type: "Upcoming Webinar", href: "/members/webinars" },
  { title: "Building Your Retail Revenue: From 0 to $8K/month", description: "The exact playbook for transforming your retail shelf into a meaningful revenue stream.", category: "Webinars", type: "Upcoming Webinar", href: "/members/webinars" },
  { title: "Pricing Your Services for Profitability (Not Comparison)", description: "Recorded webinar with Alexandra Reed on pricing for profitability.", category: "Webinars", type: "Recorded Webinar", href: "/members/webinars" },
  { title: "The Legal Framework Every Aesthetic Practice Needs", description: "Recorded webinar with healthcare attorney Jordan Hayes.", category: "Webinars", type: "Recorded Webinar", href: "/members/webinars" },
  { title: "Hiring and Retaining Top Aesthetic Providers", description: "Recorded webinar with Priya Nair on hiring and retention.", category: "Webinars", type: "Recorded Webinar", href: "/members/webinars" },
  { title: "EMR Selection and Implementation for MedSpas", description: "Recorded webinar with Dr. Marcus Chen on choosing and implementing an EMR.", category: "Webinars", type: "Recorded Webinar", href: "/members/webinars" },
  { title: "Mastering the Patient Consultation to Close", description: "Recorded webinar with sales trainer Renée Abbot.", category: "Webinars", type: "Recorded Webinar", href: "/members/webinars" },
  { title: "Google Ads for Aesthetic Practices: A Practical Guide", description: "Recorded webinar with digital marketer Taylor Kim.", category: "Webinars", type: "Recorded Webinar", href: "/members/webinars" },
  { title: "Financial Health Check: Understanding Your Practice Numbers", description: "Recorded webinar with Alexandra Reed on reading your practice's financials.", category: "Webinars", type: "Recorded Webinar", href: "/members/webinars" },
  { title: "Building a Loyal Patient Base Through Membership Programs", description: "Recorded webinar with Priya Nair on membership program design.", category: "Webinars", type: "Recorded Webinar", href: "/members/webinars" },
];
