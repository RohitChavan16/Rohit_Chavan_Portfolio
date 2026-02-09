import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] px-[8%] flex items-center justify-between"
    >

      {/* LEFT SIDE */}
      <div className="max-w-xl">

        <p className="text-sky-400 tracking-wide mb-4">
          Welcome to my portfolio
        </p>

        <h1 className="text-5xl font-bold leading-tight mb-6">
          Hello, my <br />
          name’s{" "}
          <span className="text-sky-400">Rohit.</span>
        </h1>

        <p className="text-gray-300 leading-relaxed mb-10">
          I’m an ENTC student at COEP, working on Full Stack,
          AI & OpenCV based projects.
        </p>


        {/* BUTTONS */}
        <div className="flex gap-6">

          <a
            href="/resume.pdf"
            className="px-7 py-3 rounded-full bg-sky-400 text-[#020024]
                       font-medium hover:shadow-[0_0_20px_#4fc3ff]
                       transition"
          >
            Download CV
          </a>


          <a
            href="#projects"
            className="px-7 py-3 rounded-full border-2 border-sky-400
                       text-sky-400 hover:bg-sky-400 hover:text-[#020024]
                       transition"
          >
            See my work →
          </a>

        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="relative">

        <div
          className="w-[380px] h-[380px] rounded-full p-[6px]
                     bg-gradient-to-br from-sky-400 to-indigo-900
                     shadow-[0_0_40px_rgba(79,195,255,0.4)]
                     flex items-center justify-center"
        >

          <Image
            src="/profile.jpg"
            alt="Profile"
            width={360}
            height={360}
            className="rounded-full object-cover"
            priority
          />

        </div>

      </div>

    </section>
  );
}
