import FundTitle from "../atomic/FundTitle";
import FundType from "../atomic/FundType";
import Risk from "../atomic/Risk";
import Nav from "../atomic/Nav";
import Returns from "../atomic/Returns";
import { useTheme } from "../../Context/ThemeContext";

type Fund = {
  id: number;
  fundName: string;
  category: string;
  risk: "Low" | "Moderate Risk" | "High";
  nav: number;
  returns: number;
};

type FundCardProps = {
  fund: Fund;
};

function FundCard({ fund }: FundCardProps) {
  const { darkMode } = useTheme();

  return (
    <div
      className={`mb-6 rounded-2xl border p-6 shadow-sm ${
        darkMode
          ? "border-slate-700 bg-slate-800"
          : "border-sky-300 bg-white"
      }`}
    >
      <div className="flex items-center justify-between gap-6">
        <div className="flex-1">
          <FundTitle title={fund.fundName} />

          <div className="mt-2 flex items-center gap-2">
            <FundType category={fund.category} />
            <Risk risk={fund.risk} />
            <Nav nav={fund.nav} />
          </div>
        </div>

        <Returns returns={fund.returns} />
      </div>
    </div>
  );
}

export default FundCard;