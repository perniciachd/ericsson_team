import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './Login'
import Logout from './Logout'
import Increment from './Increment'
import Signup from './Signup'

function App() {
  const [registered, setIsUserLoggedIn] = useState(false);
  const def= ()=>{
    console.log("Calling from Child");
    setIsUserLoggedIn(true);
  }
  if(registered){
    return <Login/>
  }
  return (<Signup isUserLoggedIn={registered} updateFlag={def}/>)
  // if(isUserLogged){
  //   return <Login/>
  // } else {
  //   return <Logout/>
  // }
  // return (
  //   <div>
  //     <Increment/>
  //   </div>
  // )
  // return (
  //   <div>
  //     {isUserLogged ? <Login /> : <Logout />}
  //   </div>
  // );
}

export default App
