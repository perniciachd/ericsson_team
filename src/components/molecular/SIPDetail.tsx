import Tile from "../atomic/Tile";

type props = {

}

function SIPDetail({title,name,title2}: any) {
    return (
        <><div>
        <div>{name}</div>
        <div><Tile title={title} /></div>
        <Tile title={title2} />
        </div>
        </>
    )
}

export default SIPDetail;