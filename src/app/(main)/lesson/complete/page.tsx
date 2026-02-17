"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function LessonCompletePage() {
  const { width, height } = useWindowSize();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center justify-center p-6 text-center font-display relative overflow-hidden">
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={500}
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="max-w-md w-full bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 border-4 border-primary/20 relative z-10"
      >
        <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/40">
          <span className="material-icons-round text-5xl">emoji_events</span>
        </div>

        <h1 className="text-3xl font-black text-deep-maroon dark:text-primary mb-2">
          Luar Biasa!
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium">
          Kamu telah menyelesaikan pelajaran pertama tentang Batik.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-xl">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Skor
            </p>
            <p className="text-xl font-black text-green-600">100%</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-xl">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Waktu
            </p>
            <p className="text-xl font-black text-blue-500">00:10</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-xl">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              XP
            </p>
            <p className="text-xl font-black text-yellow-500">+50</p>
          </div>
        </div>

        <Link href="/academy">
          <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 uppercase tracking-widest text-sm">
            Selesai
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
