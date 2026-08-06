import { useEffect } from "react";
import { useUser } from "../../context/UserContext";

function Example(){
    const { name } = useUser();
    // useEffect(()=>{
    //     changeName(name);
    // },[])
    return(
        <>
            <span>{name}</span>
        </>
    )
}
export default Example;