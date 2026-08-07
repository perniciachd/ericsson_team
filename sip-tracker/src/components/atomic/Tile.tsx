type TileProps  = {
  title: string;
}

function Tile({ title}: TileProps) {
  
  return (
      <div>
        <span className="text-lg font-semibold text-gray-800">{title}</span>
      </div>
  );
}
export default Tile;