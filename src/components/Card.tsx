type CardProps = {
  title: string;
  count?: number;
  val? : number;
};
function Card({ title, count, val=30 }: CardProps) {
  return (
    <>
    <div>
      <p>{title}</p>
      {val >20 ? <p>{2+2}</p>: <p>{3+3}</p>}
      <p>{count}</p>
    </div>
    </>
  );
}

export default Card;