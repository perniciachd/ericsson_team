import { useState } from "react";

function SignUp({isUserLoggedIn, updateFlag}:any){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const signup = ()=>{
        console.log(username);
        console.log(password);
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        console.log('Signup working');
        updateFlag();
    }
    return(
        <>
           
            <p>{(isUserLoggedIn)}</p>
            <input type="text" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
           <input type="text" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={signup}>Signup</button>
        </>
    )
}
export default SignUp;