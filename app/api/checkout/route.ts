import { auth, currentUser } from "@clerk/nextjs/server";
import { createCheckoutSession } from "@/lib/checkout";
import { NextResponse } from "next/server";

export async function POST() {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const user = await currentUser();
  if (user?.publicMetadata?.profileComplete !== true) {
    return NextResponse.json({ error: "profile_incomplete" }, { status: 403 });
  }

  try {
    const url = await createCheckoutSession(userId);
    return NextResponse.json({ url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Stripe checkout session creation failed:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
