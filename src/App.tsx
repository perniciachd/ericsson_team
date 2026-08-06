import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserProvider } from "./context/UserContext";
import './App.css';
import Product from './components/Product';
import Login from './Pages/Login';
import Market from './molecules/Market';
import UseForm from './components/forms/UseForm';
 import { Provider } from "react-redux";
import { store } from "./components/Store";
import UserComp from './components/UserComp';
import ContextForm from './components/forms/ContextForm';
import Example from './atomic/Example';

const router: any = createBrowserRouter([
  
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/product",
    element: <Product/>
  },
  {
    path:"/market",
    element:<Market/>
  },
  {
    path:"/UseForm",
    element:<UseForm/>
  },
  {
    path:"/user",
    element:<UserComp/>
  },
  {path:"useContext",
    element:<ContextForm/>
  },
  {
    path:"/userContext",
    element:<Example/>
  }
 
]);
function App() {
return(
<Provider store={store}>
      <UserProvider>
    <RouterProvider router={router}>
    </RouterProvider>
    </UserProvider>
    </Provider>
)
 
  
}
export default App