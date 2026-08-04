import { useTheme } from "../../Context/ThemeContext";

// Correct the file name to Tile.tsx

type TileProps = {
  fundName: string;
  category: string;
  risk: "Low" | "Moderate Risk" | "High";
  nav: number;
  returns: number;
};

function Tile({
  fundName,
  category,
  risk,
  nav,
  returns,
}: TileProps) {
  const { darkMode } = useTheme();

  const riskClass = (() => {
    switch (risk) {
      case "Low":
        return "bg-green-100 text-green-700";
      case "Moderate Risk":
        return "bg-yellow-100 text-yellow-700";
      case "High":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  })();

  return (
    <div className="max-w-5xl mx-auto mb-6">
      <div
        className={`flex items-center justify-between rounded-2xl border shadow-sm p-6 transition-all duration-300 hover:shadow-lg ${
          darkMode
            ? "bg-slate-800 border-slate-700 text-white"
            : "bg-white border-sky-300 text-black"
        }`}
      >
        {/* Left Side */}
        <div>
          <h2
            className={`text-2xl font-semibold ${
              darkMode ? "text-white" : "text-slate-800"
            }`}
          >
            {fundName}
          </h2>

          <div className="flex items-center gap-2 mt-3">
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
              {category}
            </span>

            <span
              className={`text-xs px-2 py-1 rounded ${riskClass}`}
            >
              {risk}
            </span>

            <span
              className={`text-sm ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              NAV ₹{nav.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="text-right">
          <p className="text-green-600 text-4xl font-bold">
            +{returns.toFixed(2)}%
          </p>

          <p
            className={`text-sm mt-1 ${
              darkMode ? "text-gray-300" : "text-gray-500"
            }`}
          >
            1Y Invest →
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tile;