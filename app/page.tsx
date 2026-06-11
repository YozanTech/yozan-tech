import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="flex bg-surface-50 h-[calc(100vh-64px)] w-full items-center justify-center p-16 px-24 gap-24 border-b border-surface-200/80">
        <div className="flex flex-col flex-1 gap-8">
          <div className="text-surface-600 text-xs flex items-center gap-2 p-2 bg-surface-100 w-fit rounded-full px-4 py-1.5 border-surface-500 border">
            <Sparkles size={12} className="text-brand-600" />
            Technology Partners Built For SME
          </div>
          <h1 className="font-semibold text-5xl flex flex-col gap-2">
            <span>Modernizing the</span>
            <div className="flex items-center text-nowrap gap-4">
              <span className="text-brand-500">Digital Foundation</span>
              <span>for SMEs.</span>
            </div>
          </h1>
          <div className="flex items-center text-surface-800 w-full">
            躍棧 (Yozan Tech) provides tailor-made systems, premium websites,
            and managed cloud services. From the very first line of code to
            daily maintenance, we are with you for the long haul.
          </div>
          <div className="flex items-center gap-6">
            <button className="flex items-center hover:scale-105 justify-center gap-2.5 bg-brand-600 text-surface-50 px-5 py-2.5 rounded-full cursor-pointer font-bold transition-all hover:bg-brand-700 duration-300 group">
              Learn About Our Services
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-all duration-300"
              />
            </button>
            <button className="text-surface-600 border border-surface-300 px-5 py-2.5 rounded-full cursor-pointer hover:bg-surface-100 font-bold transition-all duration-300">
              Reservation a Free Consultation
            </button>
          </div>
        </div>
        <div className="flex flex-1 rounded-2xl items-center justify-center font-bold text-surface-600 border-dashed h-full border-surface-500 border">
          Image Placeholder
        </div>
      </section>

      <section className="flex bg-transparent h-screen w-full items-center justify-center p-16 px-24 gap-24"></section>
    </div>
  );
}
