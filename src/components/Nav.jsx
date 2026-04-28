import { useEffect, useState } from "react";
import { Menu, X, Hammer } from "lucide-react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-[#F6F1E8]/85 backdrop-blur-xl border-b border-[#5C3A21]/10 shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* 🪵 LOGO */}
        <a
          href="#home"
          className="flex items-center gap-3 group"
        >
          <div className="w-11 h-11 rounded-full bg-[#5C3A21] flex items-center justify-center shadow-md">
            <Hammer size={18} className="text-[#F6F1E8]" />
          </div>

          <div>
            <p
              className="text-2xl leading-none text-[#5C3A21]"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              ML Carpentry
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#A67C52] mt-1">
              Norwich
            </p>
          </div>
        </a>

        {/* 🧭 DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="relative text-sm tracking-wide text-[#5C3A21] hover:text-[#8B5E3C] transition group"
            >
              {link.name}

              {/* subtle underline */}
              <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-[#8B5E3C] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* 📞 CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="bg-[#5C3A21] text-white px-6 py-3 rounded-full text-sm tracking-wide hover:bg-[#4A2F1A] transition shadow-lg"
          >
            Request a Quote
          </a>
        </div>

        {/* 📱 MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-11 h-11 rounded-full border border-[#5C3A21]/15 flex items-center justify-center text-[#5C3A21]"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* 📱 MOBILE MENU */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-500 overflow-hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#F6F1E8]/98 backdrop-blur-xl border-b border-[#5C3A21]/10 shadow-xl">

          <div className="px-6 py-8 flex flex-col gap-6">

            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#5C3A21] text-lg border-b border-[#5C3A21]/8 pb-3 hover:text-[#8B5E3C] transition"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-[#5C3A21] text-white py-4 rounded-full text-center tracking-wide hover:bg-[#4A2F1A] transition"
            >
              Request a Quote
            </a>

            {/* Trust line */}
            <p className="text-xs uppercase tracking-[0.25em] text-[#A67C52] pt-2">
              35+ Years of Trusted Craftsmanship
            </p>

          </div>
        </div>
      </div>
    </header>
  );
}