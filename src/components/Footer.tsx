const footerLinks = {
  Services: [
    "Corporate Advisory",
    "Legal Compliance",
    "Business Strategy",
    "Financial Consulting",
  ],
  Company: ["About", "Team", "Careers", "Contact"],
  Resources: ["Blog", "Case Studies", "FAQs"],
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-petal/20 bg-cream/50"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-rose to-mauve flex items-center justify-center">
                <span className="text-white font-bold text-xs">A</span>
              </div>
              <span className="text-sm font-semibold text-plum/60 tracking-tight">
                AKS & Associates
              </span>
            </div>
            <p className="mt-4 text-[12px] text-plum/25 leading-relaxed max-w-xs">
              A multidisciplinary professional services firm empowering
              businesses with strategic consulting, legal advisory, and
              growth solutions.
            </p>
            <div className="mt-5 flex gap-4">
              {["LinkedIn", "Twitter", "Email"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-[11px] font-medium text-plum/20 hover:text-rose/60 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[11px] font-semibold text-plum/40 tracking-[0.1em] uppercase">
                {category}
              </h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[12px] text-plum/25 hover:text-rose/60 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-petal/15 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-plum/15">
            &copy; {new Date().getFullYear()} AKS & Associates LLP. All rights
            reserved.
          </p>
          <div className="flex gap-5">
            <a
              href="#"
              className="text-[11px] text-plum/15 hover:text-plum/30 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[11px] text-plum/15 hover:text-plum/30 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
