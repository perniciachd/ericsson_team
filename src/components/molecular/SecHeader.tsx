export default function SecHeader({ title, subTitle }: { title: string; subTitle: string }) {
	return (
		<>
			<div className="page-head">
				<div>
					<h2>{title}</h2>
					<div className="sub">{subTitle}</div>
				</div>
			</div>
		</>
	);
}
