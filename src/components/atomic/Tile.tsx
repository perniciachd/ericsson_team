function Tile({title, styleClass}: any) {
	return(
		<>
			<span className={styleClass}>{title}</span>
		</>
	)
}

export default Tile;