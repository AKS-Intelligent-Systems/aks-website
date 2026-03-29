"use client";

import { useEffect, useState } from "react";

const words = ["Efficiency", "Automation", "Intelligence", "Scale"];

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
      <div className="dot-grid-bg pointer-events-none absolute inset-0 opacity-[0.03]" />

      <div
        className="pointer-events-none absolute -top-20 right-0 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-petal/50 via-blush/30 to-transparent blur-3xl"
        style={{ animation: "gentle-pulse 10s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-bloom/60 to-transparent blur-3xl"
        style={{ animation: "gentle-pulse 12s ease-in-out 3s infinite" }}
      />

      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
        <div className="flex-1 min-w-0">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-blush bg-white/80 backdrop-blur-sm px-4 py-1.5 mb-8 shadow-sm">
            <div className="h-2 w-2 rounded-full bg-rose animate-pulse" />
            <span className="text-[12px] font-semibold text-plum/70">
              AI-Powered Enterprise Solutions
            </span>
          </div>

          <h1 className="text-[38px] sm:text-[50px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.03em] text-plum mb-2">
            Building
            <br />
            <span
              className="inline-block text-rose"
              style={{
                opacity: fade ? 1 : 0,
                transform: fade ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              {words[wordIndex]}.
            </span>
          </h1>

          <p className="text-[15px] sm:text-[16px] text-plum/55 leading-[1.75] max-w-md mb-10">
            We build custom AI, automation, and efficiency solutions for
            enterprises — solving real operational problems with systems built
            for speed, scale, and practical impact.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-plum text-white text-[14px] font-semibold rounded-xl hover:bg-plum/85 transition-colors shadow-md shadow-plum/10"
            >
              Talk to Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-plum text-[14px] font-semibold rounded-xl border border-plum/15 bg-white/60 hover:bg-white hover:border-plum/25 transition-colors"
            >
              What We Do
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2">
            {["Deployment-focused", "Measurable outcomes", "Enterprise-grade"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-[12px] text-plum/50">
                <svg className="h-3.5 w-3.5 text-rose shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right — AI dashboard mockup */}
        <div className="w-full lg:w-[440px] lg:shrink-0 relative py-8 lg:py-6">
          <div
            className="pointer-events-none absolute inset-0 -m-6 rounded-3xl bg-gradient-to-br from-petal/40 via-blush/20 to-bloom/30 blur-2xl"
            style={{ animation: "gentle-pulse 8s ease-in-out infinite" }}
          />

          <div className="relative rounded-2xl border border-blush/80 bg-white shadow-[0_16px_60px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-blush/50 bg-bloom/40">
              <div className="h-2.5 w-2.5 rounded-full bg-rose/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-petal" />
              <div className="h-2.5 w-2.5 rounded-full bg-blush" />
              <div className="ml-3 flex-1 h-5 rounded-md bg-blush/30 flex items-center justify-center">
                <span className="text-[9px] font-medium text-plum/40 tracking-wide">aksisys.com/dashboard</span>
              </div>
            </div>

            <div className="p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-plum/45 uppercase tracking-wider font-medium">Process Efficiency</p>
                  <p className="text-[22px] font-bold text-plum mt-0.5">94.2%</p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M18 15l-6-6-6 6"/></svg>
                    +18.3%
                  </span>
                  <p className="text-[10px] text-plum/40 mt-0.5">vs. Manual</p>
                </div>
              </div>

              <div className="flex items-end gap-1.5 h-16">
                {[35, 45, 30, 55, 40, 65, 50, 70, 60, 80, 72, 88].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-rose/40 to-rose/15"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              <div className="space-y-2 pt-2">
                {[
                  { name: "Document Processing", status: "Automated", color: "bg-rose" },
                  { name: "Workflow Engine", status: "Active", color: "bg-mauve" },
                  { name: "Data Pipeline", status: "Deploying", color: "bg-petal" },
                ].map((s) => (
                  <div key={s.name} className="flex items-center justify-between py-1.5">
                    <div className="flex items-center gap-2">
                      <div className={`h-1.5 w-1.5 rounded-full ${s.color}`} />
                      <span className="text-[11px] font-medium text-plum/70">{s.name}</span>
                    </div>
                    <span className="text-[10px] font-medium text-plum/40">{s.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating — automation stat */}
          <div
            className="absolute -bottom-4 -left-3 lg:-left-6 z-10 w-52 rounded-xl border border-blush/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-4"
            style={{ animation: "float-a 4s ease-in-out infinite" }}
          >
            <div className="flex items-center gap-1.5 mb-2">
              <svg className="h-3.5 w-3.5 text-rose" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              <span className="text-[10px] font-bold text-plum/60 uppercase tracking-wider">Automation</span>
            </div>
            <p className="text-[18px] font-bold text-plum">3.2x faster</p>
            <p className="text-[10px] text-plum/45 mt-0.5">Average process acceleration</p>
          </div>

          {/* Floating — AI badge */}
          <div
            className="absolute -top-3 -right-2 lg:-right-5 z-10 w-40 rounded-xl border border-blush/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-4"
            style={{ animation: "float-b 5s ease-in-out 1s infinite" }}
          >
            <div className="flex items-center gap-1.5 mb-2">
              <svg className="h-3.5 w-3.5 text-rose" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4zM16 15a4 4 0 0 1 4 4v2H4v-2a4 4 0 0 1 4-4h8z" />
              </svg>
              <span className="text-[10px] font-bold text-plum/60 uppercase tracking-wider">AI Models</span>
            </div>
            <p className="text-[18px] font-bold text-plum">Custom</p>
            <p className="text-[10px] text-plum/45 mt-0.5">Built per use case</p>
          </div>
        </div>
      </div>
    </section>
  );
}
