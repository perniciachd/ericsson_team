import { useState } from 'react'
import './App.css'
// import Greeting from './Greeting'
// import Button from './components/Button'
// import Card from './components/Card'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ZForm from './components/ZForm';
import Inc from './components/Inc';
import Button from './components/atomic/Button';
import Tile from './components/atomic/Tile';
import ActionStateForm from './components/ActionStateForm';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Header from './components/molecular/Header';
import SIPDetail from './components/molecular/SIPDetail';
import Product from './components/product';
const router: any = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/",
    element: <SignUp/>,
  }
]);


function App() {
  const [abc, setIsUserLoggedIn] = useState(false);
  const tileCssName={};
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
    <>
    <Header/>
    {/* <SIPDetail  /> */}
    <Product />
    </>
    // <RouterProvider router={router}>
      
    //   {/* <Button title="Dark" leftIcon={true} rightIcon={false} btnClicked={callDark} cssStyle={class1}/>
    //   <Button title="Log out" leftIcon={false} rightIcon={false} btnClicked={calllogOut} cssStyle={class1}/>
    //   <Tile title="Hybrid" cssName={tileCssName}/>
    //   <Tile title="High risk" cssName={tileCssName}/> */}
    // {/* <ActionStateForm/> */}
    // </RouterProvider>
  )
  // if(abc){
  //   return(<Login/>)
  // }
  // return(<SignUp isUserLoggedIn={abc} updateFlag={def}/>)
}

export default App
