import { useState } from 'react'
import Button from './Button';
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
</>
  )

}
export default App