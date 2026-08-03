import { useState } from "react";

function SignUp({isUserLoggedIn, updateFlag}:any){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const signup = ()=>{
        console.log(username);
        console.log(password);
        console.log('Signup working');
        sessionStorage.setItem('username',username);
        sessionStorage.setItem('password',password);
        localStorage.setItem('username',username);
        localStorage.setItem('password',password);
        updateFlag();
    }
    return(
        <>
            <p>SignUp</p>
            <p>{JSON.stringify(isUserLoggedIn)}</p>
            <input type="text" placeholder="Enter your username" value={username}/>
            <input type="text" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={signup}>Signup</button>
        </>
    )
}
export default SignUp;