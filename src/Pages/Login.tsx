import { useState } from "react";
import {useNavigate} from "react-router-dom";
// import Home from "./Home";
import Button from "../components/Button";
import Logo from "../atomic/Logo";
import Input from "../atomic/Input";
// import Button from "../atomic/Button";
const Login =()=>{
const navigate=useNavigate();
const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
 const [dark,setDark] = useState(false);
const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };
//   const { name } = useUser();
 
const login=()=>{
 if(username && password){
 sessionStorage.setItem(
 "sip.tracker.auth",
 username
 );
 navigate("/market");
 }
};
   return(
<>
<Logo/>
<p>
Sign in to explore funds and invest
</p>
{/* <span>{name}</span> */}
<Input
label="Username"
placeholder="Enter your username"
value={username}
onChange={(e:any)=>setUsername(e.target.value)}
/>
<Input
label="Password"
type="password"
placeholder="••••••••"
value={password}
onChange={(e:any)=>setPassword(e.target.value)}
/>
<Button
text="Log in"
onClick={login}
/>
<p className="hint">
Demo — any username and password works.
</p>
<Button
          text={dark ? "Light" : "Dark"}
          onClick={toggleTheme}
        />
</>
)
}


export default Login;