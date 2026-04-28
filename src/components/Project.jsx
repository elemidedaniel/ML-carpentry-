import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Bespoke Kitchen Installation",
    category: "Residential",
    image: "/project1.jpg",
  },
  {
    title: "Custom Staircase & Banister",
    category: "Interior Craftsmanship",
    image: "/project2.jpg",
  },
  {
    title: "Fitted Storage Solutions",
    category: "Made to Measure",
    image: "/project3.jpg",
  },
  {
    title: "Traditional Door Restoration",
    category: "Restoration",
    image: "/project4.jpg",
  },
];

export default function Projects() {
  return (
    <section className="py-28 px-6 bg-[#f6f1e9] relative overflow-hidden">

      {/* 🌫 Grain texture */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply"></div>

      {/* ✨ Warm accents */}
      <div className="absolute top-[0%] right-[-10%] w-[420px] h-[420px] bg-[#d8c3a5]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[5%] left-[-10%] w-[380px] h-[380px] bg-[#b8956f]/10 blur-[130px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* 🪵 HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">

          <div>
            <p className="uppercase tracking-[0.32em] text-[11px] text-[#9c7b52] mb-5">
              Featured Projects
            </p>

            <h2
              className="text-5xl md:text-7xl text-[#3b2a1d] leading-[0.98]"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Crafted work,
              <br />
              proven by detail
            </h2>
          </div>

          <p className="text-[#6b5d4f] text-lg max-w-xl leading-relaxed">
            A selection of recent projects showcasing practical craftsmanship,
            bespoke finishes, and decades of trusted experience.
          </p>

        </div>

        {/* 🧱 PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Image card */}
              <div className="relative rounded-[30px] overflow-hidden shadow-[0_25px_60px_rgba(59,42,29,0.12)]">

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b2118]/80 via-[#2b2118]/20 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">

                  <p className="uppercase tracking-[0.28em] text-[10px] text-[#e8d8bf] mb-3">
                    {project.category}
                  </p>

                  <div className="flex items-end justify-between gap-4">
                    <h3
                      className="text-2xl md:text-3xl text-white leading-tight"
                      style={{ fontFamily: "Fraunces, serif" }}
                    >
                      {project.title}
                    </h3>

                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-[#3b2a1d] transition-all duration-300">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                </div>
              </div>

              {/* Outer frame */}
              <div className="absolute inset-0 rounded-[30px] ring-1 ring-black/5 pointer-events-none"></div>
            </motion.div>
          ))}

        </div>

        {/* 🪚 Bottom line */}
        <div className="mt-20 text-center">
          <p className="text-[#7a6b5d] text-base md:text-lg italic">
            Every finish reflects experience, precision, and pride in the craft.
          </p>
        </div>

      </div>
    </section>
  );
}