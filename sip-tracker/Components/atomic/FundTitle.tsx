import { useTheme } from "../../Context/ThemeContext";

type FundTitleProps = {
  title: string;
};

function FundTitle({ title }: FundTitleProps) {
  const { darkMode } = useTheme();

  return (
    <h2
      className={`text-2xl font-bold ${
        darkMode ? "text-white" : "text-slate-900"
      }`}
    >
      {title}
    </h2>
  );
}

export default FundTitle;