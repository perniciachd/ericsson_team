type typeCard = {
    title: string;
    phone: number;
    val?:number;
}

function Card({ title, phone,val=30 }: typeCard) {
    return (

        <>
            <h2>{title}</h2>
            {val>=40 ? <p>{2+2}</p> : <p>{3+3}</p>}
            <p>{phone}</p>
        </>

    );
}
export default Card;