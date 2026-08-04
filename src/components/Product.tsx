import React, { useEffect, useState } from "react";

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

                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                const data = await response.json();

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

            {val.map((obj,key)=>{

                return(
<React.Fragment>
<p>{obj.name}</p>
</React.Fragment>

                )

            })}
</>

    )

}

export default Product;
 