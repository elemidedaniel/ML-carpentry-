import { motion } from "framer-motion";
import {
  Hammer,
  DoorOpen,
  Ruler,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Bespoke Carpentry",
    desc: "Custom-built woodwork tailored to your home, style, and practical needs.",
    icon: Hammer,
    tone: "bg-[#e8dccb]",
  },
  {
    title: "Doors & Fittings",
    desc: "Precision installation of doors, frames, skirting, and interior finishes.",
    icon: DoorOpen,
    tone: "bg-[#d8c3a5]",
  },
  {
    title: "Interior Woodwork",
    desc: "From fitted shelving to detailed trims, crafted to elevate every space.",
    icon: Ruler,
    tone: "bg-[#efe6d8]",
  },
  {
    title: "Repairs & Restoration",
    desc: "Reliable restoration and carpentry repairs that respect original quality.",
    icon: Wrench,
    tone: "bg-[#d9c7ad]",
  },
];

export default function Services() {
  return (
    <section className="py-28 px-6 bg-[#f6f1e9] relative overflow-hidden">

      {/* 🌫 Grain texture */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply"></div>

      {/* ✨ Soft warm glow */}
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-[#c8a97e]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[0%] right-[-10%] w-[420px] h-[420px] bg-[#b8956f]/10 blur-[130px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* 🪵 HEADER */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.32em] text-[11px] text-[#9c7b52] mb-5">
            Services
          </p>

          <h2
            className="text-5xl md:text-7xl text-[#3b2a1d] leading-[0.98] mb-6"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Crafted solutions,
            <br />
            built to last
          </h2>

          <p className="text-[#6b5d4f] max-w-2xl mx-auto text-lg leading-relaxed">
            Combining decades of experience with quality craftsmanship,
            ML Carpentry delivers dependable work with a refined finish.
          </p>
        </div>

        {/* 🧱 SERVICES GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">

          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card */}
                <div
                  className={`${service.tone} h-full rounded-[28px] p-8 border border-black/5 shadow-[0_20px_50px_rgba(59,42,29,0.08)] flex flex-col`}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#3b2a1d] text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl text-[#3b2a1d] mb-4"
                    style={{ fontFamily: "Fraunces, serif" }}
                  >
                    {service.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-[#5f5347] leading-relaxed text-[15px] flex-grow">
                    {service.desc}
                  </p>

                  {/* Accent line */}
                  <div className="mt-8 w-12 h-[2px] bg-[#3b2a1d]/30 group-hover:w-20 transition-all duration-300"></div>
                </div>

                {/* Decorative outer border */}
                <div className="absolute inset-0 rounded-[28px] ring-1 ring-black/5 pointer-events-none"></div>
              </motion.div>
            );
          })}

        </div>

        {/* 🪚 Bottom statement */}
        <div className="mt-20 text-center">
          <p className="text-[#7a6b5d] text-base md:text-lg italic">
            Quality materials. Honest workmanship. Built with pride.
          </p>
        </div>

      </div>
    </section>
  );
}