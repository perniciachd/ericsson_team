import Tile from "../atomic/Tile";

function SIPDetail=()=>{
    return(
        <>
        <p>{sipname}</p>
        <Tile title="Equity"/>
        <Tile title="High risk"/>
        <NAV/>
        <MoreInfo/>
        </>
    )
}
export default SIPDetail;