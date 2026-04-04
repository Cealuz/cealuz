export default function Page() {
  return (
    <main className="w-full h-screen bg-black text-white flex items-center justify-center">
      
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover opacity-40"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold tracking-widest">
          VIA AUREA
        </h1>

        <p className="mt-6 text-xl opacity-80">
          Private Journeys Crafted Beyond Luxury
        </p>

        <button className="mt-10 border border-white px-8 py-4 hover:bg-white hover:text-black transition">
          Enter
        </button>
      </div>

    </main>
  )
}