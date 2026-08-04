export default function SearchFilter() {
	return(
		<div className="toolbar">
			<input className="search" placeholder="Search funds…" />
			<div className="seg">
				<button className="seg-btn on">All</button>
				<button className="seg-btn">Equity</button>
				<button className="seg-btn">Debt</button>
				<button className="seg-btn">Hybrid</button>
				<button className="seg-btn">Index</button>
			</div>
		</div>
	)
}