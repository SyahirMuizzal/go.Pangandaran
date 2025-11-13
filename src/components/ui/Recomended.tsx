"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const RecomendedPage = () => {
  const testimonials = [
    {
      title:
        "Green Canyon, atau dalam bahasa lokal dikenal sebagai Cukang Taneuh, adalah salah satu destinasi alam paling menakjubkan di Pangandaran, Jawa Barat. Tempat ini terkenal karena keindahan tebing-tebing batu kapur yang menjulang tinggi, air sungai yang berwarna hijau toska, dan suasana alam yang masih sangat alami.",
      name: "Green Canyon",
      description: "Recomended.",
      src: "/images/green-canyon-1.jpg",
    },
    {
      title:
        "Cagar Alam Pananjung adalah kawasan konservasi alam yang terletak di ujung barat Pantai Pangandaran, Jawa Barat. Tempat ini merupakan salah satu cagar alam tertua di Indonesia, dikenal karena keindahan hutan tropisnya, keanekaragaman satwa liar, dan peninggalan sejarah yang menarik.",
      name: "Cagar Alam Pananjung",
      description: "Recomended.",
      src: "/images/Cagar-Alam-Panunjang.jpg",
    },
    {
      title:
        "Pantai Pangandaran adalah destinasi wisata pantai paling terkenal di Jawa Barat, terletak di Kabupaten Pangandaran, sekitar 91 km dari Kota Ciamis. Pantai ini dikenal karena pasir putih dan hitamnya yang halus, ombak yang tenang, serta pemandangan matahari terbit dan terbenam di satu lokasi yang sama — keunikan yang jarang dimiliki pantai lain di Indonesia.",
      name: "Pantai Pangandaran",
      description: "Recomended.",
      src: "/images/Pantai-Pangandaran.jpg",
    },
    {
      title:
        "Pantai Batu Karas adalah destinasi wisata pantai yang berlokasi di Desa Batukaras, Kecamatan Cijulang, Kabupaten Pangandaran, Jawa Barat. Pantai ini dikenal sebagai tempat yang tenang, alami, dan cocok untuk berselancar (surfing) — menjadikannya favorit bagi wisatawan lokal maupun mancanegara yang ingin menikmati suasana santai di tepi laut.",
      name: "Pantai Batu Karas",
      description: "Recomended",
      src: "/images/Pantai-Batu-Karas.jpg",
    },
    {
      title:
        "Pantai Karang Nini adalah destinasi wisata alam yang terletak di Desa Emplak, Kecamatan Kalipucang, Kabupaten Pangandaran, Jawa Barat. Pantai ini terkenal dengan pemandangan tebing karang yang megah, laut biru yang jernih, serta nuansa hutan alami yang masih asri dan tenang.",
      name: "Pantai Karang Nini",
      description: "Recomended",
      src: "/images/Pantai-Karang-Nini.jpg",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-teal-800 mb-0 text-center py-5">
        Recomended For you
      </h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default RecomendedPage;
