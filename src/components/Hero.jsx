import { useEffect, useRef } from "react";
import HeroImg from "../assets/mlhero.png"; // replace with your best workshop/project image

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${y * 0.12}px)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#F6F1E8] overflow-hidden flex items-center">

      {/* 🌫 Premium Background */}
      <div ref={bgRef} className="absolute inset-0 z-0">

        {/* Base */}
        <div className="absolute inset-0 bg-[#F6F1E8]" />

        {/* Warm radial tones */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 15% 30%, rgba(139,94,60,0.10), transparent 40%),
              radial-gradient(circle at 85% 70%, rgba(193,154,107,0.08), transparent 45%),
              radial-gradient(circle at 50% 10%, rgba(101,67,33,0.06), transparent 35%)
            `,
          }}
        />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#6B4F3A_1px,transparent_1px),linear-gradient(to_bottom,#6B4F3A_1px,transparent_1px)] bg-[size:90px_90px]" />

        {/* Grain */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* 🪵 Floating craftsmanship accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[18%] left-[8%] w-24 h-[2px] bg-[#8B5E3C]/20 rotate-12"></div>
        <div className="absolute bottom-[20%] left-[12%] w-16 h-16 border border-[#8B5E3C]/10 rounded-full"></div>
        <div className="absolute top-[22%] right-[14%] w-20 h-20 border border-[#8B5E3C]/10 rotate-45"></div>
      </div>

      {/* 📦 Main Layout */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ✍ LEFT CONTENT */}
          <div>

            <p className="uppercase tracking-[0.35em] text-[11px] text-[#A67C52] mb-6 font-medium">
              Norwich Independent Carpenter • 35+ Years Experience
            </p>

            <h1
              className="text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.03em] text-[#5C3A21]"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Crafted woodwork,
              <br />
              built to last.
            </h1>

            <p className="mt-8 text-[#6B4F3A] text-lg leading-relaxed max-w-xl">
              Bespoke carpentry, trusted craftsmanship, and over three decades
              of experience delivering beautiful work across Norwich.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <button className="bg-[#5C3A21] text-white px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[#4a2f1a] transition shadow-lg">
                Request a Quote
              </button>

              <button className="border border-[#5C3A21]/20 text-[#5C3A21] px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[#5C3A21]/5 transition">
                View Projects
              </button>

            </div>

            {/* Trust stats */}
            <div className="mt-14 grid grid-cols-3 gap-8 max-w-lg border-t border-[#5C3A21]/10 pt-8">

              <div>
                <p className="text-3xl text-[#5C3A21]" style={{ fontFamily: "Fraunces, serif" }}>
                  35+
                </p>
                <p className="text-sm text-[#6B4F3A] mt-1">Years Experience</p>
              </div>

              <div>
                <p className="text-3xl text-[#5C3A21]" style={{ fontFamily: "Fraunces, serif" }}>
                  Norwich
                </p>
                <p className="text-sm text-[#6B4F3A] mt-1">Based & Trusted</p>
              </div>

              <div>
                <p className="text-3xl text-[#5C3A21]" style={{ fontFamily: "Fraunces, serif" }}>
                  Bespoke
                </p>
                <p className="text-sm text-[#6B4F3A] mt-1">Craftsmanship</p>
              </div>

            </div>
          </div>

          {/* 🖼 RIGHT IMAGE */}
          <div className="relative">

            {/* Main image card */}
            <div className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(92,58,33,0.18)]">
              <img
                src={HeroImg}
                alt="ML Carpentry Norwich"
                className="w-full h-[650px] object-cover"
              />
            </div>

            {/* Floating premium card */}
            <div className="absolute -bottom-8 -left-8 bg-[#EFE4D3]/95 backdrop-blur-md p-6 rounded-[24px] shadow-xl border border-[#5C3A21]/10 max-w-xs">
              <p className="text-sm uppercase tracking-[0.25em] text-[#A67C52] mb-2">
                Since Experience Matters
              </p>
              <p className="text-[#5C3A21] leading-relaxed">
                Precision joinery, custom interiors, and dependable craftsmanship shaped over decades.
              </p>
            </div>

            {/* Decorative border */}
            <div className="absolute inset-0 rounded-[32px] ring-1 ring-[#5C3A21]/10 pointer-events-none"></div>

          </div>

        </div>
      </div>
    </section>
  );
}