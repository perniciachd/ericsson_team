import { useState } from 'react'
import {createBrowserRouter } from 'react-router'
import { RouterProvider } from "react-router/dom";
import './App.css'
import Login from './components/pages/Login';
import Product from './components/Product';
 
const router: any = createBrowserRouter([
  
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/product",
    element: <Product/>
  }
 
]);
function App() {
return(
<RouterProvider router={router}>
</RouterProvider>
)
 
  
}
export default App