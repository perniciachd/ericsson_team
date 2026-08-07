import { NavLink } from "react-router";
import "../exploreFunds/exploreFunds.css";
import Tile from "../atomic/Tile";

type FundCardProps = { title: string; category: string; riskLevel: string; fundPrice: string; fundGrowth: string };

function FundCard({ title, category, riskLevel, fundPrice, fundGrowth }: FundCardProps) {
	return (
		<>
			<button className="card-btn">
				<span className="info">
					<Tile styleClass="fn" title={title} />
					<span className="meta">
						<Tile styleClass="cat" title={category} />
						<Tile styleClass={`risk ${riskLevel}`} title={`${riskLevel} risk`} />
						<Tile title={`NAV ₹${fundPrice}`} />
					</span>
				</span>
				<span className="side">
					<nav><NavLink to='/invest'>
						<span className="ret up num">{fundGrowth}%<span>1Y</span></span>
						<span className="invest-hint">Invest →</span>
					</NavLink></nav>
				</span>
			</button>
		</>
	);
}

export default FundCard;
