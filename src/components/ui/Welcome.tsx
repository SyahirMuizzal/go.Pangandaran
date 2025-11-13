"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Welcome() {
  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left h-screen"
      style={{
        backgroundImage: 'url("/images/pangandaran-2.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay blur linear */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60 backdrop-blur-sm"></div>

      {/* Konten utama */}
      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-16 text-zinc-200 z-10">
        {/* Logo dengan animasi muncul */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <Image
            src="/logo-pangandaran.png"
            alt="logo pangandaran"
            height={100}
            width={100}
            className="h-48 w-48 md:h-72 md:w-72 object-contain drop-shadow-lg"
            priority
          />
        </motion.div>

        {/* Teks dengan animasi muncul dari kanan */}
        <motion.h1
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="scroll-m-20 font-extrabold tracking-tight text-balance"
        >
          <span className="block text-3xl sm:text-4xl md:text-5xl mb-3">
            Selamat Datang di Kabupaten Pangandaran
          </span>
          <span className="text-xl sm:text-2xl text-neutral-200">
            Jawa Barat, Indonesia
          </span>
        </motion.h1>
      </div>
    </div>
  );
}
