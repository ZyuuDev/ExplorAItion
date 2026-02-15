"use client";

import Link from "next/link";
import { useStore } from "@/store/useStore";
import { motion } from "framer-motion";

export default function AcademyPage() {
  const { xp } = useStore();

  const units = [
    {
      id: 1,
      title: "Unit 1: Sanggar Pesona Batik",
      description: "Mengenal filosofi dan ragam motif Batik Yogyakarta.",
      progress: 65,
      lessons: [
        {
          id: "batik-1",
          title: "Belajar Batik",
          description:
            "Pengenalan dasar motif Parang, Kawung, dan Sekar Jagad.",
          icon: "theater_comedy",
          status: "active", // active, completed, locked
          href: "/lesson",
        },
        {
          id: "batik-2",
          title: "Dasar Aksara",
          description: "Membaca dan menulis aksara Jawa dasar.",
          icon: "shield",
          status: "locked",
          href: "#",
        },
        {
          id: "batik-3",
          title: "Filosofi Wayang",
          description: "Memahami karakter dan watak tokoh pewayangan.",
          icon: "history_edu",
          status: "locked",
          href: "#",
        },
      ],
    },
    {
      id: 2,
      title: "Unit 2: Khasanah Keraton",
      description: "Menjelajahi arsitektur dan tata nilai Keraton Yogyakarta.",
      progress: 0,
      lessons: [
        {
          id: "keraton-1",
          title: "Tata Ruang",
          description: "Filosofi sumbu imajiner Yogyakarta.",
          icon: "castle",
          status: "locked",
          href: "#",
        },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Main Content Area */}
      <main className="flex-1 pt-8 pb-20 px-6 md:px-12 bg-slate-50 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Header */}
          <section className="mb-10">
            <h1 className="text-3xl font-black text-slate-800 dark:text-white mb-2 tracking-tight">
              Sugeng Rawuh, <span className="text-primary">Raden Mas!</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              Lanjutkan perjalanan budayamu hari ini.
            </p>
          </section>

          {/* Units Stack */}
          <div className="space-y-12">
            {units.map((unit, index) => (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                {/* Unit Header */}
                <div className="flex items-end justify-between border-b pb-4 border-slate-200 dark:border-slate-700">
                  <div>
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                      {unit.title}
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {unit.description}
                    </p>
                  </div>
                  <div className="text-right hidden md:block">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">
                      Progress Unit
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-32 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{ width: `${unit.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                        {unit.progress}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Lessons Grid/List */}
                <div className="grid gap-4">
                  {unit.lessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      href={lesson.status !== "locked" ? lesson.href : "#"}
                      className={`block group ${lesson.status === "locked" ? "cursor-not-allowed opacity-60 grayscale" : ""}`}
                    >
                      <motion.div
                        whileHover={
                          lesson.status !== "locked"
                            ? { scale: 1.01, x: 4 }
                            : {}
                        }
                        className={`bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm border-2 flex items-center gap-4 transition-all ${
                          lesson.status === "active"
                            ? "border-primary/50 shadow-md shadow-primary/5"
                            : "border-transparent dark:border-zinc-700 hover:border-slate-200 dark:hover:border-zinc-600"
                        }`}
                      >
                        {/* Icon State */}
                        <div
                          className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                            lesson.status === "completed"
                              ? "bg-green-100 dark:bg-green-900/30 text-green-600"
                              : lesson.status === "active"
                                ? "bg-primary text-white shadow-lg shadow-primary/30"
                                : "bg-slate-100 dark:bg-zinc-700 text-slate-400 dark:text-zinc-500"
                          }`}
                        >
                          {lesson.status === "completed" ? (
                            <span className="material-icons-round text-2xl">
                              check
                            </span>
                          ) : lesson.status === "locked" ? (
                            <span className="material-icons-round text-2xl">
                              lock
                            </span>
                          ) : (
                            <span className="material-icons-round text-2xl">
                              {lesson.icon}
                            </span>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3
                            className={`font-bold text-base mb-1 truncate ${
                              lesson.status === "active"
                                ? "text-primary"
                                : "text-slate-800 dark:text-slate-200"
                            }`}
                          >
                            {lesson.title}
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                            {lesson.description}
                          </p>
                        </div>

                        {/* Action Button */}
                        <div>
                          {lesson.status === "active" && (
                            <button className="px-5 py-2 bg-primary text-white text-xs font-bold rounded-lg uppercase tracking-wider shadow-sm group-hover:bg-primary/90 transition-colors">
                              Mulai
                            </button>
                          )}
                          {lesson.status === "completed" && (
                            <button className="px-4 py-2 border border-slate-200 dark:border-zinc-600 text-slate-400 text-xs font-bold rounded-lg uppercase tracking-wider hover:bg-slate-50 dark:hover:bg-zinc-700 transition-colors">
                              Ulangi
                            </button>
                          )}
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Right Sidebar (Revised for new layout) */}
      <aside className="fixed right-0 top-16 h-[calc(100vh-64px)] w-80 p-8 hidden xl:flex flex-col gap-8 bg-white dark:bg-zinc-800 border-l border-slate-200 dark:border-zinc-700 overflow-y-auto custom-scrollbar">
        {/* Daily Quests (Compact) */}
        <div className="bg-slate-50 dark:bg-zinc-900 rounded-2xl p-6 border border-slate-100 dark:border-zinc-700">
          <h4 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
            <span className="material-icons-round text-primary text-sm">
              assignment
            </span>
            Misi Harian
          </h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-500">
                <span>Dapatkan 50 XP</span>
                <span>30/50</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-zinc-700 h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[60%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mascot / Motivation */}
        <div className="bg-primary/10 rounded-2xl p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 batik-pattern-bg opacity-10"></div>
          <div className="relative z-10">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
              <span className="material-icons-round text-4xl text-primary">
                emoji_events
              </span>
            </div>
            <h4 className="font-bold text-primary mb-1">Semangat, Lur!</h4>
            <p className="text-xs text-primary/80">
              Selesaikan 1 pelajaran lagi untuk mempertahankan streak-mu!
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
