import type { Metadata } from "next";
import { Inter, Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import Header from "@/components/layout/Header";
import "../globals.css";
import MobileNav from "@/components/layout/MobileNav";
import Footer from "@/components/layout/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ContactForm from "@/components/ui/ConsultationForm";
import BackToTop from "@/components/ui/BackToTop";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const siteName = locale === "zh" ? "躍棧" : "Yozan Tech";

  return {
    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },
    description:
      "躍棧 (Yozan Tech) provides tailor-made systems, premium websites, and managed cloud services. From the very first line of code to daily maintenance, we are with you for the long haul.",
    keywords:
      "Yozan Tech, Yozan, YozanTech, 躍棧, 定制化系統, 網站開發, 雲端服務, IT服務, 客製化系統, 網頁設計, 系統維護, 軟體開發, Software Development, IT Company, Software Company, Website Development, Cloud Services, IT Services, System Maintenance, Tailor-made Systems, Web Design, Cloud Computing, IT Support",
    openGraph: {
      title: siteName,
      description:
        "躍棧 (Yozan Tech) provides tailor-made systems, premium websites, and managed cloud services. From the very first line of code to daily maintenance, we are with you for the long haul.",
      url: `https://yozan-tech.vercel.app/${locale}`,
      siteName: siteName,
      images: [
        {
          url: "https://yozan-tech.vercel.app/og.png",
          width: 1200,
          height: 630,
          alt: "Yozan Tech",
        },
      ],
      locale: locale === 'zh' ? 'zh_TW' : locale === 'ms' ? 'ms_MY' : 'en_US',
      type: "website",
    },
    verification: {
      google: process.env.SITE_VERIFICATION,
    },
    alternates: {
      canonical: `https://yozan-tech.vercel.app/${locale}`,
      languages: {
        en: "https://yozan-tech.vercel.app/en",
        zh: "https://yozan-tech.vercel.app/zh",
        ms: "https://yozan-tech.vercel.app/ms",
        "x-default": "https://yozan-tech.vercel.app/en",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Yozan Tech",
    url: "https://yozan-tech.vercel.app",
    logo: "https://yozan-tech.vercel.app/og.png",
    contactPoint: {
      "@type": "ContactPoint",
      email: "yozan.tech@gmail.com",
      contactType: "customer service",
    },
  };

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${notoSansTC.variable} ${notoSerifTC.variable} flex flex-col h-full antialiased`}
    >
      <body className="relative flex flex-col selection:bg-brand-400 selection:text-surface-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex flex-col flex-1 w-full">{children}</main>
          <MobileNav />
          <Footer />
          <ContactForm />
          <BackToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
