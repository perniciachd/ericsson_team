import { useState } from 'react';
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Provider } from "react-redux";
import { store } from "./store";
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
import Product from './components/Product';
import { AuthProvider } from './context/AuthContext';
import StartSIP from './components/StartSIP';
import { UserProvider } from './context/UserContext';
import Example from './components/atomic/Example';
import Logout from './components/atomic/LogOut';
import UserComp from './UserComp';
import UserForm from './components/UserForm';

const router: any = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
    children:[
      {path:'abc', element:<div>Hello Child Renders</div>},
      {path:'def', element:<div>Hello Child2 Renders</div>}
    ]
  },
  {
    path: "/product",
    element: <Product/>,
    children:[
      {path:'groceries', element:<div>Hello Child Renders</div>},
      {path:'electronis', element:<div>Hello Child2 Renders</div>}
    ]
  },
    {path:'groceries', element:<div>Hello Child Renders</div>},
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/",
    element: <Logout/>,
  },
  {
    path: "/user",
    element: <UserComp/>,
  },
  {
    path:'/usecontext',
    element: <Example/>
  },
  {
    path: "/z",
    element: <StartSIP/>,
  },
  {
    path: "/form",
    element: <UserForm/>,
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
    // <Inc/>
    <Provider store={store}>
      <UserProvider>
    <RouterProvider router={router}>
    </RouterProvider>
    </UserProvider>
    </Provider>
      /* <Button title="Dark" leftIcon={true} rightIcon={false} btnClicked={callDark} cssStyle={class1}/>
      <Button title="Log out" leftIcon={false} rightIcon={false} btnClicked={calllogOut} cssStyle={class1}/>
      <Tile title="Hybrid" cssName={tileCssName}/>
      <Tile title="High risk" cssName={tileCssName}/> 
    <ActionStateForm/> */
   
  )
  // if(abc){
  //   return(<Login/>)
  // }
  // return(<SignUp isUserLoggedIn={abc} updateFlag={def}/>)
}

export default App
