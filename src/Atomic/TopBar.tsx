import Logout from "./Logout";
import { useThemeContext, useUserContext } from "../Context/UserContext";

function TopBar() {
  const { userName } = useUserContext();
  const { darkMode, toggleTheme } = useThemeContext();

  const styles: { [k: string]: React.CSSProperties } = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 16px",
      borderBottom: "1px solid #e6e6e6",
      background: "var(--topbar-bg, #fff)",
    },
    side: {
      flex: 1,
      display: "flex",
      alignItems: "center",
    },
    title: {
      flex: 0,
      textAlign: "center",
      fontWeight: 600,
      fontSize: "1.05rem",
      fontFamily: "inherit",
      color: "#007bff",
      whiteSpace: "nowrap",
      display: "inline-block",
    },
    right: {
      flex: 1,
      display: "flex",
      justifyContent: "flex-end",
      gap: 12,
      alignItems: "center",
    },
    button: {
      padding: "6px 10px",
      cursor: "pointer",
    },
  };

  return (
    <header style={styles.container}>
      <div style={{ ...styles.side, justifyContent: "flex-start" }}>
        <div style={styles.title}>SIP Tracker</div>
      </div>

      <div style={styles.right}>
        <span>{`Welcome, ${userName || "Guest"}!`}</span>
        <button onClick={toggleTheme} style={styles.button} aria-label="Toggle theme">
          {darkMode ? "Light" : "Dark"}
        </button>
        <Logout style={styles.button} />
      </div>
    </header>
  );
}

export default TopBar;
