import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main
      className="min-h-screen text-white
                 bg-gradient-to-br
                 from-[#02324b] via-[#040b2f] to-[#020024]"
    >

      <Navbar />
      <Hero />

    </main>
  );
}
