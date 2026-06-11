import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <section className="flex flex-col lg:flex-row bg-surface-50 min-h-[calc(100vh-64px)] w-full items-center justify-center p-6 md:p-16 md:px-24 gap-12 md:gap-24 border-b border-surface-200/80">
        <div className="flex flex-col flex-1 gap-6 lg:gap-8 w-full my-8 lg:mt-0 max-md:items-center">
          <div className="text-surface-600 text-xs flex items-center gap-2 p-2 bg-surface-100 w-fit rounded-full px-4 py-1.5 border-surface-500 border">
            <Sparkles size={12} className="text-brand-600" />
            Technology Partners Built For SME
          </div>
          <h1 className="font-semibold text-3xl text-center md:text-left lg:text-4xl flex flex-col gap-2">
            <span>Modernizing the</span>
            <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
              <span className="text-brand-500 text-nowrap">
                Digital Foundation
              </span>
              <span className="text-nowrap">for SMEs.</span>
            </div>
          </h1>
          <div className="flex text-sm md:text-base text-center md:text-left items-center text-surface-800 w-full">
            躍棧 (Yozan Tech) provides tailor-made systems, premium websites,
            and managed cloud services. From the very first line of code to
            daily maintenance, we are with you for the long haul.
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6 mt-2">
            <button className="flex w-full sm:w-auto items-center hover:scale-105 justify-center gap-2.5 bg-brand-600 text-surface-50 px-5 py-2.5 rounded-full cursor-pointer font-bold transition-all hover:bg-brand-700 duration-300 group">
              Learn About Our Services
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-all duration-300"
              />
            </button>
            <button className="text-surface-600 w-full sm:w-auto text-center border border-surface-300 px-5 py-2.5 rounded-full cursor-pointer hover:bg-surface-100 font-bold transition-all duration-300">
              Reserve a Free Consultation
            </button>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 w-full rounded-2xl items-center justify-center font-bold text-surface-600 border-dashed h-64 lg:h-full border-surface-500 border bg-surface-200 shadow-inner">
          Image Placeholder
        </div>
      </section>

      <section className="flex bg-transparent h-screen w-full items-center justify-center p-16 px-24 gap-24"></section>
    </div>
  );
}
