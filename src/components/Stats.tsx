import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Retention" },
  { value: "50+", label: "Industries" },
];

export default function Stats() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center rounded-2xl border border-petal/30 bg-white/40 backdrop-blur-sm p-6"
                style={{
                  animationDelay: `${i * 100}ms`,
                }}
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-rose to-mauve bg-clip-text text-transparent tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-[11px] font-medium text-plum/30 tracking-[0.15em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
