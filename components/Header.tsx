"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAVIGATION } from "@/constants/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex items-center border-b bg-surface-50/80 backdrop-blur-md border-surface-300 justify-between min-h-16 px-4 md:px-16 w-full">
      <Link href="/" className="flex items-center gap-1.5 font-serif shrink-0">
        <span className="text-surface-900 text-2xl font-semibold">躍棧</span>
        <span className="text-surface-600 text-sm font-medium tracking-tighter mt-auto">
          YozanTech
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        {NAVIGATION.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`group py-1 relative hidden md:flex text-surface-800 ${isActive ? "font-medium" : ""}`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 h-px w-0 bg-surface-600 transition-all duration-300 group-hover:w-full`}
              ></span>
            </Link>
          );
        })}
        <button className="md:text-sm text-[10px] ml-1 cursor-pointer hover:bg-brand-700 bg-brand-600 shadow-md text-surface-50 px-4 py-2 rounded-full transition-all duration-300 font-semibold hover:scale-105">
          Reserve Consultation
        </button>
      </nav>
    </header>
  );
}
