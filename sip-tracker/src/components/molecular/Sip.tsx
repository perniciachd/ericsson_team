import Tile from "../atomic/Tile";
type TileProps  = {
  title: string;
  type: string;
  risk: string;
  nav?: number;
  toatalReturn: string;
  timeDuration: string;
}

function Sip({ title, type, risk, nav, toatalReturn, timeDuration }: TileProps) {
  
  return (
    <div className="bg-white rounded-xl p-5 shadow-md flex justify-between items-center">
      <div>
        <Tile title={title}></Tile>
        <div className="mt-1 flex gap-3 text-sm">
        <Tile title={type} />
        <span className={`font-medium ${risk === 'High Risk' ? 'text-red-500' : 'text-yellow-500'}`}>{risk}</span>
        {nav !== undefined && <span className="text-gray-500">NAV ₹{nav.toFixed(2)}</span>}
        
      </div>
    </div>
      <div className="flex flex-col items-end gap-1">
        <span className="text-green-500">{toatalReturn}</span>
        <span className="text-gray-500">{timeDuration}</span>
      </div>
    </div>
  );
}
export default Sip;