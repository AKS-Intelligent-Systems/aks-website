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
  "L&T",
  "HDFC Bank",
];

export default function Partners() {
  const doubled = [...partners, ...partners];

  return (
    <section id="partners" className="border-t border-blush/50 py-14 px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <p className="text-center text-[11px] font-medium text-plum/40 tracking-[0.2em] uppercase mb-10">
          Trusted by industry leaders
        </p>
      </ScrollReveal>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="marquee-strip flex items-center gap-14 w-max">
          {doubled.map((partner, i) => (
            <span
              key={`${partner}-${i}`}
              className="text-[16px] font-semibold text-plum/20 hover:text-plum/40 transition-colors duration-300 whitespace-nowrap select-none"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
