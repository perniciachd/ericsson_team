import { useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  const [abc, setIsUserLoggedIn] = useState(false);
  // Call the function to update the isUserLoggedIn
  const def = ()=>{
    console.log('Calling from child');
    setIsUserLoggedIn(true);
  }
  if(abc){
    return(<Login/>)
  }
  return(<SignUp isUserLoggedIn={abc} updateFlag={def}/>)
}
 
export default App