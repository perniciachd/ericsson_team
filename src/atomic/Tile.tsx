type StockTileProps = {
  type: string;
  value: number;
}

function StockTile({
  type,
  value,
}: StockTileProps) {
  return (
    <div>
      <div>
          <strong>Type:</strong> {type}
        </div>

        <div>
          <strong>Value:</strong> ₹{value}
        </div>
      </div>
  );
}

export default StockTile;