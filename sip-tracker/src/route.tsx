import { createBrowserRouter } from "react-router";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import Funds from "./components/Funds";
import Portfolio from "./components/Portfolio";
import TypeList from "./components/TypeList";
import UserForm from "./components/UserFrom";
import Product from "./Product";

 
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard/>,
        children: [
          { path: "funds", element: <Funds /> },
          { path: "portfolio", element: <Portfolio /> },
          { path: "typeList", element: <TypeList /> },
        ],
      },
      {
        path: "/",
        element: <Login/>,
      },
      {
        path: "/product",
        element: <Product/>,
      },
      {
        path: "/form",
        element: <UserForm/>,
      },
    ],
  },
]);
export default router;