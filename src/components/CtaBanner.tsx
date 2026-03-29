import ScrollReveal from "./ScrollReveal";

export default function CtaBanner() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-blush/50 py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="rounded-2xl bg-plum px-6 sm:px-10 py-8 sm:py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
            <div>
              <h2 className="text-[18px] sm:text-[24px] font-bold text-white leading-tight tracking-[-0.01em]">
                Let&apos;s solve your operational challenges.
              </h2>
              <p className="text-[12px] sm:text-[13px] text-white/50 mt-2 leading-relaxed">
                Reach out to discuss how AI and automation can transform your workflows.
              </p>
              <div className="mt-3 sm:mt-4 space-y-1.5">
                <a
                  href="mailto:info@aksisys.com"
                  className="flex items-center gap-2 text-[12px] sm:text-[13px] text-white/70 hover:text-white transition-colors"
                >
                  <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  info@aksisys.com
                </a>
                <a
                  href="mailto:piyush@aksisys.com"
                  className="flex items-center gap-2 text-[12px] sm:text-[13px] text-white/70 hover:text-white transition-colors"
                >
                  <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  piyush@aksisys.com
                </a>
              </div>
            </div>
            <a
              href="mailto:info@aksisys.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-plum text-[14px] font-semibold rounded-xl hover:bg-bloom transition-colors shrink-0 w-full sm:w-auto"
            >
              Get in Touch
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
