type typeTitle ={
    title:string;
    cssName?: any;
};
function Tile({title, cssName }:typeTitle){
    return(
        <>
            <span className={cssName}>{title}</span>
        </>
    )
}
export default Tile;