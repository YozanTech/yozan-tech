"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Coins, Cpu, Info } from "lucide-react";
import { NAVIGATION } from "@/constants/navigation";

const NAV_ITEMS = [
  { id: "home", href: "/", icon: Home, label: "Home" },
  { id: "price", href: "/price", icon: Coins, label: "Price" },
  { id: "services", href: "/services", icon: Cpu, label: "Services" },
  { id: "about", href: "/about", icon: Info, label: "About" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm z-50 shadow-xl bg-surface-50/80 backdrop-blur-lg border border-surface-200 rounded-full md:hidden flex items-center justify-between p-2 h-12">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.id}
            href={item.href}
            aria-label={item.label}
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
    </div>
  );
}
