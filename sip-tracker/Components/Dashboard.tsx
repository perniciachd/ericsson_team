import { Outlet } from "react-router";
import DashboardTabs from "../Components/DashboardTabs";

function Dashboard() {
  return (
    <>
      <DashboardTabs />
      <div className="max-w-7xl mx-auto p-6">
        <Outlet />
      </div>
    </>
  );
}

export default Dashboard;