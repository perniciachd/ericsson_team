import React, { useEffect, useState } from "react";
import FundCard from "../Atomic/FundCard";  

import axios from "axios";

type Fund = {
  fundName: string;
  category: string;
  risk: "Low" | "Moderate" | "High";
  returns: number;
};

function Sip() {

  const [mockData, setData] = useState<Fund[]>([]);


   useEffect(() => {
    const fetchFunds = async () => {
        axios.get("/MockData.json")
        .then((response) => {
          const selectedFunds = response.data.funds; 
         setData(selectedFunds);
        }).catch((error) => {
          console.error("Error fetching fund data:", error);
        })
    };

    fetchFunds();
  }, []);

    return (<div>
					{mockData.map((ele)=>(
							<FundCard fundName={ele.fundName} 
							category={ele.category} 
							risk={ele.risk} 
							returns={ele.returns}
							onInvest={() => navigation.navigate('/fund-details')}/>
					))}
				</div>
    );
}

export default Sip;