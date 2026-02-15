"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function LeaderboardPage() {
  const [activeLeague, setActiveLeague] = useState("Gold");

  const leagues = ["Bronze", "Silver", "Gold", "Platinum", "Diamond"];

  const leaderboardData = [
    {
      rank: 1,
      name: "Dimas_Jogja",
      xp: 12450,
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCAKWlmvZCnfcpVDRI--ID_Iu7ysewNwDO5Sl3W3quHtsuCj698xD48Vk15bIcWQ4UNgtuiaJU8utYIzUGKRndfr-6srp2ZbKJcDZEqNjy9LHx035aQeuUMqCo0Ktl92ISaqcSMR9AwvDSrtzAwVObLtJqaEvIRPNd97gS8Q_9ZipRU3a0XvUVzCHgemD-ifLVl9a1THz6nn3x-11mScw_wdrNWW_kEGyZEPzAh01hzEFVi4aHj1Fppc22jXyEHiWzYKfDTiKIw4u_Z",
      status: "promotion",
    },
    {
      rank: 2,
      name: "Aisyaaa",
      xp: 11200,
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBAHjm-GgbwhtR5LbN1QSO0qY_ftURSiSco1PSHURzYiSY_WEBJiPA9cvCFjrJcK2U1ANaZ6AaCTU1Qpw0KQ7Us9XmuwkfZvov3MPJJ6Kj2ZgN9cCFf-w7liYV6awUhEjBA-pFFQclpZMXlTWUNFJr643fgi272LEgb92cChvo2DAI5QY_WtbUE9C5VjLy_bracnWQ4k28wujIURdZ-UKqzc5bnayklwP-FZHanIqoqLMxww-2Tr7OwOQ5rBRqqEmiDhzQ0eZHJ2adL",
      status: "promotion",
    },
    {
      rank: 3,
      name: "Budi_S",
      xp: 10850,
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBwP0gF33PCiaI0awPS4B3gdGrOaj-et_C1Zgc8CWAqrn7_-rTZmizlzzoAACaXUVHSMFPNm5IoKZ9w3xe3h9PW-EetwnlVCyeUB6o-XyitHFLBa1ydVwszB6ALra5Xs9ccOSravpPia7tv8trrQO7WdJ-Eew2zh4djrjHFZOsj8_MlvJqCm7WRIXasIL5ydrSZoVw5HsPFxRv4AcpodSJLpUzottNGDZ1X0AanUVLUVhbPTZ6CPQPLQb25SdwNIfiLvc33HGFTZRCg",
      status: "promotion",
    },
    {
      rank: 4,
      name: "Raden Mas Bimo (Kamu)",
      xp: 9500,
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBa6bHPr67Eqd0C1B_YCbO6reME6eikTNmX4ChXHm66i-RY074gw2T-s0n4GBoC3DQIkEK9ghPM4AIcAHPVcCsjnwze45_auP12KZQVi75yDah3wY05T2aXHHpHABNp1LCoVegmxHbpmu8CReqSKbPZnP9IOFyy0JtYNZodCQnLcJH4aEweqCo-qdjui8y51C84QNV9NGvzm3pT-UB8KXA_YxgF1ajXkOH0MMrTCTxVMezCUF2i1OQU0X9DVjfcFzRk0gESgyG5C0il",
      status: "neutral",
      isMe: true,
    },
    {
      rank: 5,
      name: "Sari_Official",
      xp: 9200,
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCykEVGQf-tdhmoZjvHSTlWSSjBJFePCbpeIC9HNC33sdeUsVW4Sy51mu_i6TP-Z6XFqPY9yqEvdqTsKOD_Bi_1pwH8AsJeKv6z0TlTHK-_j3jQbfByypD6HbSVc-PSer0DEKa7Z-lMU0k6gwH2tpNL2zIVc98IisyXUCXB3XXANFOCatq9EbWo8jwMfrpMScS7CmACpnLkCcMttCBZG01mRn4lTHOqWPSzuaJqa-lZ4jtht_3VbUGQjNCER2u47uV_45-6kZLMlOhS",
      status: "neutral",
    },
    {
      rank: 6,
      name: "Joko_99",
      xp: 8100,
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB93weiCtm5I2BSmwAngKhStgRPbY1RXhWW3P9KCWstaknh97lNk7urdFbyCPDN0gH4M9wOSyvQcoDrZN8cb02FkxB_6Xt91Tr6vbZT82U1Qsi-LbTn-azWubmLWkjavA2fHlN2sFHLSVLeB1G7fAQb0glPRwkRY2FiUgLBUVAcNRmiFCU-XSAjzpYWcdlGHT0_i_qUSyAh0k_Sh5WjCT8TNleEZEr0IIBSt_rIRdMzZnnn9_Po7MsClvlxColiE1ryCKmudgX9I-TS",
      status: "demotion",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-900 pt-8 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header & League Selector */}
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
            Papan Peringkat
          </h1>

          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
            {leagues.map((league) => (
              <button
                key={league}
                onClick={() => setActiveLeague(league)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all whitespace-nowrap ${
                  activeLeague === league
                    ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                    : "bg-white dark:bg-zinc-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-zinc-700 hover:text-slate-700"
                }`}
              >
                {league}
              </button>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-lg text-xs font-bold uppercase tracking-wider">
            <span className="material-icons-round text-sm">schedule</span>
            Berakhir dalam 2 Hari 14 Jam
          </div>
        </div>

        {/* Podium (Top 3) */}
        <div className="flex items-end justify-center gap-4 md:gap-8 pb-8 border-b border-primary/10">
          {/* 2nd Place */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-4 border-slate-300 relative mb-3">
              <img
                src={leaderboardData[1].avatar}
                alt={leaderboardData[1].name}
                className="w-full h-full rounded-full object-cover"
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-300 text-slate-800 w-6 h-6 rounded-full flex items-center justify-center font-black text-xs">
                2
              </div>
            </div>
            <p className="font-bold text-slate-800 dark:text-white text-sm">
              {leaderboardData[1].name}
            </p>
            <p className="text-xs text-slate-500 font-bold">
              {leaderboardData[1].xp} XP
            </p>
            <div className="h-24 w-16 bg-slate-300/20 rounded-t-lg mt-2 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-slate-300/40 to-transparent"></div>
            </div>
          </div>

          {/* 1st Place */}
          <div className="flex flex-col items-center -mt-8 relative z-10">
            <span className="material-icons-round text-yellow-400 text-4xl mb-2 drop-shadow-md">
              emoji_events
            </span>
            <div className="w-24 h-24 rounded-full border-4 border-yellow-400 relative mb-3 shadow-xl shadow-yellow-400/20">
              <img
                src={leaderboardData[0].avatar}
                alt={leaderboardData[0].name}
                className="w-full h-full rounded-full object-cover"
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 w-8 h-8 rounded-full flex items-center justify-center font-black text-sm border-2 border-white">
                1
              </div>
            </div>
            <p className="font-bold text-slate-800 dark:text-white text-base">
              {leaderboardData[0].name}
            </p>
            <p className="text-sm text-yellow-600 font-bold">
              {leaderboardData[0].xp} XP
            </p>
            <div className="h-32 w-20 bg-yellow-400/20 rounded-t-lg mt-2 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-yellow-400/40 to-transparent"></div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-4 border-orange-300 relative mb-3">
              <img
                src={leaderboardData[2].avatar}
                alt={leaderboardData[2].name}
                className="w-full h-full rounded-full object-cover"
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-orange-300 text-orange-900 w-6 h-6 rounded-full flex items-center justify-center font-black text-xs">
                3
              </div>
            </div>
            <p className="font-bold text-slate-800 dark:text-white text-sm">
              {leaderboardData[2].name}
            </p>
            <p className="text-xs text-slate-500 font-bold">
              {leaderboardData[2].xp} XP
            </p>
            <div className="h-20 w-16 bg-orange-300/20 rounded-t-lg mt-2 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-orange-300/40 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* List Section */}
        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-slate-200 dark:border-zinc-700 overflow-hidden">
          {leaderboardData.slice(3).map((user, index) => (
            <motion.div
              key={user.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center p-4 border-b border-slate-100 dark:border-zinc-700 last:border-0 ${
                user.isMe
                  ? "bg-primary/5 dark:bg-primary/10 border-l-4 border-l-primary"
                  : "hover:bg-slate-50 dark:hover:bg-zinc-700/50"
              }`}
            >
              <div className="w-8 font-black text-slate-400 dark:text-slate-500 text-center mr-4">
                {user.rank}
              </div>

              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover mr-4"
              />

              <div className="flex-1">
                <p
                  className={`font-bold text-sm ${user.isMe ? "text-primary" : "text-slate-700 dark:text-slate-200"}`}
                >
                  {user.name}
                </p>
              </div>

              <div className="text-right mr-6">
                <span className="font-black text-slate-700 dark:text-slate-200 text-sm block">
                  {user.xp} XP
                </span>
              </div>

              <div className="w-6 flex justify-center">
                {user.status === "promotion" && (
                  <span className="material-icons-round text-green-500 text-sm">
                    arrow_upward
                  </span>
                )}
                {user.status === "demotion" && (
                  <span className="material-icons-round text-red-500 text-sm">
                    arrow_downward
                  </span>
                )}
                {user.status === "neutral" && (
                  <span className="material-icons-round text-slate-300 text-xs">
                    remove
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
            Zona Promosi: Peringkat 1-10
          </p>
        </div>
      </div>
    </div>
  );
}
