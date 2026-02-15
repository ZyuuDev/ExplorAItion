"use client";

import { motion } from "framer-motion";
import { useStore } from "@/store/useStore";

export default function ProfilePage() {
  const { xp } = useStore();

  const achievements = [
    {
      title: "Pencari Wayang",
      desc: "Scan 10 Wayang Kulit",
      icon: "theater_comedy",
      progress: 100,
      total: 10,
      level: 3,
    },
    {
      title: "Ahli Canting",
      desc: "Koleksi 5 Motif Batik",
      icon: "brush",
      progress: 3,
      total: 5,
      level: 1,
    },
    {
      title: "Sultan",
      desc: "Raih Liga Diamond",
      icon: "military_tech",
      progress: 0,
      total: 1,
      level: 0,
      locked: true,
    },
    {
      title: "Pujangga",
      desc: "Menyelesaikan 20 Pelajaran",
      icon: "history_edu",
      progress: 14,
      total: 20,
      level: 2,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-900 pt-8 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 border-b border-slate-200 dark:border-zinc-700 pb-8">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full border-4 border-primary p-1">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm70Y7dZdvcaJRZj6zJoKlMl6wla0kgbbAGtCnw31VB8JeaXLlgrte59zrZ_PuUdCLv0534NNjc7GOl7wayBdaHoDRqwXwOmzq7QdRMSKo5XDSglePlnqmIhoquz9F-Q80aegdeggnaBks_wHs26YGKEgX6AduItorM91LNIVtIIdb60WiKzNiWPEsV-42SuDApzAMOCC8__WNovUoNMGVeN8mQk2yS69gQMRp5lTagzvd6jMzRYckTMrW-Bl_Pn90rIthww5xthZ4"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors">
              <span className="material-icons-round text-sm">edit</span>
            </button>
          </div>

          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl font-black text-slate-800 dark:text-white mb-2">
              Raden Mas Bimo
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium mb-4">
              Bergabung sejak Oktober 2023
            </p>

            <div className="flex items-center justify-center md:justify-start gap-6 text-sm">
              <span className="flex items-center gap-1 font-bold text-slate-700 dark:text-slate-300">
                <span className="material-icons-round text-primary">group</span>
                124 Mengikuti
              </span>
              <span className="flex items-center gap-1 font-bold text-slate-700 dark:text-slate-300">
                <span className="material-icons-round text-primary">
                  groups
                </span>
                89 Pengikut
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button className="px-6 py-2 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-primary/90 transition-all uppercase tracking-wider text-xs">
              Bagikan Profil
            </button>
            <button className="px-6 py-2 border-2 border-slate-200 dark:border-zinc-700 text-slate-500 dark:text-slate-400 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all uppercase tracking-wider text-xs">
              Pengaturan
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-zinc-800 p-4 rounded-2xl border-2 border-slate-100 dark:border-zinc-700 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-icons-round text-orange-500">
                local_fire_department
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase">
                Streak
              </span>
            </div>
            <p className="text-2xl font-black text-slate-800 dark:text-white">
              12 Hari
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-4 rounded-2xl border-2 border-slate-100 dark:border-zinc-700 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-icons-round text-yellow-500">bolt</span>
              <span className="text-xs font-bold text-slate-400 uppercase">
                Total XP
              </span>
            </div>
            <p className="text-2xl font-black text-slate-800 dark:text-white">
              {xp}
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-4 rounded-2xl border-2 border-slate-100 dark:border-zinc-700 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-icons-round text-primary">
                military_tech
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase">
                Liga
              </span>
            </div>
            <p className="text-2xl font-black text-slate-800 dark:text-white">
              Gold
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-4 rounded-2xl border-2 border-slate-100 dark:border-zinc-700 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-icons-round text-blue-500">
                emoji_events
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase">
                Top 3
              </span>
            </div>
            <p className="text-2xl font-black text-slate-800 dark:text-white">
              4 Kali
            </p>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white dark:bg-zinc-800 rounded-3xl p-8 border border-slate-200 dark:border-zinc-700">
          <h2 className="text-xl font-black text-slate-800 dark:text-white mb-6">
            Pencapaian
          </h2>
          <div className="space-y-6">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                className={`flex items-center gap-4 ${item.locked ? "opacity-50 grayscale" : ""}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: item.locked ? 0.5 : 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Icon Badge */}
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 relative ${
                    item.locked
                      ? "bg-slate-100 dark:bg-zinc-700"
                      : "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600"
                  }`}
                >
                  <span className="material-icons-round text-4xl">
                    {item.icon}
                  </span>
                  {!item.locked && (
                    <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full border-2 border-white dark:border-zinc-800">
                      Lvl {item.level}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-slate-800 dark:text-white">
                      {item.title}
                    </h3>
                    <span className="text-xs font-bold text-slate-400">
                      {item.progress}/{item.total}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                    {item.desc}
                  </p>

                  {/* Progress Bar */}
                  <div className="h-3 w-full bg-slate-100 dark:bg-zinc-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                      style={{
                        width: `${(item.progress / item.total) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
