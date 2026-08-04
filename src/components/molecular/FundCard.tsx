import { NavLink } from "react-router";
import "../exploreFunds.css";
import Tile from "../atomic/Tile";

function FundCard({title,fundType,riskLevel,fundPrice,fundGrowth}: any) {
	return(
		<>
			<button className="card-btn">
				<span className="info">
					<Tile styleClass="fn" title={title} />
					<span className="meta">
						<Tile styleClass="cat" title={fundType} />
						<Tile styleClass={`risk ${riskLevel}`} title={`${riskLevel} risk`} />
						<Tile title={`NAV ₹${fundPrice}`} />
					</span>
				</span>
				<span className="side">
					<nav><NavLink to='/invest'>
						<span className={`ret up num`}>{fundGrowth}%<span>1Y</span></span>
						<span className="invest-hint">Invest →</span>
					</NavLink></nav>
				</span>
			</button>
		</>
	)
}

 export default FundCard;