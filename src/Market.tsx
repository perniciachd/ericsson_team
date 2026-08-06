import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import ExploreFunds from "./components/ExploreFunds";
import Dashboard from "./Dashboard";

const Market = () => {
  const [activeTab, setActiveTab] = useState("funds");

  return (
    <>
      <Header />
      <div className="screen">
        <Button
          text="Explore Funds"
          onClick={() => setActiveTab("funds")}
        />
        <Button
          text="My Portfolio"
          onClick={() => setActiveTab("portfolio")}
        />
      </div>
      {activeTab === "funds" && <ExploreFunds />}
      {activeTab === "portfolio" && <Dashboard />}
    </>
  );
};

export default Market;