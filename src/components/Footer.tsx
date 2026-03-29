export default function Footer() {
  return (
    <footer className="border-t border-blush/50 px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-5 w-5 rounded bg-rose flex items-center justify-center">
                <span className="text-[8px] font-bold text-white leading-none">A</span>
              </div>
              <span className="text-[13px] sm:text-[14px] font-bold text-plum">
                AKS Intelligent Systems LLP
              </span>
            </div>
            <p className="text-[11px] sm:text-[12px] text-plum/40 leading-relaxed max-w-xs">
              602, Sector 84, Antriksh Heights, Tower-AI,
              <br />
              Narsinghpur, Gurgaon, 122004, Haryana, India
            </p>
          </div>

          <div>
            <h4 className="text-[10px] sm:text-[11px] font-semibold text-plum/50 uppercase tracking-wider mb-2">
              Contact
            </h4>
            <div className="space-y-1">
              <a href="mailto:info@aksisys.com" className="block text-[11px] sm:text-[12px] text-plum/50 hover:text-plum transition-colors">
                info@aksisys.com
              </a>
              <a href="mailto:piyush@aksisys.com" className="block text-[11px] sm:text-[12px] text-plum/50 hover:text-plum transition-colors">
                piyush@aksisys.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] sm:text-[11px] font-semibold text-plum/50 uppercase tracking-wider mb-2">
              Navigate
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-1">
              <a href="#services" className="block text-[11px] sm:text-[12px] text-plum/50 hover:text-plum transition-colors">Services</a>
              <a href="#about" className="block text-[11px] sm:text-[12px] text-plum/50 hover:text-plum transition-colors">About</a>
              <a href="#leadership" className="block text-[11px] sm:text-[12px] text-plum/50 hover:text-plum transition-colors">Leadership</a>
              <a href="#contact" className="block text-[11px] sm:text-[12px] text-plum/50 hover:text-plum transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="border-t border-blush/40 pt-5 sm:pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[10px] sm:text-[11px] text-plum/30">
            &copy; {new Date().getFullYear()} AKS Intelligent Systems LLP. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 text-[9px] sm:text-[10px] text-plum/25">
            <span>LLPIN: ACW-4965</span>
            <span>PAN: ACNFA7427J</span>
            <span>TAN: RTKA34008C</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
