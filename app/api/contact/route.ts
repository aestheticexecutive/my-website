import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_NOTIFICATION_EMAIL = "aestheticexecutivekyla@gmail.com";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

interface ContactBody {
  fullName?: string;
  phone?: string;
  email?: string;
  practiceName?: string;
  practiceLocation?: string;
  message?: string;
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fullName = (body.fullName ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const email = (body.email ?? "").trim();
  const practiceName = (body.practiceName ?? "").trim();
  const practiceLocation = (body.practiceLocation ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!fullName || !phone || !email || !message) {
    return NextResponse.json(
      { error: "Name, phone, email, and a message are required." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — cannot send contact notification email.");
    return NextResponse.json(
      { error: "The contact form isn't fully configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "Aesthetic Executive Contact Form <onboarding@resend.dev>",
      to: CONTACT_NOTIFICATION_EMAIL,
      replyTo: email,
      subject: `New contact form message: ${fullName}`,
      text: [
        `New contact form submission:`,
        ``,
        `Name: ${fullName}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        practiceName ? `Practice Name: ${practiceName}` : null,
        practiceLocation ? `Practice Location: ${practiceLocation}` : null,
        ``,
        `Message:`,
        message,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    });
  } catch (err) {
    console.error("Failed to send contact notification email:", err);
    return NextResponse.json(
      { error: "Something went wrong submitting your message. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
