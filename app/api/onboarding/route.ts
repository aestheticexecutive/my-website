import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

interface OnboardingBody {
  firstName?: string;
  lastName?: string;
  practiceName?: string;
  practiceAddress?: string;
}

export async function POST(request: Request) {
  const { userId } = await auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  let body: OnboardingBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const firstName = (body.firstName ?? "").trim();
  const lastName = (body.lastName ?? "").trim();
  const practiceName = (body.practiceName ?? "").trim();
  const practiceAddress = (body.practiceAddress ?? "").trim();

  if (!firstName || !lastName || !practiceName || !practiceAddress) {
    return NextResponse.json(
      { error: "First name, last name, practice name, and practice address are all required." },
      { status: 400 }
    );
  }

  try {
    const clerk = await clerkClient();
    await clerk.users.updateUser(userId, { firstName, lastName });
    await clerk.users.updateUserMetadata(userId, {
      publicMetadata: {
        practiceName,
        practiceAddress,
        profileComplete: true,
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Onboarding update failed:", message);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
