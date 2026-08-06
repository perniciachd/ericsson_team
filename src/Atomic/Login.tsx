import { useState } from "react";
import { useNavigate } from "react-router";
import { useUserContext } from "../Context/UserContext";

function Login() {
  const [isUserAuth, setIsUserAuth] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUserContext();
  ;
  const navigate = useNavigate();


  const handleLogin = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    setUser(username);
    setIsUserAuth(true);
    console.log("Login successful, username set in context:", username);
    navigate("/home");
  };

  if (!isUserAuth) {
    console.log("Rendering login form, current username:", username);
    return (
      <>
        <p>Login</p>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </>
    );
  }

  return <p>Welcome, {username}</p>;
}

export default Login;