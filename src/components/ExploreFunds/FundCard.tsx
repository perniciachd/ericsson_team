type FundProps = {
  fundName: string;
  category: string;
  risk: string;
  nav: string;
  returns: string;
};

function FundCard({
  fundName,
  category,
  risk,
  nav,
  returns,
}: FundProps) {
  return (
    <div>

      <div>

        <h3>{fundName}</h3>

        <span>{category}</span>

        <span>{risk}</span>

        <span>NAV {nav}</span>

      </div>

      <div>

        <h2>{returns}</h2>

        <button>Invest</button>

      </div>

    </div>
  );
}

export default FundCard;