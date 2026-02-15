"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tentang", href: "#" },
    { name: "Scan Budaya", href: "/scan" },
    { name: "NJOGJANI Academy", href: "/academy" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 h-20 flex items-center",
        isScrolled ? "glass-nav dark:bg-background-dark/80" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
            N
          </div>
          <span className="text-2xl font-extrabold tracking-tighter text-maroon dark:text-primary uppercase">
            NJOGJANI
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-semibold hover:text-primary transition-colors",
                pathname === link.href
                  ? "text-primary"
                  : "text-soga dark:text-cream",
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/academy"
            className="px-6 py-2.5 rounded-full font-bold text-sm bg-primary text-white hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            Mulai Petualangan
          </Link>
        </div>
      </div>
    </nav>
  );
}
