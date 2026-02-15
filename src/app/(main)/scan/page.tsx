"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useStore } from "@/store/useStore";

export default function ScanPage() {
  const { xp, level, setLevel } = useStore();
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-soga-brown min-h-screen pt-20">
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero & Breadcrumb */}
        <div className="mb-8">
          <nav className="flex text-xs font-medium gap-2 mb-2 opacity-60 uppercase tracking-widest text-soga-brown dark:text-cream">
            <Link href="/" className="hover:text-primary transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-primary">Scanner AI</span>
          </nav>
          <h2 className="text-3xl font-extrabold text-deep-maroon dark:text-primary">
            Arahkan Kamera, Temukan Cerita.
          </h2>
          <p className="text-soga-brown/70 dark:text-cream/70 max-w-2xl">
            Mengenali Wayang, Batik, dan Candi Yogyakarta dengan teknologi
            kecerdasan buatan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Scanner Area (Left/Center) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl aspect-video border-4 border-primary/30 group">
              {/* Placeholder for Camera Feed */}
              <img
                className="w-full h-full object-cover opacity-60"
                alt="Traditional Wayang Kulit puppet Gatotkaca"
                src="/gatotkaca.jpg"
              />

              {/* Scan Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute top-10 left-10 w-24 h-24 border-t-4 border-l-4 border-primary rounded-tl-xl opacity-80"></div>
                <div className="absolute top-10 right-10 w-24 h-24 border-t-4 border-r-4 border-primary rounded-tr-xl opacity-80"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 border-b-4 border-l-4 border-primary rounded-bl-xl opacity-80"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 border-b-4 border-r-4 border-primary rounded-br-xl opacity-80"></div>

                {/* Scanning Line */}
                <motion.div
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_15px_rgba(212,175,53,0.8)]"
                />

                {/* AI Detection Box */}
                <div className="w-64 h-80 border-2 border-white/50 border-dashed rounded-lg relative">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap tracking-wider">
                    MENGANALISA OBJEK...
                  </div>
                </div>
              </div>

              {/* Scan HUD */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 text-white">
                  <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest">
                    Kualitas Sinyal AI
                  </p>
                  <div className="flex gap-1 mt-1">
                    <div className="h-4 w-1 bg-primary rounded-full"></div>
                    <div className="h-4 w-1 bg-primary rounded-full"></div>
                    <div className="h-4 w-1 bg-primary rounded-full"></div>
                    <div className="h-4 w-1 bg-white/30 rounded-full"></div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg transition-transform active:scale-95">
                    <span className="material-icons-round text-3xl">
                      photo_camera
                    </span>
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-4 rounded-full border border-white/30 transition-transform active:scale-95">
                    <span className="material-icons-round text-2xl">
                      file_upload
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Control Center */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="flex items-center justify-between p-4 bg-warm-cream dark:bg-zinc-800 border-2 border-primary/20 rounded-xl hover:border-primary transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-icons-round">auto_fix_high</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-soga-brown dark:text-cream">
                      Mode Otomatis
                    </h4>
                    <p className="text-xs text-soga-brown/60 dark:text-cream/60">
                      Deteksi objek secara real-time
                    </p>
                  </div>
                </div>
                <span className="material-icons-round text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  check_circle
                </span>
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center justify-between p-4 bg-warm-cream dark:bg-zinc-800 border-2 border-primary rounded-xl transition-all shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white">
                    <span className="material-icons-round">layers</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-soga-brown dark:text-cream">
                      Pilih Level:{" "}
                      <span className="text-deep-maroon dark:text-primary">
                        {level === 1 ? "Pujangga" : "Dalang"}
                      </span>
                    </h4>
                    <p className="text-xs text-soga-brown/60 dark:text-cream/60">
                      {level === 1
                        ? "Fokus Teks & Filosofi"
                        : "Audio & Visual Interaktif"}
                    </p>
                  </div>
                </div>
                <span className="material-icons-round text-primary">
                  expand_more
                </span>
              </button>
            </div>
          </div>

          {/* Discovery Panel (Right Sidebar) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-warm-cream dark:bg-zinc-800 border border-primary/20 rounded-xl overflow-hidden shadow-sm">
              <div className="h-32 bg-primary/10 relative">
                <img
                  className="w-full h-full object-cover opacity-30"
                  alt="Pattern"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8E0ilMIfV5mxfsJpjzXLEv6upeIpEukEo6x4NwKT1FHdBlHLteJlpjkJbkp6LnknMcbJZ1WP3hxJWw__vjRxN6FA3129r0qKn3gYEgsYeNEQLvc8Fhc7uvDsllVQR2BYTq52pb2ld1xHYQ0ekAE1XdYwBn7vX0LjwizmD1PSD2mI8SL5v5qiQHyRe1egK_gbiFbUsdvjSVPjcplMKQEXwVGMTwAV2osb9fGVJkTmR6M_GjNS-yeD1IDN7tk6ekdHuw7wvu97TxhFY"
                />
                <div className="absolute bottom-4 left-4 bg-deep-maroon text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  Hasil Identifikasi
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-deep-maroon dark:text-primary">
                    Gatotkaca
                  </h3>
                  <p className="text-sm font-semibold text-primary">
                    Ksatria Pringgadani
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="material-icons-round text-primary mt-1">
                      history_edu
                    </span>
                    <div>
                      <h5 className="text-sm font-bold text-soga-brown dark:text-cream">
                        Asal Usul
                      </h5>
                      <p className="text-sm text-soga-brown/80 dark:text-cream/80 leading-relaxed">
                        Putra dari Bima dan Arimbi, dikenal dengan julukan
                        &apos;Otot Kawat Tulang Besi&apos;.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-icons-round text-primary mt-1">
                      psychology
                    </span>
                    <div>
                      <h5 className="text-sm font-bold text-soga-brown dark:text-cream">
                        Filosofi
                      </h5>
                      <p className="text-sm text-soga-brown/80 dark:text-cream/80 leading-relaxed">
                        Melambangkan keberanian dan kesetiaan mutlak dalam
                        menjaga kedaulatan negara.
                      </p>
                    </div>
                  </div>
                </div>
                {level === 2 && (
                  <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-bold text-primary uppercase">
                        Narasi Dalang
                      </span>
                      <span className="text-xs font-mono text-soga-brown dark:text-cream/60">
                        01:45
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-105 transition-transform">
                        <span className="material-icons-round">play_arrow</span>
                      </button>
                      <div className="flex-1 h-1.5 bg-soga-brown/10 rounded-full relative">
                        <div className="absolute top-0 left-0 w-1/3 h-full bg-primary rounded-full"></div>
                      </div>
                    </div>
                  </div>
                )}
                <Link href="/wayang/gatotkaca">
                  <button className="w-full mt-6 py-3 bg-deep-maroon text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-deep-maroon/90 transition-colors">
                    <span>Pelajari Lebih Dalam</span>
                    <span className="material-icons-round text-sm">
                      arrow_forward
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-icons-round text-primary">
                  tips_and_updates
                </span>
                <h4 className="font-bold text-soga-brown dark:text-cream">
                  Tahukah Kamu?
                </h4>
              </div>
              <p className="text-sm text-soga-brown/80 dark:text-cream/80 italic leading-relaxed">
                &quot;Dalam Wayang Kulit, posisi tubuh Gatotkaca yang tegak
                menggambarkan kesigapan seorang ksatria udara.&quot;
              </p>
            </div>
          </div>
        </div>
      </main>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-warm-cream dark:bg-zinc-900 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-8 border-b border-primary/10 flex justify-between items-center text-soga-brown dark:text-cream">
                <div>
                  <h3 className="text-2xl font-black text-deep-maroon dark:text-primary">
                    Pilih Kedalaman Ilmu
                  </h3>
                  <p className="text-soga-brown/60 dark:text-cream/60 text-sm">
                    Sesuaikan level informasi yang ingin kamu pelajari.
                  </p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-soga-brown dark:text-cream hover:text-deep-maroon transition-colors"
                >
                  <span className="material-icons-round text-3xl">close</span>
                </button>
              </div>
              <div className="p-8 grid md:grid-cols-2 gap-6">
                <div
                  onClick={() => {
                    setLevel(1);
                    setShowModal(false);
                  }}
                  className={`group cursor-pointer border-2 p-6 rounded-xl transition-all hover:bg-white dark:hover:bg-zinc-800 ${level === 1 ? "border-primary bg-white dark:bg-zinc-800" : "border-primary/20"}`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${level === 1 ? "bg-primary text-white" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"}`}
                  >
                    <span className="material-icons-round text-2xl">
                      menu_book
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-soga-brown dark:text-cream mb-2">
                    Level 1: Pujangga
                  </h4>
                  <p className="text-sm text-soga-brown/70 dark:text-cream/70 leading-relaxed mb-4">
                    Fokus pada sejarah tekstual, nama tokoh, dan filosofi dasar
                    secara mendalam.
                  </p>
                  <div
                    className={`flex items-center gap-2 font-bold text-xs uppercase ${level === 1 ? "text-primary" : "text-primary/60"}`}
                  >
                    {level === 1 ? (
                      <>
                        <span className="material-icons-round text-sm">
                          check_circle
                        </span>
                        <span>Level Aktif</span>
                      </>
                    ) : (
                      <>
                        <span>Pilih Level Ini</span>
                        <span className="material-icons-round text-sm">
                          chevron_right
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <div
                  onClick={() => {
                    setLevel(2);
                    setShowModal(false);
                  }}
                  className={`group cursor-pointer border-2 p-6 rounded-xl transition-all relative ${level === 2 ? "border-primary bg-primary/5 hover:bg-white dark:hover:bg-zinc-800" : "border-primary/20 hover:bg-white dark:hover:bg-zinc-800"}`}
                >
                  <div className="absolute top-4 right-4 bg-deep-maroon text-white text-[10px] font-bold px-2 py-1 rounded">
                    POPULER
                  </div>
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${level === 2 ? "bg-primary text-white" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"}`}
                  >
                    <span className="material-icons-round text-2xl">
                      campaign
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-soga-brown dark:text-cream mb-2">
                    Level 2: Dalang
                  </h4>
                  <p className="text-sm text-soga-brown/70 dark:text-cream/70 leading-relaxed mb-4">
                    Pengalaman multimedia dengan audio narasi, video
                    pertunjukan, dan kuis interaktif.
                  </p>
                  <div
                    className={`flex items-center gap-2 font-bold text-xs uppercase ${level === 2 ? "text-deep-maroon dark:text-primary" : "text-primary/60"}`}
                  >
                    {level === 2 ? (
                      <>
                        <span className="material-icons-round text-sm">
                          check_circle
                        </span>
                        <span>Level Aktif</span>
                      </>
                    ) : (
                      <>
                        <span>Pilih Level Ini</span>
                        <span className="material-icons-round text-sm">
                          chevron_right
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-8 bg-soga-brown/5 dark:bg-black/20 text-center">
                <p className="text-xs text-soga-brown/60 dark:text-cream/40">
                  Kamu bisa mengubah level kapan saja melalui dashboard scanner.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
