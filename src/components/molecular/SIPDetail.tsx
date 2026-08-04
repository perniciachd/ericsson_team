import Tile from "../atomic/Tile";

function SIPDetail(){
    const sipname="abc test";
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