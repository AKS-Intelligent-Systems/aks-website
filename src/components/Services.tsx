import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Custom AI Solutions",
    description: "Purpose-built AI systems designed around your specific business challenges. Not off-the-shelf products, but tailored solutions that deliver measurable results.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>,
  },
  {
    title: "Workflow Automation",
    description: "Identify bottlenecks in your operations and replace manual, error-prone processes with intelligent automation systems built for reliability and scale.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  },
  {
    title: "Enterprise AI Systems",
    description: "Production-grade AI infrastructure that integrates into your existing tech stack and operational workflows.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  },
  {
    title: "Process Optimization",
    description: "Map, measure, and re-engineer your business processes for maximum efficiency using AI-driven insights.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  },
  {
    title: "Operational Dashboards",
    description: "Real-time visibility into your operations with custom dashboards that surface the metrics that matter.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  },
  {
    title: "Document & Data Automation",
    description: "Automate document processing, data extraction, and information workflows with AI-powered pipelines.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  },
  {
    title: "AI Consulting & Implementation",
    description: "End-to-end AI advisory, from identifying the right opportunities to deploying working systems within your operations.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-blush/50 py-14 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-[11px] font-medium text-rose tracking-[0.2em] uppercase mb-3 sm:mb-4">
            What We Do
          </p>
          <h2 className="text-[22px] sm:text-[30px] font-bold text-plum leading-[1.2] tracking-[-0.02em] mb-3 sm:mb-4 max-w-lg">
            AI-led solutions for real operational problems.
          </h2>
          <p className="text-[13px] sm:text-[14px] text-plum/50 leading-[1.7] max-w-md mb-10 sm:mb-14">
            We help enterprises identify workflow bottlenecks, design AI-led solutions, and implement custom automation systems tailored to business needs.
          </p>
        </ScrollReveal>

        <div className="space-y-3 sm:space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {services.slice(0, 2).map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className="rounded-2xl bg-plum p-6 sm:p-8 lg:p-10">
                  <div className="text-white/50 mb-4 sm:mb-6">{s.icon}</div>
                  <h3 className="text-[16px] sm:text-[18px] font-semibold text-white mb-1.5 sm:mb-2">{s.title}</h3>
                  <p className="text-[12px] sm:text-[13px] text-white/55 leading-[1.7]">{s.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {services.slice(2, 5).map((s, i) => (
              <ScrollReveal key={s.title} delay={(i + 2) * 80}>
                <div className="rounded-2xl border border-blush/60 bg-white p-5 sm:p-6 hover:border-rose/30 hover:shadow-md transition-all duration-300">
                  <div className="text-rose/70 mb-3 sm:mb-4">{s.icon}</div>
                  <h3 className="text-[13px] sm:text-[14px] font-semibold text-plum mb-1">{s.title}</h3>
                  <p className="text-[11px] sm:text-[12px] text-plum/50 leading-[1.65]">{s.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {services.slice(5).map((s, i) => (
              <ScrollReveal key={s.title} delay={(i + 5) * 80}>
                <div className="rounded-2xl border border-blush/60 bg-white p-5 sm:p-6 hover:border-rose/30 hover:shadow-md transition-all duration-300">
                  <div className="text-rose/70 mb-3 sm:mb-4">{s.icon}</div>
                  <h3 className="text-[13px] sm:text-[14px] font-semibold text-plum mb-1">{s.title}</h3>
                  <p className="text-[11px] sm:text-[12px] text-plum/50 leading-[1.65]">{s.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
