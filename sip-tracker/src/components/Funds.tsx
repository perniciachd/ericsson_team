import { useEffect, useState } from "react";
import axios from "axios";
import Tile from "./atomic/Tile";

function Funds() {
    const [fundData, setData] = useState<{ title: string; type: string; risk: string; nav: number; toatalReturn: string; timeDuration: string }[]>([]);
    useEffect(() => {
        async function fetchFundsData() {
            try {
                const response = await axios.get('/public/data/funds.json');
                const { data } = response;
                setData(data.funds);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchFundsData();
    }, []);

    return (
        <div>
            <input type="search" placeholder="Search Funds" className="mt-6 px-4 py-2 rounded-lg border outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 w-98 max-w-md" />
            {/* <TypeList /> */}
            <button className="ml-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition font-medium">All</button>
            <button className="ml-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition font-medium">Equity</button>  
            <button className="ml-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition font-medium">Debt</button>
            <button className="ml-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition font-medium">Hybrid</button>
            <button className="ml-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition font-medium">Index</button>
            <h2 className="text-2xl font-semibold mt-6">Available Funds</h2>
            <p className="text-gray-500">Tap on fund to start investing</p>
            <div className="mt-4 grid gap-4">
                {/* <Tile title="Parag Parikhi Flexi Cap" type="Equity" risk="High Risk" nav={78.40} toatalReturn="+110.12" timeDuration="1Y"/>
                <Tile title="Nippon India Small Cap" type="Equity" risk="High Risk" nav={82.30} toatalReturn="+95.30" timeDuration="1Y"/>
                <Tile title="Axis Bluechip Fund" type="Equity" risk="High Risk" nav={90.20} toatalReturn="+120" timeDuration="1Y"/>
                <Tile title="Mirae Asset Large Cap" type="Equity" risk="High Risk" nav={76.80} toatalReturn="+105" timeDuration="1Y"/>
                <Tile title="Kotak Emerging Equity" type="Equity" risk="High Risk" nav={82.30} toatalReturn="+98" timeDuration="1Y"/>
                <Tile title="UTI Nifty 50 Index" type="Index" risk="Moderate Risk" nav={99.25} toatalReturn="+102" timeDuration="1Y"/>
            </div> */}
            <> 
                {fundData.map((fund) => (
                    <Tile 
                        key={fund.title}
                        title={fund.title}
                        type={fund.type}
                        risk={fund.risk}
                        nav={fund.nav}
                        toatalReturn={fund.toatalReturn}
                        timeDuration={fund.timeDuration}
                    />
                ))}
            </>
            </div>
        </div>
    );
}

export default Funds;
