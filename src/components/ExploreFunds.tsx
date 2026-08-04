// src/Components/ExploreFunds.tsx
import FundCard from "../atomic/FunCard";

const funds = [
  { id: "f1", name: "Parag Parikh Flexi Cap", category: "Equity", risk: "High" as const, returnPct: 15.3 },
  { id: "f6", name: "UTI Nifty 50 Index", category: "Index", risk: "Moderate" as const, returnPct: 12.0 },
  { id: "f10", name: "SBI Corporate Bond", category: "Debt", risk: "Low" as const, returnPct: 4.4 },
];

function ExploreFunds() {
  return (
    <div>
      <h2>Explore funds</h2>
      <p>{funds.length} funds</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {funds.map((fund) => (
          <FundCard
            key={fund.id}
            name={fund.name}
            category={fund.category}
            risk={fund.risk}
            returnPct={fund.returnPct}
            onInvest={() => console.log(`Invest in ${fund.name}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default ExploreFunds;