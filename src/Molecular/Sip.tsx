import React, { useEffect, useState } from "react";
import FundCard from "../Atomic/FundCard";
import axios from "axios";
import { useNavigate } from "react-router";

type Fund = {
  id: number;
  fundName: string;
  category: string;
  risk: string;
  returns: number;
  nav?: number;
};

function Sip() {
  const [mockData, setData] = useState<Fund[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/MockData.json")
      .then((response) => {
        const selectedFunds: Fund[] = response.data.funds || [];
        setData(selectedFunds);
      })
      .catch((error) => {
        console.error("Error fetching fund data:", error);
      });
  }, []);

  const listStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    padding: "16px 0",
    width: "100%",
  };

  const itemWrapper: React.CSSProperties = {
    maxWidth: "1126px",
    width: "100%",
    margin: "0 auto",
    padding: "0 16px",
  };

  return (
    <section style={listStyles}>
      {mockData.map((ele) => (
        <div key={ele.id} style={itemWrapper}>
          <FundCard
            fundName={ele.fundName}
            category={ele.category}
            risk={ele.risk as any}
            returns={ele.returns}
            onInvest={() => navigate("/fund-details", { state: { fund: ele } })}
          />
        </div>
      ))}
    </section>
  );
}

export default Sip;