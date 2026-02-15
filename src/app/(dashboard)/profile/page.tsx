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
      locked: false,
    },
    {
      title: "Ahli Canting",
      desc: "Koleksi 5 Motif Batik",
      icon: "brush",
      locked: false,
      highlighted: true,
    },
    {
      title: "Penjelajah Kraton",
      desc: "Kunjungi 3 Situs Budaya",
      icon: "temple_hindu",
      locked: true,
    },
    {
      title: "Pujangga Muda",
      desc: "Baca 20 Narasi Sejarah",
      icon: "menu_book",
      locked: false,
    },
  ];

  const collection = [
    {
      id: "001",
      name: "Gatotkaca",
      type: "LEGENDARY",
      desc: "Ksatria gagah berani yang memiliki otot kawat balung wesi.",
      date: "12 Okt 2023",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwi_d3Ax4dL32DwiSXTThiaKgEU40Xfr2fTCt7TulFCc-T5LlOGC5gy4BllFf5V35MfZ7rowRHfC0EoUBBTL_3wOy4CNjnE5Ahs2W_GNhO6WJUYv6WLE_XDzsbDhEx5nr0YTCNMtTNGlZ4fjP_gb9yEa8yq_NBLiW-WQuJ-YvbbB0cJxlFqRD5Nf28iGN1158JiobLjShi_9T7APzQgaHvRWrM_nVqjllnRU3irQGjlSUxHf6iUCoAfVCI0_TuiBIq8KSbF7whdmgC",
    },
    {
      id: "007",
      name: "Arjuna",
      type: "RARE",
      desc: "Putra ketiga Pandawa yang dikenal karena ketampanannya.",
      date: "05 Nov 2023",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrW1IkZgm2UwRunTB9rHbOCNfBt1vDC4-QXZSQRi-kSIPyRp4Ln9IXmVgmSryGkDcpqWKg5_hqM_SJ6kadFH-hc8HcZ9j6vj8756m0v5GQ1EjidhkG8sLpwoQPE_-EImTwhpCG-kIGewKhFJnpFMiG4bvjPE_xOyHvnpfXPEp2qXe0OhtxRJ0BbjOox0IcNaSKoPPBH-uHkdGDfdtqO8yp8T4RNR3xdR9wpR2v3vWMvc4CUP7wX1piSQPWMLDS1Q9VpHCidlxRgkfI",
    },
    {
      id: "???",
      name: "Terkunci",
      type: "LOCKED",
      desc: "Scan kode QR di Museum Sonobudoyo untuk membuka.",
      date: "Locked",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKS8V_WzvQY6gdFUoJ6_aLGAIzA5YTd-ufldUhkdgAo55_0HklBkYVgzchUzsyZhqMxAR67XMs2sKOa64ScCn0IDfomlocfq6hWz4ElbplafK_XnMid_CdRVzgTG1nyXyOAtGSfWtYoUV0pIY-0lULMh240_Bo_fyvn13SNW4rDrphJu0sD1byXW9Pfk8bVWT7K8WpBjSXZa_RsuuiedQceJmlUZlzfd9jX3zf7f-IlIuO-DwIL9WRpRblFJ5ZHY20PDKfqVeJl_C4",
      locked: true,
    },
    {
      id: "012",
      name: "Semar",
      type: "COMMON",
      desc: "Tokoh utama Punakawan yang merupakan simbol kearifan.",
      date: "20 Des 2023",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCCTXGptzCKVxYXi0T9TB4mSyHFcNiStzQMreVVrRwPGdUiijYqR2XPOcQI_yffDh7m5AmVCgX1RCZsrkzagC8TzDTrFkATEwqxDa_4lVy51dzQF9DikP_kTmFUIdH_ckWsx4VOCkR6ovf2TwqxxN5m98l2uZHk9WzYrt82st_SsRucjDq2SK4aHKQ03aXYZtcyuoAWmCkXpdOvdwiY-9_vbpW3qnnQN4CDt4eKeKni15VrY1Ofe7QUO0qAM3_RySu3FTIYbE8PVYN",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-soga">
      {/* Sidebar Profile Info */}
      <aside className="w-full lg:w-96 bg-white border-r border-primary/20 p-10 flex flex-col z-20 overflow-y-auto custom-scrollbar">
        <div className="text-center mb-10">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 rounded-[2rem] border-4 border-primary p-1.5 rotate-3 shadow-xl">
              <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-cream">
                <img
                  className="w-full h-full object-cover"
                  alt="User Avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm70Y7dZdvcaJRZj6zJoKlMl6wla0kgbbAGtCnw31VB8JeaXLlgrte59zrZ_PuUdCLv0534NNjc7GOl7wayBdaHoDRqwXwOmzq7QdRMSKo5XDSglePlnqmIhoquz9F-Q80aegdeggnaBks_wHs26YGKEgX6AduItorM91LNIVtIIdb60WiKzNiWPEsV-42SuDApzAMOCC8__WNovUoNMGVeN8mQk2yS69gQMRp5lTagzvd6jMzRYckTMrW-Bl_Pn90rIthww5xthZ4"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-maroon text-primary text-[10px] font-black px-3 py-1.5 rounded-lg border-2 border-white shadow-lg uppercase tracking-widest">
              LVL 12
            </div>
          </div>
          <h2 className="text-2xl font-black text-soga tracking-tight">
            Raden Mas Bimo
          </h2>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mt-1">
            Cultural Guardian
          </p>
        </div>

        <div className="space-y-4 mb-10">
          <div className="bg-soga/5 border border-soga/10 p-5 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                <span className="material-icons-round text-xl">layers</span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-soga/60">
                Total Koleksi
              </span>
            </div>
            <span className="text-lg font-black text-soga">42/150</span>
          </div>
          <div className="bg-soga/5 border border-soga/10 p-5 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                <span className="material-icons-round text-xl">translate</span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-soga/60">
                Kata Terpelajari
              </span>
            </div>
            <span className="text-lg font-black text-soga">128</span>
          </div>
        </div>

        {/* Weekly XP Chart */}
        <div className="mb-10">
          <div className="flex justify-between items-end mb-6">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-soga/40">
              XP MINGGUAN
            </h3>
            <span className="text-[10px] font-black text-primary">
              TOTAL: {xp.toLocaleString()} XP
            </span>
          </div>
          <div className="flex items-end justify-between h-32 gap-2 px-2">
            {[30, 45, 20, 60, 85, 40, 10].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                className={`w-full rounded-t-lg transition-all duration-500 hover:brightness-110 ${h === 85 ? "bg-primary shadow-[0_0_15px_rgba(197,160,40,0.4)]" : "bg-soga/10"}`}
              />
            ))}
          </div>
          <div className="grid grid-cols-7 mt-4 text-[8px] font-black text-soga/30 uppercase text-center tracking-widest">
            <span>Sen</span>
            <span>Sel</span>
            <span>Rab</span>
            <span>Kam</span>
            <span>Jum</span>
            <span>Sab</span>
            <span>Min</span>
          </div>
        </div>

        <button className="mt-auto w-full py-5 bg-soga text-primary rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:bg-opacity-90 transition-all">
          Edit Profil Budaya
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-12 overflow-y-auto custom-scrollbar">
        {/* Top Header & Search */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-8">
          <div>
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">
              KOLEKSI PRIBADI
            </span>
            <h2 className="text-6xl font-black text-white tracking-tighter mt-2">
              Galeri Digital
            </h2>
          </div>
          <div className="relative w-full sm:w-80 group">
            <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors">
              search
            </span>
            <input
              type="text"
              placeholder="Cari Wayang, Batik, Artefak..."
              className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm text-white transition-all shadow-xl"
            />
          </div>
        </header>

        {/* Achievement Ribbon */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-black text-white flex items-center gap-3 tracking-tight uppercase">
              <span className="material-icons-round text-primary text-2xl">
                military_tech
              </span>
              Medali Kehormatan
            </h3>
            <button className="text-[10px] font-black text-primary hover:underline uppercase tracking-widest">
              LIHAT SEMUA
            </button>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6 custom-scrollbar">
            {achievements.map((ach) => (
              <div
                key={ach.title}
                className={`flex-shrink-0 bg-white/5 border-2 p-6 rounded-[2.5rem] flex flex-col items-center w-48 text-center shadow-2xl transition-all ${ach.locked ? "opacity-30 grayscale border-white/5" : ach.highlighted ? "border-primary bg-primary/5" : "border-white/10"}`}
              >
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center mb-5 transition-all ${ach.locked ? "bg-white/10" : ach.highlighted ? "bg-primary text-soga shadow-2xl shadow-primary/30" : "bg-primary/20 text-primary"}`}
                >
                  <span className="material-icons-round text-4xl">
                    {ach.icon}
                  </span>
                </div>
                <span className="text-xs font-black text-white uppercase tracking-tight block mb-2">
                  {ach.title}
                </span>
                <span className="text-[9px] text-white/40 font-bold uppercase tracking-widest leading-relaxed">
                  {ach.desc}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Pokédex-Style Collection Grid */}
        <section>
          <div className="flex items-center gap-10 mb-10 border-b border-white/5 overflow-x-auto">
            {[
              "Wayang Kulit",
              "Motif Batik",
              "Benda Pusaka",
              "Situs Budaya",
            ].map((tab, idx) => (
              <button
                key={tab}
                className={`pb-5 text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all ${idx === 0 ? "border-b-2 border-primary text-primary" : "text-white/30 hover:text-white"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
            {collection.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -10 }}
                className={`group bg-white/5 border rounded-[3rem] overflow-hidden transition-all duration-500 shadow-2xl ${item.locked ? "border-dashed border-white/10 grayscale opacity-40 hover:opacity-60" : "border-white/10 hover:border-primary/50"}`}
              >
                <div
                  className={`relative h-64 p-8 flex items-center justify-center overflow-hidden ${item.locked ? "bg-white/5" : "bg-gradient-to-br from-white/5 to-primary/5"}`}
                >
                  <div className="absolute inset-0 batik-pattern opacity-5 group-hover:scale-110 transition-transform duration-1000"></div>
                  <img
                    className={`h-full object-contain transition-all duration-700 relative z-10 ${item.locked ? "blur-sm" : "group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(197,160,40,0.5)]"}`}
                    alt={item.name}
                    src={item.img}
                  />
                  {item.locked ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-soga/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity p-8 text-center z-20">
                      <div>
                        <span className="material-icons-round text-primary text-4xl mb-4">
                          lock
                        </span>
                        <p className="text-[10px] font-black text-primary mb-3 uppercase tracking-widest">
                          CARA MEMBUKA:
                        </p>
                        <p className="text-xs font-bold text-white leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div
                        className={`absolute top-6 left-6 text-soga text-[8px] px-3 py-1 rounded-md font-black uppercase tracking-widest z-20 ${item.type === "LEGENDARY" ? "bg-primary shadow-lg shadow-primary/40" : item.type === "RARE" ? "bg-maroon text-primary shadow-lg shadow-maroon/40" : "bg-white/20 text-white"}`}
                      >
                        {item.type}
                      </div>
                      <div className="absolute top-6 right-6 text-primary z-20">
                        <span className="material-icons-round text-xl drop-shadow-lg">
                          verified
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl font-black text-white tracking-tight">
                      {item.name}
                    </h4>
                    <span className="text-[10px] font-black text-primary px-3 py-1 bg-primary/10 rounded-lg uppercase tracking-widest">
                      {item.id}
                    </span>
                  </div>
                  <p className="text-xs text-white/40 font-medium mb-8 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-primary/40">
                      <span className="material-icons-round text-sm">
                        schedule
                      </span>
                      <span className="text-[9px] font-black uppercase tracking-widest">
                        {item.date}
                      </span>
                    </div>
                    <button
                      className={`px-6 py-2.5 rounded-xl font-black text-[9px] uppercase tracking-widest transition-all ${item.locked ? "bg-white/5 text-white/20 cursor-not-allowed" : "bg-primary text-soga hover:bg-opacity-90 active:scale-95 shadow-lg shadow-primary/20"}`}
                    >
                      Buka Info
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
