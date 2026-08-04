import Tile from "../Components/atomic/Tile";


function Dashboard() {
  
  return (
    <>
      <main className="p-6">
        <Tile
          fundName="SBI Blue Chip Fund"
          category="Equity"
          risk="Low"
          nav={123.45}
          returns={12.34}
        />

        <Tile
          fundName="HDFC Balanced Fund"
          category="Balanced"
          risk="Moderate Risk"
          nav={67.89}
          returns={8.90}
        />

        <Tile
          fundName="ICICI Prudential Equity Fund"
          category="Equity"
          risk="High"
          nav={45.67}
          returns={15.67}
        />
      </main>
    </>
  );
}

export default Dashboard;