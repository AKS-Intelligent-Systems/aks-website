import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import Partners from "@/components/Partners";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";

export default function Home() {
  return (
    <>
      <FloatingParticles />
      <Navbar />
      <main className="flex-1 relative z-10">
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <About />
        <Partners />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
