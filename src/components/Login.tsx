import { useState } from "react";
import Home from "./Home";
import SearchBox from "./Uncontrolled";
import { NavLink, Outlet, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // let isAuthenticated = false;
    //const [isUserAuth,setIsUserAuth]=useState(false);
    // const changeAuth = ()=>{
    //     setIsUserAuth(false);
    // }

    // no more local isUserAuth state, no more props
  const { isUserAuth, login } = useAuth();
    const handleLogin=()=>{
        //
        const usernameFromLocalStorage = localStorage.getItem('username');
        const passwordFromLocalStorage = localStorage.getItem('password');
        console.log(usernameFromLocalStorage, passwordFromLocalStorage);
        if(username === usernameFromLocalStorage && password === passwordFromLocalStorage){
            // setIsUserAuth(true);
             login(username);
            
        }
        navigate('/signup');
    }
    if(!isUserAuth){
        return(
            <>
            <p>Login</p>
            <SearchBox/>
            <Outlet/>
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