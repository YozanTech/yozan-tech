"use client";

import { motion } from "framer-motion";
import { Cloud, Sparkles } from "lucide-react";

export default function HeroGraphic() {
  return (
    <div className="relative w-full max-w-md aspect-square mx-auto mt-8 lg:mt-0">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-400/20 blur-[80px] rounded-full pointer-events-none"></div>

      {/* Main Glassmorphic Card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl flex flex-col p-6 md:p-8 overflow-hidden"
      >
        {/* Browser Mac Dots */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-surface-300"></div>
            <div className="w-3 h-3 rounded-full bg-surface-300"></div>
            <div className="w-3 h-3 rounded-full bg-surface-300"></div>
          </div>
          <div className="w-20 h-2 rounded-full bg-surface-200"></div>
        </div>

        {/* Abstract Skeleton Lines */}
        <div className="flex flex-col gap-4 flex-1">
          <div className="w-3/4 h-4 rounded-full bg-surface-200"></div>
          <div className="w-1/2 h-4 rounded-full bg-brand-200"></div>
          <div className="w-full h-4 rounded-full bg-surface-200 mt-4"></div>
          <div className="w-5/6 h-4 rounded-full bg-surface-200"></div>

          {/* Abstract Data Viz */}
          <div className="mt-auto flex items-end gap-3 h-24">
            <motion.div
              animate={{ height: ["40%", "60%", "40%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="flex-1 bg-brand-200 rounded-t-lg"
            />
            <motion.div
              animate={{ height: ["70%", "85%", "70%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="flex-1 bg-brand-400 rounded-t-lg"
            />
            <motion.div
              animate={{ height: ["100%", "80%", "100%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="flex-1 bg-brand-600 rounded-t-lg"
            />
            <motion.div
              animate={{ height: ["60%", "40%", "60%"] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="flex-1 bg-brand-300 rounded-t-lg"
            />
          </div>
        </div>
      </motion.div>

      {/* Floating Element 1 (Top Right) */}
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-4 md:-right-8 -top-8 bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-xl"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 shadow-inner">
            <Cloud size={20} />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="w-16 h-2 rounded-full bg-surface-800"></div>
            <div className="w-10 h-2 rounded-full bg-surface-400"></div>
          </div>
        </div>
      </motion.div>

      {/* Floating Element 2 (Bottom Left) */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -left-4 md:-left-12 bottom-12 bg-surface-900/90 backdrop-blur-md p-4 rounded-2xl border border-surface-700 shadow-xl"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-800 flex items-center justify-center text-brand-400 shadow-inner">
            <Sparkles size={20} />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="w-20 h-2 rounded-full bg-surface-100"></div>
            <div className="w-12 h-2 rounded-full bg-surface-400"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
