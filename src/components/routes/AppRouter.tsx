import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "../pages/Login";
import Market from "../Market";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/market"
          element={<Market />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;