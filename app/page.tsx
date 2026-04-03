export default function Home() {
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
        letterSpacing: "0.2em"
      }}
    >
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: "200",
          marginBottom: "40px",
          textShadow: "0 0 30px rgba(198,161,91,0.25)"
        }}
      >
        CEALUZ
      </h1>

      <p
        style={{
          maxWidth: "620px",
          textAlign: "center",
          opacity: 0.65,
          fontSize: "1.15rem",
          lineHeight: "1.8"
        }}
      >
        A private world of curated journeys, silent retreats,
        and rare destinations for those who move beyond the ordinary.
      </p>

      <div
        style={{
          marginTop: "70px",
          letterSpacing: "0.5em",
          fontSize: "0.9rem",
          opacity: 0.7
        }}
      >
        ENTER
      </div>
    </main>
  );
}
