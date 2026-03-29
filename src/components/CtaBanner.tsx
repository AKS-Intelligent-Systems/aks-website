import ScrollReveal from "./ScrollReveal";

export default function CtaBanner() {
  return (
    <section className="border-t border-bloom/20 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="rounded-2xl bg-plum px-8 sm:px-10 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h2 className="text-[20px] sm:text-[24px] font-bold text-white leading-tight tracking-[-0.01em]">
                Ready to transform your business?
              </h2>
              <p className="text-[13px] text-white/55 mt-1">
                Free consultation · No obligations · Results-driven approach
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-plum text-[14px] font-semibold rounded-xl hover:bg-white/90 transition-colors shrink-0 shadow-lg shadow-white/10"
            >
              Schedule a Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
