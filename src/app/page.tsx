import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import About from "@/components/About";
import Leadership from "@/components/Leadership";
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
        <Services />
        <About />
        <Leadership />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
