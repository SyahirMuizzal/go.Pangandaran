"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-teal-200 via-zinc-100 to-zinc-50 text-zinc-700 py-10 border-t border-zinc-300">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-300/30 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-300/30 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Logo & Deskripsi */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <Image
              src="/images/logo-pangandaran.png"
              alt="Logo Pangandaran"
              width={60}
              height={60}
              className="rounded-full object-contain"
            />
            <h2 className="text-2xl font-bold text-teal-800">Go.Pangandaran</h2>
          </div>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Menjelajahi keindahan alam, budaya, dan wisata terbaik di
            Pangandaran. Mari temukan pengalaman tak terlupakan di surga pesisir
            Jawa Barat.
          </p>
        </motion.div>

        {/* Navigasi dan Informasi */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left"
        >
          <div>
            <h3 className="font-semibold text-teal-800 mb-2">Navigasi</h3>
            <ul className="space-y-1 text-sm text-zinc-600">
              <li>
                <Link href="/" className="hover:text-teal-700 transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/destinasi"
                  className="hover:text-teal-700 transition"
                >
                  Destinasi
                </Link>
              </li>
              <li>
                <Link
                  href="/kuliner"
                  className="hover:text-teal-700 transition"
                >
                  Kuliner
                </Link>
              </li>
              <li>
                <Link
                  href="/akomodasi"
                  className="hover:text-teal-700 transition"
                >
                  Akomodasi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-teal-800 mb-2">Informasi</h3>
            <ul className="space-y-1 text-sm text-zinc-600">
              <li>
                <Link
                  href="/tentang"
                  className="hover:text-teal-700 transition"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-teal-700 transition">
                  Kontak
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-teal-700 transition">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-teal-700 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Dinas Terkait */}
          <div>
            <h3 className="font-semibold text-teal-800 mb-2">Dinas Terkait</h3>
            <ul className="space-y-1 text-sm text-zinc-600">
              <li>
                <a
                  href="https://dispar.pangandarankab.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-700 transition"
                >
                  Dinas Pariwisata & Kebudayaan
                </a>
              </li>
              <li>
                <a
                  href="https://diskominfo.pangandarankab.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-700 transition"
                >
                  Dinas Komunikasi & Informatika
                </a>
              </li>
              <li>
                <a
                  href="https://bappeda.pangandarankab.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-700 transition"
                >
                  Bappeda Kabupaten Pangandaran
                </a>
              </li>
              <li>
                <a
                  href="https://pangandarankab.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-700 transition"
                >
                  Pemerintah Kabupaten Pangandaran
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Sosial Media */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex flex-col items-center md:items-end gap-4"
        >
          <h3 className="font-semibold text-teal-800">Ikuti Kami</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow-md hover:bg-teal-600 hover:text-white transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow-md hover:bg-teal-600 hover:text-white transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow-md hover:bg-teal-600 hover:text-white transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow-md hover:bg-teal-600 hover:text-white transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Garis Bawah */}
      <div className="mt-10 border-t border-zinc-300 pt-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Go.Pangandaran. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
