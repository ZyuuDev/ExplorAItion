"use client";

import Link from "next/link";

export default function AcademyPage() {
  return (
    <div className="flex min-h-screen snake-path">
      {/* Main Content Area */}
      <main className="flex-1 pt-8 pb-20 px-4">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          {/* Unit Header */}
          <section className="w-full bg-primary rounded-xl p-6 mb-12 relative overflow-hidden text-white shadow-lg shadow-primary/20">
            <div className="parang-pattern"></div>
            <div className="relative z-10 flex justify-between items-center">
              <div>
                <h2 className="text-sm font-bold opacity-80 uppercase tracking-widest mb-1">
                  Unit 1
                </h2>
                <h3 className="text-2xl font-black">Sanggar Wayang Kulit</h3>
                <p className="text-white/80 font-medium mt-1">
                  Introduction to Pandawa Lima & Character Traits
                </p>
              </div>
              <button className="bg-white/20 hover:bg-white/30 p-4 rounded-xl backdrop-blur-md border border-white/30 transition-all">
                <span className="material-icons-round text-3xl">map</span>
              </button>
            </div>
          </section>

          {/* Learning Path (Snake) */}
          <div className="relative w-full flex flex-col items-center gap-12">
            {/* Lesson Node 1 (Center) */}
            <div className="relative group">
              <Link href="/lesson">
                <button className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white shadow-xl transform transition-transform group-hover:scale-110 node-active cursor-pointer">
                  <span className="material-icons-round text-4xl">
                    theater_comedy
                  </span>
                </button>
              </Link>
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white border-2 border-slate-200 px-4 py-2 rounded-xl whitespace-nowrap shadow-sm">
                <span className="font-black text-slate-700">
                  Yudhistira's Virtue
                </span>
              </div>
            </div>

            {/* Path Connector (Curved) */}
            <svg
              className="w-32 h-20 -my-6 text-slate-200"
              viewBox="0 0 100 50"
            >
              <path
                d="M50,0 Q80,25 50,50"
                fill="none"
                stroke="currentColor"
                strokeDasharray="1 12"
                strokeLinecap="round"
                strokeWidth="8"
              ></path>
            </svg>

            {/* Lesson Node 2 (Shift Right) */}
            <div className="relative group ml-40">
              <button className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform group-hover:scale-110">
                <span className="material-icons-round text-3xl">shield</span>
              </button>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white border-2 border-slate-200 px-3 py-1.5 rounded-xl whitespace-nowrap shadow-sm">
                <span className="font-bold text-slate-600 text-sm">
                  Bima: The Strength
                </span>
              </div>
            </div>

            {/* Path Connector (Curved) */}
            <svg
              className="w-32 h-20 -my-6 text-slate-200 transform scale-x-[-1]"
              viewBox="0 0 100 50"
            >
              <path
                d="M50,0 Q80,25 50,50"
                fill="none"
                stroke="currentColor"
                strokeDasharray="1 12"
                strokeLinecap="round"
                strokeWidth="8"
              ></path>
            </svg>

            {/* Lesson Node 3 (Shift Left) */}
            <div className="relative group mr-40">
              <button className="w-20 h-20 bg-primary/30 border-4 border-primary/20 rounded-full flex items-center justify-center text-primary/40 shadow-inner">
                <span className="material-icons-round text-3xl">
                  history_edu
                </span>
              </button>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-100 border-2 border-slate-200 px-3 py-1.5 rounded-xl whitespace-nowrap">
                <span className="font-bold text-slate-400 text-sm">
                  Arjuna's Bow
                </span>
              </div>
            </div>

            {/* Unit Divider */}
            <div className="w-full py-8 flex items-center gap-4">
              <div className="h-[2px] bg-slate-200 flex-1"></div>
              <div className="px-6 py-2 bg-slate-100 rounded-full text-slate-400 font-bold text-xs uppercase tracking-widest">
                Locked: Galeri Batik
              </div>
              <div className="h-[2px] bg-slate-200 flex-1"></div>
            </div>

            {/* Lesson Node 4 (Center - Locked) */}
            <div className="relative group opacity-50 grayscale">
              <button className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 border-b-4 border-slate-300">
                <span className="material-icons-round text-4xl">style</span>
              </button>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                <span className="material-icons-round text-slate-300">
                  lock
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Right Sidebar (Quests/Mascot) */}
      <aside className="fixed right-0 top-16 h-[calc(100vh-64px)] w-80 p-8 hidden xl:flex flex-col gap-8 bg-background-light dark:bg-background-dark border-l border-primary/10 overflow-y-auto custom-scrollbar">
        {/* Mascot Section */}
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 relative">
          <div className="absolute -top-12 -right-4 w-32 h-32">
            <img
              className="w-full h-full object-contain"
              alt="A modern stylized Javanese boy character as a puppet master"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCykEVGQf-tdhmoZjvHSTlWSSjBJFePCbpeIC9HNC33sdeUsVW4Sy51mu_i6TP-Z6XFqPY9yqEvdqTsKOD_Bi_1pwH8AsJeKv6z0TlTHK-_j3jQbfByypD6HbSVc-PSer0DEKa7Z-lMU0k6gwH2tpNL2zIVc98IisyXUCXB3XXANFOCatq9EbWo8jwMfrpMScS7CmACpnLkCcMttCBZG01mRn4lTHOqWPSzuaJqa-lZ4jtht_3VbUGQjNCER2u47uV_45-6kZLMlOhS"
            />
          </div>
          <div className="pr-12">
            <h4 className="font-black text-slate-800 mb-1 leading-tight">
              Sugeng Rawuh!
            </h4>
            <p className="text-slate-500 text-sm">
              Ready to master the art of Wayang today, Bima?
            </p>
          </div>
        </div>

        {/* Daily Quests */}
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-black text-slate-800 text-sm">Daily Quests</h4>
            <a
              className="text-primary text-xs font-bold hover:underline"
              href="#"
            >
              VIEW ALL
            </a>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-500">
                <span>Earn 50 XP</span>
                <span>30/50</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[60%]"></div>
              </div>
            </div>
            <div className="space-y-2 opacity-50">
              <div className="flex justify-between text-xs font-bold text-slate-500">
                <span>Identify 3 Patterns</span>
                <span>0/3</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div className="bg-slate-300 h-full w-0"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Keraton Map (Mini) */}
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 overflow-hidden group cursor-pointer">
          <div className="relative h-32 rounded-lg overflow-hidden mb-3">
            <img
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
              alt="Minimalist artistic map of Yogyakarta Palace grounds"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvg6oblFYT2w0QPBlTi6nog1iCbtze36jR66NFLRwAJ02SVjQvZZHSHUenrHdyRcXmTDUT1Ze_V9QIypbWXHmF2YA4QMdWLCGUYRhOuPk5KrpTTrk0U5kdkSagmR--V0wUWXbbzgwyAhUGpcl5z2t67u5Fj-4bJ1jpHYH4GV27kY2KASn2p53VU0hILhgbgsP5rzoL9pd8KqHavS0wpHr1KD1fdJ0QKU12RIhovrpkG4qeJ6hBX9-8YM2bvnUpOMBghpFevAFvqOOJ"
            />
            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
              <span className="bg-white px-3 py-1 rounded-full text-xs font-black text-primary shadow-sm uppercase tracking-wider">
                Explore Map
              </span>
            </div>
          </div>
          <p className="text-xs text-center text-slate-400 font-medium">
            Navigate the Grand Palace grounds
          </p>
        </div>
      </aside>
    </div>
  );
}
