"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAVIGATION = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "price",
    label: "Price",
    href: "/price",
  },
  {
    id: "services",
    label: "Services",
    href: "/services",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex items-center border-b bg-surface-50/80 backdrop-blur-md border-surface-300 justify-between min-h-16 px-6 md:px-16 w-full">
      <Link href="/" className="flex items-end gap-1.5 font-serif leading-none shrink-0">
        <span className="text-surface-900 text-2xl font-semibold">
          躍棧
        </span>
        <span className="text-surface-600 text-sm font-medium tracking-tighter">
          YozanTech
        </span>
      </Link>
      <nav className="hidden lg:flex items-center gap-6 text-sm">
        {NAVIGATION.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`group py-1 relative text-surface-800 ${isActive ? "font-medium" : ""}`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 h-px w-0 bg-surface-600 transition-all duration-300 group-hover:w-full`}
              ></span>
            </Link>
          );
        })}
        <button className="ml-1 cursor-pointer hover:bg-brand-700 bg-brand-600 shadow-md text-surface-50 px-5 py-2 rounded-full transition-all duration-300 font-semibold">
          Free Consultation
        </button>
      </nav>
      {/* Mobile Menu Button Placeholder */}
      <button className="lg:hidden flex items-center justify-center p-2 text-surface-800">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </button>
    </header>
  );
}
