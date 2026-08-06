type CardProps=
{
    title: string;
    count?: number;
};

function Card ({title, count}: CardProps)
{
    return(
        <div >
            <h2>{title}</h2>
            <p>count: {count}</p>
        </div>
    );
}
export default Card;