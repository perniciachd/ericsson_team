import { NavLink, useNavigate } from "react-router";
import Button from "../atomic/Button";
import "./header.css";
import { useTheme } from "../../context/ThemeContext";

function Header() {
  	const navigate = useNavigate();
	const { themeColor, changeThemeColor } = useTheme();

	const handleLogout=() => {
		console.log("inside logout");
		sessionStorage.removeItem("username");
    	navigate("/", { replace: true });
	}

	const handleChangeTheme=() => {
		console.log("themeColor: ", themeColor);
		// if(themeColor == "Light"){
			changeThemeColor("Dark");
		// } else {
		// 	changeThemeColor("Light");
		// }
	}

	return (
		<>
			<header className="header">
				<div className="header-left">
					<span className="header-icon">📋</span>
					<span className="header-title">
						SIP <span className="header-title-highlight">Tracker</span>
					</span>
				</div>
				<div className="header-right">
					<span className="header-username">{sessionStorage.getItem("username")}</span>
					<Button title={themeColor} leftIcon={ themeColor == "Dark" ? '🌙' : '☀️' }  btnClicked={handleChangeTheme} cssStyle="header-btn dark-btn"/>
					<Button title="Log out" rightIcon=" ←" btnClicked={handleLogout} cssStyle="header-btn logout-btn"/>
				</div>
			</header>
			<div className="app">
				<div className="tabs">
					<nav><NavLink to='/explorefunds'>{({ isActive }) => <button className={`tab-btn${isActive ? " on" : ""}`}>Explore funds</button>}</NavLink></nav>
					<nav><NavLink to='/portfolio'>{({ isActive }) => <button className={`tab-btn${isActive ? " on" : ""}`}>My portfolio</button>}</NavLink></nav>
				</div>
			</div>
		</>
	);
};

export default Header;
