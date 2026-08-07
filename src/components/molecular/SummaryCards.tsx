import "../Portfolio/Portfolio.css";

type Props = { totalInvested: number; totalValue: number; totalGain: number };

export default function SummaryCards({ totalInvested, totalValue, totalGain }: Props) {
  return (
    <div className="summary-cards">
      <div className="summary-card">
        <span className="summary-label">INVESTED</span>
        <span className="summary-value">₹{totalInvested.toLocaleString()}</span>
      </div>
      <div className="summary-card">
        <span className="summary-label">VALUE TODAY</span>
        <span className="summary-value">₹{totalValue.toLocaleString()}</span>
      </div>
      <div className="summary-card">
        <span className="summary-label">TOTAL GAIN</span>
        <span className="summary-value">₹{totalGain.toLocaleString()}</span>
        <span className="summary-gain">+{((totalGain / totalInvested) * 100).toFixed(1)}%</span>
      </div>
    </div>
  );
}
