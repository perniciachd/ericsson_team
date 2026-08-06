import './App.css'
import Login from './components/Login'
import { createBrowserRouter,RouterProvider } from 'react-router'
import UserForm from './components/Uform'
import { store } from "./store";

// import { RouterProvider } from 'react-router'
import Product from './Product'
import Home from './components/Home'
import { UserProvider } from './components/context/UserContext'
import { Provider } from 'react-redux'
import UserComp from './UserComp';

const router: any = createBrowserRouter([
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
  },
    {
    path: "/form",
    element: <UserForm /> 
  },
   {
    path: "/user",
    element: <UserComp/>,
  },s
]);

function App() {
  return (
    <Provider store={store}>
  <UserProvider>
<RouterProvider router={router}>
       </RouterProvider>
      </UserProvider>
      </Provider>
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

