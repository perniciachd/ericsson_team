import { useState } from "react";
import Home from "./Home";
function Login(){
    // let isAuthenticated = false;
    const [isUserAuth,setIsUserAuth]=useState(false);
    const changeAuth = ()=>{
        setIsUserAuth(false);
    }
    const handleLogin=()=>{
        setIsUserAuth(true);
    }
    if(!isUserAuth){
        return(
            <>
            <p>Login</p>
            <button onClick={handleLogin}>Login</button>
            </>
        )
    }
    return(
        <>
<Home parentCall={changeAuth}/>        </>
    )
}
export default Login;
