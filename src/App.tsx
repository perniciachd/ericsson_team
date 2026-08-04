import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Login from "./Pages/SignIn";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;