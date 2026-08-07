import FundTitle from "../atomic/FundTitle";
import FundType from "../atomic/FundType";
import SipAmount from "../atomic/SipAmount";
import Frequency from "../atomic/Frequency";
import InstallmentPaid from "../atomic/InstallmentPaid";
import CurrentValue from "../atomic/CurrentValue";
import Gain from "../atomic/Gain";
import { useTheme } from "../../Context/ThemeContext";

type PortfolioFund = {
  id: number;
  fundName: string;
  category: string;
  sipAmount: number;
  frequency: string;
  installmentsPaid: number;
  currentValue: number;
  gain: number;
};

type PortfolioCardProps = {
  fund: PortfolioFund;
};

function PortfolioCard({ fund }: PortfolioCardProps) {
  const { darkMode } = useTheme();

  return (
    <div
      className={`mb-6 rounded-2xl border p-6 shadow-sm transition-colors ${
        darkMode
          ? "border-slate-700 bg-slate-800"
          : "border-sky-300 bg-white"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex-1">
          <FundTitle title={fund.fundName} />

          <div className="mt-3 flex items-center gap-2">
            <FundType category={fund.category} />
            <SipAmount amount={fund.sipAmount} />
            <Frequency frequency={fund.frequency} />
            <InstallmentPaid installments={fund.installmentsPaid} />
          </div>
        </div>

        {/* Right Section */}
        <div className="text-right">
          <CurrentValue value={fund.currentValue} />
          <Gain gain={fund.gain} />
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;