export default function Footer() {
  return (
    <footer id="contact" className="border-t border-blush/50 px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-rose flex items-center justify-center">
            <span className="text-[8px] font-bold text-white leading-none">A</span>
          </div>
          <span className="text-[14px] font-bold text-plum">AKS & Associates</span>
        </div>
        <div className="flex items-center gap-6 text-[13px] font-medium text-plum/50">
          <a href="#services" className="hover:text-plum transition-colors">Services</a>
          <a href="#about" className="hover:text-plum transition-colors">About</a>
          <a href="mailto:hello@aksassociates.com" className="hover:text-plum transition-colors">Contact</a>
        </div>
        <span className="text-[12px] text-plum/35">
          &copy; {new Date().getFullYear()} AKS & Associates LLP
        </span>
      </div>
    </footer>
  );
}
