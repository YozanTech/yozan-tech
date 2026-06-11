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
    <header className="sticky top-0 z-50 flex items-center border-b bg-surface-50/80 backdrop-blur-md border-surface-300 justify-between min-h-16 px-16">
      <Link href="/" className="flex items-end gap-1.5 font-serif leading-none">
        <span className="text-surface-900 text-2xl font-semibold">
          躍棧
        </span>
        <span className="text-surface-600 text-sm font-medium tracking-tighter">
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
    </header>
  );
}
