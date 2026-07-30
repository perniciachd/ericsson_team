import { useState } from "react";
import Home from "./Home";
function Login(){
    // let isAuthenticated = false;
    const [isUserAuth,setIsUserAuth]=useState(false);
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const changeAuth = ()=>{
        setIsUserAuth(false);
    }
    const handleLogin=()=>{
        const usernameLocalStorage = localStorage.getItem('username');
        const passwordLocalStorage = localStorage.getItem('password');
        if(username === usernameLocalStorage && password === passwordLocalStorage)
        setIsUserAuth(true);
    }
    if(!isUserAuth){
        return(
            <>
            <p>Login</p>
            <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setusername(e.target.value)} />
            <input type="text" placeholder="Enter Password" value={password} onChange={(e => setpassword(e.target.value))}/>
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