import ScrollReveal from "./ScrollReveal";

const partners = [
  "Reliance Industries",
  "Tata Group",
  "Infosys",
  "Wipro",
  "Mahindra",
  "Adani Group",
  "Bajaj Finserv",
  "Godrej",
  "Larsen & Toubro",
  "HDFC Bank",
];

export default function Partners() {
  const doubled = [...partners, ...partners];

  return (
    <section id="partners" className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-petal/40 to-transparent" />

      <ScrollReveal>
        <p className="text-center text-[11px] font-medium text-plum/25 tracking-[0.2em] uppercase mb-12">
          Trusted by industry leaders
        </p>
      </ScrollReveal>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="marquee-track flex items-center gap-16 w-max">
          {doubled.map((partner, i) => (
            <span
              key={`${partner}-${i}`}
              className="text-lg font-semibold text-plum/10 hover:text-plum/25 transition-colors duration-300 whitespace-nowrap select-none"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
