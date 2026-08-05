interface typeTitle{
    title:string;
    cssName?: any;
}
function StockTile({title, cssName }:typeTitle){
    return(
<>
<span className={cssName}>{title}</span>
</>
    )
}
export default StockTile;