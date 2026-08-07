import React, { useEffect, useState } from "react";
import FundCard from "../molecular/FundCard";
import Header from "../molecular/Header";
import "./exploreFunds.css";
import SearchFilter from "../molecular/SearchFilter";
import SecHeader from "../molecular/SecHeader";
import axios from "axios";

type Fund = { title: string; category: string; riskLevel: string; fundPrice: string; fundGrowth: string };

function ExploreFunds() {

  // ============================ WHEN USING API CALL ==============================
  const [funds, setFunds] = useState<Fund[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    async function getData() {
      // const res = await fetch("../../mockData/Funds.json");

      // -------USING AXIOS PACKAGE
      const {data} = await axios.get("/mockData/Funds.json");
      setFunds(data);
    }
    getData();
  }, []);

  const filtered = funds.filter((f) => {
    const matchCategory = category === "All" || f.category === category;
    const matchSearch = f.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="app-wrapper">
      <Header />
      <div className="app">
        <div className="screen">
          <SecHeader title={"Explore funds"} subTitle={`${filtered.length} funds · tap one to start a SIP`} />
          <SearchFilter search={search} category={category} onSearch={setSearch} onCategory={setCategory} />

          {filtered.map((ele, i) => (
            <React.Fragment key={i}>
              <FundCard title={ele.title} category={ele.category} riskLevel={ele.riskLevel} fundPrice={ele.fundPrice} fundGrowth={ele.fundGrowth} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreFunds;
