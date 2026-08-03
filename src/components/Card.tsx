type typeCard ={
    title: string;
    phone?: number;
    val?:number;
}

function TextComp({text}:any){
    return(
        <p>{text}</p>
    )
}

function Card({title, phone, val=30}:typeCard){
    return(
        <>
            <p>{title}</p>
            {val > 20 ? <p>{2+2}</p> : <p>{3+3}</p> }
            <TextComp text="My name is React"/>
            <p>{phone}</p>
        </>
    )
}
export default Card;