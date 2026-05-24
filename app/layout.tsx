import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aesthetic Executive — Business Resources for Aesthetic Practices",
  description:
    "Premium membership for aesthetic practice owners and managers. Templates, webinars, and expert resources to grow your medical aesthetics business.",
  openGraph: {
    title: "Aesthetic Executive",
    description: "Elevate your practice. Grow your business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${geist.variable} ${cormorant.variable} h-full`}>
        <body className="min-h-full flex flex-col antialiased">{children}</body>
      </html>
    </ClerkProvider>
  );
}
