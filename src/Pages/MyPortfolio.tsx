import { useSelector } from "react-redux";
import { type RootState } from "../store/store";

function MyPortfolio() {
  const portfolio = useSelector((state: RootState) => state.portfolio);

  return (
    <div style={{ padding: 16, maxWidth: 1126, margin: "0 auto" }}>
      <h1>My Portfolio</h1>

      <div style={{ display: "flex", gap: 16, marginTop: 20, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 220, padding: 16, border: "1px solid #e5e4e7", borderRadius: 10 }}>
          <h2>Invested</h2>
          <p style={{ fontSize: 24, margin: 0 }}>${portfolio.invested.toLocaleString()}</p>
        </div>
        <div style={{ flex: 1, minWidth: 220, padding: 16, border: "1px solid #e5e4e7", borderRadius: 10 }}>
          <h2>Value Today</h2>
          <p style={{ fontSize: 24, margin: 0 }}>${portfolio.valueToday.toLocaleString()}</p>
        </div>
        <div style={{ flex: 1, minWidth: 220, padding: 16, border: "1px solid #e5e4e7", borderRadius: 10 }}>
          <h2>Total Gain</h2>
          <p style={{ fontSize: 24, margin: 0 }}>${portfolio.totalGain.toLocaleString()}</p>
        </div>
      </div>

      <section style={{ marginTop: 32 }}>
        <h2>Your SIPs</h2>
        <div style={{ display: "grid", gap: 16, marginTop: 16 }}>
          {portfolio.sips.map((sip) => (
            <div key={sip.id} style={{ padding: 16, border: "1px solid #e5e4e7", borderRadius: 10 }}>
              <h3 style={{ margin: 0 }}>{sip.fundName}</h3>
              <p style={{ margin: "8px 0" }}>
                {sip.category} • {sip.risk} • {sip.returns}%
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <span>SIP Amount: ${sip.sipAmount}</span>
                <span>Installments: {sip.installments}</span>
                <span>Frequency: {sip.frequency}</span>
                <span>Start Date: {sip.startDate}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MyPortfolio;