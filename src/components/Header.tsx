import { useNavigate } from "react-router";
import { useState } from "react";
import Logo from "./atomic/Logo";
import Button from "./atomic/Button";

const Header = () => {
  const navigate = useNavigate();
  const [dark,setDark] = useState(false);
  const username =
    sessionStorage.getItem("sip.tracker.auth") || "admin";
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };
  const logout = () => {
    sessionStorage.removeItem("sip.tracker.auth");
    navigate("/");
  };
  return (
 <header className="appbar">
      <div className="brand">
        <Logo />
      </div>
      <div className="bar-right">
        <span className="who">
          {username}
        </span>
        <Button
          text={dark ? "☀ Light" : "☾ Dark"}
          onClick={toggleTheme}
        />
        <Button
          text="Log out"
          onClick={logout}
        />
      </div>
    </header>
  );
};


export default Header;