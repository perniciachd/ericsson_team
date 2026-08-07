import FundList from "./AssignmentBlock/FundList";
import PortfolioCard from "../Components/molecular/PortfolioCard";

function MyPortfolio() {
  return (
    <div className="max-w-6xl mx-auto py-6">
      <h1 className="mb-6 text-3xl font-bold">
        My Portfolio
      </h1>

      <FundList
        type="myFunds"
        Card={PortfolioCard}
      />
    </div>
  );
}

export default MyPortfolio;