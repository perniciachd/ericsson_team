import TopBar from "../Atomic/TopBar";
import Sip from "../Molecular/Sip";

function HomePage() {
  const pageStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: 24,
    padding: "16px",
    width: "100%",
  };

  return (
    <main style={pageStyles}>
      <section>
        <TopBar />
      </section>

      <section>
        <Sip />
      </section>
    </main>
  );
}

export default HomePage;