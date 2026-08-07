import TopBar from "../Atomic/TopBar";
import SecondBar from "../Molecular/SecondBar";
import Sip from "../Molecular/Sip";
import type { CSSProperties } from "react";

function HomePage() {
  const pageStyles: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: 24,
    padding: "16px",
    width: "100%",
  };

  return (
    <div>
      <TopBar />
      <SecondBar />

      <main style={pageStyles}>
        <div style={{ maxWidth: 1126, width: "100%", margin: "0 auto" }}>
          <Sip />
        </div>
      </main>
    </div>
  );
}
export default HomePage;
