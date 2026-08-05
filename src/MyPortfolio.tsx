import React, { useEffect, useState } from "react";
import axios from "axios";

interface Fund {
  id: string;
  name: string;
  category: string;
  nav: number;
  return: number;
  risk: string;
}

function MyPortfolio() {
  const [funds, setFunds] = useState<Fund[]>([]);
  useEffect(() => {
    async function getFunds() {
      try {
        const {data} = await axios.get("/data.json");
        setFunds(data.funds);
      } catch (error) {
        console.log(error);
      }
    }
    getFunds();
  }, []);

  return (
    <>
      <div className="page-head">
        <div>
          <h2>My Portfolio</h2>
          <div className="sub">
            {funds.length} funds · tap one to start a SIP
          </div>
        </div>
      </div>
      <div className="list">
        {funds.map((obj) => (
          <button className="card-btn" key={obj.id}>
            <span className="info">
              <span className="fn">{obj.name}</span>

              <span className="meta">
                <span className="cat">{obj.category}</span>

                <span className={`risk ${obj.risk}`}>
                  {obj.risk} risk
                </span>

                <span>NAV ₹{obj.nav}</span>
              </span>
            </span>

            <span className="side">
              <span className="ret up">
                +{obj.return}%
                <span>1Y</span>
              </span>

              <span className="invest-hint">
                Invest →
              </span>
            </span>
          </button>
        ))}
      </div>
    </>
  );
}

export default MyPortfolio;