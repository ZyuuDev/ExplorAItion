"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "LEARN", href: "/academy", icon: "home" },
    { name: "LEADERBOARD", href: "/leaderboard", icon: "emoji_events" },
    { name: "QUESTS", href: "#", icon: "assignment" },
    { name: "SHOP", href: "#", icon: "storefront" },
    { name: "PROFILE", href: "/profile", icon: "person" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-primary/20 bg-background-light dark:bg-background-dark z-50 p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
          <span className="material-icons-round">temple_hindu</span>
        </div>
        <h1 className="text-xl font-extrabold tracking-tight text-primary uppercase">
          Njogjani
        </h1>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-4 p-3 rounded-xl transition-all font-bold",
              pathname === item.href
                ? "bg-primary/10 text-primary border-2 border-primary/30"
                : "text-slate-500 hover:bg-primary/5 hover:text-primary border-2 border-transparent",
            )}
          >
            <span className="material-icons-round">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-primary/10">
        <button className="w-full flex items-center gap-4 p-3 text-slate-400 hover:text-slate-600 font-bold">
          <span className="material-icons-round">settings</span>
          SETTINGS
        </button>
      </div>
    </aside>
  );
}
