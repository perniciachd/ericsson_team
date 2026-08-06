import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";

// import { useUser } from "../context/UserContext";

const Header = () => {
  const navigate = useNavigate();
  const [dark,setDark] = useState(false);
  const username =
    sessionStorage.getItem("sip.tracker.auth") || "admin";
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };
//   const {name,setName}=useUser();
  const logout = () => {
    // setName('abc');
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
        {/* <span>{name}</span> */}
        <Button
          text="Log out"
          onClick={logout}
        />
        <nav><NavLink to="/userContext">User Context</NavLink></nav>
      </div>
    </header>
  );
};


export default Header;