import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Header from "../molecular/Header";
import SecHeader from "../molecular/SecHeader";
import SearchFilter from "../molecular/SearchFilter";
import SummaryCards from "../molecular/SummaryCards";
import PortfolioCard from "../molecular/PortfolioCard";
import { useAppSelector } from "../../store/store";
import type { PortfolioFund } from "../../store/portfolioSlice";
import "../exploreFunds/exploreFunds.css";
import "./Portfolio.css";

export default function Portfolio() {
  const [apiFunds, setApiFunds] = useState<PortfolioFund[]>([]);
  const reduxFunds = useAppSelector((state) => state.portfolio.funds);
  const funds = [...apiFunds, ...reduxFunds];
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get("/mockData/Portfolio.json");
      setApiFunds(data);
    }
    getData();
  }, []);

  const filtered = funds.filter((f) => {
    const matchCategory = category === "All" || f.type === category;
    const matchSearch = f.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const totalInvested = funds.reduce((sum, f) => sum + f.paid * parseInt(f.sip.replace(/[^\d]/g, "")), 0);
  const totalValue = funds.reduce((sum, f) => sum + f.value, 0);
  const totalGain = totalValue - totalInvested;

  return (
    <div className="app-wrapper">
      <Header />
      <div className="app">
        <div className="screen">
          <SecHeader title="My portfolio" subTitle={`${filtered.length} investments`} />
          <button className="invest-btn" onClick={() => navigate("/explorefunds")}>+ Invest</button>

          <SummaryCards totalInvested={totalInvested} totalValue={totalValue} totalGain={totalGain} />

          <SearchFilter search={search} category={category} onSearch={setSearch} onCategory={setCategory} />

          {filtered.map((fund, i) => (
            <React.Fragment key={i}>
              <PortfolioCard name={fund.name} type={fund.type} sip={fund.sip} paid={fund.paid} value={fund.value} gain={fund.gain} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
