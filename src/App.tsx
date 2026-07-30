import { useState } from 'react'
import './App.css'

import Login from './components/Login.tsx'
import SignUp from './components/Signup.tsx'


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