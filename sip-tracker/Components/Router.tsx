import { createBrowserRouter, Navigate } from "react-router";
import Layout from "./Layout";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import ExploreFunds from "./ExploreFunds";
import MyPortfolio from "./MyPortfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Navigate to="explore-funds" replace />,
          },
          {
            path: "explore-funds",
            element: <ExploreFunds />,
          },
          {
            path: "portfolio",
            element: <MyPortfolio />,
          },
        ],
      },
    ],
  },
]);

export default router;