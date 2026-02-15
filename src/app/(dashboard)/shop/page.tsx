"use client";

import { motion } from "framer-motion";
import { useStore } from "@/store/useStore";

export default function ShopPage() {
  const { xp } = useStore(); // Using XP as 'Gems' placeholder for now

  const powerups = [
    {
      id: 1,
      title: "Pembeku Streak",
      desc: "Lindungi streak kamu satu hari penuh jika lupa latihan.",
      price: 200,
      icon: "ac_unit",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Taruhan Ganda",
      desc: "Pertahankan streak 7 hari untuk menggandakan 50 keping.",
      price: 50,
      icon: "all_inclusive",
      color: "bg-purple-500",
    },
    {
      id: 3,
      title: "Pemulih Hati",
      desc: "Kembalikan kesehatanmu secara instan saat pelajaran.",
      price: 150,
      icon: "favorite",
      color: "bg-red-500",
    },
  ];

  const costumes = [
    {
      id: 1,
      title: "Batik Modern",
      desc: "Tampil gaya dengan kemeja batik kontemporer.",
      price: 1000,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm70Y7dZdvcaJRZj6zJoKlMl6wla0kgbbAGtCnw31VB8JeaXLlgrte59zrZ_PuUdCLv0534NNjc7GOl7wayBdaHoDRqwXwOmzq7QdRMSKo5XDSglePlnqmIhoquz9F-Q80aegdeggnaBks_wHs26YGKEgX6AduItorM91LNIVtIIdb60WiKzNiWPEsV-42SuDApzAMOCC8__WNovUoNMGVeN8mQk2yS69gQMRp5lTagzvd6jMzRYckTMrW-Bl_Pn90rIthww5xthZ4", // Avatar 1
    },
    {
      id: 2,
      title: "Busana Keraton",
      desc: "Busana adat lengkap seperti abdi dalem.",
      price: 2500,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwi_d3Ax4dL32DwiSXTThiaKgEU40Xfr2fTCt7TulFCc-T5LlOGC5gy4BllFf5V35MfZ7rowRHfC0EoUBBTL_3wOy4CNjnE5Ahs2W_GNhO6WJUYv6WLE_XDzsbDhEx5nr0YTCNMtTNGlZ4fjP_gb9yEa8yq_NBLiW-WQuJ-YvbbB0cJxlFqRD5Nf28iGN1158JiobLjShi_9T7APzQgaHvRWrM_nVqjllnRU3irQGjlSUxHf6iUCoAfVCI0_TuiBIq8KSbF7whdmgC", // Avatar 2
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-900 pt-8 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header with Balance */}
        <div className="text-center sticky top-4 z-30">
          <div className="inline-flex items-center gap-3 bg-white dark:bg-zinc-800 px-8 py-3 rounded-full shadow-xl border border-slate-100 dark:border-zinc-700">
            <span className="material-icons-round text-yellow-400 text-3xl drop-shadow-sm">
              monetization_on
            </span>
            <div className="text-left">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                Saldo Kamu
              </p>
              <p className="text-xl font-black text-slate-800 dark:text-white leading-none mt-1">
                {xp.toLocaleString("id-ID")}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
            Warung Benda Ajaib
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Tukarkan keping emasmu dengan kekuatan tambahan dan gaya baru!
          </p>
        </div>

        {/* Power-ups Section */}
        <section>
          <h2 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight mb-6 border-b border-slate-200 dark:border-zinc-700 pb-4">
            Power-ups
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {powerups.map((item, idx) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-zinc-800 p-6 rounded-2xl border border-slate-100 dark:border-zinc-700 shadow-sm flex flex-col items-center text-center hover:border-primary/50 transition-colors"
              >
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg mb-4 ${item.color}`}
                >
                  <span className="material-icons-round">{item.icon}</span>
                </div>
                <h3 className="font-black text-lg text-slate-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-1">
                  {item.desc}
                </p>

                <button className="w-full py-3 bg-slate-100 dark:bg-zinc-700 text-slate-600 dark:text-slate-300 font-black rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-400 hover:text-yellow-900 transition-colors group">
                  <span className="material-icons-round text-yellow-500 group-hover:text-yellow-900">
                    monetization_on
                  </span>
                  {item.price}
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Costumes Section */}
        <section>
          <h2 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight mb-6 border-b border-slate-200 dark:border-zinc-700 pb-4">
            Busana & Gaya
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {costumes.map((item) => (
              <motion.div
                key={item.id}
                className="bg-white dark:bg-zinc-800 p-6 rounded-2xl border border-slate-100 dark:border-zinc-700 shadow-sm flex items-center gap-6 group hover:border-primary/50 transition-all"
              >
                <div className="w-24 h-24 rounded-full border-4 border-slate-100 dark:border-zinc-700 overflow-hidden group-hover:border-primary transition-colors">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-lg text-slate-800 dark:text-white mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    {item.desc}
                  </p>

                  <button className="px-6 py-2 bg-slate-100 dark:bg-zinc-700 text-slate-600 dark:text-slate-300 font-black rounded-xl flex items-center gap-2 hover:bg-yellow-400 hover:text-yellow-900 transition-colors text-sm">
                    <span className="material-icons-round text-yellow-500">
                      monetization_on
                    </span>
                    {item.price}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
