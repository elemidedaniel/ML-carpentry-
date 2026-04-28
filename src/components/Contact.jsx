import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

/* LEFT SIDE */
function ContactInfo() {
  return (
    <>
      <p className="uppercase tracking-[0.32em] text-[11px] text-[#d6b98f] mb-5">
        Contact
      </p>

      <h2
        className="text-5xl md:text-7xl text-[#f6f1e9] leading-[0.98] mb-8"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Let’s build
        <br />
        something properly
      </h2>

      <p className="text-[#d8cfc2] text-lg leading-relaxed max-w-xl mb-10">
        Whether you need bespoke carpentry, interior fittings, or trusted
        craftsmanship backed by decades of experience, get in touch.
      </p>

      <div className="space-y-5 text-[#f6f1e9]">
        <div className="flex items-center gap-4">
          <Phone size={18} />
          <span>+44 0000 000000</span>
        </div>

        <div className="flex items-center gap-4">
          <Mail size={18} />
          <span>mlcarpentry@email.com</span>
        </div>

        <div className="flex items-center gap-4">
          <MapPin size={18} />
          <span>Norwich, United Kingdom</span>
        </div>
      </div>
    </>
  );
}

/* FORM */
function ContactForm() {
  return (
    <div className="bg-[#f6f1e9] rounded-[32px] p-8 md:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.18)]">
      <form className="space-y-5">

        <div>
          <label className="block text-sm text-[#5f5347] mb-2">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-4 rounded-2xl bg-[#efe7db] border border-black/5 outline-none focus:ring-2 focus:ring-[#b8956f]"
          />
        </div>

        <div>
          <label className="block text-sm text-[#5f5347] mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-4 rounded-2xl bg-[#efe7db] border border-black/5 outline-none focus:ring-2 focus:ring-[#b8956f]"
          />
        </div>

        <div>
          <label className="block text-sm text-[#5f5347] mb-2">
            Project Details
          </label>
          <textarea
            rows="5"
            placeholder="Tell us about your project..."
            className="w-full px-4 py-4 rounded-2xl bg-[#efe7db] border border-black/5 outline-none resize-none focus:ring-2 focus:ring-[#b8956f]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#3b2a1d] text-white py-4 rounded-2xl hover:opacity-90 transition text-lg"
        >
          Request a Quote
        </button>

      </form>
    </div>
  );
}

/* MAIN */
export default function Contact() {
  return (
    <section className="py-28 px-6 bg-[#3b2a1d] relative overflow-hidden">

      <div className="absolute inset-0 opacity-[0.06] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light"></div>

      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#b8956f]/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <ContactInfo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>

      </div>
    </section>
  );
}