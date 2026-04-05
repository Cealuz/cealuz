"use client";
import { useState } from "react";

export default function Home() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return (
      <main
        style={{
          height: "100vh",
          background: "#0B0B0B",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#F3EFE6",
          fontFamily: "serif",
        }}
      >
        <h1
          style={{
            fontSize: "6rem",
            letterSpacing: "0.25em",
            fontWeight: "200",
            color: "#C6A75B",
          }}
        >
          CEALUZ
        </h1>

        <div
          onClick={() => setEntered(true)}
          style={{
            marginTop: "40px",
            cursor: "pointer",
            border: "1px solid #C6A75B",
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
    <main style={{ background: "#0B0B0B", color: "#F3EFE6" }}>
      
      <section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "80px", fontWeight: "300" }}>
          Private Journeys
        </h1>

        <p style={{ maxWidth: "600px", marginTop: "20px", fontSize: "20px" }}>
          Crafted quietly for those who value time, beauty, and discovery.
        </p>

        <button
          style={{
            marginTop: "40px",
            border: "1px solid #C6A75B",
            padding: "12px 28px",
            background: "transparent",
            color: "#F3EFE6",
          }}
        >
          Request Access
        </button>
      </section>

      <section
        style={{
          padding: "120px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "48px" }}>
          Some journeys are not booked.
        </h2>

        <p style={{ marginTop: "20px", fontSize: "22px" }}>
          They are composed.
        </p>
      </section>

      <section
        style={{
          padding: "120px 20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "40px",
        }}
      >
        {[
          "The Hidden Coast",
          "The Emerald Highlands",
          "The Silent Volcano",
          "The Private Archipelago",
          "The Lost Jungle",
        ].map((journey) => (
          <div
            key={journey}
            style={{
              border: "1px solid rgba(198,167,91,0.2)",
              padding: "40px",
              textAlign: "center",
            }}
          >
            <h3>{journey}</h3>
          </div>
        ))}
      </section>

      <section
        style={{
          padding: "120px 20px",
          textAlign: "center",
        }}
      >
        <h2>A Private Circle</h2>

        <p style={{ marginTop: "20px" }}>
          Membership is extended to those who seek rare experiences.
        </p>

        <button
          style={{
            marginTop: "30px",
            border: "1px solid #C6A75B",
            padding: "12px 28px",
            background: "transparent",
            color: "#F3EFE6",
          }}
        >
          Request Membership
        </button>
      </section>
    </main>
  );
}