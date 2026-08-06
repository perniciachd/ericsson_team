import Button from "../../atomic/Button";
import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";

function ContextForm() {
  const { name, setName } = useUser(); 
  const handleChangeName = () => {
    setName("vjvijji");
  }    
  return(
    <>
    <p>{name}</p>
    <Button text="Change Name" onClick={handleChangeName    } />
         <nav><NavLink to="/userContext">User Context</NavLink></nav>
    </>
  );
}
export default ContextForm;