import { NavLink } from "react-router";
import { useUser } from "../../context/UserContext";
import Example from "./Example";

function Logout(){
    //const logout="";
 const { name, changeName } = useUser();
 const logout=()=>{
    changeName('Simran');
 }
    return(
        <>
        <span>{name}</span>
        <button onClick={logout}>Logout</button>
        <nav><NavLink to="usecontext">Example</NavLink></nav>
        {/* <Example/> */}
        </>
    )
}
export default Logout;