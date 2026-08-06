import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Product from './components/Product';
import Login from './Pages/Login';
import Market from './Market';
 
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
  }
 
]);
function App() {
return(
<RouterProvider router={router}>
</RouterProvider>
)
 
  
}
export default App