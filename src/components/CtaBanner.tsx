import ScrollReveal from "./ScrollReveal";

export default function CtaBanner() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <ScrollReveal>
        <div className="mx-auto max-w-4xl rounded-3xl border border-petal/30 bg-gradient-to-br from-cream via-blush/30 to-petal/20 backdrop-blur-sm p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-rose/8 blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-bloom/15 blur-[80px]" />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-plum/80">
              Ready to transform your business?
            </h2>
            <p className="mt-3 text-[14px] text-plum/30">
              Book a free consultation and discover how we can help you grow.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose to-pink px-8 py-3 text-[13px] font-medium text-white shadow-lg shadow-rose/20 hover:shadow-xl hover:shadow-rose/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Schedule a Call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="mailto:hello@aksassociates.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-plum/8 bg-white/40 px-8 py-3 text-[13px] font-medium text-plum/50 hover:text-plum/70 hover:border-petal transition-all duration-300"
              >
                hello@aksassociates.com
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
