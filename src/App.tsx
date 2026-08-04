import { createBrowserRouter, RouterProvider } from "react-router"
import Login from "./components/Login/Login"
import ExploreFunds from "./components/exploreFunds/exploreFunds"

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
    path: "/",
    element: <Login/>
  }
])
function App() {
  return(
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}
export default App

 