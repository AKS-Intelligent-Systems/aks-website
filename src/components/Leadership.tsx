import ScrollReveal from "./ScrollReveal";

const team = [
  {
    name: "Avnish Kumar",
    role: "Designated Partner",
    description: "Leads strategic direction and organizational oversight.",
    initials: "AK",
    color: "bg-plum",
  },
  {
    name: "Sudesh",
    role: "Designated Partner",
    description: "Supports business leadership and institutional development.",
    initials: "SD",
    color: "bg-mauve",
  },
  {
    name: "Piyush Gupta",
    role: "Head of Operations",
    description: "Leads operations, execution, and deployment coordination.",
    initials: "PG",
    color: "bg-rose",
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="scroll-mt-20 border-t border-blush/50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-[11px] font-medium text-rose tracking-[0.2em] uppercase mb-4">
            Leadership Team
          </p>
          <h2 className="text-[24px] sm:text-[30px] font-bold text-plum leading-[1.2] tracking-[-0.02em] mb-14 max-w-md">
            The people behind the systems.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 100}>
              <div className="rounded-2xl border border-blush/60 bg-white p-7 text-center hover:border-rose/30 hover:shadow-md transition-all duration-300">
                <div
                  className={`h-14 w-14 rounded-full ${member.color} mx-auto flex items-center justify-center mb-4`}
                >
                  <span className="text-[16px] font-bold text-white">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-[15px] font-semibold text-plum">
                  {member.name}
                </h3>
                <p className="text-[12px] font-medium text-rose mt-0.5">
                  {member.role}
                </p>
                <p className="text-[12px] text-plum/45 mt-3 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
