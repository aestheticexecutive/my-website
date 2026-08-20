import { NextRequest, NextResponse } from "next/server";

const VALID_POSITIONS = ["below", "at", "above"] as const;
type Position = (typeof VALID_POSITIONS)[number];

const POSITION_LABEL: Record<Position, string> = {
  below: "below the local market average",
  at: "in line with the local market average",
  above: "above the local market average (premium positioning)",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const service: string = (body.service ?? "").trim();
    const city: string = (body.city ?? "").trim();
    const state: string = (body.state ?? "").trim();
    const position: string = (body.position ?? "").trim().toLowerCase();
    const includePackages: boolean = !!body.includePackages;

    if (!service) return NextResponse.json({ error: "Please enter the service you'd like to price." }, { status: 400 });
    if (!city) return NextResponse.json({ error: "Please enter a city." }, { status: 400 });
    if (!state) return NextResponse.json({ error: "Please enter a state." }, { status: 400 });
    if (!VALID_POSITIONS.includes(position as Position)) {
      return NextResponse.json({ error: "Please choose a valid market position." }, { status: 400 });
    }
    if (service.length > 120 || city.length > 100 || state.length > 60) {
      return NextResponse.json({ error: "One of your entries is too long. Please shorten it and try again." }, { status: 400 });
    }

    const apiKey = process.env.AE_API_KEY;
    if (!apiKey) return NextResponse.json({ error: "API key not configured." }, { status: 500 });

    const positionLabel = POSITION_LABEL[position as Position];

    const prompt = `You are a pricing strategist who advises medical spas and aesthetic practices on how to price their treatments competitively.

A practice owner wants pricing guidance for one treatment, in one local market, positioned a specific way relative to competitors.

REQUEST DETAILS:
Treatment / service: ${service}
Location: ${city}, ${state}
Desired market position: ${positionLabel}
Include package pricing (e.g. a 3-session and 6-session package) in addition to a single-session price: ${includePackages ? "Yes" : "No — single-session pricing only"}

IMPORTANT — BE HONEST ABOUT WHAT THIS IS:
You do not have live access to today's actual competitor pricing in this specific city. Do not invent specific real business names or claim to have scraped real listings. Instead, reason like an experienced pricing consultant would: using general knowledge of how this treatment is typically priced nationally, how cost of living and market tier in this state/region usually shift that range up or down, and typical patterns in that size of metro area versus a major metro or a small town. Give a well-reasoned, directional estimate — not a claim of certainty.

WRITING RULES:
- Plain, conversational English a practice owner can act on immediately — no jargon
- Give real numbers (dollar ranges and specific recommended price points), not vague hand-waving
- Tie every recommendation back to the specific location and the desired market position they chose
- Be specific to the named treatment — don't give generic advice that could apply to any service

Respond ONLY with valid JSON (no markdown, no explanation outside the JSON):

{
  "market_context": "<3-4 sentences on how pricing for this treatment typically varies by region/cost of living, and what that suggests for a practice in ${city}, ${state} specifically. Do not name specific real competitors.>",
  "estimated_market_range": {
    "low": "<$ typical low end for this treatment nationally/regionally, as a plain dollar figure like $250>",
    "typical": "<$ typical mid-market price>",
    "high": "<$ typical high end / premium price>"
  },
  "recommended_per_session_price": "<a single specific $ recommendation, positioned ${position} market as requested>",
  "recommended_price_reasoning": "<2-3 sentences explaining exactly why this number makes sense given their location and chosen position>",
  "package_recommendations": ${includePackages ? `[
    { "sessions": 3, "total_price": "<$ total for a 3-session package>", "per_session_equivalent": "<$ effective per-session price within the package>", "discount_rationale": "<1 sentence on why this discount level makes sense>" },
    { "sessions": 6, "total_price": "<$ total for a 6-session package>", "per_session_equivalent": "<$ effective per-session price within the package>", "discount_rationale": "<1 sentence on why this discount level makes sense>" }
  ]` : "[]"},
  "positioning_notes": [
    "<A specific, practical way to talk to patients about this price point given the ${position}-market position they chose>",
    "<A second positioning note>",
    "<A third positioning note>"
  ],
  "watchouts": [
    "<A real risk or consideration with this pricing strategy in this market>",
    "<A second watchout>"
  ],
  "confidence_note": "<1-2 honest sentences reminding them this is a directional AI estimate based on general market knowledge, not live-scraped competitor data, and recommending they spot-check 2-3 real local competitors directly before finalizing.>"
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
        max_tokens: 1800,
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
    return NextResponse.json({
      ...result,
      service,
      location: `${city}, ${state}`,
      position,
      includePackages,
    });
  } catch (err) {
    console.error("Pricing analyze error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
