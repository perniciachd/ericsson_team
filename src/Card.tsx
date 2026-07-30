type CardProbe={
    title: string
    count: number
    value?: number
}
function Card({ title, count, value=30 }: CardProbe) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        width: "200px",
        borderRadius: "10px",
      }}
    >
      <h3>{title}</h3>
      <p>{count}</p>
      {value > 20 ? <p>Yeahhhh</p> : <p>Boooo</p>}
    </div>
  );
}

export default Card;