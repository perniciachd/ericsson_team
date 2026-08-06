import React, { useEffect, useState } from "react";
import axios from 'axios';
function Product(){
    const [val,setVal] = useState<any>([]);

    // async function getData(){
    //         try{
    //             const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //             const data = await response.json();
    //             console.log(data);
    //             setVal(data);
    //         }
    //         catch(error){
    //             console.log(error);
    //         }
    // }
    // getData();
    useEffect(()=>{
        console.log('API call');
        async function getData(){
            try{
                // await fetch('/data.json',{cache:'no-store'}).then(res=>{
                //     if(!res.ok) throw new Error(res.status);
                //     return res.json();
                // })
                // .then(setVal)
                // .catch(console.error);
            
                // const data = await response.json();
                // const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
                //console.log(response);
                //const data = response.data;
                // console.log(data);

                const {data} = await axios.get('/data.json');
                console.log(data);
                setVal(data);
            }
            catch(error){
                console.log(error);
            }
        }
        getData();
    },[])
    if(val && val.length>0){
return(
        <>
            <p>Product List</p>
            {val.map((obj)=>{
                return(
                    <React.Fragment key={obj.id}>
                        <p>{obj.name}</p>
                    </React.Fragment>
                )
            })}
        </>
    )
    }
    return(
        <p>No Data</p>
    )
    
}
export default Product;