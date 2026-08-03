import React, { useEffect, useRef, useState } from "react";
import BasicComp from "./BasicComp";
const Employees = [{
    name: "Sumit",
    dept:"Engg"
},
{
    name: "Harsh",
    dept:"Operations"
},
{
    name: "Anaya",
    dept:"Support"
}];
function Inc(){
    //let val = 0;
    const [val, setVal]=useState(0);
    const [name, setName]=useState("");
    const inputRef = useRef<any>(null);
    useEffect(()=>{
        inputRef.current.focus();
        // API calls 
    },[name,val]) 
    
    const inc = ()=>{
        console.log('button clicked');
        setVal(val+1); 
    }
    const dec = ()=>{
        console.log('button clicked');
        setVal(val-1); 
    }
    return(
        <>
            <p>{val}</p>
            {/* {Employees.map((obj,i)=>{
                return(
                    <React.Fragment key={i}>  
                        <BasicComp obj={obj}/>
                    </React.Fragment>
                )
            })} */}
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <input ref={inputRef} type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
            <button onClick={inc}>Inc</button> 
            <button onClick={dec}>Dec</button>
        </>
    )
}
export default Inc;