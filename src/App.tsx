import { useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Inc from "./components/Inc";
function App() {
  const [abc, setIsUserLoggedIn] = useState(false);
  // Call the function to update the isUserLoggedIn
  // const def = ()=>{
  //   console.log('Calling from child');
  //   setIsUserLoggedIn(true);
  // }
  // if(abc){
  //   return(<Login/>)
  // }
  // return(<SignUp isUserLoggedIn={abc} updateFlag={def}/>)
  return(
    <>
    <Inc/>
    </>
  )
}
 
export default App