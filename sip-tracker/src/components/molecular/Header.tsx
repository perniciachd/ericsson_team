import Button from "../atomic/Button";
import { useDarkMode } from "../../context/DarkModeContext";
import { useNavigate } from "react-router";

function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-slate-900 rounded-xl mb-6 shadow-lg">
      <h1 className="text-white text-xl font-bold tracking-tight flex items-center gap-2">
        <span role="img" aria-label="stock up">📈</span>
        SIP Tracker
      </h1>
      <div className="flex gap-3 items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-500 peer-checked:bg-indigo-500 rounded-full transition-colors"></div>
          <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:translate-x-5"></div>
          <span className="ml-3 text-sm font-medium text-white">{darkMode ? '🌙' : '☀️'}</span>
        </label>
        <Button
          title="Logout"
          btnClicked={() => {
            sessionStorage.removeItem('username');
            navigate('/', { replace: true });
          }}
        />
      </div>
    </nav>
  );
}
export default Header;