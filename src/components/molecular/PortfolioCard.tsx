import "../exploreFunds/exploreFunds.css";
import Tile from "../atomic/Tile";

type Props = { name: string; type: string; sip: string; paid: number; value: number; gain: number };

export default function PortfolioCard({ name, type, sip, paid, value, gain }: Props) {
	return (
		<button className="card-btn">
			<span className="info">
				<Tile styleClass="fn" title={name} />
				<span className="meta">
					<Tile styleClass="cat" title={type} />
					<Tile title={sip} />
					<Tile title={`${paid} paid`} />
				</span>
			</span>
			<span className="side">
				<span className="ret up num">+{gain}%<span>1Y</span></span>
				<span className="v">₹{value.toLocaleString()}</span>
			</span>
		</button>
	);
}
