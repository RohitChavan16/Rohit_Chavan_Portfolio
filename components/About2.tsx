"use client";

import ImageSlider from "./ImageSilder";

export default function About() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-6 bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a]">
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 auto-rows-[110px]">

          <div className="col-span-2 md:col-span-3 rounded-2xl p-4 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white">
            Intro → Short bio + what you do (1–2 lines)
          </div>

          <div className="col-span-1 md:col-span-1 rounded-2xl p-4 bg-gradient-to-br from-[#312e81] to-[#1e1b4b] text-white">
            Stat → Projects / Experience
          </div>

          <div className="col-span-2 md:col-span-2 md:row-span-2 rounded-2xl p-4 bg-gradient-to-br from-[#0f172a] to-[#020617] text-white">
            Hero → Your photo / aesthetic image
          </div>

          <div className="col-span-1 md:col-span-2 md:row-span-2 rounded-2xl p-4 bg-gradient-to-br from-[#1e1b4b] to-[#020617] text-white">
            Skills → Tech stack (React, Node, OpenCV, etc.)
          </div>

          <div className="col-span-2 md:col-span-2 md:row-span-3 rounded-2xl p-4 bg-gradient-to-br from-[#020617] to-[#1e293b] text-white">
            <ImageSlider />
          </div>

          <div className="col-span-1 md:col-span-2 col-start-1 row-start-4 rounded-2xl p-4 bg-gradient-to-br from-[#312e81] to-[#020617] text-white">
            Tools → VS Code, Git, Postman, etc.
          </div>

          <div className="col-span-1 md:col-span-1 md:row-span-2 rounded-2xl p-4 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
            Proj1 → ScreenFlow (highlight)
          </div>

          <div className="col-span-1 md:col-span-1 md:row-span-2 rounded-2xl p-4 bg-gradient-to-br from-[#1e293b] to-[#020617] text-white">
            Proj2 → SynapTalk (highlight)
          </div>

          <div className="col-span-2 md:col-span-3 rounded-2xl p-4 bg-gradient-to-br from-[#020617] to-[#312e81] text-white">
            Philosophy → "I build production-ready systems, not just projects"
          </div>

          <div className="col-span-1 md:col-span-2 rounded-2xl p-4 bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] text-white">
            Journey → C++ → Web → AI growth
          </div>

          <div className="col-span-1 md:col-span-1 md:row-span-1 rounded-2xl p-4 bg-gradient-to-br from-[#020617] to-[#1e293b] text-white">
            Contact → GitHub / LinkedIn / Email
          </div>

        </div>
      </div>
    </section>
  );
}