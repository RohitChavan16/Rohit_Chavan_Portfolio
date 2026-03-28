"use client";

export default function Footer() {
  return (
    <footer className="px-[8%] pb-10">
      <div className="section-shell rounded-3xl px-6 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-lg font-semibold">Rohit Chavan</p>
            <p className="muted text-sm mt-1">
              Full Stack Developer focused on scalable products and modern UI.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/RohitChavan16"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-btn portfolio-btn-secondary"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/rohit-chavan16"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-btn portfolio-btn-secondary"
            >
              LinkedIn
            </a>
            <a href="#home" className="portfolio-btn portfolio-btn-primary">
              Back to Top
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/15 text-xs uppercase tracking-[0.2em] muted-soft">
          © {new Date().getFullYear()} Rohit Chavan. Crafted with Next.js and Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
