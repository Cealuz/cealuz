"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";

export default function Home() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    window.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  }, []);

  if (!entered) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-5xl mb-6">Via Aurea</h1>
          <button onClick={() => setEntered(true)} className="border px-6 py-3">
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <main>
      <section className="h-screen relative">
        <video autoPlay muted loop className="absolute w-full h-full object-cover opacity-60">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-6xl">Private Journeys</h1>
        </div>
      </section>
    </main>
  );
}
