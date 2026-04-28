import { motion } from "framer-motion";

const testimonials = [
  {
    name: "James Carter",
    text: "Absolutely flawless finish. Attention to detail is on another level — the space feels completely transformed.",
  },
  {
    name: "Sophie Williams",
    text: "Reliable, clean, and professional from start to finish. Couldn’t recommend highly enough.",
  },
  {
    name: "Daniel Foster",
    text: "Everything was handled perfectly — from prep to final coat. Proper craftsmanship.",
  },
];

export default function Testimonies() {
  return (
    <section className="py-28 px-6 bg-[#efe7db] relative overflow-hidden">

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.png')] mix-blend-multiply"></div>

      {/* Glow */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#c8a97e]/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.32em] text-[11px] text-[#9c7b52] mb-5">
            Testimonials
          </p>

          <h2
            className="text-5xl md:text-7xl text-[#3b2a1d] leading-[0.98] mb-6"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            What clients say
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f6f1e9] rounded-[28px] p-8 border border-black/5 shadow-[0_20px_50px_rgba(59,42,29,0.08)]"
            >
              <p className="text-[#5f5347] text-[15px] leading-relaxed mb-6">
                “{item.text}”
              </p>

              <div className="text-sm text-[#9c7b52]">
                — {item.name}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}