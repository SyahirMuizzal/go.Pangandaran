"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const hotelResort = [
  {
    name: "The Arnawa Hotel",
    desc: "Hotel berbintang dengan fasilitas modern, kolam renang luas, dan lokasi strategis dekat pantai barat Pangandaran.",
    img: "/images/the-arnawa.jpg",
  },
  {
    name: "Sunrise Beach Resort",
    desc: "Resor tepi pantai dengan pemandangan laut menakjubkan dan suasana santai yang cocok untuk liburan keluarga.",
    img: "/images/sunrise-resort.jpg",
  },
  {
    name: "Laut Biru Resort Hotel",
    desc: "Hotel populer di Pangandaran dengan kamar luas, restoran tepi pantai, dan fasilitas lengkap.",
    img: "/images/laut-biru.jpg",
  },
];

const homestayList = [
  {
    name: "Homestay Bu Rini",
    desc: "Penginapan ramah di kantong dengan suasana kekeluargaan dan akses mudah ke pantai timur.",
    img: "/images/homestay-rini.jpg",
  },
  {
    name: "Pondok Pantai Timur",
    desc: "Homestay dengan desain tropis, menawarkan kamar bersih dan nyaman dekat area wisata kuliner.",
    img: "/images/pondok-timur.jpg",
  },
  {
    name: "Villa Sunset View",
    desc: "Pilihan ideal untuk rombongan, dengan pemandangan matahari terbenam dan halaman luas.",
    img: "/images/villa-sunset.jpg",
  },
];

const tips = [
  "Pesan lebih awal saat musim liburan agar mendapatkan harga terbaik.",
  "Pilih lokasi akomodasi sesuai kebutuhan — dekat pantai atau pusat kota.",
  "Perhatikan fasilitas seperti parkir, Wi-Fi, dan sarapan gratis.",
  "Baca ulasan tamu sebelumnya untuk memastikan kualitas layanan.",
];

const AkomodasiPage = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-teal-100 via-zinc-100 to-zinc-50 text-zinc-800 py-20 px-6 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-teal-300/30 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-zinc-300/30 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold mb-4 text-teal-800"
        >
          Akomodasi <span className="text-zinc-700">di Pangandaran</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-zinc-600 max-w-2xl mx-auto"
        >
          Temukan penginapan terbaik di Pangandaran — dari hotel mewah tepi
          pantai hingga homestay hangat yang ramah di kantong.
        </motion.p>
      </div>

      {/* Hotel & Resort Section */}
      <div className="container mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-teal-700">
          Hotel & Resort Populer
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {hotelResort.map((hotel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-zinc-100"
            >
              <Image
                src={hotel.img}
                alt={hotel.name}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-zinc-800 mb-2">
                  {hotel.name}
                </h3>
                <p className="text-zinc-600 text-sm">{hotel.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Homestay Section */}
      <div className="container mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-teal-700">
          Homestay & Villa Nyaman
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {homestayList.map((stay, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-zinc-100"
            >
              <Image
                src={stay.img}
                alt={stay.name}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-zinc-800 mb-2">
                  {stay.name}
                </h3>
                <p className="text-zinc-600 text-sm">{stay.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tips Section */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-teal-700">
          Tips Memilih Akomodasi
        </h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10 text-zinc-700 space-y-4 border border-zinc-100"
        >
          {tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">•</span>
              <p>{tip}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default AkomodasiPage;
