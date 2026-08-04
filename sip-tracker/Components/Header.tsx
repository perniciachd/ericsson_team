import Button from "../Components/atomic/Button";
import { useNavigate } from "react-router";
import { useTheme } from "../Context/ThemeContext";

export default function Header() {
  const navigate = useNavigate();

  const { darkMode, toggleDarkMode } = useTheme();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header
      className={`h-16 px-6 flex justify-between items-center ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-slate-800 text-white"
      }`}
    >
      {/* Left Side */}
      <div className="flex items-center gap-2">
        <span>📈</span>

        <h1 className="text-2xl font-bold">
          SIP <span className="text-cyan-400">Tracker</span>
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        <span className={darkMode ? "text-gray-300" : "text-gray-200"}>
          admin
        </span>

        <Button
          title={darkMode ? "☀️ Light" : "🌙 Dark"}
          btnClicked={toggleDarkMode}
          cssStyle="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors"
        />

        <Button
          title="Logout"
          btnClicked={handleLogout}
          cssStyle="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        />
      </div>
    </header>
  );
}
