//import { useUserContext} from "../components/context/UserContext";
// import DarkTheme from "./DarkTheme";
import Logout from "./LogOut";
import Dark from "./atomic/Dark";
import { useUser } from "./context/UserContext";

// function TopBar({ onLogout }: { onLogout?: () => void }) {

//     return (
//         <div style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             padding: "10px 16px",
//             borderBottom: "1px solid #ddd"
//         }}>
//             <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//                 <span aria-hidden="true">📡</span>
//                 <strong>SIP Tracker</strong>
//             </div>

//             <div style={{ display: "flex", gap: "8px" }}>
//                 <button>Dark</button>
//                 <button onClick={onLogout}>Logout</button>
//             </div>
//         </div>
//     );
      
// }

function TopBar({ onLogout }: { onLogout?: () => void }) {
    const {name} = useUser();
    if(name)
  return (
    <div>
      <span>SIP Tracker</span>
      <span>`Welcome, ${name}!`</span>
      <Dark />
      <Logout />
    </div>
  )
  return(
    <div>
      <span>SIP Tracker</span>
      <span>Welcome, Guest!</span>
      <Dark />
      <Logout />
    </div>
  )

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 16px",
            borderBottom: "1px solid #ddd"
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span aria-hidden="true">📡</span>
                <strong>SIP Tracker</strong>
            </div>

            <div style={{ display: "flex", gap: "8px" }}>
                <button>Dark</button>
                <button onClick={onLogout}>Logout</button>
            </div>
        </div>
    );
      
}


// function TopBar() {
//   const { userName } = useUserContext();
 
//   if(userName)
//   return (
//     <div>
//       <span>SIP Tracker</span>
//       <span>`Welcome, ${userName}!`</span>
//       <DarkTheme />
//       <Logout />
//     </div>
//   )
//   return(
//     <div>
//       <span>SIP Tracker</span>
//       <span>Welcome, Guest!</span>
//       <DarkTheme />
//       <Logout />
//     </div>
//   )
 
// }
 



export default TopBar;