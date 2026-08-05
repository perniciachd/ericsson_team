import { useUserContext } from "../Context/UserContext";

function Logout() {
  const { setUser } = useUserContext();
  

  const logoutClick = () => {
    console.log("logout called");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    setUser("");
    navigation.navigate("/");
  };

  return <button onClick={logoutClick}>Logout</button>;
}

export default Logout;