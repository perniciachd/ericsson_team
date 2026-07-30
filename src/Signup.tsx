import { useState } from "react";

function Signup({isUserLoggedIn, updateFlag}: any){
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");


    const signup = ()=>{
        console.log("signup called");
        //updateFlag();
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    }
    return(
        <>
            <p>SignUp</p>
            <p>{JSON.stringify(isUserLoggedIn)}</p>
            <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setusername(e.target.value)} />
            <input type="text" placeholder="Enter Password" value={password} onChange={(e => setpassword(e.target.value))}/>
            <button onClick={signup}>SignUp</button>
        </>
    )

}
export default Signup;