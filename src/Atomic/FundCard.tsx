import Tile from "./Tile";

// src/Components/atomic/FundCard.tsx
interface FundCardProps {
  fundName: string;
  category: string;
  risk: "Low" | "Moderate" | "High";
  returns: number;
  onInvest: () => void;
}

function FundCard({ fundName, category, risk, returns, onInvest }: FundCardProps) {
  return (
    <button onClick={onInvest}>
      <div>
        <p>{fundName}</p>
         <Tile title ={category}/> 
         <Tile title ={risk}/> 
      </div>

      <div>
        <p>{returns}%</p>
        <p>Invest</p>
      </div>
    </button>
  );
}

export default FundCard;