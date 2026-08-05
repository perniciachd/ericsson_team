function TopBar({ onLogout }: { onLogout?: () => void }) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 16px",
            borderBottom: "1px solid #ddd"
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span aria-hidden="true">📡</span>
                <strong>SIP Tracker</strong>
            </div>

            <div style={{ display: "flex", gap: "8px" }}>
                <button>Dark</button>
                <button onClick={onLogout}>Logout</button>
            </div>
        </div>
    );
}

export default TopBar;