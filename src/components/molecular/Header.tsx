import { useNavigate } from "react-router";
import Button from "../atomic/Button";
import "./header.css";

function Header() {
  	const navigate = useNavigate();

	const handleLogout=() => {
		console.log("inside logout");
    	navigate("/");
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
					<span className="header-username">admin</span>
					<Button title="Dark" leftIcon="leftIcon" btnClicked="changeTheme" cssStyle="header-btn dark-btn"/>
					<Button title="Log out" leftIcon="rightIcon" btnClicked={handleLogout} cssStyle="header-btn logout-btn"/>
				</div>
			</header>
			<div className="app">
				<div className="tabs">
					<button className="tab-btn on">Explore funds</button>
					<button className="tab-btn">My portfolio</button>
				</div>
			</div>
		</>
	);
};

export default Header;
