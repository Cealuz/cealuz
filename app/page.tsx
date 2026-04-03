export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute w-[800px] h-[800px] bg-white/5 blur-[200px] rounded-full"></div>

      {/* Center content */}
      <div className="text-center space-y-6 z-10">

        <h1 className="text-6xl md:text-8xl font-light tracking-[0.4em]">
          CEALUZ
        </h1>

        <p className="text-gray-400 text-lg tracking-[0.25em] uppercase">
          Private Journeys
        </p>

        <p className="max-w-xl text-gray-500 text-sm leading-relaxed">
          For those who no longer travel to escape life,
          but to design it.
        </p>

      </div>

    </main>
  );
}
