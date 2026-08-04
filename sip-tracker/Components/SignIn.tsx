import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "./atomic/Button";
import { useTheme } from "../Context/ThemeContext";

function SignIn() {
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (
      username === import.meta.env.VITE_USERNAME &&
      password === import.meta.env.VITE_PASSWORD
    ) {
      navigate("/dashboard/explore-funds");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div
      className={`min-h-screen flex justify-center items-center transition-colors duration-300 ${
        darkMode ? "bg-slate-900" : "bg-slate-100"
      }`}
    >
      <div
        className={`w-[420px] rounded-2xl shadow-xl p-10 ${
          darkMode ? "bg-slate-800 text-white" : "bg-white text-black"
        }`}
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📈</span>

            <h1 className="text-4xl font-bold">
              SIP <span className="text-cyan-400">Tracker</span>
            </h1>
          </div>

          <p
            className={`mt-3 text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Sign in to explore funds and invest
          </p>
        </div>

        {/* Username */}
        <label
          className={`block text-sm font-semibold mb-2 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Username
        </label>

        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={`w-full rounded-lg border px-4 py-3 mb-6 transition focus:outline-none focus:ring-2 focus:ring-sky-500 ${
            darkMode
              ? "bg-slate-700 border-slate-600 text-white placeholder-gray-400"
              : "bg-white border-gray-300 text-black placeholder-gray-400"
          }`}
        />

        {/* Password */}
        <label
          className={`block text-sm font-semibold mb-2 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full rounded-lg border px-4 py-3 mb-6 transition focus:outline-none focus:ring-2 focus:ring-sky-500 ${
            darkMode
              ? "bg-slate-700 border-slate-600 text-white placeholder-gray-400"
              : "bg-white border-gray-300 text-black placeholder-gray-400"
          }`}
        />

        {/* Login Button */}
        <Button
          title="Log In"
          btnClicked={handleLogin}
          cssStyle="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-medium transition-colors"
        />

        {/* Dark Mode */}
        <div className="mt-5">
          <Button
            title={darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            btnClicked={toggleDarkMode}
            cssStyle="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg transition-colors"
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn;