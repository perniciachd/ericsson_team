import Button from "../atomic/Button";
import HeaderName from "../atomic/headerName";

function Header(){

    return (
        <>
        
<HeaderName />
<span>abc</span>
<Button title="Dark" leftIcon="lefticon"  />
<Button title="LogOut"  btnClicked="logOut"  />
</>
    )
}
export default Header;