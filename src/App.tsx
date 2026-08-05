import './App.css'
import { useState } from 'react'
import './App.css'
// import Greeting from './Greeting'
// import Button from './components/Button'
// import Card from './components/Card'
import Login from './components/Login'
import {createBrowserRouter} from 'react-router'
import SignUp from './components/SignUp'
import ZForm from './components/ZForm';
import Inc from './components/Inc';
import Button from './components/atomic/Button';
import Tile from './components/atomic/Tile';
import ActionStateForm from './components/ActionStateForm';
import {RouterProvider} from 'react-router/dom'
import Product from './Product'
import Home from './components/Home'

const router: any = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/product",
    element: <Product />
  },
  {
    path: "/home",
    element: <Home />
  }
]);

function App() {
  return (
  
<RouterProvider router={router}>
       </RouterProvider>
       )
}

export default App





// function App() {
//   const [abc, setIsUserLoggedIn] = useState(false);
//   const tileCssName={};
//   const class1 = {

//   }
//   // Call the function to update the isUserLoggedIn
//   const def = ()=>{
//     console.log('Calling from child');
//     setIsUserLoggedIn(true);
//   }
//   const callDark=()=>{
//     console.log('Dark btn called');
//   }
//   const calllogOut=()=>{
//     console.log('Logout btn called');
//   }
//   return(
//     // <Inc/>
//     <>
//     {/* <Button title="Dark" leftIcon={true} rightIcon={false} btnClicked={callDark} cssStyle={class1}/>
//     <Button title="Log out" leftIcon={false} rightIcon={false} btnClicked={calllogOut} cssStyle={class1}/>
//     <Tile title="Hybrid" cssName={tileCssName}/>
//     <Tile title="High risk" cssName={tileCssName}/> */}
//     <ActionStateForm/>
//     </>
//   )
//   // if(abc){
//   //   return(<Login/>)
//   // }
//   // return(<SignUp isUserLoggedIn={abc} updateFlag={def}/>)
// }

