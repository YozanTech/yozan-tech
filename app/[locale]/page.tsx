import {
  ArrowRight,
  Sparkles,
  Cloud,
  Handshake,
  MessagesSquare,
  Wrench,
} from "lucide-react";
import { SERVICES } from "@/constants/service";
import FadeIn from "@/components/FadeIn";
import ConsultationButton from "@/components/ui/ConsultationButton";
import { getTranslations } from "next-intl/server";
import HeroGraphic from "@/components/ui/HeroGraphic";
import { Link } from "@/i18n/routing";

const yozanValues = [
  {
    id: "flexiblePricing",
    icon: Handshake,
  },
  {
    id: "longTermMaintenance",
    icon: Wrench,
  },
  {
    id: "cloudNative",
    icon: Cloud,
  },
  {
    id: "directCommunication",
    icon: MessagesSquare,
  },
];

export default async function Home() {
  const t = await getTranslations("home");
  const tService = await getTranslations("services");

  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row bg-surface-50 min-h-[calc(100vh-64px)] w-full items-center justify-center px-4 py-8 md:p-24! gap-12 md:gap-24 border-b border-surface-200/80">
        <div className="flex flex-col gap-6 md:gap-8 flex-1 mt-auto md:mt-0 items-center md:items-start justify-center">
          <FadeIn
            delay={0.2}
            initialX={-20}
            className="text-surface-600 text-xs flex items-center gap-2 p-2 bg-surface-100 w-fit rounded-full px-4 py-1.5 border-surface-500 border"
          >
            <Sparkles size={12} className="text-brand-600" />
            {t("badge")}
          </FadeIn>
          <FadeIn delay={0.4} initialX={-20}>
            <h1 className="font-bold text-3xl text-center md:text-left md:text-5xl flex flex-col gap-2">
              <span>{t("title1")}</span>
              <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
                <span className="text-brand-500 text-nowrap">
                  {t("title2")}
                </span>
                <span className="text-nowrap">{t("title3")}</span>
              </div>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6} initialX={-20}>
            <p className="flex text-sm md:text-base text-center md:text-left items-center text-surface-800 w-full">
              {t("description")}
            </p>
          </FadeIn>
          <div className="flex flex-col md:flex-row text-sm md:text-base  items-start md:items-center gap-4 lg:gap-6 mt-2">
            <FadeIn delay={0.8} initialX={-20} className="w-full md:w-auto">
              <Link
                href="/services"
                className="max-md:w-full text-sm flex w-full md:w-auto items-center hover:scale-105 justify-center gap-2.5 bg-brand-600 text-surface-50 px-5 py-3 rounded-full cursor-pointer font-bold transition-all hover:bg-brand-700 duration-300 group"
              >
                {t("heroBtn1")}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-all duration-300"
                />
              </Link>
            </FadeIn>
            <FadeIn delay={1.0} initialX={-20}>
              <ConsultationButton text={t("heroBtn2")} variant="outline" />
            </FadeIn>
          </div>
        </div>

        <FadeIn
          delay={0.8}
          initialX={20}
          className="hidden lg:flex flex-1 w-full items-center justify-center relative"
        >
          <HeroGraphic />
        </FadeIn>
      </section>

      {/* Services Section */}
      <section className="flex flex-col min-h-[calc(100vh-64px)] w-full items-center justify-center p-4 py-8 md:p-24! gap-8 md:gap-16 border-b border-surface-200/80">
        <div className="flex flex-col gap-2 w-full">
          <FadeIn
            delay={0.2}
            initialX={-20}
            className="text-brand-600 font-bold tracking-widest text-xs md:text-sm uppercase"
          >
            {t("services")}
          </FadeIn>
          <FadeIn delay={0.4} initialX={-20}>
            <h2 className="text-2xl md:text-4xl text-surface-900 font-bold">
              {t("serviceTitle")}
            </h2>
          </FadeIn>
          <FadeIn delay={0.6} initialX={-20}>
            <p className="mt-2 text-surface-600 text-sm md:text-base max-w-full md:max-w-2xl leading-relaxed">
              {t("serviceDescription")}
            </p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full mt-4 md:mt-0">
          {SERVICES.map((service, index) => (
            <FadeIn
              delay={0.8 + index * 0.2}
              initialY={20}
              key={index}
              className="flex flex-col gap-3 bg-surface-50 border border-surface-200 rounded-2xl p-6 lg:p-8 hover:shadow-xl hover:border-surface-300 hover:-translate-y-1 transition-all duration-300 group cursor-default"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-brand-100 text-brand-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <service.icon size={20} />
              </div>
              <h3 className="text-surface-900 font-bold text-lg md:text-xl mb-1 mt-2">
                {tService(`items.${service.id}.label`)}
              </h3>
              <p className="text-surface-600 text-xs md:text-sm leading-relaxed">
                {tService(`items.${service.id}.shortDescription`)}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Why Yozan Tech Section */}
      <section className="flex flex-col bg-surface-50 min-h-[calc(100vh-64px)] w-full items-center justify-center px-4 py-8 md:p-24! gap-8 md:gap-16 border-b border-surface-200/80">
        <div className="flex flex-col gap-2 w-full">
          <FadeIn
            delay={0.2}
            initialX={-20}
            className="text-brand-600 font-bold tracking-widest text-xs md:text-sm uppercase"
          >
            {t("whyYozan")}
          </FadeIn>
          <FadeIn delay={0.4} initialX={-20}>
            <h2 className="text-2xl md:text-4xl text-surface-900 font-bold">
              {t("whyYozanTitle")}
            </h2>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 w-full mt-4">
          {yozanValues.map((value, index) => (
            <FadeIn
              delay={0.6 + index * 0.2}
              initialY={20}
              key={index}
              className="flex items-start gap-4 group"
            >
              <div className="bg-brand-100 text-brand-600 rounded-full p-3 shrink-0 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                <value.icon size={20} />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-bold text-surface-900 text-base md:text-lg">
                  {t(`values.${value.id}.label`)}
                </h3>
                <p className="text-surface-600 text-xs md:text-sm leading-relaxed">
                  {t(`values.${value.id}.description`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="w-full h-px bg-radial from-surface-200 via-surface-100 to-transparent my-12"></div>

        {/* CTA Section */}
        <div className="flex flex-col items-center text-center max-md:pb-12 gap-4 max-w-3xl">
          <FadeIn delay={0.2} initialX={-20}>
            <h2 className="text-3xl md:text-5xl text-surface-900 font-bold leading-tight">
              {t("ctaTitle")}
            </h2>
          </FadeIn>
          <FadeIn delay={0.4} initialX={20}>
            <p className="text-surface-600 text-sm md:text-base leading-relaxed mt-2">
              {t("ctaDescription")}
            </p>
          </FadeIn>
          <FadeIn delay={0.6} initialX={-20}>
            <ConsultationButton text={t("ctaBtn")} />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
