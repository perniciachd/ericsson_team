import { createBrowserRouter, RouterProvider } from "react-router"
import Login from "./components/Login/Login"
import ExploreFunds from "./components/exploreFunds/exploreFunds"
import Invest from "./components/Invest/Invest"
import { AuthProvider } from "./context/AuthContext"
import { ThemeProvider } from "./context/ThemeContext"
import Portfolio from "./components/portfolio/Portfolio"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/explorefunds",
    element: <ExploreFunds/>
  },
  {
    path: "/portfolio",
    element: <Portfolio/>
  },
  {
    path: "/invest",
    element: <Invest/>
  },
  {
    path: "/",
    element: <Login/>
  }
])
function App() {
  return(
    <>
	 	<ThemeProvider>
			<AuthProvider>
				<RouterProvider router={router}></RouterProvider>
			</AuthProvider>
		</ThemeProvider>
    </>
  )
}
export default App

 