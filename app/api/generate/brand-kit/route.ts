import { NextRequest, NextResponse } from "next/server";

interface FieldContext {
  practiceName: string;
  context: string;
}

const fieldPrompts: Record<string, (ctx: FieldContext) => { system: string; user: string }> = {
  mission: (ctx) => ({
    system: "You are a luxury med spa brand strategist. Write concise, polished brand copy. Return ONLY the requested content — no explanations, no preamble.",
    user: `Write a 1–2 sentence mission statement for a medical aesthetics practice named "${ctx.practiceName}".
Context about the practice: ${ctx.context}
The mission should communicate who they serve, what they do, and why it matters.`,
  }),
  vision: (ctx) => ({
    system: "You are a luxury med spa brand strategist. Return ONLY the requested content.",
    user: `Write a 1–2 sentence long-term vision statement for "${ctx.practiceName}".
Context: ${ctx.context}
Describe where this practice will be in 5–10 years and what it becomes.`,
  }),
  values: (ctx) => ({
    system: "You are a luxury med spa brand strategist. Return ONLY a comma-separated list of 4–5 core values. Each value is 1–3 words. No explanations, no numbering.",
    user: `Suggest 4–5 core values for a medical aesthetics practice named "${ctx.practiceName}".
Context: ${ctx.context}
Format: Value One, Value Two, Value Three, Value Four`,
  }),
  slogan: (ctx) => ({
    system: "You are a luxury med spa brand strategist. Return ONLY the tagline text. No quotation marks. No explanations.",
    user: `Write a short, memorable tagline or slogan for "${ctx.practiceName}".
Context: ${ctx.context}
3–8 words. Elegant and memorable.`,
  }),
  promise: (ctx) => ({
    system: "You are a luxury med spa brand strategist. Return ONLY the brand promise. No preamble.",
    user: `Write the brand promise for "${ctx.practiceName}" — the one thing every patient can count on.
Context: ${ctx.context}
1–2 sentences. Should feel like something the practice would proudly display.`,
  }),
  differentiator: (ctx) => ({
    system: "You are a luxury med spa brand strategist. Return ONLY the differentiator statement.",
    user: `Write a "what sets us apart" statement for "${ctx.practiceName}".
Context: ${ctx.context}
2–3 sentences. Explain specifically why patients choose them over competitors.`,
  }),
  photographyStyle: (ctx) => ({
    system: "You are a luxury med spa brand strategist. Return ONLY the photography style description.",
    user: `Describe the ideal brand photography style for "${ctx.practiceName}".
Context: ${ctx.context}
Cover: lighting mood, color grading, subject style, backgrounds, overall aesthetic.`,
  }),
  logoDescription: (ctx) => ({
    system: "You are a luxury med spa brand strategist. Return ONLY practical logo direction.",
    user: `Describe logo guidance and direction for "${ctx.practiceName}".
Context: ${ctx.context}
Cover: logo style direction, color usage, versions needed.`,
  }),
  toneWords: (ctx) => ({
    system: "You are a luxury med spa brand strategist. Return ONLY a comma-separated list of 6–8 personality words. No explanations.",
    user: `Suggest 6–8 brand personality/tone words for "${ctx.practiceName}".
Context: ${ctx.context}
Format: word1, word2, word3, word4, word5, word6`,
  }),
  languageUse: (ctx) => ({
    system: "You are a luxury med spa brand strategist. Return ONLY specific language guidelines.",
    user: `Write language-to-use guidelines for "${ctx.practiceName}".
Context: ${ctx.context}
Give specific phrases, preferred word choices, and communication patterns to use. Be concrete.`,
  }),
  languageAvoid: (ctx) => ({
    system: "You are a luxury med spa brand strategist. Return ONLY specific language-to-avoid guidelines.",
    user: `Write language-to-avoid guidelines for "${ctx.practiceName}".
Context: ${ctx.context}
Give specific words, phrases, and tones that are off-brand. Be concrete.`,
  }),
  sampleSocial: (ctx) => ({
    system: "You are a luxury med spa brand strategist. Return ONLY the social media caption text.",
    user: `Write a sample Instagram caption for "${ctx.practiceName}".
Context: ${ctx.context}
2–4 sentences. Authentic, on-brand, not salesy.`,
  }),
  sampleEmail: (ctx) => ({
    system: "You are a luxury med spa brand strategist. Return ONLY the email opening text.",
    user: `Write a sample email opening (first 2–3 sentences) for "${ctx.practiceName}".
Context: ${ctx.context}
Warm, personal, and on-brand.`,
  }),
  targetClient: (ctx) => ({
    system: "You are a luxury med spa brand strategist. Return ONLY the target client description.",
    user: `Describe the ideal target client for "${ctx.practiceName}".
Context: ${ctx.context}
Cover: age range, lifestyle, values, income, how they think about aesthetics.`,
  }),
  consultationExperience: (ctx) => ({
    system: "You are a luxury med spa brand strategist. Return ONLY the consultation experience description.",
    user: `Describe the ideal consultation experience for "${ctx.practiceName}".
Context: ${ctx.context}
How should it feel? What should patients leave feeling?`,
  }),
  facilityAmbiance: (ctx) => ({
    system: "You are a luxury med spa brand strategist. Return ONLY the ambiance description.",
    user: `Describe the facility ambiance for "${ctx.practiceName}".
Context: ${ctx.context}
Cover: scent, music, lighting, decor, hospitality touches.`,
  }),
  followUp: (ctx) => ({
    system: "You are a luxury med spa brand strategist. Return ONLY the follow-up protocol description.",
    user: `Describe the post-visit follow-up standard for "${ctx.practiceName}".
Context: ${ctx.context}
Be specific about timing, channel, and tone.`,
  }),
  discoveryChannels: (ctx) => ({
    system: "You are a luxury med spa brand strategist. Return ONLY the discovery channel description.",
    user: `Describe how the ideal client discovers and chooses "${ctx.practiceName}".
Context: ${ctx.context}
Which channels? How do they research?`,
  }),
};

export async function POST(request: NextRequest) {
  const { field, context, practiceName } = await request.json() as {
    field: string;
    context: string;
    practiceName?: string;
  };

  if (!field || !context) {
    return NextResponse.json({ error: "Missing field or context" }, { status: 400 });
  }

  const apiKey = process.env.AE_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "AE_API_KEY is not configured." }, { status: 500 });
  }

  const promptFn = fieldPrompts[field];
  if (!promptFn) {
    return NextResponse.json({ error: `Unknown field: ${field}` }, { status: 400 });
  }

  const { system, user } = promptFn({
    practiceName: practiceName || "this practice",
    context,
  });

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 500,
      system,
      messages: [{ role: "user", content: user }],
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    return NextResponse.json(
      { error: (err as { error?: { message?: string } }).error?.message || `API error ${response.status}` },
      { status: response.status }
    );
  }

  const data = await response.json();
  const text = (data.content as { type: string; text?: string }[])
    .map((b) => b.text ?? "")
    .join("")
    .trim();

  return NextResponse.json({ text });
}
