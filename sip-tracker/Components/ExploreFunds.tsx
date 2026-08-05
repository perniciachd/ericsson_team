import { useState } from "react";
import Funds from "./molecular/Funds";
import { useTheme } from "../Context/ThemeContext";

const categories = ["All", "Equity", "Debt", "Balanced", "ELSS"];

function ExploreFunds() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const { darkMode } = useTheme();

  return (
    <div className="max-w-5xl mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Explore Funds</h1>

      {/* Search & Filter */}
      <div
        className={`mb-8 rounded-2xl border p-6 shadow-sm ${
          darkMode
            ? "bg-slate-800 border-slate-700 text-white"
            : "bg-white border-gray-200 text-black"
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-6">
          {/* Search Box */}
          <input
            type="text"
            placeholder="🔍 Search mutual funds..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full md:w-[590px] rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              darkMode
                ? "bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-black placeholder-gray-400"
            }`}
          />

          {/* Category Filter */}
          <div className="flex flex-wrap gap-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCategoryFilter(category)}
                className={`h-10 rounded-lg px-4 font-medium transition-colors ${
                  categoryFilter === category
                    ? "bg-blue-600 text-white"
                    : darkMode
                      ? "bg-slate-700 text-gray-200 hover:bg-slate-600"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fund List */}
      <Funds
        type="Explore Funds"
        searchTerm={searchTerm}
        categoryFilter={categoryFilter}
      />
    </div>
  );
}

export default ExploreFunds;
