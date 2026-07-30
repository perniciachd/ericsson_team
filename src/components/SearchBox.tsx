import { useEffect, useRef } from "react";

function SearchBox(){
    const inputRef = useRef<HTMLInputElement>(null);
    function search(){
        inputRef.current?.focus();
        console.log(inputRef.current?.value);
    }
    return(
        <>
         <input ref={inputRef} defaultValue="abc"/>
        <button onClick={search}>Search</button>
        </>
    );
}

export default SearchBox;