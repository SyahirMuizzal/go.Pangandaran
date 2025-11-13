"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const kulinerKhas = [
  {
    name: "Sate Maranggi Pangandaran",
    desc: "Sate khas dengan bumbu rempah manis gurih yang dibakar hingga empuk, menjadi favorit wisatawan.",
    img: "/images/Sate-Maranggi-Pangandaran.jpg",
  },
  {
    name: "Ikan Bakar Pantai Timur",
    desc: "Hidangan laut segar langsung dari nelayan lokal, dibakar dengan bumbu khas Sunda yang menggoda selera.",
    img: "/images/Ikan-Bakar.JPG",
  },
  {
    name: "Nasi Liwet Sunda",
    desc: "Nasi gurih dimasak bersama santan dan rempah, disajikan dengan lauk khas Pangandaran.",
    img: "/images/Nasi-Liwet-Sunda.webp",
  },
];

const restoTerkenal = [
  {
    name: "Resto Bamboo Corner",
    desc: "Restoran bernuansa alam yang menyajikan seafood segar dan masakan tradisional Sunda.",
    img: "/images/Bamboo-Resto.png",
  },
  {
    name: "Rumah Makan Berkah Laut",
    desc: "Tempat makan populer di tepi pantai yang menyajikan hidangan laut terbaik Pangandaran.",
    img: "/images/berkah-laut.webp",
  },
];

const olehOleh = [
  {
    name: "Sale Pisang Pangandaran",
    desc: "Camilan manis yang terbuat dari pisang kering dengan cita rasa khas daerah pesisir.",
    img: "/images/sale-pisang.jpg",
  },
  {
    name: "Ikan Asin Jambal Roti",
    desc: "Oleh-oleh favorit wisatawan, cocok dijadikan lauk atau camilan gurih.",
    img: "/images/ikan-asin-jambal-roti.jpg",
  },
];

const KulinerPage = () => {
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
          Kuliner Khas <span className="text-zinc-700">Pangandaran</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-zinc-600 max-w-2xl mx-auto"
        >
          Jelajahi kelezatan kuliner khas Pangandaran — dari makanan
          tradisional, restoran tepi pantai, hingga oleh-oleh khas yang wajib
          dibawa pulang.
        </motion.p>
      </div>

      {/* Kuliner Khas Section */}
      <div className="container mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-teal-700">
          Kuliner Khas Pangandaran
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {kulinerKhas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-zinc-100"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-zinc-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-zinc-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Resto Terkenal Section */}
      <div className="container mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-teal-700">
          Resto Terkenal di Pangandaran
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {restoTerkenal.map((resto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden border border-zinc-100"
            >
              <Image
                src={resto.img}
                alt={resto.name}
                width={300}
                height={200}
                className="object-cover w-full md:w-1/2 h-56"
              />
              <div className="p-6 md:w-1/2 text-center md:text-left">
                <h3 className="text-xl font-semibold text-zinc-800 mb-2">
                  {resto.name}
                </h3>
                <p className="text-zinc-600 text-sm">{resto.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Oleh-Oleh Section */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-teal-700">
          Oleh-Oleh Khas Pangandaran
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {olehOleh.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-zinc-100"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-zinc-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-zinc-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KulinerPage;
