import { useEffect, useState } from "react";
import axios from "axios";
import Tile from "./atomic/Tile";

function Portfolio() {

    const [portfolioData, setPortfolioData] = useState<{ id: number; title: string; type: string; status: string; currentValue: number; profitPercentage: number; investedAmount: number }[]>([]);
    useEffect(() => {
        async function fetchPortfolioData() {
            try {
                const response = await axios.get('/public/data/funds.json');    
                setPortfolioData(response.data.portfolio);
            } catch (error) {
                console.error("Error fetching portfolio data:", error);
            }
        }
        fetchPortfolioData();
    }, []);
    return (
        <div>
            <h2 className="text-2xl font-semibold mt-6">My Portfolio</h2>
            <p className="text-gray-500">Your active SIP investments</p>
            <div className="mt-4 grid gap-4">
                {portfolioData.map((fund) => (
                    <Tile 
                        key={fund.id}
                        title={fund.title}
                        type={fund.type}
                        risk={fund.status}
                        nav={fund.currentValue}
                        toatalReturn={`+${fund.profitPercentage}%`}
                        timeDuration={`₹${fund.investedAmount} invested`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
