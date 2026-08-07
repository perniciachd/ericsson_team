import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";
import type { ButtonHTMLAttributes, CSSProperties } from "react";

type LogoutProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & {
  style?: CSSProperties;
  onLogout?: () => void;
};

function Logout({ style, onLogout, ...rest }: LogoutProps) {
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const logoutClick = () => {
    console.log("logout called");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    setUser("");
    onLogout?.();
    navigate("/");
  };

  return (
    <button {...rest} style={style} onClick={logoutClick}>
      Logout
    </button>
  );
}

export default Logout;