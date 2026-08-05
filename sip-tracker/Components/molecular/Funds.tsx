import { useEffect, useState } from "react";
import axios from "axios";
import Tile from "../atomic/Tile";

type FundsProps = {
  type: "Explore Funds" | "My Portfolio";
  searchTerm?: string;
  categoryFilter?: string;
};

type Fund = {
  id: number;
  fundName: string;
  category: string;
  risk: "Low" | "Moderate Risk" | "High";
  nav: number;
  returns: number;
};

function Funds({
  type,
  searchTerm = "",
  categoryFilter = "All",
}: FundsProps) {
  const [fundData, setFundData] = useState<Fund[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const { data } = await axios.get("/data.json");

        const selectedFunds =
          type === "Explore Funds" ? data.funds : data.myFunds;

        setFundData(selectedFunds);
      } catch (error) {
        console.error("Error fetching fund data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFunds();
  }, [type]);

  const filteredFunds = fundData.filter((fund) => {
    const matchesCategory =
      categoryFilter === "All" ||
      fund.category === categoryFilter;

    const matchesSearch = fund.fundName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <p className="text-center text-lg mt-10">
        Loading...
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {filteredFunds.length > 0 ? (
        filteredFunds.map((fund) => (
          <Tile
            key={fund.id}
            fundName={fund.fundName}
            category={fund.category}
            risk={fund.risk}
            nav={fund.nav}
            returns={fund.returns}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No funds found.
        </p>
      )}
    </div>
  );
}

export default Funds;