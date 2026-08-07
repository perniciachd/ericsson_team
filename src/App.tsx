import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";


import Login from "./components/pages/Login";
import Market from "./components/Market";
import { ThemeProvider } from './context/UseTheme.tsx';

import "./index.css";
import Example from "./components/Example";
import { UserProvider } from "./context/UserContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/market",
    element: <Market />,
  },
  {
    path: "/context",
    element: <Example/>
  },
]);

function App() {
 return(
  <UserProvider>
  <ThemeProvider>
  <RouterProvider router={router}>
       </RouterProvider>
       </ThemeProvider>
       </UserProvider>
 )
}
 
export default App;