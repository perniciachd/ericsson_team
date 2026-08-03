import FundCard from "./FundCard";
import funds from "./funds";

function ExploreFunds() {
  return (
    <div>

      

      {funds.map((fund) => (
        <FundCard
          key={fund.id}
          fundName={fund.fundName}
          category={fund.category}
          risk={fund.risk}
          nav={fund.nav}
          returns={fund.returns}
        />
      ))}

    </div>
  );
}

export default ExploreFunds;