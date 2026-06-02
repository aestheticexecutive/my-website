import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { MembersHeader } from "@/components/layout/MembersHeader";

export default async function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }

  // TODO: Re-enable subscription check before going live.
  // Connect Stripe webhook first so publicMetadata gets populated.
  // const user = await currentUser();
  // const hasActiveSubscription =
  //   user?.publicMetadata?.hasActiveSubscription === true;
  // if (!hasActiveSubscription) {
  //   redirect("/pricing?upgrade=true");
  // }

  return (
    <div className="min-h-screen bg-warm-50 flex flex-col">
      <MembersHeader />
      <main className="flex-1">{children}</main>
    </div>
  );
}
