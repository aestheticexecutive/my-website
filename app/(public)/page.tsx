import { notFound } from "next/navigation";

// The homepage lives at app/page.tsx (root level) to avoid route conflicts.
// This file must exist due to Next.js scaffolding but should never be reached.
export default function PublicGroupRootPage() {
  notFound();
}
