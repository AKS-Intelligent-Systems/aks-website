import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "500+", label: "Clients" },
  { value: "15+", label: "Years" },
  { value: "98%", label: "Retention" },
  { value: "50+", label: "Industries" },
];

export default function Stats() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-bloom/25 bg-cream/40 backdrop-blur-sm px-5 py-5 text-center"
              >
                <p className="text-[22px] sm:text-[26px] font-bold text-plum/80 tracking-tight leading-none">
                  {stat.value}
                </p>
                <p className="text-[11px] text-plum/30 mt-2 font-medium uppercase tracking-[0.15em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
