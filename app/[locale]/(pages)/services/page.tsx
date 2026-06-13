import FadeIn from "@/components/FadeIn";
import ConsultationButton from "@/components/ui/ConsultationButton";
import { SERVICES } from "@/constants/service";
import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "navigation" });

  return {
    title: t("services"),
  };
}

export default async function ServicePage() {
  const t = await getTranslations("services");

  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="flex flex-col w-full px-4 py-8 md:p-24! gap-2 border-b border-surface-200/80">
        <FadeIn
          delay={0.2}
          initialX={-20}
          className="text-brand-600 font-bold tracking-widest text-xs md:text-sm uppercase"
        >
          {t("service")}
        </FadeIn>
        <FadeIn delay={0.4} initialX={-20}>
          <h1 className="font-bold text-2xl text-left md:text-5xl flex flex-col md:gap-2 text-surface-900">
            <span>{t("title1")}</span>
            <span>{t("title2")}</span>
          </h1>
        </FadeIn>
        <FadeIn
          delay={0.6}
          initialX={-20}
          className="mt-5 flex text-sm md:text-base text-left items-center text-surface-800 w-full leading-relaxed md:max-w-[50%]"
        >
          {t("description")}
        </FadeIn>
      </section>

      {/* Service List Section */}
      {SERVICES.map((service, index) => (
        <section
          key={index}
          className={`group flex flex-col md:flex-row w-full items-center justify-center px-4 py-8 md:p-24! ${index % 2 === 0 ? "bg-surface-50" : "bg-transparent"} ${index === 2 ? "" : "border-b border-surface-200/80"}`}
        >
          <div
            className={`flex flex-col gap-8 md:gap-16 w-full ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
          >
            <div className="flex flex-col flex-1 gap-2.5">
              <FadeIn delay={0.2} initialX={-20}>
                <div className="w-14 mb-4 md:mb-8 h-14 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                  <service.icon size={20} />
                </div>
              </FadeIn>
              <FadeIn delay={0.4} initialX={-20}>
                <div className="text-brand-600 uppercase text-sm md:text-base font-medium">
                  {t(`serviceCount`, { index: index + 1 })}
                </div>
              </FadeIn>

              <FadeIn delay={0.6} initialX={-20}>
                <h2 className="text-xl md:text-3xl font-bold text-surface-900">
                  {t(`items.${service.id}.label`)}
                </h2>
              </FadeIn>
              <FadeIn delay={0.8} initialX={-20}>
                <p className="text-brand-600 font-medium text-sm md:text-base">
                  {t(`items.${service.id}.shortDescription`)}
                </p>
              </FadeIn>
              <FadeIn delay={1.0} initialX={-20}>
                <p className="text-surface-600 text-sm md:text-base">
                  {t(`items.${service.id}.description`)}
                </p>
              </FadeIn>
            </div>
            <div className="flex flex-col gap-8 flex-1">
              {Object.values(service.serviceDetail).map(
                (serviceDetail, idx) => (
                  <FadeIn delay={0.2 + idx * 0.2} initialX={20} key={idx}>
                    <div className="flex items-center gap-4 bg-[#fffdf8] p-4 px-6 border-surface-200 border rounded-2xl shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-surface-300 transition-all duration-300 cursor-default">
                      <Check
                        className="text-brand-600 min-w-4 min-h-4"
                        size={16}
                      />
                      <p className="text-surface-600 text-xs md:text-sm">
                        {t(`items.${service.id}.serviceDetail.${idx + 1}`)}
                      </p>
                    </div>
                  </FadeIn>
                ),
              )}
            </div>
          </div>
        </section>
      ))}

      <div className="w-full h-px bg-radial from-surface-200 via-surface-100 to-transparent"></div>

      {/* CTA Section */}
      <section className="flex flex-col items-center text-center gap-4 justify-center px-4 py-34 md:p-24! border-b bg-surface-50 border-surface-200/80 w-full">
        <FadeIn
          delay={0.2}
          initialX={20}
          className="max-w-3xl text-3xl md:text-5xl text-surface-900 font-bold leading-tight"
        >
          {t("ctaTitle")}
        </FadeIn>
        <FadeIn
          delay={0.4}
          initialX={-20}
          className="max-w-3xl text-surface-600 text-sm md:text-base leading-relaxed mt-2"
        >
          {t("ctaDescription")}
        </FadeIn>
        <FadeIn delay={0.6} initialX={20}>
          <ConsultationButton text={t("ctaBtn")} />
        </FadeIn>
      </section>
    </div>
  );
}
