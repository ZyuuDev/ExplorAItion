"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-8 border-t border-primary/10 bg-white/50">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center grayscale">
            <span className="material-icons-round text-slate-400 text-sm">
              castle
            </span>
          </div>
          <p className="text-slate-400 text-sm font-medium">
            In partnership with Keraton Yogyakarta
          </p>
        </div>
        <div className="flex gap-8">
          <Link
            className="text-slate-400 text-sm font-bold hover:text-primary"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-slate-400 text-sm font-bold hover:text-primary"
            href="#"
          >
            Curriculum
          </Link>
          <Link
            className="text-slate-400 text-sm font-bold hover:text-primary"
            href="#"
          >
            Help Center
          </Link>
        </div>
        <p className="text-slate-300 text-xs">© 2024 NJOGJANI Academy</p>
      </div>
    </footer>
  );
}
