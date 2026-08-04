import { useState } from "react";
import { Outlet } from "react-router";
import { DarkModeContext } from "../context/DarkModeContext";

function Layout() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem('darkMode', String(!prev));
      return !prev;
    });
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`min-h-screen transition-colors ${darkMode ? 'bg-slate-800 text-white' : 'bg-gray-100 text-black'}`}>
        <Outlet />
      </div>
    </DarkModeContext.Provider>
  );
}

export default Layout;
