"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function LessonPage() {
  const [progress] = useState(65);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelect = (option: string) => {
    if (option === "Kawung") {
      setIsCompleted(true);
      setShowFeedback(true);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-100 min-h-screen flex flex-col overflow-hidden">
      {/* Header & Progress Section */}
      <header className="w-full px-6 py-8 max-w-5xl mx-auto flex items-center gap-6">
        <Link
          href="/academy"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm border border-primary/20 hover:bg-primary/10 transition-colors"
        >
          <span className="material-icons-round text-primary">close</span>
        </Link>
        <div className="flex-grow relative h-4 bg-primary/20 dark:bg-primary/10 rounded-full">
          {/* Progress Fill */}
          <div
            className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
          {/* Keris Indicator */}
          <div
            className="absolute top-1/2 -translate-y-1/2 keris-shadow transition-all duration-500"
            style={{ left: `${progress}%` }}
          >
            <div className="relative -ml-4">
              <span className="material-icons-round text-primary text-4xl rotate-[45deg]">
                workspace_premium
              </span>
              {/* Miniature Keris representation */}
              <div className="absolute -top-1 left-2 w-1 h-8 bg-primary rounded-full rotate-[-15deg]"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-primary/20">
          <span className="material-icons-round text-primary text-xl">
            stars
          </span>
          <span className="font-bold text-primary">1,250</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 pb-32">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Cocokkan Motif Batik!</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Tarik nama motif ke gambar yang tepat, Lur!
          </p>
        </div>

        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Motif Images (Left) */}
          <div className="space-y-6">
            <div className="group relative bg-white dark:bg-slate-800 p-3 rounded-xl shadow-md border-2 border-transparent hover:border-primary transition-all cursor-pointer">
              <img
                alt="Batik Parang Pattern"
                className="w-full h-40 object-cover rounded-lg mb-2"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMZdC4Rt0VF5bk_NecY2JWPyMwrlsgHNIqOlWr-inFCbju4jXteMVsVaBVmFq_oRPWeb6R5dsy9TzOTV7ffay_1NZ1VQAZF6gYp9AsxoMYX7IpNxUZEcxcCkVbSrjCNsX4u-uHHGRjhmh8siiS9naiM3aHDk_BhqIq37u7rnIrMv7vLbSE7kesyI3BgrNhOz3jGvUxV-rRvQqrOjajqHOErdAf7eajKQXA_hJIDkrltNm_rzq_6TQOvcV2R-onLtXrVQmu21BjT2VY"
              />
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-white flex items-center justify-center rounded-full border-4 border-background-light dark:border-background-dark">
                <span className="material-icons-round text-sm">
                  priority_high
                </span>
              </div>
            </div>
            <div
              className={`group relative bg-white dark:bg-slate-800 p-3 rounded-xl shadow-md border-2 transition-all cursor-pointer ${
                isCompleted ? "border-green-600" : "border-transparent"
              }`}
              onClick={() => handleSelect("Kawung")}
            >
              <img
                alt="Batik Kawung Pattern"
                className="w-full h-40 object-cover rounded-lg mb-2"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByxpaMF48Y0RQxfMNcFZuNTI_fTOMTNb4vmMMzA_VpvREJopzrS--vtD779nH2AHq--0FxKVoRH5znEw-O5X0I1z2pAVL5Nylg87d5yQ813DIBM3v8pWzEngsJRYqkYAeJJN_yMLzeq9o8qEkPsEtXzT98O0BmqsL2sjP0C27lFgcAlrhnHhB4T0rn9MS835jdMF5GkZzFleb0Coxv1JKaapP5hzx6bFGlYdIVC06_pE1FTo_CoxdR5N78FbZbgWV9VhUtNFoHhGzO"
              />
              {isCompleted && (
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-green-600 text-white flex items-center justify-center rounded-full border-4 border-background-light dark:border-background-dark">
                  <span className="material-icons-round text-sm">check</span>
                </div>
              )}
            </div>
          </div>

          {/* Name Drop Slots (Right) */}
          <div className="space-y-6">
            {/* Empty Slot / Target */}
            {!isCompleted ? (
              <div
                className="h-44 flex flex-col items-center justify-center border-2 border-dashed border-primary/40 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer"
                onClick={() => handleSelect("Kawung placeholder")} // Simplified for clicking correct option directly, but keeping structure
              >
                <span className="material-icons-round text-primary/40 text-4xl mb-2">
                  move_to_inbox
                </span>
                <p className="text-sm text-primary/60 font-medium">
                  Tarik nama ke sini (atau klik jawaban benar)
                </p>
              </div>
            ) : (
              <div className="h-44 flex items-center justify-center bg-white dark:bg-slate-800 border-2 border-primary rounded-xl shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 batik-pattern-bg"></div>
                <div className="relative z-10 text-center">
                  <span className="block text-xs uppercase tracking-widest text-primary font-bold mb-1">
                    Terpilih
                  </span>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                    KAWUNG
                  </h3>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Draggable Options (Floating) */}
        <div className="mt-12 flex gap-4">
          <div className="px-8 py-4 bg-white dark:bg-slate-800 rounded-xl shadow-md border-2 border-slate-200 dark:border-slate-700 cursor-grab active:cursor-grabbing hover:scale-105 transition-transform font-bold text-lg">
            Parang
          </div>
          {!isCompleted && (
            <div
              className="px-8 py-4 bg-white dark:bg-slate-800 rounded-xl shadow-md border-2 border-slate-200 dark:border-slate-700 cursor-grab active:cursor-grabbing hover:scale-105 transition-transform font-bold text-lg"
              onClick={() => handleSelect("Kawung")}
            >
              Kawung
            </div>
          )}
          <div className="px-8 py-4 bg-white dark:bg-slate-800 rounded-xl shadow-md border-2 border-slate-200 dark:border-slate-700 cursor-grab active:cursor-grabbing hover:scale-105 transition-transform font-bold text-lg">
            Sekar Jagad
          </div>
        </div>
      </main>

      {/* Feedback Pop-up Footer */}
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            className="fixed bottom-0 left-0 w-full bg-green-100 dark:bg-green-600/20 border-t-4 border-green-600 p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50"
          >
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                {/* Mascot */}
                <div className="relative w-24 h-24 flex-shrink-0">
                  <div className="absolute inset-0 bg-green-600/10 rounded-full"></div>
                  <img
                    alt="NJOGJANI Mascot"
                    className="w-full h-full object-contain relative z-10 scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR6Y00JuKtDJKHjvHMOjNHZ4vyNSRivtDFSOkuPY5KrGeBTmV70ILfgS1UeRbUvcIXuQQcFvl3NHLsaCSNLH5KokGnAjcuShFZehE8B5lryI-IS93KVGG1h_9HY3wXQg__i8V_Jmw9JocfOoTvwDJ8xjyYVF5dzhb1NzXnEiZETIZD-tqSAXgOpsJVZtFUCYqqVpLrc9sIXeCtZQciXB9hpDC-TVB7c2ELWnO__hNVE2hTVyDPTPP1Wtj4gQiFQS7ZrUZf6eyJHOl7"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-green-600 dark:text-green-100">
                    Benar/Ciamik!
                  </h2>
                  <p className="text-green-600/80 dark:text-green-100/80 font-medium text-lg">
                    Pinter banget, Lur! Motif Kawung melambangkan kesucian.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowFeedback(false)}
                className="px-10 py-4 bg-green-600 text-white font-bold rounded-xl shadow-lg hover:bg-green-600/90 transition-all hover:scale-105 flex items-center gap-2 uppercase tracking-wide w-full md:w-auto justify-center"
              >
                Lanjut
                <span className="material-icons-round">arrow_forward</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border-8 border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border-[12px] border-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full batik-pattern-bg"></div>
      </div>
    </div>
  );
}
