import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { prompt } = await request.json();

  if (!prompt) {
    return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
  }

  const apiKey = process.env.AE_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "AE_API_KEY is not configured on the server." },
      { status: 500 }
    );
  }

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 1400,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    return NextResponse.json(
      { error: err.error?.message || `Anthropic API error ${response.status}` },
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
