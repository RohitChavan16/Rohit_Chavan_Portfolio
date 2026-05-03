import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import About2 from "@/components/About2";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <About2 />
      <Skills />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
