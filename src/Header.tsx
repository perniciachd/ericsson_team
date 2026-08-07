
// function Header(){
//     return (
//         <>
//         <p color="red">this is the header</p>
//         </>
//     )

// }
// export default Header


import Button from "./components/atomic/Button";
import HeaderName from "./components/atomic/HeaderName";

function Header() {
    return (
        <>
            <HeaderName />
            <span>abc</span>
            <Button title="Dark" leftIcon="lefticon" />
            <Button title="LogOut" btnClicked={() => console.log("logOut")} />
        </>
    );
}

export default Header;