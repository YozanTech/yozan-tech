import { Home, Coins, Cpu, Info } from "lucide-react";

export const NAVIGATION = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    id: "price",
    label: "Price",
    href: "/price",
    icon: Coins,
  },
  {
    id: "services",
    label: "Services",
    href: "/services",
    icon: Cpu,
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    icon: Info,
  },
];
