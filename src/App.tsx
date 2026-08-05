import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";


import Login from "./components/pages/Login";
import Market from "./components/Market";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/market",
    element: <Market />,
  },
]);

function App() {
 return(
  <RouterProvider router={router}>
       </RouterProvider>
 )
}
 
export default App;