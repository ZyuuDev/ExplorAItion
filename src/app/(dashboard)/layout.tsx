"use client";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useStore } from "@/store/useStore";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { flowers, streak, tokens } = useStore();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 min-h-screen">
      <Sidebar />

      {/* Top Stats Bar */}
      <header className="fixed top-0 left-64 right-0 h-16 bg-background-light/80 backdrop-blur-md border-b border-primary/10 z-40 px-8 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="material-icons-round text-red-500">
              local_florist
            </span>
            <span className="font-extrabold text-slate-600">{flowers}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons-round text-primary">
              local_fire_department
            </span>
            <span className="font-extrabold text-slate-600">{streak}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons-round text-sky-500">token</span>
            <span className="font-extrabold text-slate-600">
              {tokens.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-white border-2 border-slate-200 px-4 py-1.5 rounded-xl text-slate-500 font-bold hover:bg-slate-50 transition-all">
            <span className="material-icons-round text-sm">fitness_center</span>
            LATIHAN CEPAT
          </button>
          <button className="flex items-center gap-2 bg-white border-2 border-slate-200 px-4 py-1.5 rounded-xl text-slate-500 font-bold hover:bg-slate-50 transition-all">
            <span className="material-icons-round text-sm">menu_book</span>
            GUIDEBOOK
          </button>
        </div>
      </header>

      <div className="ml-64 pt-16">
        <main className="min-h-[calc(100vh-64px)]">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
