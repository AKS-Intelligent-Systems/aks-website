import ScrollReveal from "./ScrollReveal";

const reasons = [
  {
    title: "Deployment-Focused",
    desc: "We don't just consult, we build and deploy. Every solution ships to production with clear timelines.",
  },
  {
    title: "Business-Specific",
    desc: "No generic AI. We solve your specific operational problems with systems tailored to your workflows.",
  },
  {
    title: "Measurable Impact",
    desc: "Every engagement is tied to operational metrics: efficiency gains, cost reduction, speed improvements.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-blush/50 py-14 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="max-w-2xl mb-10 sm:mb-14">
            <p className="text-[11px] font-medium text-rose tracking-[0.2em] uppercase mb-3 sm:mb-4">
              About Us
            </p>
            <h2 className="text-[22px] sm:text-[30px] font-bold text-plum leading-[1.2] tracking-[-0.02em] mb-3 sm:mb-4">
              Practical AI. Real outcomes.
            </h2>
            <p className="text-[13px] sm:text-[14px] text-plum/50 leading-[1.7]">
              AKS Intelligent Systems LLP is an AI consultancy that builds custom AI,
              automation, and efficiency solutions for enterprises. We solve
              business-specific operational problems through high-quality,
              deployment-focused systems built for speed, scale, and practical impact.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-[11px] font-medium text-rose tracking-[0.2em] uppercase mb-4 sm:mb-6">
            Why Choose Us
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 120}>
              <div
                className={`flex items-start gap-3 sm:gap-4 py-6 sm:py-8 md:px-6 lg:px-8 ${
                  i < reasons.length - 1
                    ? "border-b md:border-b-0 md:border-r border-blush/50"
                    : ""
                } ${i === 0 ? "md:pl-0" : ""}`}
              >
                <span className="text-[32px] sm:text-[42px] font-bold text-rose/30 leading-none shrink-0">
                  {i + 1}
                </span>
                <div className="pt-0.5 sm:pt-1">
                  <h3 className="text-[14px] sm:text-[16px] font-semibold text-plum mb-1 sm:mb-1.5">
                    {r.title}
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-plum/50 leading-[1.7]">
                    {r.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
