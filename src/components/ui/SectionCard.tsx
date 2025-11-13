"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Building2, Hotel, Utensils } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

const cardData = [
  {
    title: "Destinasi",
    href: "/destinasi",
    image: "/images/pangandaran-2.jpg",
    description:
      "Nikmati keindahan pantai, alam, dan objek wisata terbaik di Kabupaten Pangandaran.",
    icon: <MapPin className="w-10 h-10 text-neutral-700" />,
  },
  {
    title: "Akomodasi",
    href: "/akomodasi",
    image: "/images/Akomodasi.webp",
    description:
      "Temukan berbagai pilihan penginapan nyaman dan terjangkau untuk perjalanan Anda.",
    icon: <Building2 className="w-10 h-10 text-neutral-700" />,
  },
  {
    title: "Hotel & Resort",
    href: "/hotel",
    image: "/images/Hotel.jpeg",
    description:
      "Rasakan pengalaman menginap mewah dengan pemandangan alam yang menakjubkan.",
    icon: <Hotel className="w-10 h-10 text-neutral-700" />,
  },
  {
    title: "Kuliner",
    href: "/kuliner",
    image: "/images/Sate-Maranggi-Pangandaran.jpg",
    description:
      "Cicipi aneka kuliner khas Pangandaran yang menggugah selera dan tak terlupakan.",
    icon: <Utensils className="w-10 h-10 text-neutral-700" />,
  },
];

const SectionCard = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-neutral-100 to-white text-neutral-800">
      <div className="text-center mb-12">
        <h1 className="text-3xl text-teal-800 sm:text-4xl md:text-5xl font-extrabold leading-snug mb-4">
          Jelajahi Keindahan Alam
        </h1>
        <p className="text-teal-800 max-w-2xl mx-auto">
          Temukan berbagai hal menarik yang membuat Pangandaran menjadi salah
          satu destinasi terbaik di Jawa Barat.
        </p>
      </div>

      {/* Grid Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Link ke halaman */}
            <Link href={card.href} className="block group">
              <Card className="w-full bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col border border-neutral-200 hover:shadow-2xl transition">
                <CardHeader className="flex text-teal-800 flex-row justify-center items-center gap-2 pt-4">
                  {card.icon}
                  <CardTitle className="text-center text-teal-800 text-lg font-semibold group-hover:text-neutral-600 transition">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center space-y-3 pb-6">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={400}
                    height={250}
                    priority
                    className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <p className="text-teal-800 text-sm px-2">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionCard;
