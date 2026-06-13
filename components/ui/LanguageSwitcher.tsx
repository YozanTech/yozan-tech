"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import FadeIn from "../FadeIn";

const LOCALES = [
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "zh", flag: "🇨🇳", label: "中文" },
  { code: "ms", flag: "🇲🇾", label: "BM" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  const handleLocaleChange = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2">
      {LOCALES.map((locale, index) => {
        const isActive = currentLocale === locale.code;
        return (
          <FadeIn key={locale.code} delay={0.3 + index * 0.1} initialY={10}>
            <button
              onClick={() => handleLocaleChange(locale.code)}
              aria-label={`Switch to ${locale.label}`}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-surface-200 text-surface-900 shadow-inner"
                  : "text-surface-600 hover:text-surface-900"
              }`}
            >
              <span className="text-sm font-bold">{locale.flag}</span>
              <span className="font-medium">{locale.label}</span>
            </button>
          </FadeIn>
        );
      })}
    </div>
  );
}
