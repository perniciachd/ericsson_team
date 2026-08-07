function Tile({title, styleClass}: { title: string; styleClass?: string }) {
	return(
		<>
			<p className={styleClass}>{title}</p>
		</>
	)
}

export default Tile;