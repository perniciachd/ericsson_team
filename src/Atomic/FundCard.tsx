import Tile from "./Tile";

// src/Components/atomic/FundCard.tsx
interface FundCardProps {
  fundName: string;
  category: string;
  risk: "Low" | "Moderate" | "High";
  returns: number;
  onInvest: () => void;
}

function FundCard({ fundName, category, risk, returns, onInvest }: FundCardProps) {
  const cardStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "12px 16px",
    border: "1px solid var(--border, #e5e4e7)",
    borderRadius: 8,
    background: "var(--card-bg, #fff)",
    cursor: "pointer",
  };

  const leftStyle: React.CSSProperties = { textAlign: "left" };
  const rightStyle: React.CSSProperties = { textAlign: "right" };

  return (
    <button style={cardStyle} onClick={onInvest}>
      <div style={leftStyle}>
        <p>{fundName}</p>
        <div style={{ display: "flex", gap: 8 }}>
          <Tile title={category} />
          <Tile title={risk} />
        </div>
      </div>

      <div style={rightStyle}>
        <p>{returns}%</p>
        <p>Invest</p>
      </div>
    </button>
  );
}

export default FundCard;