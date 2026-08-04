import React, { useEffect, useState } from "react";
import axios from "axios";
function Product(){
    const [val,setVal] = useState<{ name: string }[]>([]);
    useEffect(()=>{
        console.log('API call');
        async function getData(){
            try{
                // const response = await fetch('https://jsonplaceholder.typicode.com/users');
                // const data = await response.json();
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                const {data} = response;
                console.log(data);
                setVal(data);
            }
            catch(error){
                console.log(error);
            }
        }
        getData();
    },[])
    return(
    <>
        <p>Product List</p>
        {val.map((obj: { name: string }, key: number)=>{
        return(
            <React.Fragment key={key}>
                <p>{obj.name}</p>
            </React.Fragment>
        )
    })}          
    </>
    )
}
export default Product;