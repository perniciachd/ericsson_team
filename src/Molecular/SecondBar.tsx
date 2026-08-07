import { useNavigate } from "react-router";
import type { CSSProperties } from "react";

const styles: { [k: string]: CSSProperties } = {
  container: {
    width: "100%",
    borderBottom: "1px solid var(--divider, #e6e6e6)",
    background: "var(--secondbar-bg, transparent)",
  },
  inner: {
    maxWidth: 1126,
    width: "100%",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "8px 16px",
  },
  button: {
    padding: "8px 12px",
    fontSize: 14,
    cursor: "pointer",
    borderRadius: 6,
    border: "1px solid rgba(0,0,0,0.08)",
    background: "var(--button-bg, #fff)",
    minWidth: 120,
    textAlign: "center",
  } as CSSProperties,
};

function SecondBar() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.inner}>
        <button style={styles.button} onClick={() => navigate("/home")}>Explore funds</button>
        <button style={styles.button} onClick={() => navigate("/my-portfolio")}>My portfolio</button>
      </div>
    </div>
  );
}

export default SecondBar;