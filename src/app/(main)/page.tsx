"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-soga dark:text-cream font-display">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 batik-pattern opacity-50 -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">
              <span className="material-icons text-sm">auto_awesome</span>
              <span className="text-xs font-bold uppercase tracking-wider">
                The Future of Heritage
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold text-maroon dark:text-primary leading-[1.1]">
              Jelajahi Warisan, <br />
              <span className="text-soga dark:text-cream">
                Hidupkan Budaya!
              </span>
            </h1>
            <p className="text-lg text-soga/80 dark:text-cream/80 max-w-lg leading-relaxed">
              Eksplorasi warisan luhur Yogyakarta dengan teknologi terkini. Dari
              pemindaian AI hingga akademi berbasis game yang seru untuk
              Muda Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/academy"
                className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg flex items-center justify-center space-x-3 shadow-xl shadow-primary/30 hover:-translate-y-1 transition-all"
              >
                <span className="material-icons">rocket_launch</span>
                <span>Mulai Petualangan</span>
              </Link>
              <Link
                href="/scan"
                className="px-8 py-4 bg-white dark:bg-zinc-800 border-2 border-primary/20 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 hover:bg-cream dark:hover:bg-zinc-700 transition-all"
              >
                <span className="material-icons">qr_code_scanner</span>
                <span>Scan Sekarang</span>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-maroon/10 rounded-full blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 aspect-[4/5]">
              <img
                className="w-full h-full object-cover"
                alt="Traditional Javanese dancer in vibrant costume with modern lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8BzzDJKqKz4HE4ZQWxoEM9H4tmzTSNNjca5yLk0iO_0kEhqyQWKfeBL8bMj7xPkaE19x_2n3pkexz7_iBpJML2jlbjLZX7wQyo28miwOvE-cVPtpRdst1YEhWA_q9uabnnC4yMnRPCW9Tv0kwMZfeEBWneALnr8zpPXAWCNQQOHqA6pQFHnS_KoBD2cdkqwMS-YUHulE5ggRUsxfmFuUKd5DcGzgW5OxIl6XB6d5rEmj0c1wxjkwaRry3v6bo86s-EEWq0Awqab1e"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm font-medium opacity-80 uppercase tracking-widest">
                  Featured Art
                </p>
                <h3 className="text-2xl font-bold">Tari Wayang Orang</h3>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem & Mission Section */}
      <section className="py-24 bg-cream dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-maroon dark:text-primary mb-4">
              Mengapa NJOGJANI?
            </h2>
            <p className="text-soga dark:text-cream/70 text-lg">
              Budaya bukan sekadar masa lalu, tapi akar untuk masa depan. Kami
              menjembatani tradisi dengan teknologi digital.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Infographic Item 1 */}
            <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-sm border border-primary/10 hover:border-primary/40 transition-all">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <span className="material-icons text-primary text-3xl">
                  history_toggle_off
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">Tantangan Digital</h3>
              <p className="text-soga/70 dark:text-cream/60 leading-relaxed">
                Kurangnya interaksi fisik dengan museum dan artefak membuat
                generasi muda merasa jauh dari akarnya.
              </p>
            </div>
            {/* Infographic Item 2 */}
            <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-sm border border-primary/10 hover:border-primary/40 transition-all">
              <div className="w-16 h-16 bg-maroon/20 rounded-xl flex items-center justify-center mb-6">
                <span className="material-icons text-maroon text-3xl">
                  psychology
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">Misi Edukasi</h3>
              <p className="text-soga/70 dark:text-cream/60 leading-relaxed">
                Mengubah cara belajar budaya dari sekadar membaca buku menjadi
                petualangan visual yang nyata.
              </p>
            </div>
            {/* Infographic Item 3 */}
            <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-sm border border-primary/10 hover:border-primary/40 transition-all">
              <div className="w-16 h-16 bg-soga/20 rounded-xl flex items-center justify-center mb-6">
                <span className="material-icons text-soga text-3xl">stars</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Visi Masa Depan</h3>
              <p className="text-soga/70 dark:text-cream/60 leading-relaxed">
                Mencetak "Cultural Guardians" yang bangga dan paham akan
                filosofi setiap lekuk budaya Yogyakarta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">
              Fitur Unggulan
            </span>
            <h2 className="text-4xl font-extrabold text-maroon dark:text-primary mt-2">
              Teknologi Bertemu Tradisi
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            {/* Scan AI Card */}
            <div className="md:col-span-7 group relative bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden border border-primary/10 shadow-xl flex flex-col">
              <div className="p-10 flex-1">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="material-icons text-primary">
                    filter_center_focus
                  </span>
                  <span className="font-bold text-primary">SCAN BUDAYA AI</span>
                </div>
                <h3 className="text-3xl font-extrabold mb-4">
                  Identifikasi Artefak dalam Sekali Klik
                </h3>
                <p className="text-soga/70 dark:text-cream/60 max-w-md">
                  Arahkan kameramu ke batik, bangunan bersejarah, atau kuliner
                  khas Jogja. AI kami akan menceritakan sejarah dan filosofinya
                  seketika.
                </p>
              </div>
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Modern smartphone scanning a traditional batik pattern cloth"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs58AEf72jfWA2NvlTBMdWPRK7mv2QGYroAoMsKEcTQfQswgpGc7yeqmJkUDzLDDrDYqhczcFGt0qvUiKxFONa07xb4hcrJJqfOWM_yqMmItjsMla22v1bn6N7QyLBgeahay16NfqI8pJvYfbhpt8xbwdj_T95LGItjdDuemA4Q6Zu2YQTHAq1TuBpCjfaI3YfafP9-EFbra6AFdLrdlaVffKFaMssIAvfdP9TeFxC6bqt-AMFlk99rBDxYwJH0yOsIW1gs52F9bce"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
            {/* Academy Card */}
            <div className="md:col-span-5 flex flex-col gap-6">
              <div className="flex-1 bg-maroon rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 mb-4 text-primary">
                    <span className="material-icons">workspace_premium</span>
                    <span className="font-bold">NJOGJANI ACADEMY</span>
                  </div>
                  <h3 className="text-3xl font-extrabold mb-4">
                    Gamified Learning
                  </h3>
                  <p className="opacity-80 mb-6">
                    Selesaikan misi, kumpulkan poin, dan raih badge "The King of
                    Heritage".
                  </p>
                  {/* Mini Progress Preview */}
                  <div className="space-y-4 bg-black/20 p-4 rounded-xl">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-bold">
                        Misi: Belajar Membatik Parang
                      </span>
                      <span className="text-xs font-bold text-primary">
                        80%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-white/20 rounded-full">
                      <div className="w-[80%] h-full bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-10">
                  <span className="material-icons text-[200px]">
                    military_tech
                  </span>
                </div>
              </div>
              <div className="h-48 bg-primary rounded-3xl p-8 flex items-center justify-between group cursor-pointer hover:bg-primary/90 transition-all">
                <div className="text-white">
                  <h4 className="text-2xl font-bold">Komunitas</h4>
                  <p className="opacity-80">
                    Bergabung dengan 10k+ pelestari muda
                  </p>
                </div>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary group-hover:translate-x-2 transition-transform">
                  <span className="material-icons">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Teaser */}
      <section className="py-24 bg-white dark:bg-zinc-900 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
              <img
                className="w-full h-full object-cover"
                alt="Satellite map of Yogyakarta city"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzYdLBxXjHt2raqJZEETUYkHOYVfFLUV_E5JetQd8xR2IQS0uvW8Bk1T3cH0EcNjEKsaN7VhQevYW7KVfmnVefrWb121Ry9Pc-7d5IyMSMTwu2mR0-KB3mGwrQi9DVLLrFG_LDnL5-V0-KczZlajk9v0dnIYwdtlC3cKYhz99uE3Xsr9gJNRjRFsrLsWo2E-X8DS5UFJrmRnYqHWiaPsPViAdSPzRaJRL0D8a_DpglBxmdsQZtWyQGHkz0XEtu8rUK55rhtPOwROZp"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl font-extrabold text-maroon dark:text-primary leading-tight">
              Jelajahi Sudut-Sudut Tersembunyi Jogja
            </h2>
            <p className="text-lg text-soga/80 dark:text-cream/80">
              Bukan sekadar peta biasa. Temukan "Hidden Gems" budaya, lokasi
              syuting film legendaris, hingga pengrajin tradisional yang belum
              pernah kamu temui sebelumnya.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-soga dark:text-cream/90">
                <span className="material-icons text-primary">location_on</span>
                <span>50+ Museum & Galeri Digital</span>
              </li>
              <li className="flex items-center space-x-3 text-soga dark:text-cream/90">
                <span className="material-icons text-primary">explore</span>
                <span>Rute Wisata Sejarah Personal</span>
              </li>
              <li className="flex items-center space-x-3 text-soga dark:text-cream/90">
                <span className="material-icons text-primary">event</span>
                <span>Kalender Event Budaya Eksklusif</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
