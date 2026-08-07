import { useState } from "react";
import { useNavigate } from "react-router";
import "./Login.css";
import { useAuth } from "../../context/AuthContext";

function Login(){
  // let isAuthenticated = false;
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [showError,setShowError]=useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    const success = await login(username, password);
    if (success) {
		  sessionStorage.setItem("username", username);
      navigate("/explorefunds", { replace: false });
    } else {
      setShowError(true);
      return;
    }
    setShowError(false);
  }
  return(
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>📈 SIP<span className="tracker-text">Tracker</span></h1>
          <p className="login-subtitle">Sign in to explore funds and invest</p>
        </div>

        {showError && <div className="form-err" style={{marginBottom: "14px"}}>Enter a username and password</div>}

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input 
            id="username"
            type="text" 
            placeholder="Enter your username" 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            id="password"
            type="password" 
            placeholder="••••••••" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <button className="login-button" onClick={handleLogin}>Log in</button>

        <div className="login-info">
          <p>Demo — any username and password works. Data saves in <span className="localStorage-link">localStorage</span>.</p>
        </div>

        <button className="dark-mode-btn">🌙 Dark</button>
      </div>
    </div>
  )
}
export default Login;