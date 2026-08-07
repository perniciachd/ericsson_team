import { useNavigate } from "react-router";
import { useState } from "react";
import Logo from "./atomic/Logo";
import Button from "./atomic/Button";
import useTheme from "../context/UseTheme";

const Header = () => {
  const navigate = useNavigate();
  const { dark, Theme } = useTheme();
  const username =
    sessionStorage.getItem("sip.tracker.auth");
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
        text={dark ? "Light" : "Dark"}
        onClick={Theme}
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