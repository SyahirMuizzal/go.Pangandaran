"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const hotels = [
  {
    name: "Sunrise Beach Hotel",
    stars: 5,
    image: "/images/hotel-1.jpg",
    address: "Jl. Pantai Barat No. 88, Pangandaran",
    price: "Rp 1.200.000 / malam",
    facilities: [
      "Kolam Renang",
      "Wi-Fi Gratis",
      "Restoran",
      "AC",
      "Parkir Luas",
    ],
    description:
      "Hotel mewah dengan pemandangan pantai langsung. Nikmati kenyamanan kamar modern dan pelayanan terbaik di Pangandaran.",
  },
  {
    name: "Nirwana Hotel Pangandaran",
    stars: 4,
    image: "/images/hotel-2.jpg",
    address: "Jl. Kidang Pananjung No. 45, Pangandaran",
    price: "Rp 850.000 / malam",
    facilities: ["Kolam Renang", "Sarapan Gratis", "Wi-Fi", "AC"],
    description:
      "Hotel nyaman dengan fasilitas lengkap dan lokasi strategis dekat pantai barat. Cocok untuk keluarga dan pasangan.",
  },
  {
    name: "Pangandaran Beach Inn",
    stars: 3,
    image: "/images/hotel-3.jpg",
    address: "Jl. Pamugaran No. 27, Pangandaran",
    price: "Rp 600.000 / malam",
    facilities: ["Wi-Fi Gratis", "TV", "Restoran", "Tempat Parkir"],
    description:
      "Pilihan ekonomis dengan fasilitas lengkap dan suasana tenang. Dekat dengan area wisata dan pusat kuliner.",
  },
  {
    name: "Simpang Raya Guest House",
    stars: 2,
    image: "/images/hotel-4.jpg",
    address: "Jl. Raya Pangandaran No. 99, Pangandaran",
    price: "Rp 350.000 / malam",
    facilities: ["Wi-Fi", "Air Panas", "Parkir"],
    description:
      "Guest house dengan pelayanan ramah dan suasana kekeluargaan. Ideal untuk backpacker atau liburan singkat.",
  },
  {
    name: "Melati Seaside Inn",
    stars: 1,
    image: "/images/hotel-5.jpg",
    address: "Jl. Merdeka No. 21, Pangandaran",
    price: "Rp 250.000 / malam",
    facilities: ["Kipas Angin", "Parkir", "Akses Pantai Dekat"],
    description:
      "Penginapan sederhana dekat pantai. Harga terjangkau dan lokasi strategis untuk menikmati suasana alam.",
  },
];

export default function HotelPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-zinc-100 via-white to-zinc-300 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-neutral-800 mb-4"
        >
          Rekomendasi Hotel di Pangandaran
        </motion.h1>
        <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
          Temukan hotel terbaik mulai dari bintang satu hingga lima di
          Pangandaran. Nikmati fasilitas nyaman dengan harga yang sesuai
          kebutuhan Anda.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {hotels.map((hotel, index) => (
          <motion.div
            key={hotel.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <Image
              src={hotel.image}
              alt={hotel.name}
              width={500}
              height={350}
              className="object-cover w-full h-56"
            />

            <div className="p-6 text-left">
              <h2 className="text-2xl font-bold text-teal-700 mb-2">
                {hotel.name}
              </h2>

              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: hotel.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-500 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-4">{hotel.description}</p>

              <div className="mb-3">
                <h3 className="font-semibold text-gray-800">Fasilitas:</h3>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {hotel.facilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-700 text-sm mb-1">
                <span className="font-semibold">Alamat:</span> {hotel.address}
              </p>

              <p className="text-gray-700 text-sm mb-3">
                <span className="font-semibold">Harga:</span> {hotel.price}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
