import Tile from "./Tile";

// src/Components/atomic/FundCard.tsx
interface FundCardProps {
  name: string;
  category: string;
  risk: "Low" | "Moderate" | "High";
  returnPct: number;
  onInvest: () => void;
}

function FunCard({ name, category, risk, returnPct, onInvest }: FundCardProps) {
  return (
    <button onClick={onInvest}>
      <div>
        <p>{name}</p>
         <Tile title ={category}/> 
         <Tile title ={risk}/> 
      </div>

      <div>
        <p>{returnPct}%</p>
        <p>Invest</p>
      </div>
    </button>
  );
}

export default FunCard;