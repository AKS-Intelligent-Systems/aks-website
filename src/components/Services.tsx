import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Corporate Advisory",
    description:
      "End-to-end corporate structuring, governance frameworks, and strategic advisory for organisations at every stage.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    title: "Legal Compliance",
    description:
      "Navigate complex regulatory landscapes with confidence across jurisdictions and industries.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Business Strategy",
    description:
      "Data-driven strategic planning that aligns your vision with market realities and growth trajectories.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Financial Consulting",
    description:
      "Comprehensive financial advisory covering fund raises, restructuring, and tax optimisation.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Dispute Resolution",
    description:
      "Expert mediation and arbitration services that resolve commercial disputes while preserving relationships.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: "Mergers & Acquisitions",
    description:
      "Seamless M&A execution from due diligence to post-merger integration, protecting your interests at every step.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <path d="M11 18H8a2 2 0 0 1-2-2V9" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-petal/50 to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[11px] font-medium text-rose/60 tracking-[0.2em] uppercase mb-4">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-plum/80">
              Comprehensive solutions
            </h2>
            <p className="mt-3 text-[15px] text-plum/30 leading-relaxed">
              Deep expertise across legal, financial, and strategic disciplines
              to serve your business holistically.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <div className="group rounded-2xl border border-petal/20 bg-white/30 backdrop-blur-sm p-7 hover:bg-white/60 hover:border-petal/40 hover:shadow-lg hover:shadow-rose/5 hover:-translate-y-1 transition-all duration-300">
                <div className="h-10 w-10 rounded-xl bg-cream/80 flex items-center justify-center text-rose/60 group-hover:bg-rose/10 group-hover:text-rose transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="mt-5 text-[15px] font-semibold text-plum/70">
                  {service.title}
                </h3>
                <p className="mt-2 text-[13px] text-plum/30 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
