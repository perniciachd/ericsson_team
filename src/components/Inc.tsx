import React from "react";
import { useEffect, useState } from "react";
import BasicComponent from "./BasicComponent";

const emp=[
    {
    name:"sumit",
    dept:"IT"
},
 {
    name:"Rahul",
    dept:"NOn-IT"
},
 {
    name:"john",
    dept:"BPO"
},

]
function Inc(){
const [val, setVal]=useState(0);
useEffect(()=>{
    console.log('hello inc');
},[val])

const inc =()=>{
    console.log('button click');
    setVal(val+1);
}
 const dec= ()=>{
    console.log('button click');
    setVal(val-1);
 }
 return (
    <>
    <p>{val}</p>
    {emp.map((obj,i)=>{
        return(
            <React.Fragment key={i}>
               <BasicComponent obj= {obj} />
                </React.Fragment>
        )
    })}
    <button onClick={inc}>Inc</button>
<button onClick={dec}>Dec</button>
    </>
 )

}
export default Inc;