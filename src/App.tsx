import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import HomePage from "./Pages/HomePage"
import LoginPage from "./Pages/LoginPage"
import FundDetailsPage from "./Pages/FundDetailsPage"
import { UserProvider } from "./Context/UserContext"

function UserLayout() {
  return (
    <UserProvider>
      <Outlet />
    </UserProvider>
  );
}
const router = createBrowserRouter([
  {
    element: <UserLayout/>,
    children: [
      {
        path: "/home",
        element: <HomePage/>
      },
      {
        path: "/",
        element: <LoginPage/>
      },
      {
        path: "/fund-details",
        element: <FundDetailsPage/>
      }
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
