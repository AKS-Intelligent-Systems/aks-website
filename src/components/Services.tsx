import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Corporate Advisory",
    description: "End-to-end corporate structuring, governance, and strategic advisory for organisations at every stage.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>,
  },
  {
    title: "Legal Compliance",
    description: "Navigate complex regulatory landscapes with confidence across jurisdictions and industries.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    title: "Business Strategy",
    description: "Data-driven strategic planning that aligns your vision with market realities and growth trajectories.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  },
  {
    title: "Financial Consulting",
    description: "Comprehensive financial advisory covering fund raises, restructuring, and tax optimisation.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  },
  {
    title: "Dispute Resolution",
    description: "Expert mediation and arbitration services that resolve commercial disputes efficiently.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
  },
  {
    title: "Mergers & Acquisitions",
    description: "Seamless M&A execution from due diligence to post-merger integration.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M11 18H8a2 2 0 0 1-2-2V9"/></svg>,
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-blush/50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="text-[24px] sm:text-[30px] font-bold text-plum leading-[1.2] tracking-[-0.02em] mb-14 max-w-md">
            Built for businesses who demand excellence.
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {/* Top row — 2 accent cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.slice(0, 2).map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className="rounded-2xl bg-plum p-8 sm:p-10">
                  <div className="text-white/50 mb-6">{s.icon}</div>
                  <h3 className="text-[18px] font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-[13px] text-white/55 leading-[1.7]">{s.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom row — 4 light cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.slice(2).map((s, i) => (
              <ScrollReveal key={s.title} delay={(i + 2) * 80}>
                <div className="rounded-2xl border border-blush/60 bg-white p-6 hover:border-rose/30 hover:shadow-md transition-all duration-300">
                  <div className="text-rose/70 mb-4">{s.icon}</div>
                  <h3 className="text-[14px] font-semibold text-plum mb-1">{s.title}</h3>
                  <p className="text-[12px] text-plum/50 leading-[1.65]">{s.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
