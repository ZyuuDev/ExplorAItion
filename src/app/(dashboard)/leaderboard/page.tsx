"use client";

import { motion } from "framer-motion";
import { useStore } from "@/store/useStore";

export default function LeaderboardPage() {
  const { xp } = useStore();

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 bg-soga min-h-screen">
      <div className="grid grid-cols-12 gap-8">
        {/* Left Sidebar: Profile & Quests */}
        <div className="col-span-12 lg:col-span-3 space-y-6">
          {/* User Rank Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform">
              <span className="material-icons-outlined text-8xl text-maroon">
                military_tech
              </span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
              Status Saat Ini
            </p>
            <h2 className="text-2xl font-black text-maroon mb-4 italic tracking-tight">
              Raden Mas
            </h2>
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-3">
              <div className="bg-primary h-full w-[65%] rounded-full shadow-[0_0_10px_rgba(197,160,40,0.3)]"></div>
            </div>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
              850 XP menuju <span className="text-maroon">Pangeran</span>
            </p>
          </div>

          {/* Daily Quests */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-black text-soga text-sm flex items-center tracking-tight uppercase">
                <span className="material-icons-round mr-2 text-primary">
                  assignment
                </span>
                Misi Harian
              </h3>
              <span className="text-[9px] bg-maroon/10 text-maroon px-2 py-1 rounded font-black uppercase tracking-widest">
                2/3 SELESAI
              </span>
            </div>
            <div className="space-y-5">
              {[
                {
                  title: "Maca Aksara",
                  desc: "Pelajari 5 karakter Aksara Jawa",
                  done: true,
                },
                {
                  title: "Tembang Macapat",
                  desc: "Dengarkan 1 lagu Gamelan penuh",
                  done: true,
                },
                {
                  title: "Wong Jowo",
                  desc: "Check-in di Tugu Jogja via Scan",
                  done: false,
                },
              ].map((misi, i) => (
                <div
                  key={i}
                  className={`flex items-start space-x-3 ${!misi.done && "opacity-50"}`}
                >
                  <div
                    className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center border-2 ${misi.done ? "bg-primary border-primary" : "border-slate-200"}`}
                  >
                    {misi.done && (
                      <span className="material-icons text-white text-[14px] font-bold">
                        check
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-xs font-black text-soga uppercase tracking-tight">
                      {misi.title}
                    </p>
                    <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">
                      {misi.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Central: Pasar Srawung (Feed) */}
        <div className="col-span-12 lg:col-span-6 space-y-8">
          <div className="flex items-end justify-between mb-2">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px]">
                AKTIVITAS KOMUNITAS
              </span>
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter mt-1">
                Pasar Srawung
              </h2>
            </div>
            <div className="flex p-1 bg-white/5 rounded-xl border border-white/10">
              <button className="px-5 py-2 bg-primary text-soga rounded-lg text-[10px] font-black uppercase tracking-widest">
                Terbaru
              </button>
              <button className="px-5 py-2 text-primary/60 rounded-lg text-[10px] font-black uppercase tracking-widest">
                Teman
              </button>
            </div>
          </div>

          {/* Feed Item */}
          <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl group">
            <div className="p-6 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-primary overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="User"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwP0gF33PCiaI0awPS4B3gdGrOaj-et_C1Zgc8CWAqrn7_-rTZmizlzzoAACaXUVHSMFPNm5IoKZ9w3xe3h9PW-EetwnlVCyeUB6o-XyitHFLBa1ydVwszB6ALra5Xs9ccOSravpPia7tv8trrQO7WdJ-Eew2zh4djrjHFZOsj8_MlvJqCm7WRIXasIL5ydrSZoVw5HsPFxRv4AcpodSJLpUzottNGDZ1X0AanUVLUVhbPTZ6CPQPLQb25SdwNIfiLvc33HGFTZRCg"
                  />
                </div>
                <div>
                  <p className="text-sm font-black text-white tracking-tight">
                    Budi Santoso{" "}
                    <span className="text-[10px] font-bold text-primary/60 ml-2 uppercase tracking-widest">
                      menemukan artefak
                    </span>
                  </p>
                  <p className="text-[10px] text-primary/40 font-black uppercase tracking-widest mt-0.5">
                    2 menit yang lalu • Zona Malioboro
                  </p>
                </div>
              </div>
              <span className="material-icons-round text-primary/40 cursor-pointer hover:text-primary transition-colors">
                more_horiz
              </span>
            </div>
            <div className="relative aspect-video overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Keris"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVJPddhiRyne3AQvsMFo4Btj2znz045lHDQG8Oa66zRbbkChw3dO9hmpExCKc03-98ychRSP1C3aB3tX1LXyEHmT_LfPoWDlCobg_EHWC7BleWhpbYfoIBAlAMJgCbb66L8iaRnxvyc6231uQVxfdLwr3uCkjwtZ3274y4ez-jq1bwwESYYqwcPfsxgDQkSJ_vWF2WhxnF_hS3cmgs6WYxvQN39PmYOk2dG0Eh_bfx63r3J0PTpbCI6EJ3-0DNXdRnAd0-VtSq_pha"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-soga/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-primary text-soga px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] shadow-xl">
                  LANGKA: KERIS MAJAPAHIT
                </span>
              </div>
            </div>
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-primary/60 hover:text-primary transition-colors">
                  <span className="material-icons-round text-2xl">
                    favorite_border
                  </span>
                  <span className="text-xs font-black">42</span>
                </button>
                <button className="flex items-center space-x-2 text-primary/60 hover:text-primary transition-colors">
                  <span className="material-icons-round text-2xl">
                    chat_bubble_outline
                  </span>
                  <span className="text-xs font-black">8</span>
                </button>
              </div>
              <button className="bg-primary/10 text-primary px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-primary/20 hover:bg-primary hover:text-soga transition-all">
                WONDERFUL!
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Leaderboard */}
        <div className="col-span-12 lg:col-span-3 space-y-6">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-maroon p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 batik-pattern opacity-10"></div>
              <h3 className="text-primary font-black uppercase tracking-[0.3em] text-sm relative z-10">
                Sultan&apos;s Circle
              </h3>
              <p className="text-white/40 text-[9px] font-black uppercase tracking-widest mt-2 relative z-10">
                Peringkat Mingguan
              </p>
            </div>
            <div className="p-3 space-y-2 text-soga">
              {[
                {
                  rank: 1,
                  name: "Dimas_Jogja",
                  xp: "12.4k",
                  title: "Sultan",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAKWlmvZCnfcpVDRI--ID_Iu7ysewNwDO5Sl3W3quHtsuCj698xD48Vk15bIcWQ4UNgtuiaJU8utYIzUGKRndfr-6srp2ZbKJcDZEqNjy9LHx035aQeuUMqCo0Ktl92ISaqcSMR9AwvDSrtzAwVObLtJqaEvIRPNd97gS8Q_9ZipRU3a0XvUVzCHgemD-ifLVl9a1THz6nn3x-11mScw_wdrNWW_kEGyZEPzAh01hzEFVi4aHj1Fppc22jXyEHiWzYKfDTiKIw4u_Z",
                  isTop: true,
                },
                {
                  rank: 2,
                  name: "Aisyaaa",
                  xp: "10.1k",
                  title: "Pangeran",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAHjm-GgbwhtR5LbN1QSO0qY_ftURSiSco1PSHURzYiSY_WEBJiPA9cvCFjrJcK2U1ANaZ6AaCTU1Qpw0KQ7Us9XmuwkfZvov3MPJJ6Kj2ZgN9cCFf-w7liYV6awUhEjBA-pFFQclpZMXlTWUNFJr643fgi272LEgb92cChvo2DAI5QY_WtbUE9C5VjLy_bracnWQ4k28wujIURdZ-UKqzc5bnayklwP-FZHanIqoqLMxww-2Tr7OwOQ5rBRqqEmiDhzQ0eZHJ2adL",
                },
              ].map((user) => (
                <div
                  key={user.rank}
                  className={`flex items-center p-3 rounded-xl transition-all ${user.isTop ? "bg-primary/10 border border-primary/20 shadow-sm" : "hover:bg-slate-50"}`}
                >
                  <div
                    className={`w-8 font-black text-xl ${user.isTop ? "text-primary" : "text-slate-200"}`}
                  >
                    {user.rank}
                  </div>
                  <div className="relative mr-4">
                    <img
                      className={`w-10 h-10 rounded-full border-2 ${user.isTop ? "border-primary" : "border-slate-100"}`}
                      src={user.img}
                      alt={user.name}
                    />
                    {user.isTop && (
                      <span className="absolute -top-2 -right-1 material-icons text-primary text-lg">
                        workspace_premium
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-black tracking-tight">
                      {user.name}
                    </p>
                    <p className="text-[9px] font-black text-primary uppercase tracking-widest">
                      {user.title}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-maroon">{user.xp}</p>
                    <p className="text-[8px] text-slate-400 font-bold uppercase">
                      XP
                    </p>
                  </div>
                </div>
              ))}

              {/* Divider */}
              <div className="flex justify-center py-2 opacity-20">
                <span className="material-icons text-xs">more_vert</span>
              </div>

              {/* My Rank */}
              <div className="flex items-center p-3 rounded-xl bg-soga text-white shadow-xl shadow-soga/20 border-l-4 border-primary">
                <div className="w-8 font-black text-primary text-xl">42</div>
                <img
                  className="w-10 h-10 rounded-full mr-4 border-2 border-primary"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa6bHPr67Eqd0C1B_YCbO6reME6eikTNmX4ChXHm66i-RY074gw2T-s0n4GBoC3DQIkEK9ghPM4AIcAHPVcCsjnwze45_auP12KZQVi75yDah3wY05T2aXHHpHABNp1LCoVegmxHbpmu8CReqSKbPZnP9IOFyy0JtYNZodCQnLcJH4aEweqCo-qdjui8y51C84QNV9NGvzm3pT-UB8KXA_YxgF1ajXkOH0MMrTCTxVMezCUF2i1OQU0X9DVjfcFzRk0gESgyG5C0il"
                  alt="Me"
                />
                <div className="flex-1">
                  <p className="text-xs font-black text-primary">
                    Setyo (Kamu)
                  </p>
                  <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">
                    Raden Mas
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-primary">
                    {(xp / 1000).toFixed(1)}k
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-slate-50 text-center border-t border-slate-100 mt-2">
              <button className="text-[10px] font-black text-maroon uppercase tracking-[0.2em] hover:text-primary transition-colors">
                Tampilkan Papan Penuh
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
