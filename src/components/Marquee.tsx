const items = [
  "Corporate Advisory",
  "Legal Compliance",
  "Business Strategy",
  "Financial Consulting",
  "Dispute Resolution",
  "Mergers & Acquisitions",
  "Tax Optimisation",
  "Regulatory Affairs",
  "Fund Raising",
  "IP Protection",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <section className="border-y border-bloom/25 py-5 overflow-hidden bg-cream/30">
      <div className="marquee-strip flex w-max gap-6">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-4 shrink-0">
            <span className="text-[14px] sm:text-[15px] font-semibold text-plum/50 whitespace-nowrap">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-rose/30" />
          </span>
        ))}
      </div>
    </section>
  );
}
