// ========================= // ELITE VERSION – VIA AUREA // Cinematic, smooth, luxury interactions // =========================

// ---------- package.json ---------- { "name": "via-aurea", "version": "1.0.0", "private": true, "scripts": { "dev": "next dev", "build": "next build", "start": "next start" }, "dependencies": { "next": "14.2.5", "react": "18.2.0", "react-dom": "18.2.0", "framer-motion": "^10.18.0", "lenis": "^1.0.0" } }

// ---------- tailwind.config.js ---------- module.exports = { content: ["./app/**/*.{js,ts,jsx,tsx}"], theme: { extend: {} }, plugins: [], };

// ---------- postcss.config.js ---------- module.exports = { plugins: { tailwindcss: {}, autoprefixer: {}, }, };

// ---------- app/globals.css ---------- @tailwind base; @tailwind components; @tailwind utilities;

body { background: #0B0B0B; color: #F3EFE6; font-family: serif; cursor: none; }

.cursor { position: fixed; width: 20px; height: 20px; border: 1px solid #C6A75B; border-radius: 50%; pointer-events: none; transform: translate(-50%, -50%); transition: transform 0.2s ease; z-index: 9999; }

// ---------- app/layout.js ---------- import "./globals.css";

export default function RootLayout({ children }) { return ( <html lang="en"> <body>{children}</body> </html> ); }

// ---------- app/page.js ---------- "use client";

import { useEffect, useState } from "react"; import Lenis from "lenis"; import { motion } from "framer-motion";

export default function Home() { const [entered, setEntered] = useState(false);

useEffect(() => { const lenis = new Lenis({ smooth: true }); function raf(time) { lenis.raf(time); requestAnimationFrame(raf); } requestAnimationFrame(raf);

const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

}, []);

if (!entered) { return ( <div className="h-screen flex items-center justify-center bg-black"> <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}> <h1 className="text-5xl mb-6 text-center">Via Aurea</h1> <button onClick={() => setEntered(true)} className="border border-[#C6A75B] px-6 py-3" > Enter </button> </motion.div> </div> ); }

return ( <main> {/* HERO */} <section className="h-screen relative"> <video autoPlay muted loop className="absolute w-full h-full object-cover opacity-60"> <source src="/hero.mp4" type="video/mp4" /> </video>

<div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className="text-7xl mb-6">
        Private Journeys
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1.5 }} className="mb-6">
        Crafted for those who value silence, beauty, and time.
      </motion.p>
    </div>
  </section>

  {/* PASSAGE */}
  <section className="h-screen relative">
    <video autoPlay muted loop className="absolute w-full h-full object-cover opacity-50">
      <source src="/passage.mp4" type="video/mp4" />
    </video>
    <div className="relative z-10 flex items-center justify-center h-full text-center">
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className="text-2xl">
        Journeys are not purchased. They are composed.
      </motion.p>
    </div>
  </section>

  {/* JOURNEYS */}
  <section className="py-32 px-6 grid gap-12">
    {["Venetian Silence", "Atlas Desert", "Midnight Iceland", "Kyoto Winter", "Mediterranean Passage"].map((j, i) => (
      <motion.div key={i} whileHover={{ scale: 1.05 }} className="border border-[#222] p-10 hover:border-[#C6A75B] transition-all duration-700">
        <h3 className="text-2xl mb-4">{j}</h3>
        <p className="opacity-60">A private composition of rare experiences.</p>
      </motion.div>
    ))}
  </section>

  {/* INQUIRY */}
  <section className="py-32 text-center">
    <h2 className="text-4xl mb-10">Begin Conversation</h2>
    <form className="flex flex-col gap-6 max-w-lg mx-auto">
      <input placeholder="Name" className="bg-transparent border-b p-3" />
      <input placeholder="Email" className="bg-transparent border-b p-3" />
      <textarea placeholder="Message" className="bg-transparent border-b p-3" />
      <button className="border border-[#C6A75B] py-3">Submit Inquiry</button>
    </form>
  </section>

  {/* SECRET */}
  <section onClick={() => (window.location.href = "/hidden")} className="text-center py-16 opacity-40 hover:opacity-100 transition">
    <p>For those who explore further.</p>
  </section>
</main>

); }

// ---------- app/hidden/page.js ---------- export default function Hidden() { return ( <div className="h-screen relative"> <video autoPlay muted loop className="absolute w-full h-full object-cover opacity-70"> <source src="/hidden.mp4" type="video/mp4" /> </video> <div className="relative z-10 flex items-center justify-center h-full text-white"> <h1 className="text-5xl">The Hidden Passage</h1> </div> </div> ); }

// ---------- public/ ---------- // hero.mp4 // passage.mp4 // hidden.mp4
