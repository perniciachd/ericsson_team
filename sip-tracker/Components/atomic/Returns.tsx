import { useTheme } from "../../Context/ThemeContext";

type ReturnsProps = {
  returns: number;
};

function Returns({ returns }: ReturnsProps) {
  const { darkMode } = useTheme();

  return (
    <div className="flex flex-col items-end">
      <h2 className="text-4xl font-bold text-green-600">
        +{returns.toFixed(2)}%
      </h2>

      <span
        className={`mt-1 text-sm ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        1Y Invest →
      </span>
    </div>
  );
}

export default Returns;