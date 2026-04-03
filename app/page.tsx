export default function Home() {
  return (
    <main style={{
      backgroundColor: "#0a0a0a",
      color: "#e8e8e8",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "serif",
      letterSpacing: "0.05em"
    }}>

      <h1 style={{
        fontSize: "4rem",
        fontWeight: "300",
        marginBottom: "20px"
      }}>
        CEALUZ
      </h1>

      <p style={{
        fontSize: "1.2rem",
        opacity: 0.7,
        textAlign: "center",
        maxWidth: "600px",
        lineHeight: "1.6"
      }}>
        A private world of curated journeys, silence, and rare places.
      </p>

    </main>
  );
}
