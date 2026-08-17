import { NextResponse } from "next/server";
import { Resend } from "resend";

const WAITLIST_NOTIFICATION_EMAIL = "aestheticexecutivekyla@gmail.com";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

interface WaitlistBody {
  fullName?: string;
  practiceName?: string;
  practiceLocation?: string;
  email?: string;
  phone?: string;
  notes?: string;
}

export async function POST(request: Request) {
  let body: WaitlistBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fullName = (body.fullName ?? "").trim();
  const practiceName = (body.practiceName ?? "").trim();
  const practiceLocation = (body.practiceLocation ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const notes = (body.notes ?? "").trim();

  if (!fullName || !practiceName || !practiceLocation || !email || !phone) {
    return NextResponse.json(
      { error: "Full name, practice name, practice location, email, and phone are required." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — cannot send waitlist notification email.");
    return NextResponse.json(
      { error: "Waitlist signup isn't fully configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "Aesthetic Executive Waitlist <onboarding@resend.dev>",
      to: WAITLIST_NOTIFICATION_EMAIL,
      replyTo: email,
      subject: `New VIP List signup: ${fullName} (${practiceName})`,
      text: [
        `New membership VIP list signup:`,
        ``,
        `Full Name: ${fullName}`,
        `Practice Name: ${practiceName}`,
        `Practice Location: ${practiceLocation}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        notes ? `` : null,
        notes ? `Notes:` : null,
        notes ? notes : null,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    });
  } catch (err) {
    console.error("Failed to send waitlist notification email:", err);
    return NextResponse.json(
      { error: "Something went wrong submitting your info. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
