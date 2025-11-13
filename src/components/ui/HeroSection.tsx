"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-screen overflow-hidden bg-gradient-to-br from-teal-100 via-white to-zinc-100 text-zinc-800 px-6 md:px-12 py-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-300/30 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-300/40 rounded-full blur-3xl opacity-60"></div>
      </div>

      {/* Konten Teks */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center md:text-left max-w-xl space-y-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Jelajahi{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-900">
            Keindahan Pangandaran
          </span>
        </motion.h1>

        <p className="text-zinc-600 text-base sm:text-lg md:text-xl leading-relaxed">
          Dari pantai hingga pegunungan — rasakan keajaiban alam, budaya, dan
          pesona wisata yang menenangkan jiwa.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#115e59" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-teal-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
          >
            <Link
              href="#jelajahi"
              className="flex flex-row items-center justify-center"
            >
              Jelajahi Sekarang
            </Link>
            <ArrowRight size={18} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 border-2 border-teal-600 text-teal-700 font-semibold px-6 py-3 rounded-full shadow-sm hover:bg-teal-50 transition"
          >
            <Link href={"/destinasi"}>Lihat Destinasi</Link>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Gambar Hero */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="relative z-10 w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <Image
            src="/images/pangandaran-2.jpg"
            alt="Pemandangan Pangandaran"
            width={550}
            height={400}
            className="rounded-[2rem] shadow-2xl object-cover w-full max-w-lg border-4 border-white"
            priority
          />

          {/* Efek Cahaya */}
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/20 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
