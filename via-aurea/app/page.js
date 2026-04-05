"use client";
import { useState } from "react";

export default function Home() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return (
      <main
        style={{
          height: "100vh",
          background: "radial-gradient(circle at center,#0a0a0a 0%,#020202 80%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#eaeaea",
          fontFamily: "serif",
          letterSpacing: "0.25em",
        }}
      >
        <h1
          style={{
            fontSize: "6rem",
            fontWeight: "200",
            marginBottom: "40px",
            textShadow: "0 0 30px rgba(198,167,91,0.25)",
          }}
        >
          CEALUZ
        </h1>

        <div
          onClick={() => setEntered(true)}
          style={{
            cursor: "pointer",
            border: "1px solid rgba(198,167,91,0.4)",
            padding: "12px 30px",
            letterSpacing: "0.4em",
            fontSize: "0.9rem",
            transition: "all 0.6s ease",
          }}
        >
          ENTER
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        background: "#0B0B0B",
        color: "#F3EFE6",
        minHeight: "100vh",
        fontFamily: "serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "5rem",
            fontWeight: "200",
            marginBottom: "30px",
          }}
        >
          Private Journeys
        </h1>

        <p
          style={{
            maxWidth: "600px",
            fontSize: "1.3rem",
            lineHeight: "1.6",
            opacity: 0.8,
          }}
        >
          Crafted quietly for those who value time,
          beauty, and discovery.
        </p>

        <div
          style={{
            marginTop: "40px",
            border: "1px solid #C6A75B",
            padding: "14px 30px",
            cursor: "pointer",
            letterSpacing: "0.2em",
            transition: "all 0.6s ease",
          }}
        >
          Request Access
        </div>
      </section>
    </main>
  );
}

<section className="relative h-screen flex items-center justify-center bg-black text-center">

<div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black opacity-95"></div>

<div className="relative z-10 max-w-3xl px-6">

<h1 className="text-5xl md:text-7xl font-light tracking-[0.3em] text-[#D4AF37]">
CRALUZ
</h1>

<p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed">
Private journeys for the exceptionally curious.
</p>

<p className="mt-4 text-sm text-gray-400 italic">
Journeys are not selected.  
They are curated.
</p>

<button className="mt-12 border border-[#D4AF37] text-[#D4AF37] px-8 py-3 tracking-widest hover:bg-[#D4AF37] hover:text-black transition duration-500">
Request Invitation
</button>

</div>

</section>