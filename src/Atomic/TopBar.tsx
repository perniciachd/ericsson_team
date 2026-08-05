import DarkTheme from "./DarkTheme";
import Logout from "./Logout";
import { useUserContext } from "../Context/UserContext";

function TopBar() {
  const { userName } = useUserContext();

  return (
    <div>
      <span>SIP Tracker</span>
      <span>{userName ? `Welcome, ${userName}!` : "Welcome, Guest!"}</span>
      <DarkTheme />
      <Logout />
    </div>
  );
}

export default TopBar;