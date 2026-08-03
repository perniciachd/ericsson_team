import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header";

function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

     

      <Outlet />
    </div>
  );
}

export default Layout;