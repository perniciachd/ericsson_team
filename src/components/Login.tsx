import { useState } from "react";
import Home from "./Home";
import SearchBox from "./Uncontrolled";
import { useUser } from "./context/UserContext";
import { useNavigate } from "react-router";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isUserAuth, setIsUserAuth] = useState(false);
    const { changename } = useUser();
    const navigate = useNavigate();

    const changeAuth = () => {
        setIsUserAuth(false);
    };

    const handleLogin = () => {
        const usernameFromLocalStorage = localStorage.getItem("username") || sessionStorage.getItem("username");
        const passwordFromLocalStorage = localStorage.getItem("password") || sessionStorage.getItem("password");

        if (username.trim() === usernameFromLocalStorage && password.trim() === passwordFromLocalStorage) {
            setIsUserAuth(true);
            changename(username);
            navigate("home");
        }
    };

    if (!isUserAuth) {
        return (
            <><p>SIP Tracker App</p>
                <p>Login</p>
                <SearchBox />
                <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </>
        );
    }

    return <Home parentCall={changeAuth} />;
}

export default Login;