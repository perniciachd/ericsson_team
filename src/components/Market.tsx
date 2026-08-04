import { useState } from "react";
import Header from "./Header";
import Button from "./atomic/Button";
import ExploreFunds from "./ExploreFunds";
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