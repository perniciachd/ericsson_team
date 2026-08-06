import React, { useEffect, useState } from "react";
// import axios from "axios";
// import SipDetails from '../molecules/SipDetails';
 
 type Fund={
  id:number;
  name:string;
  category:string;
  nav:number;
  risk:string;
}
  
function Product(){
  const [funds,setFunds] = useState<Fund[]>([]);
  useEffect(()=>{
        console.log('API called');
        async function getData(){
            try{
                const {data} = await axios.get('/funds.json');
                console.log(data);
                setFunds(data.funds);
            }
            catch(error){
                console.log(error);
            }
        }
        getData();
    },[])
    return(
    <>
        {funds.map((obj)=>{
            return(
        <SipDetails
        name={obj.name}
        title={obj.category}
        title2={obj.risk}/>
            )
        })
        }
    </>
    )
}
export default Product;