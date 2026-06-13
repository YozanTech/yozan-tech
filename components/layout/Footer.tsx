import { Link } from "@/i18n/routing";
import FadeIn from "../FadeIn";
import { NAVIGATION } from "@/constants/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import Image from "next/image";
import { SOCIAL_MEDIA } from "@/constants/social-media";

export default function Footer() {
  const tNav = useTranslations("navigation");
  const tFooter = useTranslations("footer");

  return (
    <footer className="w-full flex md:flex-row flex-col px-4 md:px-16 py-10 max-md:pb-18 text-surface-600 text-sm gap-12">
      {/* Main footer content */}
      {/* Brand + description */}
      <div className="flex flex-col gap-4 h-full w-full flex-1">
        <FadeIn
          delay={0.2}
          initialY={10}
          className="flex items-center gap-1.5 font-serif shrink-0"
        >
          <span className="text-surface-900 text-2xl font-semibold">躍棧</span>
          <span className="text-surface-600 text-sm font-medium tracking-tighter mt-auto">
            YozanTech
          </span>
        </FadeIn>
        <FadeIn delay={0.4} initialY={10} className="text-surface-600 max-w-md">
          {tFooter("description")}
        </FadeIn>
        <FadeIn delay={0.6} initialY={10} className="mt-auto font-medium">
          © {new Date().getFullYear()} Yozan Tech. All rights reserved.
        </FadeIn>
      </div>

      {/* Navigation links */}
      <div className="flex flex-[0.8] gap-12">
        <div className="flex-[0.3] flex flex-col gap-4 justify-start w-full">
          <FadeIn
            delay={0.2}
            initialY={10}
            className="text-surface-900 font-semibold text-lg"
          >
            {tFooter("guide")}
          </FadeIn>
          <div className="flex flex-col gap-2">
            {NAVIGATION.map((item, index) => (
              <FadeIn key={item.id} delay={0.4 + index * 0.2} initialY={10}>
                <Link
                  href={item.href}
                  className="text-surface-600 hover:text-surface-800 group relative w-fit"
                >
                  {tNav(item.id)}
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-surface-800 transition-all duration-300 group-hover:w-full"></span>
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
              initialY={10}
              className="text-surface-900 font-semibold text-lg"
            >
              {tFooter("contactUs")}
            </FadeIn>
            <FadeIn delay={0.4} initialY={10}>
              <Link
                className="text-surface-600 hover:text-brand-600"
                href="mailto:yozan.tech@gmail.com"
              >
                yozan.tech@gmail.com
              </Link>
            </FadeIn>
          </div>
          <FadeIn delay={0.6} initialY={10}>
            <div className="mt-auto mb-0 font-medium">
              {tFooter("businessHours")}
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="flex flex-1 gap-12">
        <div className="flex flex-col gap-4 flex-[0.9]">
          <FadeIn
            delay={0.2}
            initialY={10}
            className="text-surface-900 font-semibold text-lg"
          >
            Social Media
          </FadeIn>
          <div className="flex flex-col gap-2">
            {SOCIAL_MEDIA.map((media, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1} initialY={10}>
                <Link
                  href={media.href}
                  className="text-surface-600 hover:text-surface-800 transition-colors duration-300 group relative w-fit flex items-center gap-2"
                >
                  <Image
                    src={media.icon}
                    alt={media.label}
                    width={18}
                    height={18}
                  />
                  <span>{media.label}</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <FadeIn
            delay={0.2}
            initialY={10}
            className="text-surface-900 font-semibold text-lg"
          >
            {tFooter("language")}
          </FadeIn>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
