type TabsProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};


const Tabs = ({ activeTab, setActiveTab }: TabsProps) => {
  return (
    <div className="tabs">
    <button
        className={activeTab === "explore" ? "on" : ""}
        onClick={() => setActiveTab("explore")}
      >
        Explore funds
      </button>
      <button
        className={activeTab === "portfolio" ? "on" : ""}
        onClick={() => setActiveTab("portfolio")}
      >
        My portfolio
      </button>
    </div>
  );
};
export default Tabs;