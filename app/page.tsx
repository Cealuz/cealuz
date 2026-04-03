"use client";
import { useState } from "react";

export default function Home() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return (
      <main
        style={{
          height: "100vh",
          background:
            "radial-gradient(circle at center, #0a0a0a 0%, #020202 80%)",
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
            textShadow: "0 0 30px rgba(198,161,91,0.25)",
          }}
        >
          CEALUZ
        </h1>

        <div
          onClick={() => setEntered(true)}
          style={{
            marginTop: "40px",
            cursor: "pointer",
            border: "1px solid rgba(198,161,91,0.3)",
            padding: "12px 28px",
            letterSpacing: "0.4em",
            fontSize: "0.9rem",
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
        height: "100vh",
        background: "#050505",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#eaeaea",
        fontFamily: "serif",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "700px" }}>
        <h2 style={{ fontSize: "3rem", marginBottom: "30px" }}>
          A Private World
        </h2>

        <p style={{ opacity: 0.7, lineHeight: "1.8" }}>
          Cealuz curates silent journeys, rare destinations, and
          private experiences for those who move beyond the ordinary.
        </p>
      </div>
    </main>
  );
}
