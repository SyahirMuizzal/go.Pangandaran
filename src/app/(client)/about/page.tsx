"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-teal-100 via-zinc-100 to-zinc-50 text-zinc-800 px-6 py-20 overflow-hidden">
      {/* Background Blur Circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-teal-300/30 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-zinc-300/30 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Container Intro */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/images/pangandaran-2.jpg"
            alt="Tentang Pangandaran"
            width={500}
            height={400}
            className="rounded-2xl shadow-xl border-4 border-white object-cover"
            priority
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-teal-800">
            Tentang <span className="text-zinc-700">Go.Pangandaran</span>
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed mb-6">
            <strong>Go.Pangandaran</strong> hadir sebagai portal wisata modern
            yang memperkenalkan keindahan alam, budaya, dan kuliner khas
            Kabupaten Pangandaran. Kami berkomitmen untuk membantu wisatawan
            menemukan pengalaman yang autentik dan tak terlupakan.
          </p>
          <p className="text-lg text-zinc-600 leading-relaxed mb-8">
            Dari pesona pantai berpasir putih hingga petualangan di Green
            Canyon, Pangandaran menyimpan sejuta cerita yang layak dijelajahi.
            Kami percaya setiap perjalanan memiliki makna — dan kami ingin
            menjadi bagian dari kisah perjalanan Anda.
          </p>

          <motion.a
            href="/destinasi"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-teal-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-teal-800 transition"
          >
            Jelajahi Destinasi
          </motion.a>
        </motion.div>
      </div>

      {/* Informasi Sejarah, Populasi, Ekonomi, Budaya */}
      <div className="container mx-auto mt-24 space-y-20">
        {/* Sejarah */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <Image
            src="/images/Sejarah-Pangandaran.jpg"
            alt="Sejarah Pangandaran"
            width={500}
            height={350}
            className="rounded-xl shadow-lg object-cover w-full md:w-1/2"
          />
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-teal-700 mb-3">
              Sejarah Pangandaran
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              Pangandaran berasal dari kata <em>“Pangan”</em> (makanan) dan{" "}
              <em>“Daran”</em> (para pendatang). Dahulu, daerah ini menjadi
              tempat persinggahan nelayan yang mencari makan dan istirahat.
              Seiring waktu, wilayah ini berkembang menjadi pusat kegiatan
              perikanan dan perdagangan hingga akhirnya ditetapkan sebagai
              kabupaten pada tahun 2012.
            </p>
          </div>
        </motion.div>

        {/* Populasi */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse items-center gap-10"
        >
          <Image
            src="/images/Populasi-Pangandaran.jpeg"
            alt="Populasi Pangandaran"
            width={500}
            height={350}
            className="rounded-xl shadow-lg object-cover w-full md:w-1/2"
          />
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-teal-700 mb-3">Populasi</h2>
            <p className="text-zinc-600 leading-relaxed">
              Kabupaten Pangandaran memiliki populasi sekitar{" "}
              <strong>450.000 jiwa</strong> (data terakhir BPS 2023). Mayoritas
              penduduknya bekerja di sektor pertanian, perikanan, dan
              pariwisata. Pertumbuhan penduduk yang stabil menjadikan
              Pangandaran sebagai wilayah dengan potensi ekonomi yang terus
              berkembang.
            </p>
          </div>
        </motion.div>

        {/* Ekonomi */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <Image
            src="/images/Ekonomi-Pangandaran.jpeg"
            alt="Ekonomi Pangandaran"
            width={500}
            height={350}
            className="rounded-xl shadow-lg object-cover w-full md:w-1/2"
          />
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-teal-700 mb-3">
              Keadaan Ekonomi
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              Ekonomi Pangandaran bertumpu pada sektor pariwisata, perikanan,
              dan pertanian. Dengan keindahan alamnya, Pangandaran menjadi
              destinasi wisata utama di Jawa Barat. Selain itu, sektor UMKM
              seperti pengolahan hasil laut, kuliner lokal, dan kerajinan tangan
              juga menjadi tulang punggung ekonomi masyarakat.
            </p>
          </div>
        </motion.div>

        {/* Budaya */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse items-center gap-10"
        >
          <Image
            src="/images/Budaya-Pangandaran.jpeg"
            alt="Budaya Pangandaran"
            width={500}
            height={350}
            className="rounded-xl shadow-lg object-cover w-full md:w-1/2"
          />
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-teal-700 mb-3">
              Budaya Masyarakat
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              Masyarakat Pangandaran menjunjung tinggi nilai kekeluargaan dan
              gotong royong. Beragam tradisi seperti <em>Hajat Laut</em>,{" "}
              <em>Mapag Sri</em>, dan seni <em>Kuda Lumping</em> masih
              dilestarikan. Budaya ini menjadi daya tarik tersendiri bagi
              wisatawan yang ingin merasakan pengalaman lokal yang autentik.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
