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
    <section className="relative px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-20 sm:pb-28 overflow-x-clip">
      {/* Dot grid background */}
      <div className="dot-grid-bg pointer-events-none absolute inset-0 opacity-[0.06]" />

      {/* Gradient orbs */}
      <div
        className="pointer-events-none absolute -top-20 right-0 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-bloom/40 via-petal/25 to-transparent blur-3xl"
        style={{ animation: "gentle-pulse 10s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-cream/50 to-transparent blur-3xl"
        style={{ animation: "gentle-pulse 12s ease-in-out 3s infinite" }}
      />

      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
        {/* ── Left — copy ── */}
        <div className="flex-1 min-w-0">
          {/* Social proof pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-bloom/40 bg-cream/60 backdrop-blur-sm px-4 py-1.5 mb-8">
            <div className="flex -space-x-1.5">
              <div className="h-5 w-5 rounded-full bg-rose border-2 border-background flex items-center justify-center text-[8px] font-bold text-white">A</div>
              <div className="h-5 w-5 rounded-full bg-mauve border-2 border-background flex items-center justify-center text-[8px] font-bold text-white">K</div>
              <div className="h-5 w-5 rounded-full bg-plum border-2 border-background flex items-center justify-center text-[8px] font-bold text-white">S</div>
            </div>
            <span className="text-[12px] font-semibold text-plum/80">
              Trusted by 500+ organisations
            </span>
          </div>

          <h1 className="hero-headline-shimmer text-[38px] sm:text-[50px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.03em] mb-2">
            Empowering
            <br />
            <span
              className="inline-block"
              style={{
                opacity: fade ? 1 : 0,
                transform: fade ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              {words[wordIndex]}.
            </span>
          </h1>

          <p className="text-[15px] sm:text-[16px] text-plum/70 leading-[1.75] max-w-md mb-10">
            Strategic consulting and legal advisory for modern enterprises.
            We partner with ambitious organisations to build lasting value.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-plum text-white text-[14px] font-semibold rounded-xl hover:bg-plum/80 transition-colors shadow-md shadow-plum/15"
            >
              Schedule a Consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-plum/80 text-[14px] font-semibold rounded-xl border border-bloom/50 bg-white/40 hover:bg-white/70 hover:border-bloom/70 transition-colors"
            >
              Explore Services
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2">
            {["15+ years of expertise", "98% client retention", "Pan-India presence"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-[12px] text-plum/60">
                <svg className="h-3.5 w-3.5 text-rose shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right — layered service mockup ── */}
        <div className="w-full lg:w-[440px] lg:shrink-0 relative py-8 lg:py-6">
          {/* Glow ring */}
          <div
            className="pointer-events-none absolute inset-0 -m-6 rounded-3xl bg-gradient-to-br from-bloom/30 via-petal/15 to-cream/20 blur-2xl"
            style={{ animation: "gentle-pulse 8s ease-in-out infinite" }}
          />

          {/* Main card */}
          <div className="relative rounded-2xl border border-bloom/40 bg-white/60 backdrop-blur-sm shadow-[0_16px_60px_rgba(89,66,70,0.12)] overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-bloom/30 bg-cream/70">
              <div className="h-2.5 w-2.5 rounded-full bg-rose/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-petal" />
              <div className="h-2.5 w-2.5 rounded-full bg-bloom/70" />
              <div className="ml-3 flex-1 h-5 rounded-md bg-bloom/25 flex items-center justify-center">
                <span className="text-[9px] font-medium text-plum/50 tracking-wide">aksassociates.com</span>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-plum/55 uppercase tracking-wider font-medium">Portfolio Overview</p>
                  <p className="text-[22px] font-bold text-plum mt-0.5">₹248 Cr</p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M7 17l5-5 5 5M7 7l5 5 5-5"/></svg>
                    +23.5%
                  </span>
                  <p className="text-[10px] text-plum/50 mt-0.5">YoY Growth</p>
                </div>
              </div>

              {/* Mini chart bars */}
              <div className="flex items-end gap-1.5 h-16">
                {[35, 45, 30, 55, 40, 65, 50, 70, 60, 80, 55, 75].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-rose/50 to-rose/20"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              {/* Services list */}
              <div className="space-y-2 pt-2">
                {[
                  { name: "Corporate Advisory", status: "Active", color: "bg-rose" },
                  { name: "Legal Compliance", status: "Active", color: "bg-mauve" },
                  { name: "M&A Due Diligence", status: "In Progress", color: "bg-petal" },
                ].map((s) => (
                  <div key={s.name} className="flex items-center justify-between py-1.5">
                    <div className="flex items-center gap-2">
                      <div className={`h-1.5 w-1.5 rounded-full ${s.color}`} />
                      <span className="text-[11px] font-medium text-plum/80">{s.name}</span>
                    </div>
                    <span className="text-[10px] font-medium text-plum/50">{s.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating card — bottom-left: testimonial */}
          <div
            className="absolute -bottom-4 -left-3 lg:-left-6 z-10 w-56 rounded-xl border border-bloom/40 bg-white/80 backdrop-blur-sm shadow-[0_8px_30px_rgba(89,66,70,0.14)] p-4"
            style={{ animation: "float-a 4s ease-in-out infinite" }}
          >
            <div className="flex items-center gap-2 mb-2.5">
              <div className="h-7 w-7 rounded-full bg-mauve flex items-center justify-center text-[10px] font-bold text-white">R</div>
              <div>
                <p className="text-[11px] font-semibold text-plum/90">Rahul Mehta</p>
                <p className="text-[9px] text-plum/55">CEO, TechVentures</p>
              </div>
            </div>
            <p className="text-[11px] text-plum/65 leading-snug italic">
              &ldquo;AKS transformed our compliance framework. Exceptional service.&rdquo;
            </p>
            <div className="flex gap-0.5 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="h-3 w-3 text-rose" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Floating card — top-right: quick stat */}
          <div
            className="absolute -top-3 -right-2 lg:-right-5 z-10 w-44 rounded-xl border border-bloom/40 bg-white/80 backdrop-blur-sm shadow-[0_8px_30px_rgba(89,66,70,0.14)] p-4"
            style={{ animation: "float-b 5s ease-in-out 1s infinite" }}
          >
            <div className="flex items-center gap-1.5 mb-2">
              <svg className="h-3.5 w-3.5 text-rose" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-[10px] font-bold text-plum/65 uppercase tracking-wider">Compliance</span>
            </div>
            <p className="text-[20px] font-bold text-plum">100%</p>
            <p className="text-[10px] text-plum/55 mt-0.5">Audit pass rate</p>
            <div className="mt-2.5 h-1.5 rounded-full bg-bloom/30 overflow-hidden">
              <div className="h-full w-full rounded-full bg-gradient-to-r from-rose to-mauve" />
            </div>
          </div>

          {/* Floating pill — bottom-right */}
          <div
            className="absolute -bottom-2 right-3 lg:right-0 z-10 flex items-center gap-2 rounded-full border border-bloom/40 bg-white/80 backdrop-blur-sm shadow-lg pl-2 pr-4 py-1.5"
            style={{ animation: "float-b 6s ease-in-out 2s infinite" }}
          >
            <div className="flex -space-x-1">
              <div className="h-5 w-5 rounded-full bg-plum border-2 border-cream flex items-center justify-center text-[8px] font-bold text-white">M</div>
              <div className="h-5 w-5 rounded-full bg-mauve border-2 border-cream flex items-center justify-center text-[8px] font-bold text-white">S</div>
              <div className="h-5 w-5 rounded-full bg-rose border-2 border-cream flex items-center justify-center text-[8px] font-bold text-white">A</div>
            </div>
            <span className="text-[10px] text-plum/60"><span className="font-bold text-plum/80">50+</span> advisors</span>
          </div>
        </div>
      </div>
    </section>
  );
}
