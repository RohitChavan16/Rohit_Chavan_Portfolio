export default function BackgroundDots() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(79,140,234,0.2),transparent_35%),radial-gradient(circle_at_90%_15%,rgba(244,208,63,0.18),transparent_30%),linear-gradient(145deg,#02040a_0%,#061226_55%,#0b1f3a_100%)]" />

      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="absolute top-[10%] left-[12%] w-40 h-40 rounded-full bg-[#f4d03f]/20 blur-3xl decor-ring" />
      <div className="absolute top-[55%] right-[12%] w-52 h-52 rounded-full bg-[#8cb6f7]/25 blur-3xl decor-ring [animation-delay:1.4s]" />
      <div className="absolute bottom-[8%] left-[48%] w-44 h-44 rounded-full bg-[#f4d03f]/15 blur-3xl decor-ring [animation-delay:2.6s]" />

      <div className="absolute left-[8%] top-24 w-16 h-16 border border-[#f4d03f]/40 rotate-45 decor-spin" />
      <div className="absolute right-[14%] bottom-20 w-20 h-20 border border-white/20 rounded-full decor-spin [animation-duration:26s]" />
    </div>
  );
}
