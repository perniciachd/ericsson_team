const CATEGORIES = ["All", "Equity", "Debt", "Hybrid", "Index"];

type Props = {
	search: string;
	category: string;
	onSearch: (v: string) => void;
	onCategory: (v: string) => void;
};

export default function SearchFilter({ search, category, onSearch, onCategory }: Props) {
	return (
		<div className="toolbar">
			<input className="search" placeholder="Search funds…" value={search} onChange={(e)=> onSearch(e.target.value)} />
			<div className="seg">
				{CATEGORIES.map((cat) => (
					<button key={cat} className={`seg-btn${category === cat ? " on" : ""}`} onClick={()=> onCategory(cat)}>
						{cat}
					</button>
				))}
			</div>
		</div>
	);
}
