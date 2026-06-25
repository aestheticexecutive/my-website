import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { context, platform, contentType, tone, practiceName } = body;

    const apiKey = process.env.AE_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    const platformGuide: Record<string, string> = {
      instagram: "Instagram caption (conversational, authentic, 100–250 characters, line breaks welcome)",
      facebook: "Facebook post (warmer and more detailed, professional but personal, 150–350 characters)",
      tiktok: "TikTok caption (punchy, hook-first, casual, ultra-short — under 100 characters)",
      pinterest: "Pinterest description (keyword-rich, descriptive, helpful, benefit-focused, 150–300 characters)",
      linkedin: "LinkedIn post (professional tone, thought-leadership framing, value-driven, 200–400 characters)",
      youtube: "YouTube Shorts description (concise, keyword-friendly, 100–200 characters)",
    };

    const toneGuide: Record<string, string> = {
      educational: "educational and informative — lead with a surprising fact or question, then teach something valuable",
      inspiring: "inspiring and emotionally resonant — create connection, aspiration, and warmth",
      promotional: "promotional but not pushy — highlight value and benefits, create natural urgency",
      entertaining: "entertaining and relatable — use conversational humor or a POV perspective",
      engaging: "engaging and conversational — ask a direct question that invites responses",
    };

    const platformText = platformGuide[platform?.toLowerCase() ?? ""] ?? "social media caption";
    const toneText = toneGuide[tone?.toLowerCase() ?? ""] ?? "authentic and engaging";

    const prompt = `You are a social media strategist specializing in aesthetic medicine and med spa practices.

Write a ${platformText} that is ${toneText}.

Post context:
${context}
${practiceName ? `\nPractice name: ${practiceName}` : ""}
${contentType ? `\nContent format: ${contentType}` : ""}

Requirements:
- Output ONLY the caption text — no intro, no explanation, no "Here's your caption:"
- Start with a strong hook line that stops the scroll
- Sound like a real human practitioner, never corporate or salesy
- End with a clear, specific call-to-action
- After the caption, write exactly "HASHTAGS:" on a new line, then 20–25 hashtags separated by spaces
- Hashtag mix: broad aesthetic/beauty tags, treatment-specific tags, and general wellness/lifestyle tags`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-5-20250929",
        max_tokens: 1024,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return NextResponse.json({ error: err }, { status: response.status });
    }

    const data = await response.json();
    const text: string = data.content?.[0]?.text ?? "";

    const splitIdx = text.indexOf("HASHTAGS:");
    const caption = splitIdx !== -1 ? text.slice(0, splitIdx).trim() : text.trim();
    const hashtags = splitIdx !== -1 ? text.slice(splitIdx + 9).trim() : "";

    return NextResponse.json({ caption, hashtags });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
