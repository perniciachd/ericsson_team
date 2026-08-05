import StockTile from "../atomic/StockTile";
 
function SipDetails({name,content}:any){
    return(
<>
<p>{name}</p>
<StockTile title={name}/>
<StockTile title={content}/>
</>
 
    )
}
export default SipDetails;