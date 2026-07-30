import { useState } from "react";

function Inc(){
    const [val, setval]=useState(0);
    const inc =()=>{
        console.log('button clicked');
        setval(val+1);
    }
    const dec =()=>{
        console.log('button clicked');
        setval(val-1);
    }
    return(
        <>
        <p>{val}</p>
        <button onClick={inc}>inc</button>
        <button onClick={dec}>dec</button>
        </>
    )
}

export  default Inc;