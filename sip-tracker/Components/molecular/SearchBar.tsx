import { useTheme } from "../../Context/ThemeContext";

const categories = ["All", "Equity", "Debt", "Balanced", "ELSS"];

type SearchBarProps = {
  searchTerm: string;
  categoryFilter: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (category: string) => void;
};

function SearchBar({
  searchTerm,
  categoryFilter,
  onSearchChange,
  onCategoryChange,
}: SearchBarProps) {
  const { darkMode } = useTheme();

  return (
    <div
      className={`mb-8 rounded-2xl border px-6 py-5 shadow-sm ${
        darkMode
          ? "border-slate-700 bg-slate-800"
          : "border-gray-200 bg-white"
      }`}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        {/* Search Box */}
        <input
          type="text"
          placeholder="🔍 Search mutual funds..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className={`flex-1 rounded-lg border px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            darkMode
              ? "border-slate-600 bg-slate-700 text-white placeholder:text-gray-400"
              : "border-gray-300 bg-white text-black placeholder:text-gray-400"
          }`}
        />

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`rounded-lg px-4 py-2 font-medium transition ${
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
  );
}

export default SearchBar;