import { useState } from "react";
function SignUp({isUserLoggedIn, updateFlag}:any){
    const [userName, setUsername]=useState("");
    const [password, setPassword]=useState("");
    sessionStorage.setItem('userName',userName);
    sessionStorage.setItem('password',password);
    localStorage.setItem('userName',userName);
    localStorage.setItem('password',password);

    const signup = ()=>{
        console.log('Signup working');
        updateFlag();
    }
    return(
        <>
            <p>SignUp</p>
            <p>{JSON.stringify(isUserLoggedIn)}</p>
            <input type="text" placeholder="enter username" value={userName} onChange={(e)=>setUsername(e.target.value)}/>
            <input type="text" placeholder="enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/> 
            <button onClick={signup}>Signup</button>
        </>
    )
}
export default SignUp;