import { useState } from "react";
import Home from "./Home";
import SearchBox from "./Uncontrolled";
import { NavLink } from "react-router";
function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // let isAuthenticated = false;
    const [isUserAuth,setIsUserAuth]=useState(false);
    const changeAuth = ()=>{
        setIsUserAuth(false);
    }
    const handleLogin=()=>{
        //
        const usernameFromLocalStorage = localStorage.getItem('username');
        const passwordFromLocalStorage = localStorage.getItem('password');
        console.log(usernameFromLocalStorage, passwordFromLocalStorage);
        if(username === usernameFromLocalStorage && password === passwordFromLocalStorage){
            setIsUserAuth(true);
        }
    }
    if(!isUserAuth){
        return(
            <>
            <p>Login</p>
            <SearchBox/>
            <input type="text" placeholder="Enter your username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input type="text" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
            <nav><NavLink to='/signup'>Signup</NavLink></nav>
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