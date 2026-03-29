import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    n: "1",
    title: "Consult",
    desc: "We listen deeply, understand your challenges, and map out a tailored strategy for your organisation.",
  },
  {
    n: "2",
    title: "Execute",
    desc: "Our multidisciplinary team implements solutions across legal, financial, and strategic dimensions.",
  },
  {
    n: "3",
    title: "Grow",
    desc: "We stay by your side as a long-term partner, adapting strategy as your business evolves and scales.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-blush/50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <p className="text-[11px] font-medium text-rose tracking-[0.2em] uppercase mb-4">
              How We Work
            </p>
            <h2 className="text-[24px] sm:text-[30px] font-bold text-plum leading-[1.2] tracking-[-0.02em] mb-4">
              Three steps to lasting impact.
            </h2>
            <p className="text-[14px] text-plum/50 leading-[1.7] max-w-md">
              We bring together deep expertise across legal, financial, and
              strategic disciplines to serve your business holistically.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <ScrollReveal key={step.n} delay={i * 120}>
              <div
                className={`flex items-start gap-4 py-8 md:px-8 ${
                  i < steps.length - 1
                    ? "border-b md:border-b-0 md:border-r border-blush/50"
                    : ""
                } ${i === 0 ? "md:pl-0" : ""}`}
              >
                <span className="text-[36px] sm:text-[42px] font-bold text-rose/30 leading-none shrink-0">
                  {step.n}
                </span>
                <div className="pt-1">
                  <h3 className="text-[16px] font-semibold text-plum mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-plum/50 leading-[1.7]">
                    {step.desc}
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
