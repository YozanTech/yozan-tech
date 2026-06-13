import FadeIn from "@/components/FadeIn";
import ConsultationButton from "@/components/ui/ConsultationButton";
import { PRINCIPLE } from "@/constants/principle";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "About",
  description: "All information about Yozan Tech",
};

export default async function AboutPage() {
  const t = await getTranslations("about");

  return (
    <div className="flex flex-col flex-1">
      <section className="flex flex-col md:flex-row w-full items-center justify-center p-6 md:p-24 gap-12 md:gap-24 border-b border-surface-200/80">
        <div className="flex flex-col gap-2 w-full">
          <FadeIn
            delay={0.2}
            initialX={-20}
            className="text-brand-600 font-bold tracking-widest text-xs md:text-sm uppercase"
          >
            {t("heroTag")}
          </FadeIn>
          <FadeIn delay={0.4} initialX={-20}>
            <h1 className="font-bold text-3xl text-center md:text-left md:text-5xl flex flex-col gap-2 text-surface-900">
              <span>{t("heroTitle1")}</span>
              <span className="max-w-4xl">
                {" "}
                {t("heroTitle2")}
              </span>
            </h1>
          </FadeIn>
          <FadeIn
            delay={0.6}
            initialX={-20}
            className="mt-5 flex text-sm md:text-base text-center md:text-left items-center text-surface-800 w-full leading-relaxed md:max-w-[50%]"
          >
            {t("heroDescription")}
          </FadeIn>
        </div>
      </section>

      <section className="flex flex-col md:flex-row w-full items-center bg-surface-50 justify-center p-6 md:p-24 gap-12 md:gap-24 border-b border-surface-200/80">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-16 w-full">
          <div className="flex-1 flex flex-col w-full gap-2">
            <FadeIn delay={0.2} initialX={-20} className="text-brand-600 font-bold tracking-widest text-xs md:text-sm uppercase">
              {t("storyTag")}
            </FadeIn>
            <FadeIn delay={0.4} initialX={-20} className="text-3xl md:text-4xl text-surface-900 font-bold">
              {t("storyTitle")}
            </FadeIn>
          </div>
          <div className="flex flex-2 flex-col gap-4 text-surface-600 text-sm md:text-base leading-relaxed">
            <FadeIn delay={0.6} initialX={20}>
              <p>{t("storyP1")}</p>
            </FadeIn>
            <FadeIn delay={0.8} initialX={20}>
              <p>{t("storyP2")}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full items-center justify-center p-6 md:p-24 gap-8 md:gap-12 border-b border-surface-200/80">
        <div className="flex flex-col gap-2 w-full">
          <FadeIn delay={0.2} initialX={-20} className="text-brand-600 font-bold tracking-widest text-xs md:text-sm uppercase">
            {t("principleTag")}
          </FadeIn>
          <FadeIn delay={0.4} initialX={-20} className="text-3xl md:text-4xl text-surface-900 font-bold">
            {t("principleTitle")}
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full mt-4 md:mt-0">
            {PRINCIPLE.map((principle, index) => (
              <FadeIn delay={0.6 + index * 0.2} initialY={20} key={index} className="flex flex-col gap-3">
                <span className="text-4xl md:text-5xl font-bold text-brand-200">0{index + 1}</span>
                <span className="text-surface-900 font-bold text-lg md:text-xl">
                  {t(`principles.${principle.id}.title`)}
                </span>
                <span className="text-surface-600 text-sm md:text-base leading-relaxed">
                  {t(`principles.${principle.id}.description`)}
                </span>
              </FadeIn>
            ))}
          </div>
      </section>

      <section className="flex flex-col w-full items-center bg-surface-50 justify-center p-6 md:p-24 gap-12 md:gap-24 border-b border-surface-200/80">
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl">
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
