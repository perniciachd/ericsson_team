import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

import Button from "../atomic/Button";
import FormField from "./FormField";

const LoginForm = () => {
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    usernameRef.current?.focus();
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }
    sessionStorage.setItem("sip.tracker.auth", username);
    navigate("/market");
  };
  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <FormField
        label="Username"
        name="username"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        inputRef={usernameRef}
      />
      <FormField
        label="Password"
        type="password"
        name="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        text="Login"
        type="submit"
      />
    </form>
  );
};

export default LoginForm;