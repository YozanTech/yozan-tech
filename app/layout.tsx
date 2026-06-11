import type { Metadata } from "next";
import { Inter, Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Yozan Tech",
    template: "%s | Yozan Tech",
  },
  description:
    "躍棧 (Yozan Tech) provides tailor-made systems, premium websites, and managed cloud services. From the very first line of code to daily maintenance, we are with you for the long haul.",
  openGraph: {
    title: "Yozan Tech",
    description:
      "躍棧 (Yozan Tech) provides tailor-made systems, premium websites, and managed cloud services. From the very first line of code to daily maintenance, we are with you for the long haul.",
    url: "https://yozan-tech.vercel.app",
    siteName: "Yozan Tech",
    images: [
      {
        url: "https://yozan-tech.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Yozan Tech",
      },
    ],
    locale: "en_US",
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
      className={`${inter.variable} ${notoSansTC.variable} ${notoSerifTC.variable} flex flex-col h-full antialiased`}
    >
      <body className="relative flex flex-col">
        <Header />
        {children}
        <MobileNav />
        <Footer />
      </body>
    </html>
  );
}
