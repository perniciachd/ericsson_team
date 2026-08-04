import { Outlet } from "react-router";
import Header from "./Header";
import {useTheme} from "../Context/ThemeContext";

function Layout() {
  const { darkMode} = useTheme();

  return (
   <div
  className={`min-h-screen transition-colors duration-300 ${
    darkMode
      ? "bg-slate-900 text-white"
      : "bg-slate-100 text-black"
  }`}
>
      <Header />
      <main className="max-w-7xl mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;