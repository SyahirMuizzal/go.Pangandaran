"use client";

import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Locate, LocationEditIcon } from "lucide-react";

const destinasiWisata = [
  {
    title: "Pantai Pangandaran",
    image: "/images/pangandaran-2.jpg",
    description:
      "Pantai terkenal di Jawa Barat dengan pasir putih, ombak tenang, dan panorama matahari terbenam yang memukau.",
    location: "Pangandaran Selatan",
  },
  {
    title: "Cagar Alam Pananjung",
    image: "/images/green-canyon-1.jpg",
    description:
      "Kawasan konservasi dengan hutan tropis, gua alami, dan satwa liar seperti rusa dan monyet ekor panjang.",
    location: "Pananjung",
  },
  {
    title: "Green Canyon (Cukang Taneuh)",
    image: "/images/green-canyon-1.jpg",
    description:
      "Tebing tinggi berlumut dengan sungai jernih, cocok untuk body rafting dan petualangan air.",
    location: "Desa Kertayasa",
  },
  {
    title: "Pantai Batu Hiu",
    image: "/images/green-canyon-1.jpg",
    description:
      "Pantai dengan tebing batu berbentuk sirip hiu, menawarkan pemandangan laut selatan yang megah.",
    location: "Ciliang, Parigi",
  },
  {
    title: "Pantai Batu Karas",
    image: "/images/green-canyon-1.jpg",
    description:
      "Surga bagi peselancar dengan suasana santai, penginapan ramah, dan ombak bersahabat.",
    location: "Desa Batukaras",
  },
  {
    title: "Curug Bojong",
    image: "/images/green-canyon-1.jpg",
    description:
      "Air terjun indah tersembunyi di tengah perbukitan hijau, tempat sempurna untuk relaksasi alam.",
    location: "Desa Bojong",
  },
];

export default function DestinasiPage() {
  return (
    <section className="min-h-screen bg-gradient-to-t from-teal-950 via-zinc-400 to-zinc-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-teal-800">
          Destinasi Wisata Pangandaran
        </h1>
        <p className="text-zinc-700 max-w-2xl mx-auto mb-12">
          Temukan berbagai destinasi wisata terbaik di Pangandaran, mulai dari
          pantai, cagar alam, hingga air terjun yang menakjubkan. Setiap tempat
          memiliki pesona dan keunikan tersendiri.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinasiWisata.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-md hover:shadow-lg transition-all bg-white/70 backdrop-blur-sm border border-zinc-200"
            >
              <CardHeader className="p-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-60 object-cover"
                />
              </CardHeader>

              <CardContent className="p-4 text-left">
                <h2 className="text-xl text-teal-800 font-semibold  mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-zinc-600 mb-3">{item.description}</p>
                <p className="text-sm text-teal-600 font-medium">
                  {item.location}
                </p>
              </CardContent>

              <CardFooter className="p-4 border-t border-zinc-200 text-sm text-zinc-500">
                Go.Pangandaran
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
