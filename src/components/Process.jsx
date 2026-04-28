import { motion } from "framer-motion";
import {
  MessageSquare,
  PencilRuler,
  Hammer,
  CheckCircle2,
} from "lucide-react";

/* DATA */
const processSteps = [
  {
    title: "Initial Consultation",
    desc: "We discuss your vision, measurements, and practical requirements to fully understand the project.",
    icon: MessageSquare,
  },
  {
    title: "Planning & Design",
    desc: "Every detail is carefully considered, from materials to finish, ensuring a tailored approach.",
    icon: PencilRuler,
  },
  {
    title: "Craftsmanship",
    desc: "Built with precision, quality materials, and decades of hands-on expertise.",
    icon: Hammer,
  },
  {
    title: "Final Delivery",
    desc: "Clean, polished, and completed to a professional standard designed to last.",
    icon: CheckCircle2,
  },
];

/* CARD COMPONENT */
function ProcessCard({ step, i }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: i * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="bg-[#f6f1e9] rounded-[28px] p-8 h-full border border-black/5 shadow-[0_20px_50px_rgba(59,42,29,0.08)]">

        <p className="text-sm text-[#9c7b52] mb-6">0{i + 1}</p>

        <div className="w-14 h-14 rounded-2xl bg-[#3b2a1d] text-white flex items-center justify-center mb-8">
          <Icon size={24} />
        </div>

        <h3
          className="text-2xl text-[#3b2a1d] mb-4"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          {step.title}
        </h3>

        <p className="text-[#5f5347] leading-relaxed text-[15px]">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

/* MAIN COMPONENT */
export default function Process() {
  return (
    <section className="py-28 px-6 bg-[#efe7db] relative overflow-hidden">

      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply"></div>

      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-[#c8a97e]/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.32em] text-[11px] text-[#9c7b52] mb-5">
            The Process
          </p>

          <h2
            className="text-5xl md:text-7xl text-[#3b2a1d] leading-[0.98] mb-6"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            From first idea
            <br />
            to final finish
          </h2>

          <p className="text-[#6b5d4f] max-w-2xl mx-auto text-lg leading-relaxed">
            A straightforward, reliable process designed to make quality craftsmanship simple.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {processSteps.map((step, i) => (
            <ProcessCard key={i} step={step} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
}