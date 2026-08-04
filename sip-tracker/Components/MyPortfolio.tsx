import Funds from "./molecular/Funds";

function MyPortfolio() {
  return (
    <div className="max-w-7xl mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">
        My Portfolio
      </h1>

      <Funds type="My Portfolio" />
    </div>
  );
}

export default MyPortfolio;