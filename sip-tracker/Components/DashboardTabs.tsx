import { NavLink } from "react-router";
import { useTheme } from "../Context/ThemeContext";
 
function DashboardTabs() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`border-b shadow-sm transition-colors duration-300 ${
        darkMode
          ? "bg-slate-900 border-slate-700"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex gap-4 p-6">
        <NavLink
          to="/dashboard/explore-funds"
          className={({ isActive }) =>
            `px-5 py-2 rounded-lg font-medium transition-colors duration-300 ${
              isActive
                ? "bg-blue-600 text-white"
                : darkMode
                ? "bg-slate-800 text-white hover:bg-slate-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`
          }
        >
          Explore Funds
        </NavLink>

        <NavLink
          to="/dashboard/portfolio"
          className={({ isActive }) =>
            `px-5 py-2 rounded-lg font-medium transition-colors duration-300 ${
              isActive
                ? "bg-blue-600 text-white"
                : darkMode
                ? "bg-slate-800 text-white hover:bg-slate-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`
          }
        >
          My Portfolio
        </NavLink>
      </div>
    </div>
  );
}

export default DashboardTabs;