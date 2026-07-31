import { useState } from 'react'
import './App.css'
import Badge from './Badge';
// import Greeting from './Greeting'
// import Button from './components/Button'
// import Card from './components/Card'

import Button from './components/Button';
function App() {
  const [abc, setIsUserLoggedIn] = useState(false);
  const class1 = {
  }
  // Call the function to update the isUserLoggedIn
  const def = ()=>{
    console.log('Calling from child');
    setIsUserLoggedIn(true);
  }
  const callDark=()=>{
    console.log('Dark btn called');
  }
  const calllogOut=()=>{
    console.log('Logout btn called');
  }
  return(
    // <Inc/>
<>

<Button title="Dark" leftIcon={true} rightIcon={false} btnClicked={callDark} cssStyle={class1}/>
<Button title="Log out" leftIcon={false} rightIcon={false} btnClicked={calllogOut} cssStyle={class1}/>
 <Badge text="Equity" variant="equity" />

      <Badge text="High Risk" variant="highRisk" />

      <Badge text="Low Risk" variant="lowRisk" />

      <Badge text="Profit" variant="profit" />
</>
  );
  return(
    <>
    
    </>
  )
  // if(abc){
  //   return(<Login/>)
  // }
  // return(<SignUp isUserLoggedIn={abc} updateFlag={def}/>)
}
export default App