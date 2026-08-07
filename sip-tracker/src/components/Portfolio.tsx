import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Tile from "./molecular/Sip";
import Card from "./Card";

function Portfolio() {
    const navigate = useNavigate();
    const [portfolioData, setPortfolioData] = useState<{ id: number; title: string; type: string; status: string; currentValue: number; profitPercentage: number; investedAmount: number }[]>([]);
    useEffect(() => {
        async function fetchPortfolioData() {
            if (sessionStorage.getItem('username')) {
                try {
                    const response = await axios.get('/public/data/funds.json');    
                    setPortfolioData(response.data.portfolio);
                } catch (error) {
                    console.log(error);
                    navigate('/', { replace: true });
                }
            } else {
                navigate('/', { replace: true });
            }
        }
        fetchPortfolioData();
    }, [navigate]);
    return (
        <div>
            <h2 className="text-2xl font-semibold mt-6">My Portfolio</h2>
            <p className="text-gray-500">{portfolioData.length} Investments</p>
                <Card />
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
