import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import GoogleTranslateScript from "@/components/GoogleTranslateScript";
import { siteConfig } from "@/data/siteConfig";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Apex Global Talent | Japanese & Korean Language Classes Sri Lanka Visa",
    template: `%s | ${siteConfig.company.legalName}`,
  },
  description:
    "Leading Japanese and Korean language classes in Sri Lanka with expert visa processing services for Japan and South Korea. Specialized training for JLPT, NAT-TEST, EPS-TOPIK, and certified student & work visa pathways.",
  keywords: [
    "Japanese Korean language classes Sri Lanka visa",
    "Apex Global Talent",
    "APEX GLOBAL TALENT PVT LTD",
    "Japanese Language Classes Sri Lanka",
    "Korean Language Classes Sri Lanka",
    "Japan Student Visa Sri Lanka",
    "Korea Student Visa Sri Lanka",
    "JLPT N5 N4 N3 Classes Colombo",
    "EPS-TOPIK CBT Training Sri Lanka",
    "SSW Japan Visa Processing Sri Lanka",
    "Study in Japan Colombo",
    "Study in South Korea Sri Lanka",
    "Visa consultancy Colombo",
  ],
  authors: [{ name: siteConfig.company.legalName }],
  metadataBase: new URL("https://apexglobaltalent.lk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Apex Global Talent | Japanese & Korean Language Classes & Visa Processing Sri Lanka",
    description:
      "Premier Japanese & Korean language institute and accredited visa consultancy in Sri Lanka. Gateway to study and work opportunities in Japan & South Korea.",
    type: "website",
    locale: "en_LK",
    siteName: siteConfig.company.legalName,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} font-sans min-h-screen flex flex-col bg-[#fafbfc] text-slate-900 antialiased selection:bg-amber-100 selection:text-amber-900`}
        suppressHydrationWarning
      >
        <GoogleTranslateScript />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
