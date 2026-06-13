"use client";
import { usePathname, Link } from "@/i18n/routing";
import { NAVIGATION } from "@/constants/navigation";
import { CalendarDays } from "lucide-react";
import { useModalStore } from "@/store/useModalStore";

export default function MobileNav() {
  const pathname = usePathname();
  const { onOpen } = useModalStore();

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm z-50 shadow-xl bg-surface-50/80 backdrop-blur-lg border border-surface-200 rounded-full md:hidden flex items-center justify-between p-2 h-12">
      {NAVIGATION.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.id}
            href={item.href}
            aria-label={item.id}
            className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
              isActive
                ? "bg-brand-50 text-brand-600"
                : "text-surface-600 hover:bg-surface-100 hover:text-surface-900"
            }`}
          >
            <Icon size={16} strokeWidth={isActive ? 2.5 : 2} />
          </Link>
        );
      })}

      {/* Divider */}
      <div className="w-px h-5 bg-surface-200 mx-1 shrink-0" />

      {/* Consultation button */}
      <button
        onClick={onOpen}
        aria-label="Open consultation form"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-600 text-surface-50 hover:bg-brand-700 transition-all duration-300 hover:scale-110 cursor-pointer shadow-sm shadow-brand-600/30"
      >
        <CalendarDays size={16} />
      </button>
    </div>
  );
}
