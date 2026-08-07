import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import HomePage from "./Pages/HomePage"
import LoginPage from "./Pages/LoginPage"
import FundDetailsPage from "./Pages/FundDetailsPage"
import MyPortfolio from "./Pages/MyPortfolio"
import { ThemeProvider, UserProvider } from "./Context/UserContext"

function UserLayout() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Outlet />
      </UserProvider>
    </ThemeProvider>
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
        path: "/my-portfolio",
        element: <MyPortfolio />
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
