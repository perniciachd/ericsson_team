import React, { useEffect, useState } from "react";
import axios from "axios";
import SIPDetail from "./components/molecular/SIPDetail";

type Fund = {
    id: string;
    name: string;
    category: string;
    nav: number;
    return: number;
    risk: string;
};

function Product() {
    const [funds, setFunds] = useState<Fund[]>([]);

    useEffect(() => {
        console.log("API call");

        async function getData() {
            try {
                // const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
                 const { data } = await axios.get("/funds.json");
                console.log(data);
                setFunds(data);
            } catch (error) {
                console.log(error);
            }
        }

        getData();
    }, []);

   return(

        <>
        {funds.map((obj) => {
            return(
            <SIPDetail name={obj.name} 
            title={obj.category}
            title2={obj.risk}
             />
            )
        })
    }
    </>

           
    );
}

export default Product;