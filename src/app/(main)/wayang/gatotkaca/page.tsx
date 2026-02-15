"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GatotkacaPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-soga-brown dark:text-cream font-display pb-20 pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex text-xs font-medium gap-2 mb-6 opacity-60 uppercase tracking-widest">
          <Link href="/" className="hover:text-primary transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <Link href="/scan" className="hover:text-primary transition-colors">
            Scanner AI
          </Link>
          <span>/</span>
          <span className="text-primary">Gatotkaca</span>
        </nav>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column: Image & Quick Stats */}
          <div className="col-span-1 md:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20 group"
            >
              <img
                src="/gatotkaca.jpg"
                alt="Wayang Kulit Gatotkaca"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-block bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full mb-2 shadow-lg">
                  SATRIA PRINGGADANI
                </div>
              </div>
            </motion.div>

            {/* Quick Stats Card */}
            <div className="bg-warm-cream dark:bg-zinc-800 p-6 rounded-xl border border-primary/20 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-deep-maroon dark:text-primary border-b border-primary/10 pb-2">
                Identitas Tokoh
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between">
                  <span className="opacity-60">Golongan</span>
                  <span className="font-bold">Ksatria / Rakshasa</span>
                </li>
                <li className="flex justify-between">
                  <span className="opacity-60">Ayah</span>
                  <span className="font-bold">Bima (Pandawa)</span>
                </li>
                <li className="flex justify-between">
                  <span className="opacity-60">Ibu</span>
                  <span className="font-bold">Dewi Arimbi</span>
                </li>
                <li className="flex justify-between">
                  <span className="opacity-60">Senjata</span>
                  <span className="font-bold">Kutang Antakusuma</span>
                </li>
                <li className="flex justify-between">
                  <span className="opacity-60">Kesaktian</span>
                  <span className="font-bold">Terbang, Kebal Senjata</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="col-span-1 md:col-span-8 space-y-8">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-black text-deep-maroon dark:text-primary mb-2 tracking-tight"
              >
                Gatotkaca
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl font-javanese text-soga-brown/60 dark:text-cream/60 mb-6"
              >
                ꦒꦠꦺꦴꦠ꧀ꦏꦕ
              </motion.h2>
              <p className="text-xl font-medium leading-relaxed text-soga-brown dark:text-cream/90 italic border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-lg">
                &quot;Otot kawat, balung wesi. Ksatria Pringgadani kang bisa
                mabur tanpa elar, mletik tanpa suthang.&quot;
              </p>
            </div>

            <div className="prose prose-lg prose-brown dark:prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-deep-maroon dark:text-primary mb-4 flex items-center gap-3">
                <span className="material-icons-round text-primary">
                  history_edu
                </span>
                Asal Usul & Kelahiran
              </h3>
              <p className="text-justify leading-relaxed opacity-90 mb-6">
                Gatotkaca adalah putra dari Bima, salah satu dari lima Pandawa,
                dan Dewi Arimbi, raksasa perempuan dari Kerajaan Pringgadani.
                Nama aslinya saat lahir adalah Jabang Tetuka. Konon, tali
                pusarnya sangat sakti dan tidak mempan dipotong dengan senjata
                apapun. Hanya sarung keris Kunta Wijayadanu milik Adipati Karna
                yang akhirnya mampu memotongnya, namun sarung keris itu justru
                masuk dan bersatu ke dalam perutnya, menambah kesaktiannya.
              </p>

              <p className="text-justify leading-relaxed opacity-90 mb-8">
                Saat masih bayi, ia diceburkan ke Kawah Candradimuka oleh Batara
                Guru untuk digembleng. Di sana, ia dicampur dengan berbagai
                pusaka para dewa sehingga tubuhnya menjadi sangat kuat. Inilah
                asal mula julukan &quot;Otot Kawat, Tulang Besi&quot;. Ia tumbuh
                menjadi sosok gagah perkasa yang siap membela kebenaran.
              </p>

              <h3 className="text-2xl font-bold text-deep-maroon dark:text-primary mb-4 flex items-center gap-3">
                <span className="material-icons-round text-primary">
                  psychology
                </span>
                Filosofi & Karakter
              </h3>
              <p className="text-justify leading-relaxed opacity-90 mb-6">
                Gatotkaca bukan sekadar simbol kekuatan fisik. Ia melambangkan
                **loyalitas tanpa batas** kepada negara dan leluhur. Sebagai
                seorang pemimpin muda di Pringgadani, ia mengajarkan bahwa
                tanggung jawab melindungi rakyat melampaui kepentingan pribadi.
              </p>
              <p className="text-justify leading-relaxed opacity-90 mb-8">
                Secara fisik, Gatotkaca adalah perpaduan antara **manusia** dan
                **raksasa**. Ini mengandung filosofi bahwa seseorang bisa
                memiliki kekuatan dahsyat yang menakutkan (sifat raksasa), namun
                harus dikendalikan oleh hati nurani yang luhur dan budi pekerti
                (sifat ksatria manusia). Ia tidak pernah menggunakan kekuatannya
                untuk menindas, melainkan untuk melindungi yang lemah (ngayomi).
              </p>

              <h3 className="text-2xl font-bold text-deep-maroon dark:text-primary mb-4 flex items-center gap-3">
                <span className="material-icons-round text-primary">stars</span>
                Peran dalam Bharatayuda
              </h3>
              <p className="text-justify leading-relaxed opacity-90">
                Dalam perang besar Bharatayuda, Gatotkaca memegang peran kunci
                sebagai senopati (jenderal perang). Keahliannya terbang
                memungkinkannya memantau musuh dari angkasa dan menyerang secara
                tiba-tiba. Pengorbanan terbesarnya terjadi saat ia gugur terkena
                senjata Konta milik Karna, yang sejatinya ditujukan untuk
                Arjuna. Dengan sisa tenaganya, ia membesarkan tubuhnya saat
                jatuh untuk menimpa pasukan Kurawa, membunuh ribuan musuh
                sekaligus dalam kematiannya yang heroik.
              </p>
            </div>

            {/* Cultural Footnote */}
            <div className="bg-primary/10 border-2 border-primary/20 rounded-xl p-6 flex gap-4 items-start mt-8">
              <span className="material-icons-round text-primary text-3xl">
                lightbulb
              </span>
              <div>
                <h4 className="font-bold text-deep-maroon dark:text-primary text-lg">
                  Tahukah Kamu?
                </h4>
                <p className="text-sm opacity-80 mt-1 leading-relaxed">
                  Topi khas Gatotkaca yang melengkung ke belakang disebut{" "}
                  <strong>Caping Basunanda</strong>. Dalam pewayangan Jawa,
                  Gatotkaca digambarkan bisa terbang bukan karena memiliki
                  sayap, tetapi berkat kotang (rompi) Antakusuma pemberian para
                  dewa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
