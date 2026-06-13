"use client";
import { usePathname, Link } from "@/i18n/routing";
import { NAVIGATION } from "@/constants/navigation";
import FadeIn from "../FadeIn";
import ConsultationButton from "../ui/ConsultationButton";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("navigation");
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex items-center border-b bg-surface-50/80 backdrop-blur-md border-surface-300 justify-between min-h-16 px-4 md:px-16 w-full">
      <FadeIn delay={0.2} initialY={-20}>
        <Link
          href="/"
          className="flex items-center gap-1.5 font-serif shrink-0"
        >
          <span className="text-surface-900 text-2xl font-semibold">躍棧</span>
          <span className="text-surface-600 text-sm font-medium tracking-tighter mt-auto">
            YozanTech
          </span>
        </Link>
      </FadeIn>
      <nav className="flex items-center gap-6 text-sm">
        {NAVIGATION.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <FadeIn
              key={item.id}
              delay={0.4 + (NAVIGATION.length - 1 - index) * 0.2}
              initialY={-20}
            >
              <Link
                href={item.href}
                className={`group py-1 relative hidden md:flex text-surface-800 ${isActive ? "font-medium" : ""}`}
              >
                {t(item.id)}
                <span
                  className={`absolute bottom-0 left-0 h-px w-0 bg-surface-600 transition-all duration-300 group-hover:w-full`}
                ></span>
              </Link>
            </FadeIn>
          );
        })}
        <FadeIn delay={0.2} initialY={-20}>
          <ConsultationButton text={t("consultation")} variant="header" />
        </FadeIn>
      </nav>
    </header>
  );
}
