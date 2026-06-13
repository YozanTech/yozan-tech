import { Link } from "@/i18n/routing";
import FadeIn from "../FadeIn";
import { NAVIGATION } from "@/constants/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Footer() {
  const tNav = useTranslations("navigation");
  const tFooter = useTranslations("footer");

  return (
    <footer className="w-full flex md:flex-row flex-col px-6 md:px-16 py-10 max-md:pb-30 text-surface-600 text-sm gap-12">
      {/* Main footer content */}
      {/* Brand + description */}
      <div className="flex flex-col gap-4 h-full w-full flex-[1.5]">
        <FadeIn
          delay={0.2}
          initialY={20}
          className="flex items-center gap-1.5 font-serif shrink-0"
        >
          <span className="text-surface-900 text-2xl font-semibold">躍棧</span>
          <span className="text-surface-600 text-sm font-medium tracking-tighter mt-auto">
            YozanTech
          </span>
        </FadeIn>
        <FadeIn delay={0.4} initialY={20} className="text-surface-600 max-w-md">
          {tFooter("description")}
        </FadeIn>
        <FadeIn delay={0.6} initialY={20} className="mt-auto font-medium">
          © {new Date().getFullYear()} Yozan Tech. All rights reserved.
        </FadeIn>
      </div>

      {/* Navigation links */}
      <div className="flex flex-1">
        <div className="flex-1 flex flex-col gap-4 justify-start w-full">
          <FadeIn
            delay={0.2}
            initialY={20}
            className="text-surface-900 font-semibold text-lg"
          >
            {tFooter("guide")}
          </FadeIn>
          <div className="flex flex-col gap-2">
            {NAVIGATION.map((item, index) => (
              <FadeIn key={item.id} delay={0.4 + index * 0.2} initialY={20}>
                <Link
                  href={item.href}
                  className="text-surface-600 group relative w-fit"
                >
                  {tNav(item.id)}
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-surface-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Contact info */}
        <div className="flex-1 flex flex-col justify-between gap-4 w-full h-full">
          <div className="flex flex-col gap-4">
            <FadeIn
              delay={0.2}
              initialY={20}
              className="text-surface-900 font-semibold text-lg"
            >
              {tFooter("contactUs")}
            </FadeIn>
            <FadeIn delay={0.4} initialY={20}>
              <Link
                className="text-surface-600 hover:text-brand-600"
                href="mailto:yozan.tech@gmail.com"
              >
                yozan.tech@gmail.com
              </Link>
            </FadeIn>
          </div>
          <FadeIn delay={0.6} initialY={20}>
            <div className="mt-auto mb-0 font-medium">
              {tFooter("businessHours")}
            </div>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.2} initialY={10} className="flex flex-col gap-4 flex-1">
        <div className="text-surface-900 font-semibold text-lg">
          {tFooter("language")}
        </div>
        <LanguageSwitcher />
      </FadeIn>
    </footer>
  );
}
