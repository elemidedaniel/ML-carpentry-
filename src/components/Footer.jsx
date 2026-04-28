import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3b2a1d] text-[#f6f1e9] px-6 pt-24 pb-10 relative overflow-hidden">

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/noise.png')] mix-blend-soft-light"></div>

      {/* Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#b8956f]/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div>
            <h3
              className="text-3xl mb-4"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              MEL
            </h3>

            <p className="text-[#d8cfc2] text-sm leading-relaxed max-w-sm">
              Professional painting & decorating delivering clean finishes,
              trusted workmanship, and timeless results.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="uppercase text-[11px] tracking-[0.28em] text-[#d6b98f] mb-5">
              Navigation
            </p>

            <div className="flex flex-col gap-3 text-sm">
              {["Home", "Services", "Work", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-[#d6b98f] transition"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="uppercase text-[11px] tracking-[0.28em] text-[#d6b98f] mb-5">
              Contact
            </p>

            <div className="space-y-4 text-sm text-[#f6f1e9]">

              <div className="flex items-center gap-3">
                <Phone size={16} />
                <span>+44 0000 000000</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} />
                <span>mlcarpentry@email.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={16} />
                <span>Norwich, United Kingdom</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-[#cfc6b8]">
          <p>© {new Date().getFullYear()} MEL. All rights reserved.</p>

          <p className="mt-3 md:mt-0">
            Orbit Studio
          </p>
        </div>

      </div>
    </footer>
  );
}