import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      alert("No account found. Please Signup.");
      navigate("/signup");
      return;
    }

    const user = JSON.parse(storedUser);

    if (
      email === user.email &&
      password === user.password
    ) {

      localStorage.setItem("isLoggedIn", "true");

      alert("Login Successful");

      navigate("/dashboard");

    } else {

      alert("Invalid Credentials");

      navigate("/signup");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-20">

      <h1 className="text-3xl font-bold">Login</h1>

      <input
        type="email"
        placeholder="Enter Email"
        className="border p-2 rounded w-72"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        className="border p-2 rounded w-72"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
  onClick={handleLogin}
  className="bg-blue-600 text-white px-4 py-2 rounded w-72"
>
  Login
</button>

<p className="text-sm">
  Don't have an account?{" "}
  <NavLink
    to="/signup"
    className="text-blue-600 font-semibold hover:underline"
  >
    Sign Up
  </NavLink>
</p>

    </div>
  );
}

export default Login;