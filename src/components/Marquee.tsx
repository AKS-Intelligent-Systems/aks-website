const items = [
  "Custom AI Solutions",
  "Workflow Automation",
  "Enterprise AI Systems",
  "Process Optimization",
  "Operational Dashboards",
  "Document Automation",
  "Data Automation",
  "AI Consulting & Implementation",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <section className="border-y border-blush/60 py-4 sm:py-5 overflow-hidden bg-bloom/30">
      <div className="marquee-strip flex w-max gap-4 sm:gap-6">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-3 sm:gap-4 shrink-0">
            <span className="text-[12px] sm:text-[15px] font-semibold text-plum/60 whitespace-nowrap">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-rose/50" />
          </span>
        ))}
      </div>
    </section>
  );
}
