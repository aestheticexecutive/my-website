import { NextRequest, NextResponse } from "next/server";

function validateUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (!["http:", "https:"].includes(parsed.protocol)) {
      return "Only http and https URLs are supported.";
    }
    const host = parsed.hostname.toLowerCase();
    if (
      host === "localhost" ||
      host === "127.0.0.1" ||
      host === "::1" ||
      host.endsWith(".local") ||
      /^10\./.test(host) ||
      /^192\.168\./.test(host) ||
      /^172\.(1[6-9]|2\d|3[01])\./.test(host)
    ) {
      return "Internal network addresses are not allowed.";
    }
    return null;
  } catch {
    return "Please enter a valid URL starting with https://";
  }
}

function extractPageInfo(html: string) {
  const clean = (s: string) =>
    s.replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();

  const title = clean(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "");

  const metaDesc =
    html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']{0,300})["']/i)?.[1] ??
    html.match(/<meta[^>]+content=["']([^"']{0,300})["'][^>]+name=["']description["']/i)?.[1] ??
    "";

  const headings = [...html.matchAll(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/gi)]
    .map((m) => clean(m[1]))
    .filter(Boolean)
    .slice(0, 40)
    .join(" | ");

  const internalLinks = [...html.matchAll(/href=["']([^"'#?]+)["']/gi)]
    .map((m) => m[1])
    .filter(
      (l) =>
        l.startsWith("/") ||
        (!l.startsWith("http") && !l.startsWith("mailto") && !l.startsWith("tel"))
    )
    .slice(0, 80)
    .join(", ");

  const imgAlts = [...html.matchAll(/alt=["']([^"']{1,120})["']/gi)]
    .map((m) => m[1])
    .join(" | ")
    .slice(0, 600);

  const bodyText = clean(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
  ).slice(0, 5500);

  const signals = {
    hasBeforeAfter:
      /before.{0,15}after|before.{0,15}&.{0,15}after|real.{0,10}results|photo.{0,10}gallery/i.test(html),
    hasTestimonials:
      /testimonial|patient.{0,30}review|what.{0,10}(our\s+)?patients|patient.{0,10}say|they\s+said/i.test(html),
    hasFAQ: /frequently\s+asked|faq|f\.a\.q\.|common\s+question/i.test(html),
    hasBlog: /\/blog|\/article|\/news|\/post[s/]|\/journal/i.test(html),
    hasPhone: /\(\d{3}\)\s*\d{3}[-.\s]\d{4}|\d{3}[-.\s]\d{3}[-.\s]\d{4}/.test(html),
    hasAddress:
      /\d+\s+\w+\s+(st|street|ave|avenue|blvd|boulevard|rd|road|dr|drive|ln|lane|way|suite|ste)\b/i.test(
        html
      ),
    hasBooking:
      /book\s+(now|appointment|online)|schedule\s+(consult|appointment|online)|request\s+(appointment|consult)/i.test(
        html
      ),
    hasGoogleReview: /google.{0,30}review|leave.{0,20}review|write.{0,20}review/i.test(html),
    treatmentLinkCount: (
      html.match(
        /href=["'][^"']*(treatment|service|procedure|botox|filler|laser|morpheus|lumecca|microneedling|facial|peel|lift|tighten|contour|sculpt|weight|kybella|coolsculpt|prp|prx|forma|vi\s*peel|semaglutide|tirzepatide)[^"']*["']/gi
      ) ?? []
    ).length,
  };

  return { title, metaDesc, headings, internalLinks, imgAlts, bodyText, signals };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const url: string = (body.url ?? "").trim();

    if (!url) return NextResponse.json({ error: "URL is required." }, { status: 400 });

    const validationError = validateUrl(url);
    if (validationError) return NextResponse.json({ error: validationError }, { status: 400 });

    const apiKey = process.env.AE_API_KEY;
    if (!apiKey) return NextResponse.json({ error: "API key not configured." }, { status: 500 });

    let html = "";
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 13000);
      const fetchRes = await fetch(url, {
        signal: controller.signal,
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; SEOAnalyzer/1.0; +https://aestheticexecutive.com)",
          Accept: "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.5",
        },
      });
      clearTimeout(timer);

      if (!fetchRes.ok) {
        return NextResponse.json(
          {
            error: `Could not reach your website (HTTP ${fetchRes.status}). Double-check the URL and try again.`,
          },
          { status: 422 }
        );
      }

      const contentType = fetchRes.headers.get("content-type") ?? "";
      if (!contentType.includes("html")) {
        return NextResponse.json(
          { error: "That URL doesn't appear to be a webpage. Please enter your homepage URL (e.g., https://yourmedspa.com)." },
          { status: 422 }
        );
      }

      html = await fetchRes.text();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "";
      if (msg.includes("abort") || msg.toLowerCase().includes("timeout")) {
        return NextResponse.json(
          { error: "Your website took too long to respond. Please try again." },
          { status: 422 }
        );
      }
      return NextResponse.json(
        { error: "Could not reach your website. Please check the URL and try again." },
        { status: 422 }
      );
    }

    const info = extractPageInfo(html);

    const prompt = `You are an SEO specialist reviewing the website of a medical spa or aesthetic practice.

Analyze this website content and evaluate 10 SEO factors that matter most for getting found by new patients.

IMPORTANT WRITING RULES:
- Write EVERYTHING in plain, conversational English that a busy practice owner can understand
- NEVER use developer or technical terms: no "H1 tag", "meta description", "schema markup", "crawlability", "index", "backlinks", "anchor text", "canonical", "robots.txt", "sitemap", "alt text", "CTA", "UX", "UI", or similar jargon
- Say things like "your page headline" instead of "H1 tag"
- Say "the brief description Google shows under your website name in search results" instead of "meta description"
- Be honest and specific about what you actually found (or didn't find) on this site

WEBSITE DATA:
URL: ${url}
Page Title: ${info.title || "(not found)"}
Page Description (what shows in Google search): ${info.metaDesc || "(not found)"}
Page Headlines: ${info.headings || "(none detected)"}
Image Descriptions: ${info.imgAlts || "(none found)"}
Internal Page Links: ${info.internalLinks || "(none)"}
Page Text Sample: ${info.bodyText}

AUTOMATICALLY DETECTED:
- Before/after photo content: ${info.signals.hasBeforeAfter ? "Detected" : "Not detected"}
- Patient testimonials: ${info.signals.hasTestimonials ? "Detected" : "Not detected"}
- FAQ or Q&A section: ${info.signals.hasFAQ ? "Detected" : "Not detected"}
- Blog or article section: ${info.signals.hasBlog ? "Detected" : "Not detected"}
- Phone number visible: ${info.signals.hasPhone ? "Yes" : "Not detected"}
- Physical address visible: ${info.signals.hasAddress ? "Yes" : "Not detected"}
- Online booking or contact button: ${info.signals.hasBooking ? "Yes" : "Not detected"}
- Google review mention: ${info.signals.hasGoogleReview ? "Yes" : "Not detected"}
- Treatment-specific page links found: ${info.signals.treatmentLinkCount}

Note: Some websites load content through JavaScript after the page loads, so this analysis is based on what's visible in the initial page. If the findings seem incomplete, mention this possibility.

Evaluate all 10 factors and respond ONLY with valid JSON (no markdown, no explanation outside the JSON):

{
  "score": <integer 0-10, one point per passing factor>,
  "rating": "<exactly one of: Excellent SEO Foundation | Strong — With Room to Grow | Good Start — Gaps to Fill | Needs Significant Work>",
  "summary": "<2-3 sentences of honest, specific plain-English observations about what you found on this site. Reference actual content you saw.>",
  "categories": [
    {
      "id": "dedicated_service_pages",
      "label": "Separate page for each treatment",
      "status": "<pass|partial|fail>",
      "finding": "<1-2 sentences, plain English, specific to what you saw — mention actual page links or content if visible.>",
      "fix": "<1-2 sentences on what to do. Plain English. Leave as empty string if status is pass.>"
    },
    {
      "id": "educational_content",
      "label": "Treatment pages that actually explain the service",
      "status": "<pass|partial|fail>",
      "finding": "<plain English finding>",
      "fix": "<plain English fix or empty string>"
    },
    {
      "id": "before_after_photos",
      "label": "Before-and-after patient photos",
      "status": "<pass|partial|fail>",
      "finding": "<plain English finding>",
      "fix": "<plain English fix or empty string>"
    },
    {
      "id": "testimonials",
      "label": "Patient success stories on your website",
      "status": "<pass|partial|fail>",
      "finding": "<plain English finding>",
      "fix": "<plain English fix or empty string>"
    },
    {
      "id": "location_info",
      "label": "Location, phone, and address are easy to find",
      "status": "<pass|partial|fail>",
      "finding": "<plain English finding>",
      "fix": "<plain English fix or empty string>"
    },
    {
      "id": "nearby_cities",
      "label": "Mentions nearby cities and communities you serve",
      "status": "<pass|partial|fail>",
      "finding": "<plain English finding>",
      "fix": "<plain English fix or empty string>"
    },
    {
      "id": "faq_sections",
      "label": "Questions patients actually search — answered on the site",
      "status": "<pass|partial|fail>",
      "finding": "<plain English finding>",
      "fix": "<plain English fix or empty string>"
    },
    {
      "id": "blog_content",
      "label": "Regular educational blog posts or articles",
      "status": "<pass|partial|fail>",
      "finding": "<plain English finding>",
      "fix": "<plain English fix or empty string>"
    },
    {
      "id": "google_profile",
      "label": "Encourages patients to leave Google reviews",
      "status": "<pass|partial|fail>",
      "finding": "<plain English finding>",
      "fix": "<plain English fix or empty string>"
    },
    {
      "id": "easy_booking",
      "label": "New patients can book or call within seconds",
      "status": "<pass|partial|fail>",
      "finding": "<plain English finding>",
      "fix": "<plain English fix or empty string>"
    }
  ],
  "quick_wins": [
    "<Specific, actionable plain-English quick win based on what you found>",
    "<Quick win #2>",
    "<Quick win #3>"
  ],
  "top_priority": "<The single most impactful thing they should fix first. One sentence. Plain English.>"
}`;

    const aiRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-5-20250929",
        max_tokens: 2800,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!aiRes.ok) {
      return NextResponse.json(
        { error: "Analysis service is temporarily unavailable. Please try again." },
        { status: 500 }
      );
    }

    const aiData = await aiRes.json();
    const rawText: string = aiData.content?.[0]?.text ?? "";

    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json(
        { error: "Could not parse analysis results. Please try again." },
        { status: 500 }
      );
    }

    const result = JSON.parse(jsonMatch[0]);
    return NextResponse.json(result);
  } catch (err) {
    console.error("SEO analyze error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
