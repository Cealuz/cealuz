export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        background: "radial-gradient(circle at center, #111 0%, #050505 70%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#eaeaea",
        fontFamily: "serif",
        letterSpacing: "0.15em"
      }}
    >
      <h1
        style={{
          fontSize: "5rem",
          fontWeight: "200",
          marginBottom: "30px"
        }}
      >
        CEALUZ
      </h1>

      <p
        style={{
          maxWidth: "600px",
          textAlign: "center",
          opacity: 0.65,
          fontSize: "1.1rem",
          lineHeight: "1.7"
        }}
      >
        A private world of curated journeys, silent retreats,
        and rare destinations for those who move beyond the ordinary.
      </p>

      <div style={{ marginTop: "50px", opacity: 0.6 }}>
        Enter
      </div>
    </main>
  );
}
