export default function SecHeader({title,subTitle}: any) {
	return(
		<>
			<div className="page-head">
				<div>
					<h2>{title}</h2>
					<div className="sub">{subTitle}</div>
				</div>
			</div>
		</>
	)
}