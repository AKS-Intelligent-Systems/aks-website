import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(242, 208, 211, 0.3) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <p className="text-[11px] font-medium text-rose/60 tracking-[0.2em] uppercase mb-4">
                About Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-plum/80 leading-tight">
                Built on trust.
                <br />
                <span className="bg-gradient-to-r from-rose to-mauve bg-clip-text text-transparent">
                  Driven by results.
                </span>
              </h2>
              <p className="mt-6 text-[15px] text-plum/35 leading-[1.8]">
                AKS & Associates LLP is a multidisciplinary professional
                services firm that partners with businesses to solve complex
                challenges. With over 15 years of collective experience, our
                team brings together lawyers, strategists, and financial
                advisors under one roof.
              </p>
              <p className="mt-4 text-[15px] text-plum/35 leading-[1.8]">
                We believe in building long-term relationships grounded in
                transparency, expertise, and a genuine commitment to our
                clients&apos; success.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="rounded-3xl border border-petal/30 bg-gradient-to-br from-cream/80 via-white/60 to-blush/40 backdrop-blur-sm p-10 relative overflow-hidden">
                {/* Decorative orb inside card */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-rose/8 blur-3xl" />

                <div className="grid grid-cols-2 gap-5 mb-8 relative z-10">
                  <div className="rounded-xl border border-petal/20 bg-white/50 p-5">
                    <div className="text-2xl font-bold bg-gradient-to-br from-rose to-mauve bg-clip-text text-transparent">
                      50+
                    </div>
                    <div className="mt-1 text-[11px] text-plum/30 tracking-wide">
                      Expert advisors
                    </div>
                  </div>
                  <div className="rounded-xl border border-petal/20 bg-white/50 p-5">
                    <div className="text-2xl font-bold bg-gradient-to-br from-rose to-mauve bg-clip-text text-transparent">
                      12
                    </div>
                    <div className="mt-1 text-[11px] text-plum/30 tracking-wide">
                      Offices across India
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-rose/30 mb-4"
                  >
                    <path
                      d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote className="text-[15px] text-plum/50 leading-[1.8] italic">
                    Your success is our legacy. Every decision we guide
                    is a step towards building something extraordinary.
                  </blockquote>
                  <div className="mt-4 text-[11px] font-medium text-mauve/50 tracking-wide">
                    — AKS & Associates Leadership
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
