import Card from "./Card"

function Button(){
    return (
        <>
        <Card/>
        <button onClick={()=>console.log('Clicked')}>Click Me</button>
        </>
    )
}

export default Button