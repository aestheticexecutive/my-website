import type { Metadata } from "next";
import { Tenor_Sans } from "next/font/google";
import { Be_Vietnam_Pro } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const tenorSans = Tenor_Sans({
  variable: "--font-tenor",
  subsets: ["latin"],
  weight: "400",
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Aesthetic Executive — Business Resources for Aesthetic Practices",
  description:
    "Premium membership for aesthetic practice owners and managers. Templates, webinars, and expert resources to grow your medical aesthetics business.",
  openGraph: {
    title: "Aesthetic Executive",
    description: "Where the business of beauty gets serious.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${tenorSans.variable} ${beVietnamPro.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
