import { useNavigate } from "react-router";
import { useState } from "react";

import Logo from "../atomic/Logo";
import Input from "../atomic/Input";
import Button from "../atomic/Button";
import FormLabel from "../atomic/Label";
import useTheme from "../../context/UseTheme";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { dark, Theme } = useTheme();

  const login = () => {
    if (username && password) {
      sessionStorage.setItem(
        "sip.tracker.auth",
        username
      );
      navigate("/market");
    }
  };

  return (
    <>
      <Logo />
      <p>
        Sign in to explore funds and invest
      </p>
      <FormLabel text="Username"/>
      <Input
        name="username"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <FormLabel text="Password" />
      <Input
        name="password"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        text="Log in"
        onClick={login}
      />
      <p className="hint">
        Demo — any username and password works.
      </p>
      <Button
        text={dark ? "Light" : "Dark"}
        onClick={Theme}
      />
    </>
  );
};

export default Login;