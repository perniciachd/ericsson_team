import Tile from "../Components/atomic/Tile";
import { useState, useEffect } from "react";
type Fund = {
  id: number;
  fundName: string;
  category: string;
  risk: "Low" | "Moderate Risk" | "High";
  nav: number;
  returns: number;
};

function Dashboard() {
  const [fundData, setFundData] = useState<Fund[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => { const fetchFundData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setFundData(data.funds);
      } catch (error) {
        console.error("Error fetching fund data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFundData();
  }, []);
   if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }
  return (
    <>
      <main className="p-6">
        {fundData.map((fund) => (
          <Tile
            key={fund.id}
            fundName={fund.fundName}
            category={fund.category}
            risk={fund.risk}
            nav={fund.nav}
            returns={fund.returns}
          />
        ))}
      </main>
    </>
  );
}

export default Dashboard;