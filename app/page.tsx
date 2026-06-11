import {
  ArrowRight,
  Sparkles,
  BriefcaseBusiness,
  Globe,
  Cloud,
  Handshake,
  MessagesSquare,
  Wrench,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    label: "Custom Business Systems",
    icon: BriefcaseBusiness,
    description:
      "From internal workflows to automated operations. We build tailored ERPs, CRMs, and dashboards that perfectly fit your unique business logic, eliminating the friction of rigid off-the-shelf software.",
  },
  {
    label: "Premium Corporate Websites",
    icon: Globe,
    description:
      "From high-converting landing pages to robust e-commerce platforms. We craft lightning-fast, SEO-optimized, and visually stunning digital storefronts that elevate your brand and drive actual business growth.",
  },
  {
    label: "Maintenance & Cloud Management",
    icon: Cloud,
    description:
      "Ensuring high availability, bulletproof security, and smooth daily operations. We handle the servers, continuous deployments, and technical monitoring, so you can sleep well and focus entirely on your business.",
  },
];

const yozanValues = [
  {
    label: "Flexible Pricing",
    icon: Handshake,
    description:
      "Deliver in phases according to your budget and priorities, eliminating the need for a massive upfront investment.",
  },
  {
    label: "Long-Term Maintenance",
    icon: Wrench,
    description:
      "From the very first line of code to daily maintenance, we are with you for the long haul.",
  },
  {
    label: "Cloud-Native",
    icon: Cloud,
    description:
      "Built on modern, scalable infrastructure ensuring your applications remain fast, secure, and highly available at all times.",
  },
  {
    label: "Direct Communication",
    icon: MessagesSquare,
    description:
      "Communicate directly with the expert developers building your product, ensuring no requirements are lost through a middleman.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row bg-surface-50 min-h-[calc(100vh-64px)] w-full items-center justify-center p-6 md:p-24 gap-12 md:gap-24 border-b border-surface-200/80">
        <div className="flex flex-col gap-6 md:gap-8 flex-1 mt-auto md:mt-0 items-center md:items-start justify-center">
          <FadeIn
            delay={0.2}
            initialX={-20}
            className="text-surface-600 text-xs flex items-center gap-2 p-2 bg-surface-100 w-fit rounded-full px-4 py-1.5 border-surface-500 border"
          >
            <Sparkles size={12} className="text-brand-600" />
            Technology Partners Built For SME
          </FadeIn>
          <FadeIn
            delay={0.4}
            initialX={-20}
            className="font-bold text-3xl text-center md:text-left md:text-4xl flex flex-col gap-2"
          >
            <span>Modernizing the</span>
            <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
              <span className="text-brand-500 text-nowrap">
                Digital Foundation
              </span>
              <span className="text-nowrap">for SMEs.</span>
            </div>
          </FadeIn>

          <FadeIn
            delay={0.6}
            initialX={-20}
            className="flex text-sm md:text-base text-center md:text-left items-center text-surface-800 w-full"
          >
            躍棧 (Yozan Tech) provides tailor-made systems, premium websites,
            and managed cloud services. From the very first line of code to
            daily maintenance, we are with you for the long haul.
          </FadeIn>
          <div className="flex flex-col md:flex-row text-sm md:text-base  items-start md:items-center gap-4 lg:gap-6 mt-2">
            <FadeIn delay={0.8} initialX={-20}>
              <button className="flex w-full md:w-auto items-center hover:scale-105 justify-center gap-2.5 bg-brand-600 text-surface-50 px-5 py-2.5 rounded-full cursor-pointer font-bold transition-all hover:bg-brand-700 duration-300 group">
                Learn About Our Services
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-all duration-300"
                />
              </button>
            </FadeIn>
            <FadeIn delay={1.0} initialX={-20}>
              <button className="text-surface-600 w-full md:w-auto text-center border border-surface-300 px-5 py-2.5 rounded-full cursor-pointer hover:bg-surface-100 font-bold transition-all duration-300 hover:scale-105">
                Reserve a Free Consultation
              </button>
            </FadeIn>
          </div>
        </div>

        <FadeIn
          delay={0.8}
          initialX={20}
          className="hidden lg:flex flex-1 w-full rounded-2xl items-center justify-center font-bold text-surface-800 border-dashed h-64 lg:h-full border-surface-500 border bg-surface-200 shadow-inner"
        >
          Image Placeholder
        </FadeIn>
      </section>

      {/* Services Section */}
      <section className="flex flex-col min-h-[calc(100vh-64px)] w-full items-center justify-center p-6 md:p-24 gap-8 md:gap-12 border-b border-surface-200/80">
        <div className="flex flex-col gap-2 w-full">
          <FadeIn
            delay={0.2}
            initialX={-20}
            className="text-brand-600 font-bold tracking-widest text-xs md:text-sm uppercase"
          >
            SERVICES
          </FadeIn>
          <FadeIn
            delay={0.4}
            initialX={-20}
            className="text-3xl md:text-4xl text-surface-900 font-bold"
          >
            3 Main Things We Do
          </FadeIn>
          <FadeIn
            delay={0.6}
            initialX={-20}
            className="mt-2 text-surface-600 text-sm md:text-base max-w-full md:max-w-2xl leading-relaxed"
          >
            We do not pursue large-scale and comprehensive development, but
            focus on the basic infrastructure that small and medium-sized
            enterprises truly need.
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full mt-4 md:mt-0">
          {services.map((service, index) => (
            <FadeIn
              delay={0.8 + index * 0.2}
              initialY={20}
              key={index}
              className="flex flex-col gap-3 bg-surface-50 border border-surface-200 rounded-2xl p-6 lg:p-8 hover:shadow-xl hover:border-surface-300 hover:-translate-y-1 transition-all duration-300 group cursor-default"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-brand-100 text-brand-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <service.icon size={20} />
              </div>
              <h3 className="text-surface-900 font-bold text-xl mb-1 mt-2">
                {service.label}
              </h3>
              <p className="text-surface-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Why Yozan Tech Section */}
      <section className="flex flex-col bg-surface-50 min-h-[calc(100vh-64px)] w-full items-center justify-center p-6 md:p-24 gap-8 md:gap-12 border-b border-surface-200/80">
        <div className="flex flex-col gap-2 w-full">
          <FadeIn
            delay={0.2}
            initialX={-20}
            className="text-brand-600 font-bold tracking-widest text-xs md:text-sm uppercase"
          >
            WHY YOZAN TECH
          </FadeIn>
          <FadeIn
            delay={0.4}
            initialX={-20}
            className="text-3xl md:text-4xl text-surface-900 font-bold"
          >
            Why Choose Yozan Tech?
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full mt-4">
          {yozanValues.map((value, index) => (
            <FadeIn
              delay={0.6 + index * 0.2}
              initialY={20}
              key={index}
              className="flex items-start gap-4 group"
            >
              <div className="bg-brand-100 text-brand-600 rounded-full p-3 shrink-0 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                <value.icon size={22} />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-bold text-surface-900 text-lg">
                  {value.label}
                </h3>
                <p className="text-surface-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="w-full h-px bg-radial from-surface-200 via-surface-100 to-transparent my-12"></div>

        {/* CTA Section */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl">
          <FadeIn
            delay={0.2}
            initialX={-20}
            className="text-3xl md:text-5xl text-surface-900 font-bold leading-tight"
          >
            Ready To Build a Solid Digital Foundation?
          </FadeIn>
          <FadeIn
            delay={0.4}
            initialX={20}
            className="text-surface-600 text-sm md:text-base leading-relaxed mt-2"
          >
            {
              "Get a free 30-minute consultation. Let's discuss your current situation and goals, and we will provide tailored technical advice for your business."
            }
          </FadeIn>
          <FadeIn delay={0.6} initialX={-20}>
            <button className="text-surface-50 mt-6 w-fit text-center px-8 py-3 rounded-full cursor-pointer hover:bg-brand-700 bg-brand-600 font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-600/20">
              Reserve Consultation
            </button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
