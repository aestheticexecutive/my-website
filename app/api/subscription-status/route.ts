import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ hasActiveSubscription: false });
  }

  const user = await currentUser();
  const hasActiveSubscription =
    user?.publicMetadata?.hasActiveSubscription === true;

  return NextResponse.json({
    hasActiveSubscription,
    stripeCustomerId: user?.publicMetadata?.stripeCustomerId ?? null,
  });
}
