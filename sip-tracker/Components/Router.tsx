import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;