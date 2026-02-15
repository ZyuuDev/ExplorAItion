"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function QuestsPage() {
  const [activeTab, setActiveTab] = useState("Daily");

  const dailyQuests = [
    {
      id: 1,
      title: "Peminat Batik",
      desc: "Selesaikan 2 Pelajaran Batik",
      progress: 1,
      total: 2,
      xp: 20,
      icon: "brush",
    },
    {
      id: 2,
      title: "Suara Emas",
      desc: "Latihan pelafalan 5 kali",
      progress: 5,
      total: 5,
      xp: 15,
      icon: "graphic_eq",
      completed: true,
    },
    {
      id: 3,
      title: "Master XP",
      desc: "Dapatkan 50 XP hari ini",
      progress: 35,
      total: 50,
      xp: 10,
      icon: "bolt",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-900 pt-8 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
            Misi & Tantangan
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium max-w-lg mx-auto">
            Selesaikan misi harian untuk mendapatkan XP tambahan dan hadiah
            menarik!
          </p>
        </div>

        {/* Featured Monthly Challenge */}
        <div className="bg-linear-to-r from-primary to-orange-500 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl shadow-primary/30">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-12 -mb-12"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 flex-shrink-0">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2583/2583319.png" // Placeholder badge
                alt="Monthly Badge"
                className="w-full h-full object-contain filter drop-shadow-lg"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-black uppercase tracking-tight mb-2">
                Tantangan Oktober
              </h2>
              <p className="font-medium text-white/90 mb-4">
                Selesaikan 30 Misi Harian bulan ini untuk mendapatkan Lencana
                Eksklusif "Pahlawan Budaya".
              </p>

              <div className="w-full bg-black/20 h-4 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-white rounded-full w-[65%] shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
              </div>
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-white/80">
                <span>Progress Kamu</span>
                <span>20/30 Misi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quest List */}
        <div className="space-y-4">
          <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight mb-4">
            Misi Harian
          </h3>

          {dailyQuests.map((quest, idx) => (
            <motion.div
              key={quest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white dark:bg-zinc-800 p-6 rounded-2xl border-2 flex items-center gap-6 shadow-sm ${
                quest.completed
                  ? "border-primary/30 bg-primary/5"
                  : "border-slate-100 dark:border-zinc-700"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl shadow-lg ${
                  quest.completed
                    ? "bg-green-500 text-white"
                    : "bg-orange-100 dark:bg-orange-900/30 text-orange-600"
                }`}
              >
                <span className="material-icons-round">
                  {quest.completed ? "check" : quest.icon}
                </span>
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h4
                    className={`font-black text-lg ${quest.completed ? "text-primary" : "text-slate-800 dark:text-white"}`}
                  >
                    {quest.title}
                  </h4>
                  <div className="flex items-center gap-1 text-yellow-500 font-black">
                    <span className="material-icons-round text-sm">bolt</span>
                    <span>+{quest.xp}</span>
                  </div>
                </div>
                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm mb-3">
                  {quest.desc}
                </p>

                {!quest.completed && (
                  <div className="w-full bg-slate-100 dark:bg-zinc-700 h-3 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange-500 rounded-full transition-all duration-500"
                      style={{
                        width: `${(quest.progress / quest.total) * 100}%`,
                      }}
                    ></div>
                  </div>
                )}
              </div>

              {quest.completed ? (
                <button className="px-6 py-2 bg-slate-100 dark:bg-zinc-700 text-slate-400 font-bold rounded-xl uppercase tracking-wider text-xs cursor-default">
                  Selesai
                </button>
              ) : (
                <div className="text-right min-w-[60px]">
                  <span className="text-lg font-black text-slate-800 dark:text-white">
                    {quest.progress}/{quest.total}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
