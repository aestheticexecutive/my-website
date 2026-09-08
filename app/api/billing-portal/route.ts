import { auth, currentUser } from "@clerk/nextjs/server";
import { createBillingPortalSession } from "@/lib/billingPortal";
import { NextResponse } from "next/server";

export async function POST() {
  const { userId } = await auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const user = await currentUser();
  const stripeCustomerId = user?.publicMetadata?.stripeCustomerId as
    | string
    | undefined;

  if (!stripeCustomerId) {
    return NextResponse.json(
      { error: "No billing account found for this member yet." },
      { status: 404 }
    );
  }

  try {
    const url = await createBillingPortalSession(stripeCustomerId);
    return NextResponse.json({ url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Billing portal session creation failed:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
