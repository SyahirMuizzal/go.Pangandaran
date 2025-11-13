"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const blogPosts = [
  {
    title: "Menelusuri Keindahan Pantai Pangandaran",
    description:
      "Pantai Pangandaran dikenal sebagai mutiara selatan Jawa Barat. Artikel ini mengulas sejarah, daya tarik, dan aktivitas seru yang bisa kamu lakukan di sana.",
    image: "/images/pangandaran-1.jpg",
    category: "Wisata Alam",
    date: "12 November 2025",
    author: "Go.Pangandaran Team",
  },
  {
    title: "Kuliner Laut Segar Khas Pangandaran",
    description:
      "Dari ikan bakar segar hingga seafood platter di tepi pantai, Pangandaran menawarkan sensasi kuliner laut yang menggoda selera.",
    image: "/images/kuliner-pangandaran.jpg",
    category: "Kuliner",
    date: "8 November 2025",
    author: "Go.Pangandaran Team",
  },
  {
    title: "Tradisi dan Budaya Masyarakat Pangandaran",
    description:
      "Pelajari lebih dalam budaya masyarakat Pangandaran yang kaya akan tradisi nelayan dan kearifan lokal yang tetap terjaga hingga kini.",
    image: "/images/budaya-pangandaran.jpg",
    category: "Budaya",
    date: "3 November 2025",
    author: "Go.Pangandaran Team",
  },
];

const BlogPage = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-teal-100 via-zinc-100 to-zinc-50 text-zinc-800 px-6 py-20 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-300/30 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-zinc-400/30 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-teal-800">
          Blog <span className="text-zinc-700">Go.Pangandaran</span>
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
          Dapatkan informasi terbaru seputar wisata, kuliner, budaya, dan
          kehidupan masyarakat Pangandaran.
        </p>
      </motion.div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 overflow-hidden border border-zinc-200"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className="object-cover w-full h-56"
            />
            <div className="p-6">
              <span className="inline-block text-sm font-medium text-teal-700 bg-teal-100 px-3 py-1 rounded-full mb-3">
                {post.category}
              </span>
              <h2 className="text-xl font-semibold text-zinc-800 mb-2">
                {post.title}
              </h2>
              <p className="text-zinc-600 text-sm mb-4">{post.description}</p>
              <div className="flex items-center justify-between text-sm text-zinc-500">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <a
          href="/about"
          className="inline-block bg-teal-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-teal-800 transition"
        >
          Pelajari Lebih Lanjut Tentang Pangandaran
        </a>
      </motion.div>
    </section>
  );
};

export default BlogPage;
