import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-28 px-6 bg-[#f6f1e9] relative overflow-hidden">

      {/* 🌫 Premium grain texture */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply"></div>

      {/* ✨ Soft background accents */}
      <div className="absolute top-[-10%] right-[-5%] w-[420px] h-[420px] bg-[#d9c7ad]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[380px] h-[380px] bg-[#b8956f]/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* 📝 LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.32em] text-[11px] text-[#9c7b52] mb-6">
            About ML Carpentry
          </p>

          <h2
            className="text-5xl md:text-7xl leading-[0.98] text-[#3b2a1d] mb-8"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            35+ years of
            <br />
            trusted craftsmanship
          </h2>

          <div className="w-20 h-[2px] bg-[#b8956f] mb-8"></div>

          <p className="text-[#5e5246] text-lg leading-relaxed mb-6 max-w-xl">
            Based in Norwich, ML Carpentry has built a reputation on precision,
            reliability, and timeless workmanship. Every project is approached
            with decades of experience and a commitment to detail that only true
            craftsmanship can offer.
          </p>

          <p className="text-[#5e5246] text-lg leading-relaxed mb-10 max-w-xl">
            From bespoke woodwork to fitted interiors, each finish is carefully
            considered to create practical spaces that feel refined, durable,
            and built to last.
          </p>

          {/* 📊 STATS */}
          <div className="grid grid-cols-2 gap-8 max-w-md">
            <div className="border-l-2 border-[#b8956f] pl-4">
              <h3 className="text-4xl text-[#3b2a1d] font-semibold">35+</h3>
              <p className="text-sm uppercase tracking-wider text-[#7d6b58] mt-1">
                Years Experience
              </p>
            </div>

            <div className="border-l-2 border-[#b8956f] pl-4">
              <h3 className="text-4xl text-[#3b2a1d] font-semibold">100%</h3>
              <p className="text-sm uppercase tracking-wider text-[#7d6b58] mt-1">
                Precision Focused
              </p>
            </div>
          </div>
        </motion.div>

        {/* 🖼 RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main image */}
          <div className="rounded-[32px] overflow-hidden shadow-[0_30px_70px_rgba(59,42,29,0.18)] relative">
            <img
              src="/carpentry.jpg" // replace with your image
              alt="ML Carpentry Norwich"
              className="w-full h-[580px] object-cover"
            />
          </div>

          {/* Floating craftsmanship card */}
          <div className="absolute -bottom-8 -left-8 bg-[#3b2a1d] text-white rounded-[24px] px-8 py-6 shadow-2xl max-w-[240px]">
            <p
              className="text-2xl mb-2"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Built properly.
            </p>
            <p className="text-sm text-white/80 leading-relaxed">
              Quality materials, honest workmanship, and finishes designed to last.
            </p>
          </div>

          {/* Decorative frame */}
          <div className="absolute -top-5 -right-5 w-full h-full border border-[#c9b59a] rounded-[32px] -z-10"></div>
        </motion.div>

      </div>
    </section>
  );
}