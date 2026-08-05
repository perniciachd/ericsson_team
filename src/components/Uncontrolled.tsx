import { useEffect, useRef } from "react";

function SearchBox(){
    useEffect(()=>{
       inputRef.current?.focus();
       //API --
        // false
    },[])
    const inputRef = useRef<HTMLInputElement>(null);
    function search(){
        // inputRef.current?.focus(); 
        console.log(inputRef.current?.value);
    }
    return(
        <>
            <input ref={inputRef} defaultValue=""/>
            <button onClick={search}>Search</button>
        </>
    )
}
export default SearchBox;


