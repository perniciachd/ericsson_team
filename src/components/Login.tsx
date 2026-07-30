import { useState } from "react";
import Home from "./Home";


function Login(){
    // let isAuthenticated = false;
    const [isUserAuth,setIsUserAuth]=useState(false);
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const changeAuth = ()=>{
        setIsUserAuth(false);
    }
    const handleLogin=()=>{        
        const usernameFromLocalStorage = localStorage.getItem(username);
        const passwordFromLocalStorage = localStorage.getItem(password);
        if(username === usernameFromLocalStorage && password === passwordFromLocalStorage){
        setIsUserAuth(true);   
        }
     }
    if(!isUserAuth){
        return(
            <>
            <p>Login</p>
             <input type="text" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
           <input type="text" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
            </>
        )
        }
    return(
        <>
        <Home parentCall={changeAuth}/>
        </>
    )
}
export default Login;

