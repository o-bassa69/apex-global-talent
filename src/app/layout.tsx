import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Noto_Sans_Sinhala,
  Noto_Sans_KR,
  Noto_Sans_JP,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { siteConfig } from "@/data/siteConfig";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const notoSinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  variable: "--font-sinhala",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const notoKR = Noto_Sans_KR({
  subsets: ["latin"],
  preload: false,
  variable: "--font-kr",
  display: "swap",
  weight: ["400", "500", "700"],
});

const notoJP = Noto_Sans_JP({
  subsets: ["latin"],
  preload: false,
  variable: "--font-jp",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "APEX GLOBAL TALENT | Language Institute & Visa Advisory Malabe",
    template: `%s | APEX GLOBAL TALENT`,
  },
  description:
    "Leading Japanese and Korean language classes in Sri Lanka with expert visa processing services for Japan and South Korea. Authorized education institute and direct representative for Fukuoka College and KIIAC.",
  keywords: [
    "APEX GLOBAL TALENT",
    "Apex Global Talent",
    "Japanese Korean language classes Sri Lanka visa",
    "Japanese Language Classes Sri Lanka",
    "Korean Language Classes Sri Lanka",
    "Japan Student Visa Sri Lanka",
    "Korea Student Visa Sri Lanka",
    "JLPT N5 N4 N3 Classes Colombo",
    "EPS-TOPIK CBT Training Sri Lanka",
    "Fukuoka International Foreign Language College Sri Lanka",
    "KIIAC Korea Representative Sri Lanka",
    "D-2 Korea Visa Sri Lanka",
  ],
  authors: [{ name: siteConfig.company.legalName }],
  metadataBase: new URL("https://apexglobaltalent.lk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "APEX GLOBAL TALENT | Japanese & Korean Language Classes & Visa Processing",
    description:
      "Premier Japanese & Korean language institute and direct academic representative in Sri Lanka. Gateway to study and work opportunities in Japan & South Korea.",
    type: "website",
    locale: "en_LK",
    siteName: "APEX GLOBAL TALENT",
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
        className={`${jakarta.variable} ${notoSinhala.variable} ${notoKR.variable} ${notoJP.variable} font-sans min-h-screen flex flex-col bg-[#fafbfc] text-slate-900 antialiased selection:bg-amber-100 selection:text-amber-900`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <WhatsAppFloating />
        </LanguageProvider>
      </body>
    </html>
  );
}
