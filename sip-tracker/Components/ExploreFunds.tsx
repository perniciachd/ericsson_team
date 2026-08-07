import FundList from "./AssignmentBlock/FundList";
import FundCard from "./molecular/FundCard";

function ExploreFunds() {
  return (
    <div className="max-w-6xl mx-auto py-6">
      <h1 className="mb-6 text-3xl font-bold">
        Explore Funds
      </h1>

      <FundList
        type="funds"
        Card={FundCard}
      />
    </div>
  );
}

export default ExploreFunds;