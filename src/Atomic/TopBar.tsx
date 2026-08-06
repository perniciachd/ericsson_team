import DarkTheme from "./DarkTheme";
import Logout from "./Logout";
import { useUserContext } from "../Context/UserContext";

function TopBar() {
  const { userName } = useUserContext();

  if(userName)
  return (
    <div>
      <span>SIP Tracker</span>
      <span>`Welcome, ${userName}!`</span>
      <DarkTheme />
      <Logout />
    </div>
  )
  return(
    <div>
      <span>SIP Tracker</span>
      <span>Welcome, Guest!</span>
      <DarkTheme />
      <Logout />
    </div>
  )
}

export default TopBar;
