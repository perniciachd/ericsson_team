import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully!");

    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-20">

      <h1 className="text-3xl font-bold">Signup</h1>

      <input
        type="text"
        placeholder="Enter Name"
        className="border p-2 rounded w-72"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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
        onClick={handleSignup}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Create Account
      </button>

    </div>
  );
}

export default Signup;