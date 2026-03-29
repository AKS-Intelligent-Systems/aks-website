"use client";

import { useEffect, useState } from "react";

const words = ["Businesses", "Futures", "Growth", "Vision"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(242, 187, 201, 0.4) 0%, transparent 50%), " +
              "radial-gradient(ellipse at 80% 20%, rgba(242, 119, 141, 0.15) 0%, transparent 50%), " +
              "radial-gradient(ellipse at 60% 80%, rgba(242, 182, 193, 0.3) 0%, transparent 50%), " +
              "radial-gradient(ellipse at 30% 20%, rgba(191, 122, 148, 0.08) 0%, transparent 50%)",
            animation: "mesh-shift 20s ease-in-out infinite",
            backgroundSize: "200% 200%",
          }}
        />
        {/* Soft blurred orbs */}
        <div
          className="absolute top-[15%] left-[10%] w-[350px] h-[350px] rounded-full bg-petal/30 blur-[100px]"
          style={{ animation: "gentle-pulse 8s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] rounded-full bg-bloom/25 blur-[120px]"
          style={{ animation: "gentle-pulse 10s ease-in-out 2s infinite" }}
        />
        <div
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-rose/8 blur-[150px]"
          style={{ animation: "gentle-pulse 12s ease-in-out 4s infinite" }}
        />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-8 pt-32 pb-24 text-center relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-petal/50 bg-cream/60 backdrop-blur-sm px-4 py-1.5 mb-10">
          <div className="h-1.5 w-1.5 rounded-full bg-rose animate-pulse" />
          <span className="text-[11px] font-medium text-mauve/70 tracking-[0.15em] uppercase">
            Trusted Advisory since 2010
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-bold tracking-[-0.03em] text-plum/85 leading-[1]">
          Empowering
          <br />
          <span
            className="inline-block text-rose transition-all duration-400"
            style={{
              opacity: fade ? 1 : 0,
              transform: fade ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            {words[wordIndex]}
          </span>
          <span className="text-plum/85">.</span>
        </h1>

        <p className="mt-8 max-w-lg mx-auto text-[15px] sm:text-base text-plum/35 leading-relaxed">
          Strategic consulting and legal advisory for modern enterprises.
          We partner with ambitious organisations to build lasting value.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose to-pink px-7 py-3 text-[13px] font-medium text-white shadow-lg shadow-rose/20 hover:shadow-xl hover:shadow-rose/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Schedule a Consultation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-plum/8 bg-white/40 backdrop-blur-sm px-7 py-3 text-[13px] font-medium text-plum/50 hover:text-plum/70 hover:border-petal hover:bg-white/60 transition-all duration-300"
          >
            Explore Services
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center">
          <div className="w-5 h-8 rounded-full border border-plum/10 flex justify-center pt-1.5">
            <div
              className="w-1 h-2 rounded-full bg-rose/40"
              style={{
                animation: "float-drift 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
